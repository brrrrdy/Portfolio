import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="app">
      <TopNav />
      <main>
        <section id="about">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
