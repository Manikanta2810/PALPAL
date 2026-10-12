import { BookDefinition } from './momTestBook';

export const COLD_START_BOOK: BookDefinition = {
  id: "the-cold-start-problem",
  title: "The Cold Start Problem",
  author: "Andrew Chen",
  category: "Network Effects & Scale",
  purpose: "Understand how network effects work, launch when few users are present, build atomic networks, reach critical mass, sustain growth loops, and defend against competitors.",
  content_policy: "Original educational curriculum organized around Andrew Chen's published Cold Start framework and network effects principles. Not a reproduction of the book.",
  learning_path: [
    {
      id: "network_effects_foundations",
      category: "1. Understanding Network Effects",
      concepts: [
        {
          id: "network_effect_definition",
          title: "What Is a Network Effect?",
          principle: "A network effect exists when a product becomes more valuable to a user as additional relevant users join or participate.",
          underlying_concepts: [
            "Network value scaling",
            "User-to-user utility",
            "Participant relevance",
            "Value vs size",
            "Density of connections"
          ],
          learn: "The value of a network comes from the interactions, content, connections, or opportunities created by the network participants. More users do not automatically mean more value; growth matters only when it improves the experience for participants.",
          bad_example: "Assuming that having 10,000 inactive accounts automatically creates value for users.",
          better_example: "A messaging app where every joining colleague expands the real set of people a user can instantly collaborate with.",
          questions: [
            {
              type: "mcq",
              question: "Which product is the clearest example of a direct network effect?",
              options: [
                "A calculator that works identically regardless of who else uses it",
                "A messaging app where users can communicate with more friends as those friends join",
                "A personal notes app with no sharing or collaboration",
                "A website that only increases its advertising budget"
              ],
              answer: 1,
              explanation: "Additional relevant participants expand the set of people a user can communicate with, directly increasing product value."
            }
          ],
          application: "Describe whether your product has a network effect. Identify the exact mechanism by which additional relevant participants increase value."
        },
        {
          id: "direct_and_indirect_effects",
          title: "Direct and Indirect Network Effects",
          principle: "Direct network effects occur within the same user group; indirect network effects cross between different complementary sides of a marketplace.",
          underlying_concepts: [
            "Two-sided markets",
            "Cross-side subsidies",
            "Supply-demand liquidity",
            "Complementary participant groups",
            "Ecosystem dynamics"
          ],
          learn: "Direct effects happen when more participants on the same side increase value for one another (e.g. Telephones, Slack). Indirect effects happen when growth on one side attracts or benefits another side, such as a marketplace where more buyers attract sellers and vice versa.",
          bad_example: "Treating a marketplace as a homogeneous user base and measuring only aggregate signup counts.",
          better_example: "Balancing drivers and riders in a specific geographic neighborhood so both sides experience short wait times.",
          questions: [
            {
              type: "mcq",
              question: "A marketplace attracts more buyers, which makes it more worthwhile for sellers to join. Which mechanism is this?",
              options: [
                "An indirect network effect between marketplace sides",
                "A direct network effect among unrelated buyers only",
                "A pricing change",
                "A network effect cannot exist in a marketplace"
              ],
              answer: 0,
              explanation: "Growth on the buyer side increases the opportunity and revenue potential for sellers across complementary sides."
            }
          ],
          application: "Draw a simple diagram showing the groups in your product and how growth in one group could create value for another."
        },
        {
          id: "network_effects_vs_virality",
          title: "Network Effects Are Not the Same as Virality",
          principle: "Virality is a distribution mechanism; a network effect is a value creation and retention mechanism.",
          underlying_concepts: [
            "Distribution vs retention",
            "K-factor vs utility",
            "Viral loops",
            "Sustainable product value",
            "Churn in empty networks"
          ],
          learn: "Virality describes how a product spreads through invitations, sharing, or word of mouth. A network effect describes how participation changes product value. A product can be viral without having network effects (e.g. single-player quiz apps) and can have strong network effects without viral sharing.",
          bad_example: "Confusing viral invite spam with a sticky product that retains users through rich participant interactions.",
          better_example: "Separately tracking the viral referral coefficient for acquisition and the network density for 30-day retention.",
          questions: [
            {
              type: "mcq",
              question: "Users share screenshots from a single-player puzzle app, but the puzzles remain unchanged as more people join. What is the best interpretation?",
              options: [
                "The product has a possible viral distribution mechanism, but a network effect is not established",
                "Every share automatically creates a network effect",
                "The product cannot grow",
                "The app must become a marketplace"
              ],
              answer: 0,
              explanation: "Sharing can attract users without making the underlying single-player experience more valuable as the network grows."
            }
          ],
          application: "Identify one way your product spreads and separately identify whether additional users make the product itself more valuable."
        }
      ]
    },
    {
      id: "cold_start",
      category: "2. Stage One: The Cold Start Problem",
      concepts: [
        {
          id: "empty_network",
          title: "Why Empty Networks Struggle",
          principle: "Network-driven products provide near-zero value to their first users because the value requires active participants.",
          underlying_concepts: [
            "Cold start hurdle",
            "Chicken-and-egg dilemma",
            "High early churn",
            "Value deficit at zero scale",
            "Participant liquidity"
          ],
          learn: "A network-driven product is brutally hard to launch because users need other participants to receive value. Early users see an empty feed, no listings, zero responses, or no collaborators and bounce immediately. Awareness alone does not solve an empty room.",
          bad_example: "Spending \$50,000 on Facebook ads to drive 5,000 users to an empty discussion forum spread across 50 dead subtopics.",
          better_example: "Seeding an initial group of 50 active founders in a single private channel where every question gets answered within 10 minutes.",
          questions: [
            {
              type: "mcq",
              question: "A new professional networking app has no members from the industries its users care about. What is its biggest immediate problem?",
              options: [
                "The network lacks the relevant participants needed to provide value",
                "The logo is not complicated enough",
                "It needs every possible feature before launch",
                "It should purchase fake members"
              ],
              answer: 0,
              explanation: "Users cannot obtain the expected connections from an empty or irrelevant network; the network value deficit causes abandonment."
            }
          ],
          application: "Describe the empty-network experience for a new user and list the missing participants, content, or interactions that make the product less useful."
        },
        {
          id: "atomic_network",
          title: "Build an Atomic Network",
          principle: "An atomic network is the smallest self-sustaining unit of a networked product that provides complete value to its participants.",
          underlying_concepts: [
            "Minimum viable network",
            "Concentrated density",
            "Hyper-local saturation",
            "Self-sustaining engagement",
            "Replication playbook"
          ],
          learn: "Instead of trying to launch everywhere at once, focus on creating one tiny, concentrated cluster where the product works completely. Slack launched team-by-team; Uber launched city-by-city starting in SF; Facebook launched campus-by-campus starting at Harvard. A small, active network is infinitely better than a large, empty one.",
          bad_example: "Launching a student collaboration tool nationwide across 500 universities simultaneously with 2 inactive users per campus.",
          better_example: "Dominating one specific computer science class of 120 students until 90% of them use it daily for group assignments.",
          questions: [
            {
              type: "mcq",
              question: "A student collaboration app has users spread across 100 colleges, with almost no activity at each college. What is a promising strategy?",
              options: [
                "Concentrate on one suitable college or group and make the experience useful there",
                "Advertise equally across every college immediately",
                "Remove all opportunities for interaction",
                "Count registered accounts as proof of a functioning network"
              ],
              answer: 0,
              explanation: "Concentration creates enough relevant participants for real density, transforming an empty network into an atomic unit."
            }
          ],
          application: "Define the smallest group that could receive complete value from your product. Specify who belongs in it and what interaction must occur for the group to work."
        },
        {
          id: "hard_side",
          title: "Identify the Hard Side of the Network",
          principle: "In every network, one participant group is significantly harder to attract and retain, but creates almost all the value for the other side.",
          underlying_concepts: [
            "Supply vs demand constraint",
            "Scarce contributors",
            "Power law of engagement",
            "Hard side incentives",
            "Subsidizing creators"
          ],
          learn: "The hard side supplies content, liquidity, inventory, or responsiveness. On YouTube, it is creators; on Uber, drivers; on Airbnb, hosts; on Wikipedia, editors. Attracting demand is usually easy if you have captured and retained the hard side.",
          bad_example: "Giving discounts to buyers when the real bottleneck is having only 3 active sellers with sparse, outdated inventory.",
          better_example: "Personally recruiting top freelance design mentors with white-glove onboarding because their presence automatically draws paying students.",
          questions: [
            {
              type: "mcq",
              question: "A marketplace has many buyers but few reliable sellers. What should the team investigate?",
              options: [
                "The barriers and incentives affecting seller participation",
                "How to add more buyers without addressing supply",
                "How to hide unavailable listings",
                "How to stop measuring seller quality"
              ],
              answer: 0,
              explanation: "Seller supply is the hard side and current constraint. Solving seller friction unlocks liquidity for the entire marketplace."
            }
          ],
          application: "Identify the hardest-to-attract participant group in your product. List the specific value they contribute and the main reason they might not join."
        },
        {
          id: "solve_hard_problem",
          title: "Solve a Meaningful Problem for Early Participants",
          principle: "Provide immediate standalone utility or direct personal assistance so early users get real value even when the surrounding network is tiny.",
          underlying_concepts: [
            "Single-player mode",
            "Come for tool stay for network",
            "Concierge onboarding",
            "Direct utility",
            "Early participant rewards"
          ],
          learn: "Early participants need a compelling reason to use your product today, not a vague promise of future network value. 'Come for the tool, stay for the network' (like Instagram's standalone photo filters) lets users gain value immediately while the social graph forms in the background.",
          bad_example: "Telling early signups: 'Please invite 20 friends or this app won't do anything for you.'",
          better_example: "Building an exceptional single-user invoice generator that allows freelancers to send clean PDFs, then introducing a client payment network later.",
          questions: [
            {
              type: "mcq",
              question: "A new learning community has few members. Which launch strategy offers a clearer reason to participate?",
              options: [
                "Run a focused challenge with useful material and a small group of committed participants",
                "Advertise that millions of members are coming soon",
                "Wait until a large community appears by itself",
                "Require participants to recruit strangers before receiving anything useful"
              ],
              answer: 0,
              explanation: "The initial cohort receives concrete, immediate standalone value rather than an empty promise of future network size."
            }
          ],
          application: "Design a launch experience that gives the first group real value even before the wider network exists."
        },
        {
          id: "anti_network_effects",
          title: "Recognize Negative Network Effects",
          principle: "Unchecked network growth can destroy product value through spam, noise, congestion, dilution, and eroded trust.",
          underlying_concepts: [
            "Network congestion",
            "Spam and signal degradation",
            "Context collapse",
            "Quality curation",
            "Community guardrails"
          ],
          learn: "More participants can actively harm product experience if growth dilutes quality. A discussion forum that scales without moderation fills with spam; a dating app without balance fills with harassment; a marketplace without vetting fills with fraud. Guardrails must scale alongside size.",
          bad_example: "Celebrating 100,000 new forum posts without noticing that the signal-to-noise ratio collapsed and top experts all left.",
          better_example: "Implementing strict reputation thresholds, peer upvoting, and category filters so expert discussions remain pristine as membership scales.",
          questions: [
            {
              type: "mcq",
              question: "A discussion community grows rapidly, but spam and irrelevant posts make useful conversations difficult to find. What is happening?",
              options: [
                "Growth is creating negative effects that damage the user experience",
                "All growth is automatically beneficial",
                "The community should stop measuring content quality",
                "The only solution is to remove every new member"
              ],
              answer: 0,
              explanation: "Negative network effects occur when uncurated scale introduces congestion, spam, or noise that degrades core user utility."
            }
          ],
          application: "List two ways network growth could harm your product and define one guardrail for each."
        }
      ]
    },
    {
      id: "tipping_point",
      category: "3. Stage Two: Reaching the Tipping Point",
      concepts: [
        {
          id: "critical_mass",
          title: "Understand Critical Mass",
          principle: "Critical mass is the threshold where network density enables self-sustaining participation, retention, and organic expansion.",
          underlying_concepts: [
            "Tipping point",
            "Density thresholds",
            "Self-sustaining momentum",
            "Liquidity inflection",
            "Network resilience"
          ],
          learn: "Critical mass is not an arbitrary vanity signup count; it is a behavioral density threshold. It is reached when a user in a city always finds a ride in under 4 minutes, or when a message posted in a group reliably receives a high-quality answer within minutes.",
          bad_example: "Declaring critical mass because 20,000 people signed up on a waitlist, even though daily active interactions remain zero.",
          better_example: "Verifying that 85% of queries in a regional marketplace receive at least 2 qualified bids within 1 hour.",
          questions: [
            {
              type: "mcq",
              question: "A community has 20,000 registered accounts but only a handful of active contributors. Has it necessarily reached critical mass?",
              options: [
                "No, because registration volume alone does not prove that the network provides sufficient value",
                "Yes, because 20,000 is always enough",
                "Yes, because inactive users always create value",
                "Critical mass has nothing to do with participation"
              ],
              answer: 0,
              explanation: "Critical mass requires active, reliable participation density that delivers the product promise, not passive registered accounts."
            }
          ],
          application: "Define the minimum activity level that would make your network genuinely useful, using a behavioral measure rather than only registrations."
        },
        {
          id: "concentrated_launch",
          title: "Launch in a Concentrated Market",
          principle: "Winning a narrow, dense segment allows you to establish critical mass with minimal capital before expanding outward.",
          underlying_concepts: [
            "Geographic concentration",
            "Vertical beachheads",
            "Network density over surface area",
            "Playbook replication",
            "Segment dominance"
          ],
          learn: "Tinder launched strictly within USC fraternity and sorority parties before expanding to other colleges; Uber started exclusively with black cars in SF; DoorDash began in suburban Palo Alto. Win one micro-market completely so users feel high network density, then clone that playbook into adjacent niches.",
          bad_example: "Launching a local hand-delivery app in 30 cities across the US simultaneously with 1 courier per metro area.",
          better_example: "Restricting operations strictly to Downtown Austin until delivery density reaches profitable 12-minute turnaround times.",
          questions: [
            {
              type: "mcq",
              question: "A local services marketplace is launching with limited supply. Which plan is more promising?",
              options: [
                "Build reliable supply and demand in one defined area first",
                "Launch nationally without enough service providers",
                "Treat every location as interchangeable",
                "Measure total accounts but ignore successful matches"
              ],
              answer: 0,
              explanation: "Concentrating supply and demand in one defined area achieves high match liquidity and immediate customer satisfaction."
            }
          ],
          application: "Choose one launch segment and explain why it is narrow enough to concentrate activity but large enough to sustain value."
        },
        {
          id: "invite_mechanics",
          title: "Use Invitations Strategically",
          principle: "Invitations work when they invite participants who complete an ongoing interaction, rather than serving as generic promotional spam.",
          underlying_concepts: [
            "Curated onboarding",
            "Interaction-driven invites",
            "Exclusivity and scarcity",
            "Network completion",
            "Friction vs growth"
          ],
          learn: "Invitations succeed when they connect people who have an immediate reason to collaborate or transact. Inviting coworkers to an ongoing document or teammates to a multiplayer game creates natural value. Generic 'invite 5 friends to unlock a discount' creates low-intent churn.",
          bad_example: "Forcing new users through a mandatory address-book scrape before they have even seen what the product does.",
          better_example: "Allowing a user who is editing a design file to send a one-click invite to the exact stakeholder who needs to approve it.",
          questions: [
            {
              type: "mcq",
              question: "A collaborative study app is useful when a student can work with classmates. What invitation mechanism is worth testing?",
              options: [
                "An easy way to invite the classmates needed for a specific study session",
                "Random invitations to unrelated strangers",
                "Blocking every user until they invite 100 people",
                "Counting invitations as successful collaborations"
              ],
              answer: 0,
              explanation: "Invitations tied directly to an active study session recruit relevant participants who immediately benefit from collaboration."
            }
          ],
          application: "Identify a moment when an invitation creates immediate value and define how you will measure the resulting interaction."
        }
      ]
    },
    {
      id: "escape_velocity",
      category: "4. Stage Three: Escape Velocity",
      concepts: [
        {
          id: "growth_loops",
          title: "Build Repeatable Growth Loops",
          principle: "A growth loop is a closed-loop system where product usage directly generates the inputs needed to acquire or re-engage more users.",
          underlying_concepts: [
            "Compounding growth loops",
            "User-generated content SEO",
            "Viral invite loops",
            "Systemic compounding",
            "Self-sustaining acquisition"
          ],
          learn: "Traditional marketing is linear (money in, users out). Growth loops are systemic: a user takes an action (writes a review, shares a playlist, creates a survey), which creates a public asset, which gets indexed or shared, which attracts new users, who take the same action.",
          bad_example: "Relying entirely on one-off PR bursts and Facebook ad campaigns that halt customer acquisition the minute spending stops.",
          better_example: "Pinterest where users pin visual bookmarks, creating millions of indexed pages that rank on Google and attract new pinners continuously.",
          questions: [
            {
              type: "mcq",
              question: "Users create useful public guides, new readers discover those guides through search, and some readers become contributors. What is this an example of?",
              options: [
                "A possible content-driven growth loop",
                "A one-time advertising campaign only",
                "A guaranteed infinite growth mechanism",
                "A loop with no connection between users and content"
              ],
              answer: 0,
              explanation: "User activity creates discoverable content assets that attract new users, some of whom contribute new assets in a closed loop."
            }
          ],
          application: "Draw a loop showing the user action, the resulting output, how that output reaches someone new, and how the new user experiences value."
        },
        {
          id: "acquisition_effect",
          title: "The Acquisition Effect",
          principle: "As a network grows, customer acquisition cost falls because existing network activity naturally pulls in new participants.",
          underlying_concepts: [
            "Declining organic CAC",
            "Word-of-mouth gravity",
            "Network pull",
            "Ecosystem ubiquity",
            "Natural onboarding"
          ],
          learn: "The Acquisition Effect kicks in when being on the network becomes the default expectation. When all designers use Figma, clients ask for Figma links, forcing external contractors to join without Figma spending an acquisition dollar. The network itself powers user acquisition.",
          bad_example: "Assuming that high CAC will remain fixed forever without leveraging user collaboration to drive unpaid signups.",
          better_example: "Zoom adding calendar links and automated meeting invites so every host naturally converts dozens of attendees into new accounts.",
          questions: [
            {
              type: "mcq",
              question: "Which behavior is most likely to help a collaborative learning product acquire relevant users?",
              options: [
                "A user shares a useful group challenge with classmates who can participate",
                "The app displays an unrelated advertisement after every action",
                "The app hides all content from non-members",
                "The app counts every impression as an acquisition"
              ],
              answer: 0,
              explanation: "Sharing a group challenge connects classmates directly into a collaborative product workflow where they experience immediate utility."
            }
          ],
          application: "Design one product feature or workflow that can naturally introduce relevant new users to the product."
        },
        {
          id: "engagement_effect",
          title: "The Engagement Effect",
          principle: "As relevant network density increases, individual user retention and engagement deepen because there are more valuable interactions available.",
          underlying_concepts: [
            "Cohort retention curves",
            "Density-driven engagement",
            "Switching costs",
            "Stored social capital",
            "Liquidity of responses"
          ],
          learn: "New cohorts retain better than older cohorts if the network is getting stronger. On WhatsApp, talking to 20 friends keeps you infinitely more engaged than talking to 2. When network density rises, users find faster matches, richer answers, and more reasons to return every day.",
          bad_example: "Measuring retention as a flat metric without checking if users with 10+ connections retain significantly better than those with 1.",
          better_example: "Disclosing that LinkedIn users who add 30 connections in their first 30 days have a 4x higher 12-month retention rate.",
          questions: [
            {
              type: "mcq",
              question: "A learning community grows, and users can now find relevant discussion partners and receive better answers. Which effect is illustrated?",
              options: [
                "An engagement effect",
                "A guaranteed increase in revenue",
                "A reduction in network value",
                "A purely visual redesign"
              ],
              answer: 0,
              explanation: "Increased participant density creates more relevant opportunities for collaboration, directly boosting retention and session depth."
            }
          ],
          application: "Choose a meaningful engagement measure and explain how additional relevant participants could improve it."
        },
        {
          id: "economic_effect",
          title: "The Economic Effect",
          principle: "A denser, more valuable network improves unit economics, pricing power, conversion rates, and gross margins.",
          underlying_concepts: [
            "LTV expansion",
            "Pricing power",
            "Marketplace take rates",
            "Transaction efficiency",
            "Margin durability"
          ],
          learn: "As a network achieves liquidity, its underlying economics improve dramatically. On Airbnb, having 5x more listings in Paris drives higher conversion, lower refund rates, and higher host willingness to pay fees. Network strength translates directly into financial health.",
          bad_example: "Subsidizing rides at a 40% loss forever without testing whether higher driver density improves pricing tolerance.",
          better_example: "Increasing enterprise tier pricing because the internal collaboration graph within Fortune 500 accounts makes the tool irreplaceable.",
          questions: [
            {
              type: "mcq",
              question: "A marketplace becomes more useful as it gains reliable suppliers, and more customers complete successful purchases. What should the team investigate next?",
              options: [
                "Whether better matching improves sustainable revenue and costs per successful transaction",
                "Whether revenue is irrelevant to the business",
                "How to maximize registrations regardless of transactions",
                "How to prevent customers from completing purchases"
              ],
              answer: 0,
              explanation: "Evaluating whether higher match liquidity translates into stronger transaction efficiency, higher LTV, and healthy unit margins."
            }
          ],
          application: "Identify one way a stronger network could improve revenue or efficiency, and one cost that could rise as the network grows."
        }
      ]
    },
    {
      id: "the_ceiling",
      category: "5. Stage Four: The Ceiling",
      concepts: [
        {
          id: "network_saturation",
          title: "Recognize Saturation",
          principle: "Every network eventually approaches audience saturation within its core segment, causing marginal acquisition efficiency to decline.",
          underlying_concepts: [
            "Total addressable market limits",
            "Diminishing returns",
            "Adjacent segment expansion",
            "Market penetration curve",
            "Marginal CAC rise"
          ],
          learn: "No network grows exponentially forever within a static audience. When Facebook captured 95% of college students, campus growth hit a hard ceiling, requiring expansion into high schools and workplaces. When growth slows, determine whether you hit a market boundary.",
          bad_example: "Assuming that a growth plateau in your original niche means the product is broken, rather than that you captured everyone available.",
          better_example: "Recognizing that your developer tool has captured 80% of Ruby engineers and intentionally launching Python support to open a new market.",
          questions: [
            {
              type: "mcq",
              question: "A product has reached most of its likely users in one small community. New acquisition is slowing despite similar effort. What should the team investigate?",
              options: [
                "Audience saturation and whether a new adjacent segment can receive genuine value",
                "How to keep targeting the same people indefinitely",
                "How to fabricate new users",
                "How to stop tracking acquisition cost"
              ],
              answer: 0,
              explanation: "Investigating whether the core segment is saturated and finding an adjacent demographic that can organically benefit from the network."
            }
          ],
          application: "Estimate the reachable audience in your initial segment and identify one adjacent segment that could plausibly benefit from the product."
        },
        {
          id: "declining_channel_efficiency",
          title: "Understand Diminishing Acquisition Returns",
          principle: "As marketing channels saturate or become more competitive, the marginal cost per acquired user rises and cohort quality decays.",
          underlying_concepts: [
            "Marginal vs average CAC",
            "Audience fatigue",
            "Channel degradation",
            "Ad fatigue",
            "Cohort quality decay"
          ],
          learn: "Andrew Chen emphasizes measuring marginal CAC rather than blended CAC. The first 1,000 customers from Facebook ads might cost \$10 each; the next 5,000 might cost \$30; the next 10,000 might cost \$90 while retaining at half the rate. Don't scale spending into channel exhaustion.",
          bad_example: "Looking at a blended historical CAC of \$25 and pouring \$100,000 more into an ad set where recent marginal users cost \$120.",
          better_example: "Tracking weekly marginal CAC and pivoting budget toward viral loop product enhancements when paid ad returns begin to deteriorate.",
          questions: [
            {
              type: "mcq",
              question: "Paid acquisition used to bring activated users cheaply, but new campaigns now cost more and produce weaker retention. What should the team do?",
              options: [
                "Reassess audience saturation, marginal acquisition cost, and user quality",
                "Scale spending automatically because the channel worked before",
                "Ignore retention because paid users are always valuable",
                "Delete the old campaign data"
              ],
              answer: 0,
              explanation: "Diagnosing channel exhaustion requires evaluating marginal acquisition costs and the underlying retention quality of newer cohorts."
            }
          ],
          application: "Compare historical and current acquisition cost and retention. Write one possible explanation and a test to distinguish it from alternatives."
        },
        {
          id: "quality_at_scale",
          title: "Protect Quality as the Network Grows",
          principle: "Scale inevitably introduces noise, scams, and friction unless governance, algorithmic matching, and curation scale alongside membership.",
          underlying_concepts: [
            "Algorithmic curation",
            "Reputation systems",
            "Community moderation",
            "Noise filtration",
            "Maintaining trust"
          ],
          learn: "When a social platform or marketplace reaches mass scale, chronological feeds and open forums become unusable trash heaps. Preserving network value requires transitioning from open broadcast to curated feeds, algorithmic rankings, verified identities, and automated spam filtering.",
          bad_example: "Letting a marketplace grow 10x without adding fraud detection, allowing counterfeiters to drive away loyal high-spending buyers.",
          better_example: "Introducing verified seller badges, escrow payments, and community dispute resolution to preserve trust as volume surges.",
          questions: [
            {
              type: "mcq",
              question: "A user-generated learning platform has many new submissions, but most are repetitive or inaccurate. What is the most useful response?",
              options: [
                "Improve quality controls and discovery while keeping useful contributions accessible",
                "Publish every submission without review",
                "Stop measuring content quality",
                "Assume that more content always means more value"
              ],
              answer: 0,
              explanation: "Instituting curation, peer reviews, and search ranking protects content signal while keeping high-value contributions visible."
            }
          ],
          application: "Define one quality metric and one mechanism for reducing spam or irrelevant contributions."
        }
      ]
    },
    {
      id: "the_moat",
      category: "6. Stage Five: The Moat",
      concepts: [
        {
          id: "network_defensibility",
          title: "Understand a Network Moat",
          principle: "A network moat is a durable competitive advantage where an established network cannot be replicated by simply copying its feature set.",
          underlying_concepts: [
            "Switching costs",
            "High liquidity moats",
            "Accumulated network data",
            "Ecosystem lock-in",
            "Structural advantage"
          ],
          learn: "Features are easily copied by well-funded competitors in weeks; an active, dense network of relationships, liquidity, and stored social capital cannot be cloned with code. Even if a competitor builds a superior UI, users will not switch if all their coworkers and friends remain on the incumbent platform.",
          bad_example: "Assuming that having 50 more software features creates a defensible business without having an active network.",
          better_example: "Recognizing that eBay or Craigslist survived for decades with dated interfaces because their buyer-seller liquidity was impossible to bootstrap.",
          questions: [
            {
              type: "mcq",
              question: "Two professional communities have similar signup counts. One has active groups, trusted contributors, and valuable relationships; the other has mostly inactive accounts. Which is more defensible?",
              options: [
                "The community with valuable, active relationships",
                "The community with the more impressive registration number, automatically",
                "Both are equally defensible because counts match",
                "Neither can ever have a competitive advantage"
              ],
              answer: 0,
              explanation: "Active relationships, trusted participants, and daily utility create high switching costs that competitors cannot duplicate."
            }
          ],
          application: "List the network assets that become more valuable over time, such as trusted relationships, useful contributions, or reliable matches."
        },
        {
          id: "incumbent_and_challenger",
          title: "How Smaller Networks Compete",
          principle: "Challengers defeat massive incumbents not by attacking head-on, but by unbundling a specialized niche with 10x higher density.",
          underlying_concepts: [
            "Unbundling incumbents",
            "Vertical network effects",
            "Hyper-focused utility",
            "Under-served subcultures",
            "Asymmetric competition"
          ],
          learn: "Craigslist was unbundled into Airbnb (housing), StubHub (tickets), Tinder (dating), and Upwork (freelancing). Each challenger focused on one vertical and created bespoke workflows, payments, and ratings that a generalist incumbent could not match. Never attack an incumbent across their entire broad front.",
          bad_example: "Attempting to build a new generic 'LinkedIn for everyone' with an identical feature set and targeting 1 billion workers.",
          better_example: "Building a dedicated portfolio and hiring network specifically for 3D animators and game developers, featuring native Unreal Engine file previews.",
          questions: [
            {
              type: "mcq",
              question: "An established professional network dominates a broad market. A startup has limited resources. What is a plausible strategy?",
              options: [
                "Serve a clearly defined professional niche with a substantially better experience",
                "Copy every feature and launch for every profession immediately",
                "Assume that the largest competitor is automatically unbeatable",
                "Fake the number of active members"
              ],
              answer: 0,
              explanation: "A specialized vertical network creates tailored utility and concentrated density for an underserved community that generalists neglect."
            }
          ],
          application: "Identify a narrow group whose needs are poorly served by existing alternatives and explain how a concentrated network could serve them better."
        },
        {
          id: "virtuous_and_vicious_cycles",
          title: "Virtuous and Vicious Cycles",
          principle: "Network feedback loops run symmetrically: positive loops accelerate exponential growth, while negative loops accelerate rapid death spirals.",
          underlying_concepts: [
            "Positive feedback loops",
            "Death spiral dynamics",
            "Asymmetric churn",
            "Network fragility",
            "Early warning alerts"
          ],
          learn: "In a virtuous cycle, more users attract more content, which attracts more users (e.g. TikTok). But in a vicious cycle, if top creators leave, content quality falls, viewers churn, and fewer creators remain. Networks collapse far faster on the way down than they grow on the way up.",
          bad_example: "Ignoring complaints from your top 5% hardest-side creators, assuming everyday consumers will stick around regardless.",
          better_example: "Monitoring hard-side satisfaction daily and immediately intervening with concierge support if creator weekly churn increases by even 0.5%.",
          questions: [
            {
              type: "mcq",
              question: "A community loses its most helpful contributors. Answers become worse, more users leave, and fewer people contribute. What is this?",
              options: [
                "A vicious cycle",
                "A guaranteed tipping point toward success",
                "A healthy acquisition loop",
                "An unrelated visual design issue"
              ],
              answer: 0,
              explanation: "A vicious cycle occurs when departing key contributors degrade product utility, triggering compounding churn across the network."
            }
          ],
          application: "Draw one virtuous cycle your product could create and one vicious cycle it must avoid. Identify an early warning metric for the negative cycle."
        }
      ]
    },
    {
      id: "network_strategy",
      category: "7. Applying Network Effects to Product Strategy",
      concepts: [
        {
          id: "network_first_principles",
          title: "Decide Whether Your Product Needs a Network",
          principle: "Not every product benefits from network effects; forcing social features onto standalone tools adds complexity without utility.",
          underlying_concepts: [
            "Standalone tool value",
            "Artificial social mechanics",
            "Complexity tax",
            "Customer intent alignment",
            "Single-player economics"
          ],
          learn: "Many of the world's most profitable software companies (e.g. Photoshop, Sublime Text, 1Password) thrive on exceptional standalone utility. Forcing social feeds, follow buttons, or sharing prompts into a personal utility app annoys users without creating real network defensibility.",
          bad_example: "Adding a 'social feed' to a personal password manager or calculator app where users have zero desire to share data.",
          better_example: "Keeping a budgeting app strictly private and single-player, focusing entirely on personal bank integration and beautiful charts.",
          questions: [
            {
              type: "mcq",
              question: "A single-player learning app is useful without friends, groups, or shared content. Should its team immediately rebuild it as a social network?",
              options: [
                "No. First determine whether social interaction solves a real user problem",
                "Yes. Every successful product requires a network effect",
                "Yes. More user accounts always make products better",
                "Remove the core learning experience"
              ],
              answer: 0,
              explanation: "Network features must be grounded in genuine user needs where participant interactions add real utility, rather than arbitrary social bloat."
            }
          ],
          application: "Write a short argument for or against adding network features to your product, based on an actual user need."
        },
        {
          id: "network_health_metrics",
          title: "Measure Network Health",
          principle: "Evaluate network health using interaction frequency, match liquidity, and retention curves rather than vanity account totals.",
          underlying_concepts: [
            "Time to match",
            "Liquidity percentage",
            "Density of active nodes",
            "Hard side retention",
            "Meaningful interactions per user"
          ],
          learn: "Vanity metrics (total registered accounts, page views) hide empty networks. True network health metrics measure whether the network is functioning: percentage of searches that result in a booking, average time until a posted question gets answered, and weekly hard-side retention.",
          bad_example: "Reporting to investors that you have 500,000 signups while concealing that 98% of users never have a single interaction.",
          better_example: "Tracking the percentage of new users who experience at least 3 successful peer interactions within their first 7 days.",
          questions: [
            {
              type: "mcq",
              question: "A peer-learning network has 5,000 members but very few completed study sessions. Which metric is more informative?",
              options: [
                "Completed useful study sessions per active group",
                "Total registered accounts alone",
                "Number of colors in the interface",
                "Number of notifications sent"
              ],
              answer: 0,
              explanation: "Completed study sessions measures whether the network actually delivers the collaborative outcome it was designed to facilitate."
            }
          ],
          application: "Choose three network-health metrics that reflect participation, successful interactions, and user retention."
        }
      ]
    }
  ],
  final_challenge: {
    title: "Launch BoringBros' First Useful Network",
    objective: "Decide whether a network feature would improve BoringBros, then design a focused atomic launch that creates genuine value for a small initial group.",
    steps: [
      {
        id: 1,
        task: "Network Hypothesis Case",
        deliverable: "Define the core problem and explain why other participants create real utility beyond a single-player experience."
      },
      {
        id: 2,
        task: "Atomic Network Definition",
        deliverable: "Specify the smallest self-sustaining cohort (members, shared goal, minimum density) where the network functions completely."
      },
      {
        id: 3,
        task: "The Hard Side Strategy",
        deliverable: "Identify the hardest participant group to attract, their barriers to entry, and the specific incentives to recruit them."
      },
      {
        id: 4,
        task: "Concentrated Launch Plan",
        deliverable: "Design a hyper-focused launch in one specific community, university, or niche to generate high early density."
      },
      {
        id: 5,
        task: "Network Health Metrics",
        deliverable: "Establish 3 behavioral metrics (interaction rate, match liquidity, hard-side retention) instead of vanity signups."
      },
      {
        id: 6,
        task: "Growth Loop Design",
        deliverable: "Diagram how user actions naturally create outputs that recruit or re-engage new participants."
      },
      {
        id: 7,
        task: "Anti-Network Guardrails & Expansion",
        deliverable: "Define controls to prevent noise/spam at scale and specify concrete validation proof required before expanding."
      }
    ],
    user_questions: [
      {
        id: "csp1",
        prompt: "Network Hypothesis: What specific user problem would a network feature solve in BoringBros, and how do other participants create real value?",
        input_type: "text",
        required: true
      },
      {
        id: "csp2",
        prompt: "Atomic Network: What is the smallest viable group (e.g. 10 founders in a sprint) that can receive complete value from day one?",
        input_type: "text",
        required: true
      },
      {
        id: "csp3",
        prompt: "The Hard Side: Who is the hardest participant group to recruit (e.g. verified experts, peer reviewers) and how will you incentivize them?",
        input_type: "text",
        required: true
      },
      {
        id: "csp4",
        prompt: "Concentrated Launch: Which specific community or niche will you launch in first, and how will you ensure high early density?",
        input_type: "text",
        required: true
      },
      {
        id: "csp5",
        prompt: "Network Health Metrics: What 3 behavioral metrics will you track to verify that participants are actually getting value?",
        input_type: "text",
        required: true
      },
      {
        id: "csp6",
        prompt: "Growth Loop: How does an active user's participation naturally introduce or re-engage another relevant participant?",
        input_type: "text",
        required: true
      },
      {
        id: "csp7",
        prompt: "Anti-Network Guardrails & Expansion: What guardrails protect quality against spam, and what proof threshold is required before expanding?",
        input_type: "text",
        required: true
      }
    ],
    completion_criteria: [
      "The user defines a clear problem and network value mechanism",
      "The user defines an atomic network with minimum viable density",
      "The user identifies the hard side and creates an incentive strategy",
      "The user creates a concentrated launch plan for an initial beachhead",
      "The user selects behavioral health metrics rather than vanity signups",
      "The user diagrams a closed-loop growth mechanism",
      "The user establishes anti-network guardrails and expansion validation gates"
    ]
  }
};

// Helper: Convert Cold Start Problem book into standard BoringBros Idea[] objects under Startups shelf
export function getColdStartIdeas() {
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

  for (const module of COLD_START_BOOK.learning_path) {
    for (const concept of module.concepts) {
      const q = concept.questions[0];
      const ex = concept.bad_example && concept.better_example
        ? `❌ Avoid: "${concept.bad_example}"\n✅ Practice: "${concept.better_example}"`
        : concept.better_example || concept.principle;

      ideas.push({
        id: `csp-${concept.id.replace(/_/g, '-')}`,
        s: "Startups",
        t: concept.title,
        b: "The Cold Start Problem",
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
