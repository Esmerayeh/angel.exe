import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cyberAngelBg from "@/assets/cyber-angel-bg.jpg";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);

  const bootSequence = [
    "> initializing angel.exe...",
    "> loading fragments...",
    "> identity: noire",
    "> status: between worlds",
    "> memory: corrupted",
    "> heart: still beating",
    "> halo: cracked",
    "> welcome to the glitch.",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setBootLines((prev) => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoaded(true), 500);
        setTimeout(() => setShowContent(true), 1200);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${cyberAngelBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.12) saturate(0.5) hue-rotate(10deg)",
        }}
      />

      {/* Gradient overlay with more depth */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-void/70 via-background/40 to-void/80" />

      {/* Extra cathedral light beams */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[2px] h-[60vh] opacity-[0.04]"
          style={{ background: "linear-gradient(to bottom, hsl(var(--silver) / 0.6), transparent)" }} />
        <div className="absolute top-0 left-[50%] w-[2px] h-[50vh] opacity-[0.06]"
          style={{ background: "linear-gradient(to bottom, hsl(var(--glow-purple) / 0.5), transparent)" }} />
        <div className="absolute top-0 right-[25%] w-[2px] h-[55vh] opacity-[0.04]"
          style={{ background: "linear-gradient(to bottom, hsl(var(--pale-pink) / 0.5), transparent)" }} />
      </div>

      {/* Boot sequence */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-void">
          <div className="max-w-lg w-full px-8">
            <div className="font-pixel text-sm space-y-1">
              {bootLines.map((line, i) => (
                <div
                  key={i}
                  className="text-primary/80"
                  style={{ animation: "fade-up 0.3s ease-out forwards" }}
                >
                  {line}
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-primary/60 animate-flicker ml-1" />
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      {showContent && (
        <div className="relative z-10 pt-20 min-h-screen flex flex-col items-center justify-center px-4">
          {/* Wings decoration - enhanced */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-[0.08]">
            <div
              className="absolute left-0 top-0 w-1/2 h-full"
              style={{
                background: "radial-gradient(ellipse at right center, hsl(var(--silver) / 0.4), hsl(var(--glow-purple) / 0.15) 40%, transparent 70%)",
                animation: "wings-open 2s ease-out forwards",
                transformOrigin: "right center",
              }}
            />
            <div
              className="absolute right-0 top-0 w-1/2 h-full"
              style={{
                background: "radial-gradient(ellipse at left center, hsl(var(--silver) / 0.4), hsl(var(--glow-purple) / 0.15) 40%, transparent 70%)",
                animation: "wings-open 2s ease-out forwards",
                transformOrigin: "left center",
              }}
            />
          </div>

          {/* Halo above title */}
          <div
            className="w-[160px] h-[45px] rounded-[50%] border border-silver/20 mb-4"
            style={{
              boxShadow: "0 0 25px hsl(var(--silver) / 0.15), inset 0 0 15px hsl(var(--silver) / 0.05)",
              animation: "float 6s ease-in-out infinite, fade-up 1s ease-out 0.1s both",
            }}
          />

          {/* Title */}
          <div className="text-center space-y-6" style={{ animation: "fade-up 1s ease-out 0.3s both" }}>
            <h1 className="font-gothic text-5xl md:text-7xl text-primary text-glow tracking-wider">
              Angel.exe
            </h1>
            <p className="font-decorative text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground">
              A Glitched Heaven
            </p>
          </div>

          {/* Poetic line */}
          <div
            className="mt-12 max-w-md text-center relative"
            style={{ animation: "fade-up 1s ease-out 0.8s both" }}
          >
            <div className="absolute -top-3 -left-6 w-5 h-5 border-t border-l border-silver/15" />
            <div className="absolute -bottom-3 -right-6 w-5 h-5 border-b border-r border-silver/15" />
            <p className="font-handwritten text-xl md:text-2xl text-pale-pink/80 leading-relaxed">
              "this is where my thoughts go<br />
              when they don't belong to the world"
            </p>
          </div>

          {/* System log */}
          <div
            className="mt-16 panel-gothic p-6 max-w-sm w-full relative"
            style={{ animation: "fade-up 1s ease-out 1.3s both" }}
          >
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/15" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/15" />
            <div className="font-pixel text-xs space-y-2 text-muted-foreground">
              <p className="text-primary/60">[ system loading… ]</p>
              <p>name: <span className="text-primary">noire</span></p>
              <p>status: <span className="text-accent flicker-text">online / dreaming / slightly corrupted</span></p>
              <p className="mt-3">i exist in fragments</p>
              <p>songs / late nights / unfinished code</p>
              <p className="mt-2">sometimes i feel real</p>
              <p>sometimes i feel like a concept</p>
              <p className="mt-2">alignment: <span className="text-icy-blue">cyber angel with bad sleep</span></p>
              <p className="mt-3 text-primary/40">[ end log ]</p>
            </div>
          </div>

          {/* Navigation hints */}
          <div
            className="mt-12 flex flex-wrap gap-3 justify-center"
            style={{ animation: "fade-up 1s ease-out 1.8s both" }}
          >
            {[
              { to: "/about", label: "identity fragments" },
              { to: "/hall-of-selves", label: "meet the selves" },
              { to: "/music", label: "sound worship" },
              { to: "/cinema", label: "cinema mania" },
              { to: "/nightmare", label: "enter the nightmare" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="panel-gothic px-4 py-2 font-pixel text-sm text-muted-foreground hover:text-primary hover:border-glow transition-all duration-300 hover:shadow-[0_0_12px_hsl(var(--glow-purple)/0.2)]"
              >
                ✧ {link.label}
              </Link>
            ))}
          </div>

          {/* Status widget */}
          <div
            className="mt-10 panel-gothic p-4 max-w-xs w-full text-center relative"
            style={{ animation: "fade-up 1s ease-out 2.2s both" }}
          >
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-pale-pink/20" />
            <p className="font-pixel text-xs text-muted-foreground">currently listening:</p>
            <a
              href="https://open.spotify.com/user/7o15ghrdo31llct7dxf4l26pk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-xs text-primary hover:text-glow-pink transition-colors"
            >
              → check spotify
            </a>
          </div>

          {/* Hidden secret */}
          <div className="mt-16 mb-10">
            <span className="secret-text font-pixel text-xs cursor-help">
              you found a crack in the code. this means something.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
