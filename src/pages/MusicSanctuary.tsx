const MusicSanctuary = () => {
  const genres = [
    { name: "shoegaze", desc: "walls of sound that swallow you whole" },
    { name: "dreampop", desc: "if clouds made music" },
    { name: "classic rock", desc: "the kind that remembers things you don't" },
    { name: "post-punk", desc: "sharp edges, soft centers" },
    { name: "ambient", desc: "the sound of almost sleeping" },
    { name: "j-rock", desc: "feelings that only exist in japanese" },
  ];

  const artists = [
    "my bloody valentine", "cocteau twins", "mazzy star", "radiohead",
    "the cure", "deftones", "wisp", "lush", "slowdive", "portishead",
    "björk", "evanescence", "dir en grey", "luna sea",
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Music Sanctuary
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ sacred ground ]</p>
        </div>

        {/* Poetic section */}
        <div className="diary-entry text-lg mb-8 max-w-2xl mx-auto" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
          <p className="mb-3">music isn't background noise for me.</p>
          <p className="mb-3">it's the thing that holds me together when everything else is falling apart.</p>
          <p className="mb-3 text-accent">
            i don't listen to songs—<br />
            i let them open me up,<br />
            rearrange whatever's inside,<br />
            and put it back wrong.
          </p>
          <p className="text-muted-foreground">
            every playlist is a self-portrait.<br />
            every repeat is a ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Genres */}
          <div className="panel-gothic p-6 space-y-4" style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}>
            <h2 className="font-pixel text-sm text-primary">✧ genres i dissolve into</h2>
            <div className="space-y-3">
              {genres.map((g) => (
                <div key={g.name} className="border-b border-border/30 pb-2">
                  <span className="font-pixel text-sm text-foreground">{g.name}</span>
                  <p className="font-handwritten text-sm text-muted-foreground">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Artists */}
          <div className="panel-gothic p-6 space-y-4" style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}>
            <h2 className="font-pixel text-sm text-primary">✧ artists that rewrote me</h2>
            <div className="flex flex-wrap gap-2">
              {artists.map((a) => (
                <span
                  key={a}
                  className="font-pixel text-xs px-2 py-1 border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What music feels like */}
        <div className="mt-8 panel-glow p-6 text-center" style={{ animation: "fade-up 0.8s ease-out 0.6s both" }}>
          <h2 className="font-gothic text-2xl text-primary text-glow mb-4">what music feels like to me</h2>
          <p className="font-handwritten text-xl text-foreground/70 max-w-lg mx-auto leading-relaxed">
            it's not entertainment. it's not background.<br />
            it's the closest thing i have to prayer.<br />
            every song is a room i can live in<br />
            for three minutes and forty-two seconds<br />
            before the world comes back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicSanctuary;
