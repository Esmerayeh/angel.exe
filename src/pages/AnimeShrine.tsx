const favoriteGirls = [
  { name: "Nana Osaki", from: "Nana", vibe: "punk independence, cigarette smoke, heartbreak that sounds like music", color: "var(--glow-purple)" },
  { name: "Misa Amane", from: "Death Note", vibe: "chaotic devotion, gothic lolita, love as a weapon", color: "var(--glow-pink)" },
  { name: "Rei Ayanami", from: "Evangelion", vibe: "existential silence, blue haired melancholy", color: "var(--icy-blue)" },
  { name: "Asuka Langley", from: "Evangelion", vibe: "fierce, broken, refuses to be pitied", color: "var(--glow-pink)" },
  { name: "Lain Iwakura", from: "Serial Experiments Lain", vibe: "digital ghost, identity blur, internet soul", color: "var(--glow-blue)" },
  { name: "Yumeko Jabami", from: "Kakegurui", vibe: "gambling adrenaline, unhinged beauty", color: "var(--glow-purple)" },
  { name: "Tohru Honda", from: "Fruits Basket", vibe: "soft strength, the girl who saves everyone by being kind", color: "var(--pale-pink)" },
  { name: "Misaki Ayuzawa", from: "Maid Sama", vibe: "tough exterior, secretly soft, tsundere queen", color: "var(--silver)" },
];

const favoriteCouples = [
  { pair: "Nana & Ren", from: "Nana", vibe: "music, tragedy, love that kills" },
  { pair: "Usui & Misaki", from: "Maid Sama", vibe: "the tension, the devotion, the quiet obsession" },
  { pair: "Kaguya & Miyuki", from: "Kaguya-sama", vibe: "pride vs love, galaxy brain romance" },
  { pair: "Gojo & Marin", from: "My Dress-Up Darling", vibe: "wholesome weirdness, creative love" },
];

const aesthetics = [
  { name: "dark academia anime", desc: "bungo stray dogs, classroom of the elite, death note" },
  { name: "gothic romance", desc: "vampire knight, diabolik lovers, my happy marriage" },
  { name: "punk × music", desc: "nana, given, beck" },
  { name: "pastel sadness", desc: "clannad, your lie in april, fruits basket" },
  { name: "chaotic energy", desc: "kakegurui, jujutsu kaisen, chainsaw man" },
  { name: "cozy magic", desc: "kiki's delivery service, spy x family, witch watch" },
];

const allAnime = [
  "Maid Sama", "Nana", "Evangelion", "Hunter x Hunter", "Kamisama Kiss",
  "Black Clover", "Jujutsu Kaisen", "Bungo Stray Dogs", "Attack on Titan",
  "Kakegurui", "Demon Slayer", "Haikyuu", "Blue Lock", "The Apothecary Diaries",
  "Vampire Knight", "Ouran High School Host Club", "Clannad", "Spy x Family",
  "Kaguya-sama: Love is War", "Fruits Basket", "Hell's Paradise", "Diabolik Lovers",
  "Brothers Conflict", "Wolf Girl and the Black Prince", "Code: Breaker",
  "Howl's Moving Castle", "Kiki's Delivery Service", "My Happy Marriage",
  "Chainsaw Man", "7th Time Loop", "Romantic Killer", "Classroom of the Elite",
  "Assassination Classroom", "Skip Beat", "Witch Watch",
  "My Next Life as a Villainess",
];

