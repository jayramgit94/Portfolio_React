import airbnbImg from "../assets/airbnb.png";
import githubImg from "../assets/github-analyzer.png";
import signLangImg from "../assets/sign-language.png";
import videoCallImg from "../assets/video-call.png";

const projects = [
  {
    id: "sign-language",
    title: "Sign Language in Online Meetings",
    description:
      "A real-time AI system I built to help people communicate better in online meetings by translating sign language into text and speech.",
    image: signLangImg,
    gradient: "linear-gradient(135deg, #f3f6b2 0%, #c9e4c5 50%, #b8cde6 100%)",
    role: "Product Thinker · Frontend Developer",
    timeline: "8 weeks · 2024",
    tools: ["Figma", "React", "WebRTC", "Python", "TensorFlow"],
    highlights: [
      "Real-time sign language to text translation",
      "Works smoothly in group video calls",
      "Designed with accessibility as the first priority",
    ],
    longDescription:
      "This project started from a simple question: why is it still hard for deaf and hard-of-hearing users to fully participate in online meetings? I designed and built a solution that runs alongside video calls and converts sign language into live captions and speech, without forcing users to rely on interpreters or extra tools.",
    objectives: [
      {
        title: "Make meetings inclusive",
        description:
          "Allow everyone in a meeting to communicate naturally, without asking for special accommodations.",
      },
      {
        title: "Feel truly real-time",
        description:
          "Keep translation fast enough so conversations don’t feel delayed or awkward.",
      },
      {
        title: "Blend into existing tools",
        description:
          "Design the system so it feels like part of the meeting, not a separate app.",
      },
    ],
    sections: [
      {
        id: "discovery",
        label: "Discovery",
        title: "Understanding real user pain",
        subtitle: "Why current solutions don’t feel natural",
        content: [
          "I spoke with students, sign language users, and people who regularly attend online meetings. Most of them struggled with switching between apps, interpreters, and captions during live calls.",
          "The key insight was that accessibility tools should stay out of the way while still being always available.",
        ],
        points: [
          "Users wanted captions that clearly matched who was speaking",
          "Meeting hosts needed something simple with zero setup",
          "Signers wanted clear feedback when the system detected them",
        ],
        image: signLangImg,
        caption: "Early experiments with a minimal caption overlay.",
      },
      {
        id: "mvp",
        label: "Building MVP",
        title: "Shaping the first usable version",
        content: [
          "I focused the MVP on just what matters during a call: seeing the signer clearly, reading captions easily, and controlling everything quickly.",
          "Multiple layout ideas were tested in mock meetings to check readability, contrast, and distraction levels.",
        ],
        points: [
          "Confidence indicator for caption accuracy",
          "Automatic focus on the active signer",
          "Quick export of meeting transcripts",
        ],
        image: signLangImg,
        caption: "MVP layout tested during simulated meetings.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "Turning it into a complete experience",
        content: [
          "The final system runs most processing locally to protect user privacy and reduce lag. When the network becomes unstable, it automatically switches to a lighter text-only mode.",
          "Visually, I kept the UI soft and calm so it doesn’t fight for attention with the meeting itself.",
        ],
        callout:
          "Hosts can enable or disable the feature with a single click, and transcripts can be saved for later use.",
        image: signLangImg,
        caption:
          "Final UI with accessibility-focused spacing, colors, and contrast.",
      },
      {
        id: "impact",
        label: "Impact",
        title: "What changed because of this",
        content: [
          "People felt more confident joining meetings because they didn’t have to explain their needs beforehand or ask for special help.",
        ],
        points: [
          "High success rate in first-time usage tests",
          "Noticeably lower delay compared to early prototypes",
          "Meeting summaries became faster with auto transcripts",
        ],
      },
    ],
  },

  {
    id: "video-call-platform",
    title: "Online Video Calling Platform",
    description:
      "A browser-based video calling app focused on simplicity, speed, and reliable real-time communication.",
    image: videoCallImg,
    gradient: "linear-gradient(135deg, #fbe7e1 0%, #f3c1d3 50%, #d8b4fe 100%)",
    role: "Frontend Engineer",
    timeline: "6 weeks · 2023",
    tools: ["React", "WebRTC", "Node.js", "Socket.io"],
    highlights: [
      "Smooth low-latency video calls",
      "Simple screen sharing",
      "Clean and responsive call controls",
    ],
    longDescription:
      "This project was about building a video calling experience that feels fast and predictable. I focused on reducing friction during joining, making controls obvious, and keeping the interface distraction-free.",
    objectives: [
      {
        title: "Instant entry",
        description: "Help users join meetings without confusion or delays.",
      },
      {
        title: "Simple controls",
        description: "Make common actions easy without cluttering the screen.",
      },
      {
        title: "Flexible layouts",
        description:
          "Ensure the UI works well from one-on-one calls to groups.",
      },
    ],
    sections: [
      {
        id: "research",
        label: "Discovery",
        title: "Studying real meeting behavior",
        content: [
          "I reviewed existing video call tools and noted where users hesitate, especially around mic, camera, and screen sharing.",
        ],
        points: [
          "Users prefer joining muted by default",
          "Connection status should be visible but subtle",
          "Hosts want quick layout controls",
        ],
        image: videoCallImg,
      },
      {
        id: "design",
        label: "Design",
        title: "Designing a calm call interface",
        content: [
          "The layout adapts automatically based on who is speaking, while the control bar stays compact and consistent.",
        ],
        points: [
          "Speaker-focused grid",
          "Picture-in-picture self view",
          "Keyboard shortcuts for faster control",
        ],
        image: videoCallImg,
      },
      {
        id: "result",
        label: "Impact",
        title: "Improvements achieved",
        content: [
          "After simplifying device checks and loading logic, users were able to join calls faster and with fewer drop-offs.",
        ],
        points: [
          "Faster meeting join experience",
          "Lower drop-off during setup",
          "Better feedback for screen sharing",
        ],
      },
    ],
  },

  {
    id: "github-repo-analyzer",
    title: "GitHub Repository Analyzer",
    description:
      "A developer-focused tool that reviews GitHub repositories and highlights code quality, activity, and improvement areas.",
    image: githubImg,
    gradient: "linear-gradient(135deg, #e3fdfd 0%, #cbf1f5 50%, #a6e3e9 100%)",
    role: "Full-stack Developer",
    timeline: "4 weeks · 2023",
    tools: ["React", "Node.js", "GitHub API", "Chart.js"],
    highlights: [
      "Quick repository health check",
      "Contributor and activity insights",
      "Clear, actionable recommendations",
    ],
    longDescription:
      "I built this tool to save time when evaluating repositories. Instead of manually scanning commits, issues, and docs, the dashboard summarizes everything in one clear view.",
    objectives: [
      {
        title: "Save time",
        description: "Provide meaningful insights within seconds.",
      },
      {
        title: "Make data readable",
        description: "Turn raw GitHub data into understandable visuals.",
      },
      {
        title: "Guide improvement",
        description: "Show exactly what to fix first.",
      },
    ],
    sections: [
      {
        id: "audit",
        label: "Discovery",
        title: "Defining repository quality",
        content: [
          "I studied how developers evaluate open-source projects and converted those patterns into measurable signals.",
        ],
        points: [
          "Commit frequency and consistency",
          "Issue response behavior",
          "Basic testing and documentation signals",
        ],
        image: githubImg,
      },
      {
        id: "dashboard",
        label: "Build",
        title: "Turning data into insight",
        content: [
          "The dashboard uses simple cards and charts so users can quickly understand what’s healthy and what needs work.",
        ],
        points: [
          "Overall health score",
          "Activity trends over time",
          "Clear next-step suggestions",
        ],
        image: githubImg,
      },
      {
        id: "impact",
        label: "Impact",
        title: "What it helped achieve",
        content: [
          "Teams were able to review repositories faster and make more consistent decisions.",
        ],
        points: [
          "Much quicker repo evaluation",
          "Reusable evaluation framework",
          "Positive feedback from developers",
        ],
      },
    ],
  },

  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    description:
      "A full-stack UI clone of Airbnb focused on listings, filtering, and the booking experience.",
    image: airbnbImg,
    gradient: "linear-gradient(135deg, #fff1eb 0%, #ffd6d6 50%, #ffb3c6 100%)",
    role: "Frontend Developer",
    timeline: "5 weeks · 2023",
    tools: ["React", "Firebase", "Mapbox", "Tailwind"],
    highlights: [
      "Map-driven property discovery",
      "Advanced listing filters",
      "Complete booking flow",
    ],
    longDescription:
      "This project was about understanding and recreating a complex real-world product. I focused on layout accuracy, smooth filtering, and responsive booking interactions.",
    objectives: [
      {
        title: "Replicate real UX",
        description: "Match real-world browsing and booking behavior.",
      },
      {
        title: "Fast interactions",
        description: "Make filters and searches feel instant.",
      },
      {
        title: "Mobile-friendly design",
        description: "Ensure the experience works well on all devices.",
      },
    ],
    sections: [
      {
        id: "exploration",
        label: "Discovery",
        title: "Breaking down the booking journey",
        content: [
          "I analyzed how users search, compare, and finally book properties, then mapped those steps into UI components.",
        ],
        points: [
          "Search-first experience",
          "Clear pricing breakdown",
          "Quick review summaries",
        ],
        image: airbnbImg,
      },
      {
        id: "interface",
        label: "Design",
        title: "Building reusable UI pieces",
        content: [
          "Each component was designed to be reusable and consistent across pages, from cards to filters and calendars.",
        ],
        points: [
          "Split map and list view",
          "Sticky booking panel",
          "Consistent spacing and colors",
        ],
        image: airbnbImg,
      },
      {
        id: "results",
        label: "Impact",
        title: "Key takeaways",
        content: [
          "This project helped me improve my ability to manage complex UI states and large component structures.",
        ],
        points: [
          "Cleaner and more consistent layouts",
          "Reusable component patterns",
          "Faster UI iteration speed",
        ],
      },
    ],
  },
];

export default projects;
