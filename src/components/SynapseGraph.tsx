import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Concept } from '../types';
import { Network, Sparkles, Filter, BookOpen } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface SynapseGraphProps {
  concepts: Concept[];
  onSelectConcept: (conceptId: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

interface Node {
  id: string;
  concept: Concept;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const SynapseGraph: React.FC<SynapseGraphProps> = ({
  concepts,
  onSelectConcept,
  selectedCategory,
  onSelectCategory
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number | null>(null);

  // Initialize nodes in circular/organic constellation
  const initNodes = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const count = concepts.length;

    const filtered = selectedCategory === 'All' 
      ? concepts 
      : concepts.filter(c => c.category === selectedCategory);

    const nodes: Node[] = filtered.map((c, idx) => {
      const angle = (idx / count) * Math.PI * 2;
      const dist = 180 + (idx % 3) * 70;
      return {
        id: c.id,
        concept: c,
        x: centerX + Math.cos(angle) * dist + (Math.random() - 0.5) * 40,
        y: centerY + Math.sin(angle) * dist + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 18 + (c.deepDive.length * 2)
      };
    });

    nodesRef.current = nodes;
  }, [concepts, selectedCategory]);

  useEffect(() => {
    initNodes();
    const handleResize = () => initNodes();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initNodes]);

  // Physics animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

      const nodes = nodesRef.current;
      const width = canvas.width;
      const height = canvas.height;

      // Update positions with subtle floating
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce softly off screen bounds
        if (node.x < 60 || node.x > width - 60) node.vx *= -1;
        if (node.y < 80 || node.y > height - 80) node.vy *= -1;
      }

      // Clear with deep space canvas
      ctx.fillStyle = '#07090e';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle background neural grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const step = 45;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw synaptic connections (Edges)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const isRelated = a.concept.relatedConceptIds.includes(b.id) || b.concept.relatedConceptIds.includes(a.id);
          const isCategoryMatch = a.concept.category === b.concept.category;

          if (isRelated || isCategoryMatch) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 450) {
              const isHovered = hoveredNode?.id === a.id || hoveredNode?.id === b.id;
              
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);

              if (isHovered) {
                ctx.strokeStyle = 'rgba(129, 140, 248, 0.7)';
                ctx.lineWidth = 2.5;
                ctx.shadowColor = '#6366f1';
                ctx.shadowBlur = 12;
              } else if (isRelated) {
                ctx.strokeStyle = 'rgba(99, 102, 241, 0.25)';
                ctx.lineWidth = 1.5;
                ctx.shadowBlur = 0;
              } else {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
                ctx.lineWidth = 0.8;
                ctx.shadowBlur = 0;
              }
              ctx.stroke();
              ctx.shadowBlur = 0; // reset
            }
          }
        }
      }

      // Draw Nodes
      for (const node of nodes) {
        const isHovered = hoveredNode?.id === node.id;
        const isConnectedToHover = hoveredNode?.concept.relatedConceptIds.includes(node.id);

        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? node.radius + 6 : node.radius, 0, Math.PI * 2);

        // Gradient node fill
        const grad = ctx.createRadialGradient(node.x, node.y, 2, node.x, node.y, node.radius + 6);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.4, node.concept.accentColor);
        grad.addColorStop(1, 'rgba(15, 23, 42, 0.9)');
        ctx.fillStyle = grad;

        if (isHovered || isConnectedToHover) {
          ctx.shadowColor = node.concept.accentColor;
          ctx.shadowBlur = 25;
        } else {
          ctx.shadowColor = 'rgba(0,0,0,0.5)';
          ctx.shadowBlur = 8;
        }

        ctx.fill();
        ctx.lineWidth = isHovered ? 2.5 : 1;
        ctx.strokeStyle = isHovered ? '#ffffff' : 'rgba(255,255,255,0.2)';
        ctx.stroke();
        ctx.restore();

        // Node Label
        ctx.font = isHovered ? '600 12px Plus Jakarta Sans, sans-serif' : '500 10px Plus Jakarta Sans, sans-serif';
        ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(226, 232, 240, 0.85)';
        ctx.textAlign = 'center';
        ctx.fillText(node.concept.bookTitle, node.x, node.y + node.radius + 14);

        ctx.font = '400 9px JetBrains Mono, monospace';
        ctx.fillStyle = isHovered ? '#a5b4fc' : 'rgba(148, 163, 184, 0.6)';
        ctx.fillText(node.concept.author, node.x, node.y + node.radius + 25);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [hoveredNode]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let found: Node | null = null;
    for (const node of nodesRef.current) {
      const dx = node.x - mouseX;
      const dy = node.y - mouseY;
      if (Math.sqrt(dx * dx + dy * dy) <= node.radius + 10) {
        found = node;
        break;
      }
    }

    if (found && found.id !== hoveredNode?.id) {
      audioEngine.playClick();
    }
    setHoveredNode(found);
  };

  const handleClick = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (const node of nodesRef.current) {
      const dx = node.x - mouseX;
      const dy = node.y - mouseY;
      if (Math.sqrt(dx * dx + dy * dy) <= node.radius + 10) {
        audioEngine.playBell();
        onSelectConcept(node.id);
        break;
      }
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-[#07090e]">
      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
          <Network className="w-4 h-4 text-indigo-400" />
          <h2 className="text-xs font-bold text-white tracking-wide uppercase">
            Synaptic Knowledge Constellation
          </h2>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
            {nodesRef.current.length} Neural Nodes
          </span>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-xl py-1">
          {['All', 'Stoic Philosophy', 'Cognitive Psychology', 'Focus & Deep Work', 'Mental Models & Systems', 'Dopamine & Neuroscience'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                audioEngine.playClick();
                onSelectCategory(cat);
              }}
              className={`px-3 py-1.5 text-[11px] rounded-lg border font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handleClick}
        className="w-full h-full cursor-pointer touch-none"
      />

      {/* Floating Insight Card Preview on Node Hover */}
      {hoveredNode && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-md p-4 rounded-2xl bg-slate-900/95 border border-indigo-500/40 shadow-2xl backdrop-blur-xl animate-fadeIn pointer-events-auto">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {hoveredNode.concept.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {hoveredNode.concept.readTimeMinutes} min read
                </span>
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                {hoveredNode.concept.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                From <span className="text-indigo-300 font-semibold">{hoveredNode.concept.bookTitle}</span> by {hoveredNode.concept.author} ({hoveredNode.concept.year})
              </p>
            </div>
            <button
              onClick={() => {
                audioEngine.playBell();
                onSelectConcept(hoveredNode.id);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shrink-0 flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Open Card
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-300 italic border-l-2 border-indigo-500 pl-2 line-clamp-2">
            "{hoveredNode.concept.coreQuote}"
          </p>
        </div>
      )}

      {/* Bottom Hint */}
      {!hoveredNode && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 font-mono pointer-events-none backdrop-blur-md">
          Hover to inspect neural links • Click a book node to read wisdom
        </div>
      )}
    </div>
  );
};
