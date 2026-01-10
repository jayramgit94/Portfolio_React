import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Footer from "../components/Footer";
import About from "../components/About";
import "../styles/global.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Footer />

    </>
  );
}

export default Home;
