// Sign Language Project Images
import signLang1 from "../assets/sign_lang/sign_lang1.png";
import signLang2 from "../assets/sign_lang/sign_lang2.png";
import signLang3 from "../assets/sign_lang/sign_lang3.png";
import signLang4 from "../assets/sign_lang/sign_lang4.png";
import signLang5 from "../assets/sign_lang/sign_lang5.png";
import signLang6 from "../assets/sign_lang/sign_lang6.png";

// Resume Analyzer Project Images
import resume1 from "../assets/resume_analyzer/resum1.png";
import resume2 from "../assets/resume_analyzer/resum2.png";
import resume3 from "../assets/resume_analyzer/resume3.png";
import resume4 from "../assets/resume_analyzer/resume4.png";

// GitHub Repo Analyzer Project Images
import repoAnalyzer1 from "../assets/repoanalzer/repoanalyzer1.png";
import repoAnalyzer3 from "../assets/repoanalzer/repoanalyzer3.png";
import repoAnalyzer4 from "../assets/repoanalzer/repoanalyzer4.png";
import repoAnalyzer5 from "../assets/repoanalzer/repoanalyzer5.png";
import repoAnalyzer2 from "../assets/repoanalzer/repoanalzyer2.png";

// Certificate Generator Project Images
import certi1 from "../assets/certi_generation/certi1.png";
import certi2 from "../assets/certi_generation/certi2.png";
import certi3 from "../assets/certi_generation/certi3.png";
import certi6 from "../assets/certi_generation/certi6.png";
import certi7 from "../assets/certi_generation/certi7.png";
import certi4 from "../assets/certi_generation/csrti4.png";
import certi5 from "../assets/certi_generation/csrti5.png";

// Airbnb Clone Project Images
import airbnb2 from "../assets/airbnb/airbnb2.png";
import airbnb3 from "../assets/airbnb/airbnb3.png";
import airbnb4 from "../assets/airbnb/airbnb4.png";
import airbnb5 from "../assets/airbnb/airbnb5.png";
import airbnb1 from "../assets/airbnb/aribnb1.png";

