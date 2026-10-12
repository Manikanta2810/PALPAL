import { getMomTestIdeas } from './momTestBook';
import { getPositioningIdeas } from './positioningBook';
import { getStealLikeAnArtistIdeas } from './stealLikeAnArtistBook';
import { getHookedIdeas } from './hookedBook';
import { getTractionIdeas } from './tractionBook';
import { getColdStartIdeas } from './coldStartBook';

export interface Idea {
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
}

const RAW_IDEAS: Idea[] = [
  {
    "id": "monty",
    "s": "Counterintuitive",
    "t": "The Monty Hall problem",
    "b": "Classic probability puzzle",
    "d": "You pick one of three doors: one hides a car, two hide goats. The host, who knows where the car is, always opens a different door showing a goat, then offers a switch. Switching wins two times out of three, because your first pick was right only one time in three.",
    "e": "Imagine 100 doors. You pick one, and the host opens 98 goat doors. Would you stay with your 1-in-100 pick or switch to the last closed door?",
    "q": "You pick door 1. The host, who knows what is behind each door, opens door 3 to reveal a goat. What should you do?",
    "o": [
      "Stay, it is now 50-50",
      "Switch, it wins two times out of three",
      "Switch, it wins every time",
      "It makes no difference"
    ],
    "k": 1,
    "x": "Your first pick had a 1/3 chance. The remaining 2/3 now sits on the one other closed door."
  },
  {
    "id": "bday",
    "s": "Counterintuitive",
    "t": "The birthday paradox",
    "b": "Classic probability puzzle",
    "d": "In a group of just 23 people, the chance that two share a birthday is about 50%. It feels too low because we think of matching our own birthday, but 23 people form 253 different pairs to check.",
    "e": "With 70 people in a room, the chance of a shared birthday is above 99%.",
    "q": "About how likely is a shared birthday in a room of 23 people?",
    "o": [
      "About 6%",
      "About 50%",
      "About 90%",
      "Exactly 23 in 365"
    ],
    "k": 1,
    "x": "The number of pairs grows fast, so matches become likely much earlier than intuition expects."
  },
  {
    "id": "wald",
    "s": "Counterintuitive",
    "t": "Survivorship bias",
    "b": "Abraham Wald, World War II",
    "d": "We study what survived and forget what did not. In World War II, statistician Abraham Wald examined planes that returned with bullet holes and argued the armor belonged where returned planes had few holes, because planes hit there never came back.",
    "e": "Advice from successful founders can mislead the same way: you never hear from the many who tried the same things and failed.",
    "q": "Returning bombers show most bullet holes on the wings and tail, and few on the engines. Where should extra armor go?",
    "o": [
      "Where the holes are most common",
      "Where returning planes have few holes",
      "Everywhere equally",
      "Nowhere, they all returned safely"
    ],
    "k": 1,
    "x": "Planes hit in the engines likely never returned. The holes you see are the survivable ones."
  },
  {
    "id": "base",
    "s": "Counterintuitive",
    "t": "The base rate fallacy",
    "b": "Bayes theorem",
    "d": "A test that is 99% accurate can still be wrong most of the time when the thing it looks for is rare. You must combine the test result with how common the condition is.",
    "e": "A disease affects 1 in 1,000 people. A test catches 99% of cases and wrongly flags 1% of healthy people. Test 1,000 people: about 1 sick person tests positive, and about 10 healthy people also do.",
    "q": "Using those numbers, you test positive. About how likely are you to have the disease?",
    "o": [
      "99%",
      "50%",
      "About 9%",
      "1 in 1,000"
    ],
    "k": 2,
    "x": "About 1 true positive against about 10 false positives gives roughly 9%."
  },
  {
    "id": "reg",
    "s": "Counterintuitive",
    "t": "Regression to the mean",
    "b": "Thinking, Fast and Slow",
    "d": "Extreme results are partly luck, and luck does not repeat. After an unusually good or bad result, the next one tends to be closer to average even if nothing changed.",
    "e": "A flight instructor praised a great landing and the next one was worse, scolded a bad landing and the next was better. He concluded scolding works. Both changes were regression to the mean.",
    "q": "A student scores far above their usual level on one test. What is the most likely next score?",
    "o": [
      "Even higher",
      "Closer to their usual level",
      "Exactly the same",
      "Far below their usual level"
    ],
    "k": 1,
    "x": "Part of the high score was luck, so the next result drifts back toward their average."
  },
  {
    "id": "simp",
    "s": "Counterintuitive",
    "t": "Simpson's paradox",
    "b": "Statistics classic",
    "d": "A trend can appear in every group and reverse when the groups are combined. It happens when group sizes are uneven and a hidden factor mixes the groups.",
    "e": "In a real kidney-stone study, treatment A beat B for small stones (93% vs 87%) and large stones (73% vs 69%), yet B looked better overall (83% vs 78%), because A was used on far more of the hard, large-stone cases.",
    "q": "A beats B in every subgroup, but B looks better overall. What is the likely cause?",
    "o": [
      "The data must be wrong",
      "A was used on more of the harder cases",
      "B is secretly better",
      "Averages cannot be trusted"
    ],
    "k": 1,
    "x": "The groups differ in difficulty and size, which skews the combined rate."
  },
  {
    "id": "gam",
    "s": "Counterintuitive",
    "t": "The gambler's fallacy",
    "b": "Probability",
    "d": "Independent events have no memory. A fair coin that landed heads five times is still 50-50 on the next flip. Streaks feel like they must correct themselves, but nothing is owed.",
    "e": "A roulette wheel landing on red ten times does not make black more likely on the next spin.",
    "q": "A fair coin lands heads 5 times in a row. What is the chance of heads on the next flip?",
    "o": [
      "Less than 50%",
      "Exactly 50%",
      "More than 50%",
      "It depends on the coin history"
    ],
    "k": 1,
    "x": "Each flip is independent, so the past does not change the next one."
  },
  {
    "id": "anch",
    "s": "Mind",
    "t": "Anchoring",
    "b": "Thinking, Fast and Slow",
    "d": "The first number you hear pulls your estimate toward it, even when it is irrelevant. In a famous experiment, people who saw a high random number from a spinning wheel gave higher estimates of unrelated facts than those who saw a low one.",
    "e": "A shop shows a crossed-out price of $200 next to $120. The $200 anchors you to feel $120 is a bargain.",
    "q": "Why do negotiators often make the first offer?",
    "o": [
      "It shows weakness",
      "It sets an anchor that pulls the final price toward it",
      "It is the polite thing to do",
      "The first offer is always accepted"
    ],
    "k": 1,
    "x": "The first number frames the discussion and drags later numbers its way."
  },
  {
    "id": "r72",
    "s": "Money",
    "t": "The Rule of 72",
    "b": "Basic finance",
    "d": "Divide 72 by the annual return in percent to estimate how many years it takes money to double. It is a quick shortcut for compounding that works well at typical rates.",
    "e": "At 8% a year, money doubles in about 9 years (72 / 8).",
    "q": "At about 6% a year, roughly how long does money take to double?",
    "o": [
      "6 years",
      "12 years",
      "18 years",
      "36 years"
    ],
    "k": 1,
    "x": "72 / 6 = 12 years."
  },
  {
    "id": "mrr",
    "s": "Startups",
    "t": "MRR",
    "b": "Lean Analytics",
    "d": "Monthly Recurring Revenue is the predictable subscription revenue a company earns each month. Investors watch it because it shows steady income, not one-off sales.",
    "e": "100 customers paying $50 a month is $5,000 MRR.",
    "q": "A startup has 200 customers paying $30 a month. What is its MRR?",
    "o": [
      "$600",
      "$6,000",
      "$72,000",
      "$30,000"
    ],
    "k": 1,
    "x": "200 x $30 = $6,000 per month."
  },
  {
    "id": "arr",
    "s": "Startups",
    "t": "ARR",
    "b": "Lean Analytics",
    "d": "Annual Recurring Revenue is MRR multiplied by 12. It is the headline size number for subscription startups and the base for many valuations.",
    "e": "$10,000 MRR means $120,000 ARR.",
    "q": "A startup has $25,000 MRR. What is its ARR?",
    "o": [
      "$25,000",
      "$150,000",
      "$300,000",
      "$3,000,000"
    ],
    "k": 2,
    "x": "$25,000 x 12 = $300,000."
  },
  {
    "id": "churn",
    "s": "Startups",
    "t": "Churn rate",
    "b": "Lean Analytics",
    "d": "Churn is the share of customers, or revenue, lost in a period. High churn is a leaky bucket: new sales just refill what you lose.",
    "e": "Start the month with 200 customers, lose 10, and monthly churn is 5%.",
    "q": "You start with 400 customers and lose 20 in a month. What is churn?",
    "o": [
      "2%",
      "5%",
      "20%",
      "10%"
    ],
    "k": 1,
    "x": "20 / 400 = 5%."
  },
  {
    "id": "cac",
    "s": "Startups",
    "t": "Customer acquisition cost (CAC)",
    "b": "Lean Analytics",
    "d": "CAC is what you spend on sales and marketing to win one new customer: total acquisition spend divided by customers gained in the same period.",
    "e": "Spend $10,000 and win 50 customers: CAC is $200.",
    "q": "You spend $30,000 on marketing and win 100 customers. CAC?",
    "o": [
      "$30",
      "$300",
      "$3,000",
      "$130"
    ],
    "k": 1,
    "x": "$30,000 / 100 = $300."
  },
  {
    "id": "ltv",
    "s": "Startups",
    "t": "Lifetime value (LTV)",
    "b": "Lean Analytics",
    "d": "LTV is the total revenue, ideally gross profit, a customer brings before leaving. A common rule of thumb is LTV of at least three times CAC.",
    "e": "A customer pays $50 a month and stays 20 months: LTV is $1,000.",
    "q": "A customer pays $40 a month and stays 25 months. LTV in revenue?",
    "o": [
      "$1,000",
      "$100",
      "$65",
      "$10,000"
    ],
    "k": 0,
    "x": "$40 x 25 = $1,000."
  },
  {
    "id": "burn",
    "s": "Startups",
    "t": "Burn rate and runway",
    "b": "Lean Analytics",
    "d": "Burn rate is the cash a startup loses each month. Runway is how long it lasts: cash in the bank divided by monthly burn. Fundraising should start well before runway ends.",
    "e": "$600,000 in the bank and $50,000 monthly burn gives 12 months of runway.",
    "q": "You have $900,000 and burn $75,000 a month. Runway?",
    "o": [
      "9 months",
      "12 months",
      "15 months",
      "75 months"
    ],
    "k": 1,
    "x": "900,000 / 75,000 = 12 months."
  },
  {
    "id": "gm",
    "s": "Startups",
    "t": "Gross margin",
    "b": "Lean Analytics",
    "d": "Gross margin is revenue minus the direct cost of delivering the product, as a share of revenue. Software aims high because each extra customer costs little to serve.",
    "e": "Revenue $100, direct costs $30: gross margin is 70%.",
    "q": "Revenue is $200 and direct costs are $50. Gross margin?",
    "o": [
      "25%",
      "50%",
      "75%",
      "150%"
    ],
    "k": 2,
    "x": "(200 - 50) / 200 = 75%."
  },
  {
    "id": "val",
    "s": "Startups",
    "t": "Pre-money and post-money valuation",
    "b": "Venture Deals",
    "d": "Pre-money is what the company is worth before new investment. Post-money is pre-money plus the money invested. An investor owns their investment divided by post-money.",
    "e": "$8M pre-money plus $2M invested is $10M post-money, so the investor owns 20%.",
    "q": "Pre-money is $4M and an investor puts in $1M. What does the investor own?",
    "o": [
      "10%",
      "20%",
      "25%",
      "33%"
    ],
    "k": 1,
    "x": "Post-money is $5M, and $1M / $5M = 20%."
  },
  {
    "id": "vm",
    "s": "Startups",
    "t": "How startups are valued",
    "b": "Venture Deals",
    "d": "Early on there is no single formula. Common approaches: revenue multiples (ARR times a multiple based on growth and market), comparable deals, and the VC method (expected exit value divided by the return investors want). The final price is negotiated.",
    "e": "$2M ARR at a 10x multiple suggests a $20M valuation.",
    "q": "ARR is $3M and similar startups sell at 8x ARR. Implied valuation?",
    "o": [
      "$11M",
      "$24M",
      "$38M",
      "$3M"
    ],
    "k": 1,
    "x": "$3M x 8 = $24M."
  },
  {
    "id": "dil",
    "s": "Startups",
    "t": "Dilution and the cap table",
    "b": "Venture Deals",
    "d": "The cap table lists who owns what. When new shares are issued, existing owners keep their shares but hold a smaller percentage. That is dilution, and it is normal if the company grows.",
    "e": "You own 50%. A new investor takes 20% of the company, so you own 40%.",
    "q": "You own 60%. New investors take 25% through new shares. Your stake now?",
    "o": [
      "35%",
      "45%",
      "55%",
      "60%"
    ],
    "k": 1,
    "x": "60% x 0.75 = 45%."
  },
  {
    "id": "safe",
    "s": "Startups",
    "t": "SAFE",
    "b": "Venture Deals",
    "d": "A SAFE (Simple Agreement for Future Equity) lets an investor give cash now and get shares later, at the next priced round. It usually has a valuation cap or a discount that rewards early backers.",
    "e": "A SAFE with a $5M cap converts as if the company were worth at most $5M, even if the next round values it higher.",
    "q": "What does the valuation cap on a SAFE do?",
    "o": [
      "Limits how much the company can raise",
      "Sets the maximum valuation used when it converts",
      "Fixes the founder salary",
      "Sets the exit price"
    ],
    "k": 1,
    "x": "It caps the price per share the investor pays when converting."
  },
  {
    "id": "term",
    "s": "Startups",
    "t": "Term sheet",
    "b": "Venture Deals",
    "d": "A term sheet outlines the main terms of an investment: valuation, amount, board seats and investor rights. It is mostly non-binding, but it sets the deal lawyers then write up.",
    "e": "Valuation, liquidation preference and board seats are agreed here before final documents.",
    "q": "What is true of a typical term sheet?",
    "o": [
      "It is a fully binding contract",
      "It outlines key terms and is mostly non-binding",
      "It only lists the founders",
      "It replaces the cap table"
    ],
    "k": 1,
    "x": "It sets the outline. Most terms are non-binding until final documents are signed."
  },
  {
    "id": "lp",
    "s": "Startups",
    "t": "Liquidation preference",
    "b": "Venture Deals",
    "d": "It decides who gets paid first when the company is sold. A 1x preference lets investors take their money back before common shareholders see anything. It matters most in a low-priced sale.",
    "e": "Investors put in $2M with a 1x preference. The company sells for $1.5M, and investors take all $1.5M.",
    "q": "Investors put in $3M with a 1x preference. The company sells for $2M. Who is paid first?",
    "o": [
      "Founders",
      "Investors, up to the $2M available",
      "Employees equally",
      "Nobody"
    ],
    "k": 1,
    "x": "Preferred investors are paid before common holders."
  },
  {
    "id": "mvp",
    "s": "Startups",
    "t": "MVP",
    "b": "The Lean Startup",
    "d": "A Minimum Viable Product is the smallest version of a product that lets you learn whether customers want it. It tests an idea, not impresses. Learning beats polish.",
    "e": "Before building an app, a founder sells the service by hand to ten customers.",
    "q": "What is the main purpose of an MVP?",
    "o": [
      "To launch a perfect product",
      "To learn what customers want with minimal effort",
      "To impress investors with design",
      "To cut costs permanently"
    ],
    "k": 1,
    "x": "An MVP exists to test assumptions quickly."
  },
  {
    "id": "pmf",
    "s": "Startups",
    "t": "Product-market fit",
    "b": "The Lean Startup",
    "d": "Product-market fit means the product meets real demand: customers keep using it and tell others. Signs are strong retention, organic referrals, and users who would be upset if it vanished.",
    "e": "A survey where many users say they would be very disappointed without the product is a common test.",
    "q": "Which is the strongest sign of product-market fit?",
    "o": [
      "A big launch day",
      "Customers keep using it and refer others",
      "A beautiful website",
      "Many press mentions"
    ],
    "k": 1,
    "x": "Retention and organic demand show real pull, not just attention."
  },
  {
    "id": "mom-rule",
    "s": "Startups",
    "t": "The Mom Test rule",
    "b": "The Mom Test",
    "d": "Never ask anyone if your business idea is good—especially your mom, because people will lie to be nice. Instead, ask exclusively about their past behavior, current workflows, and specific problems they already encountered.",
    "e": "Instead of asking 'Would you use an app that syncs recipe ingredients?', ask 'When was the last time you cooked from a recipe, and how did you buy the ingredients?'",
    "q": "Which question best follows The Mom Test for customer discovery?",
    "o": [
      "Would you buy a tool that automates cold emails?",
      "How much would you pay for an AI design assistant?",
      "How did you solve this problem the last time it happened?",
      "Do you think our proposed dashboard looks intuitive?"
    ],
    "k": 2,
    "x": "The Mom Test requires asking about past specific actions and facts, never hypothetical future promises or opinions."
  },
  {
    "id": "mom-commit",
    "s": "Startups",
    "t": "Compliments vs commitments",
    "b": "The Mom Test",
    "d": "Compliments from prospects ('That sounds awesome, keep me posted!') are polite lies that cause startup death. Real validation requires skin in the game: a commitment of cash, an intro to a decision-maker, or non-refundable time.",
    "e": "At the end of a pitch, a customer saying 'Let's schedule a 60-minute technical review with my VP of Security on Friday' is real commitment. Saying 'Looks great!' is worth $0.",
    "q": "A founder finishes showing a prototype. Which customer reaction represents genuine validation?",
    "o": [
      "'This is such an innovative idea, I love the UI!'",
      "'Put down a $500 deposit and let's start a pilot next week.'",
      "'Send me an email when you launch v1.0.'",
      "'My colleagues would definitely be interested in this.'"
    ],
    "k": 1,
    "x": "Commitment means staking cash, reputation, or scarce time. Words and compliments are free."
  },
  {
    "id": "chasm-gap",
    "s": "Startups",
    "t": "The Technology Adoption Chasm",
    "b": "Crossing the Chasm",
    "d": "There is a perilous abyss between early visionaries (who buy unproven tech to get a radical edge) and the early majority (pragmatists who only buy proven standards backed by industry peers). Startups perish by pitching vision to pragmatists.",
    "e": "Crypto geeks try experimental protocols on day one. Mainstream corporate CFOs refuse to touch anything until established competitors endorse it.",
    "q": "Why do pragmatists (the early majority) hesitate to buy from early-stage startups?",
    "o": [
      "They lack the budget to purchase new software",
      "They only buy products with established reference customers in their industry",
      "They prefer building custom tools in-house",
      "They are looking for higher risk technology"
    ],
    "k": 1,
    "x": "Pragmatists look for peer references and market consensus, not visionary promises."
  },
  {
    "id": "beachhead",
    "s": "Startups",
    "t": "The Beachhead market",
    "b": "Crossing the Chasm",
    "d": "To cross the chasm, focus your scarce resources like a laser on conquering one tiny, contiguous niche market where you can quickly become the undeniable #1 standard, before invading neighboring markets.",
    "e": "Amazon started by selling exclusively books, dominating online book sales before expanding to CDs, electronics, and general retail.",
    "q": "What is the primary goal of a beachhead market strategy?",
    "o": [
      "To test fifty different verticals simultaneously",
      "To capture 80%+ dominance of one small, specific niche before expanding",
      "To raise venture capital as quickly as possible",
      "To lower customer acquisition cost across all industries"
    ],
    "k": 1,
    "x": "Dominating one narrow niche builds the references and word-of-mouth needed to break into broader markets."
  },
  {
    "id": "zto-secrets",
    "s": "Startups",
    "t": "Contrarian truth (Secrets)",
    "b": "Zero to One",
    "d": "The most valuable companies are built on an important truth that almost nobody agrees with. If your premise is already accepted by consensus, you enter a crowded market destined for commodity margins.",
    "e": "Uber saw a secret: private car owners would gladly drive strangers around in their personal vehicles for extra income.",
    "q": "What makes a business idea a strong 'contrarian secret'?",
    "o": [
      "It is popular, widely accepted, and easy to copy",
      "It is an important truth that very few people believe or see yet",
      "It requires no technology and has no competitors",
      "It is guaranteed to be approved by all investors on day one"
    ],
    "k": 1,
    "x": "Breakthrough value comes from uncovering non-obvious truths that consensus overlooks."
  },
  {
    "id": "zto-monopoly",
    "s": "Startups",
    "t": "Monopoly vs competition",
    "b": "Zero to One",
    "d": "Under perfect competition, all business profits are competed away to zero. Creative monopolies—firms offering a proprietary advantage that no substitute can replicate—capture virtually all industry value.",
    "e": "The US airline industry generates hundreds of billions in revenue but virtually zero cumulative economic profit due to intense price wars; Google captures massive profits because search has no real substitute.",
    "q": "Why does Peter Thiel argue that startups must strive to be creative monopolies?",
    "o": [
      "Because competition destroys profit margins and prevents long-term innovation",
      "Because monopolies are easier to advertise on television",
      "Because investors dislike proprietary software",
      "Because monopolies pay fewer taxes"
    ],
    "k": 0,
    "x": "Perfect competition drives margins to near zero, while unique monopolies generate the cash flow needed to innovate."
  },
  {
    "id": "pos-alt",
    "s": "Startups",
    "t": "Competitive alternatives",
    "b": "Obviously Awesome",
    "d": "Your true competitor is almost never another shiny startup. It is whatever the customer would do if your product did not exist—typically an existing spreadsheet, pen and paper, hiring an intern, or simply living with the pain.",
    "e": "A new project management app rarely loses deals to Asana; it loses to a shared Google Sheet that everyone already knows how to use.",
    "q": "What is typically the most dangerous 'competitive alternative' facing a B2B startup?",
    "o": [
      "A competitor that raised $100M in venture funding",
      "Doing nothing, manual Excel spreadsheets, or workarounds",
      "Free open-source tools on GitHub",
      "A sudden decrease in cloud server costs"
    ],
    "k": 1,
    "x": "Status quo inertia (Excel, manual hacks, or doing nothing) is what defeats most startups."
  },
  {
    "id": "pos-value",
    "s": "Startups",
    "t": "Value-led positioning",
    "b": "Obviously Awesome",
    "d": "Positioning is the context you provide so prospects immediately grasp why your product matters. Great positioning bridges your unique feature directly to the business value it creates for a target customer.",
    "e": "Instead of calling yourself 'A vector database', position as 'An enterprise compliance search tool that prevents GDPR violations for European fintechs'.",
    "q": "Which statement represents effective product positioning?",
    "o": [
      "'We are an AI-powered SaaS platform for teams.'",
      "'We cut payroll compliance audit times from 2 weeks to 2 hours for hospital networks.'",
      "'We are the fastest web tool on the internet.'",
      "'Our product has over 40 distinct features.'"
    ],
    "k": 1,
    "x": "Clear positioning states the exact target buyer, the specific capability, and the measurable business outcome."
  },
  {
    "id": "jtbd-job",
    "s": "Startups",
    "t": "Jobs to be Done (JTBD)",
    "b": "Competing Against Luck",
    "d": "People do not buy products; they 'hire' them to make progress in a specific struggling moment. Demographic attributes like age and income do not cause purchases; the job they need done does.",
    "e": "Commuters did not hire morning milkshakes because they loved dairy; they hired a thick milkshake because it fit the cup holder and made a boring 45-minute drive engaging while keeping hunger away until lunch.",
    "q": "What is the core premise of the Jobs to be Done framework?",
    "o": [
      "Customers buy products because of their demographic profile",
      "Customers hire products to make progress in a specific struggling situation",
      "Lowering prices always increases market demand",
      "Startups should always copy feature sets from market leaders"
    ],
    "k": 1,
    "x": "JTBD shows that functional, emotional, and social progress in a context drives buying decisions."
  },
  {
    "id": "jtbd-forces",
    "s": "Startups",
    "t": "The Four Forces of progress",
    "b": "Demand-Side Sales 101",
    "d": "Every purchase decision balances four forces: Push of current pain + Pull of the new solution (moving forward) versus Habit of current behavior + Anxiety of switching (holding back). You only win when forward forces outweigh backward drag.",
    "e": "Even if your analytics tool is 5x faster, a team won't buy if their anxiety of retraining staff and migrating SQL dashboards exceeds their frustration with the current tool.",
    "q": "A customer agrees your software is superior, but still decides not to buy. What force is likely holding them back?",
    "o": [
      "The Pull of your product",
      "The Push of their current frustration",
      "The Habit of their current process and Anxiety of the switch",
      "A lack of internet connection"
    ],
    "k": 2,
    "x": "Inertia from ingrained habits and fear of switching costs often paralyze buyers even when a better solution exists."
  },
  {
    "id": "cold-atomic",
    "s": "Startups",
    "t": "The Atomic Network",
    "b": "The Cold Start Problem",
    "d": "The atomic network is the smallest possible network that can stand entirely on its own, delivering sufficient density and liquidity to provide real value to its members without relying on global scale.",
    "e": "Zoom's atomic network was just 2 people having a video call. Slack's atomic network was a single 4-person design team. Tinder's was a single sorority party at USC.",
    "q": "What is an 'atomic network' in network-effects startups?",
    "o": [
      "A worldwide network with over one million active users",
      "The smallest viable cluster that can function and create self-sustaining value",
      "A network run entirely on microservices architecture",
      "A network funded by angel investors rather than VCs"
    ],
    "k": 1,
    "x": "Startups must win tight atomic units with high density before trying to scale everywhere."
  },
  {
    "id": "cold-hard",
    "s": "Startups",
    "t": "The Hard Side of the network",
    "b": "The Cold Start Problem",
    "d": "In any marketplace, one side produces most of the value and is ten times harder to acquire. Catering to and locking down this 'hard side' is what creates defensibility, because the easy side follows automatically.",
    "e": "On Uber, acquiring drivers is the hard side (riders join instantly if cars are nearby). On Airbnb, recruiting unique homeowners is the hard side.",
    "q": "Why do successful marketplaces obsess over acquiring the 'hard side' first?",
    "o": [
      "Because the hard side pays higher subscription fees",
      "Because supply quality and density is what attracts and retains the demand side",
      "Because the hard side requires less customer support",
      "Because venture capital term sheets mandate it"
    ],
    "k": 1,
    "x": "If you solve the hard side (quality supply or creators), the consumer demand side follows naturally."
  },
  {
    "id": "ceo-topgoal",
    "s": "Startups",
    "t": "The One Metric That Matters",
    "b": "The Great CEO Within",
    "d": "Early startups die from doing too many things at once. Leadership must define one single measurable company goal (OMTM). Every project or feature proposed must directly move that metric, or be rejected.",
    "e": "Airbnb focused solely on 'Nights Booked'. Any initiative that did not directly increase booked nights was deprioritized during their growth phase.",
    "q": "What is the primary benefit of having One Metric That Matters (OMTM)?",
    "o": [
      "It makes quarterly board decks shorter",
      "It prevents division and aligns all daily company priorities around a single focal point",
      "It eliminates the need to track revenue",
      "It guarantees profitability in year one"
    ],
    "k": 1,
    "x": "A single North Star metric provides clear focus and stops teams from scattering effort across low-impact initiatives."
  },
  {
    "id": "pg-dontscale",
    "s": "Startups",
    "t": "Do things that don't scale",
    "b": "Hackers & Painters",
    "d": "Startups fail because founders wait for users to show up through automatic marketing. In the early days, you must do things manually: hand-recruit users, onboard them in person, and handle customer service yourself.",
    "e": "Stripe's Collison brothers didn't email sign-up links; when a founder said they'd try Stripe, Patrick said 'Give me your laptop' and integrated the API right in front of them.",
    "q": "What did Paul Graham advise founders to do when acquiring their very first users?",
    "o": [
      "Spend heavily on programmatic Google Ads",
      "Wait for organic search traffic to build up",
      "Recruit users manually by hand through direct personal hustle",
      "Hire an external PR agency to launch on TechCrunch"
    ],
    "k": 2,
    "x": "Manual, unscalable hustle is the only reliable way to get the critical first 100 passionate users."
  },
  {
    "id": "hook-model",
    "s": "Startups",
    "t": "The Hook cycle",
    "b": "Hooked",
    "d": "Products create unprompted user habits by cycling through four steps: Trigger (external prompt transitioning to internal emotion), Action (behavior done in anticipation of reward), Variable Reward (unpredictable feedback), and Investment (work done that improves next cycle).",
    "e": "Boredom strikes (internal trigger) -> Open Instagram (action) -> See unpredictable new posts and stories (variable reward) -> Post a photo or comment (investment).",
    "q": "Why is 'variable reward' a critical step in the Hook model?",
    "o": [
      "It saves server bandwidth by delaying responses",
      "Unpredictable outcomes stimulate dopamine and create habitual engagement",
      "It allows companies to charge variable pricing",
      "It replaces the need for user onboarding"
    ],
    "k": 1,
    "x": "Unpredictability (like a slot machine or notifications feed) hooks attention far more than predictable rewards."
  },
  {
    "id": "hard-wartime",
    "s": "Startups",
    "t": "Peacetime vs Wartime CEO",
    "b": "The Hard Thing About Hard Things",
    "d": "A Peacetime CEO manages during market expansion and emphasizes culture, consensus, and delegation. A Wartime CEO operates when the company faces imminent death, requiring strict command-and-control, immediate execution, and zero tolerance for deviation.",
    "e": "When Intel was getting wiped out in memory chips by Japanese conglomerates, Andy Grove acted as a Wartime CEO: cut the core business, fired unaligned staff, and pivoted 100% of the firm to microprocessors.",
    "q": "When is a 'Wartime CEO' management style necessary?",
    "o": [
      "When the company is dominating a mature market with abundant cash",
      "When the company faces an existential threat to its survival or market collapse",
      "When hiring summer interns",
      "When designing a new logo"
    ],
    "k": 1,
    "x": "Wartime leadership is required when existential survival is on the line and decisive speed beats consensus."
  },
  {
    "id": "founder-mode",
    "s": "Startups",
    "t": "Founder Mode vs Manager Mode",
    "b": "Brian Chesky & Paul Graham (2024)",
    "d": "Conventional business school advice ('hire good managers and let them do their job') breaks startups as they scale. Founder Mode means staying directly in the product details, skipping layers of middle management, and maintaining an uncompromising, single company-wide vision.",
    "e": "Brian Chesky fired traditional divisional PMs at Airbnb, centralized the roadmap, and personally reviewed every detail of every major feature twice a year, driving record profitability.",
    "q": "What is the core distinction of 'Founder Mode' compared to 'Manager Mode'?",
    "o": [
      "Delegating completely to professional executives and never checking the work",
      "Staying directly engaged in critical product details and cutting through management bureaucracy",
      "Hiring only MBA graduates to manage all engineering pods",
      "Stopping all product updates and focusing purely on finance"
    ],
    "k": 1,
    "x": "Founder Mode rejects hands-off delegation; it emphasizes calibrated presence and direct involvement in what matters most."
  },
  {
    "id": "jensen-pain",
    "s": "Startups",
    "t": "Low expectations and pain tolerance",
    "b": "Jensen Huang, NVIDIA (2024)",
    "d": "Being excessively smart with sky-high expectations makes founders brittle. True entrepreneurial greatness comes from character, and character is forged out of enduring suffering, resilience, and maintaining the stamina to overcome brutal setbacks.",
    "e": "Jensen Huang told Stanford graduates: 'I wish upon all of you ample doses of pain and suffering, because character is not formed out of smart people—it is formed out of people who suffered.'",
    "q": "Why does Jensen Huang view high expectations as a potential disadvantage for entrepreneurs?",
    "o": [
      "Because high expectations require more venture capital",
      "Because high expectations often lead to low resilience when inevitable setbacks strike",
      "Because customers prefer low quality products",
      "Because software engineering requires low math skills"
    ],
    "k": 1,
    "x": "High expectations make founders fragile when things go wrong; resilience and high pain tolerance keep you alive."
  },
  {
    "id": "altman-agency",
    "s": "Startups",
    "t": "High agency",
    "b": "Sam Altman, OpenAI (2023)",
    "d": "High agency is the relentless refusal to accept the world as fixed. When told an objective is impossible or restricted by rules, a high-agency founder does not stop; they find backdoors, create new paths, and bend reality until it happens.",
    "e": "When OpenAI needed unprecedented compute clusters that did not exist on the market, Altman did not wait for AWS—he negotiated directly with Microsoft to co-finance dedicated supercomputing infrastructure.",
    "q": "How does a 'high agency' founder respond when encountering a bureaucratic barrier?",
    "o": [
      "They accept the constraint and abandon the project",
      "They complain on social media and wait for regulation to change",
      "They treat the barrier as a negotiable variable and find a way through or around it",
      "They hire a consultant to write a report"
    ],
    "k": 2,
    "x": "High-agency people treat the world as malleable rather than a fixed set of obstacles."
  },
  {
    "id": "garry-postzirp",
    "s": "Startups",
    "t": "Post-ZIRP Default Alive",
    "b": "Garry Tan, Y Combinator (2023)",
    "d": "With zero interest rates (ZIRP) gone, burning cash to buy unprofitable growth is financial suicide. Startups must be 'Default Alive': on track to reach breakeven with their current bank balance before runway runs out.",
    "e": "A company burning $300k a month with $1.5M in the bank and flat revenue is Default Dead in 5 months. A company with $50k MRR and $45k burn is Default Alive forever.",
    "q": "What does it mean for a startup to be 'Default Alive'?",
    "o": [
      "It has raised a Series A term sheet",
      "Its current revenue growth and burn rate trajectory will reach profitability before running out of cash",
      "It has hired at least twenty employees",
      "It has a five-year marketing plan"
    ],
    "k": 1,
    "x": "Default Alive means you do not rely on the generosity of future investors to survive."
  },
  {
    "id": "rauch-ship",
    "s": "Startups",
    "t": "Ship to learn",
    "b": "Guillermo Rauch, Vercel (2024)",
    "d": "The fastest feedback loop always wins in software. Spending weeks debating in internal meetings or perfecting Figma mockups is wasted motion. Ship a rough v0 to production in days and let real user usage guide your roadmap.",
    "e": "Vercel shipped the initial version of v0.dev within weeks; actual developer prompts revealed user pain points that internal planning committees never anticipated.",
    "q": "What is the primary thesis behind 'Ship to learn'?",
    "o": [
      "Users prefer buggy software over polished software",
      "Real production feedback from live users is infinitely more accurate than internal theorizing",
      "Software testing is unnecessary in production",
      "Marketing campaigns should always precede engineering"
    ],
    "k": 1,
    "x": "Production contact with real users surfaces truth faster than any internal meeting or simulation."
  },
  {
    "id": "stripe-speed",
    "s": "Startups",
    "t": "Speed as a habit",
    "b": "Patrick Collison, Stripe",
    "d": "Slowness in an organization is almost never due to rigorous diligence; it is cultural drift and bureaucratic decay. Speed is a muscle. Making decisions in hours rather than weeks creates momentum, which is the oxygen of any startup.",
    "e": "When acquiring early customers, Stripe founders didn't say 'We will send you integration docs next Tuesday.' They grabbed the customer's laptop and integrated Stripe right there in 15 minutes.",
    "q": "Why is decision-making speed critical for an early-stage startup?",
    "o": [
      "It allows founders to make more mistakes without noticing",
      "Most decisions are reversible two-way doors, and rapid momentum compounds learning",
      "Investors only fund startups that work 80 hours a week",
      "It reduces server hosting costs"
    ],
    "k": 1,
    "x": "Speed compounds advantages and keeps teams from getting trapped in analysis paralysis."
  },
  {
    "id": "pg-100lovers",
    "s": "Startups",
    "t": "100 lovers vs a million likers",
    "b": "Paul Graham, Y Combinator",
    "d": "It is vastly better to make something that 100 people love deeply than something that a million people merely kinda like. 100 passionate lovers will forgive early bugs, provide intense feedback, and organically recruit your next 10,000 users.",
    "e": "Early Airbnb had just a few dozen hosts who loved the platform so much they invited the founders into their homes for dinner; that fanatic core built the foundation for a global network.",
    "q": "Why is it better for an early startup to have 100 passionate fans than 1,000,000 casual visitors?",
    "o": [
      "It makes customer support easier to automate",
      "Passionate users generate organic word-of-mouth, high retention, and clear product feedback",
      "It allows you to skip building a mobile app",
      "100 users cannot crash a server database"
    ],
    "k": 1,
    "x": "A small group of fanatical users creates the gravitational pull that ignites exponential organic growth."
  },
  {
    "id": "bezos-doors",
    "s": "Startups",
    "t": "Type 1 vs Type 2 decisions",
    "b": "Jeff Bezos, Amazon",
    "d": "Type 1 decisions are irreversible one-way doors (selling the company, taking venture debt). Type 2 decisions are two-way doors that can easily be walked back (pricing test, layout tweak). Startups die when they treat Type 2 decisions with Type 1 caution.",
    "e": "Do not schedule a 10-person committee meeting to debate a button color or onboarding step; change it in production, measure the metrics, and reverse it if conversion drops.",
    "q": "What mistake do slow organizations typically make regarding Type 1 and Type 2 decisions?",
    "o": [
      "They reverse one-way doors too quickly",
      "They treat reversible Type 2 decisions as irreversible Type 1 decisions, paralyzing momentum",
      "They refuse to hire legal counsel for contracts",
      "They make all decisions using customer surveys"
    ],
    "k": 1,
    "x": "Treating reversible decisions like existential one-way doors leads to paralysis and slowness."
  },
  {
    "id": "jobs-focus",
    "s": "Startups",
    "t": "Focus is saying no",
    "b": "Steve Jobs, Apple",
    "d": "People think focus means picking a great idea. In reality, focus means saying NO to 100 other brilliant, tempting ideas so you can pour 100% of your scarce energy into the single one that genuinely matters.",
    "e": "When Steve Jobs returned to Apple in 1997, he killed dozens of beloved projects (including Newton) to focus the entire company on just four personal computers in a 2x2 grid.",
    "q": "According to Steve Jobs, what is the hardest part of true focus?",
    "o": [
      "Saying yes to the obvious priorities",
      "Saying no to dozens of genuinely good ideas that distract from the core mission",
      "Finding talented graphic designers",
      "Writing daily product documentation"
    ],
    "k": 1,
    "x": "True focus requires painful discipline: killing good opportunities to protect the extraordinary one."
  },
  {
    "id": "naval-leverage",
    "s": "Startups",
    "t": "Permissionless leverage",
    "b": "Naval Ravikant, AngelList",
    "d": "Historical leverage required permission: managing employees (labor) or convincing bankers (capital). The modern superpower is permissionless leverage: code and media. You can write software once, and it works for millions of people 24/7 with zero marginal cost.",
    "e": "A solo developer can build an AI wrapper or SaaS utility that earns $50k/month while they sleep, without hiring a single employee or taking external capital.",
    "q": "What makes code and media 'permissionless' leverage?",
    "o": [
      "They are exempt from all commercial laws and taxes",
      "You don't need anyone's permission or capital to write code, deploy software, or publish content",
      "They do not require internet access to operate",
      "They can only be created by venture-backed startups"
    ],
    "k": 1,
    "x": "Anyone with a computer can deploy software or content that scales indefinitely without asking for permission."
  },
  {
    "id": "pmf-market",
    "s": "Startups",
    "t": "The market is the boss",
    "b": "Marc Andreessen, a16z",
    "d": "When a great team meets a lousy market, the market wins. When a lousy team meets a great market, the market wins. When a great team meets a great market, history is made. You cannot out-execute a market that fundamentally doesn't want what you're selling.",
    "e": "A world-class engineering team building an enterprise social network for fax machines will fail, while an average team building developer tools for booming AI inference will get pulled into hypergrowth.",
    "q": "Why does Marc Andreessen identify the 'market' as the most decisive factor in startup success?",
    "o": [
      "Because markets determine who becomes the CEO",
      "Because a desperate market pulls product out of a startup, while an indifferent market kills even great execution",
      "Because marketing departments have the largest budgets",
      "Because venture capitalists only invest in markets with government subsidies"
    ],
    "k": 1,
    "x": "In a booming market with intense customer pull, the market forgives flaws; in a dead market, brilliance cannot save you."
  },
  {
    "id": "bezos-day1",
    "s": "Startups",
    "t": "Day 1 mentality",
    "b": "Jeff Bezos, Amazon",
    "d": "Day 1 companies are customer-obsessed, embrace external trends, and make high-velocity decisions. Day 2 companies are process-obsessed, defensive, and risk-averse. Day 2 is stasis, followed by irrelevance, followed by agonizing decline and death. Always protect Day 1.",
    "e": "Day 1 thinking led Amazon to invent AWS and Prime—ideas that cannibalized existing businesses and bewildered Wall Street, but solved massive underlying customer pain.",
    "q": "What is the inevitable trajectory of a company that slips into 'Day 2' mentality?",
    "o": [
      "It becomes permanently profitable with zero risk",
      "Stasis, followed by irrelevance, followed by agonizing decline and death",
      "It gets acquired by the government",
      "Its stock price multiplies tenfold"
    ],
    "k": 1,
    "x": "Day 2 represents bureaucratic complacency; without Day 1 urgency, companies inevitably decay."
  },
  {
    "id": "loss",
    "s": "Mind",
    "t": "Loss aversion",
    "b": "Thinking, Fast and Slow",
    "d": "Losing something hurts more than gaining the same thing feels good. Studies are often summed up as losses weighing roughly twice as much as equal gains. It quietly steers choices: holding a bad investment, refusing a fair trade, staying in a plan because quitting feels like a loss.",
    "e": "You get a free mug and love it. Offered a fair price, you want more to sell it than you would have paid to buy it.",
    "q": "Why do people hold a losing stock too long?",
    "o": [
      "They believe in the company",
      "Selling makes the loss feel real",
      "They forgot they own it",
      "Brokers advise against selling"
    ],
    "k": 1,
    "x": "Selling turns a paper loss into a real one, and loss aversion makes that feel worse than the same money never gained."
  },
  {
    "id": "deep",
    "s": "Work",
    "t": "Deep work",
    "b": "Deep Work",
    "d": "Deep work is focused effort without distraction that stretches your abilities. It produces better results in less time than scattered attention, and it is rare enough to be valuable. Protect blocks of time for it.",
    "e": "Phone in another room, notifications off, one 90-minute block on a single hard task.",
    "q": "Which of these is deep work?",
    "o": [
      "Checking email in short bursts",
      "Two hours writing with notifications off",
      "Attending a status meeting",
      "Scrolling while a task is open"
    ],
    "k": 1,
    "x": "Deep work needs sustained, undistracted focus on one demanding task."
  },
  {
    "id": "loop",
    "s": "Habits",
    "t": "The habit loop",
    "b": "The Power of Habit",
    "d": "A habit runs in three parts: a cue, a routine and a reward. The cue starts the routine and the reward teaches your brain to repeat it. To change a habit, keep the cue and reward, and swap the routine.",
    "e": "Stress at 3pm (cue), a biscuit (routine), a break (reward). Swap in a short walk and you keep the break.",
    "q": "In the habit loop, what triggers the routine?",
    "o": [
      "The reward",
      "The cue",
      "Willpower",
      "The craving for change"
    ],
    "k": 1,
    "x": "The cue is the trigger. The routine follows it, and the reward reinforces it."
  },
  {
    "id": "two",
    "s": "Habits",
    "t": "Two-minute rule",
    "b": "Atomic Habits",
    "d": "Make a new habit start in under two minutes. The point is to show up, not to finish. Once you start, continuing is far easier than beginning.",
    "e": "Read 30 pages becomes read one page. Run three miles becomes put on your running shoes.",
    "q": "What is the best two-minute version of \"write a book\"?",
    "o": [
      "Write a chapter",
      "Write one sentence",
      "Plan the whole outline",
      "Quit social media"
    ],
    "k": 1,
    "x": "It should be tiny enough to start right now. One sentence gets you moving."
  },
  {
    "id": "onepct",
    "s": "Habits",
    "t": "Get 1% better every day",
    "b": "Atomic Habits",
    "d": "Tiny gains compound. Improving 1% daily leaves you about 37 times better after a year, while 1% worse daily decays to nearly zero. Habits are the compound interest of self-improvement.",
    "e": "Read 10 pages a night and you finish 10+ books a year without ever feeling busy.",
    "q": "If you get 1% better every day for a year, where do you end up?",
    "o": [
      "About 37 times better",
      "About twice as good",
      "About 12% better",
      "No real change"
    ],
    "k": 0,
    "x": "1.01 to the power of 365 is about 37. Small wins compound like money."
  },
  {
    "id": "systems",
    "s": "Habits",
    "t": "Forget goals, focus on systems",
    "b": "Atomic Habits",
    "d": "Winners and losers share the same goals — goals only set direction. Systems are the processes that lead to results. Fix the inputs and the outcomes fix themselves.",
    "e": "Instead of obsessing over losing 10 kilos, build the system: cook at home four nights a week and walk daily.",
    "q": "Why do goals alone fail, according to Clear?",
    "o": [
      "Goals are always too small",
      "Winners and losers share the same goals — systems decide",
      "Goals only work in January",
      "Systems are slower than goals"
    ],
    "k": 1,
    "x": "Everyone wants to win. What differs is the system behind the goal."
  },
  {
    "id": "identity",
    "s": "Habits",
    "t": "Every action is a vote",
    "b": "Atomic Habits",
    "d": "Real behavior change is identity change. Each small habit casts a vote for the person you believe you are — no single workout transforms you, but each one votes for being a healthy person.",
    "e": "Instead of saying I am trying to quit smoking, say I am not a smoker. The identity decides the action.",
    "q": "What makes a habit stick at the deepest level?",
    "o": [
      "Tying it to the identity you want",
      "Doing it once perfectly",
      "Big rewards",
      "Telling everyone about it"
    ],
    "k": 0,
    "x": "When the habit confirms who you are, you stop negotiating with yourself."
  },
  {
    "id": "fourlaws",
    "s": "Habits",
    "t": "The four laws of behavior change",
    "b": "Atomic Habits",
    "d": "Every habit runs cue, craving, response, reward. Clear turns them into four laws: make it obvious, make it attractive, make it easy, make it satisfying. Invert all four to break a bad habit.",
    "e": "To stop late-night snacking, make it invisible (no chips on the counter), unattractive, hard (do not buy them), and unsatisfying.",
    "q": "A habit starts with a cue. Which law handles the cue?",
    "o": [
      "Make it satisfying",
      "Make it obvious",
      "Make it easy",
      "Make it attractive"
    ],
    "k": 1,
    "x": "Obvious cues get noticed. Invisible cues never trigger the habit."
  },
  {
    "id": "stacking",
    "s": "Habits",
    "t": "Habit stacking",
    "b": "Atomic Habits",
    "d": "Link a new habit to one you already do: after [current habit], I will [new habit]. The old habit becomes the cue, so the new one slots into an existing routine instead of floating in your day.",
    "e": "After I pour my morning coffee, I will write three lines in my journal.",
    "q": "Which is a proper habit stack?",
    "o": [
      "After I pour morning coffee, I will meditate one minute",
      "I will meditate more someday",
      "I will try to remember meditation",
      "Meditation is good for me"
    ],
    "k": 0,
    "x": "The formula needs a specific current habit plus a specific new behavior."
  },
  {
    "id": "intent",
    "s": "Habits",
    "t": "Implementation intention",
    "b": "Atomic Habits",
    "d": "Vague plans fail. State exactly when and where: I will [behavior] at [time] in [location]. People who write this sentence are far more likely to follow through.",
    "e": "I will read one page at 9pm in bed — not I will read more.",
    "q": "Which plan follows implementation intention?",
    "o": [
      "I will exercise more",
      "I will walk 10 minutes at 7am around the park",
      "Exercise matters to me",
      "I will buy running shoes"
    ],
    "k": 1,
    "x": "Behavior plus time plus location turns intention into a trigger."
  },
  {
    "id": "env",
    "s": "Habits",
    "t": "Environment beats motivation",
    "b": "Atomic Habits",
    "d": "Disciplined people are not stronger — their surroundings demand less willpower. Design your space so good cues are obvious and bad cues are invisible.",
    "e": "Want to read more? Leave a book on your pillow. Want less phone time? Charge it outside the bedroom.",
    "q": "You keep grabbing your phone at night. Best fix?",
    "o": [
      "Try harder with willpower",
      "Charge the phone outside the bedroom",
      "Set bigger reading goals",
      "Buy a second phone"
    ],
    "k": 1,
    "x": "Removing the cue beats resisting it every single night."
  },
  {
    "id": "friction",
    "s": "Habits",
    "t": "Reduce friction",
    "b": "Atomic Habits",
    "d": "Make good habits the path of least resistance: prime your environment in advance. Every bit of friction removed makes the habit more likely when motivation is low.",
    "e": "Lay out workout clothes the night before and the morning run starts itself.",
    "q": "What best primes a morning run?",
    "o": [
      "Shoes and clothes laid out the night before",
      "Promising yourself a marathon",
      "Waiting to feel motivated",
      "Reading about runners"
    ],
    "k": 0,
    "x": "Preparation tonight removes decisions tomorrow morning."
  },
  {
    "id": "bundle",
    "s": "Habits",
    "t": "Temptation bundling",
    "b": "Atomic Habits",
    "d": "Pair something you want to do with something you need to do. The craving for the fun thing pulls the boring habit along with it.",
    "e": "Only listen to your favorite podcast while walking — the show becomes the reward for moving.",
    "q": "Which is temptation bundling?",
    "o": [
      "Favorite podcast only while exercising",
      "Quitting podcasts to focus",
      "Exercising twice as hard",
      "Buying premium gym gear"
    ],
    "k": 0,
    "x": "Linking want and should makes the should feel like a treat."
  },
  {
    "id": "twice",
    "s": "Habits",
    "t": "Never miss twice",
    "b": "Atomic Habits",
    "d": "Missing once is an accident; missing twice starts a new habit. The rule is simple: get back on track immediately. Protect the streak, not perfection.",
    "e": "Miss the Monday workout? Fine. Tuesday is non-negotiable.",
    "q": "You miss one day of your habit. What now?",
    "o": [
      "Quit, the streak is ruined",
      "Resume immediately — never miss twice",
      "Punish yourself with double tomorrow",
      "Restart next month"
    ],
    "k": 1,
    "x": "One miss is noise. Two misses is the start of quitting."
  },
  {
    "id": "bore",
    "s": "Habits",
    "t": "Fall in love with boredom",
    "b": "Atomic Habits",
    "d": "Mastery is showing up after novelty fades. Professionals stick to the schedule; amateurs quit when results stall. Boredom is the price of greatness.",
    "e": "The writer writes daily whether inspired or not — the schedule, not the mood, decides.",
    "q": "What separates pros from amateurs, per Clear?",
    "o": [
      "Natural talent",
      "Pros keep the schedule even when bored",
      "Better equipment",
      "More spare time"
    ],
    "k": 1,
    "x": "Anyone can work hard when motivated. Pros work when bored."
  },
  {
    "id": "goldi",
    "s": "Habits",
    "t": "The Goldilocks rule",
    "b": "Atomic Habits",
    "d": "Humans feel most motivated on tasks right at the edge of ability — not too easy, not impossible. Stay in that zone and focus locks in.",
    "e": "Video games nail this: each level is just slightly harder than your current skill.",
    "q": "When is motivation highest?",
    "o": [
      "The task is far too easy",
      "The task is just-manageable difficult",
      "The task is impossible",
      "The task changes randomly"
    ],
    "k": 1,
    "x": "Just-manageable difficulty keeps you engaged without overwhelm."
  },
  {
    "id": "inv",
    "s": "Strategy",
    "t": "Inversion",
    "b": "Poor Charlie's Almanack",
    "d": "Solve problems backwards. Instead of asking how to succeed, ask what would guarantee failure, then avoid exactly that. It exposes risks that forward thinking misses.",
    "e": "Instead of how to build a great team, list what would wreck a team and rule those out.",
    "q": "Which question is an inversion of \"How do I get fit?\"",
    "o": [
      "What exercise is best?",
      "What would make me unfit, and how do I avoid it?",
      "How fast can I get fit?",
      "Who should I train with?"
    ],
    "k": 1,
    "x": "Inversion flips the goal into its opposite and works backwards from it."
  },
  {
    "id": "mos",
    "s": "Money",
    "t": "Margin of safety",
    "b": "The Intelligent Investor",
    "d": "Pay well below what you think something is worth, so errors in your estimate do not hurt you. The bigger the gap, the more room for being wrong.",
    "e": "If you value a business at 100, buying at 60 protects you far more than buying at 95.",
    "q": "You estimate a stock is worth 100. Which price gives the largest margin of safety?",
    "o": [
      "110",
      "100",
      "90",
      "60"
    ],
    "k": 3,
    "x": "The lower the price against your estimated value, the larger the cushion."
  },
  {
    "id": "sec",
    "s": "Strategy",
    "t": "Second-order thinking",
    "b": "The Great Mental Models",
    "d": "First-order thinking looks at the direct result. Second-order thinking asks: and then what? It follows consequences of consequences, which is where most surprises live.",
    "e": "Cutting prices brings customers today. Then rivals cut too, and everyone earns less.",
    "q": "A shop cuts prices. Which is a second-order effect?",
    "o": [
      "More customers walk in",
      "Sales rise that day",
      "Competitors cut prices in response",
      "The sign is repainted"
    ],
    "k": 2,
    "x": "It is a consequence of the first effect, not the first effect itself."
  },
  {
    "id": "par",
    "s": "Work",
    "t": "Pareto principle",
    "b": "The 80/20 Principle",
    "d": "A small share of causes often drives most of the results. The exact numbers vary, but the imbalance is common. Find the vital few and give them your best attention.",
    "e": "A handful of customers bring most of the revenue, and a few tasks create most of the progress.",
    "q": "About 20% of your customers bring 80% of revenue. What fits the principle?",
    "o": [
      "Treat all customers identically",
      "Protect and serve that 20% first",
      "Drop the other 80%",
      "Ignore revenue data"
    ],
    "k": 1,
    "x": "Focus goes where the impact is concentrated, without throwing the rest away."
  },
  {
    "id": "eis",
    "s": "Work",
    "t": "Eisenhower matrix",
    "b": "The 7 Habits of Highly Effective People",
    "d": "Sort tasks by urgent and important. Urgent and important: do now. Important but not urgent: schedule. Urgent but not important: delegate. Neither: drop. Most progress lives in important but not urgent.",
    "e": "Planning next quarter is important but not urgent, so it gets a slot on the calendar.",
    "q": "A task is important but not urgent. What do you do?",
    "o": [
      "Do it immediately",
      "Schedule it",
      "Delegate it",
      "Delete it"
    ],
    "k": 1,
    "x": "Important but not urgent work is protected by scheduling it before it becomes urgent."
  }
];

