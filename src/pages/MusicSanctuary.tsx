const playlists = [
  {
    name: "octopus in a jar of stars",
    url: "https://open.spotify.com/playlist/7ok0w6gwgqrsenY26yeSbp",
    mood: "strange beauty, cosmic loneliness, something glittering in the dark",
    color: "var(--glow-purple)",
  },
  {
    name: "look out upon the myraid harbour",
    url: "https://open.spotify.com/playlist/05QYO15w9valMHdbLYOIFX",
    mood: "vast, aching, staring at something bigger than you",
    color: "var(--icy-blue)",
  },
  {
    name: "wristcutters: a love story",
    url: "https://open.spotify.com/playlist/1Cc1YRCkCHLGM6TdrnWE40",
    mood: "tender self-destruction, bittersweet and bleeding softly",
    color: "var(--glow-pink)",
  },
  {
    name: "violet bruises & candy coated kisses",
    url: "https://open.spotify.com/playlist/2y7EJFWF63iyvA1xtYOSeY",
    mood: "sweet pain, bruised romanticism, sugar-glazed wounds",
    color: "var(--pale-pink)",
  },
  {
    name: "tattooed on my mind",
    url: "https://open.spotify.com/playlist/60BqgaPDgLfi9z50x95Ky3",
    mood: "can't forget, won't forget, inked into the neurons",
    color: "var(--glow-purple)",
  },
  {
    name: "the sweet sound of you",
    url: "https://open.spotify.com/playlist/3wpcZUSGslOBWZutximfat",
    mood: "honeyed devotion, love that tastes like music",
    color: "var(--pale-pink)",
  },
  {
    name: "through the devil softly",
    url: "https://open.spotify.com/playlist/12oXV19djvmcXJnoLFYdOM",
    mood: "walking through darkness with grace, quietly dangerous",
    color: "var(--silver)",
  },
  {
    name: "principles of lust: sadness/find love/sadness",
    url: "https://open.spotify.com/playlist/3PADp2HuyhZEYuR03Jnjjl",
    mood: "the cycle, the ache, the beautiful torture of wanting",
    color: "var(--glow-pink)",
  },
  {
    name: "she bangs like a fairy on acid",
    url: "https://open.spotify.com/playlist/0H2zWg4ilLP0U9u7tmEM2n",
    mood: "unhinged, ethereal, chaotic femme energy",
    color: "var(--glow-purple)",
  },
  {
    name: "dreams, inconsistent angel wings",
    url: "https://open.spotify.com/playlist/1Ibj0U5uKx6Keo2dI1Yu8g",
    mood: "half-formed heaven, flickering between sleep and flight",
    color: "var(--icy-blue)",
  },
  {
    name: "⋆｡‧˚ʚ music boyfriend, I'm your yum yum ɞ˚‧｡⋆",
    url: "https://open.spotify.com/playlist/2V80HxyX74UHt5fR8aYgmf",
    mood: "deliriously in love with sound itself",
    color: "var(--glow-pink)",
  },
  {
    name: "draft daughter's blues aka ootischenia",
    url: "https://open.spotify.com/playlist/3cy89lGJRr5FHo1U9bn7YB",
    mood: "melancholic inheritance, sadness passed down like heirlooms",
    color: "var(--silver)",
  },
  {
    name: "⊹˚₊1245‧₊˚ ✩",
    url: "https://open.spotify.com/playlist/59sRQNpeUWWrKDdRAKiB4P",
    mood: "coded, cryptic, a playlist that speaks in numbers",
    color: "var(--glow-blue)",
  },
  {
    name: "i died so i could haunt you",
    url: "https://open.spotify.com/playlist/5HtOLfd5iYF13tvleNfMdW",
    mood: "ghostly devotion, love from the other side",
    color: "var(--glow-purple)",
  },
  {
    name: "It's sad to belong",
    url: "https://open.spotify.com/playlist/60NVDwFRxNxKmcJ1rijHh7",
    mood: "quiet heartbreak, the ache of being somewhere you shouldn't",
    color: "var(--pale-pink)",
  },
  {
    name: "legends on loop: eternal bangers society",
    url: "https://open.spotify.com/playlist/7oX8rXPEwmkpIwkdUfGtYa",
    mood: "immortal songs, the ones that never get old",
    color: "var(--silver)",
  },
  {
    name: "starcrossed losers",
    url: "https://open.spotify.com/playlist/61fPqn06wJBgyKq6dSpNHC",
    mood: "doomed romantics, beautiful failures, love that was never going to work",
    color: "var(--glow-pink)",
  },
  {
    name: "four hands and then away",
    url: "https://open.spotify.com/playlist/6k15ZwHoUzkA8uruu4U0Ut",
    mood: "brief touch, then gone. fleeting, fragile, unforgettable",
    color: "var(--icy-blue)",
  },
  {
    name: "sorrow's native daughter",
    url: "https://open.spotify.com/playlist/64M7bfbi1Oi4Vwisdxne40",
    mood: "born sad, beautifully so, wearing melancholy like a crown",
    color: "var(--glow-purple)",
  },
  {
    name: "soft kisses on a summer's day",
    url: "https://open.spotify.com/playlist/5PKRqXKXA1GgDJ989HgKCD",
    mood: "warm light, gentle love, the fleeting golden hour",
    color: "var(--pale-pink)",
  },
];

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

