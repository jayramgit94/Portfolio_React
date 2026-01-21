import airbnbImg from "../assets/airbnb.png";
import githubImg from "../assets/github-analyzer.png";
import signLangImg from "../assets/sign-language.png";
import videoCallImg from "../assets/video-call.png";

const projects = [
  {
    id: "sign-language",
    title: "Sign Language in Online Meetings",
    description:
      "An AI-powered accessibility system that translates sign language into text and speech during live online meetings.",
    image: signLangImg,
    gradient: "linear-gradient(135deg, #f3f6b2 0%, #c9e4c5 50%, #b8cde6 100%)",
    role: "Product Designer · Frontend Developer",
    timeline: "8 weeks · 2024",
    tools: ["Figma", "React", "WebRTC", "Python", "TensorFlow"],
    highlights: [
      "Live sign-to-text translation with low latency",
      "Multi-participant meeting support",
      "Accessible UI and keyboard shortcuts",
    ],
    longDescription:
      "I designed and built an accessibility layer for video meetings that turns sign language into real-time captions and speech. The project focused on a frictionless experience for both signers and non-signers, with a lightweight UI that sits above existing meeting tools.",
    objectives: [
      {
        title: "Increase accessibility",
        description:
          "Enable deaf and hard-of-hearing participants to communicate without extra devices or interpreters.",
      },
      {
        title: "Keep latency low",
        description:
          "Deliver translation under 250ms so captions feel conversational.",
      },
      {
        title: "Scale to groups",
        description:
          "Support multiple people in one call while keeping UI calm and readable.",
      },
    ],
    sections: [
      {
        id: "discovery",
        label: "Discovery",
        title: "Understanding the problem",
        subtitle: "What makes real-time sign translation hard?",
        content: [
          "I interviewed students, interpreters, and meeting hosts to map where friction appears today. The biggest pain was switching between caption apps, interpreters, and meeting controls mid-call.",
          "We prioritized a single, consistent interface that could sit inside an existing meeting window and stay visible without covering key content.",
        ],
        points: [
          "Participants needed captions aligned with speaker changes",
          "Hosts wanted a simple on/off control with no setup",
          "Interpreters requested clear cues when a signer was active",
        ],
        image: signLangImg,
        caption: "Early layout test for a lightweight caption panel.",
      },
      {
        id: "mvp",
        label: "Building MVP",
        title: "Designing the live translation flow",
        content: [
          "The MVP focuses on three surfaces: a floating caption bar, a signer camera spotlight, and a quick action menu. The layout keeps the meeting content centered while captions stay readable.",
          "We prototyped multiple layouts in Figma and tested them during mock calls to tune contrast, font size, and glanceability.",
        ],
        points: [
          "Caption timing indicator to show confidence",
          "Auto-spotlight when a signer is detected",
          "Quick toggles for transcript export",
        ],
        image: signLangImg,
        caption: "MVP layout with spotlighted signer and caption strip.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "Shipping the experience",
        content: [
          "I paired the UI with a lightweight inference pipeline that runs locally for privacy. When bandwidth drops, the system gracefully degrades to text-only mode.",
          "The final UI uses a soft gradient canvas and cards to separate meeting content from captions, inspired by modern SaaS dashboards.",
        ],
        callout:
          "The product now supports meeting hosts with a single toggle and provides an exportable transcript for compliance teams.",
        image: signLangImg,
        caption:
          "Final UI polish with accessibility-first contrast and spacing.",
      },
      {
        id: "impact",
        label: "Impact",
        title: "Results and learnings",
        content: [
          "In usability sessions, participants reported feeling more confident speaking in meetings because they didn’t need to request accommodations ahead of time.",
        ],
        points: [
          "92% task success in first-run usability test",
          "Average caption delay reduced to 220ms",
          "Transcript exports saved 3–5 minutes per meeting",
        ],
      },
    ],
  },

  {
    id: "video-call-platform",
    title: "Online Video Calling Platform",
    description:
      "A browser-based video calling application with real-time communication and screen sharing.",
    image: videoCallImg,
    gradient: "linear-gradient(135deg, #fbe7e1 0%, #f3c1d3 50%, #d8b4fe 100%)",
    role: "Frontend Engineer",
    timeline: "6 weeks · 2023",
    tools: ["React", "WebRTC", "Node.js", "Socket.io"],
    highlights: [
      "Low-latency video pipeline",
      "One-click screen sharing",
      "Responsive call controls",
    ],
    longDescription:
      "A lightweight video meeting experience that balances reliability with a minimal interface. I focused on the call layout, device controls, and onboarding flow.",
    objectives: [
      {
        title: "Frictionless join",
        description: "Make entering a meeting feel instant and predictable.",
      },
      {
        title: "Clear controls",
        description: "Keep mic, camera, and share actions visible but calm.",
      },
      {
        title: "Scalable layout",
        description: "Adapt the grid from 1 to 12 participants smoothly.",
      },
    ],
    sections: [
      {
        id: "research",
        label: "Discovery",
        title: "Mapping the meeting journey",
        content: [
          "I audited competitor flows and logged where users hesitate: device permissions, audio echo, and finding share controls.",
        ],
        points: [
          "Default to muted on entry",
          "Surface connection health at a glance",
          "Give hosts quick layout presets",
        ],
        image: videoCallImg,
      },
      {
        id: "design",
        label: "Design",
        title: "Call UI and layout system",
        content: [
          "The layout uses a flexible grid with participant priority rules. A compact control bar anchors the call without obscuring content.",
        ],
        points: [
          "Adaptive grid with speaker emphasis",
          "Floating picture-in-picture for self-view",
          "Keyboard shortcuts for quick actions",
        ],
        image: videoCallImg,
      },
      {
        id: "result",
        label: "Impact",
        title: "Measured improvements",
        content: [
          "Join time dropped after simplifying device checks and preloading media streams.",
        ],
        points: [
          "30% faster join flow",
          "Reduced user drop-off during device setup",
          "Higher satisfaction for screen sharing",
        ],
      },
    ],
  },

  {
    id: "github-repo-analyzer",
    title: "GitHub Repository Analyzer",
    description:
      "A developer tool that analyzes GitHub repositories to provide insights on code quality and activity.",
    image: githubImg,
    gradient: "linear-gradient(135deg, #e3fdfd 0%, #cbf1f5 50%, #a6e3e9 100%)",
    role: "Full-stack Developer",
    timeline: "4 weeks · 2023",
    tools: ["React", "Node.js", "GitHub API", "Chart.js"],
    highlights: [
      "One-click repo audit",
      "Contributor activity timeline",
      "Actionable quality score",
    ],
    longDescription:
      "A dashboard that summarizes repository health for faster technical due diligence. The focus was on clarity, speed, and digestible metrics.",
    objectives: [
      {
        title: "Fast insights",
        description: "Summarize activity and quality in under 10 seconds.",
      },
      {
        title: "Readable reports",
        description: "Make metrics digestible for non-engineers.",
      },
      {
        title: "Action-ready",
        description: "Highlight the first steps to improve a repo.",
      },
    ],
    sections: [
      {
        id: "audit",
        label: "Discovery",
        title: "Defining repo health",
        content: [
          "I reviewed common OSS evaluation criteria and translated them into a scoring model based on activity, documentation, and test coverage.",
        ],
        points: [
          "Commit velocity and cadence",
          "Issue response time",
          "Test coverage proxy",
        ],
        image: githubImg,
      },
      {
        id: "dashboard",
        label: "Build",
        title: "Dashboard and reporting",
        content: [
          "The interface uses cards and charts to tell a story: health score, timeline, and bottlenecks. Reports export as PDF for sharing.",
        ],
        points: [
          "Weighted health score",
          "Weekly trend line",
          "Recommendations list",
        ],
        image: githubImg,
      },
      {
        id: "impact",
        label: "Impact",
        title: "Outcome",
        content: [
          "The tool cut evaluation time for small teams and improved consistency in open-source audits.",
        ],
        points: [
          "60% faster repo review",
          "Reusable scorecard template",
          "Positive feedback from maintainers",
        ],
      },
    ],
  },

  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    description:
      "A full-stack clone of Airbnb focusing on property listings, search, and booking UI.",
    image: airbnbImg,
    gradient: "linear-gradient(135deg, #fff1eb 0%, #ffd6d6 50%, #ffb3c6 100%)",
    role: "Frontend Developer",
    timeline: "5 weeks · 2023",
    tools: ["React", "Firebase", "Mapbox", "Tailwind"],
    highlights: [
      "Map-first exploration",
      "Dynamic listing filters",
      "End-to-end booking flow",
    ],
    longDescription:
      "A high-fidelity UI clone that mirrors Airbnb’s discovery and booking journey. The focus was on layout precision, filters, and responsive cards.",
    objectives: [
      {
        title: "Match the real UX",
        description: "Recreate the browsing patterns and card design.",
      },
      {
        title: "Fast filtering",
        description: "Enable multi-select filters without reloads.",
      },
      {
        title: "Mobile-ready",
        description: "Deliver a touch-friendly layout with sticky actions.",
      },
    ],
    sections: [
      {
        id: "exploration",
        label: "Discovery",
        title: "Understanding the booking flow",
        content: [
          "I mapped the booking journey and isolated the moments that matter: search, compare, and reserve.",
        ],
        points: [
          "Search-first layout",
          "Pricing clarity per night",
          "Reviews summary at a glance",
        ],
        image: airbnbImg,
      },
      {
        id: "interface",
        label: "Design",
        title: "UI system and components",
        content: [
          "Components include property cards, filter pills, and an availability calendar, built to be reusable across screens.",
        ],
        points: [
          "Map and list split view",
          "Sticky booking card",
          "Color and spacing tokens",
        ],
        image: airbnbImg,
      },
      {
        id: "results",
        label: "Impact",
        title: "What I learned",
        content: [
          "The project strengthened my ability to build complex layouts and manage large component trees.",
        ],
        points: [
          "Improved layout consistency",
          "Reusable component library",
          "Faster iteration on UI changes",
        ],
      },
    ],
  },
];

export default projects;
