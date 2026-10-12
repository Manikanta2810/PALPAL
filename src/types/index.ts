export type Category = 
  | 'Cognitive Psychology'
  | 'Stoic Philosophy'
  | 'Mental Models & Systems'
  | 'Focus & Deep Work'
  | 'Dopamine & Neuroscience'
  | 'Strategy & Decision Making';

export interface ConceptInteractiveSim {
  type: 'quiz' | 'habit_builder' | 'control_dichotomy' | 'system_trap' | 'consequence_slider' | 'reflection';
  question?: string;
  options?: { text: string; isCorrect: boolean; feedback: string }[];
  prompt?: string;
  initialValue?: number;
  minLabel?: string;
  maxLabel?: string;
  leftCategory?: string;
  rightCategory?: string;
  itemsToCategorize?: { id: string; label: string; correctCategory: 'left' | 'right' }[];
}

export interface Concept {
  id: string;
  title: string;
  bookTitle: string;
  author: string;
  year: number;
  category: Category;
  readTimeMinutes: number;
  tagline: string;
  coreQuote: string;
  doomscrollTrap: string; // The "Rotten brain" symptom caused by social media
  cognitiveShift: string;  // The antifog mindset antidote
  deepDive: string[];      // 3-4 rich paragraphs explaining the concept
  practicalApplication: string; // Immediate action step today
  interactiveSim: ConceptInteractiveSim;
  relatedConceptIds: string[];
  gradient: string;
  accentColor: string;
}

export interface UserStats {
  clarityScore: number;         // 0 - 100
  fogDissolvedGrams: number;    // Gamified metric
  rescuedSeconds: number;       // Equivalent doomscroll time rescued
  completedConceptIds: string[];
  bookmarkedConceptIds: string[];
  reflections: Record<string, string>;
  streakDays: number;
  lastActiveDate: string;
}

export type ViewMode = 'feed' | 'graph' | 'vault' | 'stats';
