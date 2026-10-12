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

export default function MyApp() {
  return (
    <main className="page">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