const AnimeShrine = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <div className="flex justify-center mb-3">
            <div className="w-[80px] h-[25px] rounded-[50%] border border-glow-purple/15 opacity-25"
              style={{ boxShadow: "0 0 12px hsl(var(--glow-purple) / 0.15)", animation: "float 7s ease-in-out infinite" }}
            />
          </div>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Animated Memory Vault
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ shrine wall ]</p>
          <p className="font-handwritten text-lg text-pale-pink/60 mt-3">
            "these worlds raised me more than the real one"
          </p>
        </div>

        {/* Favorite girls */}
        <div className="mb-10">
          <h2 className="font-pixel text-sm text-primary mb-5 text-center" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
            ✧ favorite girls ✧
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {favoriteGirls.map((girl, i) => (
              <div
                key={girl.name}
                className="shrine-card p-4 space-y-2 text-center group relative overflow-hidden"
                style={{ animation: `fade-up 0.8s ease-out ${0.25 + i * 0.06}s both` }}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 80%, hsl(${girl.color} / 0.08), transparent 60%)` }}
                />
                {/* Corners */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ borderColor: `hsl(${girl.color})` }} />
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ borderColor: `hsl(${girl.color})` }} />

                <div className="w-full h-24 rounded-sm flex items-center justify-center relative"
                  style={{ background: `radial-gradient(circle, hsl(${girl.color} / 0.08), hsl(var(--void)))` }}>
                  {/* Mini wings */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                    <div className="w-10 h-12" style={{ background: `radial-gradient(ellipse at right, hsl(${girl.color} / 0.8), transparent)`, transform: "translateX(-8px)" }} />
                    <div className="w-10 h-12" style={{ background: `radial-gradient(ellipse at left, hsl(${girl.color} / 0.8), transparent)`, transform: "translateX(8px)" }} />
                  </div>
                  <span className="font-gothic text-2xl text-primary/20 relative z-10">✧</span>
                </div>
                <h3 className="font-pixel text-sm text-primary relative z-10">{girl.name}</h3>
                <p className="font-pixel text-xs text-muted-foreground relative z-10">{girl.from}</p>
                <p className="font-handwritten text-sm text-foreground/60 relative z-10">{girl.vibe}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite couples */}
        <div className="mb-10">
          <h2 className="font-pixel text-sm text-primary mb-5 text-center" style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}>
            ♡ favorite couples ♡
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {favoriteCouples.map((couple, i) => (
              <div
                key={couple.pair}
                className="panel-gothic p-4 flex gap-4 items-center group hover:border-glow transition-all relative"
                style={{ animation: `fade-up 0.8s ease-out ${0.55 + i * 0.08}s both` }}
              >
                <span className="text-2xl opacity-30 group-hover:opacity-60 group-hover:text-glow-pink transition-all">♡</span>
                <div>
                  <h3 className="font-pixel text-sm text-accent">{couple.pair}</h3>
                  <p className="font-pixel text-xs text-muted-foreground">{couple.from}</p>
                  <p className="font-handwritten text-sm text-foreground/60">{couple.vibe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aesthetics */}
        <div className="mb-10">
          <h2 className="font-pixel text-sm text-primary mb-5 text-center" style={{ animation: "fade-up 0.8s ease-out 0.7s both" }}>
            ✧ anime aesthetics i live in
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {aesthetics.map((a, i) => (
              <div
                key={a.name}
                className="panel-gothic p-4 hover:border-glow transition-all duration-300 relative group"
                style={{ animation: `fade-up 0.8s ease-out ${0.75 + i * 0.06}s both` }}
              >
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-silver/0 group-hover:border-silver/20 transition-colors" />
                <h3 className="font-pixel text-sm text-foreground">{a.name}</h3>
                <p className="font-pixel text-xs text-muted-foreground mt-1">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full stamp wall */}
        <div className="panel-gothic p-6 relative" style={{ animation: "fade-up 0.8s ease-out 0.9s both" }}>
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-silver/10" />
          <h2 className="font-pixel text-sm text-primary mb-4">✧ full shrine wall ({allAnime.length} titles)</h2>
          <div className="flex flex-wrap gap-1">
            {allAnime.map((title) => (
              <span
                key={title}
                className="font-pixel text-xs px-2 py-1 border border-border/50 bg-secondary/20 text-muted-foreground hover:text-primary hover:border-primary/20 hover:shadow-[0_0_6px_hsl(var(--glow-purple)/0.15)] transition-all cursor-default"
              >
                {title}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="secret-text font-pixel text-xs">
            2D characters understand me better than 3D people
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimeShrine;
