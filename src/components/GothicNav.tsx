import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "halo breach" },
  { path: "/about", label: "identity fragments" },
  { path: "/hall-of-selves", label: "hall of selves" },
  { path: "/music", label: "sound worship" },
  { path: "/cinema", label: "cinema mania" },
  { path: "/archive", label: "entity archive" },
  { path: "/anime-shrine", label: "animated vault" },
  { path: "/diary", label: "log files" },
  { path: "/thoughts", label: "thought files" },
  { path: "/instruments", label: "sound altar" },
  { path: "/nightmare", label: "nightmare interface" },
];

const floatingTexts = [
  "you're not supposed to be here",
  "stay a little longer",
  "don't refresh",
  "you've been here before",
  "is this real?",
  "something didn't load properly",
  "she's still typing...",
  "don't scroll too fast",
  "fragments of someone",
  "loading identity...",
  "404: self not found",
];

const GothicNav = () => {
  const location = useLocation();
  const [ghostText, setGhostText] = useState("");
  const [ghostPos, setGhostPos] = useState({ x: 0, y: 0 });
  const [showGhost, setShowGhost] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGhostText(floatingTexts[Math.floor(Math.random() * floatingTexts.length)]);
        setGhostPos({
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
        });
        setShowGhost(true);
        setTimeout(() => setShowGhost(false), 3000);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-void/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <Link to="/" className="font-gothic text-xl text-primary text-glow">
            Angel.exe
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-wrap gap-1 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-gothic ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline font-pixel text-xs text-muted-foreground flicker-text">
              [ system online ]
            </span>
            <button
              className="lg:hidden text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-void/95 backdrop-blur-md border-b border-border px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block nav-link-gothic py-2 ${location.pathname === item.path ? "active" : ""}`}
              >
                ✧ {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Ghost text */}
      {showGhost && (
        <div
          className="fixed pointer-events-none z-40 font-pixel text-sm text-glow-pink opacity-60"
          style={{
            left: `${ghostPos.x}%`,
            top: `${ghostPos.y}%`,
            animation: "fade-up 0.5s ease-out, flicker 3s infinite",
            color: "hsl(var(--glow-pink))",
          }}
        >
          {ghostText}
        </div>
      )}
    </>
  );
};

export default GothicNav;
