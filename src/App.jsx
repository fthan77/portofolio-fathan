import Cursor     from "./components/Cursor";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Marquee    from "./components/Marquee";
import About      from "./components/About";
import Skills     from "./components/Skills";
import TechStack  from "./components/TechStack";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <div className="dark bg-background text-on-background min-h-screen">
      <Cursor />
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