const MusicSanctuary = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Sound Worship System
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ sacred ground ]</p>
          <div className="mt-3 flex justify-center">
            <div className="w-[120px] h-[35px] rounded-[50%] opacity-20 border border-silver"
              style={{ boxShadow: "0 0 20px hsl(var(--silver) / 0.3), inset 0 0 10px hsl(var(--silver) / 0.1)", animation: "float 6s ease-in-out infinite" }}
            />
          </div>
        </div>

        {/* Spotify link */}
        <div className="text-center mb-10" style={{ animation: "fade-up 0.8s ease-out 0.15s both" }}>
          <a
            href="https://open.spotify.com/user/7o15ghrdo31llct7dxf4l26pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block panel-glow px-8 py-4 font-pixel text-sm text-primary hover:text-glow-pink transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-glow-purple/5 via-glow-pink/5 to-glow-purple/5 group-hover:opacity-100 opacity-0 transition-opacity" />
            <span className="relative">✧ open my spotify ✧</span>
          </a>
        </div>

        {/* Poetic section */}
        <div className="diary-entry text-lg mb-10 max-w-2xl mx-auto relative" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-silver/20" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-silver/20" />
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
        <div className="mb-10">
          <h2 className="font-pixel text-sm text-primary text-center mb-6" style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}>
            ✧ playlist shrine ✧
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {playlists.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
                style={{ animation: `fade-up 0.8s ease-out ${0.35 + i * 0.05}s both` }}
              >
                <div className="shrine-card p-4 space-y-3 h-full relative overflow-hidden">
                  {/* Glow background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 80%, hsl(${p.color} / 0.15), transparent 70%)`,
                    }}
                  />
                  {/* Angel texture overlay */}
                  <div
                    className="w-full h-20 rounded-sm relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, hsl(${p.color} / 0.15), hsl(var(--void)) 60%, hsl(${p.color} / 0.08))`,
                    }}
                  >
                    {/* Decorative halo */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-3 rounded-[50%] border border-current opacity-10 group-hover:opacity-25 transition-opacity"
                      style={{ color: `hsl(${p.color})` }}
                    />
                    {/* Wing shapes */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-0">
                      <div className="w-8 h-6 opacity-5 group-hover:opacity-10 transition-opacity"
                        style={{ background: `radial-gradient(ellipse at right, hsl(${p.color} / 0.8), transparent)` }}
                      />
                      <div className="w-8 h-6 opacity-5 group-hover:opacity-10 transition-opacity"
                        style={{ background: `radial-gradient(ellipse at left, hsl(${p.color} / 0.8), transparent)` }}
                      />
                    </div>
                    {/* Sparkle */}
                    <div className="absolute top-3 right-3 w-1 h-1 rounded-full opacity-40"
                      style={{ background: `hsl(${p.color})`, boxShadow: `0 0 4px hsl(${p.color} / 0.5)`, animation: "sparkle 3s ease-in-out infinite" }}
                    />
                  </div>
                  {/* Corner frames */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ borderColor: `hsl(${p.color})` }}
                  />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ borderColor: `hsl(${p.color})` }}
                  />
                  <h3 className="font-pixel text-sm text-foreground leading-tight relative z-10 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-handwritten text-sm text-muted-foreground leading-snug relative z-10">
                    {p.mood}
                  </p>
                  <span className="font-pixel text-[10px] text-primary/40 group-hover:text-primary/70 transition-colors relative z-10">
                    → open in spotify
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Genres */}
          <div className="panel-gothic p-6 space-y-4 relative" style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}>
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-silver/10" />
            <h2 className="font-pixel text-sm text-primary">✧ genres i dissolve into</h2>
            <div className="space-y-3">
              {genres.map((g) => (
                <div key={g.name} className="border-b border-border/30 pb-2 hover:border-primary/20 transition-colors">
                  <span className="font-pixel text-sm text-foreground">{g.name}</span>
                  <p className="font-handwritten text-sm text-muted-foreground">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Artists */}
          <div className="panel-gothic p-6 space-y-4 relative" style={{ animation: "fade-up 0.8s ease-out 0.6s both" }}>
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-silver/10" />
            <h2 className="font-pixel text-sm text-primary">✧ artists that rewrote me</h2>
            <div className="flex flex-wrap gap-2">
              {artists.map((a) => (
                <span
                  key={a}
                  className="font-pixel text-xs px-2 py-1 border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_8px_hsl(var(--glow-purple)/0.2)] transition-all cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What music feels like */}
        <div className="mt-8 panel-glow p-8 text-center relative" style={{ animation: "fade-up 0.8s ease-out 0.7s both" }}>
          <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-pale-pink/15" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-pale-pink/15" />
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
        <div className="mt-8 diary-entry max-w-2xl mx-auto relative" style={{ animation: "fade-up 0.8s ease-out 0.8s both" }}>
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-silver/15" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-silver/15" />
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
