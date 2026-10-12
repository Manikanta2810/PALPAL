import React, { useState, useEffect, useCallback } from 'react';
import { Concept, UserStats } from '../types';
import { 
  Volume2, VolumeX, Bookmark, CheckCircle, ChevronDown, ChevronUp, 
  Sparkles, BookOpen, Quote, ShieldAlert, ArrowRight, Share2, 
  Brain, RotateCcw, Play, Square, FastForward
} from 'lucide-react';
import { InteractiveSimulations } from './InteractiveSimulations';
import { audioEngine } from '../services/audioEngine';
import { speechEngine } from '../services/speechEngine';
import confetti from 'canvas-confetti';

interface FeedViewProps {
  concepts: Concept[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  userStats: UserStats;
  onToggleBookmark: (conceptId: string) => void;
  onMarkCompleted: (conceptId: string) => void;
  onOpenBreathing: () => void;
  onOpenFogDissolver: () => void;
}

export const FeedView: React.FC<FeedViewProps> = ({
  concepts,
  currentIndex,
  onNavigate,
  userStats,
  onToggleBookmark,
  onMarkCompleted,
  onOpenBreathing,
  onOpenFogDissolver
}) => {
  const currentConcept = concepts[currentIndex] || concepts[0];
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);

  // Sync speech engine state
  useEffect(() => {
    speechEngine.onStateChange((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => {
      speechEngine.stop();
    };
  }, []);

  // Stop speech when card changes
  useEffect(() => {
    speechEngine.stop();
    setIsSpeaking(false);
    setHasTriggeredConfetti(false);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement).tagName.toLowerCase())) return;

      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        if (currentIndex < concepts.length - 1) {
          audioEngine.playClick();
          onNavigate(currentIndex + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        if (currentIndex > 0) {
          audioEngine.playClick();
          onNavigate(currentIndex - 1);
        }
      } else if (e.key === 'b') {
        e.preventDefault();
        onOpenBreathing();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, concepts.length, onNavigate, onOpenBreathing]);

  const handleNext = () => {
    if (currentIndex < concepts.length - 1) {
      audioEngine.playClick();
      onNavigate(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      audioEngine.playClick();
      onNavigate(currentIndex - 1);
    }
  };

  const toggleSpeech = () => {
    audioEngine.playClick();
    if (isSpeaking) {
      speechEngine.stop();
    } else {
      const narration = `${currentConcept.tagline}. Core Insight: ${currentConcept.cognitiveShift}. ${currentConcept.deepDive.join(' ')}`;
      speechEngine.speak(narration, currentConcept.title);
    }
  };

  const cycleRate = () => {
    audioEngine.playClick();
    const rates = [1.0, 1.25, 1.5];
    const nextRate = rates[(rates.indexOf(speechRate) + 1) % rates.length];
    setSpeechRate(nextRate);
    speechEngine.setRate(nextRate);
    if (isSpeaking) {
      toggleSpeech(); // restart with new rate
    }
  };

  const handleComplete = () => {
    audioEngine.playBell();
    onMarkCompleted(currentConcept.id);

    // Fire celebratory confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#38bdf8', '#10b981', '#f59e0b']
    });
    setHasTriggeredConfetti(true);
  };