const projects = [
  {
    id: "sign-language-detection",
    title: "Real-Time Sign Language Detection",
    description:
      "An AI-powered web application that detects and translates sign language gestures in real-time, making communication accessible for the deaf and hard-of-hearing community.",
    image: signLang1,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    role: "Full Stack Developer · ML Engineer",
    timeline: "8 weeks · 2025",
    tools: ["React", "Python", "TensorFlow", "OpenCV", "WebSocket", "FastAPI"],
    liveLink: "https://sign-lang-01.vercel.app",
    githubLink: "https://github.com/jayramgit94/sign_lang_01",
    highlights: [
      "Real-time gesture recognition using computer vision",
      "Support for multiple sign language alphabets",
      "Low-latency WebSocket communication for instant feedback",
      "Accessible UI designed for ease of use",
    ],
    longDescription:
      "This project bridges the communication gap between sign language users and non-signers. Using advanced machine learning models trained on thousands of sign language gestures, the application provides instant translation with high accuracy. The system processes video input through a trained CNN model and delivers results in milliseconds.",
    objectives: [
      {
        title: "Break communication barriers",
        description:
          "Enable seamless conversation between sign language users and those who don't understand sign language.",
      },
      {
        title: "Real-time processing",
        description:
          "Achieve sub-second latency for gesture detection to maintain natural conversation flow.",
      },
      {
        title: "High accuracy recognition",
        description:
          "Train models to achieve 95%+ accuracy across various lighting conditions and hand positions.",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        title: "The Communication Challenge",
        subtitle: "Why current solutions fall short",
        content: [
          "Millions of people worldwide use sign language as their primary means of communication. However, the majority of the population cannot understand sign language, creating a significant barrier in daily interactions.",
          "Existing solutions like human interpreters are expensive and not always available, while text-based communication lacks the nuance and speed of natural conversation.",
        ],
        points: [
          "Over 70 million deaf people worldwide use sign language",
          "Human interpreters are costly and scarce",
          "Text communication is slow and impersonal",
        ],
        image: signLang2,
        caption: "Understanding the scope of the communication barrier.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "AI-Powered Real-Time Translation",
        content: [
          "I developed a web application that uses computer vision and deep learning to recognize sign language gestures from a webcam feed and instantly translate them to text.",
          "The system uses a Convolutional Neural Network trained on a dataset of sign language images, achieving high accuracy in gesture recognition.",
        ],
        points: [
          "Webcam-based gesture capture",
          "CNN model for accurate recognition",
          "Real-time WebSocket communication",
          "Clean, accessible user interface",
        ],
        image: signLang3,
        caption:
          "The application detecting sign language gestures in real-time.",
      },
      {
        id: "technical",
        label: "Technical",
        title: "Under the Hood",
        content: [
          "The frontend is built with React for a responsive user experience. The backend uses FastAPI to handle WebSocket connections and model inference.",
          "OpenCV processes the video frames, while TensorFlow runs the trained model for gesture classification.",
        ],
        points: [
          "React frontend with WebSocket integration",
          "FastAPI backend for high-performance inference",
          "TensorFlow model trained on 10,000+ images",
          "OpenCV for image preprocessing",
        ],
        image: signLang4,
        caption:
          "Technical architecture of the sign language detection system.",
      },
      {
        id: "features",
        label: "Features",
        title: "Key Features",
        content: [
          "The application includes multiple features designed for practical daily use, from basic letter recognition to forming complete words and sentences.",
        ],
        points: [
          "Alphabet recognition (A-Z)",
          "Word formation with gesture sequences",
          "History of translated gestures",
          "Adjustable confidence threshold",
        ],
        image: signLang5,
        caption: "Feature showcase of the sign language application.",
      },
      {
        id: "impact",
        label: "Impact",
        title: "Making a Difference",
        content: [
          "This project demonstrates how AI can be used to create meaningful social impact. By making sign language translation accessible to anyone with a webcam, we take a step toward a more inclusive world.",
        ],
        points: [
          "Reduces dependency on human interpreters",
          "Enables spontaneous communication",
          "Open-source for community improvement",
          "Scalable to support more sign languages",
        ],
        image: signLang6,
        caption: "The positive impact of accessible sign language translation.",
      },
    ],
  },

  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    description:
      "An intelligent resume analysis tool that uses AI to evaluate resumes against job descriptions, providing detailed feedback and improvement suggestions.",
    image: resume1,
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #a8edea 100%)",
    role: "Full Stack Developer · AI Integration",
    timeline: "6 weeks · 2025",
    tools: ["React", "Python", "FastAPI", "Groq AI", "MongoDB", "Tailwind CSS"],
    liveLink: "https://resume-analyzer-pearl-tau.vercel.app",
    githubLink: "https://github.com/jayramgit94/resume_analyzer",
    highlights: [
      "AI-powered resume scoring and analysis",
      "Job description matching with compatibility score",
      "Detailed improvement suggestions",
      "ATS-friendly formatting recommendations",
    ],
    longDescription:
      "Job seekers often struggle to understand why their resumes don't get responses. This tool uses advanced AI to analyze resumes against specific job descriptions, providing actionable insights on how to improve match rates and increase interview chances.",
    objectives: [
      {
        title: "Objective resume evaluation",
        description:
          "Provide unbiased, data-driven analysis of resume content and formatting.",
      },
      {
        title: "Job-specific feedback",
        description:
          "Tailor suggestions based on the target job description and industry requirements.",
      },
      {
        title: "Actionable improvements",
        description:
          "Give specific, implementable suggestions rather than vague advice.",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        title: "The Resume Black Hole",
        subtitle: "Why great candidates get overlooked",
        content: [
          "Studies show that recruiters spend an average of just 7 seconds scanning a resume. Combined with ATS (Applicant Tracking Systems) that filter out candidates before human review, many qualified applicants never get a chance.",
          "Most job seekers have no objective way to evaluate how well their resume matches a job posting or whether it will pass ATS filters.",
        ],
        points: [
          "75% of resumes are rejected by ATS before human review",
          "Recruiters spend only 7 seconds per resume on average",
          "Lack of feedback leaves candidates guessing",
        ],
        image: resume1,
        caption: "Understanding why resumes fail to convert.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "AI-Powered Analysis",
        content: [
          "The Resume Analyzer uses Groq AI to deeply analyze resume content, comparing it against job descriptions to identify gaps and opportunities.",
          "It provides a compatibility score, highlights missing keywords, and suggests specific improvements to increase match rates.",
        ],
        points: [
          "Upload resume and paste job description",
          "AI analyzes content, keywords, and formatting",
          "Receive detailed score breakdown",
          "Get actionable improvement suggestions",
        ],
        image: resume2,
        caption: "The resume analysis interface showing detailed feedback.",
      },
      {
        id: "features",
        label: "Features",
        title: "Comprehensive Analysis",
        content: [
          "Beyond simple keyword matching, the tool analyzes writing quality, experience relevance, skill alignment, and formatting best practices.",
        ],
        points: [
          "Skills gap analysis",
          "Experience relevance scoring",
          "ATS compatibility check",
          "Writing quality assessment",
          "Industry-specific recommendations",
        ],
        image: resume3,
        caption: "Deep analysis features for thorough resume evaluation.",
      },
      {
        id: "impact",
        label: "Impact",
        title: "Better Outcomes",
        content: [
          "Users who optimize their resumes based on the analysis report significantly higher response rates from employers.",
        ],
        points: [
          "Increased interview callback rates",
          "Better understanding of job requirements",
          "Confidence in resume quality",
          "Time saved on manual optimization",
        ],
        image: resume4,
        caption: "The impact of AI-powered resume optimization.",
      },
    ],
  },

  {
    id: "github-repo-analyzer",
    title: "GitHub Repository Analyzer",
    description:
      "A powerful tool that analyzes GitHub repositories to provide insights on code quality, commit patterns, contributor activity, and project health metrics.",
    image: repoAnalyzer1,
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    role: "Full Stack Developer",
    timeline: "5 weeks · 2025",
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
      "Comprehensive repository health analysis",
      "AI-powered code quality insights",
      "Interactive visualizations of commit history",
      "Contributor activity breakdown",
    ],
    longDescription:
      "Built for a hackathon, this tool helps developers and teams understand their repository's health at a glance. It fetches data from the GitHub API, analyzes patterns using AI, and presents actionable insights through beautiful visualizations.",
    objectives: [
      {
        title: "Repository health check",
        description:
          "Provide a quick overview of repository status, activity, and potential issues.",
      },
      {
        title: "AI-powered insights",
        description:
          "Use AI to analyze code patterns and suggest improvements.",
      },
      {
        title: "Visual data representation",
        description:
          "Present complex data through intuitive charts and graphs.",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        title: "Repository Intelligence",
        subtitle: "Understanding your codebase better",
        content: [
          "Managing large codebases and understanding project health is challenging. This tool aggregates data from GitHub and presents it in a digestible format.",
          "From commit frequency to code churn, get insights that help make better development decisions.",
        ],
        points: [
          "Instant repository health score",
          "Commit pattern analysis",
          "Issue and PR statistics",
          "Language breakdown visualization",
        ],
        image: repoAnalyzer1,
        caption: "Dashboard showing repository overview and metrics.",
      },
      {
        id: "analysis",
        label: "Analysis",
        title: "Deep Code Analysis",
        content: [
          "The analyzer uses Groq AI to examine repository structure, code patterns, and documentation quality, providing intelligent suggestions for improvement.",
        ],
        points: [
          "Code complexity assessment",
          "Documentation coverage check",
          "Test file detection",
          "Security vulnerability hints",
        ],
        image: repoAnalyzer2,
        caption: "AI-powered analysis results with recommendations.",
      },
      {
        id: "visualizations",
        label: "Visualizations",
        title: "Interactive Charts",
        content: [
          "Data visualization is key to understanding trends. The tool provides interactive charts showing commit history, contributor activity, and language distribution.",
        ],
        points: [
          "Commit frequency timeline",
          "Contributor leaderboard",
          "Language pie chart",
          "Activity heatmap",
        ],
        image: repoAnalyzer3,
        caption: "Interactive visualizations of repository data.",
      },
      {
        id: "contributors",
        label: "Contributors",
        title: "Team Insights",
        content: [
          "Understand team dynamics with detailed contributor analytics, showing who contributes what and when.",
        ],
        points: [
          "Individual contribution metrics",
          "Active time analysis",
          "Code ownership breakdown",
          "Collaboration patterns",
        ],
        image: repoAnalyzer4,
        caption: "Contributor activity and collaboration insights.",
      },
      {
        id: "impact",
        label: "Impact",
        title: "Better Project Management",
        content: [
          "Teams use this tool to identify bottlenecks, recognize contributors, and make data-driven decisions about their development process.",
        ],
        points: [
          "Improved project visibility",
          "Better resource allocation",
          "Early issue detection",
          "Enhanced team recognition",
        ],
        image: repoAnalyzer5,
        caption: "Impact on project management and team dynamics.",
      },
    ],
  },

  {
    id: "certificate-generator",
    title: "Certificate Generator",
    description:
      "An automated certificate generation system that creates professional certificates from PDF templates with customizable fields and bulk generation support.",
    image: certi1,
    gradient: "linear-gradient(135deg, #f5af19 0%, #f12711 50%, #c31432 100%)",
    role: "Full Stack Developer",
    timeline: "4 weeks · 2025",
    tools: ["React", "Node.js", "PDF-lib", "Canvas API", "Express", "MongoDB"],
    liveLink: "https://certificate-generator-via-pdf.vercel.app",
    githubLink: "https://github.com/jayramgit94/Certificate_generator",
    highlights: [
      "Custom PDF template support",
      "Bulk certificate generation",
      "Dynamic field mapping",
      "Instant preview and download",
    ],
    longDescription:
      "Organizations often need to generate hundreds of certificates for events, courses, or achievements. This tool automates the entire process, allowing users to upload a template, map data fields, and generate personalized certificates in bulk.",
    objectives: [
      {
        title: "Automate certificate creation",
        description:
          "Eliminate manual certificate creation by automating the generation process.",
      },
      {
        title: "Support custom templates",
        description:
          "Allow organizations to use their own branded certificate designs.",
      },
      {
        title: "Enable bulk operations",
        description:
          "Generate hundreds of certificates from a single CSV upload.",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        title: "Manual Certificate Creation",
        subtitle: "A time-consuming process",
        content: [
          "Creating certificates manually for events, courses, or awards is tedious and error-prone. Each certificate needs individual attention for name, date, and other details.",
          "Organizations spend hours on what should be a simple task, often resulting in inconsistencies and delays.",
        ],
        points: [
          "Hours spent on manual creation",
          "High risk of typos and errors",
          "Inconsistent formatting",
          "Delayed certificate distribution",
        ],
        image: certi1,
        caption: "The challenge of manual certificate generation.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "Automated Generation",
        content: [
          "Upload your certificate template, define where each field should appear, upload your data, and generate all certificates instantly.",
        ],
        points: [
          "Drag-and-drop template upload",
          "Visual field positioning",
          "CSV data import",
          "One-click bulk generation",
        ],
        image: certi2,
        caption: "The streamlined certificate generation workflow.",
      },
      {
        id: "template",
        label: "Templates",
        title: "Custom Template Support",
        content: [
          "The system accepts any PDF template, allowing organizations to maintain their branding. Field positions are mapped visually for precise placement.",
        ],
        points: [
          "Any PDF template accepted",
          "Visual field mapping interface",
          "Custom font support",
          "Multiple field types",
        ],
        image: certi3,
        caption: "Template customization and field mapping.",
      },
      {
        id: "preview",
        label: "Preview",
        title: "Real-Time Preview",
        content: [
          "Before generating all certificates, preview how they'll look with actual data. Make adjustments until everything is perfect.",
        ],
        points: [
          "Instant preview updates",
          "Field position adjustment",
          "Font and size controls",
          "Color customization",
        ],
        image: certi4,
        caption: "Real-time preview of certificate output.",
      },
      {
        id: "bulk",
        label: "Bulk",
        title: "Bulk Generation",
        content: [
          "Upload a CSV file with recipient data, and the system generates personalized certificates for everyone in seconds.",
        ],
        points: [
          "CSV file upload",
          "Automatic data mapping",
          "Progress tracking",
          "Batch download option",
        ],
        image: certi5,
        caption: "Bulk certificate generation from CSV data.",
      },
      {
        id: "download",
        label: "Download",
        title: "Easy Distribution",
        content: [
          "Download individual certificates or get all of them in a ZIP file. Share directly via email or download links.",
        ],
        points: [
          "Individual PDF download",
          "Bulk ZIP download",
          "Email distribution option",
          "Shareable links",
        ],
        image: certi6,
        caption: "Multiple download and distribution options.",
      },
      {
        id: "impact",
        label: "Impact",
        title: "Time Saved",
        content: [
          "Organizations report saving hours of work per event. What used to take a day now takes minutes.",
        ],
        points: [
          "95% time reduction",
          "Zero formatting errors",
          "Consistent professional output",
          "Happy recipients",
        ],
        image: certi7,
        caption: "The impact of automated certificate generation.",
      },
    ],
  },

  {
    id: "airbnb-clone",
    title: "Airbnb Full-Stack Clone",
    description:
      "A comprehensive full-stack clone of Airbnb featuring property listings, user authentication, booking system, and interactive maps.",
    image: airbnb1,
    gradient: "linear-gradient(135deg, #FF385C 0%, #E61E4D 50%, #D70466 100%)",
    role: "Full Stack Developer",
    timeline: "10 weeks · 2024",
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
      "Complete property listing and booking flow",
      "User authentication and authorization",
      "Interactive map integration",
      "Image upload and management",
      "Review and rating system",
    ],
    longDescription:
      "This project is a feature-rich clone of Airbnb, built to demonstrate full-stack development capabilities. It includes everything from user registration to property booking, with a focus on creating a smooth, intuitive user experience similar to the real platform.",
    objectives: [
      {
        title: "Replicate core functionality",
        description:
          "Build all essential Airbnb features including listings, bookings, and reviews.",
      },
      {
        title: "Implement authentication",
        description:
          "Create secure user authentication with JWT tokens and protected routes.",
      },
      {
        title: "Handle complex data",
        description:
          "Design MongoDB schemas to handle users, listings, bookings, and reviews efficiently.",
      },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        title: "Building Airbnb from Scratch",
        subtitle: "A full-stack challenge",
        content: [
          "Airbnb is one of the most complex web applications in terms of features and user flows. This project replicates its core functionality to demonstrate full-stack development skills.",
          "From property search to booking confirmation, every step of the user journey is implemented.",
        ],
        points: [
          "Property listing and search",
          "User authentication system",
          "Booking management",
          "Review and rating system",
        ],
        image: airbnb1,
        caption: "The Airbnb clone homepage with featured listings.",
      },
      {
        id: "listings",
        label: "Listings",
        title: "Property Listings",
        content: [
          "Hosts can create detailed property listings with multiple images, amenities, pricing, and location information. The listing creation flow is intuitive and comprehensive.",
        ],
        points: [
          "Multi-image upload via Cloudinary",
          "Detailed amenity selection",
          "Dynamic pricing options",
          "Location with map preview",
        ],
        image: airbnb2,
        caption: "Property listing page with details and booking options.",
      },
      {
        id: "maps",
        label: "Maps",
        title: "Interactive Maps",
        content: [
          "Mapbox integration allows users to explore properties on an interactive map. Location-based search helps users find properties in their desired area.",
        ],
        points: [
          "Mapbox GL JS integration",
          "Clustered map markers",
          "Location-based filtering",
          "Interactive property popups",
        ],
        image: airbnb3,
        caption:
          "Map view showing property locations with interactive markers.",
      },
      {
        id: "booking",
        label: "Booking",
        title: "Booking System",
        content: [
          "The booking system handles date selection, price calculation, and reservation management. Users can view their bookings and hosts can manage reservations.",
        ],
        points: [
          "Date range picker",
          "Automatic price calculation",
          "Booking confirmation flow",
          "Reservation management",
        ],
        image: airbnb4,
        caption: "Booking flow with date selection and price breakdown.",
      },
      {
        id: "reviews",
        label: "Reviews",
        title: "Reviews & Ratings",
        content: [
          "After a stay, guests can leave reviews and ratings. This builds trust and helps future guests make informed decisions.",
        ],
        points: [
          "Star rating system",
          "Written reviews",
          "Review moderation",
          "Average rating calculation",
        ],
        image: airbnb5,
        caption: "Review section showing guest feedback and ratings.",
      },
    ],
  },
];

export default projects;
