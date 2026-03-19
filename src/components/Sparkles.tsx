import { useEffect, useState } from "react";

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number; color: string }>>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--glow-purple))",
      "hsl(var(--silver))",
      "hsl(var(--pale-pink))",
      "hsl(var(--icy-blue))",
      "hsl(var(--glow-pink))",
    ];
    const newSparkles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 4 + 1,
      color: colors[i % colors.length],
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            borderRadius: "50%",
            boxShadow: `0 0 ${s.size * 3}px ${s.color.replace(")", " / 0.4)")}`,
            animation: `sparkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
