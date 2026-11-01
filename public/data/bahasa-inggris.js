/* LMS Bahasa Inggris Kelas X — Fase E — SMA Negeri 1 Kota Ternate
   8 unit (2 semester) · klaster: Climate Alert, Digital Realm, Health Quest, Global Dreams */
(function(){
"use strict";
const UNITS = [];
/* ===== SEMESTER 1 ===== */
UNITS.push({
  n: 1, el: 2, sem: 1, emoji: "🌍",
  title: "Climate Alert: Our Changing Planet (Report Text)",
  desc: "Read, analyse, and write a factual report about climate change — from melting ice to rising seas around Ternate.",
  tp: [
    { c: "E.2.1", t: "Identify the general classification, descriptions, and main facts in a report text about climate change.", e: "Highlight the opening classification and three supporting facts in an article about rising sea levels." },
    { c: "E.2.2", t: "Evaluate the credibility of climate information by checking the source, data, and date.", e: "Compare a news report and a social-media post about heatwaves and decide which one is more reliable — with reasons." },
    { c: "E.3.1", t: "Write a short report text (3 paragraphs) using present tense, technical terms, and factual language.", e: "Write 'Plastic Waste on Our Coast' with a general statement, two description paragraphs, and accurate data." }
  ],
  focus: [
    ["Purpose", "To present facts about things in general (phenomena, animals, places) — objective, not personal."],
    ["Structure", "General classification → Descriptions (parts, qualities, behaviour, impacts)."],
    ["Simple present tense", "Facts that are generally true: 'Glaciers melt faster when temperatures rise.'"],
    ["Technical vocabulary", "greenhouse gas, emission, carbon dioxide, drought, sea level, deforestation"],
    ["Passive voice", "Focus on the process: 'Carbon dioxide is released when fuel is burned.'"],
    ["Credible sources", "Check author, institution (BMKG, NASA, WHO), data, and publication date."]
  ],
  model: "Climate change is [[a long-term change in global temperature and weather patterns]] (general classification). It is mainly caused by [[greenhouse gases such as carbon dioxide and methane]], which [[trap heat]] in the atmosphere.\n\nOne impact is rising sea levels. As polar ice [[melts]], ocean water [[expands]] and coastal areas — including small islands in North Maluku — [[are threatened by flooding]]. Another impact is extreme weather: heatwaves and heavy rain [[occur more often]].\n\nNotice the language: [[simple present tense]] for facts, [[technical terms]] (greenhouse gas, emission), and [[passive voice]] when the process matters more than the actor.",
  diag: [
    { q: "Which sentence is a FACT?", o: ["I think the weather is terrible.", "The Earth's average temperature has risen about 1.1°C since 1900.", "Climate change is the scariest thing ever.", "We should all feel sad."], a: 1, w: "A fact can be checked with data; the others are opinions or feelings." },
    { q: "'Greenhouse gas' means …", o: ["gas used in a garden", "gas that traps heat in the atmosphere", "gas from a volcano only", "oxygen"], a: 1, w: "Greenhouse gases (CO₂, methane) trap heat, like the glass of a greenhouse." },
    { q: "Which tense is used to state general facts?", o: ["Simple past", "Simple present", "Future continuous", "Past perfect"], a: 1, w: "General truths use simple present: 'Ice melts at 0°C.'" },
    { q: "Which source is most reliable for weather data in Indonesia?", o: ["A random TikTok video", "BMKG official website", "An anonymous WhatsApp chain", "A comic book"], a: 1, w: "BMKG is the official meteorology agency — a credible institution." },
    { q: "The word 'drought' is closest in meaning to …", o: ["a long period without rain", "a strong wind", "a big flood", "an earthquake"], a: 0, w: "Drought = long dry period → water shortage." }
  ],
  form: [
    { q: "A report text begins with a …", o: ["orientation", "general classification", "thesis and arguments", "list of materials"], a: 1, w: "Report: general classification → descriptions." },
    { q: "'Sea levels ___ because ice sheets are melting.' (fact)", o: ["rose", "are rising", "will rose", "rising"], a: 1, w: "A process happening now (and generally true) → present tense." },
    { q: "Choose the passive sentence.", o: ["Factories release smoke.", "Smoke is released by factories.", "Factories are releasing smoke.", "Smoke releases factories."], a: 1, w: "Passive = be + V3: is released." },
    { q: "What is the main function of the 'descriptions' part?", o: ["To tell a personal story", "To give details: parts, qualities, impacts", "To persuade readers to buy", "To close with a moral"], a: 1, w: "Descriptions give factual details about the topic." },
    { q: "Which word is a technical term about climate?", o: ["beautiful", "emission", "happy", "yesterday"], a: 1, w: "Emission = release of gas into the air." },
    { q: "A post says 'Ternate will sink next year!!!' with no source. The best response is to …", o: ["share it quickly", "check BMKG or a scientific source first", "believe it because it has many likes", "add more exclamation marks"], a: 1, w: "Evaluate credibility: no source + exaggeration = doubtful." },
    { q: "'Deforestation' means …", o: ["planting new trees", "cutting down forests on a large scale", "a type of rain", "a forest festival"], a: 1, w: "De- (remove) + forest → removing forests." },
    { q: "Which sentence is objective?", o: ["Rubbish on our beach is disgusting!", "About 70% of the rubbish found on the beach was plastic.", "I hate plastic.", "Our beach is the worst."], a: 1, w: "Objective = factual and measurable, no feelings." }
  ],
  quiz: [
    { q: "Read: 'Coral reefs are underwater ecosystems built by tiny animals called polyps.' This sentence is the …", o: ["general classification", "conclusion", "complication", "recommendation"], a: 0, w: "It classifies what coral reefs are → general classification." },
    { q: "'When ocean water gets warmer, corals ___ white.' (general fact)", o: ["turned", "turn", "are turn", "will turned"], a: 1, w: "General fact → simple present: turn." },
    { q: "Which is NOT a feature of a report text?", o: ["Technical terms", "Simple present tense", "Personal feelings ('I feel…')", "Factual information"], a: 2, w: "Reports avoid personal feelings — they are objective." },
    { q: "'Methane ___ by cows and rice fields.' Choose the correct passive.", o: ["produces", "is produced", "producing", "has produce"], a: 1, w: "Passive present: is + V3 (produced)." },
    { q: "Which detail BEST supports the claim 'Heatwaves are becoming more frequent'?", o: ["My friend felt hot yesterday.", "Records show five of the hottest years occurred after 2015.", "Summer is my favourite season.", "Hot weather makes people angry."], a: 1, w: "Data-based evidence supports a factual claim." },
    { q: "The best title for a report text is …", o: ["My Scary Day at the Beach", "Mangrove Forests", "Why You Must Plant Trees Now!", "How to Make a Poster"], a: 1, w: "Report titles name the general topic (not a story, argument, or procedure)." }
  ],
  task: "Observe one environmental issue around your home or school (plastic waste, heat, flooding, mangroves). Collect 3 facts from a credible source (BMKG, KLHK, NASA Climate Kids) and write them in a fact table: Fact – Source – Date.\n\nThen write a 3-paragraph report text (120–150 words): general classification + two description paragraphs. Underline the technical terms and circle the passive sentences.",
  disc: "A video says climate change is 'just a natural cycle'. Another article from NASA says humans are the main cause. How do you decide which one to trust? Share your checklist.",
  meet: [
    { jp: "2 JP", topic: "Reading report texts: structure & facts", act: "Jigsaw reading of 4 short climate reports → find classification & descriptions; vocabulary wall." },
    { jp: "2 JP", topic: "Language focus: present tense, passive, technical terms + credibility check", act: "Fact or opinion sorting; source detective (compare news vs. viral post)." },
    { jp: "2 JP", topic: "Writing & presenting a mini report", act: "Write 'Our Coast, Our Climate' in pairs → gallery walk + peer feedback." }
  ],
  proj: {
    title: "Climate Fact Poster for Our School",
    steps: ["Choose one climate issue that affects North Maluku (sea level, heat, coral bleaching, waste).", "Find 3–4 facts from credible sources and note the source & date.", "Write a mini report (general classification + descriptions) of 120–150 words.", "Design an A3/digital poster with the report, a chart or picture, and a QR code to your sources.", "Present the poster in 2 minutes and answer one question from the class."],
    rub: [["Accuracy & credibility of facts", "30"], ["Report structure & language features", "30"], ["Design & clarity", "20"], ["Presentation", "20"]]
  },
  refl: ["Which fact about climate change surprised you the most? Why?", "How did you check whether a source was credible?", "Which language feature (present tense, passive, technical terms) is still difficult for you?", "What small action can your class take to respond to the issue you studied?"]
});

UNITS.push({
  n: 2, el: 1, sem: 1, emoji: "💻",
  title: "Digital Realm: Smart & Safe Online (Procedure Text)",
  desc: "Follow, give, and write clear instructions for using technology safely — passwords, privacy, and digital footprints.",
  tp: [
    { c: "E.1.1", t: "Understand spoken and written instructions and follow the steps in the correct order.", e: "Listen to a teacher's tutorial and set up a strong password following each step." },
    { c: "E.1.2", t: "Give clear oral instructions using imperatives and sequence words (first, next, then, finally).", e: "Explain to a partner how to turn on two-step verification in 6 steps." },
    { c: "E.3.2", t: "Write a procedure text with goal, materials/requirements, and steps, using imperative sentences.", e: "Write 'How to Spot a Hoax Message' with 5 clear steps and a safety tip." }
  ],
  focus: [
    ["Purpose", "To tell the reader how to do something through a series of steps."],
    ["Structure", "Goal/Aim → Materials or Requirements → Steps (in order)."],
    ["Imperatives", "Start with a base verb: Open…, Type…, Don't share…"],
    ["Sequence words", "First, Second, Next, Then, After that, Finally"],
    ["Adverbs of manner", "carefully, quickly, securely, regularly"],
    ["Digital safety vocabulary", "password, two-step verification, privacy setting, phishing, hoax, digital footprint"]
  ],
  model: "Goal: [[How to Create a Strong Password]]\nRequirements: [[a phone or laptop, a password manager (optional)]]\nSteps:\n[[First]], choose at least 12 characters. [[Next]], mix capital letters, small letters, numbers, and symbols. [[Then]], avoid your name, birthday, or '123456'. [[After that]], use a different password for each account. [[Finally]], [[turn on]] two-step verification.\n\nNotice: each step starts with an [[imperative verb]] (choose, mix, avoid, use, turn on). Negative steps use [[Don't + verb]]: 'Don't share your OTP code with anyone.'",
  diag: [
    { q: "Which sentence is an instruction?", o: ["She opens the app.", "Open the app.", "The app is open.", "Opening apps is fun."], a: 1, w: "Instructions (imperatives) start with the base verb." },
    { q: "Which word shows sequence?", o: ["because", "although", "next", "very"], a: 2, w: "Next/first/then/finally show order." },
    { q: "'Password' means …", o: ["a secret word to access an account", "a type of game", "a phone brand", "an online shop"], a: 0, w: "Password = kata sandi." },
    { q: "Which is the SAFEST action?", o: ["Share your OTP with a 'bank officer' on WhatsApp", "Click every link you receive", "Never share your OTP code", "Use '12345' as your password"], a: 2, w: "OTP codes are private — never share them." },
    { q: "A procedure text is used in …", o: ["a recipe or user manual", "a love poem", "a news story about an accident", "a biography"], a: 0, w: "Recipes and manuals give steps → procedure." }
  ],
  form: [
    { q: "The first part of a procedure text is the …", o: ["steps", "goal", "reorientation", "thesis"], a: 1, w: "Goal → materials → steps." },
    { q: "Choose the correct negative instruction.", o: ["Not share your password.", "Don't share your password.", "No sharing you password.", "You doesn't share password."], a: 1, w: "Negative imperative: Don't + base verb." },
    { q: "'___, click the settings icon. Then, choose Privacy.'", o: ["Finally", "First", "Because", "However"], a: 1, w: "The opening step uses First." },
    { q: "Which is a requirement (material) in 'How to Make a Video Call'?", o: ["Press the camera button", "A phone with internet connection", "Finally, end the call", "Be polite"], a: 1, w: "Requirements are things you need, not actions." },
    { q: "'Update your apps ___ to fix security problems.'", o: ["regularly", "regular", "regulate", "regularity"], a: 0, w: "Adverb of manner modifies the verb: update regularly." },
    { q: "'Phishing' is …", o: ["a fishing hobby", "a trick to steal your data through fake messages or links", "a photo filter", "a game level"], a: 1, w: "Phishing = penipuan untuk mencuri data lewat tautan palsu." },
    { q: "Which step should come LAST in 'How to Report a Fake Account'?", o: ["Open the fake profile.", "Tap the three-dot menu.", "Choose 'Report' and submit.", "Find the account's name."], a: 2, w: "Submitting the report finishes the process." },
    { q: "Which sentence uses an imperative correctly?", o: ["Turns on two-step verification.", "Turn on two-step verification.", "Turning on two-step verification.", "To turn on two-step verification is."], a: 1, w: "Imperative = base verb: Turn on." }
  ],
  quiz: [
    { q: "Read the steps: (1) Tap Settings (2) Choose Security (3) Turn on 2-Step Verification (4) Enter the code. What is the goal?", o: ["How to delete an account", "How to activate two-step verification", "How to buy a phone", "How to play a game"], a: 1, w: "All steps lead to activating 2-step verification." },
    { q: "'___ you enter the code, your account is protected.'", o: ["Before", "After", "Because of", "Although"], a: 1, w: "After entering the code → protection is active." },
    { q: "Which tip is MOST relevant to 'digital footprint'?", o: ["Think before you post — it may stay online forever.", "Charge your phone at night.", "Buy a bigger screen.", "Play games every day."], a: 0, w: "Digital footprint = traces of what we do online." },
    { q: "Choose the correct order: (a) Finally, press Send (b) First, write your message (c) Then, check the spelling", o: ["a–b–c", "b–c–a", "c–a–b", "b–a–c"], a: 1, w: "First (b) → Then (c) → Finally (a)." },
    { q: "Which language feature is NOT typical of procedure texts?", o: ["Imperatives", "Sequence words", "Past tense narrative ('Once upon a time…')", "Numbers or bullet points"], a: 2, w: "Past-tense storytelling belongs to narratives/recounts." },
    { q: "'Don't click links from unknown senders.' The function of this sentence is to …", o: ["entertain", "warn", "describe a place", "tell a past event"], a: 1, w: "A negative imperative often gives a warning." }
  ],
  task: "Choose one digital skill you can do well (making a strong password, checking a hoax, setting privacy on Instagram, using Google Classroom). Write a procedure text with goal, requirements, and at least 6 steps. Use sequence words and at least two negative imperatives.\n\nRecord a 1-minute screen tutorial or voice note explaining your steps clearly to a younger student.",
  disc: "Your younger cousin received a message: 'Congratulations! You won a phone. Click this link and send your OTP.' What step-by-step advice would you give? Write your steps here.",
  meet: [
    { jp: "2 JP", topic: "Listening to tutorials & following instructions", act: "Listen-and-do: follow audio steps to set privacy settings; spot sequence words." },
    { jp: "2 JP", topic: "Language focus: imperatives, sequence words, adverbs", act: "Jumbled steps race; 'Don't' warning cards about online scams." },
    { jp: "2 JP", topic: "Writing & presenting a digital safety tutorial", act: "Write a procedure text → peer test (a partner follows your steps)." }
  ],
  proj: {
    title: "Digital Safety Tutorial (Video/Infographic)",
    steps: ["Pick one safety topic: strong passwords, hoax checking, privacy settings, or reporting cyberbullying.", "Write the procedure text: goal, requirements, 6–8 steps.", "Test your steps with a classmate and fix unclear parts.", "Produce a 60–90 second video or one-page infographic.", "Share it in the class group and collect 2 comments."],
    rub: [["Clarity & order of steps", "35"], ["Imperatives & sequence words", "25"], ["Usefulness for audience", "20"], ["Media quality", "20"]]
  },
  refl: ["Which digital safety habit will you start this week?", "Was it easier to give instructions orally or in writing? Why?", "Which sequence words do you use most naturally?", "How did your partner's test help you improve your steps?"]
});

UNITS.push({
  n: 3, el: 1, sem: 1, emoji: "🩺",
  title: "Health Quest: My Healthy Habit Journey (Recount Text)",
  desc: "Share personal experiences about health and sport — tell what happened, when, and what you learned.",
  tp: [
    { c: "E.1.3", t: "Retell a personal experience orally in chronological order using past tense and time connectives.", e: "Tell your group about the day you joined a school sports competition in 2 minutes." },
    { c: "E.2.3", t: "Identify the orientation, sequence of events, and reorientation in a recount text.", e: "Mark the three parts of a recount titled 'My First Fun Run'." },
    { c: "E.3.3", t: "Write a personal recount using simple past tense, time connectives, and a personal comment.", e: "Write 'My 7-Day No-Sugar Challenge' with orientation, events, and reorientation." }
  ],
  focus: [
    ["Purpose", "To retell past events/experiences — to inform or entertain."],
    ["Structure", "Orientation (who, when, where) → Events (in order) → Reorientation (comment/feeling)."],
    ["Simple past tense", "Regular: walked, joined; Irregular: went, ate, felt, ran"],
    ["Time connectives", "On Saturday morning, then, after that, at noon, finally"],
    ["Personal pronouns", "I, we, my friends — the writer took part in the events."],
    ["Health vocabulary", "balanced diet, hydrated, stretching, exhausted, recover, routine"]
  ],
  model: "Orientation: [[Last month]], my classmates and I [[joined]] a 5 km fun run at Benteng Oranje.\nEvents: [[In the morning]], we [[did]] some stretching. [[Then]] the race [[started]] at 6.30. After two kilometres, I [[felt]] exhausted, but my friend encouraged me. [[After that]], we [[drank]] water and kept running. [[Finally]], we [[reached]] the finish line together.\nReorientation: [[It was tiring, but I learned]] that teamwork and a healthy routine make a big difference.\n\nLanguage: [[simple past]] (joined, felt, drank), [[time connectives]], and a [[personal comment]] at the end.",
  diag: [
    { q: "The past form of 'eat' is …", o: ["eated", "ate", "eaten", "eats"], a: 1, w: "eat – ate – eaten (irregular)." },
    { q: "Which sentence tells a past event?", o: ["I run every morning.", "I ran 3 km yesterday.", "I will run tomorrow.", "I am running now."], a: 1, w: "Yesterday + ran = simple past." },
    { q: "'Exhausted' means …", o: ["very tired", "very hungry", "very happy", "very fast"], a: 0, w: "Exhausted = sangat lelah." },
    { q: "Which is a healthy habit?", o: ["Skipping breakfast every day", "Sleeping 8 hours", "Drinking soda all day", "Staying up until 3 a.m."], a: 1, w: "Enough sleep supports health." },
    { q: "Which word is a time connective?", o: ["delicious", "afterwards", "strong", "because of"], a: 1, w: "Afterwards shows time order." }
  ],
  form: [
    { q: "The orientation of a recount tells …", o: ["the moral of the story", "who, when, and where", "the steps to follow", "arguments"], a: 1, w: "Orientation introduces participants, time, and place." },
    { q: "'Last Sunday, we ___ to the beach for a morning walk.'", o: ["go", "went", "gone", "going"], a: 1, w: "Last Sunday → simple past: went." },
    { q: "Choose the reorientation.", o: ["We arrived at 7 a.m.", "Then we jogged along the coast.", "It was an unforgettable day, and I want to do it again.", "On Saturday morning, I woke up early."], a: 2, w: "Reorientation = closing comment/feeling." },
    { q: "'She ___ a lot of water after the match.'", o: ["drink", "drank", "drunk", "drinking"], a: 1, w: "drink – drank – drunk; simple past = drank." },
    { q: "What does 'stay hydrated' mean?", o: ["drink enough water", "sleep longer", "eat more sugar", "stop exercising"], a: 0, w: "Hydrated = having enough water in the body." },
    { q: "Which connective fits? 'We stretched. ___ we started the race.'", o: ["After that,", "Although", "Because", "Unless"], a: 0, w: "After that shows the next event." },
    { q: "Which is NOT part of a recount?", o: ["Orientation", "Events", "Reorientation", "Materials needed"], a: 3, w: "Materials belong to procedure texts." },
    { q: "'I didn't ___ junk food for a week.'", o: ["ate", "eat", "eaten", "eats"], a: 1, w: "Negative past: didn't + base verb." }
  ],
  quiz: [
    { q: "Read: 'Last holiday I tried a no-sugar challenge. On day one I felt dizzy. By day four I felt more energetic. In the end, I learned to read food labels.' The events are told in …", o: ["random order", "chronological order", "order of importance", "alphabetical order"], a: 1, w: "Day one → day four → in the end = chronological." },
    { q: "In the text above, 'In the end, I learned to read food labels' is the …", o: ["orientation", "event", "reorientation", "complication"], a: 2, w: "It gives the writer's reflection → reorientation." },
    { q: "Which verb list is ALL past tense?", o: ["ran, ate, felt, joined", "run, eat, feel, join", "running, eating, feeling", "runs, eats, feels"], a: 0, w: "ran, ate, felt, joined = simple past." },
    { q: "The main purpose of a personal recount is to …", o: ["persuade readers to buy something", "retell an experience", "describe how something works", "explain steps"], a: 1, w: "Recount = retelling past experiences." },
    { q: "'Before the game, the coach ___ us to warm up.'", o: ["tell", "told", "telling", "tells"], a: 1, w: "Past event → told." },
    { q: "Which sentence is the best opening (orientation) for 'A Week Without Gadgets'?", o: ["Gadgets are made in factories.", "Last semester, my family and I tried a week without gadgets at home.", "Turn off your phone now.", "Gadgets are bad, so you must stop using them."], a: 1, w: "It tells who, when, where → orientation." }
  ],
  task: "Keep a 5-day healthy-habit journal (sleep, water, exercise, healthy food). Each day, write 2–3 sentences in simple past.\n\nThen turn your journal into a personal recount (150 words) titled 'My Healthy Habit Journey' with orientation, events, and reorientation. Highlight all past verbs.",
  disc: "Share one experience when you changed a habit (sleeping earlier, eating more vegetables, exercising). What happened first, next, and finally? What did you learn?",
  meet: [
    { jp: "2 JP", topic: "Listening & reading recounts about health experiences", act: "Listen to a student's recount podcast → timeline of events; identify the 3 parts." },
    { jp: "2 JP", topic: "Language focus: simple past (regular/irregular) & time connectives", act: "Irregular verb bingo; rebuild a jumbled recount." },
    { jp: "2 JP", topic: "Speaking & writing a personal recount", act: "2-minute storytelling circle → write and peer-edit the recount." }
  ],
  proj: {
    title: "Healthy Habit Podcast",
    steps: ["Choose a real experience about health, sport, or wellbeing.", "Draft a recount with orientation, 4–5 events, and reorientation.", "Practise pronunciation of past verbs (-ed: /t/, /d/, /ɪd/).", "Record a 2-minute podcast episode with a short intro and outro.", "Upload to the class page and comment on 2 classmates' episodes."],
    rub: [["Recount structure", "30"], ["Accuracy of past tense", "30"], ["Fluency & pronunciation", "25"], ["Message/reflection", "15"]]
  },
  refl: ["Which irregular verbs do you often forget?", "How did telling your story aloud help your writing?", "What healthy habit from a classmate's story inspired you?", "How did you feel when you shared a personal experience in English?"]
});

UNITS.push({
  n: 4, el: 3, sem: 1, emoji: "✈️",
  title: "Global Dreams: Inspiring People & Places (Descriptive Text)",
  desc: "Describe dream destinations and inspiring figures — vivid adjectives, clear identification, and organised description.",
  tp: [
    { c: "E.2.4", t: "Identify the identification and description parts of descriptive texts about people and places.", e: "Find how a text describes Gunung Gamalama: location, appearance, and activities." },
    { c: "E.3.4", t: "Write a descriptive text using adjectives, noun phrases, and relational verbs (be, have).", e: "Describe your dream campus or city in 150 words with at least 8 adjectives." },
    { c: "E.3.5", t: "Present a description orally with visuals in a clear, organised way.", e: "Give a 2-minute 'Dream Destination' presentation with photos or slides." }
  ],
  focus: [
    ["Purpose", "To describe a particular person, place, or thing in detail."],
    ["Structure", "Identification → Description (appearance, qualities, activities, uniqueness)."],
    ["Adjectives & noun phrases", "a majestic volcano, a friendly and hardworking teacher, crystal-clear water"],
    ["Order of adjectives", "opinion → size → age → shape → colour → origin → material: a beautiful old white Dutch fort"],
    ["Relational verbs", "is, are, has, have — 'The island has white sandy beaches.'"],
    ["Simple present", "Description of things that are generally true now."]
  ],
  model: "Identification: [[Ternate]] is [[a small volcanic island]] in North Maluku, famous for its history as a spice island.\nDescription: The island [[has]] [[a majestic active volcano]], Mount Gamalama, in the centre. Around it, there are [[green clove gardens]] and [[colourful traditional markets]]. Visitors can see [[the old Dutch fort]], Benteng Oranje, and swim in [[crystal-clear]] Sulamadaha Beach. The people are [[friendly and welcoming]].\n\nLanguage: [[noun phrases]] (a majestic active volcano), [[adjective order]] (old Dutch fort), and relational verbs [[is / has / there are]].",
  diag: [
    { q: "Which word is an adjective?", o: ["quickly", "beautiful", "swim", "island"], a: 1, w: "Beautiful describes a noun → adjective." },
    { q: "'Majestic' means …", o: ["very small", "impressive and grand", "dirty", "noisy"], a: 1, w: "Majestic = megah, mengagumkan." },
    { q: "Which sentence describes a place?", o: ["Clean the beach every Sunday.", "The beach has soft white sand and clear water.", "I went to the beach yesterday.", "You should visit the beach!"], a: 1, w: "It gives qualities of the beach → description." },
    { q: "Which country is famous for the Eiffel Tower?", o: ["Italy", "France", "Japan", "Egypt"], a: 1, w: "The Eiffel Tower is in Paris, France." },
    { q: "'Has' is used with …", o: ["I and you", "he, she, it", "we and they", "all subjects"], a: 1, w: "He/she/it has; I/you/we/they have." }
  ],
  form: [
    { q: "A descriptive text starts with …", o: ["identification", "events", "argument", "materials"], a: 0, w: "Identification introduces the person/place/thing." },
    { q: "Choose the correct adjective order.", o: ["a white old beautiful fort", "a beautiful old white fort", "an old white beautiful fort", "a fort beautiful old white"], a: 1, w: "Opinion → age → colour: beautiful old white." },
    { q: "'My role model ___ a kind smile and curly hair.'", o: ["have", "has", "having", "is have"], a: 1, w: "Third person singular → has." },
    { q: "Which noun phrase is the most descriptive?", o: ["a market", "a busy colourful traditional market", "market", "the market is"], a: 1, w: "Several adjectives make a rich noun phrase." },
    { q: "'Hardworking' describes a person who …", o: ["is lazy", "works with great effort", "is always late", "sleeps a lot"], a: 1, w: "Hardworking = rajin, pekerja keras." },
    { q: "Which sentence belongs to the description part?", o: ["Raja Ampat is an archipelago in West Papua.", "It has more than 1,500 small islands and colourful coral reefs.", "Let's go there!", "Once upon a time…"], a: 1, w: "It gives details (features) → description." },
    { q: "'There ___ many old buildings in Kota Tua Jakarta.'", o: ["is", "are", "has", "be"], a: 1, w: "Plural noun → there are." },
    { q: "Which adjective best completes: 'The view from the top is ___!'", o: ["breathtaking", "breathe", "breath", "breathtakingly"], a: 0, w: "After 'is' we need an adjective: breathtaking." }
  ],
  quiz: [
    { q: "Read: 'B.J. Habibie was a brilliant engineer and Indonesia's third president. He was famous for designing aircraft.' The text mainly describes …", o: ["a place", "a person", "a process", "an event"], a: 1, w: "It describes Habibie → a person." },
    { q: "Which sentence is the identification?", o: ["Kyoto is a historic city in Japan.", "It has more than 1,600 temples.", "In autumn, the leaves turn red and orange.", "Visitors can wear kimonos."], a: 0, w: "The first sentence identifies Kyoto." },
    { q: "'The ancient stone temple' — 'ancient' tells us the …", o: ["colour", "age", "material", "size"], a: 1, w: "Ancient = very old → age." },
    { q: "Which is the BEST description of an inspiring teacher?", o: ["She is a teacher.", "She is patient, creative, and always encourages her students to try again.", "Teachers work at schools.", "My teacher went home."], a: 1, w: "Specific qualities make the description vivid." },
    { q: "Choose the correct sentence.", o: ["Bali have many beautiful beaches.", "Bali has many beautiful beaches.", "Bali having many beaches.", "Bali is has beaches."], a: 1, w: "Bali (singular) has." },
    { q: "The language feature that helps readers 'see' a place is …", o: ["imperatives", "sensory adjectives", "time connectives", "modal 'must'"], a: 1, w: "Sensory adjectives (crystal-clear, fragrant, noisy) create images." }
  ],
  task: "Choose your dream destination (a city or campus abroad or in Indonesia) OR an inspiring person (scientist, athlete, teacher, family member). Make a mind map: identification → appearance → qualities → activities → why it inspires you.\n\nWrite a 150-word descriptive text using at least 8 adjectives, 3 noun phrases, and correct adjective order.",
  disc: "If you could study or work anywhere in the world, where would it be? Describe the place in 3–4 sentences so your classmates can imagine it.",
  meet: [
    { jp: "2 JP", topic: "Reading & viewing descriptions of people and places", act: "Travel-vlog viewing → note adjectives; guess-the-place game." },
    { jp: "2 JP", topic: "Language focus: adjectives, noun phrases, has/have, there is/are", act: "Adjective order puzzle; expand noun phrases from 1 to 4 words." },
    { jp: "2 JP", topic: "Writing & presenting 'My Global Dream'", act: "Write the description → 2-minute presentation with photos." }
  ],
  proj: {
    title: "My Global Dream Board",
    steps: ["Choose a dream destination or inspiring figure.", "Collect 3–5 pictures and key facts.", "Write a 150-word descriptive text (identification + description).", "Create a digital or paper dream board with text, pictures, and captions.", "Present it in 2 minutes and explain how it connects to your future goals."],
    rub: [["Descriptive language (adjectives, noun phrases)", "30"], ["Structure & accuracy", "25"], ["Visual creativity", "20"], ["Oral presentation", "25"]]
  },
  refl: ["Which new adjectives did you learn and use?", "How does describing your dream help you plan your future?", "What was the most interesting place or person presented by a classmate?", "Which part of describing (appearance, qualities, activities) is easiest for you?"]
});
/* ===== SEMESTER 2 ===== */
UNITS.push({
  n: 5, el: 3, sem: 2, emoji: "🔥",
  title: "Climate Alert II: Act Now! (Analytical Exposition)",
  desc: "Build and defend arguments about environmental issues — thesis, reasons, evidence, and a strong conclusion.",
  tp: [
    { c: "E.2.5", t: "Identify the thesis, arguments, and reiteration in analytical exposition texts.", e: "Analyse 'Single-Use Plastic Should Be Banned at School' and label each part." },
    { c: "E.1.4", t: "Express and respond to opinions politely in a discussion using opinion expressions.", e: "Join a 4-person talk: 'Should Ternate ban plastic bags?' using 'In my opinion…', 'I see your point, but…'." },
    { c: "E.3.6", t: "Write an analytical exposition with a clear thesis, at least two supported arguments, and a reiteration.", e: "Write 'Why Our School Needs a Rain Garden' (200 words) with evidence for each argument." }
  ],
  focus: [
    ["Purpose", "To persuade the reader that a position (thesis) is right through logical arguments."],
    ["Structure", "Thesis → Arguments (point + elaboration + evidence) → Reiteration (restate the thesis)."],
    ["Opinion expressions", "In my opinion, I believe, From my point of view, It is clear that…"],
    ["Connectives", "Firstly, Moreover, Furthermore, In addition, However, Therefore, In conclusion"],
    ["Evidence", "Statistics, expert statements, examples, research findings — with a source."],
    ["Mental verbs & modals", "believe, think, consider; should, must, need to"]
  ],
  model: "Thesis: [[Single-use plastic should be banned in our school canteen.]]\nArgument 1: [[Firstly]], plastic waste pollutes our coast. [[According to KLHK]], Indonesia produces millions of tonnes of plastic waste each year, and much of it ends up in the sea.\nArgument 2: [[Moreover]], alternatives are cheap and available. Students can bring tumblers, and the canteen can use banana leaves or reusable plates.\nReiteration: [[Therefore]], banning single-use plastic is a simple step that [[protects]] the environment and [[builds]] responsible habits.\n\nLanguage: [[thesis statement]], [[connectives]] (firstly, moreover, therefore), [[evidence with source]], and modal [[should]].",
  diag: [
    { q: "Which sentence is an opinion?", o: ["The canteen sells 300 plastic cups a day.", "I believe the canteen should stop using plastic cups.", "Plastic is made from oil.", "The school has 900 students."], a: 1, w: "'I believe… should' expresses an opinion." },
    { q: "'Moreover' is used to …", o: ["add another point", "show contrast", "give an example", "show time"], a: 0, w: "Moreover = in addition / selain itu." },
    { q: "'Persuade' means …", o: ["to make someone agree or do something", "to describe a place", "to tell a story", "to give instructions"], a: 0, w: "Persuade = membujuk / meyakinkan." },
    { q: "Which expression politely disagrees?", o: ["You are wrong!", "I see your point, but I think…", "That's stupid.", "Whatever."], a: 1, w: "Acknowledge first, then give your view." },
    { q: "Which is the strongest evidence?", o: ["My friend said so.", "A 2023 BMKG report shows…", "Everybody knows it.", "I saw it in a dream."], a: 1, w: "Data from a credible institution is strong evidence." }
  ],
  form: [
    { q: "The first part of an analytical exposition is the …", o: ["argument", "thesis", "reiteration", "orientation"], a: 1, w: "Thesis → arguments → reiteration." },
    { q: "The reiteration …", o: ["introduces new arguments", "restates the writer's position", "lists materials", "tells a funny story"], a: 1, w: "Reiteration repeats/strengthens the thesis." },
    { q: "Choose the best connective: 'Planting trees cools the city. ___, trees provide homes for birds.'", o: ["However", "Furthermore", "Although", "Unless"], a: 1, w: "Adding a point → Furthermore." },
    { q: "Which sentence is a good thesis?", o: ["Trees are green.", "Every school should have a tree-planting program.", "I planted a tree yesterday.", "Plant the seed in the soil."], a: 1, w: "A thesis states a clear position." },
    { q: "'From my point of view, students ___ bring their own water bottles.'", o: ["should", "shoulds", "should to", "are should"], a: 0, w: "Modal + base verb: should bring." },
    { q: "'I see your point, but…' is used to …", o: ["agree completely", "disagree politely", "ask for directions", "end a phone call"], a: 1, w: "It shows respect before giving a different view." },
    { q: "Which part contains 'point + elaboration + evidence'?", o: ["Thesis", "Argument", "Reiteration", "Title"], a: 1, w: "Each argument has a point and supporting details." },
    { q: "'___, we must act now to protect our coast.' (closing)", o: ["Therefore", "Firstly", "For example", "Moreover"], a: 0, w: "Therefore introduces the conclusion." }
  ],
  quiz: [
    { q: "Read: 'Students should use public transport. Firstly, it reduces pollution. Secondly, it is cheaper. Therefore, schools should encourage it.' The thesis is …", o: ["It reduces pollution.", "Students should use public transport.", "It is cheaper.", "Schools should encourage it."], a: 1, w: "The first sentence states the position." },
    { q: "In the text above, 'Secondly, it is cheaper' is an …", o: ["argument", "orientation", "reiteration", "identification"], a: 0, w: "It supports the thesis → argument." },
    { q: "Which evidence best supports 'Mangroves protect the coast'?", o: ["Mangroves look nice.", "Studies show mangroves can reduce wave energy significantly.", "My uncle likes mangroves.", "Mangroves are green."], a: 1, w: "Research-based evidence is strongest." },
    { q: "The main purpose of analytical exposition is to …", o: ["entertain with a story", "persuade the reader that something is the case", "describe a person", "retell the past"], a: 1, w: "Exposition persuades through analysis." },
    { q: "Which pair shows contrast?", o: ["moreover / furthermore", "however / on the other hand", "firstly / secondly", "for example / such as"], a: 1, w: "However & on the other hand show contrast." },
    { q: "A classmate says, 'Plastic bans are useless.' The MOST academic response is …", o: ["You're wrong.", "I understand your concern; however, data from cities with bans show less coastal waste.", "No!", "Who cares?"], a: 1, w: "Polite + evidence-based response." }
  ],
  task: "Choose one local environmental issue (plastic waste, beach erosion, flooding, heat in classrooms). Write an analytical exposition (200 words) with a thesis, two arguments supported by evidence (with sources), and a reiteration.\n\nIn a group discussion, defend your thesis for 2 minutes and respond politely to at least one different opinion.",
  disc: "Should our school ban single-use plastic completely? State your position, give one reason with evidence, and politely respond to one classmate's opinion.",
  meet: [
    { jp: "2 JP", topic: "Reading & analysing analytical expositions", act: "Colour-code thesis, arguments, evidence, reiteration in 3 model texts." },
    { jp: "2 JP", topic: "Speaking: expressing & responding to opinions", act: "Four-corners debate (strongly agree → strongly disagree) with opinion expressions." },
    { jp: "2 JP", topic: "Writing an evidence-based exposition", act: "Outline → draft → peer feedback using an argument checklist." }
  ],
  proj: {
    title: "Act Now! Campaign Op-Ed",
    steps: ["Choose an environmental problem at school or in your neighbourhood.", "Collect at least two pieces of evidence from credible sources.", "Write a 200-word analytical exposition (op-ed).", "Turn it into a 1-minute campaign video or a poster with a QR code to the full text.", "Present it to the class or school leaders and collect feedback."],
    rub: [["Clarity of thesis", "20"], ["Quality of arguments & evidence", "35"], ["Language (connectives, modals, opinion expressions)", "25"], ["Campaign impact & creativity", "20"]]
  },
  refl: ["Which argument in your text is the strongest? Why?", "How did you respond when someone disagreed with you?", "Which source did you trust most, and why?", "Did your opinion change after the discussion? How?"]
});

UNITS.push({
  n: 6, el: 2, sem: 2, emoji: "📱",
  title: "Digital Realm II: Stories from the Screen (Narrative Text)",
  desc: "Enjoy and create narratives — fables, legends, and short stories set in the digital world — with conflict and moral values.",
  tp: [
    { c: "E.2.6", t: "Identify orientation, complication, resolution, and moral value in narrative texts (read or viewed).", e: "Watch an animated legend and map its plot on a story mountain." },
    { c: "E.1.5", t: "Retell a narrative orally with expression, using past tense and sequence markers.", e: "Retell the legend of 'Putri Tujuh' or 'Malin Kundang' in 3 minutes with intonation." },
    { c: "E.3.7", t: "Write a short narrative with a clear conflict and resolution set in a digital context.", e: "Write 'The Viral Post' — a story about a hoax that spreads and how the character fixes it." }
  ],
  focus: [
    ["Purpose", "To entertain and convey moral values through a story."],
    ["Structure", "Orientation → Complication (problem) → Resolution → (Coda/moral)"],
    ["Past tenses", "Simple past (walked, saw) and past continuous (was scrolling when…)"],
    ["Direct speech", "\"Don't share it!\" shouted Sari."],
    ["Narrative connectives", "Once upon a time, one day, suddenly, meanwhile, in the end"],
    ["Characters & conflict", "Protagonist, antagonist; internal/external conflict"]
  ],
  model: "Orientation: [[One evening]], Bima [[was scrolling]] through social media when he saw a shocking post about a tsunami warning in Ternate.\nComplication: [[Without checking]], he [[shared]] it to five groups. [[Suddenly]], his neighbours panicked and some families left their homes at night.\nResolution: His sister showed him the official BMKG website — there was no warning. Bima [[deleted]] the post and wrote an apology. [[In the end]], he [[helped]] his school create a 'Check Before You Share' campaign.\nCoda: [[Moral: Think before you share.]]\n\nLanguage: [[past continuous + simple past]] (was scrolling when he saw), [[sequence markers]], and a clear [[moral value]].",
  diag: [
    { q: "A story that teaches a lesson with animal characters is a …", o: ["fable", "report", "procedure", "news item"], a: 0, w: "Fables use animals and give morals (e.g., The Mouse Deer)." },
    { q: "'Suddenly' signals …", o: ["an unexpected event", "the end of the story", "a list of materials", "a reason"], a: 0, w: "Suddenly introduces a surprising event." },
    { q: "The past form of 'see' is …", o: ["seed", "saw", "seen", "sees"], a: 1, w: "see – saw – seen." },
    { q: "Which is a moral value?", o: ["The story has 5 paragraphs.", "Honesty is more important than popularity.", "The story is set in Jakarta.", "The main character is 16."], a: 1, w: "A moral is a lesson for life." },
    { q: "'Hoax' means …", o: ["false information that is spread deliberately", "a funny video", "a type of game", "a famous person"], a: 0, w: "Hoax = berita bohong." }
  ],
  form: [
    { q: "In a narrative, the problem appears in the …", o: ["orientation", "complication", "resolution", "coda"], a: 1, w: "Complication = conflict/problem." },
    { q: "'While she ___ her homework, the power went off.'", o: ["did", "was doing", "does", "has done"], a: 1, w: "Longer action in progress → past continuous." },
    { q: "How the problem is solved is called the …", o: ["resolution", "orientation", "thesis", "identification"], a: 0, w: "Resolution solves the conflict." },
    { q: "Choose the correctly punctuated direct speech.", o: ["\"Check the source first, said Dina.", "\"Check the source first,\" said Dina.", "Check the source first said \"Dina\".", "\"Check the source first\" said, Dina."], a: 1, w: "Quote marks around the words + comma inside." },
    { q: "Which opening is typical of a legend?", o: ["First, mix the flour.", "Long ago, in the Kingdom of Ternate, there lived…", "In my opinion…", "Ternate is an island."], a: 1, w: "Legends start with a time-setting like 'Long ago'." },
    { q: "'The boy felt guilty.' This shows the character's …", o: ["appearance", "feeling", "location", "age"], a: 1, w: "Guilty is a feeling (merasa bersalah)." },
    { q: "Which conflict is INTERNAL?", o: ["A storm destroys a village.", "A girl struggles with her fear of speaking in public.", "Two kingdoms fight.", "A dragon attacks the town."], a: 1, w: "Internal = inside the character's mind." },
    { q: "'In the end, they ___ best friends again.'", o: ["become", "became", "becoming", "becomes"], a: 1, w: "Narrative past → became." }
  ],
  quiz: [
    { q: "Read: 'Once there was a greedy king. One day a magic fish granted him gold, but everything he touched turned to gold — even his food. In the end, he wished for everything to return to normal.' The complication is …", o: ["Once there was a greedy king.", "Everything he touched turned to gold — even his food.", "In the end, he wished for everything to return.", "A magic fish appeared."], a: 1, w: "The problem: even his food turned to gold." },
    { q: "The moral of the story above is …", o: ["Fish are magical.", "Greed can bring trouble.", "Gold is beautiful.", "Kings are rich."], a: 1, w: "The lesson is about greed." },
    { q: "Which pair of tenses is most typical in narratives?", o: ["simple present & future", "simple past & past continuous", "present perfect & future perfect", "imperatives & modals"], a: 1, w: "Stories happened in the past." },
    { q: "'I was watching a video ___ my phone suddenly died.'", o: ["when", "while", "because", "so"], a: 0, w: "Past continuous + when + simple past (interruption)." },
    { q: "Which is the best resolution for a story about cyberbullying?", o: ["Then he logged in.", "Finally, she reported the bully, talked to her teacher, and the class learned to support each other.", "Once upon a time…", "The phone was black."], a: 1, w: "It solves the conflict and shows change." },
    { q: "The main purpose of a narrative is to …", o: ["give step-by-step instructions", "entertain and share values", "persuade with data", "describe a scientific process"], a: 1, w: "Narratives entertain and teach values." }
  ],
  task: "Watch or read one legend from Indonesia (e.g., Asal Mula Danau Tolire, Malin Kundang, Putri Tujuh). Map the story on a story mountain (orientation – complication – climax – resolution – moral).\n\nThen write your own short narrative (200 words) set in the digital world: a hoax, a gaming problem, an online friendship, or cyberbullying. Include direct speech and a clear moral.",
  disc: "Which Indonesian legend do you know best? Retell its complication in 3 sentences and share its moral. Is the moral still relevant in the digital era?",
  meet: [
    { jp: "2 JP", topic: "Reading & viewing narratives: legends and modern stories", act: "Watch an animated legend → story mountain; identify characters & conflict." },
    { jp: "2 JP", topic: "Language focus: past tenses, direct speech, narrative connectives", act: "Fix-the-story challenge; storytelling with dice prompts." },
    { jp: "2 JP", topic: "Writing & performing a digital-world story", act: "Write in pairs → dramatic reading or comic strip presentation." }
  ],
  proj: {
    title: "Digital Comic or Storytelling Video",
    steps: ["Plan a story set in the digital world with a clear conflict and moral.", "Write the narrative (orientation, complication, resolution, coda).", "Turn it into a 6–8 panel comic or a 2-minute storytelling video.", "Add direct speech in speech bubbles or voice acting.", "Publish in the class gallery and vote for the 'Best Moral Message'."],
    rub: [["Narrative structure & conflict", "30"], ["Language (past tenses, direct speech)", "25"], ["Creativity & media", "25"], ["Moral value", "20"]]
  },
  refl: ["Which character in your story is most like you? Why?", "What makes a conflict interesting for readers?", "How did you use past continuous in your story?", "What moral message do teenagers need most today?"]
});

UNITS.push({
  n: 7, el: 2, sem: 2, emoji: "📢",
  title: "Health Quest II: Health Campaign (Announcements & Posters)",
  desc: "Read and create short functional texts — announcements, posters, and public-service messages for school health campaigns.",
  tp: [
    { c: "E.2.7", t: "Find the purpose, main information, and target audience in announcements and health posters.", e: "Read a dengue-prevention poster and answer what, when, where, and who." },
    { c: "E.1.6", t: "Deliver a short spoken announcement clearly with correct stress and intonation.", e: "Announce a 'Healthy Canteen Day' through the school speaker in 45 seconds." },
    { c: "E.3.8", t: "Create an announcement or campaign poster that is clear, concise, and persuasive.", e: "Design a poster for 'Gerakan Cuci Tangan' with a slogan, key info, and a call to action." }
  ],
  focus: [
    ["Purpose", "To inform the public about an event or message quickly and clearly."],
    ["Announcement parts", "Title/Heading → Content (what, when, where, who) → Contact/Announcer"],
    ["Poster elements", "Catchy headline, short slogan, key facts, picture, call to action"],
    ["Language", "Short sentences, imperatives (Wash your hands!), passive (Students are invited…)"],
    ["Persuasive words", "Join us! Don't miss it! Free! Protect yourself and others."],
    ["Health vocabulary", "dengue, vaccination, hygiene, nutrition, screening, prevention"]
  ],
  model: "[[ANNOUNCEMENT]]\n[[Healthy Canteen Day]]\nAll Grade X students [[are invited]] to join Healthy Canteen Day.\nDate: [[Friday, 14 March]] · Time: [[09.30–10.30]] · Place: [[School yard]]\nActivities: free fruit tasting, a quiz on balanced diets, and a smoothie-making demo.\n[[Bring your own tumbler!]]\nContact: Student Council (OSIS)\n\nNotice: [[clear heading]], [[what–when–where–who]], [[passive invitation]] (are invited), and a short [[call to action]] (Bring your own tumbler!).",
  diag: [
    { q: "An announcement is mainly used to …", o: ["tell a long story", "inform people about something important", "describe a person in detail", "argue with someone"], a: 1, w: "Announcements inform the public." },
    { q: "'Dengue' is a disease spread by …", o: ["mosquitoes", "dogs", "water bottles", "phones"], a: 0, w: "Dengue (DBD) is spread by Aedes mosquitoes." },
    { q: "Which is a slogan?", o: ["Clean Hands, Healthy Life!", "The school was built in 1980.", "I ate rice yesterday.", "Turn left at the corner."], a: 0, w: "Short, catchy, memorable → slogan." },
    { q: "'Hygiene' means …", o: ["keeping things clean to stay healthy", "a type of sport", "a festival", "a medicine"], a: 0, w: "Hygiene = kebersihan." },
    { q: "Which detail is MOST important in an event announcement?", o: ["the announcer's favourite food", "date, time, and place", "the colour of the paper", "a long history of the event"], a: 1, w: "Readers must know when and where." }
  ],
  form: [
    { q: "'All students ___ to attend the vaccination program.'", o: ["invite", "are invited", "inviting", "invites"], a: 1, w: "Passive invitation: are invited." },
    { q: "Which is a call to action?", o: ["The event was successful.", "Register now at the OSIS room!", "Ternate is in North Maluku.", "Mosquitoes have six legs."], a: 1, w: "It tells readers what to do." },
    { q: "The target audience of 'Free eye screening for Grade X students' is …", o: ["teachers", "Grade X students", "parents only", "tourists"], a: 1, w: "The text names Grade X students." },
    { q: "Which is NOT usually found in a poster?", o: ["headline", "picture", "slogan", "five long paragraphs of history"], a: 3, w: "Posters are short and visual." },
    { q: "'Don't forget to bring your student card.' This sentence is a …", o: ["reminder", "description", "recount", "thesis"], a: 0, w: "Don't forget… = a reminder." },
    { q: "Choose the clearest announcement sentence.", o: ["There is maybe something on some day.", "The blood donation event will be held on Monday, 3 June, at 8 a.m. in the hall.", "Come if you want, whenever.", "Something about health soon."], a: 1, w: "Specific date, time, place." },
    { q: "'Prevention is better than cure' means …", o: ["it's better to avoid illness than to treat it", "medicine is better than food", "doctors prefer sick people", "cure is easy"], a: 0, w: "Mencegah lebih baik daripada mengobati." },
    { q: "Which word in a poster creates urgency?", o: ["maybe", "now", "sometimes", "later"], a: 1, w: "'Now' pushes immediate action." }
  ],
  quiz: [
    { q: "Read: 'ATTENTION! 3M Dengue Prevention: Drain, Cover, Recycle. Join the clean-up on Saturday at 7 a.m. Meet at the school gate.' What should readers do on Saturday?", o: ["Visit the hospital", "Join a clean-up", "Buy mosquito spray", "Stay at home"], a: 1, w: "The text invites readers to a clean-up." },
    { q: "In the text above, 'Drain, Cover, Recycle' is a …", o: ["slogan with key actions", "title of a song", "list of participants", "conclusion of a story"], a: 0, w: "Short memorable actions = slogan." },
    { q: "The main purpose of a health campaign poster is to …", o: ["entertain with a long story", "persuade people to adopt healthy behaviour", "describe a doctor's life", "report the weather"], a: 1, w: "Campaign posters persuade action." },
    { q: "Which announcement is the most polite?", o: ["Come or else!", "Students are kindly requested to wear masks in the clinic area.", "Masks. Now.", "Why don't you ever wear masks?"], a: 1, w: "'Kindly requested' is polite and formal." },
    { q: "When reading a short functional text, you should FIRST look for …", o: ["the heading and purpose", "the font type", "the paper size", "difficult words only"], a: 0, w: "Heading & purpose guide your reading." },
    { q: "Which sentence uses the passive voice correctly?", o: ["Parents are welcome to join the seminar.", "Parents welcomes join seminar.", "Parents is welcomed join.", "Welcome parents are."], a: 0, w: "Parents (plural) are welcome…" }
  ],
  task: "Find two real health announcements or posters (school, Puskesmas, or online). Analyse them: purpose, audience, key information (what–when–where), slogan, and call to action.\n\nThen create your own announcement or poster for a school health campaign (dengue prevention, healthy canteen, mental health week, or hand-washing). Record yourself reading the announcement in 45 seconds.",
  disc: "Which health problem should our school campaign about this semester? Suggest a catchy slogan in English and explain why it works.",
  meet: [
    { jp: "2 JP", topic: "Reading short functional texts: announcements & posters", act: "Poster gallery hunt → find what, when, where, who, and the call to action." },
    { jp: "2 JP", topic: "Speaking: making clear announcements", act: "Practise stress & intonation; mock school-speaker announcements." },
    { jp: "2 JP", topic: "Designing a health campaign", act: "Create posters in groups → mini campaign exhibition." }
  ],
  proj: {
    title: "School Health Campaign Kit",
    steps: ["Choose a health issue relevant to students (dengue, nutrition, sleep, stress).", "Find 2–3 facts from Kemenkes/WHO/Puskesmas.", "Write an announcement and design a poster with a slogan and call to action.", "Record a 45-second audio announcement.", "Display the kit at school and count how many students respond."],
    rub: [["Clarity of key information", "30"], ["Persuasive language & slogan", "25"], ["Visual design", "20"], ["Spoken announcement", "25"]]
  },
  refl: ["Which poster element attracts attention the most?", "How did you make your announcement short but complete?", "Which health message do you think students really need?", "How confident were you speaking to a large audience?"]
});

UNITS.push({
  n: 8, el: 3, sem: 2, emoji: "🌟",
  title: "Global Dreams II: Inspiring Journeys (Biographical Recount)",
  desc: "Read, present, and write biographies of inspiring Indonesians and world figures — and plan your own future journey.",
  tp: [
    { c: "E.2.8", t: "Identify the orientation, key life events, and evaluation in biographical recounts.", e: "Build a timeline of B.J. Habibie's life from a biography text." },
    { c: "E.1.7", t: "Present a biography orally and ask/answer questions about life events.", e: "Interview a classmate playing 'Najwa Shihab' or 'Alfian Tanjung' using Wh-questions." },
    { c: "E.3.9", t: "Write a short biography using past tense, time expressions, and an evaluation of the person's contribution.", e: "Write a 180-word biography of an inspiring person from North Maluku or your family." }
  ],
  focus: [
    ["Purpose", "To retell the life story of a person and show their achievements and values."],
    ["Structure", "Orientation (who, born when/where) → Events (key life stages) → Re-orientation/Evaluation"],
    ["Simple past & passive", "She was born in 1879. He was appointed as…"],
    ["Time expressions", "In 1945, at the age of 20, after graduating, later, until his death"],
    ["Evaluation words", "inspiring, determined, visionary, dedicated, contribution, legacy"],
    ["Wh-questions", "When was she born? What did he achieve? Why is she inspiring?"]
  ],
  model: "Orientation: [[Raden Ajeng Kartini]] [[was born]] [[on 21 April 1879]] in Jepara, Central Java.\nEvents: [[As a teenager]], she [[was not allowed]] to continue school, but she [[read]] many books and [[wrote]] letters to friends in the Netherlands about women's education. [[In 1903]], she [[opened]] a school for girls.\nEvaluation: Kartini [[was a visionary]] who fought for women's rights. Her letters [[were published]] as 'Habis Gelap Terbitlah Terang', and her [[legacy]] still inspires Indonesians today.\n\nLanguage: [[was born]], [[time expressions]], [[simple past]], and [[evaluation words]] (visionary, legacy).",
  diag: [
    { q: "'She was born in 1879.' The verb form is …", o: ["simple present", "passive past (was born)", "future", "present perfect"], a: 1, w: "Be born → was/were born (past)." },
    { q: "A biography is …", o: ["a story of someone's life written by another person", "a list of recipes", "a fictional fable", "a weather report"], a: 0, w: "Biography = riwayat hidup ditulis orang lain." },
    { q: "'Achievement' means …", o: ["something successful that you did", "a type of food", "a mistake", "a holiday"], a: 0, w: "Achievement = prestasi." },
    { q: "Who is known as Indonesia's 'Father of Technology'?", o: ["B.J. Habibie", "Chairil Anwar", "Ki Hajar Dewantara", "Taufik Hidayat"], a: 0, w: "Habibie is known for aircraft technology." },
    { q: "Which question asks about time?", o: ["Where did she study?", "When did he win the medal?", "Why is she famous?", "Who was his teacher?"], a: 1, w: "When = time." }
  ],
  form: [
    { q: "The orientation of a biography usually includes …", o: ["birth date and place", "the moral of the story", "materials", "a thesis"], a: 0, w: "Who, when, and where the person was born." },
    { q: "'___ the age of 15, he started training as an athlete.'", o: ["In", "At", "On", "By"], a: 1, w: "At the age of…" },
    { q: "'He ___ the President of Indonesia in 1998.'", o: ["become", "became", "becomes", "becoming"], a: 1, w: "Past event → became." },
    { q: "Which word evaluates a person's character?", o: ["determined", "yesterday", "Jakarta", "aircraft"], a: 0, w: "Determined = gigih — an evaluation." },
    { q: "Choose the correct Wh-question: '___ did she open her first school?' — 'In 1903.'", o: ["Where", "When", "Who", "How many"], a: 1, w: "The answer is a year → When." },
    { q: "'His books ___ into many languages.'", o: ["translated", "were translated", "was translate", "translating"], a: 1, w: "Passive past plural: were translated." },
    { q: "Which part tells why the person is important?", o: ["orientation", "events", "evaluation/re-orientation", "title"], a: 2, w: "Evaluation shows contributions and legacy." },
    { q: "'Legacy' means …", o: ["something a person leaves behind for future generations", "a type of disease", "a short holiday", "a bank account"], a: 0, w: "Legacy = warisan (nilai/karya)." }
  ],
  quiz: [
    { q: "Read: 'Susi Susanti was born in 1971 in Tasikmalaya. She started playing badminton as a child. In 1992, she won Indonesia's first Olympic gold medal. She inspired many young athletes.' The evaluation is …", o: ["She was born in 1971.", "She started playing as a child.", "In 1992 she won gold.", "She inspired many young athletes."], a: 3, w: "It evaluates her impact." },
    { q: "In the text above, events are arranged …", o: ["chronologically", "by importance only", "randomly", "alphabetically"], a: 0, w: "1971 → childhood → 1992." },
    { q: "Which time expression is correct?", o: ["on 1992", "in 1992", "at 1992", "by the 1992 year"], a: 1, w: "In + year." },
    { q: "'What did she achieve in 1992?' The best answer is …", o: ["She was born.", "She won an Olympic gold medal.", "She lives in Jakarta.", "She likes rice."], a: 1, w: "Achievement in 1992 = gold medal." },
    { q: "Which sentence is the best orientation for a biography of Sultan Baabullah?", o: ["He was brave.", "Sultan Baabullah was a ruler of Ternate in the 16th century who expelled the Portuguese.", "Visit Ternate now!", "Then he went to war."], a: 1, w: "It introduces who and when." },
    { q: "The main purpose of a biographical recount is to …", o: ["give instructions", "retell a person's life and show their significance", "persuade people to buy", "describe a scientific process"], a: 1, w: "Biography retells life events + significance." }
  ],
  task: "Choose an inspiring person: a national hero, a scientist, an athlete, an artist, or someone from North Maluku (e.g., Sultan Baabullah). Make a life timeline with 5–6 key events.\n\nWrite a 180-word biography (orientation, events, evaluation). Then write 'My Future Biography' — 5 sentences about what you hope people will write about you in 2045.",
  disc: "Who is the most inspiring person in your life or in Indonesian history? Share one key event from their life and explain why it inspires your global dream.",
  meet: [
    { jp: "2 JP", topic: "Reading biographies & building timelines", act: "Timeline race with 4 short biographies; identify evaluation words." },
    { jp: "2 JP", topic: "Speaking: 'Hot Seat' interview with famous figures", act: "Students role-play famous people; classmates ask Wh-questions." },
    { jp: "2 JP", topic: "Writing a biography & 'My Future Biography'", act: "Draft → peer feedback → publish on a class wall 'Inspiring Journeys'." }
  ],
  proj: {
    title: "Inspiring Journeys Gallery",
    steps: ["Choose an inspiring person and research 3 reliable sources.", "Create a timeline of 5–6 key life events.", "Write a 180-word biography with an evaluation of their contribution.", "Make a gallery card (portrait drawing/photo with permission, timeline, quote).", "Host a 'Hot Seat' interview where you answer as that person."],
    rub: [["Accuracy & research", "25"], ["Biography structure & language", "30"], ["Gallery card creativity", "20"], ["Interview performance", "25"]]
  },
  refl: ["Which value from the person you studied do you want to have?", "How did making a timeline help you write?", "Which Wh-question was hardest to answer in the interview?", "What is one step you will take this year toward your global dream?"]
});
/* ===== EXAM, GAMES, LABS, EBOOKS, GLOS, SUMBER, FORUM, BOT ===== */
const EXAM = {
  uts: {
    title: "PTS — Semester Ganjil", min: 75, time: 45,
    desc: "10 soal campuran Unit 1–4 (Report, Procedure, Recount, Descriptive).",
    q: [
      { q: "A text that presents general facts about mangroves is a …", o: ["report text", "recount text", "procedure text", "narrative text"], a: 0, w: "General facts about a class of things → report." },
      { q: "'Sea levels ___ because polar ice is melting.'", o: ["rise", "are rising", "rose", "rising"], a: 1, w: "A current process → present continuous / present." },
      { q: "Which source is the most credible for climate data?", o: ["an anonymous meme", "NASA Climate website", "a chain message", "a gossip blog"], a: 1, w: "Official scientific institution." },
      { q: "'___, open Settings. Then, tap Security.'", o: ["Finally", "First", "However", "Because"], a: 1, w: "First = the opening step." },
      { q: "Choose the negative instruction.", o: ["Don't share your OTP.", "Not share OTP.", "You not share OTP.", "No sharing you OTP."], a: 0, w: "Don't + base verb." },
      { q: "'Last Sunday, we ___ a 5 km fun run.'", o: ["join", "joined", "joining", "joins"], a: 1, w: "Simple past." },
      { q: "The closing comment in a recount is the …", o: ["orientation", "reorientation", "complication", "thesis"], a: 1, w: "Reorientation = personal comment." },
      { q: "Choose the correct adjective order.", o: ["a white old beautiful fort", "a beautiful old white fort", "an old beautiful white fort", "a fort old white"], a: 1, w: "Opinion → age → colour." },
      { q: "'Ternate ___ a majestic volcano.'", o: ["have", "has", "having", "are"], a: 1, w: "Singular subject → has." },
      { q: "A descriptive text starts with …", o: ["identification", "events", "steps", "reiteration"], a: 0, w: "Identification → description." }
    ]
  },
  uas: {
    title: "PAS — Semester Genap", min: 75, time: 45,
    desc: "10 soal campuran Unit 5–8 (Exposition, Narrative, Functional Texts, Biography).",
    q: [
      { q: "The writer's position in an analytical exposition is called the …", o: ["thesis", "orientation", "coda", "identification"], a: 0, w: "Thesis = position." },
      { q: "'Moreover' is used to …", o: ["add a point", "show contrast", "end a story", "ask a question"], a: 0, w: "Moreover = in addition." },
      { q: "'I see your point, but…' is used to …", o: ["agree completely", "disagree politely", "say goodbye", "give instructions"], a: 1, w: "Polite disagreement." },
      { q: "In a narrative, the problem is found in the …", o: ["orientation", "complication", "resolution", "coda"], a: 1, w: "Complication = conflict." },
      { q: "'I was scrolling my phone ___ the lights went out.'", o: ["when", "while", "so", "because"], a: 0, w: "Past continuous + when + simple past." },
      { q: "'All students ___ to the dengue prevention seminar.'", o: ["invite", "are invited", "inviting", "invites"], a: 1, w: "Passive invitation." },
      { q: "Which is a call to action?", o: ["Register now at the OSIS room!", "The seminar was held last year.", "Dengue is a disease.", "The hall is large."], a: 0, w: "It tells readers what to do." },
      { q: "'Kartini ___ in Jepara in 1879.'", o: ["born", "was born", "is born", "borned"], a: 1, w: "Be born → was born." },
      { q: "Which word evaluates a person in a biography?", o: ["visionary", "Jepara", "1903", "letters"], a: 0, w: "Visionary is an evaluation." },
      { q: "'In 1992, she ___ an Olympic gold medal.'", o: ["win", "won", "wins", "winning"], a: 1, w: "Past event → won." }
    ]
  },
  rem: [
    { q: "Report text uses mostly …", o: ["simple present tense", "future tense", "imperatives", "direct speech"], a: 0, w: "General facts → simple present." },
    { q: "Procedure text uses …", o: ["imperatives", "past tense stories", "thesis statements", "rhymes"], a: 0, w: "Instructions = imperatives." },
    { q: "Recount text tells …", o: ["past experiences", "future plans", "steps to make something", "arguments"], a: 0, w: "Retelling past events." },
    { q: "Descriptive text describes …", o: ["a specific person, place, or thing", "how to cook", "a debate", "a news event"], a: 0, w: "Specific participant." },
    { q: "Analytical exposition aims to …", o: ["persuade with arguments", "entertain with a fable", "give a recipe", "describe a city"], a: 0, w: "Persuasion." },
    { q: "Narrative text aims to …", o: ["entertain and teach values", "report statistics", "advertise a product", "announce an event"], a: 0, w: "Entertainment + moral." },
    { q: "An announcement must include …", o: ["what, when, where", "a long history", "a moral value", "a thesis"], a: 0, w: "Key event information." },
    { q: "A biography starts with …", o: ["orientation about the person", "a list of materials", "a complication", "a slogan"], a: 0, w: "Who, born when/where." }
  ]
};

const GAMES = [
  {
    id: "texttrek", name: "Text Type Trek", emoji: "🧭", el: 2,
    desc: "Journey through 3 islands — identify text types, their parts, and their language features to reach Global Dreams Island.",
    levels: [
      { name: "Island of Purposes", q: [
        { p: "Purpose: to tell how to do something", o: ["procedure", "recount", "report"], a: 0 },
        { p: "Purpose: to retell a past experience", o: ["recount", "descriptive", "exposition"], a: 0 },
        { p: "Purpose: to present general facts", o: ["narrative", "report", "procedure"], a: 1 },
        { p: "Purpose: to describe a specific place", o: ["descriptive", "procedure", "exposition"], a: 0 },
        { p: "Purpose: to persuade with arguments", o: ["recount", "exposition", "narrative"], a: 1 },
        { p: "Purpose: to entertain with a story and moral", o: ["narrative", "report", "announcement"], a: 0 }
      ]},
      { name: "Structure Bay", q: [
        { p: "Goal → Materials → Steps", o: ["procedure", "report", "recount"], a: 0 },
        { p: "Orientation → Events → Reorientation", o: ["recount", "descriptive", "exposition"], a: 0 },
        { p: "Thesis → Arguments → Reiteration", o: ["narrative", "exposition", "procedure"], a: 1 },
        { p: "Identification → Description", o: ["descriptive", "recount", "narrative"], a: 0 },
        { p: "Orientation → Complication → Resolution", o: ["report", "narrative", "procedure"], a: 1 },
        { p: "General classification → Descriptions", o: ["report", "exposition", "recount"], a: 0 }
      ]},
      { name: "Grammar Peak", q: [
        { p: "'Mix the flour slowly.' → feature?", o: ["imperative", "passive", "past continuous"], a: 0 },
        { p: "'Ice melts at 0°C.' → tense?", o: ["simple present", "simple past", "future"], a: 0 },
        { p: "'We went to the beach.' → text type?", o: ["recount", "procedure", "report"], a: 0 },
        { p: "'Moreover, …' → function?", o: ["add a point", "contrast", "time"], a: 0 },
        { p: "'She was born in 1879.' → text type?", o: ["biography", "procedure", "poster"], a: 0 },
        { p: "'Suddenly, the phone rang.' → text type?", o: ["narrative", "report", "announcement"], a: 0 }
      ]}
    ]
  },
  {
    id: "verbvolcano", name: "Verb Volcano", emoji: "🌋", el: 1,
    desc: "Stop the eruption on Mount Gamalama! Choose the correct verb forms before the lava reaches the village.",
    levels: [
      { name: "Lava Level 1 — Irregular Past", q: [
        { p: "go → past?", o: ["goed", "went", "gone"], a: 1 },
        { p: "eat → past?", o: ["ate", "eated", "eaten"], a: 0 },
        { p: "see → past?", o: ["saw", "seed", "seen"], a: 0 },
        { p: "run → past?", o: ["runned", "ran", "run"], a: 1 },
        { p: "feel → past?", o: ["felt", "feeled", "fell"], a: 0 },
        { p: "write → past?", o: ["writed", "wrote", "written"], a: 1 }
      ]},
      { name: "Lava Level 2 — Present & Passive", q: [
        { p: "She ___ (have) curly hair.", o: ["have", "has", "having"], a: 1 },
        { p: "Plastic ___ (make) from oil.", o: ["is made", "makes", "made"], a: 0 },
        { p: "Students ___ (invite) to the seminar.", o: ["invites", "are invited", "inviting"], a: 1 },
        { p: "The Earth ___ (get) warmer.", o: ["is getting", "get", "got"], a: 0 },
        { p: "There ___ many temples in Kyoto.", o: ["is", "are", "has"], a: 1 },
        { p: "Her letters ___ (publish) in 1911.", o: ["were published", "published", "publish"], a: 0 }
      ]},
      { name: "Lava Level 3 — Story Tenses", q: [
        { p: "I ___ (watch) TV when he called.", o: ["was watching", "watched", "watch"], a: 0 },
        { p: "While she ___ (cook), the power went off.", o: ["was cooking", "cooks", "cook"], a: 0 },
        { p: "He didn't ___ (share) the hoax.", o: ["shared", "share", "sharing"], a: 1 },
        { p: "In 1998 he ___ (become) president.", o: ["became", "become", "becomes"], a: 0 },
        { p: "They ___ (be) best friends in the end.", o: ["were", "was", "are"], a: 0 },
        { p: "At the age of 15, she ___ (start) training.", o: ["started", "starts", "start"], a: 0 }
      ]}
    ]
  },
  {
    id: "wordquest", name: "Word Quest: Four Worlds", emoji: "🗺️", el: 3,
    desc: "Collect vocabulary crystals from the four worlds: Climate, Digital, Health, and Global Dreams.",
    levels: [
      { name: "Climate World", q: [
        { p: "drought = ?", o: ["kekeringan", "banjir", "badai"], a: 0 },
        { p: "emission = ?", o: ["emisi/pelepasan gas", "hujan", "tanaman"], a: 0 },
        { p: "sea level = ?", o: ["permukaan laut", "dasar laut", "garis pantai"], a: 0 },
        { p: "deforestation = ?", o: ["penggundulan hutan", "reboisasi", "pertanian"], a: 0 },
        { p: "renewable energy = ?", o: ["energi terbarukan", "energi fosil", "energi nuklir"], a: 0 },
        { p: "coral bleaching = ?", o: ["pemutihan karang", "pembersihan pantai", "penangkapan ikan"], a: 0 }
      ]},
      { name: "Digital & Health World", q: [
        { p: "digital footprint = ?", o: ["jejak digital", "kata sandi", "aplikasi"], a: 0 },
        { p: "hoax = ?", o: ["berita bohong", "berita resmi", "iklan"], a: 0 },
        { p: "privacy setting = ?", o: ["pengaturan privasi", "pengaturan suara", "baterai"], a: 0 },
        { p: "balanced diet = ?", o: ["pola makan seimbang", "diet ketat", "makanan cepat saji"], a: 0 },
        { p: "hygiene = ?", o: ["kebersihan", "kesehatan mental", "olahraga"], a: 0 },
        { p: "exhausted = ?", o: ["sangat lelah", "sangat senang", "sangat lapar"], a: 0 }
      ]},
      { name: "Global Dreams World", q: [
        { p: "achievement = ?", o: ["prestasi", "kegagalan", "rencana"], a: 0 },
        { p: "legacy = ?", o: ["warisan", "perjalanan", "lomba"], a: 0 },
        { p: "determined = ?", o: ["gigih", "malas", "takut"], a: 0 },
        { p: "majestic = ?", o: ["megah", "kecil", "kotor"], a: 0 },
        { p: "scholarship = ?", o: ["beasiswa", "ujian", "ijazah"], a: 0 },
        { p: "visionary = ?", o: ["berpandangan jauh ke depan", "pendiam", "pemarah"], a: 0 }
      ]}
    ]
  }
];

const LABS = [
  {
    id: "labtexttype", name: "Lab Text Type Detective", emoji: "🕵️", el: 2, type: "sortbin",
    desc: "Read each sentence and sort it into the text type it most likely comes from.",
    hint: "Look for clues: imperatives → procedure; 'Last week we…' → recount; general facts in present tense → report; 'should/believe' → exposition; 'Once upon a time' → narrative.",
    bins: [
      { id: "report", name: "Report", emoji: "🌍" },
      { id: "procedure", name: "Procedure", emoji: "🛠️" },
      { id: "recount", name: "Recount", emoji: "🗓️" },
      { id: "exposition", name: "Exposition", emoji: "📣" },
      { id: "narrative", name: "Narrative", emoji: "📖" }
    ],
    items: [
      { t: "Coral reefs are underwater ecosystems built by polyps.", bin: "report" },
      { t: "Greenhouse gases trap heat in the atmosphere.", bin: "report" },
      { t: "First, open the Settings menu.", bin: "procedure" },
      { t: "Don't share your OTP with anyone.", bin: "procedure" },
      { t: "Last Sunday, my class joined a beach clean-up.", bin: "recount" },
      { t: "It was tiring, but I learned a lot.", bin: "recount" },
      { t: "I believe our school should ban single-use plastic.", bin: "exposition" },
      { t: "Therefore, the canteen must provide reusable cups.", bin: "exposition" },
      { t: "Once upon a time, a greedy king lived by the sea.", bin: "narrative" },
      { t: "Suddenly, the magic fish disappeared.", bin: "narrative" }
    ]
  },
  {
    id: "labfact", name: "Lab Fact or Opinion?", emoji: "⚖️", el: 2, type: "sortbin",
    desc: "Climate and health claims are everywhere online. Sort each statement into FACT or OPINION.",
    hint: "A fact can be checked with data or a reliable source. An opinion shows feelings or judgements (I think, best, terrible, should).",
    bins: [
      { id: "fact", name: "Fact", emoji: "📊" },
      { id: "opinion", name: "Opinion", emoji: "💭" }
    ],
    items: [
      { t: "Indonesia has more than 17,000 islands.", bin: "fact" },
      { t: "Mount Gamalama is an active volcano.", bin: "fact" },
      { t: "Dengue is spread by Aedes mosquitoes.", bin: "fact" },
      { t: "Plastic straws are the worst invention ever.", bin: "opinion" },
      { t: "Everyone should go vegetarian.", bin: "opinion" },
      { t: "Water boils at 100°C at sea level.", bin: "fact" },
      { t: "Online learning is more fun than school.", bin: "opinion" },
      { t: "Ternate is the most beautiful city in the world.", bin: "opinion" }
    ]
  },
  {
    id: "labsteps", name: "Lab Procedure Builder", emoji: "🔐", el: 1, type: "seq",
    desc: "The steps of 'How to Check a Hoax Message' are jumbled. Arrange them in the correct order.",
    hint: "Think logically: read → stop → check the source → compare → decide → act responsibly.",
    steps: [
      "First, read the whole message carefully, not just the headline.",
      "Next, don't share it yet — notice emotional words like 'URGENT!!!'.",
      "Then, check who wrote it and whether the source is official.",
      "After that, compare it with trusted websites such as cekfakta.com or BMKG.",
      "Finally, report or delete the message if it is a hoax, and tell your group politely."
    ]
  },
  {
    id: "labstory", name: "Lab Story Mountain", emoji: "⛰️", el: 2, type: "seq",
    desc: "Rebuild the narrative 'The Viral Post' — arrange the story parts from orientation to coda.",
    hint: "Orientation (who/when/where) → complication (problem) → climax → resolution → coda (moral).",
    steps: [
      "Orientation: One evening, Bima was scrolling social media at home in Ternate.",
      "Complication: He shared a shocking 'tsunami warning' without checking it.",
      "Climax: His neighbours panicked and some families left their homes at night.",
      "Resolution: His sister showed him BMKG's website — the warning was fake — so he apologised.",
      "Coda: Bima started a 'Check Before You Share' campaign. Moral: think before you share."
    ]
  },
  {
    id: "labwords", name: "Lab Vocabulary Match", emoji: "🧩", el: 3, type: "match",
    desc: "Match each English word from the four worlds with its correct meaning.",
    hint: "Use word parts: de- = remove (deforestation), -ed adjectives describe feelings (exhausted).",
    pairs: [
      ["drought", "a long period without rain"],
      ["emission", "the release of gas into the air"],
      ["phishing", "a trick to steal data through fake links"],
      ["digital footprint", "traces of your online activity"],
      ["balanced diet", "eating the right amounts of different foods"],
      ["hygiene", "keeping clean to stay healthy"],
      ["legacy", "something valuable left for future generations"],
      ["scholarship", "money to support a student's education"]
    ]
  },
  {
    id: "labtimeline", name: "Lab Biography Timeline", emoji: "⏳", el: 3, type: "timeline",
    desc: "Arrange the key events in B.J. Habibie's life from earliest to latest.",
    hint: "Biographies are chronological: birth → education → career → national role → legacy.",
    events: [
      { y: "1936", t: "Born in Parepare, South Sulawesi" },
      { y: "1955", t: "Went to study aeronautical engineering in Germany" },
      { y: "1965", t: "Earned his doctorate (Dr.-Ing.) in Aachen" },
      { y: "1976", t: "Led the aircraft industry IPTN in Bandung" },
      { y: "1995", t: "The N-250 'Gatotkaca' aircraft made its first flight" },
      { y: "1998", t: "Became the 3rd President of Indonesia" },
      { y: "2019", t: "Passed away; remembered as Indonesia's 'Father of Technology'" }
    ]
  },
  {
    id: "labopinion", name: "Lab Polite Opinions", emoji: "🗣️", el: 1, type: "match",
    desc: "Match each expression with its function in a discussion.",
    hint: "Ask yourself: is the speaker giving, asking for, agreeing with, or disagreeing with an opinion?",
    pairs: [
      ["In my opinion, …", "giving an opinion"],
      ["What do you think about …?", "asking for an opinion"],
      ["I couldn't agree more.", "agreeing strongly"],
      ["I see your point, but …", "disagreeing politely"],
      ["Could you explain why?", "asking for a reason"],
      ["To sum up, …", "concluding a discussion"]
    ]
  }
];

const EBOOKS = [
  {
    id: "ebtext", title: "Text Types Handbook — Grade X", emoji: "📘",
    pages: [
      { h: "1 · Report Text", t: "Purpose: present general facts.\nStructure: General classification → Descriptions.\nLanguage: simple present, technical terms, passive voice.\nExample topics: climate change, coral reefs, mangroves." },
      { h: "2 · Procedure Text", t: "Purpose: show how to do something.\nStructure: Goal → Materials/Requirements → Steps.\nLanguage: imperatives, sequence words (first, next, then, finally), adverbs (carefully)." },
      { h: "3 · Recount Text", t: "Purpose: retell past experiences.\nStructure: Orientation → Events → Reorientation.\nLanguage: simple past, time connectives, personal pronouns." },
      { h: "4 · Descriptive Text", t: "Purpose: describe a specific person, place, or thing.\nStructure: Identification → Description.\nLanguage: adjectives, noun phrases, has/have, there is/are." },
      { h: "5 · Analytical Exposition", t: "Purpose: persuade with logical arguments.\nStructure: Thesis → Arguments → Reiteration.\nLanguage: opinion expressions, connectives (firstly, moreover, therefore), modals (should, must), evidence." },
      { h: "6 · Narrative Text", t: "Purpose: entertain and convey values.\nStructure: Orientation → Complication → Resolution → (Coda).\nLanguage: simple past & past continuous, direct speech, narrative connectives." },
      { h: "7 · Short Functional Texts", t: "Announcements, posters, notices.\nKey info: what, when, where, who + call to action.\nLanguage: short sentences, imperatives, passive (Students are invited…)." },
      { h: "8 · Biographical Recount", t: "Purpose: retell a person's life and significance.\nStructure: Orientation → Events → Evaluation.\nLanguage: was born, simple past, time expressions, evaluation words (visionary, legacy)." }
    ]
  },
  {
    id: "ebgrammar", title: "Grammar Corner", emoji: "🧠",
    pages: [
      { h: "Simple Present vs Simple Past", t: "Present: facts & habits — 'Ice melts.' 'I exercise every day.'\nPast: finished actions — 'I joined the fun run last week.'\nNegative past: didn't + base verb — 'I didn't eat junk food.'" },
      { h: "Irregular Verbs to Remember", t: "go–went · eat–ate · see–saw · run–ran · feel–felt · write–wrote · become–became · win–won · drink–drank · tell–told" },
      { h: "Past Continuous", t: "was/were + V-ing for an action in progress: 'I was scrolling when the message arrived.' 'While she was cooking, the power went off.'" },
      { h: "Passive Voice", t: "be + V3. Present: 'Plastic is made from oil.' Past: 'Her letters were published in 1911.' Use it when the action matters more than the actor." },
      { h: "Adjective Order", t: "Opinion → Size → Age → Shape → Colour → Origin → Material → Noun.\n'a beautiful old white Dutch fort'" },
      { h: "Connectives Toolbox", t: "Sequence: first, next, then, finally.\nAddition: moreover, furthermore, in addition.\nContrast: however, on the other hand.\nConclusion: therefore, in conclusion, to sum up." }
    ]
  }
];

const GLOS = [
  ["Report text", "Teks yang menyajikan fakta umum tentang suatu hal (fenomena, hewan, tempat)."],
  ["Procedure text", "Teks berisi langkah-langkah melakukan atau membuat sesuatu."],
  ["Recount text", "Teks yang menceritakan kembali pengalaman/peristiwa masa lalu."],
  ["Descriptive text", "Teks yang menggambarkan orang, tempat, atau benda tertentu secara rinci."],
  ["Analytical exposition", "Teks argumentatif untuk meyakinkan pembaca: thesis → arguments → reiteration."],
  ["Narrative text", "Cerita untuk menghibur dan menyampaikan nilai moral: orientation → complication → resolution."],
  ["Biographical recount", "Teks riwayat hidup seseorang beserta pencapaian dan nilainya."],
  ["Thesis", "Pernyataan posisi/pendapat utama penulis dalam teks eksposisi."],
  ["Orientation", "Bagian pembuka yang memperkenalkan tokoh, waktu, dan tempat."],
  ["Complication", "Bagian munculnya masalah/konflik dalam narasi."],
  ["Imperative", "Kalimat perintah yang diawali kata kerja dasar: Open…, Don't…"],
  ["Passive voice", "Kalimat pasif: be + V3 — 'Plastic is made from oil.'"],
  ["Noun phrase", "Frasa benda dengan keterangan: 'a majestic active volcano'."],
  ["Connective", "Kata penghubung: first, moreover, however, therefore."],
  ["Call to action", "Ajakan untuk bertindak dalam poster/pengumuman: 'Join us now!'"],
  ["Credibility", "Tingkat kepercayaan suatu sumber informasi (penulis, lembaga, data, tanggal)."],
  ["Digital footprint", "Jejak aktivitas seseorang di internet."],
  ["Hoax", "Berita bohong yang sengaja disebarkan."]
];

const SUMBER = [
  ["📄 CP Bahasa Inggris Fase E", "Capaian Pembelajaran Bahasa Inggris Fase E (Kelas X): elemen Menyimak–Berbicara, Membaca–Memirsa, Menulis–Mempresentasikan."],
  ["📗 Buku Bahasa Inggris Kelas X Kurikulum Merdeka", "Buku siswa & buku guru resmi Kemendikbudristek (SIBI) sebagai bacaan pendamping."],
  ["🌍 NASA Climate Kids & BMKG", "Sumber data iklim dan cuaca yang kredibel untuk unit Climate Alert."],
  ["🔐 Cek Fakta & Literasi Digital (Kominfo/Siberkreasi)", "Panduan memeriksa hoaks dan keamanan digital untuk unit Digital Realm."],
  ["🩺 Kemenkes & WHO (Health Topics)", "Informasi kesehatan remaja, gizi seimbang, dan pencegahan DBD untuk unit Health Quest."],
  ["✈️ Biografi tokoh (Ensiklopedia/Museum)", "Sumber biografi tokoh inspiratif Indonesia dan dunia untuk unit Global Dreams."]
];

const FORUM_SEED = [
  {
    id: 1, av: "RN", who: "Rina N.", role: "", time: "2 hari lalu",
    title: "Report text vs descriptive text — what's the difference?",
    body: "Both describe things, right? In Unit 1 we wrote about coral reefs and in Unit 4 about Ternate. How do I know which one is which?",
    replies: [
      { av: "GR", who: "Bu Guru", role: "guru", time: "1 hari lalu", body: "Great question! A report describes things in GENERAL (coral reefs as a group). A descriptive text describes a SPECIFIC one (Ternate, my teacher, Benteng Oranje). Check the subject: general class → report; one particular thing → descriptive." }
    ]
  },
  {
    id: 2, av: "FA", who: "Fajar A.", role: "", time: "3 hari lalu",
    title: "Why do we use 'was scrolling' and not 'scrolled'?",
    body: "In the model story: 'Bima was scrolling when he saw the post.' Can I just write 'Bima scrolled when he saw'?",
    replies: [
      { av: "GR", who: "Bu Guru", role: "guru", time: "2 hari lalu", body: "'Was scrolling' (past continuous) shows a longer action in progress, and 'saw' interrupts it. It paints a clearer picture. 'Scrolled when he saw' sounds like two quick actions at the same time." },
      { av: "SM", who: "Salsa M.", role: "", time: "1 hari lalu", body: "Tip: use 'while' + past continuous and 'when' + simple past. While I was studying, my phone rang!" }
    ]
  },
  {
    id: 3, av: "DP", who: "Dimas P.", role: "", time: "5 hari lalu",
    title: "Ideas for our Health Campaign slogan?",
    body: "Our group chose dengue prevention. We have 'Drain, Cover, Recycle'. Any catchier ideas in English?",
    replies: [
      { av: "AL", who: "Aulia L.", role: "", time: "4 hari lalu", body: "How about 'No Water, No Mosquito!' or 'Clean Today, Safe Tomorrow'?" }
    ]
  }
];

const BOT_RULES = [
  [/report|laporan/i, "Report text = general facts about a class of things. Structure: general classification → descriptions. Use simple present, technical terms, and passive voice. Example: 'Coral reefs are underwater ecosystems…'"],
  [/procedure|prosedur|steps|langkah/i, "Procedure text = how to do something. Goal → materials/requirements → steps. Use imperatives (Open…, Don't…) and sequence words: first, next, then, finally."],
  [/recount|pengalaman/i, "Recount text = retelling past experiences. Orientation → events → reorientation. Use simple past (went, ate, felt) and time connectives (then, after that, finally)."],
  [/descriptive|deskripsi|describe/i, "Descriptive text = a specific person/place/thing. Identification → description. Use adjectives, noun phrases, has/have, there is/are."],
  [/exposition|eksposisi|argument|thesis|opini|opinion/i, "Analytical exposition: thesis → arguments (point + evidence) → reiteration. Useful expressions: In my opinion…, Moreover…, Therefore… Disagree politely: 'I see your point, but…'"],
  [/narrative|narasi|story|cerita|legend/i, "Narrative: orientation → complication → resolution → coda (moral). Use simple past + past continuous: 'I was scrolling when I saw…'. Add direct speech for life!"],
  [/announcement|pengumuman|poster|slogan/i, "Announcement/poster: heading + what, when, where, who + call to action. Keep it short! Passive invitations: 'All students are invited…'"],
  [/biograph|tokoh|born|lahir/i, "Biography: orientation (who, born when/where) → key events → evaluation. Use 'was born', simple past, time expressions (in 1998, at the age of 15) and evaluation words (visionary, legacy)."],
  [/passive|pasif/i, "Passive voice = be + V3. Present: 'Plastic is made from oil.' Past: 'Her letters were published.' Use it when the action matters more than who did it."],
  [/irregular|past tense|v2|lampau/i, "Common irregular verbs: go–went, eat–ate, see–saw, run–ran, feel–felt, write–wrote, become–became, win–won, drink–drank. Negative: didn't + base verb."],
  [/adjective|kata sifat|order/i, "Adjective order: opinion → size → age → shape → colour → origin → material → noun. Example: 'a beautiful old white Dutch fort'."],
  [/hoax|hoaks|credib|sumber|source/i, "Check credibility: Who wrote it? Is it an official institution (BMKG, WHO, Kemenkes)? Is there data and a date? Compare with fact-check sites before you share."],
  [/climate|iklim|global warming/i, "Climate words: greenhouse gas, emission, carbon dioxide, drought, sea level, deforestation, renewable energy, coral bleaching. Use them in your report text!"]
];

const BOT_FALLBACK = "Hmm, I'm not sure yet 🤔. Try keywords like: report, procedure, recount, descriptive, exposition, narrative, announcement, biography, passive, irregular verbs, adjective order, or hoax. You can also ask your teacher in the Forum!";

window.LMS_CONTENT = {
  meta: {
    id: "bahasa-inggris", name: "Bahasa Inggris", short: "B. Inggris", emoji: "🌐", color: "#0b7285",
    kelas: "X", fase: "Fase E", sekolah: "SMAN 1 Kota Ternate", lsKey: "lms_bing_x_sman1ternate_v1", sheetId: "",
    moto: ["Listen", "Think", "Speak Up"],
    sideMoto: ["Read,", "Create,", "Inspire."],
    quote: "“The limits of my language mean the limits of my world.” — Ludwig Wittgenstein",
    note: "Kelas X · Fase E · 8 unit dalam 4 klaster: Climate Alert · Digital Realm · Health Quest · Global Dreams",
    rasional: "Pembelajaran Bahasa Inggris Kelas X disusun dalam 4 klaster topik dekat kehidupan murid — Climate Alert, Digital Realm, Health Quest, Global Dreams — masing-masing muncul dua kali (Semester 1 & 2) dengan jenis teks berbeda: report, procedure, recount, descriptive, analytical exposition, narrative, short functional text, dan biographical recount. Setiap unit memadukan ketiga elemen CP Fase E (Menyimak–Berbicara, Membaca–Memirsa, Menulis–Mempresentasikan) melalui alur memahami → mengaplikasi → merefleksi, lengkap dengan asesmen diagnostik–formatif–sumatif, lab maya interaktif, proyek, dan refleksi.",
    refText: "Ringkasan jenis teks dan tata bahasa tersedia di menu Buku Digital (Text Types Handbook & Grammar Corner).",
    botName: "English Buddy",
    botIntro: "Hi! 👋 I'm your English Buddy for Grade X. Ask me about text types (report, procedure, recount, narrative…), grammar (past tense, passive), or how to check a hoax!",
    botQuick: ["report text", "narrative", "passive voice", "irregular verbs", "check a hoax"],
    about: "LMS Bahasa Inggris Kelas X · Fase E · 8 unit (2 semester) berbasis klaster Climate Alert, Digital Realm, Health Quest, Global Dreams — SMA Negeri 1 Kota Ternate.",
    labHero: "Practise like a language detective: sort sentences, rebuild stories, match words, and build timelines. Mark each lab as done once you've cracked it!",
    logoText: "ABC",
    scene: ["Hello!", "Speak Up!", "A → Z", "✈️"]
  },
  KKTP: 75,
  ELEMENTS: [
    { id: 1, name: "Menyimak – Berbicara", emoji: "🎧", desc: "Listening & speaking: understanding spoken texts and expressing ideas, opinions, and instructions orally." },
    { id: 2, name: "Membaca – Memirsa", emoji: "📖", desc: "Reading & viewing: understanding and evaluating written, visual, and multimodal texts." },
    { id: 3, name: "Menulis – Mempresentasikan", emoji: "✍️", desc: "Writing & presenting: producing various text types and presenting them creatively." }
  ],
  UNITS, EXAM, GAMES, LABS, EBOOKS, GLOS, SUMBER, FORUM_SEED, BOT_RULES, BOT_FALLBACK
};
})();
