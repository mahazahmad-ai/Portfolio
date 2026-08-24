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
  // NOTE: the Europass CV PDF is deliberately NOT published on this site.
  // It contains passport number, CNIC, date of birth and home address —
  // none of which belong on a public page. Send it privately to employers
  // who ask for it. The resume page below carries everything a recruiter
  // actually needs, built from safe data only.
  //
  // The one-page resume page (src/components/ResumePage.jsx). Print it to PDF.
  resume: '/resume.html',
  // Printed on the resume so anyone with a paper copy can find the site.
  website: 'mahazahmad-ai.github.io/Portfolio',
  available: true, // shows the "Available for work" pill in the hero
}

/* ---------------------------------------------------------------- SOCIALS */
export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/mahazahmad-ai' },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/mahaz-ahmad-39b3b63a6/',
  },
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
    { value: 'A', label: 'DIT final grade' },
    { value: '4', label: 'Qualifications earned' },
    { value: '4', label: 'Languages spoken' },
    { value: '1yr', label: 'Volunteering' },
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
 *  The Java projects still have no `code` link because they are not on GitHub
 *  yet. Cards without links look fine, but a recruiter cannot read the code —
 *  pushing each one and pasting the URL into `code` does more for this
 *  portfolio than any other change you can make.
 *
 *  `featured: true` gives the project a wider card at the top of the grid.
 *  Set `image` to a path in /public (e.g. '/projects/timber.png'), or leave
 *  it null to fall back to a generated gradient cover. Screenshots of the
 *  console output would work well here.
 */
export const projects = [
  {
    title: 'Booking System for Salons & Clinics',
    description:
      'A guest booking platform where customers pick a treatment, see only genuinely free times, and confirm without creating an account — plus an admin area for running the schedule. Availability is derived on demand from staff hours minus time off minus existing bookings, never stored, so cancelling frees a slot with no cleanup job. Two customers clicking the same slot cannot both get it: a Postgres exclusion constraint refuses the second write, because checking in application code cannot close the gap between the check and the insert. 117 unit tests cover the availability engine including daylight-saving transitions, plus 92 integration checks run against a live database.',
    image: null,
    tags: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind', 'Auth.js'],
    demo: 'https://booking-system-opal-theta.vercel.app',
    code: 'https://github.com/mahazahmad-ai/booking-system',
    featured: true,
    year: '2026',
  },
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
    title: 'Personal Portfolio Website',
    description:
      'This site. Built with React and Vite, styled with Bootstrap 5 and custom CSS on a token-driven dark theme. Single-source content architecture, scroll animations via IntersectionObserver with no animation library, scroll-spy navigation, and a separate print-first resume page generated from the same data.',
    image: null,
    tags: ['React', 'Vite', 'Bootstrap', 'CSS'],
    // TODO: paste your live URL here once the site is deployed.
    demo: null,
    code: 'https://github.com/mahazahmad-ai/Portfolio',
    featured: true,
    year: '2026',
  },
]

/* Filter buttons for the projects grid. "All" is added automatically.
   Each entry must match a tag used above, or the button is hidden.
   Left empty because two projects do not need filtering — the bar hides
   itself. Add entries here if you add more projects later. */
export const projectFilters = []

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
