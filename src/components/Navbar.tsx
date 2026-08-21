import { useEffect, useState, type MouseEvent } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "About", hash: "#about" },
  { label: "Projects", hash: "#projects" },
  { label: "Contact Me", hash: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDarkMode = savedTheme === "dark";

    setIsDark(shouldUseDarkMode);
    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;

    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
  };

  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const goToSection = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const scrollToSection = () => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname === "/") {
      scrollToSection();
      return;
    }

    navigate("/");
    setTimeout(scrollToSection, 100);
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          <a
            href="/"
            onClick={goHome}
            className="text-base sm:text-lg font-bold font-serif truncate"
          >
            Andy Sun
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <a
              href="/"
              onClick={goHome}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`/${item.hash}`}
                onClick={(event) => goToSection(event, item.hash)}
                className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>

            <button
              type="button"
              className="md:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="/"
                onClick={goHome}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Home
              </a>
              {navItems.map((item) => (
                <a
                  key={item.hash}
                  href={`/${item.hash}`}
                  onClick={(event) => goToSection(event, item.hash)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
