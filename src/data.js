export const profile = {
  first: "KSHEERAJA",
  last: "ALEGAONKAR",
  role: ["AI & DATA", "SCIENCE", "STUDENT"],
  tagline: "B.Tech Computer Science Engineering (AI & Data Science) Student",
  email: "ksheeraja07@gmail.com",
  linkedin: "https://www.linkedin.com/in/ksheeraja-alegaonkar-988249318",
  github: "https://github.com/ksheeraja-23",
  location: "Pune",
  about:
    "Hi! I'm Ksheeraja, a Computer Science Engineering student specialising in AI & Data Science at MIT-WPU, Pune. I build full-stack apps, ML systems and IoT projects, and I love turning ideas into things people can use. Outside the code, I lead clubs, organise workshops and make video content, because great tech needs great people around it.",
};

export const stats = [
  { label: "GPA", value: 8.68, decimals: 2, suffix: "" },
  { label: "Projects", value: 14, decimals: 0, suffix: "+" },
  { label: "Synapse events", value: 9, decimals: 0, suffix: "" },
  { label: "10th Grade", value: 95.6, decimals: 1, suffix: "%" },
];

export const skillGroups = [
  { name: "Languages", items: ["C", "C++", "Python", "JavaScript", "SQL"] },
  {
    name: "Frameworks & Libraries",
    items: ["PyTorch", "Pandas", "NumPy", "Scikit-learn", "React", "Node.js", "Express.js"],
  },
  { name: "Databases", items: ["MySQL"] },
  {
    name: "Tools & Platforms",
    items: ["Arduino & IoT", "OpenCV", "MediaPipe", "Power BI", "Git/GitHub", "Linux"],
  },
  {
    name: "Soft Skills",
    items: [
      "Event & workshop organization",
      "Team coordination",
      "Stakeholder communication",
      "Strategic thinking",
      "Teamwork",
      "Decision making",
    ],
  },
  { name: "Spoken", items: ["English", "Hindi", "Marathi", "Kannada"] },
];

