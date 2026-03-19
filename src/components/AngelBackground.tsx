const AngelBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-background to-void" />

      {/* Cathedral glass glow - top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-[0.04]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--glow-purple) / 0.6), hsl(var(--icy-blue) / 0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Left wing silhouette */}
      <div
        className="absolute top-[15%] left-[5%] w-[300px] h-[500px] opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, hsl(var(--silver) / 0.8), transparent 60%)",
          clipPath: "polygon(100% 50%, 80% 20%, 40% 5%, 10% 15%, 0% 40%, 5% 60%, 20% 85%, 50% 95%, 80% 80%)",
          filter: "blur(8px)",
        }}
      />

      {/* Right wing silhouette */}
      <div
        className="absolute top-[15%] right-[5%] w-[300px] h-[500px] opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(var(--silver) / 0.8), transparent 60%)",
          clipPath: "polygon(0% 50%, 20% 20%, 60% 5%, 90% 15%, 100% 40%, 95% 60%, 80% 85%, 50% 95%, 20% 80%)",
          filter: "blur(8px)",
        }}
      />

      {/* Halo ring - top center */}
      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[200px] h-[60px] opacity-[0.06] rounded-[50%]"
        style={{
          border: "2px solid hsl(var(--silver) / 0.6)",
          boxShadow: "0 0 30px hsl(var(--silver) / 0.3), inset 0 0 20px hsl(var(--silver) / 0.1)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Second halo - smaller, offset */}
      <div
        className="absolute top-[12%] left-[calc(50%-20px)] w-[140px] h-[40px] opacity-[0.04] rounded-[50%]"
        style={{
          border: "1px solid hsl(var(--pale-pink) / 0.5)",
          boxShadow: "0 0 20px hsl(var(--pale-pink) / 0.2)",
          animation: "float 6s ease-in-out infinite 1s",
        }}
      />

      {/* Cathedral arch - left */}
      <div
        className="absolute bottom-0 left-0 w-[200px] h-[70vh] opacity-[0.02]"
        style={{
          background: "linear-gradient(to top, hsl(var(--glow-purple) / 0.4), transparent 80%)",
          clipPath: "polygon(0% 100%, 0% 20%, 10% 5%, 30% 0%, 50% 5%, 60% 20%, 60% 100%)",
        }}
      />

      {/* Cathedral arch - right */}
      <div
        className="absolute bottom-0 right-0 w-[200px] h-[70vh] opacity-[0.02]"
        style={{
          background: "linear-gradient(to top, hsl(var(--glow-purple) / 0.4), transparent 80%)",
          clipPath: "polygon(40% 100%, 40% 20%, 50% 5%, 70% 0%, 90% 5%, 100% 20%, 100% 100%)",
        }}
      />

      {/* Light bloom - center left */}
      <div
        className="absolute top-[40%] left-[15%] w-[300px] h-[300px] opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, hsl(var(--pale-pink) / 0.5), transparent 60%)",
          filter: "blur(40px)",
          animation: "drift 20s ease-in-out infinite",
        }}
      />

      {/* Light bloom - center right */}
      <div
        className="absolute top-[30%] right-[10%] w-[250px] h-[250px] opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, hsl(var(--icy-blue) / 0.4), transparent 60%)",
          filter: "blur(40px)",
          animation: "drift 18s ease-in-out infinite 3s",
        }}
      />

      {/* Gothic filigree line - decorative horizontal */}
      <div
        className="absolute top-[25%] left-0 right-0 h-px opacity-[0.06]"
        style={{
          background: "linear-gradient(to right, transparent 10%, hsl(var(--silver) / 0.5) 30%, hsl(var(--glow-purple) / 0.3) 50%, hsl(var(--silver) / 0.5) 70%, transparent 90%)",
        }}
      />

      {/* Gothic filigree line - lower */}
      <div
        className="absolute top-[75%] left-0 right-0 h-px opacity-[0.04]"
        style={{
          background: "linear-gradient(to right, transparent 15%, hsl(var(--pale-pink) / 0.4) 35%, hsl(var(--silver) / 0.2) 50%, hsl(var(--pale-pink) / 0.4) 65%, transparent 85%)",
        }}
      />

      {/* Fallen angel figure - ghosted center bottom */}
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[120px] h-[200px] opacity-[0.02]"
        style={{
          background: "linear-gradient(to top, transparent 10%, hsl(var(--silver) / 0.5) 50%, transparent 90%)",
          clipPath: "polygon(50% 0%, 35% 10%, 30% 30%, 25% 50%, 20% 80%, 30% 100%, 70% 100%, 80% 80%, 75% 50%, 70% 30%, 65% 10%)",
          filter: "blur(4px)",
        }}
      />

      {/* Floating cross / sacred symbol */}
      <div
        className="absolute top-[60%] right-[20%] opacity-[0.03]"
        style={{ animation: "float 10s ease-in-out infinite 2s" }}
      >
        <div className="w-[2px] h-[40px] bg-silver mx-auto" />
        <div className="w-[20px] h-[2px] bg-silver absolute top-[10px] left-1/2 -translate-x-1/2" />
      </div>

      {/* Lace texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--silver) / 0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, hsl(var(--silver) / 0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 80%, hsl(var(--silver) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 80px 80px, 70px 70px",
        }}
      />

      {/* Dust particles / tiny stars */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${(i * 37 + 13) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            width: `${1 + (i % 3)}px`,
            height: `${1 + (i % 3)}px`,
            background: i % 3 === 0
              ? "hsl(var(--silver) / 0.4)"
              : i % 3 === 1
              ? "hsl(var(--pale-pink) / 0.3)"
              : "hsl(var(--icy-blue) / 0.3)",
            animation: `sparkle ${3 + (i % 4)}s ease-in-out infinite ${(i * 0.7) % 5}s`,
          }}
        />
      ))}

      {/* Shimmer / static noise layer */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AngelBackground;