  const isCompleted = userStats.completedConceptIds.includes(currentConcept.id);
  const isBookmarked = userStats.bookmarkedConceptIds.includes(currentConcept.id);

  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] py-8 px-4 flex flex-col items-center justify-start max-w-4xl mx-auto">
      {/* Feed Controls Header */}
      <div className="w-full flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-indigo-400 font-semibold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(concepts.length).padStart(2, '0')}
          </span>
          <div className="w-32 bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-indigo-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / concepts.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Breathing break pill */}
          <button
            onClick={() => {
              audioEngine.playClick();
              onOpenBreathing();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-indigo-300 hover:text-white hover:border-indigo-500/50 transition-all cursor-pointer"
          >
            <Brain className="w-3.5 h-3.5 text-indigo-400" />
            <span>4s Breath Pause</span>
          </button>

          {/* Dissolve Fog quick trigger */}
          <button
            onClick={() => {
              audioEngine.playClick();
              onOpenFogDissolver();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-sky-300 hover:text-white hover:border-sky-500/50 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Clear Fog</span>
          </button>
        </div>
      </div>

      {/* Primary Card */}
      <div className="w-full rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-500 relative glow-card">
        {/* Subtle Category Aura Header */}
        <div className={`h-2 w-full bg-gradient-to-r ${currentConcept.gradient}`} />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Card Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold">
                {currentConcept.category}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-slate-400" />
                {currentConcept.readTimeMinutes} min deep read
              </span>
            </div>

            {/* Audio & Bookmark Actions */}
            <div className="flex items-center gap-2">
              {/* Audio Listen Button */}
              <button
                onClick={toggleSpeech}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  isSpeaking
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/30 animate-pulse'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {isSpeaking ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isSpeaking ? 'Playing Voice' : 'Listen'}</span>
              </button>

              {isSpeaking && (
                <button
                  onClick={cycleRate}
                  className="px-2 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-[10px] font-mono text-indigo-300 hover:text-white cursor-pointer"
                  title="Playback Speed"
                >
                  {speechRate}x
                </button>
              )}

              {/* Bookmark */}
              <button
                onClick={() => {
                  audioEngine.playClick();
                  onToggleBookmark(currentConcept.id);
                }}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title={isBookmarked ? 'Saved to Second Brain' : 'Bookmark for later'}
              >
                <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>

          {/* Book Title & Author Pill */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-200">{currentConcept.bookTitle}</span>
            <span>•</span>
            <span>{currentConcept.author} ({currentConcept.year})</span>
          </div>

          {/* Headline Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {currentConcept.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-indigo-200/90 font-medium">
              {currentConcept.tagline}
            </p>
          </div>

          {/* Core Master Quote Banner */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 flex items-start gap-3 relative overflow-hidden">
            <Quote className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5 opacity-80" />
            <p className="text-xs sm:text-sm text-indigo-100/90 italic font-serif leading-relaxed">
              "{currentConcept.coreQuote}"
            </p>
          </div>

          {/* THE ANTIFOG DICHOTOMY (Brainrot vs Cognitive Shift) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Doomscroll Trap */}
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>The Doomscroll Trap</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentConcept.doomscrollTrap}
              </p>
            </div>

            {/* The Antifog Shift */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>The Antifog Cognitive Shift</span>
              </div>
              <p className="text-xs text-emerald-200 leading-relaxed font-medium">
                {currentConcept.cognitiveShift}
              </p>
            </div>
          </div>

          {/* Deep Dive Paragraphs */}
          <div className="space-y-3.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed pt-2 border-t border-slate-800/80">
            {currentConcept.deepDive.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Daily Protocol / Practical Application */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
              Immediate Daily Protocol
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {currentConcept.practicalApplication}
            </p>
          </div>

          {/* Interactive Simulation for active recall */}
          <InteractiveSimulations
            sim={currentConcept.interactiveSim}
            conceptId={currentConcept.id}
            onCompleted={handleComplete}
          />

          {/* Completion Button & Feedback */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-slate-600'}`} />
              <span>{isCompleted ? 'Concept Synthesized & Integrated' : 'Complete reflection to integrate'}</span>
            </div>

            <button
              onClick={handleComplete}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                isCompleted
                  ? 'bg-emerald-600/30 border border-emerald-500/40 text-emerald-300'
                  : 'bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-white shadow-indigo-500/20'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>{isCompleted ? 'Integrated (+20g Fog Cleared)' : 'Mark as Integrated'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigator for Deck Navigation */}
      <div className="sticky bottom-6 z-30 mt-8 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs text-slate-200 font-medium cursor-pointer transition-all"
        >
          <ChevronUp className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <span className="text-xs font-mono text-slate-400 px-2">
          {currentIndex + 1} / {concepts.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === concepts.length - 1}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-xs text-white font-medium cursor-pointer transition-all shadow-md shadow-indigo-500/20"
        >
          <span>Next Card</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
