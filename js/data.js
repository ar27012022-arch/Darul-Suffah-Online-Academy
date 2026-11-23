/**
 * Darul Suffah Online Academy - Official Data Repository
 * All data conforms strictly to authentic Islamic educational standards.
 * Official Contact: +92 346 8348397
 * Slogan: "Learn Quran. Understand Islam. Build Character."
 */

const ACADEMY_INFO = {
  name: "Darul Suffah Online Academy",
  arabicName: "أكاديمية دار الصفة الإلكترونية",
  slogan: "Learn Quran. Understand Islam. Build Character.",
  phone: "+92 346 8348397",
  whatsapp: "+923468348397",
  whatsappLink: "https://wa.me/923468348397?text=Assalam%20o%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20in%20Darul%20Suffah%20Online%20Academy.",
  email: "info@darulsuffahacademy.com",
  admissionsEmail: "admissions@darulsuffahacademy.com",
  facebook: "https://www.facebook.com/1Darusuffahonlineinstitute",
  instagram: "https://www.instagram.com/darulsuffahonlineacademy",
  headquarters: "Islamabad, Pakistan (Serving Global Students)",
  targetCountries: ["Pakistan", "United States", "United Kingdom", "Canada", "Saudi Arabia", "United Arab Emirates", "Australia", "Qatar", "Germany"]
};

