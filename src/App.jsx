import { Suspense, lazy, useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./components/About"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

const SITE_URL = "https://jayram-portfolio.vercel.app";

const PROJECT_SEO = {
  "sign-language-detection": {
    title: "Real-Time Sign Language Detection | Jayram G Sangawat",
    description:
      "AI-powered sign language detection with a custom CNN, real-time webcam inference, and full-stack deployment.",
  },
  "certificate-generator": {
    title: "Certificate Generator | Jayram G Sangawat",
    description:
      "Automated certificate generation with custom PDF templates, CSV bulk import, and instant preview workflow.",
  },
  "resume-analyzer": {
    title: "AI Resume Analyzer | Jayram G Sangawat",
    description:
      "AI resume scoring and keyword gap analysis for ATS optimization using Groq and FastAPI.",
  },
  "github-repo-analyzer": {
    title: "GitHub Repository Analyzer | Jayram G Sangawat",
    description:
      "Hackathon-built repository analytics dashboard with GitHub API insights and AI-assisted quality analysis.",
  },
  "airbnb-clone": {
    title: "Airbnb Clone Case Study | Jayram G Sangawat",
    description:
      "Full-stack MERN learning project with auth, listings, maps, reviews, and production deployment.",
  },
};

function upsertMeta({ attr, key, content }) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const defaultSeo = {
      title: "Jayram G Sangawat — Portfolio",
      description:
        "Computer Science student building real-world web and AI projects. Full-stack developer with React, Python, FastAPI, and TensorFlow.",
    };

    let seo = defaultSeo;

    if (pathname === "/about") {
      seo = {
        title: "About | Jayram G Sangawat",
        description:
          "Learn about Jayram G Sangawat, his development journey, certifications, projects, and engineering philosophy.",
      };
    } else if (pathname.startsWith("/work/")) {
      const id = pathname.split("/")[2];
      seo = PROJECT_SEO[id] || {
        title: "Project Case Study | Jayram G Sangawat",
        description:
          "Detailed project case study covering architecture, decisions, and impact.",
      };
    }

    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = seo.title;
    upsertMeta({ attr: "name", key: "description", content: seo.description });
    upsertMeta({ attr: "property", key: "og:title", content: seo.title });
    upsertMeta({
      attr: "property",
      key: "og:description",
      content: seo.description,
    });
    upsertMeta({ attr: "property", key: "og:url", content: canonical });
    upsertMeta({ attr: "name", key: "twitter:title", content: seo.title });
    upsertMeta({
      attr: "name",
      key: "twitter:description",
      content: seo.description,
    });
    upsertCanonical(canonical);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <RouteSeo />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