export const projects = [
  {
    id: "ev-booking",
    title: "EV Charging Station Booking & Management",
    cat: "Full-Stack",
    tools: ["Node.js", "Express.js", "MySQL"],
    summary:
      "Full-stack EV charging booking platform with secure auth, real-time slot availability and vehicle management.",
    points: [
      "Secure authentication using JWT and bcrypt, with real-time slot availability and vehicle management.",
      "Role-based admin dashboards for managing users, stations and bookings.",
      "Responsive UI with optimized API calls and caching to reduce booking conflicts.",
    ],
  },
  {
    id: "ev-locator",
    title: "EV Charger Locator & Booking System",
    cat: "Full-Stack",
    tools: ["C++", "HTML", "CSS", "JavaScript"],
    summary: "REST-style C++ backend with an HTML frontend for real-time charger listing and slot booking.",
    points: [
      "Backend built with OOP principles, file handling and exception management.",
      "APIs for authentication, booking and admin charger management.",
      "CSV files used to simulate persistent storage.",
    ],
  },
  {
    id: "pet-adoption",
    title: "Pet Adoption Management System",
    cat: "Full-Stack",
    tools: ["React", "Tailwind CSS", "MySQL"],
    summary: "Responsive, component-based adoption platform with role-based access and end-to-end workflows.",
    points: [
      "Pet browsing and adoption request workflows.",
      "Admin dashboard backed by a structured MySQL database.",
      "Form validation and reusable UI components.",
    ],
  },
  {
    id: "phantompath",
    title: "PhantomPath AI: Procedural Horror Level Generation",
    cat: "AI / Games",
    tools: ["Python"],
    summary: "Procedural level generator for a grid-based horror game, validated with A* pathfinding.",
    points: [
      "Guarantees at least one valid path between spawn and exit using the A* algorithm.",
      "Introduces controlled environmental anomalies for psychological tension without breaking connectivity.",
      "Improves reliability and replayability.",
    ],
  },
  {
    id: "evalpro",
    title: "EvalPro AI: Employee Review Intelligence",
    cat: "ML / NLP",
    tools: ["Python", "SQL", "NLP", "Power BI"],
    summary: "ML/NLP system that analyses ratings and feedback to surface recurring complaints.",
    points: [
      "Aggregates numeric ratings and analyses textual feedback to categorise employee performance.",
      "SQL-based data warehousing with Power BI dashboards.",
      "Supports faster, data-driven corrective action.",
    ],
  },
  {
    id: "heritage-ar",
    title: "Cultural Heritage Preservation Platform (AR)",
    cat: "AR / AI",
    tools: ["Unity 3D", "ARCore", "BlippAR", "Photogrammetry"],
    summary: "AR platform preserving India's cultural heritage with 3D digitization and an AI storytelling chatbot.",
    points: [
      "3D digitization using photogrammetry, LiDAR, Blender and Maya.",
      "AI chatbot for dialect learning and storytelling.",
      "Real-time interaction with WebAR access and offline support.",
    ],
  },
  {
    id: "thyrovis",
    title: "ThyroVis — Thyroid Cancer Subtype Classification",
    cat: "Deep Learning",
    tools: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    summary: "Deep learning pipeline classifying thyroid biopsy images with explainable AI. (In progress)",
    points: [
      "Classifies fine-needle biopsy images as benign, malignant or borderline.",
      "Explainable AI to support interpretability.",
      "Extending to malignant subtypes (papillary, follicular variants) using a public histopathology dataset.",
    ],
  },
  {
    id: "dataset-analyzer",
    title: "Dataset Analyzer: Interactive Data Assessment",
    cat: "Data",
    tools: ["Python", "Flask", "Pandas", "SciPy", "Plotly.js"],
    summary: "Web tool that profiles CSV, Excel, JSON and TXT files and recommends visualizations. (In progress)",
    points: [
      "Auto-profiles data types, missing values, duplicates and outliers.",
      "Statistical summaries, correlations and chart recommendations.",
      "Code-free dataset quality assessment for non-technical users.",
    ],
  },
  {
    id: "broo-pose",
    title: "Broo Pose: AI Pose-Matching Game",
    cat: "Computer Vision",
    tools: ["Python", "Pygame", "OpenCV", "MediaPipe"],
    summary: "Webcam pose-matching game with real-time tracking and an AI-generated portrait on success.",
    points: [
      "MediaPipe pose tracking with a weighted positional + joint-angle similarity score.",
      "Gemini API generates a stylised AI portrait on a successful match.",
      "Results and scores persisted to local storage.",
    ],
  },
  {
    id: "smart-cart",
    title: "IoT Smart Shopping Cart (RFID + ML)",
    cat: "IoT / ML",
    tools: ["ESP32", "RC522 RFID", "OLED", "Python"],
    summary: "Team project: RFID-based cart with live billing and ML-driven recommendations, up to 91% accuracy.",
    points: [
      "Auto-identifies products via RFID, shows live billing on an OLED and uploads to the cloud.",
      "K-Means segmentation, KNN and Random Forest recommendations, Apriori for bought-together patterns.",
      "End-to-end pipeline from RFID scan through ESP32, cloud storage and recommendations.",
    ],
  },
  {
    id: "smart-plant",
    title: "IoT Smart Plant Monitoring System",
    cat: "IoT",
    tools: ["NodeMCU ESP8266", "Blynk"],
    summary: "Automated plant care with temperature, humidity, soil moisture and motion sensors.",
    points: [
      "DHT22, soil moisture and motion sensors with relay-based control.",
      "Real-time monitoring and remote control through Blynk.",
    ],
  },
  {
    id: "password",
    title: "Intelligent Password Policy Enforcer",
    cat: "Security",
    tools: ["React", "Node.js"],
    summary: "Customizable password-policy system with real-time strength feedback and configurable rules.",
    points: ["Configurable rules for varying security levels.", "Real-time strength feedback."],
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio Website",
    cat: "Web",
    tools: ["HTML", "CSS", "JavaScript"],
    summary: "Responsive personal site showcasing skills, projects and achievements.",
    points: ["Designed and built from scratch.", "Responsive across devices."],
  },
  {
    id: "cocreation",
    title: "Co-creation MIT-WPU: Prevention & Intervention Research",
    cat: "Research",
    tools: ["Interviews", "Data analysis"],
    summary: "Qualitative research on student wellbeing across students, counselors and educators.",
    points: [
      "Interviews with students, counselors and educators.",
      "Qualitative insights combined with data analysis to inform prevention and intervention strategies.",
    ],
  },
];

const B = import.meta.env.BASE_URL;
const img = (name) => `${B}events/${name}`;

/* Default gallery photos, shown for any Synapse event whose own `photos` list is empty. */
export const defaultPhotos = [
  img("synapse-team.jpg"),
  img("session-audience.jpg"),
  img("hall-discussion.jpg"),
];

export const portrait = `${B}me/portrait.jpg`;

/*
 * SYNAPSE AI CLUB: built from your event reports.
 * `role` is what the report shows for you ("Student Coordinator" is stated in the AI Conclave
 * report; for the others you're in the organising team), so edit as needed.
 * For event-specific photos, put files in /public/events/ and set photos: [img("my-photo.jpg")].
 * Empty `photos` = the default photos above.
 */