// 10 Core Quran & Islamic Courses
const INITIAL_COURSES = [
  {
    id: "noorani-qaida",
    title: "Noorani Qaida",
    arabicTitle: "القاعدة النورانية",
    category: "Foundation",
    icon: "book-open",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The essential primer for beginners to master Arabic alphabet pronunciation, phonetics, and early Quranic reading rules.",
    intro: "Noorani Qaida is the fundamental stepping stone for every Quran student. Developed to guide beginners from basic letter shapes to compound letters and Harakat (vowels), this course instills accurate Arabic phonetics right from lesson one.",
    targetAge: "Ages 4+ (Children, Teens & Adult Beginners)",
    objectives: [
      "Recognize all 29 Arabic letters in isolated, initial, medial, and final forms",
      "Correctly articulate letters from their proper Makharij (points of articulation)",
      "Master short vowels (Fatha, Kasra, Damma) and Tanween (double vowels)",
      "Understand Sukoon, Shaddah, and Madd rules for smooth joined recitation",
      "Read compound words and short Quranic verses fluently"
    ],
    structure: "17 Structured progressive lessons with individual vocal evaluation",
    outcomes: "Ability to independently read any Quranic Arabic word with correct vowel sounds.",
    methodology: "One-on-one interactive pronunciation coaching, screen sharing of digital Qaida pages, repetitive vocal correction, and visual phonetics cues.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: true
  },
  {
    id: "nazra-quran",
    title: "Quran Reading (Nazra)",
    arabicTitle: "ناظرة القرآن الكريم",
    category: "Recitation",
    icon: "book-marked",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Fluent and continuous reading of the Holy Quran directly from the Mus'haf with proper pause marks and vowel accuracy.",
    intro: "Nazra Quran focuses on building confidence and pace in reading the Quran directly from the Mus'haf. Students transition from reading single words to continuous Ayat, learning standard stopping signs (Waqf) and recitation rhythm.",
    targetAge: "Ages 6+ and adults who have completed Qaida",
    objectives: [
      "Read the Holy Quran from Surah Al-Fatiha to Surah An-Nas fluently",
      "Observe basic stopping signs (Waqf-e-Lazim, Waqf-e-Jaiz, etc.) correctly",
      "Strengthen sight-reading speed without hesitation or phonetic stumbling",
      "Cultivate reverence, correct sitting etiquette, and spiritual mindfulness while reciting"
    ],
    structure: "30 Juz (Paras) progressive reading schedule with daily page targets",
    outcomes: "Fluent, accurate, and confident reading of the entire Holy Quran directly from Arabic script.",
    methodology: "Teacher recites Ayat first, followed by student repetition; real-time correction of vowels, letters, and breath control.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: true
  },
  {
    id: "quran-tajweed",
    title: "Quran with Tajweed",
    arabicTitle: "تجويد القرآن الكريم",
    category: "Tajweed",
    icon: "award",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Master the sacred rules of Tajweed: Makharij, Sifaat, Noon Sakinah, Meem Sakinah, and Madd with melodic recitation.",
    intro: "Reciting the Quran with Tajweed is a sacred duty that preserves the authentic revelation as recited by Prophet Muhammad (peace be upon him). This course explores both theoretical rules and rigorous vocal application.",
    targetAge: "All ages (Children, Youth, Adults)",
    objectives: [
      "Master the 17 Makharij (points of vocal exit) in the human vocal tract",
      "Apply Sifaat-e-Lazimah (permanent characteristics) and Sifaat-e-Aaridah",
      "Perfect rules of Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa)",
      "Master Meem Sakinah rules and rules of Raa (Tafkheem & Tarqeeq)",
      "Learn types of Madd (duration lengths) and Waqf (permissible stopping and starting)"
    ],
    structure: "Modular Tajweed curriculum combining rule memorization with practical Surah recitation",
    outcomes: "Melodic, scientifically accurate recitation matching classical Qira'ah standards.",
    methodology: "Interactive vocal spectrograms, diagrammatic mouth charts, personalized audio recordings, and line-by-line correction.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: true
  },
  {
    id: "quran-hifz",
    title: "Quran Memorization (Hifz)",
    arabicTitle: "حفظ القرآن الكريم",
    category: "Hifz",
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A structured, disciplined, and nurturing memorization pathway with daily Sabaq, Sabqi, and Manzil revisions.",
    intro: "Committing the Holy Quran to heart is one of the highest honors in Islam. Darul Suffah provides an individually tailored Hifz program emphasizing strong retention, daily revision routines, and mental well-being.",
    targetAge: "Ages 7+ (Children and Dedicated Adults)",
    objectives: [
      "Memorize selected Surahs, Juz 30 (Amma), or the complete 30 Juz of the Holy Quran",
      "Establish the classical tripartite retention system: Sabaq (new lesson), Sabqi (recent revision), and Manzil (old revision)",
      "Develop long-term memory techniques and mental stamina",
      "Recite memorized portions fluently in Taraweeh and daily prayers"
    ],
    structure: "Customized daily pacing (quarter page to two pages daily) with weekly assessment checks",
    outcomes: "Solid, dependable memorization with certification upon completion.",
    methodology: "Dedicated Hafiz/Hafiza mentor, strict daily revision accountability, voice notes submission, and parent progress log.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: true
  },
  {
    id: "basic-islamic-studies",
    title: "Basic Islamic Studies",
    arabicTitle: "الدراسات الإسلامية الأساسية",
    category: "Islamic Knowledge",
    icon: "compass",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Foundational knowledge of Islamic faith (Aqeedah), Five Pillars, Seerah, Hadith, and everyday Islamic manners.",
    intro: "Designed to nurture a vibrant Islamic identity for overseas and local students alike. This course provides comprehensive, balanced, and age-appropriate knowledge of Islam's beliefs, history, and noble values.",
    targetAge: "Ages 5-16 & Adult new Muslims",
    objectives: [
      "Understand the 6 Articles of Faith (Iman) and 5 Pillars of Islam",
      "Learn the inspiring life and character of Prophet Muhammad (ﷺ) (Seerah)",
      "Memorize and reflect on 20 authentic short Hadiths on character and honesty",
      "Instill Islamic adab (etiquette): respecting parents, kindness to neighbors, truthfulness, and humility"
    ],
    structure: "Interactive thematic units with multimedia slides, stories, and reflective discussions",
    outcomes: "A solid theological and ethical foundation that equips youth to navigate modern life with faith.",
    methodology: "Engaging storytelling, Q&A discussions, illustrative presentation slides, and family practice projects.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: false
  },
  {
    id: "learn-salah",
    title: "Learn Salah (Prayer)",
    arabicTitle: "تعليم الصلاة وأحكامها",
    category: "Worship (Ibadah)",
    icon: "heart-handshake",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Step-by-step practical instruction on Wudu, physical postures, recitations, Tashahhud, and Khushu in prayer.",
    intro: "Salah is the second pillar of Islam and the primary connection between a servant and Allah. This practical course guides students through every step of purification, movements, and sacred recitations of the five daily prayers.",
    targetAge: "Children ages 6+ and adults refining their prayer",
    objectives: [
      "Perform correct Wudu (ablution) with all Sunnahs, Duas, and invalidators",
      "Execute accurate physical postures (Qiyam, Ruku, Sujood, Jalsah, Qa'dah)",
      "Memorize all Salah recitations: Thana, Surah Al-Fatiha, Tashahhud, Durood Ibrahim, and concluding Duas with meanings",
      "Understand the difference between Fard, Wajib, Sunnah, and Nafl prayers",
      "Cultivate Khushu (inner presence and humility) in worship"
    ],
    structure: "Interactive 4-week intensive or ongoing 1-on-1 practical mastery sessions",
    outcomes: "Independent, confident, and correct execution of all five daily prayers and funeral/Eid prayers.",
    methodology: "Live demonstration, visual posture diagrams, recitation verification, and mock prayer practice sessions.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: false
  },
  {
    id: "daily-masnoon-duas",
    title: "Daily Masnoon Duas",
    arabicTitle: "الأدعية المأثورة اليومية",
    category: "Supplications",
    icon: "smile",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Memorize prophetic morning and evening Adhkar, daily situational Duas, and understand their spiritual meanings.",
    intro: "Connecting every daily moment to the remembrance of Allah through authentic supplications taught by the Prophet Muhammad (ﷺ). From waking up to sleeping, eating, traveling, and entering the home.",
    targetAge: "All ages (Children, Teens, Adults)",
    objectives: [
      "Memorize 40+ authentic daily Masnoon Duas with correct Arabic pronunciation",
      "Understand the word-for-word translation and spiritual significance of each Dua",
      "Build a consistent habit of reciting morning and evening protective Adhkar",
      "Cultivate Tawakkul (reliance upon Allah) in times of gratitude, anxiety, and illness"
    ],
    structure: "Thematic modules: Daily Routine Duas, Food & Travel Duas, Protection Duas, and Gratitude Duas",
    outcomes: "Daily life transformed into continuous worship through memorized, meaningful prophetic supplications.",
    methodology: "Daily audio flashcards, interactive voice reviews, illustrated Dua charts for the home, and contextual repetition.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: false
  },
  {
    id: "arabic-language",
    title: "Arabic Language",
    arabicTitle: "اللغة العربية الفصحى",
    category: "Language",
    icon: "languages",
    image: "https://images.unsplash.com/photo-1584281722573-b677a7fceb40?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Learn Quranic and Classical Arabic: foundational vocabulary, Nahw (grammar), Sarf (morphology), and conversation.",
    intro: "Unlock the direct understanding of the Holy Quran and Islamic texts without relying on translations. This course introduces Classical Arabic (Fusha) using modern conversational and grammatical teaching techniques.",
    targetAge: "Ages 10+ through Adults",
    objectives: [
      "Acquire over 500 high-frequency Quranic words and root families",
      "Grasp foundational Arabic grammar (Ism, Fi'l, Harf, Nominal and Verbal sentences)",
      "Learn essential word conjugation (Sarf) patterns",
      "Translate simple Quranic verses and Hadiths directly into English/Urdu",
      "Engage in basic Islamic and conversational Arabic dialogues"
    ],
    structure: "Level 1 (Beginner), Level 2 (Grammar Fundamentals), Level 3 (Quranic Comprehension)",
    outcomes: "Direct comprehension of familiar Quranic passages during prayer and reading.",
    methodology: "Bilingual instruction, grammar worksheets, root-word flashcards, and live interactive sentence building.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: false
  },
  {
    id: "quran-revision",
    title: "Quran Revision Classes",
    arabicTitle: "مراجعة وتثبيت القرآن الكريم",
    category: "Revision",
    icon: "refresh-cw",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Specialized revision and retention classes for Huffaz and adult readers seeking to fortify their memorization.",
    intro: "For students who have previously memorized portions or the entirety of the Quran, or those who wish to polish their recitation after a break. These classes provide disciplined oversight and testing.",
    targetAge: "Teens, Adults, and Certified Huffaz",
    objectives: [
      "Systematically test and consolidate previously memorized Juz (Paras)",
      "Overcome Mutashabihat (verses with similar wording across different Surahs)",
      "Eliminate hesitations, stuttering, or subtle vowel mistakes under pressure",
      "Prepare for Sanad (certification) or Taraweeh leading duties"
    ],
    structure: "Flexible weekly tracks: 1 Juz/week, 3 Juz/week, or intensive daily cycles",
    outcomes: "Iron-clad memorization and flawless recitation readiness for public prayer leading.",
    methodology: "Rigorous unassisted recitation before an expert Qari/Qaria, targeted Mutashabihat drills, and weekly evaluation rubrics.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: false
  },
  {
    id: "islamic-studies-all",
    title: "Islamic Studies for Children and Adults",
    arabicTitle: "التربية الإسلامية الشاملة",
    category: "Comprehensive",
    icon: "users",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=800&q=80",
    shortDesc: "In-depth modular courses covering Fiqh of daily life, Islamic history, Halal/Haram guidance, and modern family ethics.",
    intro: "An expansive program catering to families looking for deep Islamic comprehension. Topics are customized according to the student's age, life stage, and spiritual inquiries.",
    targetAge: "Separate tracks for Children (7-14), Teens (15-19), and Adults (20+)",
    objectives: [
      "Master practical Fiqh of Taharah, Fasting, Zakah, and Financial dealings",
      "Study major epochs of Islamic Civilization and righteous role models",
      "Navigate contemporary moral challenges with a rooted Islamic worldview",
      "Build strong Islamic family relationships and compassionate community bonds"
    ],
    structure: "Quarterly semesters covering Fiqh, Islamic History, Ethics, and Contemporary Issues",
    outcomes: "Deep, mature Islamic literacy and principled decision-making in personal and professional life.",
    methodology: "Socratic Q&A sessions, research readings, interactive case studies, and live mentor dialogues.",
    pricing: "Customizable monthly plan (Editable in Admin)",
    featured: false
  }
];

