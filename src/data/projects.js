import signLangImg from "../assets/sign-language.png";
import videoCallImg from "../assets/video-call.png";
import githubImg from "../assets/github-analyzer.png";
import airbnbImg from "../assets/airbnb.png";

const projects = [
  {
    id: "sign-language",
    title: "Sign Language in Online Meetings",
    description:
      "An AI-powered accessibility system that translates sign language into text and speech during live online meetings.",
    image: signLangImg,
    gradient: "linear-gradient(135deg, #f3f6b2 0%, #c9e4c5 50%, #b8cde6 100%)",
  },

  {
    id: "video-call-platform",
    title: "Online Video Calling Platform",
    description:
      "A browser-based video calling application with real-time communication and screen sharing.",
    image: videoCallImg,
    gradient: "linear-gradient(135deg, #fbe7e1 0%, #f3c1d3 50%, #d8b4fe 100%)",
  },

  {
    id: "github-repo-analyzer",
    title: "GitHub Repository Analyzer",
    description:
      "A developer tool that analyzes GitHub repositories to provide insights on code quality and activity.",
    image: githubImg,
    gradient: "linear-gradient(135deg, #e3fdfd 0%, #cbf1f5 50%, #a6e3e9 100%)",
  },

  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    description:
      "A full-stack clone of Airbnb focusing on property listings, search, and booking UI.",
    image: airbnbImg,
    gradient: "linear-gradient(135deg, #fff1eb 0%, #ffd6d6 50%, #ffb3c6 100%)",
  },
];

export default projects;
