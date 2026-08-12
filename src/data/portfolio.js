/**
 * ============================================================================
 *  ⬇⬇⬇  EDIT THIS FILE — IT IS THE ONLY PLACE YOUR CONTENT LIVES  ⬇⬇⬇
 * ============================================================================
 *  Populated from Mahaz Ahmad's Europass CV.
 *
 *  Deliberately NOT included (never put these on a public website):
 *    · Passport number and CNIC / national ID number
 *    · Date of birth
 *    · Full home street address — only the city is shown
 *
 *  Anything still marked "TODO" below is something the CV did not contain.
 *  Search this file for "TODO" to find them all.
 *
 *  Icon names come from Bootstrap Icons: https://icons.getbootstrap.com
 *  (use the name without the "bi-" prefix, e.g. "github", "envelope").
 * ============================================================================
 */

/* ---------------------------------------------------------------- PROFILE */
export const profile = {
  name: 'Mahaz Ahmad',
  // Shown under your name in the hero, cycled through by the typing effect.
  roles: [
    'Front-End Web Developer',
    'Java Programmer',
    'IT & Database Enthusiast',
    'BS ICT Student',
  ],
  tagline:
    'Motivated and detail-oriented IT enthusiast building for the web with Java, HTML and CSS. I enjoy turning technical knowledge into practical solutions — and learning something new with every project.',
  location: 'Abbottabad, Pakistan',
  email: 'akmseven143@gmail.com',
  phone: '+92 349 826 0256',
  // Your photo, in public/profile.jpg. Set to null to fall back to the
  // generated "MA" initials avatar instead.
  photo: '/profile.jpg',
  // Your full Europass CV lives at public/cv.pdf. To update it, overwrite that file.
  cv: '/cv.pdf',
  // The filename the visitor's browser saves it as.
  cvFileName: 'Mahaz-Ahmad-CV.pdf',
  // The one-page resume page (src/components/ResumePage.jsx). Print it to PDF.
  resume: '/resume.html',
  // TODO: once the site is deployed, put the live URL here — it is printed on
  // the resume so anyone holding a paper copy can find the full portfolio.
  website: null, // e.g. 'mahazahmad.netlify.app'
  available: true, // shows the "Available for work" pill in the hero
}

/* ---------------------------------------------------------------- SOCIALS */
export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/mahazahmad-ai' },
  // TODO: add LinkedIn once you have a profile.
  // { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/YOUR-NAME' },
  { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/923498260256' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/_.mahazz' },
  { name: 'Email', icon: 'envelope-fill', url: 'mailto:akmseven143@gmail.com' },
]

/* ------------------------------------------------------------------ ABOUT */
export const about = {
  heading: 'A little about me',
  // Each string becomes its own paragraph.
  paragraphs: [
    "I'm Mahaz Ahmad, an IT student and developer from Mansehra, Pakistan, currently reading for a BS in Information and Communication Technologies at COMSATS University Islamabad, Abbottabad Campus.",
    'I hold a Diploma in Information Technology, which I completed with an A grade, and a science background from HSSC. That mix gave me a foundation in Java programming, front-end web development, database management and the Microsoft Office suite — plus the habit of working carefully and methodically.',
    'I like problems where technical knowledge meets something practical: a page that has to load fast, a system that has to keep running, a database that has to stay tidy. Outside of study I volunteer with youth development programmes and play competitive cricket.',
  ],
  // Small stat cards next to the bio.
  stats: [
    { value: '6', label: 'Projects built' },
    { value: 'A', label: 'DIT final grade' },
    { value: '4', label: 'Qualifications earned' },
    { value: '4', label: 'Languages spoken' },
  ],
  // Quick facts list.
  facts: [
    { icon: 'geo-alt-fill', label: 'Based in', value: 'Abbottabad, Pakistan' },
    { icon: 'mortarboard-fill', label: 'Studying', value: 'BS ICT — COMSATS' },
    { icon: 'patch-check-fill', label: 'Diploma', value: 'DIT — Grade A' },
    { icon: 'translate', label: 'Languages', value: 'Urdu, English, Punjabi' },
    { icon: 'briefcase-fill', label: 'Freelance', value: 'Available' },
  ],
}