// Special Needs Programs Data
const SPECIAL_NEEDS_INFO = {
  title: "Special Needs Quran Classes",
  tagline: "Every Child Deserves the Opportunity to Learn the Quran.",
  intro: "At Darul Suffah Online Academy, we believe with deep conviction that every Muslim child has a sacred right to connect with the Words of Allah. We offer individualized Quran learning sessions tailored around each child's unique learning abilities, communication preferences, sensory profiles, and learning pace.",
  supportedConditions: [
    {
      name: "Autism Spectrum Disorder (ASD)",
      desc: "Structured, predictable routines with clear visual aids, minimized sensory stress, and gentle pacing adapted to each child's comfort.",
      icon: "puzzle"
    },
    {
      name: "ADHD & Attention Differences",
      desc: "Dynamic, short micro-lessons (15-20 min) with interactive movement, active vocalization, and frequent positive reinforcement.",
      icon: "zap"
    },
    {
      name: "Dyslexia & Reading Challenges",
      desc: "High-contrast visual fonts, enlarged Arabic script, color-coded Harakat, and phonemic sound-matching techniques.",
      icon: "eye"
    },
    {
      name: "Speech & Language Difficulties",
      desc: "Patience-centered phonetic practice without pressure, non-verbal gesture matching, visual cue cards, and audio playback.",
      icon: "message-square"
    },
    {
      name: "Learning Disabilities & Delays",
      desc: "Step-by-step scaffolding breaking each letter and sound into manageable, joyful micro-achievements.",
      icon: "shield-check"
    },
    {
      name: "Slow Learners & Gentle Pace Students",
      desc: "Zero rush, abundant repetitions, compassionate encouragement, and celebrated milestones at the child's own rhythm.",
      icon: "heart"
    },
    {
      name: "Children with Other Learning Differences",
      desc: "Custom pedagogical plans developed in close partnership with parents and educational recommendations.",
      icon: "sparkles"
    }
  ],
  programs: [
    "Arabic Letter Recognition & Sensory Tracing",
    "Adapted Noorani Qaida (Visual & Audio Scaffolding)",
    "Basic Quran Reading (Gentle Pace)",
    "Melodic Quran Recitation with Visual Guidance",
    "Basic Tajweed Principles",
    "Short Surah Memorization (Juz Amma)",
    "Daily Duas with Visual Meaning Cards",
    "Learning Salah through Step-by-Step Demonstration"
  ],
  approach: [
    { title: "One-to-One Online Sessions", desc: "100% dedicated teacher attention without classroom distractions or peer comparison." },
    { title: "Visual Learning Activities", desc: "Interactive digital flashcards, color cues, and Arabic letter tracing tools." },
    { title: "Audio-Based Learning", desc: "Clear, slow-paced audio recitations for auditory learners and repetition." },
    { title: "Repetition & Revision", desc: "Spaced reinforcement to solidify memories in a calm, welcoming environment." },
    { title: "Short & Flexible Lessons", desc: "Customized lesson lengths (15 to 30 mins) matching the student's natural attention span." },
    { title: "Personalized Learning Plans", desc: "Individualized Education Plans (IEPs) tailored with parent input." },
    { title: "Positive Reinforcement", desc: "Reward badges, verbal praise, and celebratory milestones building self-esteem." },
    { title: "Parent-Teacher Communication", desc: "Regular post-class feedback and monthly reviews with parents." },
    { title: "Progress Monitoring", desc: "Respectful tracking of growth without competitive testing or grades." }
  ],
  disclaimer: "Our classes provide specialized educational Quran coaching tailored to individual learning styles. Teachers assigned to this program possess verified relevant experience and training identified by academy administration. We work in warm collaboration with parents without making medical or therapeutic claims."
};

// Verified Sample Teachers Data (strictly realistic, professional, no fabricated claims)
const INITIAL_TEACHERS = [
  {
    id: "t-01",
    name: "Qari Muhammad Abdullah",
    gender: "male",
    category: "male",
    specialization: "Tajweed & Hifz Specialist",
    qualifications: "Shahadat-ul-Alimiyyah (Wifaq-ul-Madaris), Ijazah in Hafs 'an 'Asim",
    experience: "8+ Years Online Quran Teaching",
    languages: ["English", "Urdu", "Arabic"],
    specialNeedsTrained: false,
    availability: "Mon - Fri (US & UK Evenings, Gulf Afternoons)",
    bio: "Certified Qari with deep passion for perfecting student Makharij and guiding memorization with patient, rhythmic recitation methodology."
  },
  {
    id: "t-02",
    name: "Ustadha Fatima Zahra",
    gender: "female",
    category: "female",
    specialization: "Noorani Qaida & Children's Quran",
    qualifications: "B.A. Islamic Studies, Sanad in Tajweed, Early Childhood Quran Certificate",
    experience: "6+ Years Teaching Children & Female Students",
    languages: ["English", "Urdu"],
    specialNeedsTrained: true,
    availability: "Flexible Daily (UK, Europe, Pakistan Timezones)",
    bio: "Specializes in nurturing young learners with engaging visual slides, gentle correction, and fostering love for Allah's Book in sisters and children."
  },
  {
    id: "t-03",
    name: "Qari Hafiz Abdul Rehman",
    gender: "male",
    category: "male",
    specialization: "Hifz-ul-Quran & Mutashabihat",
    qualifications: "Dars-e-Nizami, Master of Islamic Studies, Hafiz-e-Quran",
    experience: "10+ Years Hifz Mentorship",
    languages: ["English", "Urdu", "Pashto"],
    specialNeedsTrained: false,
    availability: "Mon - Sat (Global Timezones)",
    bio: "Dedicated mentor who has guided numerous overseas students through full and partial Hifz with strong retention systems."
  },
  {
    id: "t-04",
    name: "Ustadha Maryam Siddiqa",
    gender: "female",
    category: "female",
    specialization: "Tajweed for Sisters & Islamic Studies",
    qualifications: "Alimah Course Graduate, Certified Tajweed Instructor",
    experience: "7+ Years Online Academy Instructor",
    languages: ["English", "Urdu", "Arabic"],
    specialNeedsTrained: false,
    availability: "Daily (USA/Canada Morning & Evening, Saudi Timezone)",
    bio: "Warm, articulate instructor helping adult sisters and young girls connect with Quranic Tajweed, daily supplications, and Fiqh of worship."
  },
  {
    id: "t-05",
    name: "Ustadha Zainab Tariq",
    gender: "female",
    category: "special-needs",
    specialization: "Special Needs Quran Education & Inclusive Learning",
    qualifications: "M.Ed in Special Education, Certified Quran Tutor, Neurodiversity Training",
    experience: "5+ Years Inclusive Quran Coaching",
    languages: ["English", "Urdu"],
    specialNeedsTrained: true,
    availability: "Mon - Thu (US, UK, Gulf Timings)",
    bio: "Passionate educator specializing in individualized instruction for neurodivergent children (Autism, ADHD, Dyslexia) with multisensory methods."
  },
  {
    id: "t-06",
    name: "Qari Bilal Ahmad",
    gender: "male",
    category: "special-needs",
    specialization: "Special Needs & Slow Learner Quran Coaching",
    qualifications: "B.A. Psychology & Islamic Studies, Diploma in Inclusive Pedagogy, Hafiz",
    experience: "6+ Years Adapted Quran Instruction",
    languages: ["English", "Urdu"],
    specialNeedsTrained: true,
    availability: "Mon - Fri (Customized Schedules)",
    bio: "Trained in patient, multi-sensory Quranic phonics for students with speech delays, ADHD, and sensory processing differences."
  }
];

