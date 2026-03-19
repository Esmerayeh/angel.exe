const thoughts = [
  {
    title: "love vs perception",
    content: "do we love people or do we love our idea of them? i think every relationship is just two people performing their favorite version of themselves until one of them gets tired. and then it's just silence and screenshots.",
    tag: "obsession",
    date: "xx.xx.xxxx",
  },
  {
    title: "honeyed poison",
    content: "all the best things in life are a little parasitic, a little consuming, a little possessive. the songs that ruin me. the people who stay with teeth in them. the feelings i know are bad but chase anyway. honeyed poison. i drink it willingly.",
    tag: "ache",
    date: "xx.xx.xxxx",
  },
  {
    title: "longing as a lifestyle",
    content: "firm believer that at every moment there should be someone you miss. missing someone means you had something worth losing. and the ache? it's proof you're still soft enough to feel. i don't want to stop missing people. i want to collect them like songs i can't stop playing.",
    tag: "longing",
  },
  {
    title: "identity is a playlist",
    content: "i change who i am based on what i'm listening to. is that a personality disorder or is that just being alive? i think we're all just soundtracks pretending to be people.",
    tag: "void",
    date: "xx.xx.xxxx",
  },
  {
    title: "internet nostalgia",
    content: "i miss the internet when it was ugly. when websites had soul. when your MySpace page was a declaration of war against good design. now everything is clean and optimized and it all looks the same and none of it feels like anything.",
    tag: "melancholy",
  },
  {
    title: "obsession as art form",
    content: "people tell me i'm too intense. that i care too much. that i should be more casual about things. but casual feels like lying. i'd rather burn than simmer. i'd rather be consumed than comfortable. obsession is just love with its volume up.",
    tag: "obsession",
  },
  {
    title: "the meditative burn",
    content: "i like how it feels to smoke—the burn in my lungs, the way time slows down. it's meditative. everything pauses. the world becomes just me and the smoke and the silence. i know it's bad. that's part of it. the best things always are.",
    tag: "smoke",
    date: "xx.xx.xxxx",
  },
  {
    title: "the loneliness of understanding",
    content: "the worst kind of lonely isn't being alone. it's being surrounded by people who almost understand you. the 'almost' is what kills you. it's the gap between 'i get it' and actually getting it.",
    tag: "midnight",
  },
  {
    title: "fantasy vs reality",
    content: "reality is just a low-resolution version of what i imagined. everything is dimmer, quieter, less dramatic. maybe that's why i live in fiction. at least there, the feelings match the intensity.",
    tag: "dream",
  },
  {
    title: "why missing someone is important",
    content: "making deep relationships, being open and eager to live life meaningfully—i love taking that bid. the risk of caring. the vulnerability of showing up. people think protection is strength but i think openness is braver. i'd rather miss someone than never have known them.",
    tag: "angel",
  },
];

const tagColors: Record<string, string> = {
  obsession: "var(--glow-pink)",
  ache: "var(--pale-pink)",
  longing: "var(--icy-blue)",
  void: "var(--glow-purple)",
  melancholy: "var(--silver)",
  smoke: "var(--silver)",
  midnight: "var(--glow-blue)",
  dream: "var(--glow-purple)",
  angel: "var(--pale-pink)",
};

const ThoughtFiles = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <div className="flex justify-center mb-3">
            <div className="w-[70px] h-[22px] rounded-[50%] border border-silver/15 opacity-25"
              style={{ boxShadow: "0 0 10px hsl(var(--silver) / 0.15)", animation: "float 8s ease-in-out infinite" }}
            />
          </div>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Thought Files
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">
            [ fragmented. poetic. slightly unhinged. ]
          </p>
          <p className="font-handwritten text-lg text-pale-pink/60 mt-3">
            "log files from a mind that won't shut up"
          </p>
        </div>

        <div className="space-y-5">
          {thoughts.map((t, i) => {
            const color = tagColors[t.tag] || "var(--glow-purple)";
            return (
              <div
                key={i}
                className="panel-gothic p-6 space-y-3 relative group overflow-hidden"
                style={{ animation: `fade-up 0.8s ease-out ${0.2 + i * 0.08}s both` }}
              >
                {/* Accent glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 50%, hsl(${color} / 0.05), transparent 50%)` }}
                />
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ borderColor: `hsl(${color})` }} />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ borderColor: `hsl(${color})` }} />

                <div className="flex items-center justify-between flex-wrap gap-2 relative z-10">
                  <h2 className="font-pixel text-sm text-primary">{t.title}</h2>
                  <div className="flex gap-2 items-center">
                    {t.tag && (
                      <span className="font-pixel text-xs px-2 py-0.5 border border-border bg-secondary text-accent"
                        style={{ borderColor: `hsl(${color} / 0.3)` }}>
                        {t.tag}
                      </span>
                    )}
                    {t.date && (
                      <span className="font-pixel text-xs text-muted-foreground">{t.date}</span>
                    )}
                  </div>
                </div>
                <p className="font-handwritten text-lg text-foreground/80 leading-relaxed relative z-10">
                  {t.content}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <span className="secret-text font-pixel text-xs">
            if you read all of these, you know me better than most people do
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThoughtFiles;
