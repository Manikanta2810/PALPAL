export interface Question {
  type: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface BookConcept {
  id: string;
  title: string;
  principle: string;
  underlying_concepts?: string[];
  learn: string;
  bad_example?: string;
  better_example?: string;
  questions: Question[];
  application?: string;
}

export interface LearningModule {
  id: string;
  category: string;
  concepts: BookConcept[];
}

export interface FinalChallengeStep {
  id: number;
  task: string;
  deliverable: string;
}

export interface FinalChallengeQuestion {
  id: string;
  prompt: string;
  input_type: 'text' | 'single_choice';
  options?: string[];
  required: boolean;
}

export interface FinalChallenge {
  title: string;
  objective: string;
  steps: FinalChallengeStep[];
  user_questions: FinalChallengeQuestion[];
  completion_criteria: string[];
}

export interface BookDefinition {
  id: string;
  title: string;
  author: string;
  category: string;
  purpose: string;
  content_policy: string;
  learning_path: LearningModule[];
  final_challenge: FinalChallenge;
}

export const MOM_TEST_BOOK: BookDefinition = {
  id: "the-mom-test",
  title: "The Mom Test",
  author: "Rob Fitzpatrick",
  category: "Customer Discovery",
  purpose: "Teach users to investigate customer problems, collect reliable evidence, and make better product decisions.",
  content_policy: "Original educational content based on the book's central ideas. Not a reproduction of the book.",
  learning_path: [
    {
      id: "fundamentals",
      category: "Customer Conversation Fundamentals",
      concepts: [
        {
          id: "why_customer_conversations_fail",
          title: "Why Customer Conversations Fail",
          principle: "A conversation can feel productive without producing evidence useful for a business decision.",
          underlying_concepts: [
            "Confirmation bias",
            "Social desirability bias",
            "Unreliable self-reporting",
            "Problem-solution confusion"
          ],
          learn: "The objective is not to make people agree with the founder. It is to understand their real circumstances, behavior, and needs.",
          bad_example: "Everyone I spoke to said my startup idea was excellent.",
          better_example: "Several target users described the same recurring problem and explained how they currently handle it.",
          questions: [
            {
              type: "mcq",
              question: "What makes a customer conversation useful?",
              options: [
                "The customer praises the idea",
                "The founder gets concrete information relevant to a decision",
                "The customer agrees with every assumption",
                "The conversation lasts an hour"
              ],
              answer: 1,
              explanation: "Useful conversations reduce uncertainty through concrete evidence."
            }
          ],
          application: "Write down one important assumption about your product and the evidence needed to test it."
        },
        {
          id: "the_mom_test",
          title: "The Mom Test",
          principle: "Ask questions about the customer's life and past behavior that remain useful even when the respondent wants to be supportive.",
          underlying_concepts: [
            "Neutral question design",
            "Past behavior",
            "Customer-centered discovery",
            "Reducing courtesy bias"
          ],
          learn: "Avoid asking whether an idea is good. Investigate the problem, what the person does about it, and what happens when it occurs.",
          bad_example: "Would you use my app?",
          better_example: "Tell me about the last time you encountered this problem.",
          questions: [
            {
              type: "mcq",
              question: "Which question best follows the principle?",
              options: [
                "Would you buy my app?",
                "Do you like my idea?",
                "What happened the last time you faced this problem?",
                "Would your friends recommend it?"
              ],
              answer: 2,
              explanation: "It asks for a concrete experience rather than an opinion or prediction."
            }
          ],
          application: "Rewrite five product-pitch questions as questions about actual customer experiences."
        },
        {
          id: "talk_about_their_lives",
          title: "Talk About Their Lives, Not Your Idea",
          principle: "Understand the customer's context before introducing a proposed solution.",
          underlying_concepts: [
            "Problem discovery",
            "Contextual inquiry",
            "Unbiased interviewing",
            "Customer workflows"
          ],
          learn: "Explore routines, goals, frustrations, existing tools, and previous attempts before discussing product features.",
          bad_example: "My app makes learning fun. Would that solve your problem?",
          better_example: "How do you currently learn something difficult, and where does the process break down?",
          questions: [
            {
              type: "mcq",
              question: "Why delay pitching your solution?",
              options: [
                "Customers should never see prototypes",
                "The pitch can bias what the customer tells you",
                "Solutions are always irrelevant",
                "Interviews should never discuss products"
              ],
              answer: 1,
              explanation: "Introducing the idea too early can steer the conversation toward approval instead of discovery."
            }
          ],
          application: "Conduct one conversation without mentioning your proposed product."
        },
        {
          id: "past_specifics",
          title: "Ask About Specifics in the Past",
          principle: "Specific past events usually provide better evidence than generic opinions or predictions.",
          underlying_concepts: [
            "Recall of events",
            "Behavioral evidence",
            "Hypothetical bias",
            "Specificity"
          ],
          learn: "Ask when the problem last occurred, what triggered it, what the customer did, and what happened next.",
          bad_example: "Would you study every day if an app reminded you?",
          better_example: "When did you last try to study consistently, and what interrupted the routine?",
          questions: [
            {
              type: "mcq",
              question: "Which answer is the strongest starting point for investigation?",
              options: [
                "I would definitely use it",
                "Learning is important",
                "Last week I stopped because I could not find time",
                "Your idea sounds useful"
              ],
              answer: 2,
              explanation: "It refers to a specific event and a potentially actionable obstacle."
            }
          ],
          application: "Ask a target user to describe one recent occurrence of the problem in chronological order."
        },
        {
          id: "talk_less_listen_more",
          title: "Talk Less and Listen More",
          principle: "The founder should create space for customers to describe their experiences in their own words.",
          underlying_concepts: [
            "Active listening",
            "Interviewer bias",
            "Open-ended questions",
            "Follow-up questioning"
          ],
          learn: "Avoid filling pauses, explaining away objections, or turning every answer into an opportunity to pitch.",
          bad_example: "The customer mentions a problem, and the founder immediately explains five features.",
          better_example: "The founder asks what happened next and listens to the complete story.",
          questions: [
            {
              type: "mcq",
              question: "A user mentions an unexpected frustration. What should you do?",
              options: [
                "Immediately explain your solution",
                "Ignore the comment and continue the script",
                "Ask a neutral follow-up question",
                "Tell the user they misunderstood"
              ],
              answer: 2,
              explanation: "Unexpected details may reveal important problems or challenge existing assumptions."
            }
          ],
          application: "Conduct a ten-minute interview and ask follow-up questions before moving to the next topic."
        }
      ]
    },
    {
      id: "bad_data",
      category: "Avoiding Bad Data",
      concepts: [
        {
          id: "compliments",
          title: "Compliments Are Weak Evidence",
          principle: "Praise is not proof that a customer needs, adopts, or pays for a solution.",
          underlying_concepts: [
            "Courtesy bias",
            "Social desirability",
            "Confirmation bias",
            "Evidence quality"
          ],
          learn: "Treat compliments as interpersonal feedback, not validation of demand.",
          bad_example: "Ten friends called the product brilliant, so the market is validated.",
          better_example: "Investigate whether target users have the problem, use alternatives, and take concrete next steps.",
          questions: [
            {
              type: "mcq",
              question: "Your friends love your idea but never test it. What do you know?",
              options: [
                "The product will succeed",
                "The market is too small",
                "You have praise but insufficient evidence of demand",
                "You should immediately add more features"
              ],
              answer: 2,
              explanation: "Their lack of action leaves demand unresolved; it does not establish either success or failure."
            }
          ],
          application: "Separate your feedback into compliments, predictions, observed behavior, and commitments."
        },
        {
          id: "fluffy_data",
          title: "Recognize Vague and Fluffy Feedback",
          principle: "Broad statements can sound encouraging while revealing very little about actual behavior or priorities.",
          underlying_concepts: [
            "Ambiguity",
            "Evidence specificity",
            "Recall bias",
            "Interpretation risk"
          ],
          learn: "When someone says a problem is annoying or a product is interesting, ask for a specific example.",
          bad_example: "People say they struggle with productivity.",
          better_example: "A user describes missing a deadline because their current planning process failed.",
          questions: [
            {
              type: "mcq",
              question: "A user says, 'Online learning is difficult.' What is the best follow-up?",
              options: [
                "Would you use my app?",
                "Can you describe the last time that happened?",
                "Isn't online learning frustrating?",
                "Should I add gamification?"
              ],
              answer: 1,
              explanation: "A concrete event helps identify what the difficulty actually involves."
            }
          ],
          application: "Identify three vague statements from interviews and seek concrete examples for each."
        },
        {
          id: "feature_requests",
          title: "Interpret Feature Requests Carefully",
          principle: "A requested feature is a clue about a possible need, not a complete diagnosis of the problem.",
          underlying_concepts: [
            "Underlying needs",
            "Solution bias",
            "Problem discovery",
            "Root-cause investigation"
          ],
          learn: "Ask what the customer is trying to accomplish, what prompted the request, and how they handle the situation today.",
          bad_example: "One user requests a leaderboard, so the team builds a leaderboard.",
          better_example: "Investigate whether the user wants accountability, motivation, comparison, or recognition.",
          questions: [
            {
              type: "mcq",
              question: "A customer requests reminders. What should you investigate first?",
              options: [
                "The reminder color",
                "The underlying situation that makes reminders necessary",
                "Whether competitors use reminders",
                "Whether the founder likes reminders"
              ],
              answer: 1,
              explanation: "Understanding the need prevents blindly implementing a proposed solution."
            }
          ],
          application: "Choose one feature request and document the problem, context, and desired outcome behind it."
        },
        {
          id: "opinions_vs_facts",
          title: "Separate Opinions from Evidence",
          principle: "A person's interpretation or prediction is different from an account of what they actually did.",
          underlying_concepts: [
            "Observation versus inference",
            "Behavioral evidence",
            "Prediction uncertainty",
            "Evidence-based reasoning"
          ],
          learn: "Record what happened separately from what you think it means.",
          bad_example: "The user said the product was useful, so they will pay.",
          better_example: "The user completed the task, described its benefit, and agreed to a defined follow-up.",
          questions: [
            {
              type: "mcq",
              question: "Which is an observation rather than a prediction?",
              options: [
                "The user will become a loyal customer",
                "The market will love the product",
                "The user spent twenty minutes testing the prototype",
                "The product could become popular"
              ],
              answer: 2,
              explanation: "It records an observable action rather than a forecast."
            }
          ],
          application: "Create separate notes for observed facts, customer interpretations, and your own hypotheses."
        },
        {
          id: "disconfirming_evidence",
          title: "Look for Evidence That Challenges Your Idea",
          principle: "Good discovery attempts to challenge assumptions, not merely collect supporting examples.",
          underlying_concepts: [
            "Confirmation bias",
            "Falsifiability",
            "Disconfirming evidence",
            "Intellectual honesty"
          ],
          learn: "Decide what evidence would weaken your belief before conducting interviews.",
          bad_example: "Only interview people who already agree with the idea.",
          better_example: "Include relevant users who tried alternatives, abandoned them, or do not consider the problem important.",
          questions: [
            {
              type: "mcq",
              question: "How should you treat evidence that contradicts your assumption?",
              options: [
                "Ignore it",
                "Argue until the user agrees",
                "Investigate it and update your hypothesis if warranted",
                "Delete the interview notes"
              ],
              answer: 2,
              explanation: "Contradictory evidence can reveal a mistaken assumption or an overlooked customer segment."
            }
          ],
          application: "Write down one result that would make you stop or change your current product hypothesis."
        }
      ]
    },
    {
      id: "important_questions",
      category: "Asking Important Questions",
      concepts: [
        {
          id: "identify_big_questions",
          title: "Identify the Most Important Unknowns",
          principle: "Customer conversations should resolve important uncertainties rather than collect random information.",
          underlying_concepts: [
            "Assumption mapping",
            "Risk prioritization",
            "Learning objectives",
            "Decision relevance"
          ],
          learn: "Identify which assumptions must be true for the business to work and which are most uncertain or costly to get wrong.",
          bad_example: "Ask users which colors and icons they prefer before establishing whether the problem matters.",
          better_example: "First test whether the target customer experiences the problem and has a reason to change behavior.",
          questions: [
            {
              type: "mcq",
              question: "Which question should usually be investigated first?",
              options: [
                "Which logo is best?",
                "What is the riskiest assumption behind the product?",
                "Which animation is smoother?",
                "What should the app's mascot be called?"
              ],
              answer: 1,
              explanation: "Resolving a critical assumption can prevent large amounts of wasted work."
            }
          ],
          application: "List your three riskiest assumptions and explain what evidence would help resolve each."
        },
        {
          id: "prioritize_learning",
          title: "Prioritize Learning Over Information Collection",
          principle: "A good interview has a defined learning objective and produces evidence relevant to a decision.",
          underlying_concepts: [
            "Research focus",
            "Opportunity cost",
            "Decision-making",
            "Information value"
          ],
          learn: "Do not ask questions merely because they are interesting. Ask because the answers could change your next step.",
          bad_example: "Ask twenty unrelated questions about a user's lifestyle.",
          better_example: "Investigate the user's current workflow, the recurring problem, and the cost of the existing workaround.",
          questions: [
            {
              type: "mcq",
              question: "What should guide the questions in a customer interview?",
              options: [
                "The number of questions prepared",
                "The founder's curiosity about everything",
                "The most important uncertainties affecting a decision",
                "The desire to avoid awkward silence"
              ],
              answer: 2,
              explanation: "Focused learning objectives make the conversation more useful."
            }
          ],
          application: "Write one decision you need to make and the three facts you need before making it."
        }
      ]
    },
    {
      id: "keeping_it_casual",
      category: "Keeping It Casual",
      concepts: [
        {
          id: "natural_conversations",
          title: "Make Interviews Feel Like Conversations",
          principle: "A natural conversation can encourage richer stories than a rigid interrogation.",
          underlying_concepts: [
            "Conversational flow",
            "Rapport",
            "Active listening",
            "Adaptability"
          ],
          learn: "Prepare a direction rather than reciting a script. Let relevant details guide follow-up questions.",
          bad_example: "Interrupt every answer to ask the next question on a checklist.",
          better_example: "Use a few planned questions and explore relevant details as they emerge.",
          questions: [
            {
              type: "mcq",
              question: "What is the best use of an interview script?",
              options: [
                "Read every line without deviation",
                "Use it as a guide while following relevant evidence",
                "Avoid asking follow-up questions",
                "Ensure every respondent agrees"
              ],
              answer: 1,
              explanation: "Preparation provides focus, while adaptability helps uncover unexpected information."
            }
          ],
          application: "Prepare five core questions and conduct an interview without rigidly following their order."
        },
        {
          id: "avoid_pitching",
          title: "Avoid Pitching Too Early",
          principle: "A pitch can shift the conversation from learning about the customer to evaluating the founder's proposed solution.",
          underlying_concepts: [
            "Anchoring",
            "Leading questions",
            "Social pressure",
            "Premature solution validation"
          ],
          learn: "Understand the problem before explaining how you intend to solve it.",
          bad_example: "After hearing one complaint, explain the entire product roadmap.",
          better_example: "Ask about the frequency, consequences, and current handling of the complaint.",
          questions: [
            {
              type: "mcq",
              question: "When is a product explanation most appropriate during discovery?",
              options: [
                "Before learning anything about the user",
                "Whenever the user pauses",
                "After understanding the problem, when a solution discussion serves a clear purpose",
                "Before every follow-up question"
              ],
              answer: 2,
              explanation: "Discovery should establish the problem before moving into solution evaluation or sales."
            }
          ],
          application: "Run one interview where your goal is learning, not persuading."
        }
      ]
    },
    {
      id: "commitment_and_advancement",
      category: "Commitment and Advancement",
      concepts: [
        {
          id: "interest_vs_commitment",
          title: "Distinguish Interest from Commitment",
          principle: "Expressions of interest are weaker evidence than relevant actions that require time, effort, resources, or a concrete decision.",
          underlying_concepts: [
            "Behavioral commitment",
            "Revealed preferences",
            "Willingness to pay",
            "Intent-action gap"
          ],
          learn: "Look for commitments appropriate to the stage and product. A useful commitment tests a real assumption rather than extracting a meaningless promise.",
          bad_example: "A user says they will definitely subscribe someday.",
          better_example: "A relevant user schedules a prototype test and completes the agreed task.",
          questions: [
            {
              type: "mcq",
              question: "Which is stronger evidence of engagement?",
              options: [
                "A compliment",
                "A hypothetical promise",
                "A relevant user completing a real prototype test",
                "A social media like"
              ],
              answer: 2,
              explanation: "A completed action demonstrates more than a prediction, although it still does not prove market demand."
            }
          ],
          application: "Define one small but meaningful commitment that tests your current assumption."
        },
        {
          id: "advancement",
          title: "Advance the Relationship with a Concrete Next Step",
          principle: "A productive conversation should often lead to a relevant next step that moves discovery or a sales process forward.",
          underlying_concepts: [
            "Follow-through",
            "Progressive commitment",
            "Sales qualification",
            "Experiment design"
          ],
          learn: "A next step may involve another conversation, access to a workflow, a prototype test, an introduction, or a purchase decision, depending on the context.",
          bad_example: "End every conversation with 'Thanks, I'll keep you updated.'",
          better_example: "Agree on a specific test, responsible person, and follow-up date.",
          questions: [
            {
              type: "mcq",
              question: "Which ending creates the clearest next step?",
              options: [
                "We should talk sometime",
                "I will send you random updates",
                "Let's schedule a prototype test for Thursday",
                "Please tell everyone the idea is great"
              ],
              answer: 2,
              explanation: "It specifies an action and a time."
            }
          ],
          application: "End your next relevant conversation with a clear, mutually agreed next step."
        },
        {
          id: "commitment_quality",
          title: "Choose Commitments That Test Real Demand",
          principle: "The value of a commitment depends on what it proves about the customer and the business.",
          underlying_concepts: [
            "Signal strength",
            "Customer effort",
            "Commercial intent",
            "Validation uncertainty"
          ],
          learn: "Do not treat every action as equally meaningful. A click, a completed task, a referral to a decision-maker, and a purchase test different assumptions.",
          bad_example: "A newsletter signup proves willingness to pay.",
          better_example: "A newsletter signup indicates interest in receiving information, while a paid pilot provides evidence about willingness to spend.",
          questions: [
            {
              type: "mcq",
              question: "What does a free waitlist signup prove?",
              options: [
                "Guaranteed revenue",
                "Product-market fit",
                "Some willingness to express interest, but not necessarily adoption or payment",
                "That every visitor has the same problem"
              ],
              answer: 2,
              explanation: "The signal should be interpreted according to the specific action taken."
            }
          ],
          application: "Map each validation action to the exact assumption it tests and the uncertainty it leaves unresolved."
        }
      ]
    },
    {
      id: "finding_conversations",
      category: "Finding Customer Conversations",
      concepts: [
        {
          id: "use_existing_network",
          title: "Find Relevant People Through Existing Networks",
          principle: "Customer discovery begins by finding people who plausibly experience the problem, including through existing relationships and introductions.",
          underlying_concepts: [
            "Warm introductions",
            "Network access",
            "Recruitment",
            "Interview relevance"
          ],
          learn: "Use your network to reach relevant people, but do not confuse friendliness with target-customer fit.",
          bad_example: "Interview only friends because they are easy to reach.",
          better_example: "Ask contacts to introduce you to people who regularly encounter the target problem.",
          questions: [
            {
              type: "mcq",
              question: "What matters most when selecting an interview contact?",
              options: [
                "How much they like you",
                "Whether they plausibly experience the target problem",
                "Whether they praise your startup",
                "Whether they are available every day"
              ],
              answer: 1,
              explanation: "Relevance to the problem matters more than personal enthusiasm."
            }
          ],
          application: "Identify five people or communities that could help you reach relevant users."
        },
        {
          id: "cold_outreach",
          title: "Make Outreach Specific and Respectful",
          principle: "A clear request explaining the reason for contact and the time required can make it easier for relevant people to respond.",
          underlying_concepts: [
            "Specificity",
            "Trust",
            "Recruitment friction",
            "Respect for time"
          ],
          learn: "Explain why the person is relevant, what you want to learn, and how long the conversation will take. Avoid pitching in the invitation.",
          bad_example: "Please review my startup and tell me whether it will succeed.",
          better_example: "I'm researching how independent travelers organize trip memories. Could I ask about your current process for fifteen minutes?",
          questions: [
            {
              type: "mcq",
              question: "Which outreach request is more useful for customer discovery?",
              options: [
                "Can you invest in my idea?",
                "Can you tell me if my app is brilliant?",
                "Could I ask about your recent experience with this specific problem for fifteen minutes?",
                "Can you share my startup everywhere?"
              ],
              answer: 2,
              explanation: "The request is concrete, time-bounded, and focused on the person's experience."
            }
          ],
          application: "Write a short interview invitation and send it to one relevant person."
        },
        {
          id: "recruitment_channels",
          title: "Use Multiple Routes to Find Users",
          principle: "Different recruitment channels reach different people, and the channel should match the target customer.",
          underlying_concepts: [
            "Audience targeting",
            "Sampling bias",
            "Community access",
            "Recruitment iteration"
          ],
          learn: "Possible channels include professional communities, existing users, referrals, relevant online groups, and direct outreach.",
          bad_example: "Recruit exclusively from one founder community and generalize its answers to all consumers.",
          better_example: "Compare evidence from several relevant channels while recording how respondents were recruited.",
          questions: [
            {
              type: "mcq",
              question: "Why document where interviewees came from?",
              options: [
                "To make the report longer",
                "To understand potential recruitment bias",
                "To guarantee every answer is correct",
                "To avoid analyzing their responses"
              ],
              answer: 1,
              explanation: "Recruitment source affects who is represented and which conclusions are justified."
            }
          ],
          application: "Select two recruitment channels and track response and interview completion rates."
        }
      ]
    },
    {
      id: "choosing_customers",
      category: "Choosing Your Customers",
      concepts: [
        {
          id: "target_customer",
          title: "Choose a Specific Target Customer",
          principle: "A clear customer segment makes it easier to investigate a shared problem and interpret evidence.",
          underlying_concepts: [
            "Customer segmentation",
            "Problem relevance",
            "Market focus",
            "Research scope"
          ],
          learn: "Avoid treating everyone as a potential customer. Identify a group whose circumstances make the problem plausible and relevant.",
          bad_example: "My app is for everyone who uses the internet.",
          better_example: "My first research group is university students who repeatedly abandon self-directed online courses.",
          questions: [
            {
              type: "mcq",
              question: "Why start with a specific customer segment?",
              options: [
                "It proves the total market is small",
                "It makes every interview representative",
                "It allows clearer investigation of a shared problem",
                "It removes the need to test assumptions"
              ],
              answer: 2,
              explanation: "A focused segment makes patterns easier to identify without proving that all customers are alike."
            }
          ],
          application: "Define your first target segment using observable characteristics and the problem they experience."
        },
        {
          id: "early_adopters",
          title: "Look for People Who Already Care",
          principle: "People who actively experience a problem or already seek solutions can be especially informative early interviewees.",
          underlying_concepts: [
            "Early-adopter behavior",
            "Problem urgency",
            "Existing alternatives",
            "Behavioral evidence"
          ],
          learn: "Look for users who already spend effort, time, or money addressing the problem. Their experience can expose needs that casual observers cannot describe.",
          bad_example: "Choose respondents who have never encountered the problem because they are easy to interview.",
          better_example: "Speak with people who have tried multiple approaches to solving the problem.",
          questions: [
            {
              type: "mcq",
              question: "Which person is often most informative in early discovery?",
              options: [
                "Someone who has never encountered the problem",
                "Someone who experiences the problem and actively seeks solutions",
                "Someone who praises every startup",
                "Someone unrelated to the target segment"
              ],
              answer: 1,
              explanation: "Their behavior can reveal the problem, urgency, and shortcomings of existing alternatives."
            }
          ],
          application: "Find three people who have already attempted to solve the problem you are investigating."
        },
        {
          id: "avoid_friendly_bias",
          title: "Do Not Confuse Friendly Respondents with Representative Customers",
          principle: "The people easiest to reach may not represent the people most likely to need the product.",
          underlying_concepts: [
            "Selection bias",
            "Sampling bias",
            "Courtesy bias",
            "Generalization limits"
          ],
          learn: "Friends can be useful interviewees when they fit the target segment, but their relationship with you may influence their answers.",
          bad_example: "All my friends liked the idea, so all students will like it.",
          better_example: "Compare friends' accounts with those of independent users who fit the same target profile.",
          questions: [
            {
              type: "mcq",
              question: "What is the problem with interviewing only supportive friends?",
              options: [
                "Friends can never be customers",
                "The sample may be biased by personal relationships",
                "Friends cannot describe past events",
                "Their answers automatically invalidate all research"
              ],
              answer: 1,
              explanation: "Personal relationships may influence recruitment and responses, so the evidence needs careful interpretation."
            }
          ],
          application: "Recruit at least one relevant respondent outside your immediate circle."
        }
      ]
    },
    {
      id: "running_the_process",
      category: "Running the Customer Discovery Process",
      concepts: [
        {
          id: "prepare_before_interview",
          title: "Prepare Before the Conversation",
          principle: "Preparation helps the founder focus on the most important uncertainties while remaining open to new information.",
          underlying_concepts: [
            "Research planning",
            "Risk prioritization",
            "Question design",
            "Interview discipline"
          ],
          learn: "Define the target customer, the important unknowns, the desired learning, and the questions that can reveal real behavior.",
          bad_example: "Winging the conversation and asking generic questions without an objective.",
          better_example: "Writing a one-page outline with 3 core unknowns and 5 past-behavior questions.",
          questions: [
            {
              type: "mcq",
              question: "What should you define before an interview?",
              options: [
                "The answer you want",
                "The assumptions you need to investigate",
                "The features you will promise",
                "The customer's preferred answers"
              ],
              answer: 1,
              explanation: "A clear learning goal guides the conversation without dictating its outcome."
            }
          ],
          application: "Create a one-page interview plan with the target user, three key unknowns, and five questions."
        },
        {
          id: "record_evidence",
          title: "Capture Useful Notes",
          principle: "Record enough detail to distinguish what the customer reported from what the founder inferred.",
          underlying_concepts: [
            "Evidence traceability",
            "Observation and interpretation",
            "Recall limitations",
            "Research synthesis"
          ],
          learn: "Capture concrete events, existing behavior, consequences, relevant phrases, and follow-up commitments.",
          bad_example: "Writing: 'The user loved the concept and is our ideal buyer.'",
          better_example: "Writing: 'User abandoned previous tool after 3 sessions; currently pays $50/mo for a freelance assistant.'",
          questions: [
            {
              type: "mcq",
              question: "Which note is more useful?",
              options: [
                "The user liked everything",
                "The user is definitely our ideal customer",
                "The user described abandoning a course after missing three scheduled sessions",
                "The interview went well"
              ],
              answer: 2,
              explanation: "It records a specific reported event rather than an interpretation."
            }
          ],
          application: "After your next interview, write a factual summary and a separate section containing your hypotheses."
        },
        {
          id: "identify_patterns",
          title: "Find Patterns Across Conversations",
          principle: "Repeated findings across relevant users can reveal useful hypotheses, but small samples should not be mistaken for definitive market proof.",
          underlying_concepts: [
            "Qualitative synthesis",
            "Pattern recognition",
            "Sampling limitations",
            "Triangulation"
          ],
          learn: "Compare recurring problems, workarounds, consequences, and contradictions across interviews.",
          bad_example: "Pivoting the entire roadmap after a single enthusiastic comment.",
          better_example: "Waiting until 5+ independent target users describe the exact same workflow roadblock.",
          questions: [
            {
              type: "mcq",
              question: "Six users mention a similar problem. What can you conclude?",
              options: [
                "The entire market has the problem",
                "The product is guaranteed to succeed",
                "A potentially important pattern deserves further testing",
                "No further discovery is needed"
              ],
              answer: 2,
              explanation: "Repeated findings can strengthen a hypothesis without proving market-wide demand."
            }
          ],
          application: "Compare five interview summaries and identify recurring evidence, outliers, and unanswered questions."
        },
        {
          id: "update_hypotheses",
          title: "Change Your Hypothesis When Evidence Requires It",
          principle: "Customer discovery should change the founder's understanding or next action when the evidence warrants it.",
          underlying_concepts: [
            "Iterative learning",
            "Hypothesis revision",
            "Sunk-cost awareness",
            "Evidence-based decisions"
          ],
          learn: "Continue investigating, narrow the customer segment, revise the problem, test another solution, or stop pursuing a weak assumption.",
          bad_example: "Ignoring negative user data because coding has already begun.",
          better_example: "Pausing feature development to redefine the problem based on interview evidence.",
          questions: [
            {
              type: "mcq",
              question: "Users repeatedly report that your supposed problem is unimportant. What should you do?",
              options: [
                "Ignore them because you already started coding",
                "Add more features immediately",
                "Reassess the problem and target segment",
                "Only interview people who agree"
              ],
              answer: 2,
              explanation: "The evidence challenges the current hypothesis and should inform the next investigation."
            }
          ],
          application: "Write a decision memo stating what you learned, what changed, and what you will do next."
        }
      ]
    }
  ],
  final_challenge: {
    title: "Conduct a Real Customer Discovery Experiment",
    objective: "Use customer evidence to decide what to investigate or build next.",
    steps: [
      {
        id: 1,
        task: "Choose a specific target customer segment.",
        deliverable: "A concise description of the intended respondent."
      },
      {
        id: 2,
        task: "List the three riskiest assumptions behind your product.",
        deliverable: "Three assumptions and the evidence needed to test them."
      },
      {
        id: 3,
        task: "Recruit and interview three relevant people.",
        deliverable: "Interview notes focused on actual behavior and past events."
      },
      {
        id: 4,
        task: "Separate observations, opinions, interpretations, and commitments.",
        deliverable: "A structured evidence log."
      },
      {
        id: 5,
        task: "Identify recurring patterns and contradictory findings.",
        deliverable: "A brief synthesis of what the conversations suggest."
      },
      {
        id: 6,
        task: "Choose a concrete next action.",
        deliverable: "A decision to continue testing, narrow the segment, revise the hypothesis, or stop."
      }
    ],
    user_questions: [
      {
        id: "final_1",
        prompt: "Who did you interview, and why are they relevant?",
        input_type: "text",
        required: true
      },
      {
        id: "final_2",
        prompt: "What problem did they actually experience?",
        input_type: "text",
        required: true
      },
      {
        id: "final_3",
        prompt: "What did they do to solve it before your product existed?",
        input_type: "text",
        required: true
      },
      {
        id: "final_4",
        prompt: "What evidence contradicted your assumptions?",
        input_type: "text",
        required: true
      },
      {
        id: "final_5",
        prompt: "What will you do with what you learned?",
        input_type: "single_choice",
        options: [
          "Continue testing the current hypothesis",
          "Narrow the target customer",
          "Change the problem or solution hypothesis",
          "Stop pursuing this assumption",
          "Gather more evidence before deciding"
        ],
        required: true
      },
      {
        id: "final_6",
        prompt: "What specific action will you take within 48 hours?",
        input_type: "text",
        required: true
      }
    ],
    completion_criteria: [
      "The user identifies a relevant customer",
      "The user records concrete evidence",
      "The user distinguishes facts from interpretations",
      "The user identifies uncertainty or contradictory evidence",
      "The user chooses a defensible next action"
    ]
  }
};

// Helper: Convert the entire book into standard BoringBros Idea[] objects
export function getMomTestIdeas() {
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

  for (const module of MOM_TEST_BOOK.learning_path) {
    for (const concept of module.concepts) {
      const q = concept.questions[0];
      const ex = concept.bad_example && concept.better_example
        ? `Bad: "${concept.bad_example}"\nBetter: "${concept.better_example}"`
        : concept.better_example || concept.principle;

      ideas.push({
        id: `mom-${concept.id.replace(/_/g, '-')}`,
        s: "Startups",
        t: concept.title,
        b: "The Mom Test",
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
