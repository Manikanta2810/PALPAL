import React, { useState } from 'react';
import { ViewMode, UserStats } from '../types';
import { 
  Sparkles, Network, BookOpen, Layers, Volume2, VolumeX, 
  Wind, BarChart3, Radio, CheckCircle, Info
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface NavbarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  userStats: UserStats;
  onOpenStats: () => void;
  onOpenBreathing: () => void;
  onOpenFogDissolver: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  userStats,
  onOpenStats,
  onOpenBreathing,
  onOpenFogDissolver
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioMode, setAudioMode] = useState<'gamma' | 'alpha' | 'zen'>('gamma');
  const [showAudioDropdown, setShowAudioDropdown] = useState(false);

  const toggleAmbience = () => {
    audioEngine.playClick();
    const playing = audioEngine.toggleAmbience(audioMode);
    setIsAudioPlaying(playing);
  };

  const selectAudioMode = (mode: 'gamma' | 'alpha' | 'zen') => {
    setAudioMode(mode);
    audioEngine.setAmbienceMode(mode);
    setIsAudioPlaying(true);
    setShowAudioDropdown(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full h-16 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            audioEngine.playClick();
            onViewChange('feed');
          }}
          className="flex items-center gap-2.5 text-left cursor-pointer group"
        >
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-teal-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold tracking-wider text-white font-mono">
                ANTIFOG
              </span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-mono border border-indigo-500/30">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-400 -mt-0.5 hidden sm:block">
              Cognitive Clarity Sanctuary
            </p>
          </div>
        </button>
      </div>

      {/* Main View Navigation Tabs */}
      <nav className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-2xl border border-slate-800/80 shadow-inner">
        <button
          onClick={() => {
            audioEngine.playClick();
            onViewChange('feed');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            currentView === 'feed'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Wisdom Stream</span>
          <span className="sm:hidden">Stream</span>
        </button>

        <button
          onClick={() => {
            audioEngine.playClick();
            onViewChange('graph');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            currentView === 'graph'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Network className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Synapse Graph</span>
          <span className="sm:hidden">Graph</span>
        </button>

        <button
          onClick={() => {
            audioEngine.playClick();
            onViewChange('vault');
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            currentView === 'vault'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Wisdom Vault</span>
          <span className="sm:hidden">Vault</span>
        </button>
      </nav>

      {/* Right Action Suite */}
      <div className="flex items-center gap-2">
        {/* Binaural Audio Engine Toggle */}
        <div className="relative">
          <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
            <button
              onClick={toggleAmbience}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                isAudioPlaying
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : 'text-slate-400 hover:text-white'
              }`}
              title={isAudioPlaying ? 'Stop Binaural Focus Beats' : 'Start 40Hz Gamma Focus Beats'}
            >
              {isAudioPlaying ? (
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
              <span className="text-[11px] font-mono hidden md:inline">
                {isAudioPlaying ? `${audioMode.toUpperCase()} 40Hz` : 'Audio OFF'}
              </span>
            </button>
            <button
              onClick={() => setShowAudioDropdown(!showAudioDropdown)}
              className="px-1.5 py-1.5 text-slate-500 hover:text-slate-300 border-l border-slate-800 text-[10px] cursor-pointer"
            >
              ▼
            </button>
          </div>

          {showAudioDropdown && (
            <div className="absolute right-0 mt-2 w-48 p-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl backdrop-blur-xl z-50 space-y-1">
              <button
                onClick={() => selectAudioMode('gamma')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                  audioMode === 'gamma' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                ⚡ 40 Hz Gamma (Deep Focus)
              </button>
              <button
                onClick={() => selectAudioMode('alpha')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                  audioMode === 'alpha' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                🌊 10 Hz Alpha (Calm Awake)
              </button>
              <button
                onClick={() => selectAudioMode('zen')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                  audioMode === 'zen' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                🧘 6 Hz Theta (Deep Zen)
              </button>
            </div>
          )}
        </div>

        {/* Cognitive Clarity Score Pill / Stats Trigger */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onOpenStats();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/40 transition-all cursor-pointer"
          title="Open Neuroplasticity Metrics"
        >
          <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs font-bold font-mono">{userStats.clarityScore}%</span>
          <span className="text-[10px] text-slate-400 hidden lg:inline">Lucid</span>
        </button>
      </div>
    </header>
  );
};
