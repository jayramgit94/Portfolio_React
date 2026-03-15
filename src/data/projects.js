// Sign Language Project Images
import signLang1 from "../assets/sign_lang/sign_lang1.webp";
import signLang2 from "../assets/sign_lang/sign_lang2.webp";
import signLang3 from "../assets/sign_lang/sign_lang3.webp";
import signLang4 from "../assets/sign_lang/sign_lang4.webp";
import signLang5 from "../assets/sign_lang/sign_lang5.webp";
import signLang6 from "../assets/sign_lang/sign_lang6.webp";

// Resume Analyzer Project Images
import resume1 from "../assets/resume_analyzer/resum1.webp";
import resume2 from "../assets/resume_analyzer/resum2.webp";
import resume3 from "../assets/resume_analyzer/resume3.webp";
import resume4 from "../assets/resume_analyzer/resume4.webp";

// GitHub Repo Analyzer Project Images
import repoAnalyzer1 from "../assets/repoanalzer/repoanalyzer1.webp";
import repoAnalyzer3 from "../assets/repoanalzer/repoanalyzer3.webp";
import repoAnalyzer4 from "../assets/repoanalzer/repoanalyzer4.webp";
import repoAnalyzer5 from "../assets/repoanalzer/repoanalyzer5.webp";
import repoAnalyzer2 from "../assets/repoanalzer/repoanalzyer2.webp";

// Certificate Generator Project Images
import certi1 from "../assets/certi_generation/certi1.webp";
import certi2 from "../assets/certi_generation/certi2.webp";
import certi3 from "../assets/certi_generation/certi3.webp";
import certi6 from "../assets/certi_generation/certi6.webp";
import certi7 from "../assets/certi_generation/certi7.webp";
import certi4 from "../assets/certi_generation/csrti4.webp";
import certi5 from "../assets/certi_generation/csrti5.webp";

// Airbnb Clone Project Images
import airbnb2 from "../assets/airbnb/airbnb2.webp";
import airbnb3 from "../assets/airbnb/airbnb3.webp";
import airbnb4 from "../assets/airbnb/airbnb4.webp";
import airbnb5 from "../assets/airbnb/airbnb5.webp";
import airbnb1 from "../assets/airbnb/aribnb1.webp";