// Interactive Quizzes (12 Categories, Multiple Types, Instant Feedback & Explanations)
const INITIAL_QUIZZES = [
  {
    id: "quiz-alpha-01",
    category: "Arabic Alphabet Recognition",
    title: "Arabic Letters & Sound Shapes",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0, // 0 = untimed
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "Which Arabic letter makes the throat sound 'Haa' (ح) as in 'Al-Hamd'?",
        arabicSnippet: "ح",
        options: ["ح (Haa)", "خ (Khaa)", "ج (Jeem)", "هـ (Haa)"],
        correctIndex: 0,
        explanation: "ح (Haa) is pronounced from the middle of the throat (Wasat al-Halq), distinct from the soft chest letter هـ."
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or False: The letter ب (Baa) has one dot located below the letter.",
        arabicSnippet: "ب",
        options: ["True", "False"],
        correctIndex: 0,
        explanation: "Correct! ب (Baa) has one dot underneath, whereas ت (Taa) has two dots on top."
      },
      {
        id: "q3",
        type: "multiple-choice",
        prompt: "Identify the letter that has THREE dots above its boat shape:",
        arabicSnippet: "ث",
        options: ["ت (Taa)", "ن (Noon)", "ث (Thaa)", "ش (Sheen)"],
        correctIndex: 2,
        explanation: "ث (Thaa) has three dots above and is articulated with the tip of the tongue touching the edges of the upper teeth."
      },
      {
        id: "q4",
        type: "multiple-choice",
        prompt: "Which of these is a heavy (Mufakhkham) letter that causes the mouth to fill with an echo?",
        arabicSnippet: "ص",
        options: ["س (Seen)", "ص (Saad)", "ش (Sheen)", "ز (Zay)"],
        correctIndex: 1,
        explanation: "ص (Saad) is one of the seven heavy letters of Isti'la (خص ضغط قظ)."
      }
    ]
  },
  {
    id: "quiz-harakat-01",
    category: "Harakat Recognition",
    title: "Mastering Short Vowels (Fatha, Kasra, Damma)",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qh1",
        type: "multiple-choice",
        prompt: "What sound does the mark 'Fatha' (ـَ) make when placed above an Arabic letter?",
        arabicSnippet: "بَ",
        options: ["'Ba' (Short 'a' vowel sound)", "'Bi' (Short 'i' vowel sound)", "'Bu' (Short 'u' vowel sound)", "Silent"],
        correctIndex: 0,
        explanation: "A Fatha is a diagonal dash above the letter producing an open short 'a' vowel sound."
      },
      {
        id: "qh2",
        type: "multiple-choice",
        prompt: "Where is the vowel 'Kasra' (ـِ) placed?",
        arabicSnippet: "بِ",
        options: ["Above the letter", "Below the letter", "After the letter", "Inside the letter"],
        correctIndex: 1,
        explanation: "A Kasra is placed underneath the letter and gives the short 'i' or 'ee' sound (like 'Bi')."
      },
      {
        id: "qh3",
        type: "true-false",
        prompt: "True or False: A Damma (ـُ) looks like a tiny letter Waw (و) above the letter.",
        arabicSnippet: "بُ",
        options: ["True", "False"],
        correctIndex: 0,
        explanation: "Correct! Damma is written as a small Waw placed above the letter, producing a rounded 'u' / 'oo' sound."
      },
      {
        id: "qh4",
        type: "multiple-choice",
        prompt: "What does Tanween (Fathatayn, Kasratayn, Dammatayn) add to the end of a vowel sound?",
        arabicSnippet: "ـً  ـٍ  ـٌ",
        options: ["A soft 'M' sound", "A clear 'Noon' (N) sound", "A long pause", "A throat constriction"],
        correctIndex: 1,
        explanation: "Tanween produces a Noon Sakinah sound at the end of a word (e.g., 'An', 'In', 'Un')."
      }
    ]
  },
  {
    id: "quiz-tajweed-01",
    category: "Tajweed Rules",
    title: "Rules of Noon Sakinah & Tanween",
    difficulty: "Intermediate",
    pointsAwarded: 75,
    timeLimitSeconds: 180,
    questions: [
      {
        id: "qt1",
        type: "multiple-choice",
        prompt: "How many rules are associated with Noon Sakinah and Tanween?",
        options: ["Two rules", "Three rules", "Four rules (Izhar, Idgham, Iqlab, Ikhfa)", "Six rules"],
        correctIndex: 2,
        explanation: "The four sacred rules are Izhar (clear pronunciation), Idgham (merging), Iqlab (conversion to Meem), and Ikhfa (concealment with Ghunnah)."
      },
      {
        id: "qt2",
        type: "multiple-choice",
        prompt: "What rule occurs when Noon Sakinah is followed by one of the six throat letters (ء هـ ع ح غ خ)?",
        arabicSnippet: "مَنْ آمَنَ",
        options: ["Izhar Halqi (Clear pronunciation without Ghunnah)", "Idgham", "Ikhfa", "Qalqalah"],
        correctIndex: 0,
        explanation: "When Noon Sakinah meets a throat letter (Huroof Halqiyyah), it is pronounced clearly without extra nasal hum (Izhar)."
      },
      {
        id: "qt3",
        type: "multiple-choice",
        prompt: "When Noon Sakinah is followed by the letter Baa (ب), which rule applies?",
        arabicSnippet: "مِنْ بَعْدِ",
        options: ["Idgham", "Iqlab (changing Noon into a subtle Meem with Ghunnah)", "Izhar", "Tafkheem"],
        correctIndex: 1,
        explanation: "Iqlab occurs exclusively before the letter Baa (ب), turning the sound into a hidden Meem with 2 Harakat of Ghunnah."
      },
      {
        id: "qt4",
        type: "multiple-choice",
        prompt: "Which letters belong to Qalqalah (the echoing bounce sound when sukoon occurs)?",
        arabicSnippet: "قُطْبُ جَدّ",
        options: ["ي ر م ل و ن", "ق ط ب ج د (Qutbu Jadd)", "ء هـ ع ح غ خ", "ف ح ث هـ"],
        correctIndex: 1,
        explanation: "The five letters of Qalqalah are collected in the mnemonic phrase: Qutb Jadd (ق ط ب ج د)."
      }
    ]
  },
  {
    id: "quiz-salah-01",
    category: "Salah",
    title: "Essential Knowledge of Prayer",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qs1",
        type: "multiple-choice",
        prompt: "How many compulsory (Fard) daily prayers are ordained for Muslims?",
        options: ["Three", "Four", "Five (Fajr, Dhuhr, Asr, Maghrib, Isha)", "Seven"],
        correctIndex: 2,
        explanation: "Muslims perform five obligatory daily prayers at designated times: Fajr, Dhuhr, Asr, Maghrib, and Isha."
      },
      {
        id: "qs2",
        type: "multiple-choice",
        prompt: "What is recited in Ruku (bowing position) during Salah?",
        arabicSnippet: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        options: [
          "Subhana Rabbiyal A'la",
          "Subhana Rabbiyal Azeem (Glory be to my Lord, the Magnificent)",
          "Allahu Akbar only",
          "Surah Al-Fatiha"
        ],
        correctIndex: 1,
        explanation: "In Ruku we say: 'Subhana Rabbiyal Azeem' at least three times."
      },
      {
        id: "qs3",
        type: "true-false",
        prompt: "True or False: Recitation of Surah Al-Fatiha is a pillar of every Rak'ah in prayer.",
        arabicSnippet: "سُورَةُ الْفَاتِحَة",
        options: ["True", "False"],
        correctIndex: 0,
        explanation: "The Prophet (ﷺ) said: 'There is no prayer for the one who does not recite the Opening of the Book (Surah Al-Fatiha).'"
      }
    ]
  },
  {
    id: "quiz-duas-01",
    category: "Daily Duas",
    title: "Prophetic Supplications for Daily Life",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qd1",
        type: "multiple-choice",
        prompt: "What is the Sunnah phrase said before eating food?",
        arabicSnippet: "بِسْمِ اللَّهِ",
        options: ["Bismillah (In the name of Allah)", "Alhamdulillah", "Astaghfirullah", "Allahu Akbar"],
        correctIndex: 0,
        explanation: "We begin every blessed action including eating by saying 'Bismillah' (In the name of Allah)."
      },
      {
        id: "qd2",
        type: "multiple-choice",
        prompt: "What Dua do we recite upon finishing our meal?",
        arabicSnippet: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
        options: [
          "Subhan Allah wa bihamdihi",
          "Alhamdulillahil-ladhi at'amana wa saqana wa ja'alana Muslimeen",
          "Rabbana Atina fid-dunya hasanah",
          "Bismillahi tawakkaltu 'alallah"
        ],
        correctIndex: 1,
        explanation: "Praise belongs to Allah who fed us, gave us drink, and made us Muslims."
      }
    ]
  },
  {
    id: "quiz-noorani-01",
    category: "Noorani Qaida",
    title: "Compound Letters & Joint Forms (Murakkabat)",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qn1",
        type: "multiple-choice",
        prompt: "In the compound word 'لا' (Laam-Alif), which letter comes first?",
        arabicSnippet: "لا",
        options: ["Alif comes first", "Laam comes first", "Both are pronounced together as one letter", "Meem"],
        correctIndex: 1,
        explanation: "In 'لا', the tall stem is Laam followed by Alif."
      },
      {
        id: "qn2",
        type: "true-false",
        prompt: "True or False: When a letter connects in the middle of a word, its shape usually changes while retaining its dots.",
        arabicSnippet: "ـبـ ـتـ ـثـ",
        options: ["True", "False"],
        correctIndex: 0,
        explanation: "Correct! The base stroke adapts to connect, but the distinctive dots identify the letter."
      }
    ]
  },
  {
    id: "quiz-reading-01",
    category: "Quran Reading",
    title: "Stopping Signs & Waqf in Mus'haf",
    difficulty: "Intermediate",
    pointsAwarded: 60,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qr1",
        type: "multiple-choice",
        prompt: "What does the symbol 'مـ' (small Meem) above an Ayah indicate?",
        arabicSnippet: "مـ",
        options: ["Compulsory Stop (Waqf-e-Lazim)", "Do not stop (Laa)", "Permissible to pause or continue (Jaiz)", "Sajdah marker"],
        correctIndex: 0,
        explanation: "Small Meem represents Waqf-e-Lazim: pausing is essential to maintain accurate Quranic meaning."
      },
      {
        id: "qr2",
        type: "multiple-choice",
        prompt: "What does the sign 'ط' (Taa) signify in Quranic punctuation?",
        arabicSnippet: "ط",
        options: ["Absolute stop (Waqf-e-Mutlaq) - Recommended to pause", "Must continue without stopping", "End of Juz", "Rukoo marker"],
        correctIndex: 0,
        explanation: "'ط' denotes Waqf-e-Mutlaq, indicating the completion of a statement where pausing is preferred."
      }
    ]
  },
  {
    id: "quiz-makharij-01",
    category: "Makharij",
    title: "Points of Articulation (Makharij al-Huroof)",
    difficulty: "Intermediate",
    pointsAwarded: 70,
    timeLimitSeconds: 120,
    questions: [
      {
        id: "qm1",
        type: "multiple-choice",
        prompt: "From where are the throat letters (ء هـ ع ح غ خ) articulated?",
        arabicSnippet: "الحلق",
        options: ["From the throat (Al-Halq)", "From the lips (Ash-Shafatayn)", "From the nasal cavity (Al-Khayshoom)", "From the teeth"],
        correctIndex: 0,
        explanation: "The six throat letters originate across three levels of the throat: lower, middle, and upper Halq."
      },
      {
        id: "qm2",
        type: "multiple-choice",
        prompt: "Which letter is known as the unique Arabic sound articulated from the side edge of the tongue against the upper molars?",
        arabicSnippet: "ض",
        options: ["Dhad (ض)", "Saad (ص)", "Daal (د)", "Zaa (ظ)"],
        correctIndex: 0,
        explanation: "Dhad (ض) is the distinctive letter of Arabic ('Lughat al-Daad'), articulated from the sides of the tongue."
      }
    ]
  },
  {
    id: "quiz-gk-01",
    category: "Islamic General Knowledge",
    title: "Pillars of Faith & Prophets",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qgk1",
        type: "multiple-choice",
        prompt: "How many Surahs (chapters) are there in the Holy Quran?",
        options: ["114 Surahs", "120 Surahs", "30 Surahs", "99 Surahs"],
        correctIndex: 0,
        explanation: "The Holy Quran contains 114 Surahs divided into 30 Juz (Paras)."
      },
      {
        id: "qgk2",
        type: "multiple-choice",
        prompt: "Which Prophet received the Holy Quran from Allah through Angel Jibreel (Gabriel)?",
        options: ["Prophet Muhammad (ﷺ)", "Prophet Musa (Moses)", "Prophet Isa (Jesus)", "Prophet Ibrahim (Abraham)"],
        correctIndex: 0,
        explanation: "The Holy Quran was revealed to the final Messenger, Prophet Muhammad (peace and blessings be upon him)."
      }
    ]
  },
  {
    id: "quiz-studies-01",
    category: "Islamic Studies",
    title: "Islamic Manners & Noble Character (Akhlaq)",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qis1",
        type: "multiple-choice",
        prompt: "What is the Islamic ruling regarding respecting and obeying one's parents in goodness?",
        options: ["An obligatory sacred duty (Fard / Birr al-Walidayn)", "Optional recommendation only", "Applicable only in childhood", "Disapproved"],
        correctIndex: 0,
        explanation: "Allah commands kind treatment and reverence to parents immediately after the command to worship Him alone (Surah Al-Isra 17:23)."
      },
      {
        id: "qis2",
        type: "true-false",
        prompt: "True or False: Smiling in the face of your brother/sister is considered a form of charity (Sadaqah) in Islam.",
        options: ["True", "False"],
        correctIndex: 0,
        explanation: "The Prophet (ﷺ) said: 'Your smiling in the face of your brother is charity for you.' (Jami` at-Tirmidhi)."
      }
    ]
  },
  {
    id: "quiz-vocab-01",
    category: "Quran Vocabulary",
    title: "Frequently Occurring Words in the Quran",
    difficulty: "Intermediate",
    pointsAwarded: 60,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qv1",
        type: "multiple-choice",
        prompt: "What does the Quranic word 'قَوْم' (Qawm) mean?",
        arabicSnippet: "قَوْم",
        options: ["A people / nation / community", "A mountain", "A river", "A path"],
        correctIndex: 0,
        explanation: "'Qawm' refers to a people, nation, or tribe, occurring hundreds of times in Quranic narratives."
      },
      {
        id: "qv2",
        type: "multiple-choice",
        prompt: "What is the meaning of 'رَحْمَة' (Rahmah)?",
        arabicSnippet: "رَحْمَة",
        options: ["Mercy and compassion", "Wisdom", "Power", "Wealth"],
        correctIndex: 0,
        explanation: "'Rahmah' means divine mercy and grace, from which Allah's names Ar-Rahman and Ar-Raheem derive."
      }
    ]
  },
  {
    id: "quiz-surah-01",
    category: "Surah Recognition",
    title: "The Virtues & Themes of Surahs",
    difficulty: "Beginner",
    pointsAwarded: 50,
    timeLimitSeconds: 0,
    questions: [
      {
        id: "qsr1",
        type: "multiple-choice",
        prompt: "Which Surah is described in Hadith as being equivalent to one-third of the Holy Quran?",
        arabicSnippet: "سُورَةُ الإِخْلَاص",
        options: ["Surah Al-Ikhlas (Qul Huwallahu Ahad)", "Surah Al-Falaq", "Surah Yaseen", "Surah Al-Mulk"],
        correctIndex: 0,
        explanation: "Surah Al-Ikhlas encapsulates the pure essence of Tawheed (divine oneness) and equals one-third of the Quran in virtue."
      },
      {
        id: "qsr2",
        type: "multiple-choice",
        prompt: "Which is the longest Surah in the Holy Quran?",
        arabicSnippet: "سُورَةُ الْبَقَرَة",
        options: ["Surah Al-Baqarah (286 Ayat)", "Surah Ali 'Imran", "Surah An-Nisa", "Surah Al-Ma'idah"],
        correctIndex: 0,
        explanation: "Surah Al-Baqarah is the longest chapter of the Holy Quran, containing Ayat al-Kursi."
      }
    ]
  }
];