/* Short professional summary used at the top of the printable resume.
   Keep it to 2–3 lines — a resume has no room for more. */
export const resumeSummary =
  'BS ICT student with a Diploma in Information Technology (Grade A) and a year of professional experience in web development and IT support. Comfortable implementing data structures from scratch in Java — linked lists, binary trees, stacks and queues — and building responsive front-ends with HTML, CSS and React. Looking for a junior developer role or internship.'

/* ----------------------------------------------------------------- SKILLS */
/* `level` is a percentage (0–100) used for the progress bar.               */
/* TODO: these percentages are my estimate from your CV — nudge them to     */
/* match how confident you actually feel with each one.                     */
export const skillGroups = [
  {
    title: 'Programming',
    icon: 'code-slash',
    skills: [
      { name: 'Java', level: 82 },
      { name: 'Data structures', level: 80 },
      { name: 'Algorithms', level: 75 },
      { name: 'Object-oriented design', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    icon: 'window-stack',
    skills: [
      { name: 'HTML5 & CSS3', level: 80 },
      { name: 'Front-end website design', level: 75 },
      { name: 'React', level: 55 },
      { name: 'Responsive layout', level: 72 },
    ],
  },
  {
    title: 'Data & Systems',
    icon: 'database-fill',
    skills: [
      { name: 'Database management', level: 75 },
      { name: 'FileMaker', level: 70 },
      { name: 'Data handling', level: 72 },
      { name: 'PC troubleshooting & maintenance', level: 80 },
    ],
  },
  {
    title: 'Office & Multimedia',
    icon: 'kanban-fill',
    skills: [
      { name: 'Microsoft Word', level: 88 },
      { name: 'Microsoft Excel', level: 82 },
      { name: 'Microsoft PowerPoint', level: 85 },
      { name: 'Video editing & multimedia', level: 70 },
    ],
  },
]

/* Chips shown above the skill cards — a quick scannable list. */
export const skillTags = [
  'Java',
  'Data Structures',
  'Algorithms',
  'Linked Lists',
  'Binary Trees',
  'Stacks & Queues',
  'HTML',
  'CSS',
  'React',
  'Front-End Design',
  'Database Management',
  'FileMaker',
  'MS Word',
  'MS Excel',
  'MS PowerPoint',
  'MS Access',
  'Video Editing',
  'Troubleshooting',
  'System Maintenance',
  'Technical Support',
]

/* Language proficiency, shown as a card at the bottom of the Skills section.
   CEFR: A1/A2 basic · B1/B2 independent · C1/C2 proficient. */
export const languages = [
  { name: 'Urdu', level: 'Mother tongue', percent: 100 },
  { name: 'English', level: 'B1 – B2 · Independent', percent: 70 },
  { name: 'Punjabi', level: 'A1 – B2 · Independent', percent: 55 },
  { name: 'Turkish', level: 'A1 · Basic', percent: 20 },
]

/* -------------------------------------------------------------- EDUCATION */
/* Most recent first. */
export const education = [
  {
    degree: 'BS in Information & Communication Technologies',
    school: 'COMSATS University Islamabad, Abbottabad Campus',
    location: 'Abbottabad, Pakistan',
    period: '2024 — Present',
    grade: 'EQF Level 6',
    details:
      'Currently pursuing a Bachelor of Science in Information and Communication Technologies, deepening my foundation in programming, systems and modern software practice.',
  },
  {
    degree: 'Diploma in Information Technology (DIT)',
    school: 'The Global Wisdom',
    location: 'Mansehra, Pakistan',
    period: 'Jun 2024 — Jun 2025',
    grade: 'Grade A',
    details:
      'Computer fundamentals and IT concepts, MS Office (Word, Excel, PowerPoint, Access), basic programming and software development, web design fundamentals (HTML, CSS), database management and data handling, and the installation, troubleshooting and maintenance of computer systems.',
  },
  {
    degree: 'Higher Secondary School Certificate (HSSC) — Science',
    school: 'The Peace Group of School and College',
    location: 'Mansehra, Pakistan',
    period: 'Sep 2021 — Sep 2023',
    grade: 'EQF Level 4',
    details:
      'Scientific principles across physics, chemistry and biology, laboratory techniques and experimental procedure, plus data analysis, observation and the interpretation of scientific results.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'Iqra Collegiate School and College',
    location: 'Mansehra, Pakistan',
    period: 'Sep 2019 — Sep 2021',
    grade: 'EQF Level 3',
    details:
      'Foundational study in mathematics, general science and social studies, alongside early computer literacy and the analytical thinking and communication skills I still lean on today.',
  },
]

/* ------------------------------------------------------------- EXPERIENCE */
export const experience = [
  {
    role: 'Software Engineer',
    // TODO: your CV lists your own name in the employer field (a common
    // Europass slip). Replace this with the actual company name.
    company: 'Software Engineering Department — Mandian',
    type: 'Full-time',
    location: 'Abbottabad, Pakistan',
    period: 'Oct 2025 — Jan 2026',
    description:
      'Worked across web development and IT operations in the information and communication sector.',
    highlights: [
      'Developed and maintained web applications.',
      'Maintained and troubleshot computer systems.',
      'Coordinated with suppliers and technical partners.',
      'Provided technical support and day-to-day system management.',
    ],
    stack: ['HTML', 'CSS', 'Java', 'System Administration'],
  },
  {
    role: 'Volunteer — Youth Development',
    company: 'Youth Development Programme, Abbottabad',
    type: 'Volunteering',
    location: 'Abbottabad, Pakistan',
    period: 'Feb 2025 — Jan 2026',
    description:
      'Supported educational, social and skill-building activities for young people over a full year.',
    highlights: [
      'Helped organise community events and programme sessions.',
      'Mentored participants and encouraged personal growth.',
      'Promoted community engagement among young individuals.',
    ],
    stack: ['Mentoring', 'Event Organisation', 'Communication'],
  },
]

/* --------------------------------------------------------------- PROJECTS */
/*  These are written from the real Java projects in your NetBeansProjects
 *  folder, plus this website. Nothing here is invented.
 *
 *  ⚠ TODO — every `code` link is null because none of these are on GitHub yet.
 *  Cards without links still look fine, but a recruiter cannot read the code.
 *  Push each project to GitHub and paste the URL into `code` — that single
 *  step does more for this portfolio than any other change you can make.
 *
 *  `featured: true` gives the project a wider card at the top of the grid.
 *  Set `image` to a path in /public (e.g. '/projects/timber.png'), or leave
 *  it null to fall back to a generated gradient cover. Screenshots of the
 *  console output would work well here.
 */
export const projects = [
  {
    title: 'Timber Inventory Management System',
    description:
      'A console-based inventory system for a timber yard, built on a hand-written singly linked list rather than Java collections. Ten-option menu covering full CRUD, stock records filtered by zone and kind, low-stock analysis, sales updates that decrement quantities, generated inventory reports, and backup/restore to a text file. Rejects duplicate timber IDs on insert.',
    image: null,
    tags: ['Java', 'Data Structures', 'Linked List', 'File I/O'],
    demo: null,
    code: null,
    featured: true,
    year: '2025',
  },
  {
    title: 'Huffman Coding Compression Tool',
    description:
      'An implementation of Huffman encoding from scratch: builds a frequency table from the input text, assembles the optimal prefix tree using a priority queue, then walks it to generate per-character bit codes. Encodes messages to a binary string and decodes them back by traversing the tree bit by bit. Handles the single-character edge case that breaks naive implementations.',
    image: null,
    tags: ['Java', 'Algorithms', 'Binary Tree'],
    demo: null,
    code: null,
    featured: true,
    year: '2025',
  },
  {
    title: 'Binary Search Tree Explorer',
    description:
      'A menu-driven BST supporting recursive insert, search and delete — including the hard delete case, where a node with two children is replaced by its in-order successor found via minimum-value descent. Written to make the tree operations legible rather than clever.',
    image: null,
    tags: ['Java', 'Data Structures', 'Binary Tree'],
    demo: null,
    code: null,
    featured: false,
    year: '2025',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This site. Built with React and Vite, styled with Bootstrap 5 and custom CSS on a token-driven dark theme. Single-source content architecture, scroll animations via IntersectionObserver with no animation library, scroll-spy navigation, and a separate print-first resume page generated from the same data.',
    image: null,
    tags: ['React', 'Vite', 'Bootstrap', 'CSS'],
    // TODO: paste your live URL here once the site is deployed.
    demo: null,
    code: 'https://github.com/mahazahmad-ai/Portfolio',
    featured: false,
    year: '2026',
  },
  {
    title: 'Queue & Deque Operations Suite',
    description:
      'A set of queue structures implemented by hand: an array-backed queue, a circular queue that reclaims space by wrapping its indices, and an output-restricted deque built on a linked node chain. Each has its own menu driver for testing enqueue, dequeue and overflow behaviour.',
    image: null,
    tags: ['Java', 'Data Structures'],
    demo: null,
    code: null,
    featured: false,
    year: '2025',
  },
  {
    title: 'Postfix Expression Evaluator',
    description:
      'A stack-based evaluator that reads a postfix expression left to right, pushing operands and applying operators to the two most recent values. A compact demonstration of why stacks and postfix notation belong together — no parentheses or precedence rules needed.',
    image: null,
    tags: ['Java', 'Algorithms', 'Stack'],
    demo: null,
    code: null,
    featured: false,
    year: '2025',
  },
]

/* Filter buttons for the projects grid. "All" is added automatically.
   Each entry must match a tag used above, or the button is hidden. */
export const projectFilters = ['Java', 'Data Structures', 'Algorithms', 'React']

/* ----------------------------------------------------------- CERTIFICATES */
export const certificates = [
  {
    title: 'Diploma in Information Technology (DIT)',
    issuer: 'The Global Wisdom, Mansehra',
    date: 'Jun 2025',
    credentialId: 'Final grade: A · NQF Level 4',
    url: null,
    icon: 'patch-check-fill',
  },
  {
    title: 'Best Player — Tug of War',
    issuer: 'The Peace College, Mansehra',
    date: 'Feb 2026',
    credentialId: null,
    url: null,
    icon: 'trophy-fill',
  },
  {
    title: 'Best Player — Cricket',
    issuer: 'The Peace College, Mansehra',
    date: 'Feb 2026',
    credentialId: null,
    url: null,
    icon: 'trophy-fill',
  },
]

/* ---------------------------------------------------------------- CONTACT */
export const contact = {
  heading: "Let's work together",
  blurb:
    "I'm open to internships, junior developer roles and freelance work. Send me a message and I'll get back to you as soon as I can.",
  // The form opens the visitor's mail client addressed to profile.email.
  // Swap in EmailJS/Formspree later if you want real submissions.
  methods: [
    {
      icon: 'envelope-fill',
      label: 'Email',
      value: 'akmseven143@gmail.com',
      href: 'mailto:akmseven143@gmail.com',
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: '+92 349 826 0256',
      href: 'https://wa.me/923498260256',
    },
    {
      icon: 'telephone-fill',
      label: 'Phone',
      value: '+92 329 992 1013',
      href: 'tel:+923299921013',
    },
    // Only the city — your CV's full street address is intentionally omitted.
    { icon: 'geo-alt-fill', label: 'Location', value: 'Abbottabad, Pakistan', href: null },
  ],
}

/* ------------------------------------------------------------ NAVIGATION */
/* `id` must match the section element id used in App.jsx.                 */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]