const synapseOnly = [
  {
    id: "s1",
    type: "Workshop",
    title: "Synapse 8-Session Workshop · Session 1: Intro to AI & Data Science",
    short: "Intro to AI & Data Science",
    participants: "180",
    level: "Department level",
    role: "Organiser (Vice President)",
    description:
      "Opening session of the 8-session workshop series. An industry expert walked students through AI and data science fundamentals, current trends, real-world case studies and the skills needed for careers in the field.",
    highlights: [
      "100% of the 180 registered participants attended",
      "85%+ of respondents rated the session 4 or 5 out of 5",
      "Real-world case studies and career guidance",
    ],
    photos: [],
  },
  {
    id: "s2",
    type: "Workshop",
    title: "Synapse 8-Session Workshop · Session 2: Natural Language Processing",
    short: "Natural Language Processing",
    participants: "111",
    level: "Department level",
    role: "Organiser (Vice President)",
    description:
      "Hands-on introduction to NLP using real-world analogies, from how chatbots understand human language to text-analysis techniques.",
    highlights: [
      "111 participants against a target audience of 250",
      "Overall rating 4.31 / 5; content 4.23 / 5",
      "Practical exposure to chatbots and text analysis",
    ],
    photos: [],
  },
  {
    id: "s3",
    type: "Seminar & Workshop",
    title: "AEON 2025",
    short: "AEON 2025",
    participants: "360",
    level: "University level",
    role: "Synapse team",
    description:
      "Two-day event by Synapse x ACM covering AI, ML, DL and GenAI, computer vision, agentic AI, prompt engineering and multi-agent systems, with hands-on ML, Langflow, Agno and Streamlit sessions, plus a mega quiz.",
    highlights: [
      "Day 1: AI/ML/DL to GenAI, computer vision with GANs and diffusion, ML model challenge",
      "Day 2: agentic AI, Langflow workflows, Agno + Streamlit workshop, mega quiz",
      "Prizes for the best ML model and quiz winners",
    ],
    photos: [],
  },
  {
    id: "s4",
    type: "Project Building",
    title: "PBL Mini Project",
    short: "PBL Mini Project",
    participants: "30",
    level: "School level",
    role: "Synapse team",
    description:
      "Members formed teams to build AI-based mini projects on assigned topics, with mentorship during development and final presentations judged on teamwork, innovation, technical approach and problem-solving.",
    highlights: [
      "Multiple teams on different AI problem statements",
      "Mentored build sessions and live presentations",
      "Evaluated on teamwork, innovation and technical approach",
    ],
    photos: [],
  },
  {
    id: "s5",
    type: "Competition",
    title: "Prompt to Purpose 2026",
    short: "Prompt to Purpose",
    participants: "21",
    level: "University level",
    role: "Synapse team",
    description:
      "AI art competition held on National Youth Day. Participants created AI-generated posters, paintings, short films or music inspired by Swami Vivekananda's vision for youth empowerment and pitched their ideas live.",
    highlights: [
      "Posters, paintings, short films and music made with GenAI tools",
      "Live idea presentations judged on creativity, concept and AI usage",
      "Cash prizes and certificates for the top 3",
    ],
    photos: [],
  },
  {
    id: "s6",
    type: "Hands-on Session",
    title: "AI Power Cloud · Power BI Analytics",
    short: "Power BI Analytics",
    participants: "40",
    level: "University level",
    role: "Synapse team",
    description:
      "Hands-on Power BI session on data analytics and the role of AI in business intelligence: building dashboards, charts, KPIs and interactive reports with live guidance.",
    highlights: [
      "Dashboards and reports built live by participants",
      "Charts, tables and KPI techniques",
      "Real-world data-driven decision-making use cases",
    ],
    photos: [],
  },
  {
    id: "s7",
    type: "Technical Event",
    title: "AI Power Cloud · Cloud Dev 360",
    short: "Cloud Dev 360",
    participants: "18",
    level: "University level",
    role: "Synapse team",
    description:
      "A 360-degree primer on Microsoft Azure: environment setup, resource management, governance, scalability and deploying AI-driven applications.",
    highlights: [
      "Azure configuration, governance and scalability",
      "Deploying intelligent, AI-integrated apps",
      "Bridged cloud theory and practical deployment",
    ],
    photos: [],
  },
  {
    id: "s8",
    type: "Competition & Workshop",
    title: "AI Conclave 2026",
    short: "AI Conclave 2026",
    participants: "300+",
    level: "Inter-college",
    role: "Student Coordinator",
    description:
      "Two-day inter-college conclave by DCET in collaboration with Synapse AI: an AI Project Competition and a Debate on the ethics of emerging tech, followed by tech talks and a hands-on GenAI tools workshop.",
    highlights: [
      "Day 1: AI project showcase and ethics debate",
      "Day 2: tech talks and a hands-on GenAI tools workshop",
      "300+ participants across two days",
    ],
    photos: [],
  },
];