// Interactive Tracing Letter Library (Canvas Data)
const TRACING_LETTERS = [
  {
    id: "trace-alif",
    letter: "ا",
    name: "Alif",
    transliteration: "Alif",
    level: "Beginner",
    makhraj: "Empty space of mouth and throat (Jawf)",
    strokes: [
      { startX: 200, startY: 80, endX: 200, endY: 320, hint: "Draw straight down from top to bottom" }
    ],
    audioVoice: "Alif"
  },
  {
    id: "trace-baa",
    letter: "ب",
    name: "Baa",
    transliteration: "Baa",
    level: "Beginner",
    makhraj: "Between the moist outer lips",
    strokes: [
      { startX: 300, startY: 220, endX: 100, endY: 220, hint: "Curve downwards and form the boat from right to left" },
      { startX: 200, startY: 280, endX: 200, endY: 285, hint: "Place one single dot below" }
    ],
    audioVoice: "Baa"
  },
  {
    id: "trace-taa",
    letter: "ت",
    name: "Taa",
    transliteration: "Taa",
    level: "Beginner",
    makhraj: "Tip of the tongue touching the roots of upper front teeth",
    strokes: [
      { startX: 300, startY: 220, endX: 100, endY: 220, hint: "Form the boat shape from right to left" },
      { startX: 185, startY: 170, endX: 215, endY: 170, hint: "Place two dots side by side above" }
    ],
    audioVoice: "Taa"
  },
  {
    id: "trace-thaa",
    letter: "ث",
    name: "Thaa",
    transliteration: "Thaa",
    level: "Beginner",
    makhraj: "Tip of the tongue against the edge of the upper front teeth",
    strokes: [
      { startX: 300, startY: 220, endX: 100, endY: 220, hint: "Form the boat shape from right to left" },
      { startX: 200, startY: 155, endX: 200, endY: 175, hint: "Place three dots forming a pyramid above" }
    ],
    audioVoice: "Thaa"
  },
  {
    id: "trace-jeem",
    letter: "ج",
    name: "Jeem",
    transliteration: "Jeem",
    level: "Intermediate",
    makhraj: "Middle of the tongue against the hard palate",
    strokes: [
      { startX: 160, startY: 120, endX: 260, endY: 120, hint: "Draw the horizontal roof line from left to right" },
      { startX: 260, startY: 120, endX: 120, endY: 280, hint: "Loop deeply downwards and around to the left" },
      { startX: 210, startY: 220, endX: 210, endY: 225, hint: "Place one dot inside the belly" }
    ],
    audioVoice: "Jeem"
  },
  {
    id: "trace-allah",
    letter: "الله",
    name: "Allah (Ism al-Jalalah)",
    transliteration: "Allah",
    level: "Advanced",
    makhraj: "Sacred name of the Almighty",
    strokes: [
      { startX: 320, startY: 100, endX: 320, endY: 300, hint: "Alif straight down" },
      { startX: 260, startY: 120, endX: 120, endY: 280, hint: "Double Lam ascending and connecting to final Haa" }
    ],
    audioVoice: "Allah"
  }
];

