const MusicSanctuary = () => {
  const genres = [
    { name: "shoegaze", desc: "walls of sound that swallow you whole" },
    { name: "dreampop", desc: "if clouds made music" },
    { name: "classic rock", desc: "the kind that remembers things you don't" },
    { name: "post-punk", desc: "sharp edges, soft centers" },
    { name: "ambient", desc: "the sound of almost sleeping" },
    { name: "j-rock", desc: "feelings that only exist in japanese" },
    { name: "alternative", desc: "everything slightly left of center" },
    { name: "indie", desc: "small rooms, big feelings" },
    { name: "grunge", desc: "the beautiful ugly" },
  ];

  const artists = [
    "my bloody valentine", "cocteau twins", "mazzy star", "radiohead",
    "the cure", "deftones", "wisp", "lush", "slowdive", "portishead",
    "björk", "evanescence", "dir en grey", "luna sea", "cigarettes after sex",
    "beach house", "sonic youth", "the smiths", "joy division", "siouxsie",
  ];

  const playlists = [
    { name: "midnight static", mood: "for 3am when nothing feels real", color: "var(--glow-purple)" },
    { name: "honeyed poison", mood: "songs that taste like bad decisions", color: "var(--glow-pink)" },
    { name: "angel frequencies", mood: "ethereal, soft, ascending", color: "var(--icy-blue)" },
    { name: "cinema in my head", mood: "soundtracks to movies that don't exist", color: "var(--silver)" },
    { name: "smoke signals", mood: "slow burn, heavy air", color: "var(--pale-pink)" },
    { name: "glitch lullabies", mood: "broken songs for broken sleep", color: "var(--glow-blue)" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Sound Worship System
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ sacred ground ]</p>
        </div>

        {/* Spotify link */}
        <div className="text-center mb-8" style={{ animation: "fade-up 0.8s ease-out 0.15s both" }}>
          <a
            href="https://open.spotify.com/user/7o15ghrdo31llct7dxf4l26pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block panel-glow px-6 py-3 font-pixel text-sm text-primary hover:text-glow-pink transition-all duration-300 hover:scale-105"
          >
            ✧ open my spotify ✧
          </a>
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
          <p className="mb-3 text-muted-foreground">
            music is not just entertainment.<br />
            it is identity, memory, longing, atmosphere,<br />
            and emotional architecture.
          </p>
          <p className="text-muted-foreground">
            every playlist is a self-portrait.<br />
            every repeat is a ritual.
          </p>
        </div>

        {/* Playlist shrine */}
        <div className="mb-8">
          <h2 className="font-pixel text-sm text-primary text-center mb-4" style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}>✧ playlist shrine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {playlists.map((p, i) => (
              <div
                key={p.name}
                className="shrine-card p-4 space-y-2 group cursor-default"
                style={{ animation: `fade-up 0.8s ease-out ${0.35 + i * 0.08}s both` }}
              >
                <div
                  className="w-full h-20 rounded-sm opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, hsl(${p.color} / 0.4), hsl(var(--void)))`,
                  }}
                />
                <h3 className="font-pixel text-sm text-foreground">{p.name}</h3>
                <p className="font-handwritten text-sm text-muted-foreground">{p.mood}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Genres */}
          <div className="panel-gothic p-6 space-y-4" style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}>
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
          <div className="panel-gothic p-6 space-y-4" style={{ animation: "fade-up 0.8s ease-out 0.6s both" }}>
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
        <div className="mt-8 panel-glow p-6 text-center" style={{ animation: "fade-up 0.8s ease-out 0.7s both" }}>
          <h2 className="font-gothic text-2xl text-primary text-glow mb-4">what music feels like to me</h2>
          <p className="font-handwritten text-xl text-foreground/70 max-w-lg mx-auto leading-relaxed">
            it's not entertainment. it's not background.<br />
            it's the closest thing i have to prayer.<br />
            every song is a room i can live in<br />
            for three minutes and forty-two seconds<br />
            before the world comes back.
          </p>
        </div>

        {/* Love letter */}
        <div className="mt-8 diary-entry max-w-2xl mx-auto" style={{ animation: "fade-up 0.8s ease-out 0.8s both" }}>
          <h3 className="font-pixel text-sm text-primary mb-3">[ love_letter_to_music.txt ]</h3>
          <div className="text-lg text-foreground/80 leading-relaxed">
            <p className="mb-3">you are the only thing that has never lied to me.</p>
            <p className="mb-3">every song i've ever loved has told me something about myself i wasn't ready to hear.</p>
            <p className="mb-3 text-accent">i collect sounds like memories—</p>
            <p className="mb-3 text-muted-foreground">
              shoegaze haze, dreampop softness,<br />
              old rock that feels like it remembers something i don't.
            </p>
            <p className="mb-3">you are identity. you are atmosphere. you are emotional architecture.</p>
            <p className="text-primary/60">i will never stop disappearing into you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSanctuary;
