const ThoughtFiles = () => {
  const thoughts = [
    {
      title: "love vs perception",
      content: "do we love people or do we love our idea of them? i think every relationship is just two people performing their favorite version of themselves until one of them gets tired. and then it's just silence and screenshots.",
      tag: "obsession",
      date: "xx.xx.xxxx",
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
      title: "the loneliness of understanding",
      content: "the worst kind of lonely isn't being alone. it's being surrounded by people who almost understand you. the 'almost' is what kills you. it's the gap between 'i get it' and actually getting it.",
      tag: "dream",
    },
    {
      title: "fantasy vs reality",
      content: "reality is just a low-resolution version of what i imagined. everything is dimmer, quieter, less dramatic. maybe that's why i live in fiction. at least there, the feelings match the intensity.",
      tag: "void",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Thought Files
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">
            [ fragmented. poetic. slightly unhinged. ]
          </p>
        </div>

        <div className="space-y-6">
          {thoughts.map((t, i) => (
            <div
              key={i}
              className="panel-gothic p-6 space-y-3"
              style={{ animation: `fade-up 0.8s ease-out ${0.2 + i * 0.15}s both` }}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-pixel text-sm text-primary">{t.title}</h2>
                <div className="flex gap-2 items-center">
                  {t.tag && (
                    <span className="font-pixel text-xs px-2 py-0.5 border border-border bg-secondary text-accent">
                      {t.tag}
                    </span>
                  )}
                  {t.date && (
                    <span className="font-pixel text-xs text-muted-foreground">{t.date}</span>
                  )}
                </div>
              </div>
              <p className="font-handwritten text-lg text-foreground/80 leading-relaxed">
                {t.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThoughtFiles;