// Interactive Worksheets Library
const INITIAL_WORKSHEETS = [
  {
    id: "ws-01",
    title: "Arabic Alphabet Matching & Phonics",
    category: "Arabic Alphabet",
    difficulty: "Beginner",
    pdfUrl: "#",
    totalExercises: 4,
    description: "Practice identifying Arabic letters, matching initial to isolated forms, and vocalizing each sound.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-02",
    title: "Noorani Qaida Lesson 3: Harakat Drills",
    category: "Noorani Qaida",
    difficulty: "Beginner",
    pdfUrl: "#",
    totalExercises: 5,
    description: "Step-by-step vocal exercises with Fatha, Kasra, and Damma over basic single letters.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-03",
    title: "Tajweed Chart: The Rules of Noon Sakinah",
    category: "Tajweed",
    difficulty: "Intermediate",
    pdfUrl: "#",
    totalExercises: 6,
    description: "Categorize verses containing Izhar, Idgham, Iqlab, and Ikhfa with color-coded classification.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-04",
    title: "Salah Positions & Recitation Order",
    category: "Salah",
    difficulty: "Beginner",
    pdfUrl: "#",
    totalExercises: 4,
    description: "Arrange the physical postures of prayer in correct sequence from Takbeer to Tasleem.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-05",
    title: "Daily Masnoon Duas Coloring & Translation",
    category: "Daily Duas",
    difficulty: "Kids",
    pdfUrl: "#",
    totalExercises: 3,
    description: "Match morning, evening, food, and sleep Duas with their English meanings.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-06",
    title: "Harakat & Tanween Identification Table",
    category: "Harakat",
    difficulty: "Beginner",
    pdfUrl: "#",
    totalExercises: 4,
    description: "Identify Fatha, Kasra, Damma, and double vowels (Tanween) across Quranic short words.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-07",
    title: "Quran Reading Fluency & Waqf Checklist",
    category: "Quran Reading",
    difficulty: "Intermediate",
    pdfUrl: "#",
    totalExercises: 5,
    description: "Practical stopping and pausing exercise across Surah Al-Mulk verses.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-08",
    title: "Islamic Studies: The Five Pillars & Their Wisdom",
    category: "Islamic Studies",
    difficulty: "Kids & Teens",
    pdfUrl: "#",
    totalExercises: 4,
    description: "Connect each pillar of Islam to its spiritual reflection and practical observance.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-09",
    title: "Arabic Language: Common Roots & Conjugation",
    category: "Arabic Language",
    difficulty: "Intermediate",
    pdfUrl: "#",
    totalExercises: 5,
    description: "Analyze 3-letter Arabic roots (F-'-L, K-T-B, '-L-M) and their derived meanings in the Quran.",
    downloadable: true,
    interactive: true
  },
  {
    id: "ws-10",
    title: "Islamic Calligraphy: Thuluth & Naskh Proportions",
    category: "Islamic Calligraphy",
    difficulty: "All Levels",
    pdfUrl: "#",
    totalExercises: 4,
    description: "Measure traditional Rhomboid dot proportions and practice sacred geometric letterforms.",
    downloadable: true,
    interactive: true
  }
];