const projects = [
  {
    id: "sign-language-detection",
    title: "Real-Time Sign Language Detection",
    description:
      "AI-powered web app that detects sign language gestures via webcam and translates them to text in real-time — built with a custom-trained CNN achieving 93% accuracy.",
    image: signLang1,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    role: "Full Stack Developer · ML Engineer",
    timeline: "8 weeks · 2025",
    tools: ["React", "Python", "TensorFlow", "OpenCV", "WebSocket", "FastAPI"],
    liveLink: "https://sign-lang-01.vercel.app",
    githubLink: "https://github.com/jayramgit94/sign_lang_01",
    highlights: [
      "93% gesture recognition accuracy on test set",
      "Sub-200ms inference latency via WebSocket pipeline",
      "Trained on 10,000+ augmented sign language images",
      "Accessible UI with keyboard navigation support",
    ],
    longDescription:
      "This project bridges the communication gap between sign language users and non-signers. I trained a Convolutional Neural Network from scratch on a public ASL dataset (augmented to 10,000+ images) and built a full pipeline from webcam capture to real-time prediction with sub-200ms latency.",
    objectives: [
      {
        title: "Break communication barriers",
        description:
          "Enable seamless, real-time conversation between sign language users and those who don't understand sign language.",
      },
      {
        title: "Sub-second inference",
        description:
          "Achieve under 200ms round-trip latency to maintain natural conversation flow.",
      },
      {
        title: "High accuracy recognition",
        description:
          "Train models to achieve 90%+ accuracy across various lighting conditions and hand positions.",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        title: "The Communication Challenge",
        subtitle: "Why current solutions fall short",
        content: [
          "Over 70 million deaf people worldwide rely on sign language, yet the vast majority of the population cannot understand it. This creates a significant barrier in education, healthcare, and daily interactions.",
          "Human interpreters are expensive (₹1,500–3,000/hr in India) and not available on demand. Existing mobile apps require manual text input, defeating the purpose of visual communication.",
        ],
        points: [
          "Over 70 million deaf people worldwide use sign language",
          "Human interpreters are costly and not always available",
          "No real-time, free, web-based solution existed",
        ],
        image: signLang2,
        caption: "Understanding the scope of the communication barrier.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "AI-Powered Real-Time Translation",
        content: [
          "I built a web application that captures webcam video, sends frames via WebSocket to a FastAPI backend, runs inference through a TensorFlow CNN, and returns predictions — all in under 200ms.",
          "I chose FastAPI over Flask because it natively supports async WebSocket connections, which was critical for real-time frame streaming without blocking.",
        ],
        points: [
          "Webcam → OpenCV preprocessing → CNN inference → text output",
          "WebSocket for persistent, low-latency bidirectional communication",
          "FastAPI chosen for native async + WebSocket support",
          "React frontend with accessible, minimal UI",
        ],
        image: signLang3,
        caption:
          "The application detecting sign language gestures in real-time.",
      },
      {
        id: "technical",
        label: "Technical",
        title: "Architecture & Decisions",
        content: [
          "The CNN model has 4 convolutional layers with batch normalization and dropout (0.25), trained for 30 epochs on augmented data. I used data augmentation (rotation, flip, brightness) to reach 10,000+ training samples from a base ASL alphabet dataset.",
          "I chose WebSocket over HTTP polling because sign language requires continuous frame streaming — HTTP would add 50-100ms overhead per request. The WebSocket connection stays open and streams frames at ~15 FPS.",
        ],
        points: [
          "4-layer CNN with batch normalization and 0.25 dropout",
          "Data augmentation: rotation ±15°, horizontal flip, brightness jitter",
          "WebSocket streaming at ~15 FPS vs. HTTP polling latency",
          "OpenCV grayscale + resize preprocessing for consistent input",
        ],
        image: signLang4,
        caption:
          "Technical architecture: React → WebSocket → FastAPI → TensorFlow.",
      },
      {
        id: "features",
        label: "Features",
        title: "Key Features",
        content: [
          "The application supports A-Z alphabet recognition with a confidence threshold slider, gesture history log, and word formation from sequential gestures.",
        ],
        points: [
          "Alphabet recognition (A-Z) with 93% accuracy",
          "Word formation from gesture sequences",
          "Adjustable confidence threshold (default 80%)",
          "History log of detected gestures",
        ],
        image: signLang5,
        caption: "Feature showcase of the sign language application.",
      },
      {
        id: "impact",
        label: "Impact & Reflection",
        title: "Results & What I'd Improve",
        content: [
          "The model achieves 93% accuracy on the test set and handles well-lit environments reliably. The project is open-source and has been shared with accessibility communities for feedback.",
          "If I were rebuilding this, I would replace the CNN with a MediaPipe hand landmark model for better generalization across skin tones and lighting. I'd also add WebRTC for true peer-to-peer video streaming to reduce server load, and implement a transformer-based sequence model for full word/sentence detection instead of individual letters.",
        ],
        points: [
          "93% test accuracy across 26 ASL alphabet gestures",
          "Would upgrade to MediaPipe landmarks for better generalization",
          "Would add WebRTC for peer-to-peer, lower latency",
          "Would implement sequence model for word-level detection",
        ],
        image: signLang6,
        caption: "Results and future improvement roadmap.",
      },
    ],
  },

  {
    id: "certificate-generator",
    title: "Certificate Generator",
    description:
      "Automated certificate generation from custom PDF templates with visual field mapping, CSV bulk import, and instant preview — used for real college events.",
    image: certi1,
    gradient: "linear-gradient(135deg, #f5af19 0%, #f12711 50%, #c31432 100%)",
    role: "Full Stack Developer",
    timeline: "4 weeks · 2025",
    tools: ["React", "Node.js", "PDF-lib", "Canvas API", "Express", "MongoDB"],
    liveLink: "https://certificate-generator-via-pdf.vercel.app",
    githubLink: "https://github.com/jayramgit94/Certificate_generator",
    highlights: [
      "Used for 2 real college events, generating 200+ certificates",
      "Bulk generation from CSV — 100 certificates in under 10 seconds",
      "Visual drag-and-drop field positioning on PDF templates",
      "Zero formatting errors vs. manual creation",
    ],
    longDescription:
      "Organizations waste hours manually creating certificates for events. This tool automates the entire process: upload a PDF template, visually position fields, import names from CSV, preview results, and bulk-generate — all in seconds.",
    objectives: [
      {
        title: "Automate certificate creation",
        description:
          "Eliminate manual certificate creation that takes hours per event.",
      },
      {
        title: "Support any template",
        description:
          "Allow organizations to use their own branded PDF certificate designs.",
      },
      {
        title: "Bulk generation",
        description:
          "Generate hundreds of personalized certificates from a single CSV upload.",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        title: "Manual Certificate Creation",
        subtitle: "A time-consuming, error-prone process",
        content: [
          "For college tech fests and workshops, organizers typically spend 4-6 hours manually editing certificates in Canva or Photoshop — one by one. Typos are common, formatting drifts, and distribution gets delayed by days.",
          "I experienced this firsthand when our department needed 150+ certificates for a workshop and the process took an entire day.",
        ],
        points: [
          "4-6 hours of manual work per event",
          "High risk of typos and inconsistent formatting",
          "Distribution delays of days",
          "No reusable system for future events",
        ],
        image: certi1,
        caption: "The challenge of manual certificate generation.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "Automated Generation Pipeline",
        content: [
          "Upload any PDF template. Drag and drop to position name/date/course fields visually on the template. Upload a CSV with participant data. Click generate — all certificates are created in seconds.",
          "I chose PDF-lib over alternatives like jsPDF because PDF-lib can modify existing PDFs (preserving the original template design) rather than generating from scratch. Canvas API handles the visual preview layer.",
        ],
        points: [
          "PDF-lib for modifying existing templates (not generating from scratch)",
          "Canvas API for real-time visual field positioning",
          "CSV parsing with automatic column detection",
          "Express backend with MongoDB for template storage",
        ],
        image: certi2,
        caption: "The streamlined certificate generation workflow.",
      },
      {
        id: "template",
        label: "Templates",
        title: "Custom Template Support",
        content: [
          "The system accepts any PDF template, preserving exact branding, colors, and layout. Field positions are mapped through an interactive visual editor — no coordinates needed.",
        ],
        points: [
          "Any PDF template accepted and preserved",
          "Visual drag-and-drop field mapping",
          "Custom font, size, and color per field",
          "Template saved for reuse across events",
        ],
        image: certi3,
        caption: "Template customization and field mapping.",
      },
      {
        id: "preview",
        label: "Preview",
        title: "Real-Time Preview",
        content: [
          "Before generating all certificates, preview exactly how they'll look with actual data. Adjust field positions, fonts, and sizes until everything is pixel-perfect.",
        ],
        points: [
          "Instant preview with real participant names",
          "Drag-to-reposition fields on the template",
          "Font family, size, and color controls",
          "WYSIWYG — what you see is what generates",
        ],
        image: certi4,
        caption: "Real-time preview of certificate output.",
      },
      {
        id: "bulk",
        label: "Bulk",
        title: "Bulk Generation",
        content: [
          "Upload a CSV file with participant names and details. The system maps columns automatically and generates all certificates in seconds — 100 certificates in under 10 seconds.",
        ],
        points: [
          "CSV file with automatic column detection",
          "100 certificates generated in ~8 seconds",
          "Progress bar with real-time status",
          "Batch ZIP download with all certificates",
        ],
        image: certi5,
        caption: "Bulk certificate generation from CSV data.",
      },
      {
        id: "download",
        label: "Download",
        title: "Easy Distribution",
        content: [
          "Download individual certificates or get all of them in a ZIP file. Each certificate is named with the recipient's name for easy sorting.",
        ],
        points: [
          "Individual PDF download",
          "Bulk ZIP download (all certificates)",
          "Files named by recipient for easy sorting",
          "Shareable download links",
        ],
        image: certi6,
        caption: "Multiple download and distribution options.",
      },
      {
        id: "impact",
        label: "Impact & Reflection",
        title: "Real-World Usage & Improvements",
        content: [
          "The tool was used for 2 college events — a tech workshop (150 certificates) and a coding competition (80 certificates). What previously took a full day was done in under 15 minutes including template setup.",
          "If rebuilding, I'd add email integration to directly send certificates to participants from the app, implement digital signatures for authenticity verification, and add a public verification URL per certificate.",
        ],
        points: [
          "200+ certificates generated for real college events",
          "6+ hours saved per event vs. manual creation",
          "Would add email integration for direct distribution",
          "Would add digital signatures and verification URLs",
        ],
        image: certi7,
        caption: "Real-world impact and future improvement plans.",
      },
    ],
  },

  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "Upload a resume and paste a job description — the app uses Groq AI to score compatibility, identify missing keywords, and suggest specific improvements for ATS optimization.",
    image: resume1,
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #a8edea 100%)",
    role: "Full Stack Developer",
    timeline: "6 weeks · 2025",
    tools: ["React", "Python", "FastAPI", "Groq AI", "MongoDB", "Tailwind CSS"],
    liveLink: "https://resume-analyzer-pearl-tau.vercel.app",
    githubLink: "https://github.com/jayramgit94/resume_analyzer",
    highlights: [
      "AI-powered resume scoring against specific job descriptions",
      "Keyword gap analysis with actionable rewrite suggestions",
      "ATS compatibility assessment with formatting checks",
      "Groq AI integration for fast, structured analysis",
    ],
    longDescription:
      "Most job seekers have no objective way to evaluate whether their resume matches a job posting. This tool uses Groq AI to analyze resume content against a target job description — providing a compatibility score, missing keyword analysis, and specific improvement suggestions.",
    objectives: [
      {
        title: "Objective resume evaluation",
        description:
          "Provide data-driven analysis comparing resume content to specific job requirements.",
      },
      {
        title: "Job-specific feedback",
        description:
          "Identify exactly which keywords, skills, and experiences are missing for a target role.",
      },
      {
        title: "Actionable suggestions",
        description:
          "Give specific rewrite suggestions, not generic advice like 'add more keywords'.",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        title: "The Resume Black Hole",
        subtitle: "Why qualified candidates get overlooked",
        content: [
          "Recruiters spend an average of 7 seconds scanning a resume. ATS software filters out candidates before any human sees them. Most applicants have no way to know why they're being rejected.",
          "I built this tool after friends shared resumes that looked good to humans but were getting zero callbacks — the issue was always keyword mismatch and ATS formatting problems.",
        ],
        points: [
          "75% of resumes are filtered out by ATS before human review",
          "Average recruiter scan time: 7 seconds",
          "Most candidates don't know why they're being rejected",
        ],
        image: resume1,
        caption: "Understanding why resumes fail to convert.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "AI-Powered Analysis",
        content: [
          "The user uploads their resume (PDF/text) and pastes the target job description. The app sends both to Groq AI with a structured prompt that asks for: compatibility score, missing keywords, section-by-section analysis, and specific rewrite suggestions.",
          "I chose Groq AI over OpenAI for this project because Groq's inference speed (via LPU) is significantly faster — analysis completes in 2-3 seconds vs. 8-10 seconds with GPT-4, which matters for user experience.",
        ],
        points: [
          "Upload resume + paste job description",
          "Structured AI prompt for consistent, detailed analysis",
          "Groq AI chosen for 3x faster inference vs. GPT-4",
          "MongoDB stores analysis history for comparison",
        ],
        image: resume2,
        caption: "The resume analysis interface showing detailed feedback.",
      },
      {
        id: "features",
        label: "Features",
        title: "Comprehensive Analysis",
        content: [
          "Beyond simple keyword matching, the tool provides a structured breakdown across multiple dimensions — skills alignment, experience relevance, formatting, and ATS readability.",
        ],
        points: [
          "Skills gap analysis with specific missing keywords",
          "Experience relevance scoring per bullet point",
          "ATS formatting compatibility check",
          "Specific rewrite suggestions (not just 'improve this')",
          "Analysis history to track resume iterations",
        ],
        image: resume3,
        caption: "Multi-dimensional analysis for thorough resume evaluation.",
      },
      {
        id: "impact",
        label: "Impact & Reflection",
        title: "Results & What I'd Improve",
        content: [
          "Friends who used the tool and applied the suggestions reported getting more callbacks, though I don't have hard conversion metrics. The structured prompt engineering was the hardest part — getting consistent, actionable output required 15+ iterations on the prompt.",
          "If rebuilding, I'd add PDF parsing on the server side (currently relies on text extraction in browser, which loses formatting), implement a 'before/after' diff view showing exactly what changed, and add a feature to analyze against multiple job descriptions at once.",
        ],
        points: [
          "Structured prompt required 15+ iterations to get consistent output",
          "Would add server-side PDF parsing for better text extraction",
          "Would build a before/after diff view for resume changes",
          "Would add multi-JD comparison feature",
        ],
        image: resume4,
        caption: "Results and planned improvements.",
      },
    ],
  },

  {
    id: "github-repo-analyzer",
    title: "GitHub Repository Analyzer",
    description:
      "Built in a hackathon — analyzes any public GitHub repo for code quality, commit patterns, and contributor activity using the GitHub API and Groq AI, with interactive Chart.js visualizations.",
    image: repoAnalyzer1,
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    role: "Full Stack Developer",
    timeline: "5 weeks · 2025 · Hackathon",
    tools: [
      "React",
      "Node.js",
      "GitHub API",
      "Groq AI",
      "Chart.js",
      "Tailwind CSS",
    ],
    liveLink: "https://git-hub-repo-analyzer-hackthon2025.vercel.app",
    githubLink: "https://github.com/jayramgit94/GitHub_Repo_Analyzer",
    highlights: [
      "Built during a college hackathon (5-week development sprint)",
      "Fetches and aggregates data from GitHub REST API v3",
      "AI-powered code quality assessment via Groq",
      "Interactive Chart.js visualizations with 4 chart types",
    ],
    longDescription:
      "Built for a college hackathon, this tool helps developers understand their repository health at a glance. Enter any public GitHub repo URL — it fetches commits, contributors, languages, and issues from the GitHub API, runs AI analysis via Groq, and presents everything through interactive charts.",
    objectives: [
      {
        title: "Repository health at a glance",
        description:
          "Provide a quick overview of repository activity, quality, and potential issues.",
      },
      {
        title: "AI-powered analysis",
        description:
          "Use Groq AI to analyze repository structure and suggest improvements.",
      },
      {
        title: "Visual data",
        description:
          "Present commit history, contributor activity, and language breakdown through interactive charts.",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        title: "Repository Intelligence",
        subtitle: "Understanding your codebase at a glance",
        content: [
          "Understanding project health is hard when you're looking at raw GitHub data. This tool aggregates commits, issues, PRs, contributors, and language data into a single dashboard with a computed health score.",
          "The Node.js backend handles GitHub API pagination (some repos have thousands of commits) and caches results to stay within rate limits.",
        ],
        points: [
          "Computed repository health score (0-100)",
          "Commit pattern analysis with frequency charts",
          "Issue/PR open-vs-closed ratio tracking",
          "Language breakdown by lines of code",
        ],
        image: repoAnalyzer1,
        caption: "Dashboard showing repository overview and metrics.",
      },
      {
        id: "analysis",
        label: "Analysis",
        title: "AI Code Quality Assessment",
        content: [
          "Groq AI examines the repository's file structure, README quality, test coverage presence, and documentation to generate an intelligent assessment with specific improvement suggestions.",
        ],
        points: [
          "README quality and completeness check",
          "Test file presence detection",
          "Documentation coverage assessment",
          "Specific improvement suggestions",
        ],
        image: repoAnalyzer2,
        caption: "AI-powered analysis results with recommendations.",
      },
      {
        id: "visualizations",
        label: "Visualizations",
        title: "Interactive Charts",
        content: [
          "Chart.js renders 4 interactive chart types — commit frequency timeline (line), language distribution (doughnut), contributor breakdown (bar), and activity heatmap (matrix). All charts are responsive and support hover tooltips.",
        ],
        points: [
          "Commit frequency timeline (line chart)",
          "Language distribution (doughnut chart)",
          "Contributor breakdown (bar chart)",
          "Activity heatmap by day/hour",
        ],
        image: repoAnalyzer3,
        caption: "Interactive visualizations of repository data.",
      },
      {
        id: "contributors",
        label: "Contributors",
        title: "Team Insights",
        content: [
          "Understand who contributes what — the tool breaks down commits, additions, and deletions per contributor with percentage shares.",
        ],
        points: [
          "Per-contributor commit, addition, deletion stats",
          "Contribution percentage breakdown",
          "Active time period analysis",
          "Most active days/hours per contributor",
        ],
        image: repoAnalyzer4,
        caption: "Contributor activity and collaboration insights.",
      },
      {
        id: "impact",
        label: "Impact & Reflection",
        title: "Hackathon Results & What I'd Improve",
        content: [
          "This project was built under hackathon pressure, which forced rapid decision-making. The biggest challenge was handling GitHub API rate limits (60 requests/hr for unauthenticated) — I implemented caching and pagination batching to work within limits.",
          "If rebuilding, I'd add GitHub OAuth to get 5,000 requests/hr instead of 60, implement GraphQL API v4 for more efficient data fetching (fewer requests), and add the ability to compare two repositories side-by-side.",
        ],
        points: [
          "Handled GitHub API rate limits with caching and batching",
          "Would add GitHub OAuth for 5,000 req/hr (vs. 60)",
          "Would migrate to GitHub GraphQL API v4 for efficiency",
          "Would add side-by-side repository comparison",
        ],
        image: repoAnalyzer5,
        caption: "Hackathon project results and improvement ideas.",
      },
    ],
  },

  {
    id: "airbnb-clone",
    title: "Airbnb Clone — Full-Stack Learning Project",
    description:
      "My first major full-stack project — a feature-complete Airbnb clone with auth, listings, bookings, reviews, maps, and image uploads. Built to learn the MERN stack end-to-end.",
    image: airbnb1,
    gradient: "linear-gradient(135deg, #FF385C 0%, #E61E4D 50%, #D70466 100%)",
    role: "Full Stack Developer",
    timeline: "10 weeks · 2024 · Learning Project",
    tools: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Mapbox",
      "Cloudinary",
      "JWT",
    ],
    liveLink: "https://air-bnb-db-project-beta.vercel.app",
    githubLink: "https://github.com/jayramgit94/AirBnb_DB_project",
    highlights: [
      "First full-stack project — learned MERN stack end-to-end",
      "JWT authentication with protected routes and middleware",
      "Mapbox integration with clustered markers",
      "Cloudinary image upload pipeline with optimization",
    ],
    longDescription:
      "This was my first full-stack project, built to learn the complete MERN (MongoDB, Express, React, Node.js) workflow. Rather than following a tutorial step-by-step, I used the Airbnb product as a specification and built each feature from scratch — auth, CRUD listings, reviews, maps, and image uploads.",
    objectives: [
      {
        title: "Learn full-stack end-to-end",
        description:
          "Understand how frontend, backend, and database connect in a real application.",
      },
      {
        title: "Implement real authentication",
        description:
          "Build JWT-based auth with protected routes, not just a login form.",
      },
      {
        title: "Handle complex data relationships",
        description:
          "Design MongoDB schemas for users, listings, bookings, and reviews with proper references.",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        title: "Learning Full-Stack by Building",
        subtitle: "My first end-to-end application",
        content: [
          "Before this project, I had only built isolated frontends or small scripts. I wanted to understand how a real application works — from user signup to database query to rendering the result. I chose Airbnb as the target because it covers every core concept: auth, CRUD, file uploads, maps, and relational data.",
          "The 10-week timeline reflects genuine learning — every feature required researching new concepts, debugging unfamiliar errors, and understanding how the pieces fit together.",
        ],
        points: [
          "First experience connecting React to a Node.js API",
          "Learned REST API design patterns from scratch",
          "Implemented MongoDB schema design with references",
          "Deployed full-stack app for the first time",
        ],
        image: airbnb1,
        caption: "The Airbnb clone homepage with featured listings.",
      },
      {
        id: "listings",
        label: "Listings",
        title: "Property Listings (CRUD)",
        content: [
          "Full CRUD operations for property listings — create, read, update, delete. Each listing includes multiple images (uploaded to Cloudinary), amenities, pricing, and a map location via Mapbox geocoding.",
        ],
        points: [
          "Multi-image upload via Cloudinary with auto-optimization",
          "Mapbox geocoding to convert addresses to coordinates",
          "Server-side validation with Joi schemas",
          "Authorization middleware — only owners can edit/delete",
        ],
        image: airbnb2,
        caption: "Property listing page with details and booking options.",
      },
      {
        id: "maps",
        label: "Maps",
        title: "Interactive Maps",
        content: [
          "Mapbox GL JS renders property locations on an interactive map. I implemented marker clustering to handle large numbers of listings without performance degradation.",
        ],
        points: [
          "Mapbox GL JS with custom styled markers",
          "Clustered markers for performance at scale",
          "Click-to-zoom with property preview popups",
          "Geocoding API for address → coordinate conversion",
        ],
        image: airbnb3,
        caption:
          "Map view showing property locations with interactive markers.",
      },
      {
        id: "auth",
        label: "Auth",
        title: "Authentication & Authorization",
        content: [
          "JWT-based authentication with httpOnly cookies. Protected routes on both frontend (React Router guards) and backend (Express middleware). Role-based authorization — only listing owners can modify their listings.",
        ],
        points: [
          "JWT tokens stored in httpOnly cookies",
          "Express middleware for route protection",
          "React Router guards for frontend auth",
          "Owner-only edit/delete authorization",
        ],
        image: airbnb4,
        caption: "Auth flow with JWT and protected routes.",
      },
      {
        id: "reflection",
        label: "Reflection",
        title: "What This Project Taught Me",
        content: [
          "This was the project that turned me from 'someone who watches tutorials' into 'someone who builds things.' The hardest parts weren't the features themselves — they were debugging CORS errors at 2 AM, figuring out why Cloudinary uploads failed silently, and understanding why MongoDB references need to be populated.",
          "Looking back, I'd restructure the code with a proper service layer (currently routes contain business logic), add input sanitization against NoSQL injection, implement proper error boundaries in React, and write API tests with Jest/Supertest.",
        ],
        points: [
          "Biggest lessons: CORS, async debugging, deployment pipelines",
          "Would add service layer to separate business logic from routes",
          "Would add input sanitization against NoSQL injection",
          "Would write API tests with Jest and Supertest",
        ],
        image: airbnb5,
        caption: "Lessons learned from building my first full-stack app.",
      },
    ],
  },
];

export default projects;
