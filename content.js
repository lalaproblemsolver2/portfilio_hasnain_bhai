/* ============================================================
   All hero copy lives here — edit text freely without touching
   animation logic (script.js) or presentation (styles.css).
   index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "Hasnain",
  role: ["Aesthetic", "Software Developer"],
  meta: ["Web", "App", "Code"],

  notification: {
    name: "Hasnain",
    time: "now",
    lead: "Aesthetic",
    message: "software developer — building clean code and digital solutions.",
  },

  section2: {
    sideLeft: ["Hasnain Yaqoob", "Solutions."],
    sideRight: ["Passion.", "Creativity."],
  },

  /* My Works — add projects here (image + metadata per card); the Works
     carousel builds itself from this array. `teaser: true` cards are
     decorative edge slices and never become the active project. */
  works: {
    brand: "MyCreativeHunch Studio",
    projects: [
      { key: "tourtripx",  name: "TourtripX",  img: "assets/work-tourtripx.jpg",  w: 498, h: 405,
        cat: "SaaS · Travel", year: "2024", accent: "#4da3ff",
        title: "Smart Flight Booking CRM built for Flight Management" },
      { key: "classlogic", name: "ClassLogic", img: "assets/work-classlogic.jpg", w: 383, h: 363,
        cat: "EdTech · SaaS", year: "2024", accent: "#a8e063",
        title: "Digital Learning Platform built for Seamless Education" },
      { key: "couchops",   name: "Couchops",   img: "assets/work-couchops.jpg",   w: 186, h: 362,
        cat: "SaaS · Platform", year: "2023", accent: "#f28b3c",
        title: "The #1 Digital platform trusted by Consultants" },
    ],
  },

  /* ---- BIG ROBOT section (the original large Nexbot experience) ----
     All copy is editable here; the 3D and the scroll journey never
     touch these strings. */
  bigRobot: {
    labels: { left: "Computer Science Student", right: "Software · Creative Technology" },
    eyebrow: "( 05 · The Mind )",
    titleLines: ["I build software that", "looks as good as it works."],
    description: "I like understanding what’s underneath the interface — then finding a better way to build it.",
    hint: "Scroll to move through the ideas.",

    /* the panels that travel through the 3D space — add or edit freely */
    techIdeas: [
      {
        no: "01",
        title: "AI & Intelligent Systems",
        description: "Exploring how software can become more adaptive, useful and intelligent.",
        tags: ["AI", "Machine Learning", "LLMs", "Automation", "Experimentation"],
      },
      {
        no: "02",
        title: "Software & Systems",
        description: "Understanding how individual pieces become systems that actually work together.",
        tags: ["Algorithms", "Architecture", "APIs", "Databases", "Web", "System Design"],
      },
    ],

  },

  /* ---- EDITORIAL / SKILLS section (scroll-choreographed) ----
     The statement enters from the left, the skills from the right,
     one item at a time. Copy only — the timeline lives in script.js. */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Code is my medium.", "Curiosity is my engine."],
    note: "I’m interested in what happens when technical thinking meets good design.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "Languages", items: ["JavaScript", "Python", "Java", "C / C++"] },
        { name: "Web", items: ["HTML", "CSS", "React", "Next.js", "Responsive Design"] },
        { name: "Tools", items: ["Git", "GitHub", "Figma", "VS Code"] },
      ],
    },
    mindset: {
      title: "Learn → Build → Break → Improve",
      lines: [
        "I learn by building.",
        "I build by experimenting.",
        "I experiment by breaking things.",
        "And I improve by understanding why they broke.",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      items: [
        "Building better web experiences",
        "Learning system design",
        "Experimenting with AI",
        "Understanding software architecture",
        "Creating interactive interfaces",
      ],
    },
    ending: { lines: ["Still learning.", "Still building.", "Still curious."], note: "And probably always will be." },
  },

  /* ---- SMALL ROBOT section (its own minimal chapter) ---- */
  smallRobot: {
    eyebrow: "( 06 · Still Curious )",
    titleLines: ["Always looking", "for the next thing."],
    description: "A small machine, quietly paying attention — the way I try to.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER ----
     Edit freely. `social` is empty on purpose: add entries like
     { label: "GitHub", href: "https://github.com/..." } and they
     appear automatically. Remove `email` if you would rather not
     publish an address. */
  footer: {
    eyebrow: "( 07 \u00b7 Contact )",
    headline: ["Let\u2019s build", "something good."],
    line: "Open to freelance work and interesting problems. Let’s create digital solutions together.",
    email: "hasnainyaqoob@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Home", href: "#top" },
          { label: "About", href: "#section-03" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "More",
        items: [
          { label: "How I think", href: "#method" },
          { label: "What I work with", href: "#method" },
          { label: "Currently exploring", href: "#method" },
          { label: "Still curious", href: "#curious" },
        ],
      },
    ],
    social: [],
    legal: "\u00a9 2026 Hasnain Yaqoob",
    note: "Built with code and curiosity.",
    backToTop: "Back to top",
  },

  /* About Me chapter — replace these placeholder strings with the final copy. */
  about: {
    boxes: {
      who:   { title: "Who I Am",   sub: "Gireesh — aesthetic software developer." },
      what:  { title: "What I Do",  sub: "Web · App · Code" },
      think: { title: "How I Think", sub: "Idea · Design · Develop · Deploy · Impact" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Gireesh",
        text: "Aesthetic software developer — building clean code and digital solutions.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "Code Into Solutions.",
        text: "Where code meets creative thinking — web, apps, systems, APIs, AI and automation. Built with passion, driven by creativity.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Idea to Impact",
        text: "Idea · Design · Develop · Deploy · Impact.",
      },
    },
  },
};
