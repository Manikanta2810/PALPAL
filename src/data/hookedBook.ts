import { BookDefinition } from './momTestBook';

export const HOOKED_BOOK: BookDefinition = {
  id: "hooked",
  title: "Hooked: How to Build Habit-Forming Products",
  author: "Nir Eyal",
  category: "Behavioral Design",
  purpose: "Understand how products encourage repeated behavior and learn to design useful, ethical experiences that people want to return to.",
  content_policy: "Original educational curriculum organized around Nir Eyal's published Hook Model framework and chapter themes. Not a reproduction of the book.",
  learning_path: [
    {
      id: "habit_fundamentals",
      category: "1. Understanding Habits and the Habit Zone",
      concepts: [
        {
          id: "habit_zone",
          title: "The Habit Zone",
          principle: "A product is a stronger candidate for habit formation when people have a recurring reason to use it and the product provides meaningful value in that situation.",
          underlying_concepts: [
            "Frequency of need",
            "Perceived utility",
            "Repeated behavior",
            "User retention",
            "Context-dependent habits"
          ],
          learn: "Habits live at the intersection of frequency and perceived utility. A product used once a year has very different habit-forming dynamics from one that helps with a daily or weekly friction point.",
          bad_example: "Assuming every user should open your enterprise tax software every morning just because you built a daily notification feature.",
          better_example: "Identifying that founders check their core product metrics every morning and designing a 30-second daily learning habit around that natural pause.",
          questions: [
            {
              type: "mcq",
              question: "Which product is the stronger candidate for a recurring habit?",
              options: [
                "An app used once for an unusual emergency",
                "A learning tool that repeatedly helps users understand difficult concepts",
                "A website with no clear user benefit",
                "A product that sends frequent notifications but provides little value"
              ],
              answer: 1,
              explanation: "A recurring need paired with a genuinely useful outcome provides the authentic foundation for repeated use."
            }
          ],
          application: "Identify the recurring user need your product serves and measure how often that need genuinely occurs in your user's life."
        },
        {
          id: "habit_vs_one_time_use",
          title: "Understand the Difference Between a Habit and a Visit",
          principle: "A single visit, signup, or completed task does not establish a habit. Habit formation concerns behavior that recurs in relevant contexts over time.",
          underlying_concepts: [
            "Repeat behavior",
            "Retention",
            "Context cues",
            "Behavioral consistency"
          ],
          learn: "Acquisition metrics can look impressive even when users never return. A spike in signups means people were curious once; a habit means they return without external coercion.",
          bad_example: "Celebrating 10,000 signups from Product Hunt while 98% of users never open the app a second time.",
          better_example: "Tracking day-30 retention cohorts to observe how many learners independently return to complete their third and fourth modules.",
          questions: [
            {
              type: "mcq",
              question: "A thousand people register, but almost none return. What does this suggest?",
              options: [
                "A strong user habit already exists",
                "Acquisition has occurred, but repeated value and retention remain unproven",
                "The product has achieved product-market fit",
                "More signups automatically solve the problem"
              ],
              answer: 1,
              explanation: "The team must investigate why users do not return. Acquisition does not establish repeated behavior or retained value."
            }
          ],
          application: "Measure how many new users return and complete a meaningful second action within 7 days of signing up."
        },
        {
          id: "habit_opportunity",
          title: "Find a Recurring User Need",
          principle: "Habit-forming opportunities arise when a product addresses a recurring situation, motivation, or problem more conveniently or effectively than existing alternatives.",
          underlying_concepts: [
            "Recurring needs",
            "Behavioral context",
            "Existing alternatives",
            "Customer research"
          ],
          learn: "You cannot manufacture a recurring need purely through notifications. The underlying itch must already exist in the user's daily or weekly workflow.",
          bad_example: "Building complex daily gamification features for a tool that people only need when moving to a new apartment.",
          better_example: "Recognizing that founders make high-stakes trade-offs daily and offering a 2-minute decision checklist before meetings.",
          questions: [
            {
              type: "mcq",
              question: "What should a founder investigate before designing a daily engagement loop?",
              options: [
                "How many notifications competitors send",
                "Whether the target user has a recurring need worth addressing",
                "Which animation looks most exciting",
                "How to prevent users from leaving"
              ],
              answer: 1,
              explanation: "A genuine, recurring need provides the legitimate basis and motivation for repeated use."
            }
          ],
          application: "Interview three target users about when their problem occurs and what workarounds they currently use."
        }
      ]
    },
    {
      id: "triggers",
      category: "2. Triggers: Initiating Behavior",
      concepts: [
        {
          id: "trigger_basics",
          title: "Understand Triggers",
          principle: "A trigger is a cue that prompts a person to consider or begin a behavior. Triggers are the spark plugs of the habit loop.",
          underlying_concepts: [
            "Behavioral cues",
            "Context",
            "Attention",
            "Action initiation"
          ],
          learn: "Even a tremendously useful product will gather dust if users have no timely prompt reminding them to engage when the relevant need arises.",
          bad_example: "Assuming users will magically remember to visit your web app every Tuesday with zero environmental or cognitive cues.",
          better_example: "Identifying the precise moment of friction or intellectual curiosity that prompts a reader to consult mental models.",
          questions: [
            {
              type: "mcq",
              question: "What is the primary role of a trigger?",
              "options": [
                "Guarantee that a user completes a task",
                "Prompt the user toward a behavior",
                "Replace the need for product value",
                "Guarantee a purchase"
              ],
              answer: 1,
              explanation: "Triggers initiate or prompt behavior; they do not guarantee completion or replace intrinsic product value."
            }
          ],
          application: "Identify the exact cue that could reasonably remind a user of your product's core value at the right moment."
        },
        {
          id: "external_triggers",
          title: "External Triggers",
          principle: "External triggers communicate information or cues from the environment to direct a person toward taking an action.",
          underlying_concepts: [
            "Notifications",
            "Links",
            "Visible calls to action",
            "Environmental prompts",
            "Contextual relevance"
          ],
          learn: "External triggers include emails, push notifications, home screen app icons, and contextual links. When relevant and user-controlled, they guide first-time or returning actions.",
          bad_example: "Blasting generic, spammy promotional alerts every morning at 7:00 AM regardless of user interest.",
          better_example: "Sending a user-configured morning digest or an alert when a teammate replies to an insight they shared.",
          questions: [
            {
              type: "mcq",
              question: "Which is an external trigger?",
              options: [
                "Feeling confused about a concept",
                "Remembering a personal goal without a new external cue",
                "A user-requested reminder to continue a lesson",
                "Feeling bored"
              ],
              answer: 2,
              explanation: "The user-requested reminder originates outside the user's internal mental state as an environmental prompt."
            }
          ],
          application: "Design one relevant, high-signal external trigger that users can easily configure, snooze, or disable."
        },
        {
          id: "internal_triggers",
          title: "Internal Triggers",
          principle: "Internal triggers are thoughts, emotions, or situations that become automatically associated with a behavior in memory.",
          underlying_concepts: [
            "Emotional associations",
            "Contextual learning",
            "Memory",
            "Behavioral conditioning"
          ],
          learn: "When a product becomes wired to an internal trigger, users open it automatically without needing an email or push alert. Boredom triggers YouTube; loneliness triggers Instagram; strategic confusion triggers BoringBros.",
          bad_example: "Relying perpetually on email blasts because users never form any mental association with your app.",
          better_example: "A founder encountering customer churn and instinctively opening your pricing and positioning models to diagnose it.",
          questions: [
            {
              type: "mcq",
              question: "Which situation best illustrates an internal trigger?",
              options: [
                "A promotional email arrives",
                "A banner advert appears",
                "A learner feels confused and remembers a tool that helped before",
                "A colleague sends a link"
              ],
              answer: 2,
              explanation: "An internal emotional state (confusion) is associated with a previously helpful product in memory."
            }
          ],
          application: "Identify the negative or curious internal emotional state in which your product provides the fastest relief or clarity."
        },
        {
          id: "emotional_triggers",
          title: "Connect the Product to a Genuine User Need",
          principle: "People use products in response to uncomfortable internal states. Understanding the underlying emotion helps designers build a helpful solution rather than exploit the vulnerability.",
          underlying_concepts: [
            "Emotional context",
            "Motivation",
            "Coping behavior",
            "Need satisfaction",
            "Ethical design"
          ],
          learn: "Products often answer negative emotions like confusion, boredom, fear of missing out, or fatigue. Ethical design resolves the discomfort instead of magnifying it.",
          bad_example: "Stoking fear and inadequacy through simulated loss counters to panic users into buying digital currency.",
          better_example: "Recognizing that students feel overwhelmed by jargon and offering calm, step-by-step mental models that build confidence.",
          questions: [
            {
              type: "mcq",
              question: "A user opens a learning app when they feel confused. What is a responsible design response?",
              options: [
                "Make the confusion worse so the user stays longer",
                "Offer a clear explanation and a useful next step",
                "Hide the answer behind unnecessary screens",
                "Send unrelated notifications"
              ],
              answer: 1,
              explanation: "The product addresses the authentic need that prompted the behavior rather than exploiting distress."
            }
          ],
          application: "Describe one user emotional state your product alleviates and verify that your experience resolves it without creating anxiety."
        },
        {
          id: "trigger_transition",
          title: "Move from External Cues to Remembered Value",
          principle: "Repeated helpful experiences strengthen the association between a situation and a product, gradually replacing external notifications with autonomous habits.",
          underlying_concepts: [
            "Association learning",
            "Repeated experience",
            "Contextual cues",
            "User autonomy"
          ],
          learn: "External triggers are training wheels. If an app requires endless push notifications after six months of use, it hasn't formed an authentic habit.",
          bad_example: "Doubling notification frequency every week to artificially prop up dropping retention metrics.",
          better_example: "Using gentle onboarding prompts initially, then celebrating as users begin opening the app independently each morning.",
          questions: [
            {
              type: "mcq",
              question: "What is a healthier long-term goal for a learning app?",
              options: [
                "Send more notifications every week regardless of user response",
                "Help users associate a recurring learning need with a genuinely useful experience",
                "Prevent users from disabling reminders",
                "Make every session mandatory"
              ],
              answer: 1,
              explanation: "The product becomes relevant because it serves a recurring need autonomously in the user's routine."
            }
          ],
          application: "Track what percentage of your active users return through organic initiative versus external notification clicks."
        }
      ]
    },
    {
      id: "action",
      category: "3. Action: Making Behavior Easier",
      concepts: [
        {
          id: "action_basics",
          title: "Understand the Action Phase",
          principle: "The action phase is the behavior a person performs in anticipation of an outcome. It must be simple, immediate, and low-friction.",
          underlying_concepts: [
            "Behavioral intention",
            "Usability",
            "Motivation",
            "Friction",
            "Task completion"
          ],
          learn: "According to BJ Fogg's Behavior Model (B = MAP), a behavior happens when Motivation, Ability, and a Prompt converge. If an action is too hard, high motivation won't save it.",
          bad_example: "Requiring a user to register with password confirmation, verify an email, and fill out a 10-field survey before reading one tip.",
          better_example: "Letting users answer a multiple-choice active recall question in one tap directly from the landing page.",
          questions: [
            {
              type: "mcq",
              question: "A learner clicks a lesson reminder but abandons the app before starting. What should the team investigate?",
              options: [
                "Only the logo",
                "The motivation to continue and the friction between the click and the lesson",
                "How to send reminders more frequently",
                "Whether the learner should be prevented from leaving"
              ],
              answer: 1,
              explanation: "Both motivation and practical usability barriers (friction) directly dictate whether the intended action occurs."
            }
          ],
          application: "Map every click and field between noticing your trigger and completing the primary value action."
        },
        {
          id: "motivation",
          title: "Understand User Motivation",
          principle: "Motivation is the energy or willingness to act. Different users have distinct drivers, such as seeking pleasure, avoiding pain, seeking social acceptance, or mastering a skill.",
          underlying_concepts: [
            "User goals",
            "Perceived benefit",
            "Emotional state",
            "Context",
            "Behavioral intent"
          ],
          learn: "Never assume all users want the same thing. One user studies mental models to build an angel investing portfolio; another wants to pass an interview tomorrow morning.",
          bad_example: "Assuming all learners want high-stress competitive leaderboards when many prioritize quiet reflective mastery.",
          better_example: "Letting users choose their thinker archetype (Founder, Strategist, Polymath) so lesson framing matches their goals.",
          questions: [
            {
              type: "mcq",
              question: "Two learners use the same app. One wants to pass an exam, while the other wants to explore a topic. What should the design recognize?",
              options: [
                "Both users must have identical motivations",
                "Different user goals can influence the value of the same action",
                "Motivation never affects behavior",
                "The app should ignore user goals"
              ],
              answer: 1,
              explanation: "Different user motivations mean the perceived value and relevance of the exact same action will vary."
            }
          ],
          application: "Interview users to discover their top two distinct motivations and verify your copy addresses both."
        },
        {
          id: "ability_and_friction",
          title: "Reduce Friction and Increase Ability",
          principle: "A behavior becomes dramatically more probable when the task requires less time, cognitive load, physical effort, or money.",
          underlying_concepts: [
            "Usability",
            "Cognitive load",
            "Task complexity",
            "Time cost",
            "Interaction friction"
          ],
          learn: "To increase behavior, making the task easier is almost always more effective than attempting to motivate people more. Shorten the steps, eliminate choices, reduce reading load.",
          bad_example: "Asking mobile learners to draft comprehensive 3-page business plans on a tiny touchscreen keyboard.",
          better_example: "Breaking strategic concepts into 60-second micro-lessons with single-tap active recall options.",
          questions: [
            {
              type: "mcq",
              question: "Users want to start a lesson but abandon a long onboarding form. What is a sensible first experiment?",
              options: [
                "Add more required fields",
                "Remove unnecessary steps and test a simpler start",
                "Hide the lesson until registration is complete",
                "Send reminders before fixing onboarding"
              ],
              answer: 1,
              explanation: "Removing unnecessary steps directly increases user ability by lowering interaction friction."
            }
          ],
          application: "Audit your core flow and eliminate at least one field or screen that is not strictly necessary for first value."
        },
        {
          id: "prompts_and_calls_to_action",
          title: "Make the Next Action Clear",
          principle: "A clear prompt tells the user exactly what action to take and how to take it immediately.",
          underlying_concepts: [
            "Interaction design",
            "Action clarity",
            "Choice architecture",
            "Usability"
          ],
          learn: "Ambiguity kills momentum. When a user finishes a lesson and encounters 5 competing icons with no clear hierarchy, cognitive overload triggers an exit.",
          bad_example: "Leaving the screen blank after a quiz with three ambiguous, unlabelled icons at the bottom.",
          better_example: "Providing a prominent primary action button: 'Continue to Next Concept: The Habit Zone →'.",
          questions: [
            {
              type: "mcq",
              question: "A lesson ends with several unexplained icons. What is a useful design change?",
              options: [
                "Add more icons",
                "Make the next useful action explicit",
                "Remove all explanatory text",
                "Require users to guess"
              ],
              answer: 1,
              explanation: "Making the next useful action clear and explicit eliminates decision paralysis."
            }
          ],
          application: "Inspect your completion screens to ensure there is exactly one dominant, unmissable primary call to action."
        },
        {
          id: "ability_motivation_balance",
          title: "Diagnose Whether Motivation or Ability Is the Barrier",
          principle: "Drop-off can stem from insufficient desire, excessive friction, or unclear prompts. The right fix requires diagnosing the actual root cause.",
          underlying_concepts: [
            "Behavioral diagnosis",
            "Friction analysis",
            "User research",
            "Experimentation"
          ],
          learn: "If users are confused by an interface, adding badges or promotional discounts won't solve the issue. You cannot incentivize someone through a broken door.",
          bad_example: "Adding prize sweepstakes to convince users to complete a registration form that crashes on mobile browsers.",
          better_example: "Watching user session recordings to discover people are confused by an ambiguous button label, then renaming it.",
          questions: [
            {
              type: "mcq",
              question: "Users understand the value of a task but cannot figure out how to complete it. What should you prioritize?",
              options: [
                "Make the interface clearer and the task easier",
                "Add a random reward",
                "Send more promotional messages",
                "Assume users do not care"
              ],
              answer: 0,
              explanation: "When motivation exists but ability is blocked by usability confusion, fixing the interface is the top priority."
            }
          ],
          application: "Interview three users who dropped out of your workflow to pinpoint whether they lost interest or got confused."
        }
      ]
    },
    {
      id: "variable_rewards",
      category: "4. Variable Rewards",
      concepts: [
        {
          id: "reward_basics",
          title: "Understand Variable Rewards",
          principle: "Variable rewards introduce unexpected variety or intrigue into the outcome, activating dopamine receptors and sustaining curiosity.",
          underlying_concepts: [
            "Reward anticipation",
            "Uncertainty",
            "Curiosity",
            "Feedback",
            "User expectations"
          ],
          learn: "Predictable rewards lose their punch over time (habituation). Variable outcomes—like unexpected insights, new challenges, or surprising discoveries—keep the brain engaged.",
          bad_example: "Showing the exact same canned congratulatory message with identical wording every single time a quiz is finished.",
          better_example: "Revealing counterintuitive historical examples and tailored explanations that challenge the user's initial assumptions.",
          questions: [
            {
              type: "mcq",
              question: "Which example uses variation in a way that can support learning?",
              options: [
                "Randomly hide the correct answer",
                "Offer a relevant new challenge based on the user's interests and progress",
                "Change the navigation on every visit",
                "Show unrelated advertisements after every answer"
              ],
              answer: 1,
              explanation: "Offering varied, relevant challenges based on user progress sustains curiosity while advancing educational goals."
            }
          ],
          application: "Add an element of unexpected insight or dynamic challenge to your user's post-completion screen."
        },
        {
          id: "reward_of_tribe",
          title: "Rewards of the Tribe",
          principle: "Social rewards arise from our deep need for connection, validation, belonging, community recognition, and mutual support.",
          underlying_concepts: [
            "Social connection",
            "Belonging",
            "Recognition",
            "Community",
            "Reciprocity"
          ],
          learn: "Humans are social creatures. Likes, comments, peer reviews, community badges, and co-learning circles harness our desire for tribal acceptance.",
          bad_example: "Creating fake simulated bot comments to trick users into thinking they have an active following.",
          better_example: "Connecting learners with peer cohorts who provide genuine critique and feedback on capstone projects.",
          questions: [
            {
              type: "mcq",
              question: "Which is an example of a social reward?",
              options: [
                "Discovering a useful new concept alone",
                "Receiving thoughtful feedback from a learning community",
                "Reducing the number of steps in a form",
                "Saving a personal note"
              ],
              answer: 1,
              explanation: "Receiving thoughtful feedback from peers delivers social connection, validation, and community belonging."
            }
          ],
          application: "Give users an optional way to share a breakthrough insight with their team or a trusted peer group."
        },
        {
          id: "reward_of_hunt",
          title: "Rewards of the Hunt",
          principle: "Rewards of the hunt stem from the pursuit and capture of scarce, valuable resources, information, or answers.",
          underlying_concepts: [
            "Information seeking",
            "Discovery",
            "Progress toward a goal",
            "Curiosity",
            "Search behavior"
          ],
          learn: "Historically we hunted food; today we hunt information, solutions, and strategic insights. Search feeds, Twitter timelines, and exploratory libraries tap into this primal urge.",
          bad_example: "Trapping users in an endless infinite scroll of low-signal algorithmic noise that wastes their afternoon.",
          better_example: "Allowing users to hunt through 150+ sharp mental models and uncover counterintuitive business truths.",
          questions: [
            {
              type: "mcq",
              question: "Which is the clearest example of a reward of the hunt?",
              options: [
                "Discovering a useful explanation while researching a topic",
                "Receiving approval from a friend",
                "Customizing a personal workspace",
                "Reducing a form from five fields to two"
              ],
              answer: 0,
              explanation: "The reward comes from pursuing and discovering high-signal, previously unknown information."
            }
          ],
          application: "Structure your content library so exploring rewards users with unexpected, high-signal discoveries."
        },
        {
          id: "reward_of_self",
          title: "Rewards of the Self",
          principle: "Rewards of the self are driven by intrinsic desires for mastery, competence, completion, and personal progress.",
          underlying_concepts: [
            "Intrinsic motivation",
            "Mastery",
            "Competence",
            "Personal progress",
            "Goal completion"
          ],
          learn: "Finishing a challenging puzzle, clearing an inbox to zero, or finally understanding a complex formula creates an internal glow of competence that needs no external audience.",
          bad_example: "Solely offering flashy public social trophies while ignoring whether the user actually feels they mastered the material.",
          better_example: "Visualizing a clean progress gauge showing 27/27 concepts mastered with an active 14-day learning streak.",
          questions: [
            {
              type: "mcq",
              question: "A learner feels satisfied after finally understanding a difficult concept. What kind of reward is this?",
              options: [
                "A social reward",
                "A reward of the hunt only",
                "A reward of the self",
                "An external trigger"
              ],
              answer: 2,
              explanation: "The learner experiences intrinsic internal satisfaction derived from personal competence and mastery."
            }
          ],
          application: "Provide users with a tangible milestone visualization when they achieve full comprehension of a difficult topic."
        },
        {
          id: "reward_relevance",
          title: "Match the Reward to the User's Motivation",
          principle: "Rewards must align with why the user came to the product in the first place. Irrelevant rewards dilute focus and undermine trust.",
          underlying_concepts: [
            "Motivation alignment",
            "Reward relevance",
            "User goals",
            "Perceived value"
          ],
          learn: "If an executive uses an app to understand balance sheets, giving them playful dancing animal animations feels patronizing and breaks immersion.",
          bad_example: "Awarding cartoon stickers to founders trying to calculate customer lifetime value and dilution.",
          better_example: "Unlocking executive cheat sheets and actionable capstone templates upon completing a curriculum module.",
          questions: [
            {
              type: "mcq",
              question: "A user wants to understand finance, but the app emphasizes public rankings. What should the designer investigate?",
              options: [
                "Whether rankings support or distract from the user's learning goal",
                "How to make rankings mandatory",
                "How to hide the educational content",
                "How to increase the number of rankings"
              ],
              answer: 0,
              explanation: "The reward system must be evaluated against the user's authentic goals and intrinsic motivations."
            }
          ],
          application: "Audit your product rewards to ensure they directly reinforce the user's professional or intellectual aspirations."
        },
        {
          id: "variable_reward_limits",
          title: "Understand the Limits of Variable Rewards",
          principle: "Variable rewards must serve the user, not manipulate them. Unpredictability without utility creates anxiety, frustration, or burnout.",
          underlying_concepts: [
            "Reward uncertainty",
            "User well-being",
            "Behavioral reinforcement",
            "Predictability",
            "Ethical design"
          ],
          learn: "Never confuse compulsive casino-style checking with genuine product love. If users feel exhausted or regret opening your app, your retention will collapse long-term.",
          bad_example: "Randomly withholding test scores to make anxious learners refresh the app 20 times an hour.",
          better_example: "Providing immediate, reliable scoring feedback on every quiz while varying the intellectual scenarios presented.",
          questions: [
            {
              type: "mcq",
              question: "Which reward design is more responsible?",
              options: [
                "Randomly withhold important educational results to make users anxious",
                "Offer varied but relevant challenges with clear learning feedback",
                "Hide progress until users open the app repeatedly",
                "Make users fear losing access to their work"
              ],
              answer: 1,
              explanation: "Varied intellectual challenges paired with transparent, reliable feedback respects user well-being and aids learning."
            }
          ],
          application: "Review your engagement mechanics to verify you never use artificial anxiety or hidden outcomes to force repeat opens."
        }
      ]
    },
    {
      id: "investment",
      category: "5. Investment: Increasing Future Value",
      concepts: [
        {
          id: "investment_basics",
          title: "Understand User Investment",
          principle: "The investment phase asks users to contribute small amounts of work, data, time, or social capital to make the product more valuable on their next visit.",
          underlying_concepts: [
            "User contribution",
            "Stored value",
            "Personalization",
            "Commitment",
            "Future utility"
          ],
          learn: "Unlike the action phase (which delivers instant gratification), investment anticipates future reward. Storing notes, setting goals, and customizing preferences increases switching costs organically.",
          bad_example: "Treating every user visit as an isolated transaction where no history or user contribution is ever remembered.",
          better_example: "Allowing users to save field notes, track mastery history, and configure personalized daily learning targets.",
          questions: [
            {
              type: "mcq",
              question: "Which is an example of user investment in a learning app?",
              options: [
                "Receiving a notification",
                "Saving notes and recording learning goals",
                "Seeing an advertisement",
                "Opening a page without interacting"
              ],
              answer: 1,
              explanation: "Saving personal notes and goals represents user effort that creates stored value for future sessions."
            }
          ],
          application: "Identify one user contribution that genuinely improves the product's future usefulness for that specific user."
        },
        {
          id: "stored_value",
          title: "Build Stored Value",
          principle: "Stored value is the accumulated utility, personalization, content, and reputation created by user interactions over time.",
          underlying_concepts: [
            "Personalization",
            "Saved work",
            "User history",
            "Accumulated utility",
            "Switching considerations"
          ],
          learn: "The more content, data, reputation, or skills a user stores in a product, the more indispensable it becomes. Spotify stores playlists; BoringBros stores mental model mastery.",
          bad_example: "Losing user quiz answers and notes whenever the browser tab is refreshed or closed.",
          better_example: "Storing all user quiz results, review queues, streak logs, and capstone answers persistently in localStorage and cloud backup.",
          questions: [
            {
              type: "mcq",
              question: "Which feature creates useful stored value?",
              options: [
                "A random popup",
                "A searchable collection of a user's saved insights and completed learning",
                "A notification that cannot be disabled",
                "An unrelated animation"
              ],
              answer: 1,
              explanation: "A searchable collection of saved insights accumulates utility and makes future sessions increasingly valuable."
            }
          ],
          application: "Design a dedicated dashboard or notebook view where users can revisit their accumulated knowledge and field notes."
        },
        {
          id: "investment_after_reward",
          title: "Ask for Investment at the Right Moment",
          principle: "Ask for user investment immediately after delivering a variable reward, when user satisfaction, dopamine, and reciprocity are highest.",
          underlying_concepts: [
            "Perceived value",
            "User effort",
            "Progressive commitment",
            "Interaction sequencing"
          ],
          learn: "Timing is everything. Asking for a review or extra profile info on initial page load causes bounce; asking right after a user masters a tough concept feels natural.",
          bad_example: "Demanding a 15-minute onboarding configuration before letting the user see a single piece of educational content.",
          better_example: "Prompting the user to save a field application reflection immediately after they celebrate acing a 4-question active recall test.",
          questions: [
            {
              type: "mcq",
              question: "When should a new learning app consider asking users to save their first insight?",
              options: [
                "Before users understand what the app offers",
                "After users have encountered a useful insight they may want to keep",
                "Before showing any content",
                "Only after hundreds of sessions"
              ],
              answer: 1,
              explanation: "Experiencing an authentic, valuable insight provides the direct context and motivation to invest effort in saving it."
            }
          ],
          application: "Position your note-taking or personalization prompt immediately following a completed learning milestone."
        },
        {
          id: "small_investments",
          title: "Start with Small Investments",
          principle: "Begin with bite-sized, effortless investments that escalate gradually. A tiny commitment today builds momentum for deeper engagement tomorrow.",
          underlying_concepts: [
            "Progressive commitment",
            "Task decomposition",
            "Friction management",
            "User learning"
          ],
          learn: "Foot-in-the-door technique: users who wouldn't spend 20 minutes building a curriculum will happily spend 3 seconds favoriting an idea or picking an archetype.",
          bad_example: "Forcing new users to write a 500-word essay about their life goals before accessing lessons.",
          better_example: "Letting users tap one chip to choose their primary daily focus shelf (e.g. Startups or Habits).",
          questions: [
            {
              type: "mcq",
              question: "A new app asks users to write a detailed personal learning plan before trying a lesson. What is a sensible alternative?",
              options: [
                "Require an even longer plan",
                "Let users try a lesson and optionally save a small goal afterward",
                "Remove all useful content",
                "Require users to invite five friends"
              ],
              answer: 1,
              explanation: "Allowing a quick test followed by a small optional goal reduces upfront friction and builds progressive commitment."
            }
          ],
          application: "Break any multi-step form into small, bite-sized micro-commitments that take under 5 seconds each."
        },
        {
          id: "user_content_and_preferences",
          title: "Use Contributions to Improve the Experience",
          principle: "Every piece of data or preference a user contributes should visibly and immediately improve their product experience.",
          underlying_concepts: [
            "Personalization",
            "User agency",
            "Preference learning",
            "Data minimization",
            "Privacy"
          ],
          learn: "If users invest time selecting their favorite topics, reflect that immediately in their feed. Collecting data without delivering obvious user utility breeds resentment.",
          bad_example: "Asking users for extensive demographic information and then serving everyone the exact same generic feed.",
          better_example: "Filtering the library grid and tailoring the home screen recommendations based on the user's selected archetype and focus goals.",
          questions: [
            {
              type: "mcq",
              question: "Which personalization approach is more responsible?",
              options: [
                "Collect every possible personal detail",
                "Use relevant preferences and explain how they improve the experience",
                "Collect sensitive data without a clear purpose",
                "Prevent users from editing their preferences"
              ],
              answer: 1,
              explanation: "Transparent personalization links collected preferences directly to clear user benefits while respecting privacy."
            }
          ],
          application: "Ensure that every preference setting in your profile visibly changes the UI or content prioritization."
        },
        {
          id: "next_trigger",
          title: "Connect Investment to the Next Useful Session",
          principle: "The ultimate purpose of the investment phase is to load the next trigger, setting up future loops organically.",
          underlying_concepts: [
            "Continuity",
            "Progressive learning",
            "Personal relevance",
            "Next-step design"
          ],
          learn: "When you send a message, you anticipate a reply (external trigger). When you schedule a lesson or bookmark an idea, you create a natural reason to return tomorrow.",
          bad_example: "Leaving the user at a dead-end with no bookmark, unfinished streak, or clear next milestone.",
          better_example: "Prompting: '3 of 5 daily concepts mastered. Set a reminder for tomorrow morning to keep your 4-day streak alive.'",
          questions: [
            {
              type: "mcq",
              question: "A user saves a learning goal. Which follow-up best supports continuity?",
              options: [
                "Send unrelated promotions every hour",
                "Offer a relevant next lesson or a user-controlled reminder",
                "Delete the saved goal",
                "Make the next lesson inaccessible without sharing personal data"
              ],
              answer: 1,
              explanation: "Offering a relevant next step directly links prior user investment with future educational continuity."
            }
          ],
          application: "Design the end of each session so it naturally plants the seed or reminder for the subsequent session."
        }
      ]
    },
    {
      id: "hook_cycles",
      category: "6. Connecting the Four Phases",
      concepts: [
        {
          id: "four_phase_model",
          title: "Connect Trigger, Action, Reward, and Investment",
          principle: "The Hook Model is a continuous loop: Trigger prompts Action, Action yields Variable Reward, and Reward motivates Investment that primes the next Trigger.",
          underlying_concepts: [
            "Behavioral sequence",
            "Feedback loops",
            "Repeated use",
            "Accumulated value"
          ],
          learn: "If any link in the chain is broken, habit formation collapses. Strong trigger + painful action = failure. Easy action + boring reward = churn. Great reward + no investment = forgotten product.",
          bad_example: "Having a great reward system but no trigger to bring users back, or an enticing trigger that links to a broken sign-in screen.",
          better_example: "A seamless cycle: Morning reminder (trigger) -> 1-tap quiz (action) -> Counterintuitive insight (reward) -> Stored note (investment).",
          questions: [
            {
              type: "mcq",
              question: "What is the correct sequence of the Hook Model?",
              options: [
                "Reward, investment, trigger, action",
                "Trigger, action, variable reward, investment",
                "Investment, trigger, action, advertising",
                "Action, advertising, payment, reward"
              ],
              answer: 1,
              explanation: "The four phases proceed in sequence from Trigger to Action to Variable Reward to Investment."
            }
          ],
          application: "Map your entire core user journey across all four phases on a single sheet of paper to locate bottlenecks."
        },
        {
          id: "cycle_breakpoints",
          title: "Find Where the Hook Breaks",
          principle: "When retention drops, isolate which of the four stages is failing before redesigning or adding new features.",
          underlying_concepts: [
            "Funnel diagnosis",
            "Behavioral analytics",
            "Usability testing",
            "Retention analysis"
          ],
          learn: "Don't guess why users leave. Measure: Are triggers opened? Do users start the action? Do they finish the lesson? Do they store value? Fix the specific leaking bucket.",
          bad_example: "Redesigning the logo and color palette when users are dropping off because lessons take 45 minutes to finish.",
          better_example: "Discovering high email click-through but 80% bounce on the password screen, pinpointing an action barrier.",
          questions: [
            {
              type: "mcq",
              question: "Users start lessons but rarely find them useful enough to finish. Which stage deserves investigation first?",
              options: [
                "The reward or value delivered by the experience",
                "The color of the company logo only",
                "The frequency of unrelated advertisements",
                "The number of founders"
              ],
              answer: 0,
              explanation: "If users take the action but abandon before finishing, the perceived reward or immediate value delivered is falling short."
            }
          ],
          application: "Check your funnel analytics to determine whether your biggest drop-off occurs at Trigger, Action, Reward, or Investment."
        },
        {
          id: "measure_repeated_use",
          title: "Measure Meaningful Repeated Use",
          principle: "Habit testing should measure recurring behavior that reflects genuine customer value, not just vanity clicks or forced screen time.",
          underlying_concepts: [
            "Retention cohorts",
            "Behavioral metrics",
            "Task completion",
            "User outcomes",
            "Measurement validity"
          ],
          learn: "Screen time alone can be deceptive; a frustrated user searching for an exit looks identical in analytics to an engaged user. Measure meaningful completion of the core value.",
          bad_example: "Celebrating a 50% increase in app time that was actually caused by a confusing navigation bug.",
          better_example: "Tracking weekly retention of cohorts who consistently answer 3+ active recall quizzes and achieve 80%+ accuracy.",
          questions: [
            {
              type: "mcq",
              question: "Which metric is most useful for a learning product?",
              options: [
                "Total minutes spent, regardless of outcome",
                "Repeated completion of useful lessons alongside evidence of understanding",
                "Number of notifications sent",
                "Number of screens added"
              ],
              answer: 1,
              explanation: "This connects recurring engagement directly to the product's intended educational benefit and demonstrated comprehension."
            }
          ],
          application: "Define a 'Habit Metric' combining frequency (e.g. 3x/week) with authentic value delivery (e.g. concept mastered)."
        }
      ]
    },
    {
      id: "ethics",
      category: "7. Ethical Habit Formation",
      concepts: [
        {
          id: "manipulation_vs_help",
          title: "Distinguish Persuasion from Manipulation",
          principle: "A product can influence behavior to help users achieve their authentic aspirations, or it can exploit cognitive biases for the company's extractable profit.",
          underlying_concepts: [
            "User autonomy",
            "Informed choice",
            "Behavioral influence",
            "Trust",
            "Ethical product design"
          ],
          learn: "Persuasion aligns with user goals; manipulation subverts them. If a user would feel ashamed, regretful, or exploited if they saw your mechanics behind the scenes, it's manipulation.",
          bad_example: "Using hidden recurring billing, fake urgency counters, and deceptive dark patterns to trap users.",
          better_example: "Designing optional learning reminders, clear cancellation options, and transparent data privacy controls.",
          questions: [
            {
              type: "mcq",
              question: "Which design is more aligned with user interests?",
              options: [
                "Hide the cancellation option",
                "Create a useful learning routine with optional reminders and clear controls",
                "Use shame to force daily activity",
                "Make users fear losing their saved work"
              ],
              answer: 1,
              explanation: "Supporting a productive routine while preserving user control and agency honors ethical product design."
            }
          ],
          application: "Audit your engagement features to ensure they never rely on shame, hidden choices, or artificial anxiety."
        },
        {
          id: "manipulation_matrix",
          title: "Evaluate Your Product's Ethical Direction",
          principle: "The Manipulation Matrix tests your alignment: Does the product materially improve the user's life, and do you as the creator use it yourself?",
          underlying_concepts: [
            "Creator-user alignment",
            "User welfare",
            "Product responsibility",
            "Ethical reflection"
          ],
          learn: "Nir Eyal outlines four quadrants: The Facilitator (uses it & improves lives), The Peddler (doesn't use it but claims it helps), The Entertainer (uses it for fun), and The Dealer (exploits addictions). Strive to be the Facilitator.",
          bad_example: "Building a predatory gambling app that you strictly forbid your own children or friends from using.",
          better_example: "Building a mental models masterclass that you and your engineering team actively use every day to sharpen your own thinking.",
          questions: [
            {
              type: "mcq",
              question: "A product increases usage but leaves users feeling that they wasted their time. What should the team investigate?",
              options: [
                "How to increase usage further without changing the product",
                "Whether the product delivers the benefit users expected",
                "How to hide negative feedback",
                "How to make it harder to leave"
              ],
              answer: 1,
              explanation: "The team must investigate whether usage genuinely translates into the value and benefit users expected."
            }
          ],
          application: "Place your product in the Manipulation Matrix: Do you use it yourself, and does it genuinely improve users' lives?"
        },
        {
          id: "ethical_metrics",
          title: "Optimize for User Outcomes, Not Addiction",
          principle: "Measure product success through the accomplishment of user objectives, not merely time spent or click frequency.",
          underlying_concepts: [
            "Outcome measurement",
            "Long-term trust",
            "User well-being",
            "Metric selection"
          ],
          learn: "If your core North Star metric is 'Total minutes in app', you will inevitably be incentivized to add slow animations, clickbait, and friction. Measure 'Problems solved' instead.",
          bad_example: "Rewarding growth engineers bonuses solely on total hours users spend staring at screens.",
          better_example: "Tracking how many strategic frameworks users understand and put into practice in under 3 minutes a day.",
          questions: [
            {
              type: "mcq",
              question: "Which pair of metrics best fits an educational product?",
              options: [
                "Notifications sent and advertisements viewed",
                "Lessons completed and demonstrated understanding",
                "Time wasted and sessions forced",
                "Clicks generated and cancellation failures"
              ],
              answer: 1,
              explanation: "Pairing completed lessons with demonstrated comprehension balances engagement with verified educational efficacy."
            }
          ],
          application: "Pair your primary engagement KPI with a countervailing user-benefit metric to prevent harmful optimization."
        }
      ]
    },
    {
      id: "habit_testing",
      category: "8. Habit Testing and Opportunity Assessment",
      concepts: [
        {
          id: "identify_opportunities",
          title: "Find Habit-Forming Opportunities",
          principle: "A viable habit opportunity pairs a high-frequency user friction point with a solution that delivers 10x greater convenience and relief than existing workarounds.",
          underlying_concepts: [
            "Problem frequency",
            "Existing behavior",
            "Product utility",
            "Behavioral opportunity"
          ],
          learn: "Look for nascent behaviors: what are people already doing with cumbersome spreadsheets, email drafts, or sticky notes? Build a smooth, dedicated loop around that existing momentum.",
          bad_example: "Trying to force people to develop a brand new, unnatural habit that solves a problem they don't care about.",
          better_example: "Noticing founders manually keeping mental model notes in Apple Notes and providing an interactive daily recall system.",
          questions: [
            {
              type: "mcq",
              question: "What is the strongest starting point for identifying a habit opportunity?",
              options: [
                "A recurring user need that an improved experience could address",
                "A desire to increase screen time at any cost",
                "A notification design copied from a competitor",
                "A random reward system without a clear purpose"
              ],
              answer: 0,
              explanation: "A genuine, frequent user need provides the authentic foundation for repeated engagement and product utility."
            }
          ],
          application: "List three recurring problems your target users face weekly and score them by frequency and emotional intensity."
        },
        {
          id: "habit_test",
          title: "Test Whether a Habit Is Emerging",
          principle: "Habit testing requires longitudinal observation of user retention curves to identify who your habitual 'devotees' are and why they return.",
          underlying_concepts: [
            "Behavioral measurement",
            "Retention cohorts",
            "Longitudinal observation",
            "Hypothesis testing"
          ],
          learn: "Nir Eyal's Habit Testing process: 1. Dig: Identify who uses the product habitually (the top 5%). 2. Codify: What behaviors do devotees share? 3. Modify: Redesign onboarding to guide new users into those same behaviors.",
          bad_example: "Assuming that high day-1 survey satisfaction scores mean users will naturally return on day 30.",
          better_example: "Identifying the 5% of users who return daily, discovering they all completed at least 3 lessons on day 1, and encouraging all new users to try 3.",
          questions: [
            {
              type: "mcq",
              question: "What is the best way to evaluate whether users are developing a useful product habit?",
              options: [
                "Ask only whether they liked the first session",
                "Observe repeated relevant behavior and investigate the value users receive",
                "Count only total downloads",
                "Measure how many reminders were sent"
              ],
              answer: 1,
              explanation: "Observing ongoing behavioral cohorts over time and examining the value they receive provides true evidence of habit formation."
            }
          ],
          application: "Inspect the usage patterns of your most active users to discover the 'Habit Path' that distinguishes them from churned visitors."
        },
        {
          id: "iterate_the_model",
          title: "Improve One Stage at a Time",
          principle: "Optimize the Hook loop through focused, single-variable experiments rather than changing multiple stages at once.",
          underlying_concepts: [
            "Experimentation",
            "Causal reasoning",
            "Product analytics",
            "Iterative improvement"
          ],
          learn: "If you change the trigger email, the onboarding form, and the reward screen simultaneously, you cannot know which element caused any change in retention. Isolate variables.",
          bad_example: "Overhauling the entire user interface, pricing model, and notification system in one release and wondering why churn increased.",
          better_example: "Testing two distinct email subject lines (trigger) while holding the lesson content and post-quiz screens strictly constant.",
          questions: [
            {
              type: "mcq",
              question: "Users receive a reminder but do not start the lesson. What is a useful first experiment?",
              options: [
                "Change the reminder, onboarding, rewards, and lesson structure simultaneously",
                "Investigate the drop-off and test one plausible improvement",
                "Assume all users are unmotivated",
                "Send reminders continuously"
              ],
              answer: 1,
              explanation: "A focused, single-variable experiment makes test results clearly interpretable and actionable."
            }
          ],
          application: "Select one stage in your Hook loop (Trigger, Action, Reward, or Investment) and formulate a 48-hour hypothesis test."
        }
      ]
    }
  ],
  final_challenge: {
    title: "Build a Useful Habit Loop",
    objective: "Design and test a habit-forming experience that helps users achieve a meaningful goal without relying on coercive engagement tactics.",
    steps: [
      {
        id: 1,
        task: "Identify the Recurring Need",
        deliverable: "Describe the situation and context in which the target user genuinely benefits from repeated use."
      },
      {
        id: 2,
        task: "Define the Trigger",
        deliverable: "Choose an internal emotion or respectful external cue that prompts the user at the exact right moment."
      },
      {
        id: 3,
        task: "Simplify the Action",
        deliverable: "Make the primary useful action clear, immediate, and achievable with minimal cognitive friction."
      },
      {
        id: 4,
        task: "Deliver Meaningful Variable Reward",
        deliverable: "Give the user a relevant outcome: tribal validation, hunt discovery, or self-mastery satisfaction."
      },
      {
        id: 5,
        task: "Create Useful Investment",
        deliverable: "Let the user save progress, customize preferences, or store value that increases future product utility."
      },
      {
        id: 6,
        task: "Measure Behavior and Benefit",
        deliverable: "Track repeated meaningful actions alongside concrete evidence that the product improves user outcomes."
      },
      {
        id: 7,
        task: "Review Ethical Risks",
        deliverable: "Verify that users retain clear autonomy and control without being pressured by dark patterns or shame."
      }
    ],
    user_questions: [
      {
        id: "hc1",
        prompt: "What recurring user need does your product serve?",
        input_type: "text",
        required: true
      },
      {
        id: "hc2",
        prompt: "What trigger could help users act at the right moment?",
        input_type: "text",
        required: true
      },
      {
        id: "hc3",
        prompt: "What is the simplest useful action they can take?",
        input_type: "text",
        required: true
      },
      {
        id: "hc4",
        prompt: "What meaningful reward will they receive (Tribe, Hunt, or Self)?",
        input_type: "text",
        required: true
      },
      {
        id: "hc5",
        prompt: "What investment will improve future usefulness for them?",
        input_type: "text",
        required: true
      },
      {
        id: "hc6",
        prompt: "How will you measure repeated use alongside genuine user benefit?",
        input_type: "text",
        required: true
      },
      {
        id: "hc7",
        prompt: "What is the focused experiment you will test in the next 48 hours?",
        input_type: "text",
        required: true
      }
    ],
    completion_criteria: [
      "The user identifies a recurring authentic need",
      "The user maps all four stages of the Hook Model",
      "The user identifies a measurable user benefit",
      "The user defines a small, testable experiment",
      "The user identifies at least one ethical risk or dark pattern to guard against",
      "The user specifies a concrete next action"
    ]
  }
};

// Helper: Convert the entire Hooked book into standard BoringBros Idea[] objects
export function getHookedIdeas() {
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

  for (const module of HOOKED_BOOK.learning_path) {
    for (const concept of module.concepts) {
      const q = concept.questions[0];
      const ex = concept.bad_example && concept.better_example
        ? `❌ Avoid: "${concept.bad_example}"\n✅ Practice: "${concept.better_example}"`
        : concept.better_example || concept.principle;

      ideas.push({
        id: `hook-${concept.id.replace(/_/g, '-')}`,
        s: "Startups",
        t: concept.title,
        b: "Hooked",
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
