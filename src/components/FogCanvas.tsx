import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Eye, RefreshCw, X } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface FogCanvasProps {
  isOpen: boolean;
  onClose: () => void;
  onFogCleared: (amountGrams: number) => void;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  vx: number;
  vy: number;
}

export const FogCanvas: React.FC<FogCanvasProps> = ({ isOpen, onClose, onFogCleared }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [clearedPercent, setClearedPercent] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const particlesRef = useRef<Particle[]>([]);
  const isDrawingRef = useRef<boolean>(false);
  const totalPixelsRef = useRef<number>(0);
  const clearedCountRef = useRef<number>(0);

  const initFog = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fill with dense atmospheric brain fog
    ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create subtle cloud patterns
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 60 + Math.random() * 120;
      const grad = ctx.createRadialGradient(x, y, 10, x, y, radius);
      grad.addColorStop(0, 'rgba(79, 70, 229, 0.15)');
      grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.08)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    setClearedPercent(0);
    setIsDone(false);
    clearedCountRef.current = 0;
    totalPixelsRef.current = Math.floor((canvas.width * canvas.height) / 800);

    // Ambient floating particles
    const particles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1 + Math.random() * 3,
        alpha: 0.2 + Math.random() * 0.6,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    if (isOpen) {
      initFog();
    }
  }, [isOpen, initFog]);

  const clearAt = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';

    const brushRadius = 65;
    const radial = ctx.createRadialGradient(x, y, 10, x, y, brushRadius);
    radial.addColorStop(0, 'rgba(0, 0, 0, 1)');
    radial.addColorStop(0.7, 'rgba(0, 0, 0, 0.7)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = radial;
    ctx.beginPath();
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    clearedCountRef.current += 1;
    const pct = Math.min(100, Math.round((clearedCountRef.current / (totalPixelsRef.current * 0.25)) * 100));
    setClearedPercent(pct);

    if (pct >= 85 && !isDone) {
      setIsDone(true);
      audioEngine.playBell();
      onFogCleared(35);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    audioEngine.playClick();
    const rect = e.currentTarget.getBoundingClientRect();
    clearAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    clearAt(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between pointer-events-auto bg-slate-950/80 backdrop-blur-sm select-none animate-fadeIn">
      {/* Top Bar Instructions */}
      <div className="relative z-10 w-full max-w-4xl px-6 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
            <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <div>
            <h3 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
              Brain Fog Dissolver Ritual
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                {clearedPercent}% Dissolved
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Drag your cursor or finger across the haze to wipe away dopamine fog and awaken the mind.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              audioEngine.playClick();
              initFog();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg border border-slate-700 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Fog
          </button>
          <button
            onClick={() => {
              audioEngine.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 rounded-lg border border-slate-700/60 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
      />

      {/* Bottom Completion Banner */}
      <div className="relative z-10 pb-8 flex flex-col items-center">
        {isDone ? (
          <div className="flex flex-col items-center gap-3 p-4 px-8 rounded-2xl bg-indigo-950/90 border border-indigo-500/40 shadow-2xl backdrop-blur-xl animate-bounce">
            <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Full Cognitive Lucidity Restored! (+35g Fog Dissolved)</span>
            </div>
            <button
              onClick={() => {
                audioEngine.playBell();
                onClose();
              }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold text-xs shadow-lg hover:shadow-indigo-500/25 transition-all cursor-pointer"
            >
              Enter The Wisdom Stream
            </button>
          </div>
        ) : (
          <div className="px-5 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs tracking-wider uppercase font-mono shadow-md backdrop-blur-md">
            Wipe with your mouse or finger to uncover clarity
          </div>
        )}
      </div>
    </div>
  );
};
