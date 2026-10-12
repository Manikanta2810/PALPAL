import { BookDefinition, BookConcept, LearningModule, Question } from './momTestBook';

export const STEAL_LIKE_AN_ARTIST_BOOK: BookDefinition = {
  id: "steal-like-an-artist",
  title: "Steal Like an Artist",
  author: "Austin Kleon",
  category: "Creativity and Creative Practice",
  purpose: "Learn how to use influences, curiosity, experimentation, and consistent creative work to develop an original voice.",
  content_policy: "Original educational curriculum organized around the book's major themes and central principles. Not a reproduction of the book.",
  learning_path: [
    {
      id: "creative_foundations",
      category: "1. Understanding Creativity and Originality",
      concepts: [
        {
          id: "nothing_from_nothing",
          title: "Nothing Comes From Nothing",
          principle: "Creative work develops from existing ideas, influences, and observations. Originality emerges through how inputs are selected and transformed.",
          underlying_concepts: [
            "Creative influence",
            "Knowledge recombination",
            "Cultural inheritance",
            "Pattern recognition",
            "Idea transformation"
          ],
          learn: "Waiting for a completely unprecedented idea out of thin air paralyzes creators. Every new idea is just a remix of one or more previous ideas.",
          bad_example: "Avoiding looking at any existing design out of fear that influence destroys originality.",
          better_example: "Studying print editorial, museum curation, and game mechanics to invent a fresh interactive learning format.",
          questions: [
            {
              type: "mcq",
              question: "A designer wants to create something original. Which approach is most productive?",
              options: [
                "Avoid all existing creative work completely",
                "Study several influences and transform selected principles into a distinct result",
                "Copy one successful competitor's layout exactly",
                "Wait until an entirely unprecedented idea appears with no influences"
              ],
              answer: 1,
              explanation: "Originality is synthesis and transformation; isolating yourself from influences starves your creative engine."
            }
          ],
          application: "Choose three works you admire and identify one underlying principle from each that you could adapt to a different project."
        },
        {
          id: "originality_as_transformation",
          title: "Originality Through Transformation",
          principle: "A creative work becomes distinctive through personal interpretation, combination, context, and execution rather than starting from scratch.",
          underlying_concepts: [
            "Synthesis",
            "Recombination",
            "Personal interpretation",
            "Contextual change",
            "Creative judgment"
          ],
          learn: "The question is not whether an idea has ever existed, but what new meaning, function, and utility your execution contributes.",
          bad_example: "Changing only the button colors and calling a copied app original.",
          better_example: "Taking an editorial book's depth and combining it with a flashcard feedback loop to build a 1-minute daily habit app.",
          questions: [
            {
              type: "mcq",
              question: "What most clearly distinguishes creative transformation from superficial copying?",
              options: [
                "Changing only the background color",
                "Reproducing another person's article under a new headline",
                "Using selected principles to produce a meaningfully different result and purpose",
                "Hiding all sources of inspiration"
              ],
              answer: 2,
              explanation: "Transformation injects an original purpose, distinct context, and personal synthesis into borrowed ingredients."
            }
          ],
          application: "Combine two ideas from totally unrelated fields into one prototype. Explain what each influence contributed."
        },
        {
          id: "taste_and_judgment",
          title: "Develop Your Creative Taste",
          principle: "Taste develops through deep exposure, active comparison, attention to craft, and deliberate reflection.",
          underlying_concepts: [
            "Aesthetic judgment",
            "Pattern recognition",
            "Critical observation",
            "Preference formation",
            "Deliberate practice"
          ],
          learn: "Collecting work is only the first step. Analyzing why something succeeds or fails sharpens your judgment for your own work.",
          bad_example: "Bookmarking 500 websites without ever analyzing why any of them work.",
          better_example: "Deconstructing an admired app's typography, pacing, and visual hierarchy to understand its cognitive effect.",
          questions: [
            {
              type: "mcq",
              question: "How does a creator turn passive admiration into usable creative skill?",
              options: [
                "Bookmark examples without examining them",
                "Analyze what works, why it works, and where the underlying principle applies",
                "Assume every viral work is of superior craftsmanship",
                "Copy the surface styling of every popular product"
              ],
              answer: 1,
              explanation: "Deconstructing the structural choices of great work transforms raw admiration into transferable skill."
            }
          ],
          application: "Pick one piece of work you love. List three deliberate choices the creator made and the emotional or functional effect each produces."
        }
      ]
    },
    {
      id: "learning_from_influences",
      category: "2. Studying Influences Without Becoming a Copy",
      concepts: [
        {
          id: "selective_influence",
          "title": "Choose Influences Deliberately",
          principle: "You are the sum of your influences. Choosing diverse, high-quality inputs widens the horizon of your creative combinations.",
          underlying_concepts: [
            "Curiosity",
            "Selective attention",
            "Cross-disciplinary learning",
            "Creative input diet",
            "Intellectual lineage"
          ],
          learn: "If you steal from only one person, everyone calls you a copycat. If you steal from ten different disciplines, people call you an original genius.",
          bad_example: "Studying only one designer in your niche and mimicking their exact portfolio style.",
          better_example: "Drawing inspiration from stand-up comedy pacing, architectural blueprints, and classic Japanese packaging.",
          questions: [
            {
              type: "mcq",
              question: "Which influence strategy is most likely to produce a distinctive creative voice?",
              options: [
                "Study only the single most popular person in your industry",
                "Explore varied sources across multiple disciplines and synthesize what each teaches",
                "Avoid reading or looking at anything unfamiliar",
                "Follow only today's trending aesthetic on social media"
              ],
              answer: 1,
              explanation: "Broad, cross-disciplinary inputs give you unique building blocks that competitors in your narrow niche never see."
            }
          ],
          application: "Create an influence genealogy map listing five creators or works across three completely different fields."
        },
        {
          id: "study_principles",
          title: "Study Principles, Not Just Surfaces",
          principle: "Look past surface ornamentation. Reverse-engineer the underlying thinking, trade-offs, and principles behind great work.",
          underlying_concepts: [
            "Abstraction",
            "Reverse engineering",
            "Transfer learning",
            "Design principles",
            "Context sensitivity"
          ],
          learn: "Surface imitation breaks as soon as context changes. Principles can be adapted to any medium, audience, or constraint.",
          bad_example: "Copying another company's exact fonts and dark mode palette without knowing why they chose them.",
          better_example: "Understanding how high-contrast typography reduces eye fatigue during intense focus sessions.",
          questions: [
            {
              type: "mcq",
              question: "You admire a book's ability to explain difficult concepts clearly. What should you study?",
              options: [
                "Only the cover art and illustration style",
                "How it sequences arguments, defines terms with analogies, and uses concrete examples",
                "How to duplicate the author's exact sentences",
                "How to make your website identical in appearance"
              ],
              answer: 1,
              explanation: "Underlying structural techniques (sequencing, pacing, analogies) are transferable; surface styling is not."
            }
          ],
          application: "Reverse-engineer one product: identify its core structural mechanism and explain how to apply that mechanism to your own work."
        },
        {
          id: "influence_vs_plagiarism",
          title: "Distinguish Influence from Plagiarism",
          principle: "Good theft honors, credits, deconstructs, and transforms. Bad theft degrades, skims, copies, and pretends.",
          underlying_concepts: [
            "Attribution",
            "Copyright & ethics",
            "Transformative creation",
            "Creative integrity",
            "Intellectual honesty"
          ],
          learn: "Plagiarism is passing off another person's expression as your own. Creative influence is learning their technique, giving attribution, and making something new.",
          bad_example: "Copying a blog post, swapping 4 words with a thesaurus, and putting your name on it.",
          better_example: "Citing the author's thesis, adding your own counter-examples, and applying it to your specific industry.",
          questions: [
            {
              type: "mcq",
              question: "A creator rewrites a competitor's article paragraph by paragraph using synonyms. Is this genuine original work?",
              options: [
                "Yes, because the dictionary words are different",
                "Yes, if the rewritten version is posted on a personal website",
                "No, superficial synonym substitution remains unethical copying of structure and expression",
                "Yes, if the creator changes the font"
              ],
              answer: 2,
              explanation: "Originality requires substantive personal thought, synthesis, and transformation, not cosmetic synonym swaps."
            }
          ],
          application: "Audit your current project: replace any borrowed phrasing or uncredited assets with your own original synthesis and explicit attribution."
        },
        {
          id: "combine_influences",
          title: "Combine Influences Into a New Direction",
          principle: "True creative alchemy happens at the intersection where two previously unconnected ideas collide.",
          underlying_concepts: [
            "Conceptual blending",
            "Cross-domain synthesis",
            "Analogical reasoning",
            "Creative intersection",
            "Coherence"
          ],
          learn: "Don't just collect ideas like a museum curator. Mash them together to solve an urgent friction in the real world.",
          bad_example: "Piling 10 unrelated features onto a product with no unifying philosophy.",
          better_example: "Merging the brevity of Twitter with the structured depth of mental models to create 60-second micro-learning.",
          questions: [
            {
              type: "mcq",
              question: "What makes a combination of influences truly powerful?",
              options: [
                "Shoving as many random features together as possible",
                "Selecting elements that harmonize to serve a clear, focused purpose",
                "Copying one dominant influence completely",
                "Refusing to test the result with users"
              ],
              answer: 1,
              explanation: "Synthesis is disciplined: the combined influences must reinforce a coherent, purposeful experience."
            }
          ],
          application: "Combine two influences into a one-page prototype. Write one sentence explaining what each influence contributes."
        }
      ]
    },
    {
      id: "creative_inputs",
      category: "3. Collecting and Managing Ideas",
      concepts: [
        {
          id: "curiosity_collection",
          title: "Collect What You Find Interesting",
          principle: "Always carry a notebook or swipe file. Collect observations, quotes, curiosities, and anomalies wherever you go.",
          underlying_concepts: [
            "Swipe files",
            "Active observation",
            "Idea incubation",
            "Serendipity capture",
            "Input curation"
          ],
          learn: "Your creative output is only as good as your daily input stream. Garbage in, garbage out. Curious gold in, original gold out.",
          bad_example: "Consuming endless algorithmic rage bait and wondering why you have creative block.",
          better_example: "Maintaining a swipe file of striking opening sentences, elegant pricing tables, and weird historical anecdotes.",
          questions: [
            {
              type: "mcq",
              question: "Why should a creator keep an ongoing swipe file or idea collection?",
              options: [
                "To procrastinate and avoid ever publishing real work",
                "To build a reservoir of raw material and insights for future creative synthesis",
                "To copy other people's work without permission",
                "To replace the need for practice"
              ],
              answer: 1,
              explanation: "A swipe file acts as an external brain, capturing serendipitous ideas when they occur so you never face a blank canvas."
            }
          ],
          application: "Start a digital or physical swipe file and record 5 remarkable ideas, sentences, or designs that stopped you in your tracks this week."
        },
        {
          id: "organized_references",
          title: "Make Your References Useful",
          principle: "A pile of unannotated bookmarks is a digital graveyard. Annotate why an idea matters the moment you save it.",
          underlying_concepts: [
            "Information retrieval",
            "Annotation",
            "Knowledge management",
            "Context preservation",
            "Searchability"
          ],
          learn: "Future you will have no memory of why you saved that random screenshot. Add a 10-word note capturing the underlying principle.",
          bad_example: "Saving 4,000 raw browser bookmarks in an unsorted 'Misc' folder.",
          better_example: "Tagging a screenshot: '#Onboarding - Great progressive disclosure with zero friction.'",
          questions: [
            {
              type: "mcq",
              question: "What makes a saved creative reference genuinely useful six months later?",
              options: [
                "Saving it with no title or note",
                "A concise annotation explaining the transferable mechanism and why it caught your eye",
                "Saving the identical link three times",
                "Hiding it in a buried nested folder"
              ],
              answer: 1,
              explanation: "Annotations capture your original mental context, making the reference searchable and actionable when needed."
            }
          ],
          application: "Review 5 saved bookmarks or screenshots. Annotate each with the specific transferable lesson it offers."
        },
        {
          id: "connect_distant_ideas",
          title: "Notice Connections Between Different Fields",
          principle: "The most innovative breakthroughs come from importing established practices from an unrelated industry into yours.",
          underlying_concepts: [
            "Cross-pollination",
            "Structural isomorphism",
            "Lateral thinking",
            "Transfer learning",
            "Unconventional inspiration"
          ],
          learn: "If you only look at your competitors, you will only produce incremental copies. Look at completely disconnected domains.",
          bad_example: "A gym software company copying another gym software company's exact dashboard.",
          better_example: "A healthcare app borrowing video game leveling mechanics to keep patients taking their daily medicine.",
          questions: [
            {
              type: "mcq",
              question: "You want to redesign customer onboarding for a B2B SaaS tool. Where could unexpected inspiration come from?",
              options: [
                "Only the direct competitor ranked #1 on Google",
                "Theme park queue line design or video game tutorial onboarding levels",
                "Only the latest generic web framework template",
                "Nowhere outside your engineering code base"
              ],
              answer: 1,
              explanation: "Distant fields that have solved the exact same human psychology problem (e.g., video game tutorials) yield radical insights."
            }
          ],
          application: "Identify one stubborn friction in your project. How would an architect, a chef, or a game designer solve it?"
        }
      ]
    },
    {
      id: "creative_identity",
      category: "4. Developing a Distinct Creative Voice",
      concepts: [
        {
          id: "learn_from_heroes",
          title: "Learn From Your Creative Heroes",
          principle: "Deconstruct your heroes not to worship them, but to trace who their heroes were. Climb up the family tree of ideas.",
          underlying_concepts: [
            "Lineage tracing",
            "Mentorship through work",
            "Historical context",
            "Root influences",
            "Demystification"
          ],
          learn: "Don't just copy your favorite creator. Ask: 'Who did they steal from?' Go straight to the source material that inspired them.",
          bad_example: "Mimicking Steve Jobs' black turtleneck instead of studying his design mentors like Dieter Rams.",
          better_example: "Tracing Austin Kleon back to blackout poetry, which traces back to Tom Phillips' A Humument, which traces back to Tristan Tzara.",
          questions: [
            {
              type: "mcq",
              question: "What is the most empowering way to study a creative hero?",
              options: [
                "Copy their superficial mannerisms and clothing",
                "Discover who inspired them and study the roots of their artistic lineage",
                "Assume their genius was supernatural and unlearnable",
                "Dismiss their entire body of work"
              ],
              answer: 1,
              explanation: "Studying your heroes' heroes takes you to primary sources and demystifies how great ideas are assembled."
            }
          ],
          application: "Pick your #1 creative hero. Research who inspired them and study one work by that root inspiration."
        },
        {
          id: "many_influences",
          title: "Build a Personal Mix of Influences",
          principle: "Your creative voice is the unique intersection of all the weird, varied things you genuinely love.",
          underlying_concepts: [
            "Personal curation",
            "Creative fingerprint",
            "Idiosyncratic taste",
            "Authentic enthusiasm",
            "Synthesis"
          ],
          learn: "Nobody else has lived your exact life, read your exact combination of books, or experienced your exact frustrations. That combination is your moat.",
          bad_example: "Pretending to like trendy aesthetics you secretly hate just to fit in with the crowd.",
          better_example: "Embracing your weird mix of 19th-century history, hip-hop production, and distributed systems architecture.",
          questions: [
            {
              type: "mcq",
              question: "How does a creator build an authentic personal voice?",
              options: [
                "Copying one famous person in every single detail",
                "Synthesizing an honest, idiosyncratic blend of varied personal passions and influences",
                "Deleting all personal taste and following algorithmic trends",
                "Never releasing any work publicly"
              ],
              answer: 1,
              explanation: "An authentic voice emerges naturally from the collision of your genuine, eccentric constellation of interests."
            }
          ],
          application: "List 5 unrelated subjects you have spent hours researching just for fun. How could their intersection shape a project?"
        },
        {
          id: "personal_experience",
          title: "Use Your Own Experience as Material",
          principle: "The work you want to see, read, or use that does not exist yet—that is the exact project you must make.",
          underlying_concepts: [
            "Scratching your own itch",
            "Personal perspective",
            "Authentic insight",
            "Gaps in the market",
            "Direct observation"
          ],
          learn: "Write the book you want to read. Build the software you wish you had yesterday. Film the movie you want to watch.",
          bad_example: "Building a golf training app when you have never played golf and hate the sport.",
          better_example: "Building a minimalist reading app because every existing app is bloated with social feeds and ads.",
          questions: [
            {
              type: "mcq",
              question: "What is the most reliable compass for choosing what to create next?",
              options: [
                "Whatever trending topic you saw on social media this morning",
                "The specific tool, essay, or artifact you urgently wish existed in the world for yourself",
                "Copying whatever your competitor just launched",
                "Asking strangers on the internet to pick a topic at random"
              ],
              answer: 1,
              explanation: "Making the thing you personally wish existed guarantees at least one passionate user and authentic craftsmanship."
            }
          ],
          application: "What tool, guide, or experience do you urgently wish existed today? Write a one-paragraph description of it."
        }
      ]
    },
    {
      id: "creative_practice",
      category: "5. Building a Sustainable Creative Practice",
      concepts: [
        {
          id: "make_things",
          title: "Start Making Things",
          principle: "You don't think your way into creative work; you make your way into creative thinking. Action precedes clarity.",
          underlying_concepts: [
            "Learning by doing",
            "Kinetic creativity",
            "Prototyping",
            "Overcoming inertia",
            "Feedback loops"
          ],
          learn: "Do not wait until you know who you are to start. You find out who you are by making things and seeing what emerges.",
          bad_example: "Spending 6 months writing manifestos and buying domain names without writing a single line of code or copy.",
          better_example: "Sitting down to write a messy 200-word draft in 15 minutes before lunch.",
          questions: [
            {
              type: "mcq",
              question: "You have saved 300 design articles but haven't shipped a project in months. What is the cure?",
              options: [
                "Read 50 more articles",
                "Pick one small idea and build a rough, imperfect prototype in 60 minutes",
                "Wait until your confidence is at 100%",
                "Buy new monitors and an expensive desk"
              ],
              answer: 1,
              explanation: "Action breaks mental paralysis. Real insight and self-discovery happen through hands-on fabrication."
            }
          ],
          application: "Set a timer for 30 minutes. Build a rough, unpolished version of one idea right now without judging it."
        },
        {
          id: "process_over_perfection",
          title: "Value the Creative Process",
          principle: "Amateurs wait for inspiration. Professionals set a daily appointment with the blank page and show up consistently.",
          underlying_concepts: [
            "Creative discipline",
            "Routine over motivation",
            "Compound effort",
            "Tolerance for bad drafts",
            "Work rhythm"
          ],
          learn: "If you only work when you feel inspired, you will work 3 days a year. Fall in love with the humble, unglamorous daily routine.",
          bad_example: "Binge-working for 48 hours straight once every four months until burnout hits.",
          better_example: "Writing 300 words every morning at 7:30 AM before checking email.",
          questions: [
            {
              type: "mcq",
              question: "What produces long-term creative mastery?",
              options: [
                "Waiting passively for lightning strikes of genius",
                "A repeatable daily or weekly habit that compounds small efforts over years",
                "Deleting every piece of work that isn't instantly flawless",
                "Measuring your self-worth solely by viral metrics"
              ],
              answer: 1,
              explanation: "Small daily actions compound exponentially over time; routine protects you from the emotional volatility of inspiration."
            }
          ],
          application: "Define your sacred creative appointment: What exact time and place will you dedicate 30 minutes to your craft tomorrow?"
        },
        {
          id: "side_projects",
          title: "Use Small Projects to Explore",
          principle: "Side projects and hobbies are where the magic hides. They give you permission to play without the burden of commercial success.",
          underlying_concepts: [
            "Low-stakes play",
            "Permission to fail",
            "Serendipity",
            "Creative recharge",
            "Experimental sandboxes"
          ],
          learn: "When work becomes too serious, fear suffocates experimentation. Side projects keep your playful curiosity alive.",
          bad_example: "Demanding that every single side experiment immediately generate venture-scale revenue.",
          better_example: "A weekend coding experiment made just for fun that ends up inspiring your company's core product.",
          questions: [
            {
              type: "mcq",
              question: "Why are low-stakes side projects essential for creative health?",
              options: [
                "To distract you from ever finishing important work",
                "They provide a playful, zero-pressure sandbox where serendipitous breakthroughs happen",
                "To prove to strangers that you never sleep",
                "To guarantee immediate profit on day one"
              ],
              answer: 1,
              explanation: "Play removes the fear of failure, allowing you to explore eccentric ideas that strict commercial projects would kill."
            }
          ],
          application: "Start a tiny weekend project with zero commercial pressure. Do it purely because you are curious."
        },
        {
          id: "unfinished_work",
          title: "Finish Small Pieces of Work",
          principle: "The secret to shipping big projects is finishing dozens of tiny ones. Finish small things constantly.",
          underlying_concepts: [
            "Shipping muscle",
            "Scope reduction",
            "Completion dopamine",
            "Feedback reality",
            "Momentum"
          ],
          learn: "Starting is fun; finishing is where the skill is forged. A finished small project in the real world beats a giant masterpiece trapped in your head.",
          bad_example: "Having 24 half-finished drafts sitting in a folder that no human has ever seen.",
          better_example: "Pruning an ambitious 10-chapter book down to a single punchy 500-word essay and publishing it today.",
          questions: [
            {
              type: "mcq",
              question: "You have 10 half-finished projects. How do you break the cycle of non-completion?",
              options: [
                "Start an eleventh project with even bigger scope",
                "Radically shrink the scope of one project to the bare essential deliverable and finish it today",
                "Wait until you have 3 months of uninterrupted vacation",
                "Give up on creative work entirely"
              ],
              answer: 1,
              explanation: "Aggressively ruthlessly cutting scope allows you to exercise your shipping muscle and receive real-world feedback."
            }
          ],
          application: "Pick one unfinished project on your hard drive. Cut 80% of the scope and finish the remaining 20% today."
        }
      ]
    },
    {
      id: "constraints_and_environment",
      category: "6. Using Constraints, Boredom, and Environment",
      concepts: [
        {
          id: "constraints",
          title: "Use Constraints as Creative Tools",
          principle: "Limitless freedom is the enemy of art. Imposing tight constraints triggers resourcefulness and sparks breakthroughs.",
          underlying_concepts: [
            "Creative friction",
            "Bounded problem spaces",
            "Resourcefulness",
            "Scope boundaries",
            "Eliminating choice paralysis"
          ],
          learn: "Dr. Seuss wrote 'Green Eggs and Ham' on a bet that he couldn't write a book using only 50 distinct words. Constraints force invention.",
          bad_example: "Staring blankly at an infinite empty Figma canvas with no idea where to start.",
          better_example: "Forcing yourself to design a landing page using only black, white, and a single system font.",
          questions: [
            {
              type: "mcq",
              question: "How do strict creative constraints accelerate original work?",
              options: [
                "They prevent you from thinking altogether",
                "They eliminate decision paralysis and force unexpected, resourceful solutions within a bounded sandbox",
                "They guarantee that your work will look generic",
                "They make creative work completely impossible"
              ],
              answer: 1,
              explanation: "Constraints eliminate infinite choices, forcing your brain to dig deep into inventive combinations within tight boundaries."
            }
          ],
          application: "Impose an extreme constraint on your next task: 15 minutes only, 100 words only, or 2 colors only. Deliver it."
        },
        {
          id: "boredom_and_attention",
          title: "Make Room for Quiet Attention",
          principle: "Boredom is the breeding ground for new ideas. Protect quiet spaces where your wandering mind can synthesize thoughts.",
          underlying_concepts: [
            "Mind wandering",
            "Default mode network",
            "Dopamine detox",
            "Subconscious incubation",
            "Deep focus"
          ],
          learn: "If you reach for your phone every time you wait in line for 20 seconds, you starve your brain of the quiet boredom where novel connections form.",
          bad_example: "Checking social media feeds, Slack, and email every 90 seconds throughout the workday.",
          better_example: "Taking a 30-minute walk with no podcasts, no music, and no phone, letting thoughts drift freely.",
          questions: [
            {
              type: "mcq",
              question: "Why is intentional quiet time or boredom crucial for creative breakthroughs?",
              options: [
                "Because great ideas only happen when reading Twitter threads",
                "Quiet allows the subconscious default mode network to connect distant memories and incubate solutions",
                "It has no benefit; creators should maximize stimulation 24/7",
                "To make you fall asleep at your desk"
              ],
              answer: 1,
              explanation: "Constant stimulation crowds out the quiet mental space required for subconscious idea incubation and lateral synthesis."
            }
          ],
          application: "Take a 20-minute walk today with zero headphones and no phone. Notice what thoughts bubble up when your brain gets bored."
        },
        {
          id: "creative_environment",
          title: "Design an Environment That Supports Work",
          principle: "Separate your digital desk from your analog desk. Use physical tools to generate ideas and digital tools to edit and publish.",
          underlying_concepts: [
            "Analog vs digital space",
            "Kinetic thinking",
            "Distraction friction",
            "Spatial cues",
            "Tool ergonomics"
          ],
          learn: "Screens invite the perfectionist editor too early. Paper, markers, sticky notes, and whiteboards invite the messy, playful creator.",
          bad_example: "Trying to brainstorm high-level creative concepts directly inside a rigid formatting tool with grammar checkers blinking.",
          better_example: "Sketching concepts with a bold Sharpie on index cards before touching your laptop keyboard.",
          questions: [
            {
              type: "mcq",
              question: "Why does Austin Kleon recommend having both an analog desk and a digital desk?",
              options: [
                "So you can spend double the money on furniture",
                "The analog desk sparks messy kinetic play without screens; the digital desk executes and polishes the work",
                "Because digital tools are evil and should never be used",
                "To store extra cardboard boxes"
              ],
              answer: 1,
              explanation: "Physical analog tools invite bodily movement and wild experimentation; digital tools excel at precision editing and distribution."
            }
          ],
          application: "Step away from your screen. Sketch the architecture or outline of your next project on a blank sheet of paper with a marker."
        }
      ]
    },
    {
      id: "sharing_and_growth",
      category: "7. Sharing Work and Learning in Public",
      concepts: [
        {
          id: "share_process",
          title: "Share What You Are Learning",
          principle: "Don't wait until you're an expert to share. Show your work in progress, share your experiments, and teach what you just figured out.",
          underlying_concepts: [
            "Learning in public",
            "Process transparency",
            "Community magnet",
            "Show your work",
            "Serendipity surface area"
          ],
          learn: "Document, don't create. Sharing the messy behind-the-scenes process turns strangers into collaborators and attracts your tribe.",
          bad_example: "Working in total secrecy for 4 years, emerging with a product, and being met with complete silence.",
          better_example: "Sharing weekly screenshots, lessons learned, and honest mistakes as you build your app in public.",
          questions: [
            {
              type: "mcq",
              question: "What is the primary advantage of showing your work in public as a beginner?",
              options: [
                "You can pretend to be a guru with 20 years of experience",
                "It documents your learning journey, invites early constructive feedback, and attracts kindred thinkers",
                "It guarantees immediate viral fame overnight",
                "It allows you to sell expensive consulting courses immediately"
              ],
              answer: 1,
              explanation: "Sharing your real process builds authentic trust, enlarges your luck surface area, and demystifies the craft for others."
            }
          ],
          application: "Write a short 3-bullet post sharing one thing you struggled with this week and how you solved it."
        },
        {
          id: "feedback_and_iteration",
          title: "Use Feedback Without Losing Direction",
          principle: "Listen to where users get confused, but don't let every random opinion dictate your artistic compass.",
          underlying_concepts: [
            "Feedback filtering",
            "Audience resonance",
            "Creative autonomy",
            "Objective signals vs subjective noise",
            "Iteration"
          ],
          learn: "Feedback tells you what audiences felt and where they stumbled. It rarely tells you what bold, visionary solution to build next.",
          bad_example: "Rewriting your entire book or redesigning your entire interface every time one stranger leaves a negative comment.",
          better_example: "Noticing that 5 testers failed on step 2, fixing the friction, while preserving your distinctive aesthetic point of view.",
          questions: [
            {
              type: "mcq",
              question: "How should a creator interpret critical user feedback?",
              options: [
                "Obey every single suggestion literally and immediately",
                "Look for recurring patterns of confusion, but evaluate solutions against your core project vision",
                "Block and insult anyone who doesn't praise your work",
                "Abandon the project completely after one negative comment"
              ],
              answer: 1,
              explanation: "Users are experts on their own confusion, but the creator must design the solution that aligns with the overall vision."
            }
          ],
          application: "Gather feedback from two testers on your work. Identify the underlying point of friction without changing your core point of view."
        },
        {
          id: "protect_creative_identity",
          title: "Build a Distinct Voice While Staying Open",
          principle: "Remain deeply curious and teachable, but cultivate the courage to make bold, idiosyncratic choices that are unmistakably yours.",
          underlying_concepts: [
            "Creative sovereignty",
            "Courage to polarize",
            "Long-term stamina",
            "Artistic integrity",
            "Inner scorecard"
          ],
          learn: "If everyone likes your work, it is probably bland and harmless. Great work polarizes: some will misunderstand it, but the right people will love it forever.",
          bad_example: "Sanding off all your distinctive quirks to make corporate, committee-approved beige work.",
          better_example: "Owning your bold, hand-drawn, high-contrast style that makes your work recognizable across the room.",
          questions: [
            {
              type: "mcq",
              question: "What is the hallmark of a mature, recognizable creative voice?",
              options: [
                "It copies whatever trend is most popular this week",
                "It balances open-minded curiosity with the courage to make bold, distinctive choices that reflect an inner vision",
                "It seeks 100% universal approval from all demographics",
                "It refuses to ever learn new tools or techniques"
              ],
              answer: 1,
              explanation: "Maturity means being confident enough to make distinct choices while remaining humble enough to keep learning from everything."
            }
          ],
          application: "Write your creative manifesto: What are three non-negotiable principles that will define the quality and spirit of your work?"
        }
      ]
    }
  ],
  final_challenge: {
    title: "Turn Inspiration Into Original Work",
    objective: "Create and share a small original artifact using deliberate influences, experimentation, and reflection.",
    steps: [
      {
        id: 1,
        task: "Choose a question or problem",
        deliverable: "Select something you genuinely want to explain, explore, improve, or create."
      },
      {
        id: 2,
        task: "Collect influences",
        deliverable: "Choose three relevant works or ideas and identify what you can learn from each."
      },
      {
        id: 3,
        task: "Identify transferable principles",
        deliverable: "Record the underlying techniques or ideas instead of copying the finished works."
      },
      {
        id: 4,
        task: "Combine and transform",
        deliverable: "Use the selected principles to create an artifact with a distinct purpose, context, and execution."
      },
      {
        id: 5,
        task: "Work within a constraint",
        deliverable: "Set a useful limit on time, format, length, or tools and complete a first version."
      },
      {
        id: 6,
        task: "Get feedback",
        deliverable: "Share the result with a relevant person and ask what works, what is unclear, and what could improve."
      },
      {
        id: 7,
        task: "Reflect and revise",
        deliverable: "Identify what you learned, what you changed, and what you would try next."
      }
    ],
    user_questions: [
      {
        id: "sc1",
        prompt: "What did you create, and who is it for?",
        input_type: "text",
        required: true
      },
      {
        id: "sc2",
        prompt: "Which three influences did you study?",
        input_type: "text",
        required: true
      },
      {
        id: "sc3",
        prompt: "What principle did you learn from each influence?",
        input_type: "text",
        required: true
      },
      {
        id: "sc4",
        prompt: "What did you change or combine to make the result your own?",
        input_type: "text",
        required: true
      },
      {
        id: "sc5",
        prompt: "What feedback did you receive from your tester?",
        input_type: "text",
        required: true
      },
      {
        id: "sc6",
        prompt: "What will you improve, iterate, or create next?",
        input_type: "text",
        required: true
      }
    ],
    completion_criteria: [
      "The user completes an actual creative artifact",
      "The user identifies their influences",
      "The user explains how the influences were transformed",
      "The work respects attribution and intellectual property",
      "The user obtains feedback or evaluates the result",
      "The user identifies a concrete next step"
    ]
  }
};

// Helper: Convert the entire book into standard BoringBros Idea[] objects
export function getStealLikeAnArtistIdeas() {
  const ideas: Array<{
    id: string;
    s: string;
    t: string;
    b: string;
    d: string;
    e: string;
    q: string;
    o: string[];
    k: number;
    x: string;
  }> = [];

  for (const module of STEAL_LIKE_AN_ARTIST_BOOK.learning_path) {
    for (const concept of module.concepts) {
      const q = concept.questions[0];
      const ex = concept.bad_example && concept.better_example
        ? `❌ Avoid: "${concept.bad_example}"\n✅ Practice: "${concept.better_example}"`
        : concept.better_example || concept.principle;

      ideas.push({
        id: `sla-${concept.id.replace(/_/g, '-')}`,
        s: "Startups",
        t: concept.title,
        b: "Steal Like an Artist",
        d: `${concept.principle} ${concept.learn}`,
        e: ex,
        q: q.question,
        o: q.options,
        k: q.answer,
        x: q.explanation
      });
    }
  }

  return ideas;
}