// Achievement Badges System (Academic & Effort based, no religious ranking)
const BADGES_DEFINITIONS = [
  {
    id: "badge-first-step",
    name: "First Step Learner",
    arabicName: "الخطوة الأولى",
    description: "Completed your first interactive lesson or quiz with dedication.",
    pointsReq: 50,
    icon: "award",
    color: "emerald"
  },
  {
    id: "badge-star-learner",
    name: "Star Learner",
    arabicName: "طالب متميز",
    description: "Maintained a 100% quiz score and finished required practice on time.",
    pointsReq: 150,
    icon: "star",
    color: "amber"
  },
  {
    id: "badge-quran-explorer",
    name: "Quran Explorer",
    arabicName: "مستكشف القرآن",
    description: "Successfully navigated 5 different Surahs or Qaida lessons.",
    pointsReq: 300,
    icon: "compass",
    color: "blue"
  },
  {
    id: "badge-tajweed-champion",
    name: "Tajweed Champion",
    arabicName: "بطل التجويد",
    description: "Demonstrated accurate application of Noon Sakinah and Qalqalah rules.",
    pointsReq: 500,
    icon: "crown",
    color: "purple"
  },
  {
    id: "badge-letter-expert",
    name: "Arabic Letter Expert",
    arabicName: "خبير الحروف",
    description: "Practiced and saved 10 Arabic letters in the interactive tracing studio.",
    pointsReq: 400,
    icon: "feather",
    color: "indigo"
  },
  {
    id: "badge-consistent-learner",
    name: "Consistent Learner",
    arabicName: "طالب مثابر",
    description: "Logged in and completed learning goals 5 days in a row.",
    pointsReq: 600,
    icon: "calendar-check",
    color: "teal"
  }
];

