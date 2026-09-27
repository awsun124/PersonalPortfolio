import { useEffect, useState } from "react";
import { FolderOpen, House, Mail, Menu, Route, UserRound, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", id: "about", icon: UserRound },
  { label: "Projects", id: "projects", icon: FolderOpen },
  { label: "Journey", id: "journey", icon: Route },
  { label: "Contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      setActiveSection("projects");
      return;
    }

    if (location.hash === "#home") {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      const target = location.hash && document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "auto" });
    }

    const updateSection = () => {
      let current = "";
      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.45) current = id;
      }
      setActiveSection(current);
    };
    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });
    return () => window.removeEventListener("scroll", updateSection);
  }, [location.pathname, location.hash]);

  const links = navItems.map(({ label, id, icon: Icon }) => (
    <Link
      key={id}
      to={`/#${id}`}
      onClick={() => {
        setIsMenuOpen(false);
        if (location.pathname === "/") document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
      }}
      aria-current={activeSection === id ? "location" : undefined}
      className={`flex items-center gap-3 rounded-full px-5 py-4 text-base transition-colors ${activeSection === id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />{label}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 p-3 lg:fixed lg:top-1/2 lg:right-5 lg:-translate-y-1/2 lg:p-0">
      <nav aria-label="Main navigation" className="pill-nav flex items-center justify-between px-5 py-3 lg:flex-col lg:rounded-[2rem] lg:p-4 lg:gap-5">
        <Link to="/#home" aria-label="Andy Sun, home" onClick={() => { setIsMenuOpen(false); if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "auto" }); }} className="font-serif font-bold lg:py-3">
          <span className="lg:hidden">Andy Sun</span>
          <House className="hidden lg:block w-6 h-6" />
        </Link>
        <div className="hidden lg:flex flex-col gap-2 border-t border-border/60 pt-3">{links}</div>
        <button type="button" className="lg:hidden p-2" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {isMenuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden mt-2 p-3 rounded-2xl border border-border bg-popover shadow-sm">{links}</nav>}
    </header>
  );
};

export default Navbar;
