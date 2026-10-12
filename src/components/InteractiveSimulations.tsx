import React, { useState } from 'react';
import { ConceptInteractiveSim } from '../types';
import { CheckCircle2, AlertCircle, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface InteractiveSimProps {
  sim: ConceptInteractiveSim;
  conceptId: string;
  onCompleted?: () => void;
}

export const InteractiveSimulations: React.FC<InteractiveSimProps> = ({ sim, conceptId, onCompleted }) => {
  // State for quiz
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  // State for consequence slider
  const [sliderValue, setSliderValue] = useState<number>(50);

  // State for control dichotomy
  const [categorizedItems, setCategorizedItems] = useState<Record<string, 'left' | 'right'>>({});
  
  // State for habit builder
  const [habitCue, setHabitCue] = useState('');
  const [habitRoutine, setHabitRoutine] = useState('');
  const [habitBuilt, setHabitBuilt] = useState(false);

  // State for reflection
  const [reflectionText, setReflectionText] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  const handleQuizSelect = (idx: number) => {
    setSelectedOption(idx);
    audioEngine.playClick();
    if (sim.options && sim.options[idx].isCorrect) {
      audioEngine.playBell();
      onCompleted?.();
    }
  };

  const handleCategorize = (itemId: string, category: 'left' | 'right') => {
    audioEngine.playClick();
    const updated = { ...categorizedItems, [itemId]: category };
    setCategorizedItems(updated);

    if (sim.itemsToCategorize && Object.keys(updated).length === sim.itemsToCategorize.length) {
      audioEngine.playBell();
      onCompleted?.();
    }
  };

  const handleSaveReflection = () => {
    if (!reflectionText.trim()) return;
    audioEngine.playBell();
    setReflectionSaved(true);
    // save to localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('antifog_reflections') || '{}');
      stored[conceptId] = reflectionText;
      localStorage.setItem('antifog_reflections', JSON.stringify(stored));
    } catch {
      // ignore
    }
    onCompleted?.();
  };

  const handleSaveHabit = () => {
    if (!habitCue.trim() || !habitRoutine.trim()) return;
    audioEngine.playBell();
    setHabitBuilt(true);
    onCompleted?.();
  };

  return (
    <div className="mt-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800/80 shadow-inner backdrop-blur-md">
      <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-indigo-400">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Active Brain Rewiring Challenge</span>
      </div>

      {/* QUIZ TYPE */}
      {sim.type === 'quiz' && sim.options && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-100">{sim.question}</p>
          <div className="grid grid-cols-1 gap-2.5">
            {sim.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let btnClass = 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-slate-300';
              if (isSelected) {
                btnClass = opt.isCorrect
                  ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-200'
                  : 'border-rose-500/60 bg-rose-950/40 text-rose-200';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleQuizSelect(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs font-medium transition-all flex items-start gap-3 cursor-pointer ${btnClass}`}
                >
                  <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center shrink-0 text-[10px] font-mono mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="flex-1">
                    <p>{opt.text}</p>
                    {isSelected && (
                      <p className={`mt-2 text-[11px] font-normal leading-relaxed flex items-center gap-1.5 ${opt.isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {opt.isCorrect ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                        {opt.feedback}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* CONSEQUENCE SLIDER */}
      {sim.type === 'consequence_slider' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-200 font-medium leading-relaxed">{sim.prompt}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>{sim.minLabel || 'Low'}</span>
              <span className="text-indigo-400 font-bold">{sliderValue}%</span>
              <span>{sim.maxLabel || 'High'}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => {
                setSliderValue(Number(e.target.value));
                if (Number(e.target.value) % 10 === 0) audioEngine.playClick();
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          {/* Dynamic feedback panel */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400">Brain Fog Forecast</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500"
                    style={{ width: `${sliderValue}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-bold text-slate-200">{sliderValue}%</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400">Prefrontal Clarity</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500"
                    style={{ width: `${100 - sliderValue}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-bold text-indigo-300">{100 - sliderValue}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DICHOTOMY OF CONTROL */}
      {sim.type === 'control_dichotomy' && sim.itemsToCategorize && (
        <div className="space-y-3">
          <p className="text-xs text-slate-200 font-medium">{sim.prompt}</p>
          <div className="space-y-2">
            {sim.itemsToCategorize.map((item) => {
              const currentChoice = categorizedItems[item.id];
              const isCorrect = currentChoice === item.correctCategory;

              return (
                <div key={item.id} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <span className="text-xs text-slate-200 font-normal">{item.label}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleCategorize(item.id, 'left')}
                      className={`px-2.5 py-1 text-[11px] rounded-lg border font-medium transition-all cursor-pointer ${
                        currentChoice === 'left'
                          ? isCorrect ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Shield className="w-3 h-3 inline mr-1" />
                      Within Control
                    </button>
                    <button
                      onClick={() => handleCategorize(item.id, 'right')}
                      className={`px-2.5 py-1 text-[11px] rounded-lg border font-medium transition-all cursor-pointer ${
                        currentChoice === 'right'
                          ? isCorrect ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Outside Control
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* HABIT BUILDER */}
      {sim.type === 'habit_builder' && (
        <div className="space-y-3">
          <p className="text-xs text-slate-200 font-medium">{sim.prompt}</p>
          {habitBuilt ? (
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-emerald-300">Habit Architecture Locked In:</p>
                <p className="mt-1 text-slate-300">
                  <span className="text-indigo-400 font-mono">AFTER:</span> "{habitCue}" → <span className="text-emerald-400 font-mono">I WILL:</span> "{habitRoutine}"
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-400 font-mono uppercase">1. Anchor Cue (Existing Daily Habit):</label>
                <input
                  type="text"
                  placeholder="e.g. As soon as I finish pouring morning water..."
                  value={habitCue}
                  onChange={(e) => setHabitCue(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 rounded-lg border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-400 font-mono uppercase">2. 2-Minute Gateway Routine (No Friction):</label>
                <input
                  type="text"
                  placeholder="e.g. I will open my book and read one single page before touching my phone."
                  value={habitRoutine}
                  onChange={(e) => setHabitRoutine(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 rounded-lg border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                onClick={handleSaveHabit}
                disabled={!habitCue || !habitRoutine}
                className="mt-1 w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                Commit Habit Loop
              </button>
            </div>
          )}
        </div>
      )}

      {/* REFLECTION TYPE */}
      {sim.type === 'reflection' && (
        <div className="space-y-3">
          <p className="text-xs text-slate-200 font-medium">{sim.prompt}</p>
          {reflectionSaved ? (
            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-indigo-300">Neural Reflection Encoded:</p>
                <p className="mt-1 text-slate-300 italic">"{reflectionText}"</p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <textarea
                rows={2}
                placeholder="Write your crisp 1-sentence insight here..."
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                className="w-full p-2.5 text-xs bg-slate-950 rounded-lg border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 resize-none"
              />
              <button
                onClick={handleSaveReflection}
                disabled={!reflectionText.trim()}
                className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                Save to Cognitive Memory
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
