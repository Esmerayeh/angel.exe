import { useState, useEffect } from "react";

interface DreamObject {
  id: string;
  emoji: string;
  name: string;
  message: string;
  x: number;
  y: number;
  found: boolean;
}

const initialObjects: DreamObject[] = [
  { id: "star", emoji: "✧", name: "cracked star", message: "you kept this from a dream you can't remember", x: 15, y: 25, found: false },
  { id: "eye", emoji: "◉", name: "watching eye", message: "it blinks when you're not looking", x: 70, y: 20, found: false },
  { id: "key", emoji: "🗝", name: "rusted key", message: "it opens something that doesn't exist yet", x: 40, y: 60, found: false },
  { id: "heart", emoji: "♡", name: "glass heart", message: "careful. it still has someone's name on it", x: 80, y: 55, found: false },
  { id: "moon", emoji: "☾", name: "broken moon", message: "she fell. she's still falling.", x: 25, y: 75, found: false },
  { id: "mirror", emoji: "◇", name: "void mirror", message: "you looked. you shouldn't have looked.", x: 60, y: 40, found: false },
  { id: "cat", emoji: "🐈‍⬛", name: "nightmare cat", message: "she knows your real name", x: 50, y: 15, found: false },
  { id: "flower", emoji: "🥀", name: "dead rose", message: "it was beautiful once. it still is, actually.", x: 85, y: 80, found: false },
  { id: "tape", emoji: "📼", name: "cursed tape", message: "it plays a song you've never heard but know by heart", x: 10, y: 50, found: false },
  { id: "skull", emoji: "💀", name: "sugar skull", message: "sweet on the outside. hollow inside. just like you.", x: 35, y: 85, found: false },
];

const ambientTexts = [
  "the walls are breathing",
  "someone was here before you",
  "this room doesn't exist during the day",
  "you hear music from another room",
  "the shadows have names",
  "don't trust the mirror",
  "she's watching from the ceiling",
  "you've been here before, haven't you?",
];

const NightmareInterface = () => {
  const [objects, setObjects] = useState(initialObjects);
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const [ambientText, setAmbientText] = useState("");
  const [collected, setCollected] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmbientText(ambientTexts[Math.floor(Math.random() * ambientTexts.length)]);
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 300);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (obj: DreamObject) => {
    if (obj.found) return;
    setActiveMessage(obj.message);
    setObjects(prev => prev.map(o => o.id === obj.id ? { ...o, found: true } : o));
    setCollected(prev => prev + 1);
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 200);
    setTimeout(() => setActiveMessage(null), 4000);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Dark ambient background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(270 30% 8%), hsl(270 20% 3%) 70%)",
        }}
      />
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 70% 30%, hsl(var(--glow-purple) / 0.15), transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1
            className={`font-gothic text-4xl md:text-5xl text-primary text-glow ${glitchActive ? "glitch-text" : ""}`}
          >
            Nightmare Interface
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ nyx nightmare coded ]</p>
          <p className="font-handwritten text-lg text-pale-pink/60 mt-3">
            "click around. find things. don't ask what they mean."
          </p>
        </div>

        {/* Stats */}
        <div className="text-center mb-4 font-pixel text-xs text-muted-foreground" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
          <span>collected: {collected}/{objects.length}</span>
          {collected === objects.length && (
            <span className="ml-4 text-accent flicker-text">[ you found everything. or did everything find you? ]</span>
          )}
        </div>

        {/* Dream room */}
        <div
          className="relative w-full aspect-[16/9] md:aspect-[2/1] panel-gothic overflow-hidden"
          style={{
            animation: "fade-up 0.8s ease-out 0.3s both",
            background: "radial-gradient(ellipse at center, hsl(270 20% 6%), hsl(var(--void)))",
          }}
        >
          {/* Grid lines for atmosphere */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Ambient text */}
          {ambientText && (
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-pixel text-sm text-primary/20 pointer-events-none whitespace-nowrap"
              style={{ animation: "flicker 3s infinite" }}
            >
              {ambientText}
            </div>
          )}

          {/* Dream objects */}
          {objects.map((obj) => (
            <button
              key={obj.id}
              onClick={() => handleClick(obj)}
              className={`absolute transition-all duration-500 hover:scale-150 ${
                obj.found
                  ? "opacity-30 cursor-default scale-75"
                  : "opacity-70 hover:opacity-100 cursor-pointer animate-float"
              }`}
              style={{
                left: `${obj.x}%`,
                top: `${obj.y}%`,
                transform: "translate(-50%, -50%)",
                fontSize: obj.found ? "1.2rem" : "1.8rem",
                filter: obj.found ? "grayscale(1)" : "none",
                textShadow: obj.found ? "none" : `0 0 10px hsl(var(--glow-purple) / 0.5)`,
              }}
              title={obj.found ? obj.name : "???"}
            >
              {obj.emoji}
            </button>
          ))}
        </div>

        {/* Message display */}
        {activeMessage && (
          <div
            className="mt-4 panel-glow p-4 text-center"
            style={{ animation: "fade-up 0.5s ease-out" }}
          >
            <p className="font-handwritten text-lg text-accent">{activeMessage}</p>
          </div>
        )}

        {/* Collection */}
        <div className="mt-8 panel-gothic p-6" style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}>
          <h2 className="font-pixel text-sm text-primary mb-4">✧ cursed collection</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {objects.map((obj) => (
              <div
                key={obj.id}
                className={`border p-3 text-center transition-all ${
                  obj.found
                    ? "border-primary/30 bg-primary/5"
                    : "border-border/30 bg-secondary/20"
                }`}
              >
                <span className={`text-xl ${obj.found ? "" : "opacity-20"}`}>{obj.emoji}</span>
                <p className="font-pixel text-xs mt-1 text-muted-foreground">
                  {obj.found ? obj.name : "???"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dialogue snippets */}
        <div className="mt-8 space-y-3" style={{ animation: "fade-up 0.8s ease-out 0.7s both" }}>
          <h2 className="font-pixel text-sm text-primary text-center mb-4">✧ whispers from the room</h2>
          {[
            { speaker: "???", text: "you came back. i knew you would." },
            { speaker: "the mirror", text: "i don't show what you look like. i show what you are." },
            { speaker: "nyx", text: "the nightmare isn't the scary part. waking up is." },
            { speaker: "???", text: "collect all the pieces. maybe they'll form something. maybe they won't." },
          ].map((dialogue, i) => (
            <div key={i} className="panel-gothic p-3 max-w-md mx-auto">
              <span className="font-pixel text-xs text-accent">[{dialogue.speaker}]</span>
              <p className="font-handwritten text-base text-foreground/70 mt-1">{dialogue.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="secret-text font-pixel text-xs">
            you can leave now. if you remember how.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NightmareInterface;