// Sample Initial Users for Role-Based Portals (Admin, Teacher, Student, Parent)
const INITIAL_USERS = [
  {
    id: "admin-1",
    role: "admin",
    name: "Director of Admissions & Academics",
    email: "admin@darulsuffahacademy.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    phone: "+92 346 8348397"
  },
  {
    id: "teacher-1",
    role: "teacher",
    name: "Qari Muhammad Abdullah",
    email: "abdullah@darulsuffahacademy.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    assignedStudentIds: ["stu-01", "stu-02", "stu-03"]
  },
  {
    id: "student-1",
    role: "student",
    name: "Zayd Ahmad (Age 10)",
    email: "zayd@darulsuffahacademy.com",
    studentId: "stu-01",
    parentId: "parent-1",
    teacherId: "teacher-1",
    enrolledCourses: ["noorani-qaida", "learn-salah"],
    points: 350,
    level: 3,
    badges: ["badge-first-step", "badge-star-learner", "badge-quran-explorer"],
    attendanceRate: "96%",
    currentSabaq: "Noorani Qaida Lesson 9 (Madd letters)",
    homeworkStatus: "Submitted (Awaiting Review)",
    nextClassTime: "Tomorrow, 5:30 PM (PKT) / 12:30 PM (GMT)"
  },
  {
    id: "parent-1",
    role: "parent",
    name: "Br. Tariq Ahmad (Parent of Zayd)",
    email: "tariq.ahmad@example.com",
    phone: "+44 7911 123456",
    country: "United Kingdom",
    childId: "stu-01",
    feeStatus: "Paid (Current Month)",
    teacherNotes: "Zayd has shown wonderful progress in differentiating between Taa (ت) and Taa (ط). Keep encouraging his daily audio revision."
  }
];

// Sample Trial Class Requests in Admin
const INITIAL_TRIAL_REQUESTS = [
  {
    id: "TR-1082",
    studentName: "Ibrahim Khan",
    parentName: "Farhan Khan",
    age: "8",
    country: "United States",
    whatsapp: "+1 415 555 2671",
    email: "farhan.k@example.com",
    course: "Noorani Qaida",
    preferredTeacher: "Male Quran Teacher",
    preferredDays: "Sat, Sun",
    preferredTime: "10:00 AM (EST)",
    timezone: "America/New_York (UTC-5)",
    status: "Pending Review",
    submittedAt: "2026-11-18 14:20"
  },
  {
    id: "TR-1083",
    studentName: "Amina Al-Mansoor",
    parentName: "Maryam Al-Mansoor",
    age: "11",
    country: "United Arab Emirates",
    whatsapp: "+971 50 123 4567",
    email: "maryam.mansoor@example.com",
    course: "Quran with Tajweed",
    preferredTeacher: "Female Quran Teacher",
    preferredDays: "Mon, Wed, Fri",
    preferredTime: "5:00 PM (GST)",
    timezone: "Asia/Dubai (UTC+4)",
    status: "Approved & Scheduled",
    submittedAt: "2026-11-17 09:45"
  },
  {
    id: "TR-1084",
    studentName: "Hamza Malik",
    parentName: "Dr. Asim Malik",
    age: "7",
    country: "United Kingdom",
    whatsapp: "+44 7700 900123",
    email: "dr.asim@example.com",
    course: "Special Needs Quran Classes (ADHD adapted)",
    preferredTeacher: "Special Needs Quran Teacher",
    preferredDays: "Tue, Thu",
    preferredTime: "4:30 PM (GMT)",
    timezone: "Europe/London (UTC+0)",
    status: "Pending Review",
    submittedAt: "2026-11-19 08:15"
  }
];

// Blog Posts Data (SEO Friendly, Islamic Education, Parenting, Special Needs)
const INITIAL_BLOG_POSTS = [
  {
    id: "blog-01",
    title: "10 Effective Ways to Motivate Your Child for Daily Quran Reading",
    category: "Islamic Parenting",
    author: "Academic Advisory Team",
    date: "November 2026",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=600&q=80",
    snippet: "Discover practical routines, positive encouragement, and setting a serene home environment to instill lasting love for the Quran in young hearts.",
    readTime: "5 min read"
  },
  {
    id: "blog-02",
    title: "Teaching the Quran to Children with Autism & Attention Differences",
    category: "Special Needs Quran Education",
    author: "Ustadha Zainab Tariq (Special Needs Specialist)",
    date: "November 2026",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=600&q=80",
    snippet: "Every brain is uniquely crafted by Allah. Learn how multisensory techniques, visual schedules, and patience transform Quran learning for neurodivergent youth.",
    readTime: "7 min read"
  },
  {
    id: "blog-03",
    title: "Why Tajweed Matters: Preserving Meaning and Musicality in Recitation",
    category: "Tajweed Education",
    author: "Qari Muhammad Abdullah",
    date: "October 2026",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80",
    snippet: "A subtle shift in vowel or tongue placement can transform the meaning of a sacred verse. Explore the science behind classical Tajweed.",
    readTime: "6 min read"
  },
  {
    id: "blog-04",
    title: "Practical Strategies for Teaching Islamic Etiquette to Young Children",
    category: "Children's Islamic Education",
    author: "Ustadha Maryam Siddiqa",
    date: "October 2026",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80",
    snippet: "How to introduce the concept of Allah's love, prophetic manners (Adab), and truthful speech during early developmental years.",
    readTime: "5 min read"
  },
  {
    id: "blog-05",
    title: "The Transformative Spiritual Rewards of Committing to the Quran",
    category: "Importance of Quran Learning",
    author: "Academic Advisory Team",
    date: "September 2026",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=600&q=80",
    snippet: "Prophetic traditions on the intercession of the Quran on the Day of Judgment and how daily recitation brings Sakinah into family homes.",
    readTime: "6 min read"
  },
  {
    id: "blog-06",
    title: "7 Proven Quran Learning Tips for Busy Overseas Professionals & Students",
    category: "Quran Learning Tips",
    author: "Qari Hafiz Abdul Rehman",
    date: "September 2026",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=600&q=80",
    snippet: "How micro-learning routines (15 minutes after Fajr) and audio repetition allow busy adults to maintain consistency without overwhelm.",
    readTime: "5 min read"
  }
];

// Scholarly Educational Notes for Private Women's Tracker (Authentic, respectful, balanced)
const WOMEN_SCHOLARLY_GUIDANCE = [
  {
    title: "Legitimate Acts of Worship During Menstruation",
    content: "Islam is a religion of ease and spiritual mercy. While ritual prayer (Salah) and fasting are paused, women can actively earn immense reward through abundant Dhikr (remembrance), Istighfar, personal Dua, sending Salawat upon the Prophet (ﷺ), and attending Islamic lectures."
  },
  {
    title: "Listening to the Holy Quran",
    content: "Scholars across major traditions agree that listening attentively to Quran recitations and reflecting upon their meanings is fully permissible and highly virtuous at all times."
  },
  {
    title: "Recitation from Memory & Scholarly Views",
    content: "There are well-known legitimate scholarly differences regarding reciting from memory for teaching or retention (such as the Maliki view and positions held by Imam Ibn Taymiyyah). Students should follow the guidance of their trusted local scholars or teachers."
  },
  {
    title: "Medical Note & Safeguard",
    content: "Cycle length forecasts in this tracker are simple mathematical averages based solely on past logs. They do not constitute medical or gynecological advice. Always consult a healthcare professional for health concerns."
  }
];
