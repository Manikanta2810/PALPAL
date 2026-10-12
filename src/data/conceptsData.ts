import { Concept } from '../types';

export const CONCEPTS: Concept[] = [
  {
    id: 'system-1-2-kahneman',
    title: 'System 1 vs System 2: Escaping the Knee-Jerk Filter',
    bookTitle: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    year: 2011,
    category: 'Cognitive Psychology',
    readTimeMinutes: 2,
    tagline: 'Your primitive brain wants easy outrage. Your analytical brain builds empires.',
    coreQuote: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.',
    doomscrollTrap: 'Social media hijacks System 1: rapid, emotional, automatic pattern-matching that mistakes algorithmic sensationalism for reality.',
    cognitiveShift: 'Force System 2 engagement: deliberately pause for 4 seconds, interrogate the statistical baseline, and question emotional reflexes.',
    deepDive: [
      'Daniel Kahneman delineates the architecture of human cognition into two distinct operating modes. System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control. System 2 allocates attention to the effortful mental operations that demand it, including complex computations, critical thinking, and objective analysis.',
      'Infinite scroll algorithms are precision-tuned to exploit System 1 heuristics: loss aversion, confirmation bias, and emotional contagion. When you spend hours flicking through micro-content, System 2 atrophies into passive dormancy, leading to the subjective sensation of "brain fog" — a state where complex synthesis feels excruciatingly difficult.',
      'Un-rotting the mind requires intentional friction. By forcing yourself to articulate why a claim is true or false, you reactivate the prefrontal cortex and reclaim sovereignty over your cognitive apparatus.'
    ],
    practicalApplication: 'The "Cognitive Brake" rule: Whenever you feel an immediate urge of rage, envy, or certainty from an online post, don’t react or share. Write down one alternative explanation before forming a conclusion.',
    interactiveSim: {
      type: 'quiz',
      question: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
      options: [
        { text: '10 cents ($0.10)', isCorrect: false, feedback: 'System 1 trap! If the ball is $0.10 and the bat is $1.00 more ($1.10), the total would be $1.20.' },
        { text: '5 cents ($0.05)', isCorrect: true, feedback: 'Brilliant! System 2 engaged! Ball = $0.05, Bat = $1.05. Total = $1.10. You resisted the intuitive trap!' },
        { text: '1 cent ($0.01)', isCorrect: false, feedback: 'Incorrect. Calculate carefully: Bat = Ball + $1.00, Ball + Bat = $1.10.' }
      ]
    },
    relatedConceptIds: ['stimulus-response-frankl', 'attention-residue-newport', 'inversion-munger'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-indigo-950/40',
    accentColor: '#f59e0b'
  },
  {
    id: 'pleasure-pain-lembke',
    title: 'The Pleasure-Pain Balance & Neurochemical Homeostasis',
    bookTitle: 'Dopamine Nation',
    author: 'Dr. Anna Lembke',
    year: 2021,
    category: 'Dopamine & Neuroscience',
    readTimeMinutes: 3,
    tagline: 'Chasing frictionless micro-dopamine inevitably leads to anhedonia and mental fog.',
    coreQuote: 'The reason we are all so miserable may be that we are working so hard to avoid being miserable.',
    doomscrollTrap: 'Constant high-frequency spikes of dopamine from feeds tilt your neurochemical teeter-totter to the pain side, causing baseline depression, lethargy, and emptiness.',
    cognitiveShift: 'Embrace deliberate micro-hardships and boredom. Allow dopamine receptors to resensitize by resting in the natural baseline.',
    deepDive: [
      'In Dopamine Nation, Stanford psychiatrist Dr. Anna Lembke explains that pleasure and pain are co-located in the same brain region (the nucleus accumbens) and operate like a seesaw. Every time you experience a dopamine spike from a notification, a like, or a novel 10-second clip, your brain deploys neuro-adaptation gremlins to push down on the pain side to restore equilibrium.',
      'With chronic overconsumption of hyper-palatable digital stimuli, the gremlins never leave. The baseline drops below neutral, a state known as dysphoria or neuroadaptation. You scroll not because you are having fun, but because you need to escape the discomfort of your degraded baseline.',
      'The antifog antidote is Dopamine Fasting and Hormesis: intentionally engaging in effortful, analog pursuits (reading a physical book, cold exposure, strenuous exercise, quiet contemplation) that initially feel heavy, but steadily elevate baseline mood and mental clarity.'
    ],
    practicalApplication: 'The 24-Hour Low-Dopamine Window: Designate one hour every evening as an "analog sanctuary" with zero screens, zero podcasts, and pure ambient silence or analog reading.',
    interactiveSim: {
      type: 'consequence_slider',
      prompt: 'Slide to simulate your Daily Digital Dopamine Intensity and see the predicted Brain Fog Index & Receptor Sensitivity:',
      minLabel: 'Analog & Focused',
      maxLabel: 'Doomscroll Binge (6+ hrs)'
    },
    relatedConceptIds: ['molecule-of-more-lieberman', 'glymphatic-sleep-walker', 'via-negativa-taleb'],
    gradient: 'from-rose-500/20 via-pink-500/10 to-indigo-950/40',
    accentColor: '#f43f5e'
  },
  {
    id: 'attention-residue-newport',
    title: 'Attention Residue & The Catastrophe of Rapid Switching',
    bookTitle: 'Deep Work',
    author: 'Cal Newport',
    year: 2016,
    category: 'Focus & Deep Work',
    readTimeMinutes: 2,
    tagline: 'When you check your phone for 10 seconds, a piece of your brain stays trapped there for 20 minutes.',
    coreQuote: 'If you don’t produce, you won’t thrive—and producing requires depth.',
    doomscrollTrap: 'Toggling between study/work and quick TikTok or Instagram check-ins leaves thick cognitive residue, destroying working memory and synthesis.',
    cognitiveShift: 'Monotasking shields your prefrontal cortex. Working in unbroken 60-90 minute blocks consolidates neural circuits.',
    deepDive: [
      'Professor Sophie Leroy discovered the phenomenon of "Attention Residue": when you switch from Task A to Task B, your attention does not immediately follow. A lingering trace of your cognitive processing remains fixated on the prior task.',
      'When doomscrolling, you aren’t just switching once; you are switching attention contexts every 8 to 15 seconds across hundreds of fragmented narratives (a dance meme, a war tragedy, a recipe, a financial doomsday post). This pulverizes the neural architecture responsible for continuous executive function.',
      'Deep Work is the ability to focus without distraction on a cognitively demanding task. It stretches your capacity and creates new value that is hard to replicate. The unrotted brain is one that has relearned how to sit with a singular difficult thought for an uninterrupted hour.'
    ],
    practicalApplication: 'Schedule "Focus Bubbles" in your calendar: 75-minute sessions where all communication devices are physically placed in another room.',
    interactiveSim: {
      type: 'habit_builder',
      prompt: 'Construct your Deep Work Anti-Residue Routine:'
    },
    relatedConceptIds: ['stolen-focus-hari', 'flow-csikszentmihalyi', 'system-1-2-kahneman'],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-950/40',
    accentColor: '#06b6d4'
  },
  {
    id: 'dichotomy-of-control-aurelius',
    title: 'The Inner Citadel & The Dichotomy of Control',
    bookTitle: 'Meditations',
    author: 'Marcus Aurelius',
    year: 180,
    category: 'Stoic Philosophy',
    readTimeMinutes: 2,
    tagline: 'You have power over your mind, not outside events. Realize this, and you will find radiant strength.',
    coreQuote: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
    doomscrollTrap: 'Algorithms flood you with geopolitical outrage, celebrity drama, and distant catastrophes designed to provoke helplessness and anxiety over things you cannot control.',
    cognitiveShift: 'Filter every incoming event ruthlessly: Is this within my direct sphere of agency? If not, dismiss it with total tranquil detachment.',
    deepDive: [
      'Writing his private journal while waging campaigns along the frozen Danube frontier, the Roman Emperor Marcus Aurelius fortified his mind against existential overwhelm. Alongside Epictetus, he systematized the core Stoic axiom: Things belong to two classes: what is up to us, and what is not up to us.',
      'Up to us: our opinions, desires, impulses, aversions, and integrity. Not up to us: public opinion, algorithms, global market swings, the weather, and what strangers comment on the internet.',
      'Social media feeds are designed to invert this wisdom: they convince you that you are morally obligated to be emotionally inflamed by matters thousands of miles away that you cannot alter, while neglecting your own desk, your own health, and your immediate loved ones. Reclaiming mental clarity starts with erecting the walls of your Inner Citadel.'
    ],
    practicalApplication: 'The Morning Citadel Audit: Before looking at any glass screen, write down the 3 things today that are 100% within your direct agency.',
    interactiveSim: {
      type: 'control_dichotomy',
      prompt: 'Classify these common triggers into your Inner Citadel (Within Control) vs Outer Void (Outside Control):',
      itemsToCategorize: [
        { id: '1', label: 'How an algorithm ranks your content or others view you', correctCategory: 'right' },
        { id: '2', label: 'The deliberate effort you invest into your daily craft', correctCategory: 'left' },
        { id: '3', label: 'Outrageous viral news and breaking comment threads', correctCategory: 'right' },
        { id: '4', label: 'Your conscious reaction to feelings of boredom or anxiety', correctCategory: 'left' }
      ]
    },
    relatedConceptIds: ['separation-of-tasks-kishimi', 'stimulus-response-frankl', 'via-negativa-taleb'],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-indigo-950/40',
    accentColor: '#10b981'
  },
  {
    id: 'identity-habits-clear',
    title: 'Identity-Based Habits & The 2-Minute Gateway Law',
    bookTitle: 'Atomic Habits',
    author: 'James Clear',
    year: 2018,
    category: 'Focus & Deep Work',
    readTimeMinutes: 2,
    tagline: 'Every action you take is a vote for the type of person you wish to become.',
    coreQuote: 'You do not rise to the level of your goals. You fall to the level of your systems.',
    doomscrollTrap: 'Unconscious friction-free pathways make tapping an app icon effortless, casting votes every 10 minutes for an identity as a passive consumer.',
    cognitiveShift: 'Add 20 seconds of physical friction to destructive defaults; make regenerative habits so small they cannot be rejected.',
    deepDive: [
      'James Clear highlights that real behavioral change occurs not at the outcome level (losing 10 pounds or reading 50 books), but at the identity level. If you believe "I am someone who cannot stop scrolling," every mindless reach for the phone reaffirms that neurological self-concept.',
      'To rewrite this trajectory, you do not need monumental willpower; you need to leverage the Law of Least Effort and the 2-Minute Rule. When you start a new habit, it should take less than two minutes to do. "Read 30 pages a night" becomes "Read one single paragraph before bed."',
      'By scaling down the entry barrier, you establish the ritual of showing up. Once the gateway is opened, momentum carries you forward. The antifog mind is crafted through hundreds of tiny votes cast across the mundane hours of each day.'
    ],
    practicalApplication: 'The 20-Second Phone Vault: Place your phone in a drawer across the room inside a pouch. The slight friction breaks 90% of compulsive automatic checks.',
    interactiveSim: {
      type: 'habit_builder',
      prompt: 'Create your Antifog Habit Loop (Cue -> Routine -> Micro-Reward):'
    },
    relatedConceptIds: ['attention-residue-newport', 'pleasure-pain-lembke', 'flow-csikszentmihalyi'],
    gradient: 'from-violet-500/20 via-purple-500/10 to-indigo-950/40',
    accentColor: '#8b5cf6'
  },
  {
    id: 'feedback-loops-meadows',
    title: 'Feedback Loops, Latency & System Traps',
    bookTitle: 'Thinking in Systems',
    author: 'Donella Meadows',
    year: 2008,
    category: 'Mental Models & Systems',
    readTimeMinutes: 3,
    tagline: 'Delays in feedback loops create wild oscillations. Don’t mistake system lag for failure.',
    coreQuote: 'Remember, always, that everything you know, and everything everyone knows, is only a model. Get your model out there and test it.',
    doomscrollTrap: 'Addictive platforms provide immediate microsecond feedback loops, conditioning brains to expect instant gratification and giving up on delayed systemic growth.',
    cognitiveShift: 'Understand systemic delays. Deep learning, physical strength, and neural clarity take weeks of negative-feedback dampening before visible breakthroughs.',
    deepDive: [
      'In systems thinking, a stock is an accumulation of information or material, and flows are the inflows and outflows that change it. Crucially, complex systems contain feedback delays: intervals between an action and its observable effect.',
      'When humans accustomed to near-zero latency feedback (likes, retweets, swipe refreshes) enter real-world systemic domains (mastering a skill, rehabilitating an attention span, building a business), the delay induces panic. They assume nothing is working, oscillate erratically, or abandon the process.',
      'Donella Meadows taught that leverage points exist where a small change produces a lasting shift in behavior. For personal cognition, the highest leverage point is controlling your information inflows: replacing noisy, low-entropy junk streams with high-signal, timeless literature.'
    ],
    practicalApplication: 'The 14-Day System Latency Pact: When adopting a new mental discipline, forbid yourself from evaluating its efficacy for the first 14 days to let the system stabilize.',
    interactiveSim: {
      type: 'consequence_slider',
      prompt: 'Slide to adjust System Feedback Delay vs Impatience to see why short-term quitters never break through:',
      minLabel: 'Instant Panic',
      maxLabel: 'Patient Systemic Mastery'
    },
    relatedConceptIds: ['inversion-munger', 'antifragile-taleb', 'resulting-duke'],
    gradient: 'from-teal-500/20 via-cyan-500/10 to-indigo-950/40',
    accentColor: '#14b8a6'
  },
  {
    id: 'stolen-focus-hari',
    title: 'The Fragmentation Epidemic & Depth Reconstruction',
    bookTitle: 'Stolen Focus',
    author: 'Johann Hari',
    year: 2022,
    category: 'Focus & Deep Work',
    readTimeMinutes: 2,
    tagline: 'Your focus didn’t collapse by personal failure; it was methodically mined and sold.',
    coreQuote: 'If you are spending your life being distracted, you are spending your life missing your life.',
    doomscrollTrap: 'Guilt-tripping yourself for lack of willpower while swimming in an ecosystem engineered by thousands of engineers to harvest your dopamine.',
    cognitiveShift: 'Shift from self-blame to strategic defense. Treat your attention span as a sacred ecological habitat that must be defended.',
    deepDive: [
      'Johann Hari’s extensive investigation into cognitive collapse revealed that our inability to concentrate is not a personal character flaw, but the systemic output of an attention-extraction surveillance business model.',
      'When your attention is fractured into hundreds of shards per day, your brain loses the ability to engage in what neuroscientists call "mind-wandering" — the essential default mode network state where creative problem solving, self-reflection, and emotional integration occur.',
      'To repair your attentional ecology, you must establish hard structural boundaries rather than relying on sheer willpower. This includes device curfews, physical reading rituals, and re-engaging with long-form prose that trains the eye to travel across paragraphs rather than skimming headlines.'
    ],
    practicalApplication: 'The Evening Paper Protocol: Spend the last 45 minutes of the evening reading exclusively printed paper or an e-ink display with zero backlighting or browser access.',
    interactiveSim: {
      type: 'quiz',
      question: 'When your phone simply sits face down on your desk next to you (even on silent), what does cognitive testing show?',
      options: [
        { text: 'No impact since the screen is off', isCorrect: false, feedback: 'Incorrect. Even off, your brain must expend active executive power resisting it.' },
        { text: 'A significant drop in available working memory and fluid intelligence', isCorrect: true, feedback: 'Exactly. Harvard and Texas researchers found the "Brain Drain" effect — physical proximity alone taxes cognitive bandwidth!' },
        { text: 'Increased focus due to reassurance', isCorrect: false, feedback: 'False. Subconscious vigilance for alerts drains prefrontal glucose.' }
      ]
    },
    relatedConceptIds: ['attention-residue-newport', 'pleasure-pain-lembke', 'identity-habits-clear'],
    gradient: 'from-sky-500/20 via-indigo-500/10 to-indigo-950/40',
    accentColor: '#38bdf8'
  },
  {
    id: 'stimulus-response-frankl',
    title: 'The Sacred Space Between Stimulus and Response',
    bookTitle: "Man's Search for Meaning",
    author: 'Viktor Frankl',
    year: 1946,
    category: 'Stoic Philosophy',
    readTimeMinutes: 2,
    tagline: 'Between stimulus and response there is a space. In that space is our power to choose.',
    coreQuote: 'Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.',
    doomscrollTrap: 'Stimulus (notification/boredom) immediately collapses into automatic Response (open feed), reducing human agency to an algorithmic stimulus-response loop.',
    cognitiveShift: 'Widen the space between trigger and action with a deliberate breath. That microsecond pause is where human dignity and freedom live.',
    deepDive: [
      'Surviving the darkest horrors of Auschwitz and Dachau, psychiatrist Viktor Frankl observed that the one thing that can never be taken from a human being is the last of human freedoms: to choose one’s attitude in any given set of circumstances.',
      'Most people in the modern digital age live in an unconscious stimulus-response twitch. A vibration buzzes -> the hand grabs the pocket. A second of waiting at a traffic light -> the thumb opens Instagram. The space between stimulus and response has shrunk to zero milliseconds.',
      'By consciously noticing the impulse before acting upon it, you reopen that sacred space. You observe the sensation of boredom or restlessness without obeying it. In that space, brain fog evaporates and genuine purpose takes root.'
    ],
    practicalApplication: 'The 3-Breath Interstitial: When you feel the compulsive twitch to grab your device, freeze your hands and take three slow, resonant belly breaths before choosing your action.',
    interactiveSim: {
      type: 'reflection',
      prompt: 'What was your most recent mindless impulse today? Write one sentence describing what you can choose in that space next time:'
    },
    relatedConceptIds: ['dichotomy-of-control-aurelius', 'system-1-2-kahneman', 'separation-of-tasks-kishimi'],
    gradient: 'from-yellow-500/20 via-amber-500/10 to-indigo-950/40',
    accentColor: '#eab308'
  },
  {
    id: 'molecule-of-more-lieberman',
    title: 'Dopamine vs The Here-and-Now Neurotransmitters',
    bookTitle: 'The Molecule of More',
    author: 'Daniel Z. Lieberman & Michael E. Long',
    year: 2018,
    category: 'Dopamine & Neuroscience',
    readTimeMinutes: 3,
    tagline: 'Dopamine is not the molecule of pleasure. It is the molecule of relentless craving.',
    coreQuote: 'Dopamine has only one message: More. It looks up at the sky; H&N looks at what is in your hands.',
    doomscrollTrap: 'Believing that scrolling will make you feel satisfied, when dopamine’s biological mandate is strictly to search, never to enjoy.',
    cognitiveShift: 'Transition from Dopaminergic anticipation to Here-and-Now (H&N) neurochemistry: Serotonin, Oxytocin, and Endorphins found in presence and sensory reality.',
    deepDive: [
      'A widespread misconception is that dopamine makes you feel happy. In reality, dopamine is exclusively the chemical of desire, anticipation, and pursuit of the unexpected. The moment you acquire what you wanted, dopamine plunges to zero and passes the torch to H&N (Here and Now) chemicals.',
      'Doomscrolling is an infinite dopaminergic loop with zero H&N payoff. You swipe because the next post might be incredible, but once you view it, satisfaction is impossible because dopamine only cares about the potential of the next post. You remain trapped in chronic anticipation.',
      'Real peace, grounded cognition, and mental clarity emerge when you activate H&N neurotransmitters: savoring the taste of warm tea, the tactile feeling of paper pages, physical human conversation, or deep somatic breathwork.'
    ],
    practicalApplication: 'The Sensory Grounding 5-4-3-2-1: When stuck in a scroll trance, name 5 objects you can see, 4 you can touch, 3 sounds you can hear, 2 scents, and 1 taste.',
    interactiveSim: {
      type: 'quiz',
      question: 'Which of the following activities activates Here-and-Now (H&N) chemicals to calm dopaminergic anxiety?',
      options: [
        { text: 'Browsing an endless wish list of products on Amazon', isCorrect: false, feedback: 'That is purely dopaminergic anticipation!' },
        { text: 'Checking your notifications to see who commented', isCorrect: false, feedback: 'Dopaminergic variable reward trap!' },
        { text: 'Sitting silently, feeling the soles of your feet on the floor and breathing deeply', isCorrect: true, feedback: 'Correct! Sensory presence activates H&N pathways, restoring parasympathetic calm.' }
      ]
    },
    relatedConceptIds: ['pleasure-pain-lembke', 'glymphatic-sleep-walker', 'stimulus-response-frankl'],
    gradient: 'from-fuchsia-500/20 via-pink-500/10 to-indigo-950/40',
    accentColor: '#d946ef'
  },
  {
    id: 'inversion-munger',
    title: 'Inversion Thinking: Avoiding Stupidity Over Chasing Brilliance',
    bookTitle: "Poor Charlie's Almanack",
    author: 'Charlie Munger',
    year: 2005,
    category: 'Mental Models & Systems',
    readTimeMinutes: 2,
    tagline: 'Invert, always invert. It is remarkable how much long-term advantage you can get by just not being stupid.',
    coreQuote: 'All I want to know is where I’m going to die so I’ll never go there.',
    doomscrollTrap: 'Searching endlessly for "productivity hacks" and "genius morning routines" while actively pouring toxic junk into your brain 6 hours a day.',
    cognitiveShift: 'Don’t try to become an enlightened genius. Simply identify what guarantees mental fog and ruthlessly eliminate it.',
    deepDive: [
      'Billionaire polymath Charlie Munger attributed much of his monumental worldly wisdom to the mental model of Inversion, borrowed from the mathematician Carl Jacobi: "Man muss immer umkehren" (Invert, always invert).',
      'Instead of asking: "How do I make my brain super sharp and hyper-focused today?", invert the problem: "What would I do if my goal was to guarantee chronic brain fog, anhedonia, short attention span, and fractured memory?"',
      'The answer is immediate: Keep the phone beside your pillow, check notifications within 5 seconds of waking, switch between 4 apps simultaneously while working, avoid daylight, and sleep poorly. By inverting, your path forward is crystal clear: avoid those catastrophic behaviors and clarity naturally ensues.'
    ],
    practicalApplication: 'The Anti-Goal List: Write down the 3 specific behaviors that consistently ruin your cognitive focus, and treat avoiding them as your primary metric of success.',
    interactiveSim: {
      type: 'reflection',
      prompt: 'Invert: What is the #1 habit guaranteed to rot your focus today? How will you actively block it?'
    },
    relatedConceptIds: ['via-negativa-taleb', 'feedback-loops-meadows', 'system-1-2-kahneman'],
    gradient: 'from-amber-600/20 via-yellow-600/10 to-indigo-950/40',
    accentColor: '#d97706'
  },
  {
    id: 'flow-csikszentmihalyi',
    title: 'The Flow Channel: The Antidote to Restless Apathy',
    bookTitle: 'Flow: The Psychology of Optimal Experience',
    author: 'Mihaly Csikszentmihalyi',
    year: 1990,
    category: 'Focus & Deep Work',
    readTimeMinutes: 3,
    tagline: 'Happiness is not passive hedonism; it is total absorption in challenging craftsmanship.',
    coreQuote: 'The best moments in our lives are not the passive, receptive, relaxing times… but when a person’s body or mind is stretched to its limits to accomplish something difficult.',
    doomscrollTrap: 'Passive consumption offers zero challenge with zero skill requirement, leaving you stranded in the bottom-left corner of the flow matrix: pure apathy.',
    cognitiveShift: 'Step into the Flow Channel: match a high-skill challenge to your current capabilities with immediate, clear goals.',
    deepDive: [
      'Psychologist Mihaly Csikszentmihalyi’s seminal research on human optimal experience proved that passive leisure (watching TV, scrolling feeds) rarely produces deep fulfillment. Instead, it breeds a low-grade psychic entropy where the mind wanders into anxieties and insecurities.',
      'Flow occurs in the sweet spot between boredom (low challenge, high skill) and anxiety (high challenge, low skill). In flow, your sense of self dissolves, time bends, and every ounce of mental energy is harmoniously aligned toward a clear objective.',
      'The ultimate cure for social media brainrot is not sitting quietly doing nothing forever; it is replacing hollow junk stimuli with deeply absorbing, active creative challenges that demand your full cognitive machinery.'
    ],
    practicalApplication: 'Calibrate your tasks: If a project feels boring, introduce a speed constraint or higher standard. If it causes paralysis, break it into smaller micro-steps.',
    interactiveSim: {
      type: 'consequence_slider',
      prompt: 'Adjust Challenge vs Skill level to see where your mind enters the Flow State:',
      minLabel: 'Low Challenge (Boredom & Slump)',
      maxLabel: 'Optimal Flow Channel'
    },
    relatedConceptIds: ['attention-residue-newport', 'identity-habits-clear', 'stolen-focus-hari'],
    gradient: 'from-indigo-500/20 via-blue-500/10 to-indigo-950/40',
    accentColor: '#6366f1'
  },
  {
    id: 'via-negativa-taleb',
    title: 'Via Negativa: Subtractive Wisdom for Mental Clarity',
    bookTitle: 'Antifragile',
    author: 'Nassim Nicholas Taleb',
    year: 2012,
    category: 'Mental Models & Systems',
    readTimeMinutes: 2,
    tagline: 'We know what is wrong with much more certainty than what is right. Clarity comes from subtraction.',
    coreQuote: 'The solution is not to add something, but to subtract. The difference between the charlatan and the professional: the charlatan adds, the professional removes.',
    doomscrollTrap: 'Trying to cure brain fog by downloading more apps, buying nootropic supplements, and watching 50 videos on how to fix your life.',
    cognitiveShift: 'Apply Via Negativa: Remove 3 news apps, stop checking morning alerts, unsubscribe from rage accounts. The clarity is already underneath the noise.',
    deepDive: [
      'In theology and epistemology, Via Negativa (the negative way) describes knowing something by articulating what it is not. Nassim Nicholas Taleb applied this principle to modern human flourishing and risk management.',
      'Modern humans have a pervasive bias toward additive solutions. When our heads feel heavy, we look for something new to consume: an energy drink, a podcast on biohacking, a focus supplement. But systemic fragility is almost always caused by unnatural, hyper-modern interventions.',
      'True antifog resilience is subtractive. You do not need to add more content to your overwhelmed mind; you need to remove the ceaseless informational toxicities that obstruct your innate cognitive brilliance.'
    ],
    practicalApplication: 'The 48-Hour Digital Fast: Delete your two most time-consuming social apps for a single weekend. Observe how your resting mental clarity rebounds.',
    interactiveSim: {
      type: 'control_dichotomy',
      prompt: 'Identify which items represent Additive Charlatanism vs Subtractive Clarity (Via Negativa):',
      itemsToCategorize: [
        { id: '1', label: 'Deleting notifications and news apps from your phone', correctCategory: 'right' },
        { id: '2', label: 'Buying a $60 nootropic pill to overcome 3 hours of late-night scrolling', correctCategory: 'left' },
        { id: '3', label: 'Fasting from screens for the first 90 minutes of your morning', correctCategory: 'right' },
        { id: '4', label: 'Adding 4 new productivity tracker apps to your daily routine', correctCategory: 'left' }
      ]
    },
    relatedConceptIds: ['inversion-munger', 'pleasure-pain-lembke', 'dichotomy-of-control-aurelius'],
    gradient: 'from-rose-600/20 via-red-600/10 to-indigo-950/40',
    accentColor: '#e11d48'
  },
  {
    id: 'separation-of-tasks-kishimi',
    title: 'Separation of Tasks: Liberating Yourself from Validation',
    bookTitle: 'The Courage to Be Disliked',
    author: 'Ichiro Kishimi & Fumitake Koga',
    year: 2013,
    category: 'Stoic Philosophy',
    readTimeMinutes: 3,
    tagline: 'All interpersonal conflict arises from stepping into other people’s tasks or having yours intruded upon.',
    coreQuote: 'Do not live your life to satisfy the expectations of other people.',
    doomscrollTrap: 'Obsessing over digital metrics (follower counts, likes, comments, approval) which are fundamentally someone else’s tasks.',
    cognitiveShift: 'Adlerian Task Separation: Focus only on what you bring to the table. How the audience judges it is exclusively their task, not yours.',
    deepDive: [
      'Drawing on the pioneering psychology of Alfred Adler, Kishimi and Koga lay out the concept of the Separation of Tasks. Whenever you feel interpersonal anxiety or distress, ask: "Whose task is this ultimately?"',
      'Whose task is it whether someone likes your post, approves of your choices, or criticizes you? It is their task. You cannot control their emotions or their judgment. When you try to control another person’s task, you enter a state of chronic neurosis.',
      'Social media algorithms exploit our ancient evolutionary desire for tribal approval. By decoupling your self-worth from third-party validation, you experience true psychological freedom and eliminate the anxious fog of digital comparison.'
    ],
    practicalApplication: 'When hesitating to post, speak, or create because of what someone might think, remind yourself: "My task is authentic creation. Their evaluation is their task."',
    interactiveSim: {
      type: 'quiz',
      question: 'You put hours into writing an essay, but it only gets 3 likes on Twitter. According to Adlerian psychology, whose task is this?',
      options: [
        { text: 'It was your task to make it more viral and appease the algorithm', isCorrect: false, feedback: 'Incorrect. Trying to control audience reactions leads to neurosis.' },
        { text: 'Your task was honest expression; how readers respond is their task', isCorrect: true, feedback: 'Exactly! Separate the tasks. You did your work with integrity; you have zero obligation to control their reaction.' },
        { text: 'It proves your idea was objectively unworthy', isCorrect: false, feedback: 'False. Conflating algorithmic clicks with truth is a social media trap.' }
      ]
    },
    relatedConceptIds: ['dichotomy-of-control-aurelius', 'stimulus-response-frankl', 'resulting-duke'],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-indigo-950/40',
    accentColor: '#a855f7'
  },
  {
    id: 'resulting-duke',
    title: 'The Resulting Fallacy: Decoupling Luck from Good Decisions',
    bookTitle: 'Thinking in Bets',
    author: 'Annie Duke',
    year: 2018,
    category: 'Strategy & Decision Making',
    readTimeMinutes: 2,
    tagline: 'Don’t judge decision quality solely by the immediate outcome. Life is poker, not chess.',
    coreQuote: 'Resulting is the human tendency to equate the quality of a decision directly with the quality of its outcome.',
    doomscrollTrap: 'Social media showcases survivorship-bias lottery winners as "geniuses" and mocks disciplined people whenever short-term variance strikes.',
    cognitiveShift: 'Think in probabilistic bets. Build a decision tree that is robust regardless of random short-term noise.',
    deepDive: [
      'World-champion poker player and cognitive scientist Annie Duke explains that human beings fall prey to "resulting": if a decision led to a good outcome, we label it brilliant; if it led to a bad outcome, we label it a mistake.',
      'In a world governed by hidden information and stochastic randomness, a high-quality decision can easily yield a negative outcome, and a reckless, stupid gamble can temporarily strike gold. Social media feeds amplify this delusion by presenting hyper-flukey viral anomalies as predictable blueprints.',
      'When you clear the fog of resulting, you stop chasing ephemeral short-term luck and focus on repeatable process integrity. You become immune to the FOMO generated by online hype cycles.'
    ],
    practicalApplication: 'The Decision Log: Before pulling the trigger on a meaningful choice, document your reasons and known probabilities. Review the decision based on your logic, not just the eventual outcome.',
    interactiveSim: {
      type: 'quiz',
      question: 'Someone drives home drunk after a party and arrives safely without an accident. Was driving drunk a good decision?',
      options: [
        { text: 'Yes, because the outcome was safe and successful', isCorrect: false, feedback: 'This is the classic Resulting fallacy! A terrible, reckless decision that got lucky with variance.' },
        { text: 'No, because the process had catastrophic downside risk regardless of this lucky outcome', isCorrect: true, feedback: 'Correct! Never evaluate decisions purely by results when randomness is involved.' }
      ]
    },
    relatedConceptIds: ['feedback-loops-meadows', 'inversion-munger', 'antifragile-taleb'],
    gradient: 'from-blue-600/20 via-indigo-600/10 to-indigo-950/40',
    accentColor: '#2563eb'
  },
  {
    id: 'glymphatic-sleep-walker',
    title: 'The Glymphatic Wash: Sleep as the Biological Brain Unrotter',
    bookTitle: 'Why We Sleep',
    author: 'Matthew Walker',
    year: 2017,
    category: 'Dopamine & Neuroscience',
    readTimeMinutes: 3,
    tagline: 'During deep NREM sleep, your brain literally power-washes neurotoxic debris.',
    coreQuote: 'Sleep is the single most effective thing we can do to reset our brain and body health each day.',
    doomscrollTrap: 'Bedtime revenge procrastination: staring at blue-lit screens till 2 AM, destroying slow-wave sleep and trapping neurotoxins in your cerebral tissue.',
    cognitiveShift: 'Protect the 8-hour sleep sanctum. Deep sleep is not lost time; it is active neuro-restoration and memory consolidation.',
    deepDive: [
      'Neuroscientist Matthew Walker elucidates the biological machinery of the Glymphatic System, discovered by Dr. Maiken Nedergaard. During slow-wave NREM sleep, glial cells in the brain shrink by roughly 60%, allowing cerebrospinal fluid to surge through brain tissue like a high-pressure dishwasher.',
      'This nocturnal surge rinses away metabolic waste accumulated during waking hours, including amyloid-beta plaques and tau proteins linked to Alzheimer’s and cognitive degradation.',
      'When you sacrifice sleep to doomscroll, you prevent this biological power-wash. You wake up with literal metabolic debris clouding your neural synapses — the biological reality behind severe brain fog. No amount of morning coffee can replace the glymphatic cycle.'
    ],
    practicalApplication: 'The Digital Sundown: Turn off all overhead white lighting and charge your phone outside the bedroom starting 60 minutes before your target sleep time.',
    interactiveSim: {
      type: 'consequence_slider',
      prompt: 'Adjust your average sleep hours to see simulated Glymphatic Wash efficiency & next-day Cognitive Precision:',
      minLabel: '4-5 Hours (Severe Toxin Residue)',
      maxLabel: '8 Hours (Complete Neural Reset)'
    },
    relatedConceptIds: ['pleasure-pain-lembke', 'molecule-of-more-lieberman', 'stolen-focus-hari'],
    gradient: 'from-indigo-600/20 via-purple-600/10 to-indigo-950/40',
    accentColor: '#4f46e5'
  }
];

export const CATEGORIES = [
  'All',
  'Cognitive Psychology',
  'Stoic Philosophy',
  'Mental Models & Systems',
  'Focus & Deep Work',
  'Dopamine & Neuroscience',
  'Strategy & Decision Making'
] as const;
