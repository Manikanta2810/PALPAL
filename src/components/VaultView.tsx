import React, { useState } from 'react';
import { Concept, UserStats, Category } from '../types';
import { Search, Filter, Bookmark, CheckCircle, ArrowUpRight, BookOpen, Download, Sparkles } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

interface VaultViewProps {
  concepts: Concept[];
  userStats: UserStats;
  onSelectConcept: (conceptId: string) => void;
  onToggleBookmark: (conceptId: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const VaultView: React.FC<VaultViewProps> = ({
  concepts,
  userStats,
  onSelectConcept,
  onToggleBookmark,
  selectedCategory,
  onSelectCategory
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSavedOnly, setFilterSavedOnly] = useState(false);

  const categories = [
    'All',
    'Cognitive Psychology',
    'Stoic Philosophy',
    'Mental Models & Systems',
    'Focus & Deep Work',
    'Dopamine & Neuroscience',
    'Strategy & Decision Making'
  ];

  const filteredConcepts = concepts.filter((c) => {
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSaved = !filterSavedOnly || userStats.bookmarkedConceptIds.includes(c.id);

    return matchesSearch && matchesCategory && matchesSaved;
  });

  const exportBookmarksToMarkdown = () => {
    audioEngine.playBell();
    const saved = concepts.filter(c => userStats.bookmarkedConceptIds.includes(c.id));
    if (saved.length === 0) {
      alert('You have no bookmarked concepts yet! Click the bookmark icon on any card to save it.');
      return;
    }

    let md = `# ANTIFOG // Second Brain Wisdom Vault\nExported on: ${new Date().toLocaleDateString()}\n\n`;
    saved.forEach(c => {
      md += `## ${c.title}\n`;
      md += `**Book:** *${c.bookTitle}* by ${c.author} (${c.year})\n`;
      md += `**Category:** ${c.category}\n\n`;
      md += `> "${c.coreQuote}"\n\n`;
      md += `### The Doomscroll Trap\n${c.doomscrollTrap}\n\n`;
      md += `### Cognitive Shift\n${c.cognitiveShift}\n\n`;
      md += `### Practical Protocol\n${c.practicalApplication}\n\n`;
      md += `---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `antifog-wisdom-notes-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            <span>Masterwork Wisdom Vault</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Curated antidote library distilled from landmark literature across neuroscience, philosophy, and mental models.
          </p>
        </div>

        <button
          onClick={exportBookmarksToMarkdown}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-indigo-300 hover:text-white text-xs font-semibold shadow-lg transition-all cursor-pointer self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Notes to Markdown</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search concepts, authors, books (e.g. Kahneman, Marcus Aurelius, Dopamine)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-950 rounded-xl border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            onClick={() => {
              audioEngine.playClick();
              setFilterSavedOnly(!filterSavedOnly);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs rounded-xl border font-semibold transition-all cursor-pointer shrink-0 ${
              filterSavedOnly
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" fill={filterSavedOnly ? 'currentColor' : 'none'} />
            <span>Bookmarked ({userStats.bookmarkedConceptIds.length})</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                audioEngine.playClick();
                onSelectCategory(cat);
              }}
              className={`px-3 py-1.5 text-[11px] rounded-lg border font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredConcepts.map((concept) => {
          const isCompleted = userStats.completedConceptIds.includes(concept.id);
          const isBookmarked = userStats.bookmarkedConceptIds.includes(concept.id);

          return (
            <div
              key={concept.id}
              className="group p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-indigo-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-4 glow-card relative"
            >
              <div className="space-y-3">
                {/* Top Badge & Bookmark */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                    {concept.category}
                  </span>
                  
                  <div className="flex items-center gap-1">
                    {isCompleted && (
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-0.5" title="Synthesized">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        audioEngine.playClick();
                        onToggleBookmark(concept.id);
                      }}
                      className={`p-1.5 rounded-lg border cursor-pointer transition-all ${
                        isBookmarked 
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                          : 'border-transparent text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors line-clamp-2">
                  {concept.title}
                </h3>

                {/* Book Author & Year */}
                <p className="text-xs text-slate-400 font-mono">
                  {concept.bookTitle} • {concept.author} ({concept.year})
                </p>

                {/* Quote */}
                <p className="text-xs text-slate-300/80 italic font-serif line-clamp-3 border-l-2 border-indigo-500/40 pl-2">
                  "{concept.coreQuote}"
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  {concept.readTimeMinutes} min read
                </span>

                <button
                  onClick={() => {
                    audioEngine.playBell();
                    onSelectConcept(concept.id);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600/30 group-hover:bg-indigo-600 text-indigo-300 group-hover:text-white text-xs font-semibold border border-indigo-500/30 transition-all cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredConcepts.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-300">No matching wisdom concepts found</h3>
          <p className="text-xs text-slate-500">Try modifying your search query or selecting a different category filter.</p>
        </div>
      )}
    </div>
  );
};