export const IDEAS: Idea[] = [
  ...RAW_IDEAS,
  ...getMomTestIdeas().filter(m => !RAW_IDEAS.some(r => r.id === m.id)),
  ...getPositioningIdeas().filter(p => !RAW_IDEAS.some(r => r.id === p.id)),
  ...getStealLikeAnArtistIdeas().filter(s => !RAW_IDEAS.some(r => r.id === s.id)),
  ...getHookedIdeas().filter(h => !RAW_IDEAS.some(r => r.id === h.id)),
  ...getTractionIdeas().filter(t => !RAW_IDEAS.some(r => r.id === t.id)),
  ...getColdStartIdeas().filter(c => !RAW_IDEAS.some(r => r.id === c.id))
];

export const CL: Record<string, [string, string]> = {
  Counterintuitive: ["#1B1BC8", "#F3F0E8"],
  Startups: ["#FF4B1F", "#0B0B0C"],
  Money: ["#0F5C3B", "#F3F0E8"],
  Mind: ["#5B1A58", "#F3F0E8"],
  Habits: ["#FFC21E", "#0B0B0C"],
  Work: ["#151517", "#FCAC04"],
  Strategy: ["#0B5E75", "#F3F0E8"]
};

export const SHELVES = Object.keys(CL);

export const SHELF_DESCRIPTIONS: Record<string, string> = {
  Counterintuitive: 'Facts that feel wrong. Probability puzzles that rewire gut instinct.',
  Startups: 'MRR, CAC, dilution, SAFEs — the terms founders actually use.',
  Money: 'Compounding, margins, safety. The quiet math of money.',
  Mind: 'Anchoring, loss, bias. How your brain tricks you daily.',
  Habits: 'Cues, routines, 2-minute starts. Small loops, big change.',
  Work: 'Deep work, Pareto, Eisenhower. Attention is the asset.',
  Strategy: 'Inversion, second-order thinking. See one move ahead.'
};
