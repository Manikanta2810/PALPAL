import { BookDefinition, BookConcept, LearningModule, Question } from './momTestBook';

export const POSITIONING_BOOK: BookDefinition = {
  id: "positioning-the-battle-for-your-mind",
  title: "Positioning: The Battle for Your Mind",
  author: "Al Ries & Jack Trout",
  category: "Brand Strategy and Marketing",
  purpose: "Understand how customers perceive brands, how businesses establish a distinct position in a crowded market, and how to make strategic positioning decisions.",
  content_policy: "Original concept-based learning curriculum organized around published chapter themes. Not an exhaustive reproduction of the book.",
  learning_path: [
    {
      id: "positioning_fundamentals",
      category: "1. Positioning Fundamentals",
      concepts: [
        {
          id: "positioning_definition",
          title: "Positioning Happens in the Customer's Mind",
          principle: "Positioning is the place a product or brand occupies in the mind of its intended audience relative to alternatives.",
          underlying_concepts: [
            "Brand perception",
            "Competitive differentiation",
            "Customer associations",
            "Relative value"
          ],
          learn: "A company can build a technically excellent product and still struggle if customers cannot understand what makes it distinctive. It is not what you do to the product; it is what you do to the customer's mind.",
          bad_example: "Listing 40 technical features and assuming customers figure out why you matter.",
          better_example: "App A is known for academic depth; App B is known for 5-minute practical lessons.",
          questions: [
            {
              type: "mcq",
              question: "What most directly describes a brand's position?",
              options: [
                "The location of its headquarters",
                "The perception it occupies relative to alternatives in customers' minds",
                "The number of features it offers",
                "The size of its engineering team"
              ],
              answer: 1,
              explanation: "Positioning concerns relative customer perception, not internal specifications or headquarters."
            }
          ],
          application: "Describe your product's intended position in one sentence without listing technical features."
        },
        {
          id: "outside_in_thinking",
          title: "Think from the Outside In",
          principle: "Positioning starts with the audience's existing perceptions, expectations, and alternatives rather than the company's internal view of itself.",
          underlying_concepts: [
            "Customer perspective",
            "Market research",
            "Perception gaps",
            "Competitive context"
          ],
          learn: "Founders focus on what they created; customers judge what they remember, understand, and find relevant. Begin with the customer's mind, not your internal technology.",
          bad_example: "Inside-out: 'Our platform uses proprietary advanced machine learning pipelines.'",
          better_example: "Outside-in: 'Students master difficult concepts without wading through hours of video.'",
          questions: [
            {
              type: "mcq",
              question: "Which statement demonstrates outside-in thinking?",
              options: [
                "Our code is more elegant than competitors' code",
                "Our team worked for six months",
                "Users cannot currently find reliable answers quickly, and this is how they describe the problem",
                "We want to become the biggest company in our space"
              ],
              answer: 2,
              explanation: "Outside-in thinking begins with the customer's real situation, friction, and language rather than internal developer pride."
            }
          ],
          application: "Ask three target customers how they describe their problem in their own words. Compare their language with your website headline."
        },
        {
          id: "perception_and_reality",
          title: "Perception Shapes Market Decisions",
          principle: "Customers make decisions using their perception of a brand, which may differ from the company's intended identity or the full technical reality.",
          underlying_concepts: [
            "Mental associations",
            "Selective attention",
            "Brand familiarity",
            "Perceived value"
          ],
          learn: "A feature that customers do not notice or understand contributes nothing to differentiation. In marketing and positioning, perception is reality.",
          bad_example: "Believing that having a faster database query automatically wins customers over an established brand.",
          better_example: "Investing to make your core advantage instantly understood and recognized by first-time visitors.",
          questions: [
            {
              type: "mcq",
              question: "A company has a unique feature, but its target customers do not know it exists. What is the immediate positioning problem?",
              "options": [
                "The feature automatically creates leadership",
                "The differentiation has not become a meaningful customer association",
                "The company must lower all prices",
                "The company should abandon customer research"
              ],
              answer: 1,
              explanation: "Differentiation must be perceived and understood by customers to influence their purchasing decisions."
            }
          ],
          application: "Write down what you want customers to believe about your product, then identify empirical evidence that they actually believe it."
        }
      ]
    },
    {
      id: "overcommunicated_market",
      category: "2. The Overcommunicated Market",
      concepts: [
        {
          id: "information_overload",
          title: "The Assault on Attention",
          principle: "Customers face more products, messages, and competing claims than their brains can process.",
          underlying_concepts: [
            "Information overload",
            "Limited attention",
            "Message competition",
            "Cognitive effort"
          ],
          learn: "Adding more information does not guarantee comprehension. To penetrate an overcommunicated society, a message must be sharp, focused, and cut through noise.",
          bad_example: "Straming a homepage with 15 bullet points, 4 badges, and 3 technical diagrams.",
          better_example: "A single bold headline and one unmistakable promise that solves a high-stakes problem.",
          questions: [
            {
              type: "mcq",
              question: "In a crowded category, what is usually more useful than adding ten unrelated claims?",
              options: [
                "A clearer, more distinctive message",
                "A longer homepage",
                "More technical jargon",
                "A claim that every competitor is inferior"
              ],
              answer: 0,
              explanation: "Extreme clarity cuts through cognitive overload; adding more claims only increases noise."
            }
          ],
          application: "Reduce your homepage's primary message to one clear benefit and one reason to believe it."
        },
        {
          id: "simplification",
          title: "Simplify the Message",
          principle: "A focused, simplified message makes it easy for customers to store and retrieve your brand association.",
          underlying_concepts: [
            "Message hierarchy",
            "Cognitive fluency",
            "Memory retention",
            "Message consistency"
          ],
          learn: "A brand that claims to be the cheapest, most premium, easiest, most powerful, and most innovative ends up representing nothing in the customer's memory.",
          bad_example: "'We are the easiest, most powerful, enterprise-grade, budget-friendly AI suite.'",
          better_example: "'The fastest way to send an invoice.'",
          questions: [
            {
              type: "mcq",
              question: "A new software brand claims to be the simplest, most powerful, cheapest, and most advanced. What is the main risk?",
              options: [
                "Customers will automatically trust every claim",
                "Its message may lack a coherent and memorable position",
                "The product will have no competitors",
                "The brand name becomes irrelevant"
              ],
              answer: 1,
              explanation: "Competing, contradictory claims blur the customer's mental picture, leaving no memorable peg to hang the brand on."
            }
          ],
          application: "Choose one primary positioning attribute. Move secondary benefits to supporting copy instead of fighting for headline space."
        },
        {
          id: "communication_window",
          title: "Find an Opening in the Customer's Mind",
          principle: "Positioning opportunities emerge when an audience has an established need or category understanding that current brands do not adequately address.",
          underlying_concepts: [
            "Market gaps",
            "Customer expectations",
            "Category conventions",
            "Differentiation"
          ],
          learn: "A winning position connects to something customers already understand, rather than forcing them to learn an entirely alien category.",
          bad_example: "Inventing an incomprehensible new buzzword and demanding users read an essay to grasp it.",
          better_example: "Calling your product 'The un-cola' or 'Car sharing without rental desks' to leverage existing mental models.",
          questions: [
            {
              type: "mcq",
              question: "What creates a useful positioning opportunity?",
              options: [
                "An unmet customer need that existing associations do not adequately address",
                "A random slogan generated without market context",
                "A longer list of features than competitors",
                "Refusing to study competitors"
              ],
              answer: 0,
              explanation: "An unmet customer need combined with an open mental gap allows a brand to establish a defensible position."
            }
          ],
          application: "Identify one customer expectation or frustration that incumbent brands do not clearly own in your category."
        }
      ]
    },
    {
      id: "getting_into_the_mind",
      category: "3. Getting Into the Customer's Mind",
      concepts: [
        {
          id: "first_mover_perception",
          title: "Being First in the Mind",
          principle: "A brand that establishes an association early in the customer's mind gains an enduring recall advantage.",
          underlying_concepts: [
            "Mental availability",
            "Brand association",
            "Category creation",
            "Top-of-mind recall"
          ],
          learn: "Being first into the market with code is useless if you are not the first brand into the prospect's mind. IBM did not invent the computer; Sperry-Rand did. But IBM was first in the mind.",
          bad_example: "Building a secret prototype for 2 years without public customer mindshare.",
          better_example: "Becoming the first brand prospects think of when they need 'collaborative design' (e.g. Figma).",
          questions: [
            {
              type: "mcq",
              question: "A company launches before every competitor but is unknown to customers. Has it won the mental first-mover advantage?",
              options: [
                "Yes, launch date guarantees customer recognition",
                "No, product launch and customer perception are different",
                "Yes, because advertising no longer matters",
                "No, because new brands can never lead"
              ],
              answer: 1,
              explanation: "The first-mover advantage that matters is occupying the primary position in the prospect's memory, not shipment timestamp."
            }
          ],
          application: "Determine whether your category already has an established brand that customers spontaneously name for your core benefit."
        },
        {
          id: "mental_ladders",
          title: "The Mental Ladder",
          principle: "Customers organize brands within each product category as a mental ladder of preferred alternatives.",
          underlying_concepts: [
            "Category memory",
            "Relative ranking",
            "Brand salience",
            "Competitive context"
          ],
          learn: "For any category, prospective customers hold a ladder with at most 2 or 3 rungs. In colas: Coke is #1, Pepsi is #2. If you are not on the ladder, you do not exist to the buyer.",
          bad_example: "Pretending the market leader does not exist and claiming you are #1 in general.",
          better_example: "Avis acknowledging Hertz is #1: 'Avis is only No. 2 in rent-a-cars. So why go with us? We try harder.'",
          questions: [
            {
              type: "mcq",
              question: "What does the mental ladder represent in positioning?",
              options: [
                "An organizational employee hierarchy",
                "The relative order in which customers recognize and rank brands within a category",
                "A product's manufacturing lifecycle",
                "The sequence of onboarding emails"
              ],
              answer: 1,
              explanation: "The mental ladder is the hierarchy of brands a customer holds in memory for a specific category."
            }
          ],
          application: "Ask five target buyers to name brands in your category unprompted. Record the order, frequency, and associations."
        },
        {
          id: "category_specificity",
          title: "Understand the Category Before Choosing a Position",
          principle: "A brand's position depends on the category frame customers use to compare it.",
          underlying_concepts: [
            "Category framing",
            "Competitive set",
            "Customer alternatives",
            "Reference points"
          ],
          learn: "If you frame your app as 'enterprise CRM', customers compare you to Salesforce. If you frame it as 'freelancer client tracker', you compete with spreadsheets. The category dictates the competition.",
          bad_example: "Accidentally positioning an educational game as an enterprise LMS and wondering why buyers resist.",
          better_example: "Positioning a coffee alternative against jittery energy drinks rather than gourmet espresso.",
          questions: [
            {
              type: "mcq",
              question: "A learning app competes for students' time. Which alternative matters even if it is not another learning app?",
              options: [
                "Only direct educational apps matter",
                "Short-form social media that competes for the exact same spare minutes",
                "No alternative matters",
                "Only physical paper textbooks matter"
              ],
              answer: 1,
              explanation: "Customer choices are dictated by the alternatives that compete for the same scarce resource—attention, budget, or time."
            }
          ],
          application: "List your top 2 direct competitors, 2 indirect alternatives, and what happens if the customer chooses to do nothing."
        },
        {
          id: "perception_barriers",
          title: "Recognize the Limits of Changing Perceptions",
          principle: "Once a mind is made up, changing an established brand perception is almost impossible.",
          underlying_concepts: [
            "Existing associations",
            "Credibility",
            "Cognitive dissonance",
            "Customer learning costs"
          ],
          learn: "It is far easier to build on an existing mental association than to force customers to reverse a deeply held belief. Do not fight head-on against entrenched perception.",
          bad_example: "A brand famous for cheap budget air travel launching an ultra-luxury first-class brand under the identical name.",
          better_example: "Launching a distinct, new brand name when pursuing a completely different luxury or premium audience.",
          questions: [
            {
              type: "mcq",
              question: "A brand known for low budget prices suddenly claims to be the most exclusive luxury option. What is the primary obstacle?",
              options: [
                "Its entrenched budget associations conflict sharply with the luxury claim",
                "Customers automatically forget the existing brand history",
                "A luxury claim never requires proof",
                "Price has no effect on brand perception"
              ],
              answer: 0,
              explanation: "Customers resist cognitive contradictions; existing associations anchor the brand and make contradictory claims unbelievable."
            }
          ],
          application: "Identify one existing mental association about your current brand or category that could obstruct your intended position."
        }
      ]
    },
    {
      id: "leaders_and_followers",
      category: "4. Positioning Leaders and Challengers",
      concepts: [
        {
          id: "leader_positioning",
          title: "Positioning as the Leader",
          principle: "A recognized market leader reinforces its advantage by owning the category concept and defending against disruption.",
          underlying_concepts: [
            "Category leadership",
            "Brand recall",
            "Credibility",
            "Defending established associations"
          ],
          learn: "Leaders should not boast about being #1; they should act like the category itself. When a new technology threatens the category, the leader should adopt it early rather than dismiss it.",
          bad_example: "A market leader ridiculing cloud software and insisting on-premise servers will never die.",
          better_example: "Coke introducing diet, zero, and new formats under distinct extensions while defending the original formula.",
          questions: [
            {
              type: "mcq",
              question: "What must a market leader avoid assuming?",
              options: [
                "That customers compare alternatives",
                "That its leadership position is permanent and guaranteed forever",
                "That competitors can innovate",
                "That customer needs can change"
              ],
              answer: 1,
              explanation: "Leadership must be actively sustained; customer preferences shift, and challengers can reframe the category."
            }
          ],
          application: "Identify the exact association that makes the current category leader dominant, and where that association is most vulnerable."
        },
        {
          id: "challenger_positioning",
          title: "Positioning as a Challenger",
          principle: "A challenger brand must establish a distinct, polarized position rather than claiming to be a slightly better version of the leader.",
          underlying_concepts: [
            "Differentiation",
            "Niche strategy",
            "Competitive contrast",
            "Owning an unoccupied attribute"
          ],
          learn: "If the leader owns 'enterprise scale and feature depth', do not claim you are deeper. Own 'simplicity for 5-person startups'. Be the opposite of the leader.",
          bad_example: "'We do everything Salesforce does, but 3% faster and slightly cheaper.'",
          better_example: "'Basecamp: The calm, simple alternative to bloated project software.'",
          questions: [
            {
              type: "mcq",
              question: "A startup faces an entrenched market leader. Which positioning strategy is most effective?",
              options: [
                "Claim to beat the leader at every feature simultaneously",
                "Focus on a specific underserved audience and own a distinctive attribute opposite the leader",
                "Copy the leader's visual branding and messaging",
                "Avoid mentioning any specific customer segment"
              ],
              answer: 1,
              explanation: "Challengers win by carving out a sharp, credible contrast rather than entering an unwinnable feature-for-feature war."
            }
          ],
          application: "Define one specific audience and one high-value attribute that a challenger can credibly own against the category incumbent."
        },
        {
          id: "competitor_repositioning",
          title: "Reposition the Competition",
          principle: "To establish your position, you often must first dislodge or reframe an existing competitor in the customer's mind.",
          underlying_concepts: [
            "Comparative positioning",
            "Reference frames",
            "Exposing incumbent trade-offs",
            "Re-anchoring standards"
          ],
          learn: "By highlighting a trade-off in the incumbent's strength (e.g. 'their features make them complex and slow'), you create room for your solution ('fast and straightforward').",
          bad_example: "Attacking a competitor with personal insults or vague negative smears.",
          better_example: "Tylenol highlighting that aspirin can upset your stomach: 'For the millions who shouldn't take aspirin.'",
          questions: [
            {
              type: "mcq",
              question: "An incumbent dominates on total feature count, while users complain of clutter. What should the challenger investigate?",
              options: [
                "Copying every single feature to match them",
                "Positioning simplicity as the superior basis of evaluation",
                "Buying identical ad placements",
                "Avoiding speaking to customers"
              ],
              answer: 1,
              explanation: "Repositioning the competitor means changing the evaluation criteria so the incumbent's strength becomes a recognizable liability."
            }
          ],
          application: "Identify one legitimate drawback of the market leader's core strength, and how that drawback validates your product."
        }
      ]
    },
    {
      id: "naming_and_brand_architecture",
      category: "5. Names, Brand Identity, and Line Extensions",
      concepts: [
        {
          id: "power_of_name",
          title: "The Power of the Name",
          principle: "The name is the single most important positioning decision you make; it is the first hook that attaches to the mind.",
          underlying_concepts: [
            "Distinctiveness",
            "Memorability",
            "Semantic associations",
            "Pronunciation ease"
          ],
          learn: "A great name signals category context and benefits effortlessly. A bad, generic, or confusing name forces you to spend millions explaining what you are.",
          bad_example: "Calling an airline 'General International Transportation Holdings Corp.'",
          better_example: "Calling an airline 'Southwest' or 'Peoples Express'.",
          questions: [
            {
              type: "mcq",
              question: "What should a founder evaluate first when choosing a brand name?",
              options: [
                "Only whether the founder personally likes it",
                "Memorability, distinctiveness, semantic associations, and category clarity",
                "Whether it sounds almost identical to the market leader",
                "Whether it is as long and convoluted as possible"
              ],
              answer: 1,
              explanation: "Names must be distinct, memorable, and naturally convey the intended positioning hook."
            }
          ],
          application: "Test three potential brand names with 5 prospective users. Ask what kind of company they imagine before telling them what it does."
        },
        {
          id: "no_name_trap",
          title: "The No-Name Trap",
          principle: "Hiding behind generic, sterile acronyms or buzzwords makes a company invisible and unmemorable.",
          underlying_concepts: [
            "Brand recognition",
            "Distinctiveness",
            "Recall",
            "Alphabet soup confusion"
          ],
          learn: "Companies with great names often ruin them by shortening them into sterile initials (e.g., International Business Machines became IBM only after decades of dominance; young startups cannot afford to be generic initials).",
          bad_example: "A 3-person AI startup calling itself 'QDX Systems' with zero public brand equity.",
          better_example: "A distinct, vivid name like 'Linear', 'Loom', or 'Stripe'.",
          questions: [
            {
              type: "mcq",
              question: "A seed-stage startup rebrands to obscure three-letter initials like 'XYZ Technologies'. What is the immediate consequence?",
              options: [
                "Instant category leadership",
                "Dramatic reduction in distinctiveness, recall, and searchability",
                "Guaranteed lower CAC",
                "Automatic customer loyalty"
              ],
              answer: 1,
              explanation: "Initials require immense existing fame to mean anything; for new companies, they produce bland anonymity."
            }
          ],
          application: "Audit your product name against competitors. Does it evoke an image or fade into generic industry jargon?"
        },
        {
          id: "free_ride_trap",
          title: "The Free-Ride Trap",
          principle: "Borrowing an existing brand's name for an unrelated product rarely transfers customer trust and usually creates confusion.",
          underlying_concepts: [
            "Brand transfer",
            "Association consistency",
            "Brand architecture",
            "Customer expectations"
          ],
          learn: "Executives believe an existing famous name provides a 'free ride'. In reality, brand names only stand for one specific thing in the customer's mind.",
          bad_example: "Xerox attempting to sell computers called 'Xerox Computers' (customers knew Xerox meant copiers).",
          better_example: "Toyota creating 'Lexus' as a separate brand to enter the luxury automobile segment.",
          questions: [
            {
              type: "mcq",
              question: "A trusted brand launches an unrelated new product under the exact same brand name. What risk must be evaluated?",
              options: [
                "Whether existing associations fail to transfer and create customer confusion",
                "Whether past recognition guarantees automatic sales",
                "Whether product quality ceases to matter",
                "Whether single-name branding works universally"
              ],
              answer: 0,
              explanation: "Brand equity is specific to categories; extending a copier brand into computers failed because minds rejected the association."
            }
          ],
          application: "Evaluate whether a planned new feature or product belongs under your parent brand or requires an independent identity."
        },
        {
          id: "line_extension_trap",
          title: "The Line-Extension Trap",
          principle: "Stretching a successful brand name across multiple unrelated products dilutes the core association that made it valuable.",
          underlying_concepts: [
            "Brand dilution",
            "Association conflict",
            "Category clarity",
            "Portfolio confusion"
          ],
          learn: "Line extension is the easiest trap for companies to fall into. Short-term it feels cheap to reuse a name; long-term it dissolves what the brand stands for.",
          bad_example: "Life Savers launching Life Savers Gum; 7-Up launching 7-Up Gold (a brown spicy cola).",
          better_example: "Maintaining focused brands with crisp single-concept definitions.",
          questions: [
            {
              type: "mcq",
              question: "A brand famous for elite marathon shoes launches budget kitchen blenders under the same name. What happens to the brand?",
              options: [
                "Customers become confused about what the brand fundamentally represents",
                "The running shoes instantly disappear from stores",
                "All brand extensions are illegal",
                "Advertising becomes impossible"
              ],
              answer: 0,
              explanation: "Distant line extensions weaken the crisp mental association that gave the original brand its market power."
            }
          ],
          application: "List all products or tiers under your brand name. Does every one reinforce or blur your core promise?"
        },
        {
          id: "line_extension_conditions",
          title: "When Line Extensions Can Work",
          principle: "Line extensions succeed only when the new offering shares the identical audience, use case, and mental attributes.",
          underlying_concepts: [
            "Brand fit",
            "Audience overlap",
            "Shared attributes",
            "Logical adjacency"
          ],
          learn: "If an extension is a natural component of the exact same customer ritual (e.g. running socks from a running shoe maker), it strengthens rather than dilutes.",
          bad_example: "A motorcycle brand launching perfume without any thematic coherence.",
          better_example: "Nike extending from track shoes into athletic apparel for the same athletes.",
          questions: [
            {
              type: "mcq",
              question: "Which brand extension is most likely to maintain brand integrity?",
              options: [
                "A running shoe brand launching technical running socks for runners",
                "A running shoe brand launching retail commercial banking without explanation",
                "Changing product categories every six months",
                "Releasing products with contradictory price and quality promises"
              ],
              answer: 0,
              explanation: "Tight adjacency in audience and ritual preserves cognitive consistency and strengthens the brand."
            }
          ],
          application: "Score any proposed product expansion across 4 filters: audience match, ritual adjacency, brand promise fit, and risk of confusion."
        }
      ]
    },
    {
      id: "positioning_applications",
      category: "6. Applying Positioning in Different Contexts",
      concepts: [
        {
          id: "company_positioning",
          title: "Positioning a Company",
          principle: "A company establishes institutional authority around a clear capability, mission, or market role.",
          underlying_concepts: [
            "Corporate identity",
            "Strategic focus",
            "Market role",
            "Organizational consistency"
          ],
          learn: "A company position tells investors, employees, and customers what game you are playing. If the company stands for everything, it stands for nothing.",
          bad_example: "A corporate vision statement with 30 buzzwords that could apply to any company on earth.",
          better_example: "Patagonia standing unequivocally for environmental responsibility and outdoor durability.",
          questions: [
            {
              type: "mcq",
              question: "What makes a company's positioning effective?",
              options: [
                "A clear, singular association that matters deeply to its target audience",
                "A mission statement listing every possible corporate buzzword",
                "A promise that cannot be observed or measured",
                "Changing corporate identity with every ad campaign"
              ],
              answer: 0,
              explanation: "Focus and credibility create institutional trust; vague comprehensiveness creates cynicism."
            }
          ],
          application: "Define the single capability or reputation you want your entire organization to be recognized for."
        },
        {
          id: "product_positioning",
          title: "Positioning a Product",
          principle: "A product's position links a specific target user, a distinct unmet need, and a credible reason to choose.",
          underlying_concepts: [
            "Value proposition",
            "Differentiation",
            "Target segment",
            "Competitive alternatives"
          ],
          learn: "A product is not positioned until a prospect can instantly answer: 'What is it? Who is it for? Why is it different from what I already use?'",
          bad_example: "'An all-in-one platform for everyone to do everything.'",
          better_example: "'Linear: Issue tracking built for high-velocity software engineering teams.'",
          questions: [
            {
              type: "mcq",
              question: "Which is the strongest foundation for a product's positioning?",
              options: [
                "An inventory of all 50 technical features",
                "A target customer's critical need combined with a demonstrable reason to choose",
                "A claim that everyone in the world will love it",
                "Imitating the market leader's exact website"
              ],
              answer: 1,
              explanation: "Product positioning requires an explicit target segment, an urgent use case, and credible differentiation."
            }
          ],
          application: "Draft the classic template: 'For [audience] who [need], [Product] is a [category] that [key benefit], unlike [alternative].'"
        },
        {
          id: "service_positioning",
          title: "Positioning a Service",
          principle: "Services differentiate through tangible customer outcomes, unique delivery mechanisms, and clear specialization.",
          underlying_concepts: [
            "Service differentiation",
            "Customer outcome",
            "Tangibilizing the intangible",
            "De-risking the purchase"
          ],
          learn: "Because services are intangible, positioning must make the outcome visible, predictable, and specialized.",
          bad_example: "'We do marketing and general consulting for any business.'",
          better_example: "'We build B2B SaaS onboarding funnels that increase free-to-paid conversion in 30 days.'",
          questions: [
            {
              type: "mcq",
              question: "In a crowded market of general software agencies, how can a firm build a defensible position?",
              options: [
                "Claim to build every kind of software for all industries",
                "Specialize in a high-stakes vertical like HIPAA-compliant healthcare applications",
                "Copy the exact wording of competitors",
                "Refuse to display case studies or past work"
              ],
              answer: 1,
              explanation: "Specialization in high-stakes domains gives buyers confidence and eliminates generic competition."
            }
          ],
          application: "Define the specific outcome, timeline, and specialization that makes your service an obvious choice for one niche."
        },
        {
          id: "geographic_positioning",
          title: "Positioning Places and Regions",
          principle: "Places and cities hold powerful mental associations that can attract talent, tourism, or capital.",
          underlying_concepts: [
            "Place identity",
            "Reputation",
            "Cultural associations",
            "Economic specialization"
          ],
          learn: "Silicon Valley means tech innovation; Paris means romance and luxury; Las Vegas means entertainment. Understanding regional associations unlocks place branding.",
          bad_example: "A small city claiming it is 'The next Silicon Valley, Paris, and Wall Street combined.'",
          better_example: "Austin positioning around live music and creative tech culture ('Keep Austin Weird').",
          questions: [
            {
              type: "mcq",
              question: "What is the goal of an effective place-positioning strategy?",
              options: [
                "Making every city claim the exact same identity",
                "Connecting a region to distinctive, credible attributes that matter to visitors or businesses",
                "Making exaggerated claims disconnected from local reality",
                "Ignoring existing cultural reputation"
              ],
              answer: 1,
              explanation: "Place positioning succeeds by accentuating real, credible strengths that create distinct cultural magnetism."
            }
          ],
          application: "Identify the top 2 associations people have with your city, and one specific economic or cultural strength it could own."
        },
        {
          id: "personal_positioning",
          title: "Positioning Yourself and Your Career",
          principle: "Individual careers advance when professionals establish a crisp reputation for solving a specific class of problems.",
          underlying_concepts: [
            "Professional differentiation",
            "Specialization",
            "Career capital",
            "Personal monopoly"
          ],
          learn: "A generalist who does 'a little bit of everything' is replaceable and underpaid. A specialist known as 'the person who fixes database bottlenecks under load' has pricing power.",
          bad_example: "A resume summary: 'Passionate team player skilled in everything from coding to accounting.'",
          better_example: "'Senior backend engineer specializing in high-throughput payment settlement pipelines.'",
          questions: [
            {
              type: "mcq",
              question: "A junior software developer applies for 100 jobs with a generic resume. How could they improve their career positioning?",
              options: [
                "Claim to have 10 years of expertise in every programming language",
                "Highlight focused expertise and tangible projects in a specific domain like mobile audio engineering",
                "Delete all past projects from their GitHub",
                "Copy another engineer's LinkedIn profile word-for-word"
              ],
              answer: 1,
              explanation: "Focus and demonstrable proof make candidates stand out clearly in a sea of generic applicants."
            }
          ],
          application: "Write your professional positioning sentence: What specific high-value problem do you solve better than average?"
        }
      ]
    },
    {
      id: "positioning_method",
      category: "7. Building a Positioning Strategy",
      concepts: [
        {
          id: "define_positioning_problem",
          title: "Define the Positioning Problem",
          principle: "A positioning strategy begins by diagnosing customer minds and competitive context before writing slogans.",
          underlying_concepts: [
            "Situation analysis",
            "Customer research",
            "Perception mapping",
            "Objective clarity"
          ],
          learn: "Never start with copy or graphics. Start with the map of the market: Who is the buyer? What do they currently believe? Who owns what rung on the ladder?",
          bad_example: "Brainstorming logo colors before knowing what alternatives customers currently use.",
          better_example: "Interviewing 20 customers to discover which competitors they evaluate and why.",
          questions: [
            {
              type: "mcq",
              question: "What must precede the creation of marketing slogans and visual design?",
              options: [
                "Understanding the target audience, competitive landscape, and existing perceptions",
                "Selecting a favorite brand color",
                "Imitating a famous Fortune 500 company",
                "Generating 20 unrelated product promises"
              ],
              answer: 0,
              explanation: "Positioning is grounded in market reality and competitive psychology, not decorative cosmetic exercises."
            }
          ],
          application: "Document your target audience, category, top 2 competitors, existing perceptions, and the single change you wish to create."
        },
        {
          id: "choose_position",
          title: "Choose a Distinctive and Relevant Position",
          principle: "A defensible position must be relevant to the customer, distinct from competitors, and supported by capability.",
          underlying_concepts: [
            "Relevance",
            "Differentiation",
            "Credibility",
            "Strategic sacrifice"
          ],
          learn: "Positioning requires sacrifice. You cannot own 'the fastest' and 'the most thorough' simultaneously. You must choose one hill to conquer.",
          bad_example: "Claiming to be the fastest, easiest, safest, cheapest, and most feature-packed tool on the market.",
          better_example: "Sacrificing broad enterprise features to own the fastest lightweight note-taking experience.",
          questions: [
            {
              type: "mcq",
              question: "Which positioning proposition is the strongest?",
              options: [
                "We are the greatest company in the world at everything",
                "We help a defined audience solve an urgent problem with a clear, demonstrable distinction",
                "We are revolutionary simply because our founders say so",
                "We serve all people in all industries with all features"
              ],
              answer: 1,
              explanation: "Strong positioning pairs a defined audience with a distinct, demonstrable solution."
            }
          ],
          application: "Draft three distinct positioning angles for your offering and evaluate which requires the most strategic sacrifice."
        },
        {
          id: "support_position",
          title: "Support the Position with Evidence",
          principle: "A positioning claim without concrete proof points is just hot air that customers ignore.",
          underlying_concepts: [
            "Proof points",
            "Claim substantiation",
            "Demonstrable performance",
            "Customer trust"
          ],
          learn: "If you claim to be 'the fastest', show the side-by-side benchmark. If you claim 'rock-solid reliability', display your public uptime and SLA.",
          bad_example: "Repeating 'We are the most secure!' 50 times without independent audits or certifications.",
          better_example: "Displaying SOC2 certification, end-to-end encryption details, and verifiable third-party penetration reports.",
          questions: [
            {
              type: "mcq",
              question: "A SaaS tool claims to be the easiest to set up. What best validates this claim?",
              options: [
                "Saying 'Setup is instant' repeatedly in ads",
                "A video demonstration showing setup completed in under 60 seconds with real user metrics",
                "Adding 10 more marketing claims",
                "Hiding negative setup reviews"
              ],
              answer: 1,
              explanation: "Verifiable, observable evidence validates positioning promises in the mind of skeptical prospects."
            }
          ],
          application: "Identify 3 objective proof points that validate your core positioning claim, and 1 limitation you communicate transparently."
        },
        {
          id: "maintain_consistency",
          title: "Keep the Position Consistent",
          principle: "Positioning is a multi-year discipline; frequent changes erase hard-won mental real estate.",
          underlying_concepts: [
            "Message consistency",
            "Cognitive reinforcement",
            "Long-term memory",
            "Execution alignment"
          ],
          learn: "Companies get bored of their own positioning long before customers even notice it. Great brands maintain their positioning for decades (e.g. BMW: 'The Ultimate Driving Machine').",
          bad_example: "Changing your company tagline and target market every quarter to chase current buzzwords.",
          better_example: "Reinforcing the same core benefit across product updates, onboarding, marketing, and support for years.",
          questions: [
            {
              type: "mcq",
              question: "A company claims 'extreme simplicity' but constantly clutters its UI with confusing features every month. What is the breakdown?",
              options: [
                "The product experience directly contradicts the promised position",
                "Contradictions automatically make software more memorable",
                "Positioning is completely divorced from product experience",
                "Adding more features always increases simplicity"
              ],
              answer: 0,
              explanation: "Product reality must consistently reinforce the positioning promise, or the mental position collapses."
            }
          ],
          application: "Audit your onboarding flow, homepage, and customer support. Where does the actual experience contradict your promised position?"
        }
      ]
    }
  ],
  final_challenge: {
    title: "Own a Clear Place in the Customer's Mind",
    objective: "Develop and test a comprehensive positioning strategy for a real product, service, or personal brand.",
    steps: [
      {
        id: 1,
        task: "Define the audience",
        deliverable: "Describe the specific people you want to reach and the urgent problem that matters to them."
      },
      {
        id: 2,
        task: "Map the competition",
        deliverable: "List direct competitors, indirect alternatives, and the option of doing nothing."
      },
      {
        id: 3,
        task: "Identify existing perceptions",
        deliverable: "Find out which brands customers already remember and what associations they hold."
      },
      {
        id: 4,
        task: "Choose a distinctive position",
        deliverable: "Identify one relevant, credible difference that your target audience immediately understands."
      },
      {
        id: 5,
        task: "Support the claim",
        deliverable: "List the product capabilities, customer evidence, or demonstrations that make the claim believable."
      },
      {
        id: 6,
        task: "Test customer understanding",
        deliverable: "Show your positioning statement to target customers without coaching them. Record what they believe you do."
      },
      {
        id: 7,
        task: "Decide what to change",
        deliverable: "Use customer feedback to refine the audience, message, product, or competitive distinction."
      }
    ],
    user_questions: [
      {
        id: "audience",
        prompt: "Who is your target audience?",
        input_type: "text",
        required: true
      },
      {
        id: "category",
        prompt: "What category do customers place your product in?",
        input_type: "text",
        required: true
      },
      {
        id: "alternatives",
        prompt: "Which alternatives do customers currently use (including spreadsheets or doing nothing)?",
        input_type: "text",
        required: true
      },
      {
        id: "position",
        prompt: "What one association do you want customers to remember?",
        input_type: "text",
        required: true
      },
      {
        id: "difference",
        prompt: "Why should customers choose you instead of an alternative?",
        input_type: "text",
        required: true
      },
      {
        id: "evidence",
        prompt: "What verifiable evidence makes your claim credible?",
        input_type: "text",
        required: true
      },
      {
        id: "customer_test",
        prompt: "What did target customers understand correctly or misunderstand when tested?",
        input_type: "text",
        required: true
      },
      {
        id: "next_action",
        prompt: "What will you change or test in the next 48 hours?",
        input_type: "text",
        required: true
      }
    ],
    completion_criteria: [
      "A defined target audience",
      "A clear category and competitive context",
      "One relevant point of differentiation",
      "Evidence supporting the positioning claim",
      "Feedback from real target customers",
      "A concrete next action"
    ]
  }
};

// Helper: Convert the entire book into standard BoringBros Idea[] objects
export function getPositioningIdeas() {
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

  for (const module of POSITIONING_BOOK.learning_path) {
    for (const concept of module.concepts) {
      const q = concept.questions[0];
      const ex = concept.bad_example && concept.better_example
        ? `Bad: "${concept.bad_example}"\nBetter: "${concept.better_example}"`
        : concept.better_example || concept.principle;

      ideas.push({
        id: `pos-${concept.id.replace(/_/g, '-')}`,
        s: "Startups",
        t: concept.title,
        b: "Positioning",
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
