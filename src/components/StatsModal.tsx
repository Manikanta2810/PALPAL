import React from 'react';
import { UserStats } from '../types';
import { X, Sparkles, Brain, Clock, ShieldCheck, Flame, BookCheck, Zap, RotateCcw } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userStats: UserStats;
  totalConcepts: number;
  onResetStats: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  userStats,
  totalConcepts,
  onResetStats
}) => {
  if (!isOpen) return null;

  const rescuedVideos = Math.round(userStats.rescuedSeconds / 30);
  const completionPercentage = Math.round((userStats.completedConceptIds.length / totalConcepts) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Neuroplasticity & Clarity Metrics
              </h2>
              <p className="text-xs text-slate-400">
                Biological and cognitive recovery indicators tracked against doomscrolling.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audioEngine.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 rounded-xl cursor-pointer transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Top 3 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-indigo-400">
              <span className="text-[10px] font-mono uppercase tracking-wider">Cognitive Clarity</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-white">
              {userStats.clarityScore}%
            </div>
            <p className="text-[11px] text-slate-400">
              Prefrontal lucidity index
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-sky-400">
              <span className="text-[10px] font-mono uppercase tracking-wider">Fog Dissolved</span>
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-white">
              {userStats.fogDissolvedGrams}g
            </div>
            <p className="text-[11px] text-slate-400">
              Mental haze evaporated
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-emerald-400">
              <span className="text-[10px] font-mono uppercase tracking-wider">Doomscroll Saved</span>
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-2xl font-extrabold text-white">
              {Math.round(userStats.rescuedSeconds / 60)} min
            </div>
            <p className="text-[11px] text-slate-400">
              ~{rescuedVideos} brainrot clips avoided
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-300">Vault Synthesis Progress</span>
            <span className="text-indigo-400 font-mono">
              {userStats.completedConceptIds.length} / {totalConcepts} Concepts ({completionPercentage}%)
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Neuro-Recovery Stages Timeline */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>The 4-Stage Brain Un-Rotting Timeline</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">Day 1: Acute Brake</span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Resting heart rate stabilizes; immediate reduction in compulsive device reaches and phantom vibrations.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-sky-400 uppercase">Day 3: Dopamine Resensitization</span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Dopamine D2 receptor density begins upregulating in the striatum. Physical books and quiet meals regain flavor.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase">Day 7: Prefrontal Re-engagement</span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Working memory span extends past 40 continuous minutes without attention residue or urge to multitask.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Day 21: Deep Synaptic Rewiring</span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Permanent identity shift from reactive consumer to sovereign thinker. Chronic mental fog completely evaporates.
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              if (confirm('Reset your Anti-Fog clarity statistics and start fresh?')) {
                onResetStats();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Stats</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playBell();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all cursor-pointer shadow-lg shadow-indigo-500/20"
          >
            Keep De-Fogging
          </button>
        </div>
      </div>
    </div>
  );
};
