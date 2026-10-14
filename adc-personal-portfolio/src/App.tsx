import VibulanPhoto from "./Vibulan_Photo.JPG";

function Navbar(){
  return (
    <header className="navbar">
      <a className="logo" href="/">Vibulan Siddarth Sureshkumar</a>
      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="https://github.com/vibulans2000/">Github</a>
        <a href="https://www.linkedin.com/in/vibulan-siddarth-sureshkumar">LinkedIn</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className = "hero">
      <img className="profile-photo" src={VibulanPhoto} alt="Portrait of Vibulan" />
      <p className = "hero-label">Hi, I am </p>
      <h1> Vibulan Siddarth Sureshkumar </h1>
      <p className = "hero-description"> I am a Developer! </p>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <h2> About </h2>
      <p>I am a Computer Science student at the University of Maryland with interest in full stack development and AI/ML.</p>
      <p>Outside of Tech, I am a soccer player and a karate enthusiast.</p>
    </section>
  )
}

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "SpaceShooter Arcade Game",
    description: "SpaceShooter is a small 2D arcade-style shooter where the player control a spaceship (or similar) and must dodge or shoot obstacles / enemies, survive as long as possible, maybe gain points / upgrades.This project is intended as a learning / practice project in Godot and game development workflows.",
    tech: ["GDScript", "Git"],
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "An intuitive, data-driven web application designed to streamline daily healthcare operations and optimize medical facility workflows. Built with efficiency in mind, this platform bridges the gap between healthcare administrative needs and modern web technology.",
    tech: ["Python", "SQL", "Streamlit"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function MyApp() {
  return (
    <main className="page">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