/* Shared by both clubs: appears under Synapse AND IRIS. */
const ideasToInnovation = {
  id: "i2i",
  type: "Synapse × IRIS",
  title: "Ideas to Innovation",
  short: "Ideas to Innovation",
  role: "Synapse × IRIS team",
  description:
    "A joint event by Synapse and IRIS, bringing the technical and non-technical teams together from planning to the day itself.",
  highlights: ["Joint Synapse × IRIS event", "Technical and non-technical teams working side by side"],
  photos: [
    img("ideas-to-innovation-podium.jpg"),
    img("ideas-to-innovation-team-dinner.jpg"),
  ],
};

export const synapseEvents = [...synapseOnly, ideasToInnovation];

/* IRIS (MIT-WPU): you're Non-Tech Head. */
export const irisEvents = [
  {
    id: "i1",
    type: "Event",
    title: "Student Felicitation",
    short: "Student Felicitation",
    role: "Non-Tech Head",
    description:
      "IRIS event honouring students, with the team on stage to present the felicitation.",
    highlights: ["Organised by the IRIS team", "Logistics and coordination handled by the non-tech team"],
    photos: [img("felicitation-bouquet.jpg"), img("felicitation-team.jpg")],
  },
  {
    id: "i3",
    type: "Event",
    title: "Shubharambh",
    short: "Shubharambh",
    role: "Non-Tech Head",
    description:
      "IRIS event Shubharambh, an 'auspicious beginning'. The team prepared décor and props by hand and coordinated on the day.",
    highlights: ["Hands-on décor and prop preparation", "Cross-team coordination and logistics"],
    photos: [
      img("shubharambh-team.jpg"),
      img("shubharambh-prep-1.jpg"),
      img("shubharambh-prep-2.jpg"),
    ],
  },
  ideasToInnovation,
];

/* One gallery for every event. Built from the events above (shared photos appear once);
   the three general session photos are labelled as Synapse workshops. */
export const galleryPhotos = (() => {
  const out = [];
  const seen = new Set();
  const add = (src, caption, club) => {
    if (!seen.has(src)) {
      seen.add(src);
      out.push({ src, caption, club });
    }
  };
  const shared = new Set(irisEvents.map((e) => e.id));
  irisEvents.forEach((e) =>
    e.photos.forEach((src) => add(src, e.title, synapseEvents.some((s) => s.id === e.id) ? "Both" : "IRIS"))
  );
  synapseEvents.forEach((e) =>
    e.photos.forEach((src) => add(src, e.title, shared.has(e.id) ? "Both" : "Synapse"))
  );
  defaultPhotos.forEach((src) => add(src, "Synapse workshops & sessions", "Synapse"));
  // interleave so neighbouring photos come from different events
  const order = [3, 0, 6, 1, 8, 4, 7, 2, 9, 5];
  return order.map((i) => out[i]).filter(Boolean).concat(out.filter((_, i) => !order.includes(i)));
})();

export const education = [
  {
    school: "MIT World Peace University (MIT-WPU), Pune",
    degree: "B.Tech, Computer Science Engineering: AI & Data Science",
    years: "2024 – 2028",
    score: "GPA 8.68",
  },
  { school: "SMJC", degree: "12th Grade (HSC)", years: "2022 – 2024", score: "83.33%" },
  { school: "DAV Public School", degree: "10th Grade (CBSE)", years: "2009 – 2022", score: "95.6%" },
];

export const experience = [
  {
    role: "Vice President",
    org: "Synapse AI Club",
    years: "2024 – Present",
    points: [
      "Led AI and technology-driven initiatives, guiding members on solution design and project delivery.",
      "Organised and managed two workshop sessions end to end (Intro to AI & DS, NLP): guest speakers, logistics and communication.",
      "Part of the team behind 9 club events, including AEON 2025, AI Conclave 2026, Prompt to Purpose and Ideas to Innovation.",
      "Produced video editing and content creation to document and promote club projects.",
    ],
  },
  {
    role: "Non-Tech Head",
    org: "IRIS, MIT-WPU",
    years: "2024 – Present",
    points: [
      "Lead non-technical operations: logistics, outreach and cross-team communication for events.",
      "Support planning and execution, ensuring smooth collaboration between technical and non-technical teams.",
    ],
  },
];
