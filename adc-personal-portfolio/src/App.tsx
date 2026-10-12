function Navbar(){
  return (
    <header className="navbar">
      <a className="logo" href="/">Vibulan Siddarth Sureshkumar</a>
      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#links">Links</a>
      </nav>
    </header>
  );
}

export default function MyApp() {
  return (
    <main className="page">
      <Navbar />
    </main>
  );
}

