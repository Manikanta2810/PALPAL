import React, { useState, useEffect } from 'react';
import { X, Wind, Sparkles, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface BreathingPacerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCycleCompleted: () => void;
}

type BreathPhase = 'inhale' | 'hold-in' | 'exhale' | 'hold-out';

export const BreathingPacerModal: React.FC<BreathingPacerModalProps> = ({
  isOpen,
  onClose,
  onCycleCompleted
}) => {
  const [phase, setPhase] = useState<BreathPhase>('inhale');
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setPhase('inhale');
      setSecondsLeft(4);
      setCompletedCycles(0);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Switch phase
          setPhase((currentPhase) => {
            if (currentPhase === 'inhale') return 'hold-in';
            if (currentPhase === 'hold-in') return 'exhale';
            if (currentPhase === 'exhale') return 'hold-out';
            if (currentPhase === 'hold-out') {
              setCompletedCycles((c) => {
                const next = c + 1;
                audioEngine.playBell();
                onCycleCompleted();
                return next;
              });
              return 'inhale';
            }
            return 'inhale';
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, onCycleCompleted]);

  if (!isOpen) return null;

  const phaseDetails = {
    'inhale': { label: 'Inhale Slowly', color: 'text-sky-400', scale: 'scale-125', desc: 'Expand diaphragm, draw in cool mental oxygen' },
    'hold-in': { label: 'Hold In Fullness', color: 'text-indigo-300', scale: 'scale-125', desc: 'Settle in stillness, quiet mental chatter' },
    'exhale': { label: 'Exhale Fog', color: 'text-teal-400', scale: 'scale-75', desc: 'Release digital tension and frantic dopamine rush' },
    'hold-out': { label: 'Hold in Emptiness', color: 'text-slate-400', scale: 'scale-75', desc: 'Rest in pure agency, reclaim your sovereign baseline' }
  };

  const current = phaseDetails[phase];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-slate-900/95 border border-slate-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center space-y-6">
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-xl cursor-pointer transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
            <Wind className="w-4 h-4" />
            <span>Box Breathing Reset</span>
          </div>
          <h2 className="text-xl font-bold text-white">Break the Dopamine Twitch</h2>
          <p className="text-xs text-slate-400">
            Regulate the vagus nerve to dissolve impulsive phone-checking reflexes.
          </p>
        </div>

        {/* Animated Expanding/Contracting Breathing Orb */}
        <div className="relative w-56 h-56 flex items-center justify-center my-4">
          {/* Outer glow ring */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-teal-500/20 blur-xl transition-all duration-1000 ${
              phase === 'inhale' || phase === 'hold-in' ? 'scale-125 opacity-70' : 'scale-75 opacity-20'
            }`}
          />

          {/* Middle animated ring */}
          <div
            className={`w-44 h-44 rounded-full border-2 border-indigo-400/40 flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${current.scale}`}
          >
            {/* Center Core */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600/40 to-sky-600/40 backdrop-blur-md border border-indigo-300/30 flex flex-col items-center justify-center shadow-2xl">
              <span className="text-3xl font-extrabold text-white font-mono">{secondsLeft}</span>
              <span className="text-[10px] text-slate-300 font-mono uppercase tracking-widest mt-0.5">sec</span>
            </div>
          </div>
        </div>

        {/* Phase instruction */}
        <div className="space-y-1">
          <h3 className={`text-base font-bold ${current.color} transition-colors tracking-wide`}>
            {current.label}
          </h3>
          <p className="text-xs text-slate-400 italic max-w-xs">
            {current.desc}
          </p>
        </div>

        {/* Cycles completed counter */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-xs text-slate-300 font-mono">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>{completedCycles} Cycles Completed (+15g Fog Cleared)</span>
        </div>

        {/* Continue button */}
        <button
          onClick={() => {
            audioEngine.playBell();
            onClose();
          }}
          className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-500/20 cursor-pointer"
        >
          Return to Clarity Stream
        </button>
      </div>
    </div>
  );
};
