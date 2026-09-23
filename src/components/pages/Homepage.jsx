import About from "../About";
import Hero from "../Hero";
import ProjectsTimeline from "../ProjectsTimeline";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <ProjectsTimeline />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
