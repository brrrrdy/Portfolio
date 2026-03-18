import Hero from "../Hero";
import Projects from "../Projects";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
