import { useState, useEffect } from "react";

const instruments = [
  {
    name: "electric guitar",
    icon: "🎸",
    feeling: "the one that screams what i can't say. distortion is just honesty with the volume up.",
    color: "var(--glow-purple)",
  },
  {
    name: "bass guitar",
    icon: "🎵",
    feeling: "the heartbeat underneath everything. you don't always hear it, but you'd feel it missing.",
    color: "var(--glow-blue)",
  },
  {
    name: "piano / keys",
    icon: "🎹",
    feeling: "every key is a different shade of sadness. or joy. depends on the hour.",
    color: "var(--pale-pink)",
  },
  {
    name: "drums",
    icon: "🥁",
    feeling: "chaos organized. the thing that keeps time when i can't keep anything else.",
    color: "var(--glow-pink)",
  },
  {
    name: "vinyl / turntable",
    icon: "💿",
    feeling: "the crackle before the music starts is the most beautiful sound in the world.",
    color: "var(--silver)",
  },
  {
    name: "voice",
    icon: "🎤",
    feeling: "the most vulnerable instrument. it's just you, unfiltered, vibrating into the void.",
    color: "var(--icy-blue)",
  },
];

const Instruments = () => {
  const [activeWave, setActiveWave] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWave(prev => (prev + 1) % 20);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Sound Altar
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ instruments of becoming ]</p>
        </div>

        {/* Soundwave visualization */}
        <div className="flex justify-center items-end gap-1 h-16 mb-10" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
          {Array.from({ length: 30 }, (_, i) => {
            const height = Math.sin((i + activeWave) * 0.5) * 20 + 25;
            return (
              <div
                key={i}
                className="w-1 rounded-full transition-all duration-200"
                style={{
                  height: `${height}px`,
                  backgroundColor: `hsl(var(--primary) / ${0.3 + Math.sin((i + activeWave) * 0.3) * 0.4})`,
                  boxShadow: `0 0 4px hsl(var(--glow-purple) / 0.3)`,
                }}
              />
            );
          })}
        </div>

        {/* Why sound matters */}
        <div className="diary-entry text-lg max-w-2xl mx-auto mb-10" style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}>
          <p className="mb-3">sound is the closest thing to touching something invisible.</p>
          <p className="mb-3 text-accent">
            when i hear a guitar distort,<br />
            i feel it in my chest like a second heartbeat.
          </p>
          <p className="mb-3 text-muted-foreground">
            i don't just want to listen to music—<br />
            i want to understand how it's made,<br />
            how vibrations become feelings,<br />
            how strings and air and electricity<br />
            can make someone cry.
          </p>
          <p>that's magic. that's the only kind i believe in.</p>
        </div>

        {/* Instrument cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {instruments.map((inst, i) => (
            <div
              key={inst.name}
              className="shrine-card p-5 space-y-3 group"
              style={{ animation: `fade-up 0.8s ease-out ${0.4 + i * 0.1}s both` }}
            >
              <div
                className="w-full h-20 rounded-sm flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                style={{
                  background: `radial-gradient(circle, hsl(${inst.color} / 0.2), hsl(var(--void)))`,
                }}
              >
                <span className="text-3xl">{inst.icon}</span>
              </div>
              <h3 className="font-pixel text-sm text-primary">{inst.name}</h3>
              <p className="font-handwritten text-sm text-foreground/70 leading-relaxed">
                {inst.feeling}
              </p>
            </div>
          ))}
        </div>

        {/* Ambient motifs */}
        <div className="mt-12 panel-glow p-6 text-center" style={{ animation: "fade-up 0.8s ease-out 1s both" }}>
          <h2 className="font-pixel text-sm text-primary mb-4">✧ sounds that feel like home</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "guitar feedback", "vinyl crackle", "cassette hiss", "amp hum",
              "string resonance", "reverb tail", "drum room echo", "fret buzz",
              "piano sustain", "mic feedback", "tuning pegs", "pick scrape",
            ].map(sound => (
              <span
                key={sound}
                className="font-pixel text-xs px-3 py-1 border border-border bg-secondary/30 text-muted-foreground hover:text-accent hover:border-accent/30 transition-all cursor-default"
              >
                {sound}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="secret-text font-pixel text-xs">
            i talk to instruments more honestly than i talk to people
          </span>
        </div>
      </div>
    </div>
  );
};

export default Instruments;
