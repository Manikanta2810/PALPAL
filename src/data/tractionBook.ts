import { BookDefinition } from './momTestBook';

export const TRACTION_BOOK: BookDefinition = {
  id: "traction",
  title: "Traction: How Any Startup Can Achieve Explosive Customer Growth",
  author: "Gabriel Weinberg & Justin Mares",
  category: "Growth & Distribution",
  purpose: "Find and validate repeatable, scalable channels to acquire relevant users using the Bullseye Framework and the 19 Traction Channels.",
  content_policy: "Original educational curriculum organized around Gabriel Weinberg and Justin Mares's published Bullseye Framework and 19 Traction Channels. Not a reproduction of the book.",
  learning_path: [
    {
      id: "traction_basics",
      category: "1. Understanding Traction",
      concepts: [
        {
          id: "traction",
          title: "Traction Is Measurable Growth",
          principle: "Traction is quantitative evidence of customer demand. Building a product and acquiring customers are two separate challenges of equal importance.",
          underlying_concepts: [
            "Distribution as priority",
            "50% Rule",
            "Customer demand evidence",
            "Separating product from marketing",
            "Repeatable acquisition"
          ],
          learn: "Most startups fail not because they cannot build a product, but because they fail to get traction. Weinberg and Mares propose the 50% Rule: spend 50% of your time building the product and 50% of your time testing traction channels from day one.",
          bad_example: "Hiding in a garage for 18 months polishing features while hoping users will magically appear upon launch.",
          better_example: "Spending 20 hours a week building features and 20 hours talking to prospects, running small ad tests, and pitching niche newsletters.",
          questions: [
            {
              type: "mcq",
              question: "Your app is polished and functional, but has almost no users. What is the most critical problem to solve?",
              options: [
                "Build more features automatically",
                "Find and test repeatable ways to reach relevant users",
                "Redesign the logo and brand palette repeatedly",
                "Assume users will eventually arrive on their own"
              ],
              answer: 1,
              explanation: "Product quality and user acquisition are distinct challenges. Finding repeatable channels directly attacks the real failure point."
            }
          ],
          application: "Define your specific target user profile and set a concrete, measurable 30-day customer acquisition goal."
        }
      ]
    },
    {
      id: "bullseye",
      category: "2. The Bullseye Framework",
      concepts: [
        {
          id: "brainstorm",
          title: "The Outer Ring: Brainstorm All 19 Channels",
          principle: "Systematically explore all 19 acquisition channels without premature dismissal, identifying at least one plausible strategy for each.",
          underlying_concepts: [
            "Channel bias removal",
            "Combinatorial ideation",
            "Underutilized channels",
            "Broad exploration",
            "Competitor blindspots"
          ],
          learn: "Founders suffer from channel bias: engineers run ads; salespeople do cold calls. The Outer Ring forces you to brainstorm how your product could acquire users through every single one of the 19 channels, especially the ones you initially dismissed.",
          bad_example: "Assuming that because you personally dislike trade shows, no buyer in your enterprise industry visits them.",
          better_example: "Brainstorming a viable, creative hypothesis for all 19 channels before ruling any of them out.",
          questions: [
            {
              type: "mcq",
              question: "Why does the Bullseye Framework require brainstorming across all 19 channels?",
              options: [
                "To force you to run 19 expensive ad campaigns simultaneously",
                "To eliminate personal channel bias and uncover overlooked distribution opportunities",
                "Because every startup must use all 19 channels to survive",
                "To postpone testing as long as possible"
              ],
              answer: 1,
              explanation: "Brainstorming all channels breaks founder bias and surfaces unconventional channels that competitors are ignoring."
            }
          ],
          application: "List at least 8 traction channels and write down one specific, creative experiment idea for each."
        },
        {
          id: "prioritize",
          title: "The Middle Ring: Prioritize Promising Channels",
          principle: "Filter your brainstorm down to a shortlist of 3 to 5 candidate channels based on audience fit, cost, speed, and potential scale.",
          underlying_concepts: [
            "Audience alignment",
            "Customer acquisition cost (CAC)",
            "Velocity of learning",
            "Ceiling of scale",
            "Focus over dispersion"
          ],
          learn: "Evaluate candidates against four criteria: 1. Cost (can you afford it?), 2. Speed (how fast can you get signal?), 3. Audience fit (are buyers there?), and 4. Scale (can it support the business when you grow?). Move the top 3 into your Middle Ring.",
          bad_example: "Trying to test 8 different channels simultaneously with a team of two people, failing to execute any of them well.",
          better_example: "Selecting 3 focused channels (Content Marketing, SEM, and Cold Email) and ranking them by learning speed.",
          questions: [
            {
              type: "mcq",
              question: "Which set of criteria best helps you select candidate channels for the Middle Ring?",
              options: [
                "Which channel is trending on social media today",
                "Audience fit, expected acquisition cost, speed of testing, and potential scale",
                "Whichever channel requires zero work",
                "Copying whatever a giant billion-dollar incumbent is doing"
              ],
              answer: 1,
              explanation: "Prioritization evaluates audience concentration, financial feasibility, fast feedback loops, and room to grow."
            }
          ],
          application: "Select 5 candidate channels and write a one-paragraph justification ranking your top three."
        },
        {
          id: "test",
          title: "The Inner Ring: Test the Bullseye Winner",
          principle: "Run cheap, rapid micro-experiments to identify your single winning channel, then pour 100% of your growth effort into scaling it.",
          underlying_concepts: [
            "Micro-testing",
            "Single channel dominance",
            "Cost per activated user",
            "Channel saturation",
            "Ruthless prioritization"
          ],
          learn: "At any given growth stage, usually only ONE traction channel will drive the vast majority of your growth. Micro-tests are not meant to achieve scale; their sole job is to prove or disprove channel viability with minimal capital.",
          bad_example: "Spreading $5,000 evenly across 10 channels and getting inconclusive, noisy results across all of them.",
          better_example: "Spending $250 on a 5-day Google Ads test to measure cost per activated user, finding positive ROI, and doubling down.",
          questions: [
            {
              type: "mcq",
              question: "What is the primary objective of running micro-tests in the Bullseye Framework?",
              options: [
                "Achieve full venture-scale growth immediately",
                "Gather cheap, fast evidence to identify the single channel with the highest conversion potential",
                "Prove that marketing is unnecessary",
                "Exhaust the startup's marketing budget before fundraising"
              ],
              answer: 1,
              explanation: "Micro-tests gather rapid behavioral signal to validate which channel deserves all of your focused scaling efforts."
            }
          ],
          application: "Design a 7-day channel micro-test with a hypothesis, a $100–$250 budget cap, and a numeric success threshold."
        }
      ]
    },
    {
      id: "nineteen_channels",
      category: "3. The 19 Traction Channels",
      concepts: [
        {
          id: "channel_viral",
          title: "Channel 1: Viral Marketing",
          principle: "Existing users introduce new users through built-in product mechanics, referral loops, or collaborative workflows.",
          underlying_concepts: ["Viral coefficient (K-factor)", "Inherent virality", "Artificial incentives", "Referral loops"],
          learn: "Virality can be inherent (using PayPal requires sending money to someone else) or incentivized (Dropbox giving extra storage for invites). If each user brings in more than 1 new user (K > 1), growth becomes exponential.",
          bad_example: "Adding generic 'Share on Facebook' buttons to a private tax calculator that nobody wants to broadcast.",
          better_example: "Giving students free bonus mental model flashcards when they invite a study partner.",
          questions: [
            {
              type: "mcq",
              question: "When is viral marketing most effective?",
              options: [
                "When sharing is an organic, natural byproduct of using the core product",
                "When you spam users' contacts without permission",
                "When you force users to tweet before seeing the app",
                "When the product has no real utility"
              ],
              answer: 0,
              explanation: "Inherent virality—where using the product naturally involves inviting peers—creates sustainable organic loops."
            }
          ],
          application: "Map out the viral loop in your product: what is the trigger, the invitation mechanism, and the recipient's payoff?"
        },
        {
          id: "channel_pr",
          title: "Channel 2: Public Relations (PR)",
          principle: "Gain coverage in major publications, newspapers, tech media, and industry trade magazines by pitching compelling stories.",
          underlying_concepts: ["Newsworthiness", "Story hooks", "Journalist relationships", "Trend surfing"],
          learn: "Reporters do not care about your product features; they care about timely, controversial, or culturally relevant stories. Anchor your pitch in a macro trend, unique data, or a human narrative.",
          bad_example: "Sending generic press releases announcing 'Version 1.2 is now available' to random tech reporters.",
          better_example: "Publishing original survey data showing 82% of founders suffer decision fatigue and pitching that insight to business journalists.",
          questions: [
            {
              type: "mcq",
              question: "What makes a press pitch compelling to a journalist?",
              options: [
                "Listing every technical feature of your product",
                "Connecting your startup to a broader news trend, proprietary data, or unique human story",
                "Offering to pay the reporter under the table",
                "Sending 50 follow-up emails in one day"
              ],
              answer: 1,
              explanation: "Journalists hunt for compelling narratives that interest their readers, not corporate feature announcements."
            }
          ],
          application: "Draft a 3-paragraph PR pitch connecting your product to a current cultural or industry debate."
        },
        {
          id: "channel_unconventional_pr",
          title: "Channel 3: Unconventional PR",
          principle: "Generate disproportionate media buzz through creative publicity stunts, exceptional customer love, or viral stunts.",
          underlying_concepts: ["Publicity stunts", "Customer delight", "Surprise & delight", "Viral memorable moments"],
          learn: "Unconventional PR ranges from spectacular stunts (Half.com paying an Oregon town to rename itself Half.com) to customer appreciation (Zappos sending flowers to customers). It creates word-of-mouth stories that people love to retell.",
          bad_example: "Running offensive or confusing stunts that damage brand trust and alienate your core audience.",
          better_example: "BoringBros publicly roasting pitch decks live on Twitch to demonstrate mental models in real time.",
          questions: [
            {
              type: "mcq",
              question: "What is the core benefit of unconventional PR?",
              options: [
                "It replaces product-market fit entirely",
                "It earns outsized attention and organic word-of-mouth for a fraction of the cost of paid ads",
                "It guarantees enterprise sales contracts",
                "It requires zero creativity"
              ],
              answer: 1,
              explanation: "Memorable stunts and remarkable customer experiences produce outsized media coverage and social buzz."
            }
          ],
          application: "Brainstorm one creative stunt or customer delight experiment that people would organically share."
        },
        {
          id: "channel_sem",
          title: "Channel 4: Search Engine Marketing (SEM)",
          principle: "Place targeted paid advertisements on search engines to capture users actively searching for solutions.",
          underlying_concepts: ["High intent", "Cost per click (CPC)", "Ad quality score", "Conversion rate"],
          learn: "Search ads capture high-intent demand. When someone searches 'SaaS churn calculator', they have an immediate, burning problem. The key is finding long-tail keywords where competition is low and intent is sky-high.",
          bad_example: "Bidding on ultra-generic terms like 'business' that cost $40 per click with low intent.",
          better_example: "Bidding on long-tail keywords like 'cap table dilution spreadsheet template' with a dedicated landing page.",
          questions: [
            {
              type: "mcq",
              question: "What is the biggest advantage of Search Engine Marketing (SEM)?",
              options: [
                "It is always 100% free",
                "It reaches users at the exact moment they express intent to solve a problem",
                "You never have to build a landing page",
                "It guarantees viral sharing"
              ],
              answer: 1,
              explanation: "Search intent is commercial and immediate: users are explicitly asking the internet for a solution."
            }
          ],
          application: "Identify 10 high-intent long-tail keywords relevant to your product and estimate their search volume."
        },
        {
          id: "channel_social_ads",
          title: "Channel 5: Social & Display Ads",
          principle: "Pay to reach targeted demographic, professional, and interest cohorts across platforms like Meta, LinkedIn, and X.",
          underlying_concepts: ["Audience segmentation", "Creative fatigue", "Retargeting", "Impression testing"],
          learn: "Unlike search ads (demand capture), social ads are demand generation. You intercept people scrolling by presenting a hook that grabs attention, highlights a pain point, and offers immediate payoff.",
          bad_example: "Running the exact same static image ad for 9 months until costs double from creative fatigue.",
          better_example: "Testing 4 video hooks and 3 copy variations to find the lowest cost per signup, then scaling the winner.",
          questions: [
            {
              type: "mcq",
              question: "How do social ads differ fundamentally from search ads?",
              options: [
                "Social ads are always cheaper",
                "Social ads generate demand by interrupting relevant users, while search ads capture existing search intent",
                "Social ads cannot be measured",
                "Social ads only work on weekends"
              ],
              answer: 1,
              explanation: "Social ads proactively target user profiles rather than waiting for them to type a query."
            }
          ],
          application: "Outline 3 distinct creative angles (pain point, aspirational outcome, curiosity gap) for a paid social ad."
        },
        {
          id: "channel_offline_ads",
          title: "Channel 6: Offline Ads",
          principle: "Use print, billboard, transit, radio, and direct mail placements to reach localized or underserved customer segments.",
          underlying_concepts: ["Trackable QR codes", "Physical brand presence", "Local dominance", "Direct mail"],
          learn: "Many digital startups ignore offline ads, which means less digital bidding competition. High-growth startups like Casper and Brex built brand credibility through subway ads and billboards with unique promo URLs.",
          bad_example: "Buying expensive highway billboards with no unique URL or QR code, making ROI impossible to measure.",
          better_example: "Sending personalized handwritten postcard mailers with custom QR codes to 200 target startup founders.",
          questions: [
            {
              type: "mcq",
              question: "How should an early-stage startup measure the effectiveness of offline ads?",
              options: [
                "Guess based on website traffic vibes",
                "Use dedicated vanity URLs, custom promo codes, or dynamic QR codes",
                "Assume that if sales increase, the billboard worked",
                "Offline ads cannot and should not be tracked"
              ],
              answer: 1,
              explanation: "Dedicated digital tracking links and promo codes make offline physical campaigns measurable."
            }
          ],
          application: "Design a targeted physical flyer, poster, or postcard with a trackable URL for a local meetup or campus."
        },
        {
          id: "channel_seo",
          title: "Channel 7: Search Engine Optimization (SEO)",
          principle: "Earn compounding, unpaid organic traffic by ranking high on search engines for relevant queries.",
          underlying_concepts: ["Organic compounding", "Domain authority", "Keyword search volume", "Programmatic SEO"],
          learn: "SEO takes time to build, but once established, it becomes a compounding moat of free, high-intent traffic. Focus on topics where you can write the single best, most thorough guide on the internet.",
          bad_example: "Publishing 500 low-quality AI-generated generic articles that bounce users and get penalized by Google.",
          better_example: "Building a comprehensive, beautifully structured guide to 'The Mom Test Framework' that ranks on page one.",
          questions: [
            {
              type: "mcq",
              question: "What makes SEO such a powerful long-term traction channel?",
              options: [
                "It delivers instant results on day one",
                "It compounds over time, providing steady inbound qualified traffic without recurring ad spend",
                "Google promises top rankings to every startup",
                "It requires zero content creation"
              ],
              answer: 1,
              explanation: "Authoritative search rankings compound over months and years, providing high-margin organic user acquisition."
            }
          ],
          application: "Identify one specific search term where you can create the most authoritative, helpful page on the web."
        },
        {
          id: "channel_content",
          title: "Channel 8: Content Marketing",
          principle: "Attract, educate, and retain target customers by publishing high-signal essays, guides, podcasts, and video teardowns.",
          underlying_concepts: ["Authority building", "Audience trust", "Editorial excellence", "Content-to-product bridge"],
          learn: "Content marketing builds trust before asking for money. Companies like Buffer and HubSpot turned blogs into multi-million-dollar acquisition engines by transparently sharing metrics, case studies, and practical guides.",
          bad_example: "Writing shallow 300-word promotional puff pieces that offer no actionable value to the reader.",
          better_example: "Writing deep teardowns of famous startup failures and explaining the mental models that could have prevented them.",
          questions: [
            {
              type: "mcq",
              question: "What is the primary objective of content marketing?",
              options: [
                "Sell immediately in every paragraph",
                "Build authority and trust by delivering real educational value to prospective customers",
                "Hide what the product does",
                "Produce as much generic fluff as possible"
              ],
              answer: 1,
              explanation: "Delivering authentic, high-signal value earns audience trust and establishes the brand as an authority."
            }
          ],
          application: "Outline an educational article or guide that directly solves a painful problem for your ideal customer."
        },
        {
          id: "channel_email",
          title: "Channel 9: Email Marketing",
          principle: "Build an owned audience and nurture leads through permission-based educational newsletters and lifecycle sequences.",
          underlying_concepts: ["Owned media", "Open & click rates", "Lifecycle onboarding", "Retention loops"],
          learn: "Unlike social media platforms (where algorithms change overnight), your email list is an owned asset. Email converts higher than almost any other channel when used to deliver consistent, non-spammy value.",
          bad_example: "Buying an unverified email list of 50,000 strangers and spamming them with unsolicited sales pitches.",
          better_example: "Offering a free 7-day email course on 'Mental Models for Founders' that naturally introduces your product.",
          questions: [
            {
              type: "mcq",
              question: "Why is email marketing considered an 'owned' channel?",
              options: [
                "You own the email servers of all recipients",
                "You have direct permission to communicate with subscribers without an algorithmic middleman",
                "Emails can never bounce",
                "It is illegal to unsubscribe from emails"
              ],
              answer: 1,
              explanation: "An email subscriber list is an owned audience asset immune to third-party social algorithmic changes."
            }
          ],
          application: "Design a 3-part automated onboarding email sequence that helps new signups reach their first aha moment."
        },
        {
          id: "channel_engineering",
          title: "Channel 10: Engineering as Marketing",
          principle: "Build free micro-tools, calculators, widgets, and directories to attract prospective customers and generate qualified leads.",
          underlying_concepts: ["Free utility tools", "Lead magnets", "Interactive marketing", "Viral micro-apps"],
          learn: "HubSpot built the free 'Website Grader', which attracted millions of users; Moz built 'Open Site Explorer'. Software engineers can build lightweight utility tools that provide instant value and funnel users to the main product.",
          bad_example: "Spending $50,000 on a separate standalone product with zero logical connection to your core business.",
          better_example: "Building a free 1-click startup dilution calculator that introduces founders to your cap table platform.",
          questions: [
            {
              type: "mcq",
              question: "Which is the clearest example of Engineering as Marketing?",
              options: [
                "Buying Google display banner ads",
                "Building a free interactive valuation calculator that attracts founders to your finance tool",
                "Writing a press release",
                "Hiring an agency to design a logo"
              ],
              answer: 1,
              explanation: "A free software utility tool solves an immediate user problem while funneling qualified users to the core offering."
            }
          ],
          application: "Propose a simple, high-utility micro-tool you could build in a weekend to attract your target audience."
        },
        {
          id: "channel_targeting_blogs",
          title: "Channel 11: Targeting Blogs & Niche Media",
          principle: "Reach concentrated pools of prospective users by partnering with niche publications, Substacks, and industry blogs.",
          underlying_concepts: ["Niche authority", "Guest authoring", "Newsletter sponsorships", "Targeted audiences"],
          learn: "Before TechCrunch writes about you, smaller niche bloggers and newsletter writers will. Early adopters read niche blogs. Sponsoring a focused Substack with 5,000 highly engaged readers often outperforms huge generic sites.",
          bad_example: "Pitching a specialized biotech tool to general gossip blogs.",
          better_example: "Sponsoring a popular weekly Substack newsletter read by 3,000 early-stage SaaS product managers.",
          questions: [
            {
              type: "mcq",
              question: "Why are niche blogs often more effective for early traction than massive news sites?",
              options: [
                "Niche audiences have higher topical relevance, trust, and concentration of early adopters",
                "Massive news sites are always cheaper",
                "Niche bloggers never check their email",
                "Niche sites reach billions of people"
              ],
              answer: 0,
              explanation: "Niche media offers concentrated topical relevance where nearly 100% of readers match your target persona."
            }
          ],
          application: "Identify 5 niche blogs or newsletters read by your target users and propose a guest article or sponsorship."
        },
        {
          id: "channel_bizdev",
          title: "Channel 12: Business Development (BD)",
          principle: "Form strategic partnerships that exchange distribution, technology, or content for mutual, non-competing benefit.",
          underlying_concepts: ["Strategic alliances", "Mutual value", "Co-marketing", "Ecosystem distribution"],
          learn: "Business development is not sales; it is partnership. You find a partner who already has your target audience and propose a collaboration where both parties win (e.g. Google partnering with Yahoo to power its search early on).",
          bad_example: "Asking a large company for access to their customer database without offering any tangible value in return.",
          better_example: "Partnering with an incubator to provide free access to all their portfolio founders in exchange for featured placement.",
          questions: [
            {
              type: "mcq",
              question: "What is the defining principle of an effective Business Development partnership?",
              options: [
                "Extracting maximum value while giving nothing back",
                "Creating clear, mutual alignment and value where both companies benefit from the partnership",
                "Paying massive upfront fees with no contract",
                "Relying entirely on verbal promises"
              ],
              answer: 1,
              explanation: "Sustainable BD partnerships require win-win incentives where both parties gain strategic or commercial value."
            }
          ],
          application: "Identify a company that already serves your target audience without competing, and propose a joint collaboration."
        },
        {
          id: "channel_sales",
          title: "Channel 13: Direct Sales",
          principle: "Personally identify, prospect, qualify, and close customers through direct phone, email, and demo conversations.",
          underlying_concepts: ["High-touch prospecting", "Lead qualification", "Pipeline management", "High ACV"],
          learn: "For high-ticket B2B products, direct sales is essential. Even for consumer products, founder-led direct sales in early days generates deep qualitative feedback and unvarnished truth about buyer objections.",
          bad_example: "Hiring five junior sales reps before the founders have personally closed a single paying customer.",
          better_example: "The founder personally sending 50 tailored LinkedIn messages to qualify needs, closing the first 10 accounts.",
          questions: [
            {
              type: "mcq",
              question: "Why should founders conduct early direct sales personally rather than delegating it?",
              options: [
                "To save money on sales commissions only",
                "To hear customer objections directly, understand buyer psychology, and iterate product messaging rapidly",
                "Because sales reps refuse to work for early startups",
                "Because direct sales never takes any time"
              ],
              answer: 1,
              explanation: "Founder-led sales provides invaluable customer discovery and reveals true buying motives that inform the product."
            }
          ],
          application: "Write a cold outreach message tailored to a specific prospective buyer highlighting a problem you solve."
        },
        {
          id: "channel_affiliate",
          title: "Channel 14: Affiliate Programs",
          principle: "Incentivize third-party publishers and promoters by paying them a percentage commission on every paying customer they refer.",
          underlying_concepts: ["Performance-based payout", "Affiliate networks", "Commission economics", "Partner incentives"],
          learn: "Affiliate marketing aligns incentives: you only pay when revenue is generated. Companies like Amazon, Shopify, and Webflow scaled massively by offering generous recurring affiliate commissions to educators and reviewers.",
          bad_example: "Offering a 5% commission on a $10 purchase, giving promoters zero financial incentive to create content.",
          better_example: "Offering a 30% recurring monthly commission on annual software subscriptions to industry influencers.",
          questions: [
            {
              type: "mcq",
              question: "What is the primary financial advantage of an affiliate program?",
              options: [
                "You pay only after an actual sale or activation occurs, lowering upfront cash risk",
                "Affiliates will promote your product for free forever",
                "You never need to track customer links",
                "Affiliate marketing guarantees zero churn"
              ],
              answer: 0,
              explanation: "Affiliate programs are strictly performance-based: customer acquisition costs are tied directly to realized revenue."
            }
          ],
          application: "Structure an affiliate tier: define the commission percentage, cookie duration, and ideal affiliate profile."
        },
        {
          id: "channel_platforms",
          title: "Channel 15: Existing Platforms",
          principle: "Ride the distribution momentum of massive existing ecosystems like app stores, browser extensions, and marketplaces.",
          underlying_concepts: ["Platform leverage", "App store optimization", "Ecosystem piggybacking", "Platform risk"],
          learn: "PayPal grew on eBay; Zynga grew on Facebook; Calm grew on the iOS App Store. Tapping into platforms with hundreds of millions of users gives you instant access to concentrated discovery channels.",
          bad_example: "Violating platform terms of service to scrape user emails, resulting in an instant permanent ban.",
          better_example: "Building a top-ranked Shopify App that solves a recurring checkout pain point for 100,000 store owners.",
          questions: [
            {
              type: "mcq",
              question: "Which company is a classic historical example of leveraging an existing platform for growth?",
              options: [
                "PayPal growing rapidly as the preferred payment method on eBay",
                "A local bakery putting a sign in its front window",
                "A consultant cold-calling local businesses",
                "A physical retail store opening inside an abandoned warehouse"
              ],
              answer: 0,
              explanation: "PayPal achieved breakout early traction by deeply embedding itself within the massive, existing eBay ecosystem."
            }
          ],
          application: "Identify one established platform (e.g. Chrome Web Store, Shopify, Slack) where you could launch an integration."
        },
        {
          id: "channel_trade_shows",
          title: "Channel 16: Trade Shows & Expos",
          principle: "Showcase your product at major industry gatherings to connect face-to-face with buyers, partners, and press.",
          underlying_concepts: ["In-person deals", "High concentration of buyers", "Event networking", "Pre-booking meetings"],
          learn: "Trade shows are expensive, but they gather the most serious enterprise buyers in one convention center. The secret: don't just stand at a booth—pre-schedule 20 meetings with target executives before you even arrive.",
          bad_example: "Spending $20,000 on a giant booth and passively waiting for people to walk by while checking your phone.",
          better_example: "Attending as a visitor, pre-booking 15 targeted demo meetings over coffee, and closing 4 pilot customers for $500 total travel cost.",
          questions: [
            {
              type: "mcq",
              question: "What is the most effective way for a startup to get ROI from an industry trade show?",
              options: [
                "Give away hundreds of cheap plastic pens at a booth",
                "Pre-book targeted demo meetings with prospective buyers before arriving at the event",
                "Spend the entire budget on expensive evening parties",
                "Avoid talking to anyone in the expo hall"
              ],
              answer: 1,
              explanation: "Scheduling high-value meetings in advance ensures predictable customer discovery and pipeline development."
            }
          ],
          application: "Identify the premier annual trade show in your industry and list three executives you would pitch for a meeting."
        },
        {
          id: "channel_offline_events",
          title: "Channel 17: Offline Events & Meetups",
          principle: "Host workshops, dinners, panels, and intimate gatherings to build deep customer relationships and community champions.",
          underlying_concepts: ["Intimate networking", "Community trust", "Local density", "Event sponsorships"],
          learn: "Y Combinator hosts Tuesday dinners; Yelp threw famous local elite parties; Twilio hosted hackathons. Bringing your target users together in physical space builds high-trust loyalty that digital ads cannot match.",
          bad_example: "Hosting a high-pressure sales pitch disguised as a meetup and boring guests with PowerPoint slides.",
          better_example: "Hosting an intimate monthly breakfast for 10 local founders to discuss growth bottlenecks and teardowns.",
          questions: [
            {
              type: "mcq",
              question: "Why did companies like Yelp and Twilio invest heavily in offline meetups and hackathons?",
              options: [
                "They had no engineers to build web features",
                "In-person community events foster intense brand loyalty and authentic word-of-mouth advocacy",
                "Meeting rooms are always free",
                "Offline events eliminate the need for an internet connection"
              ],
              answer: 1,
              explanation: "In-person events forge memorable emotional connections that turn early adopters into passionate brand evangelists."
            }
          ],
          application: "Plan a 1-hour breakfast or evening workshop format designed to deliver immense value to 10 prospective users."
        },
        {
          id: "channel_speaking",
          title: "Channel 18: Speaking Engagements",
          principle: "Deliver high-value presentations and keynote talks at conferences to establish category leadership and drive inbound interest.",
          underlying_concepts: ["Thought leadership", "Stage authority", "Conference circuit", "Repurposing talk content"],
          learn: "Speaking from the main stage positions you as an expert. If you deliver genuine, non-commercial insights, attendees will flock to your booth or website afterward to learn more about your company.",
          bad_example: "Using your 30-minute conference speaking slot to give an aggressive, boring commercial sales pitch.",
          better_example: "Giving a talk on 'How 5 Startups Beat Churn' that delivers actionable frameworks, ending with a link to free templates.",
          questions: [
            {
              type: "mcq",
              question: "What is the golden rule of conference speaking for customer acquisition?",
              options: [
                "Deliver pure educational value and actionable insights rather than a product sales pitch",
                "Talk about yourself the entire time",
                "Refuse to answer questions from the audience",
                "Never mention what company you work for"
              ],
              answer: 0,
              explanation: "High-value educational talks establish credibility and make the audience naturally seek out your product afterward."
            }
          ],
          application: "Write a compelling, non-salesy talk title and 3 key takeaways for an upcoming industry conference."
        },
        {
          id: "channel_community",
          title: "Channel 19: Community Building",
          principle: "Foster an active, engaged ecosystem of users who interact with each other, share workflows, and champion the product.",
          underlying_concepts: ["User engagement", "Community moderation", "Advocacy", "Decentralized support"],
          learn: "Community building turns users into a movement. Wikipedia, Product Hunt, Notion, and Figma built passionate communities on Reddit, Slack, and Discord where superusers answer questions and build extensions for each other.",
          bad_example: "Creating an empty Discord server and abandoning it without facilitating conversations or adding value.",
          better_example: "Actively moderating a Slack community where members share real-world traction experiments and review each other's funnels.",
          questions: [
            {
              type: "mcq",
              question: "What differentiates a thriving product community from a passive audience?",
              options: [
                "Members actively interact with and help each other around shared goals, rather than just listening to the company",
                "The company never participates in the community",
                "Communities require everyone to buy shares in the company",
                "Communities have zero moderation"
              ],
              answer: 0,
              explanation: "Thriving communities feature peer-to-peer engagement where users support each other and co-create value."
            }
          ],
          application: "Define the core shared mission that would motivate your users to gather and participate in an online community."
        }
      ]
    },
    {
      id: "experiment_design",
      category: "4. Running Growth Experiments",
      concepts: [
        {
          id: "hypothesis",
          title: "Create a Testable Hypothesis",
          principle: "State your target audience, channel, expected conversion rate, budget, and timeframe before spending any money.",
          underlying_concepts: [
            "Falsifiable hypotheses",
            "Target audience definition",
            "Clear success criteria",
            "Experiment rigor"
          ],
          learn: "A vague test ('let's try Facebook ads and see what happens') yields vague, useless results. A scientific hypothesis specifies: 'We believe targeting early-stage founders on LinkedIn will generate signups at under $15 each with a $200 budget.'",
          bad_example: "Spending $500 on ads with no written goal, wondering a week later if the campaign was successful.",
          better_example: "Writing: 'If we sponsor Newsletter X for $200, we will acquire at least 25 activated users (CAC ≤ $8) within 5 days.'",
          questions: [
            {
              type: "mcq",
              question: "What makes a growth experiment hypothesis scientifically testable?",
              options: [
                "It specifies an audience, channel, budget, numeric outcome metric, and strict timeframe",
                "It is completely open-ended and has no deadline",
                "It guarantees 100% success before launching",
                "It avoids measuring any numbers"
              ],
              answer: 0,
              explanation: "A rigorous hypothesis defines concrete conditions, budgets, metrics, and timelines so success or failure is unambiguous."
            }
          ],
          application: "Write one falsifiable traction hypothesis for your top candidate channel."
        },
        {
          id: "small_tests",
          title: "Test Small Before Scaling",
          principle: "Use inexpensive, rapid micro-tests to answer basic questions about channel viability before allocating substantial resources.",
          underlying_concepts: [
            "Capital efficiency",
            "Stop conditions",
            "Fast feedback loops",
            "Risk minimization"
          ],
          learn: "Do not invest thousands of dollars into a channel until small tests prove positive economics. Spend $100 to $250 to answer: How much do clicks cost? Do they convert on the landing page? Do they actually activate?",
          bad_example: "Signing a 12-month $60,000 agency retainer before testing whether the channel converts for your audience.",
          better_example: "Running a 5-day $150 self-serve test to measure conversion rates and cost per activated lead first.",
          questions: [
            {
              type: "mcq",
              question: "Why should early traction tests have strict spending caps?",
              options: [
                "To prevent wasted capital on channels that have poor audience fit or broken economics",
                "Because spending money on marketing is always wrong",
                "Because platforms ban startups that spend over $500",
                "To avoid getting any customers"
              ],
              answer: 0,
              explanation: "Strict spending caps protect runway while allowing you to gather valid behavioral conversion signal."
            }
          ],
          application: "Set a hard budget cap ($100–$250) and a 5-day stop condition for your next channel experiment."
        },
        {
          id: "funnel",
          title: "Measure the Entire Funnel",
          principle: "Track every step of the user journey: from initial discovery, click, and visit to signup, activation, and retention.",
          underlying_concepts: [
            "Funnel bottlenecks",
            "Activation milestone",
            "Conversion drop-off",
            "End-to-end attribution"
          ],
          learn: "A channel that drives cheap clicks can be a total disaster if none of those clicks convert into activated users. Track your funnel end-to-end to see exactly where prospects drop out.",
          bad_example: "Celebrating 10,000 ad clicks that produced zero signups and zero revenue.",
          better_example: "Measuring 500 impressions ➔ 50 clicks (10%) ➔ 15 signups (30%) ➔ 6 activated users (40%) to calculate true unit economics.",
          questions: [
            {
              type: "mcq",
              question: "Why is measuring cost per click (CPC) insufficient when evaluating a traction channel?",
              options: [
                "Clicks are too expensive to count",
                "Cheap clicks mean nothing if visitors immediately bounce and never activate or retain",
                "Click data is hidden by search engines",
                "All clicks automatically convert into customers"
              ],
              answer: 1,
              explanation: "Channel economics depend on downstream activation and retention, not upfront surface clicks."
            }
          ],
          application: "Map out your conversion funnel stages (Impression, Visit, Signup, Activation, Retention) and record conversion rates."
        },
        {
          id: "learning",
          title: "Extract Learnings from Weak Results",
          principle: "Distinguish between poor execution of a channel and a fundamentally invalid channel for your business.",
          underlying_concepts: [
            "Execution vs strategy",
            "Channel post-mortems",
            "Iterative learning",
            "Objective diagnosis"
          ],
          learn: "If an ad test fails, did the channel fail, or was your copy confusing and your landing page slow? Run a post-mortem: examine the qualitative comments, bounce rates, and copy before permanently abandoning a promising channel.",
          bad_example: "Running one badly written ad for 4 hours, getting zero sales, and declaring 'Social ads never work for any B2B company.'",
          better_example: "Analyzing heatmaps on the landing page, discovering mobile formatting was broken, fixing it, and re-running the test.",
          questions: [
            {
              type: "mcq",
              question: "What is the key question to ask when an initial channel experiment produces weak results?",
              options: [
                "Should we give up on the startup entirely?",
                "Was the failure caused by poor execution (copy, page, creative) or is the channel fundamentally misaligned with our buyers?",
                "Can we blame our customers for not understanding?",
                "How can we hide the results from our team?"
              ],
              answer: 1,
              explanation: "Isolating whether the flaw was tactical execution or strategic channel mismatch prevents discarding viable channels prematurely."
            }
          ],
          application: "Write a 3-bullet retrospective on your last marketing test: What happened? Why? What will you adjust?"
        }
      ]
    },
    {
      id: "channel_economics",
      category: "5. Growth Quality and Economics",
      concepts: [
        {
          id: "acquisition_cost",
          title: "Cost Per Activated User (CPA)",
          principle: "Calculate acquisition cost by dividing total channel spend by the number of users who reach meaningful product activation.",
          underlying_concepts: [
            "Customer Acquisition Cost (CAC)",
            "Activation event",
            "Unit economics",
            "Financial sustainability"
          ],
          learn: "Total spend divided by raw signups gives Cost Per Lead; total spend divided by users who experience your core value gives Cost Per Activated User. If you spend $500 on ads and get 25 signups, but only 5 complete a lesson, your true CPA is $100, not $20.",
          bad_example: "Calculating CAC using vanity app downloads and ignoring that 90% of downloads never opened the app.",
          better_example: "Dividing $300 ad spend by 15 users who mastered at least 3 mental models, arriving at a real $20 Cost Per Activated User.",
          questions: [
            {
              type: "mcq",
              question: "You spend $600 on an ad campaign. 60 people register, but only 20 complete your onboarding milestone. What is your Cost Per Activated User?",
              options: [
                "$10",
                "$30",
                "$60",
                "$600"
              ],
              answer: 1,
              explanation: "$600 total spend divided by 20 activated users equals $30 per activated user."
            }
          ],
          application: "Calculate your Cost Per Activated User for your most active acquisition channel."
        },
        {
          id: "retention",
          title: "Evaluate Channel Retention Quality",
          principle: "A channel that delivers users who retain and build long-term habits is exponentially more valuable than one delivering fleeting visitors.",
          underlying_concepts: [
            "Cohort retention",
            "Long-term value (LTV)",
            "Churn by channel",
            "Quality of acquisition"
          ],
          learn: "Not all traffic is created equal. Users acquired via organic SEO guides often retain far longer than users acquired through flashy TikTok giveaways. Always measure Day-30 retention segmented by acquisition channel.",
          bad_example: "Pouring budget into a channel that generates thousands of signups with 99% churn after 3 days.",
          better_example: "Doubling down on a podcast sponsorship that generates fewer signups but boasts 45% 30-day retention.",
          questions: [
            {
              type: "mcq",
              question: "Why must retention be evaluated alongside customer acquisition cost?",
              options: [
                "Because acquisition cost does not matter if users stay",
                "Because a channel with cheap signups is useless if those users immediately churn and generate zero value",
                "Because retention numbers never change",
                "Because retention is only measured in year 10"
              ],
              answer: 1,
              explanation: "Acquisition without retention is pouring water into a leaky bucket; long-term value requires durable retention."
            }
          ],
          application: "Track Day-7 or Day-30 retention rates segmented across your different traffic sources."
        },
        {
          id: "scalability",
          title: "Evaluate Channel Scalability",
          principle: "Determine whether a channel can scale 10x or 100x before acquisition costs rise or the target audience becomes exhausted.",
          underlying_concepts: [
            "Channel saturation",
            "Diminishing returns",
            "Audience ceiling",
            "Scale economics"
          ],
          learn: "Every channel eventually hits diminishing returns. A niche podcast sponsorship works wonders once, but running it weekly exhausts the audience. Always evaluate a channel's ceiling and prepare your next Bullseye ring before the current channel saturates.",
          bad_example: "Assuming that because you acquired 10 customers via direct founder outreach, you can acquire 100,000 customers the exact same way.",
          better_example: "Riding cold email to $10k MRR, while building SEO and content marketing in parallel to take the company from $10k to $100k MRR.",
          questions: [
            {
              type: "mcq",
              question: "What happens when a traction channel begins to saturate?",
              options: [
                "Cost per acquisition rises, conversion rates decrease, and incremental growth slows down",
                "Customer acquisition becomes 100% free",
                "The platform shuts down permanently",
                "All competitors go out of business"
              ],
              answer: 0,
              explanation: "Channel saturation causes diminishing returns, higher acquisition costs, and audience fatigue."
            }
          ],
          application: "Estimate the maximum addressable audience size of your current best channel and forecast when saturation will occur."
        }
      ]
    }
  ],
  final_challenge: {
    title: "Design a 14-Day Traction Experiment",
    objective: "Use the Bullseye Framework and the 19 Traction Channels to plan, execute, and evaluate a structured user acquisition experiment.",
    steps: [
      {
        id: 1,
        task: "Define Specific Target Persona",
        deliverable: "Describe your ideal early adopter: their exact role, daily friction, and where they hang out online."
      },
      {
        id: 2,
        task: "Brainstorm Across All 19 Channels",
        deliverable: "Review the 19-channel list and select a shortlist of 5 plausible candidate channels."
      },
      {
        id: 3,
        task: "Select Your Bullseye Winner",
        deliverable: "Apply the Bullseye filter (Audience, Cost, Speed, Scale) to choose the single inner-ring channel to test first."
      },
      {
        id: 4,
        task: "Formulate a Scientific Hypothesis",
        deliverable: "Write a falsifiable hypothesis specifying audience, creative hook, expected conversion, and numeric threshold."
      },
      {
        id: 5,
        task: "Set Budget Cap and Time Limit",
        deliverable: "Define a strict spending cap ($50 to $250) and a 7-to-14 day stop condition to prevent capital waste."
      },
      {
        id: 6,
        task: "Map End-to-End Funnel Metrics",
        deliverable: "Define metrics for each stage: Impressions, Clicks, Signups, Activations, and Day-7 Returns."
      },
      {
        id: 7,
        task: "Document Retrospective Decision",
        deliverable: "Specify exact numerical criteria for deciding whether to Double Down, Iterate Execution, or Pivot to the next channel."
      }
    ],
    user_questions: [
      {
        id: "tc1",
        prompt: "What is your specific target audience and their core problem?",
        input_type: "text",
        required: true
      },
      {
        id: "tc2",
        prompt: "List your top 5 candidate channels from the 19 Traction Channels.",
        input_type: "text",
        required: true
      },
      {
        id: "tc3",
        prompt: "Which single channel sits in the center of your Bullseye to test first, and why?",
        input_type: "text",
        required: true
      },
      {
        id: "tc4",
        prompt: "What is your measurable, falsifiable experiment hypothesis?",
        input_type: "text",
        required: true
      },
      {
        id: "tc5",
        prompt: "What is your budget spending cap and experiment duration?",
        input_type: "text",
        required: true
      },
      {
        id: "tc6",
        prompt: "How will you track the funnel from first click to meaningful activation and retention?",
        input_type: "text",
        required: true
      },
      {
        id: "tc7",
        prompt: "What numeric result threshold determines whether you scale this channel or pivot to the next candidate?",
        input_type: "text",
        required: true
      }
    ],
    completion_criteria: [
      "The user defines a specific target audience persona",
      "The user evaluates candidates from the 19 Traction Channels",
      "The user selects a single inner-ring channel using Bullseye prioritization",
      "The user formulates a scientific, falsifiable hypothesis",
      "The user establishes a strict spending cap and duration limit",
      "The user measures downstream activation rather than surface vanity metrics",
      "The user defines clear thresholds for scaling, iterating, or discarding the channel"
    ]
  }
};

// Helper: Convert Traction book into standard BoringBros Idea[] objects
export function getTractionIdeas() {
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

  for (const module of TRACTION_BOOK.learning_path) {
    for (const concept of module.concepts) {
      const q = concept.questions[0];
      const ex = concept.bad_example && concept.better_example
        ? `❌ Avoid: "${concept.bad_example}"\n✅ Practice: "${concept.better_example}"`
        : concept.better_example || concept.principle;

      ideas.push({
        id: `trac-${concept.id.replace(/_/g, '-')}`,
        s: "Startups",
        t: concept.title,
        b: "Traction",
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
