const favoriteGirls = [
  { name: "Nana Osaki", from: "Nana", vibe: "punk independence, cigarette smoke, heartbreak that sounds like music" },
  { name: "Misa Amane", from: "Death Note", vibe: "chaotic devotion, gothic lolita, love as a weapon" },
  { name: "Rei Ayanami", from: "Evangelion", vibe: "existential silence, blue haired melancholy" },
  { name: "Asuka Langley", from: "Evangelion", vibe: "fierce, broken, refuses to be pitied" },
  { name: "Lain Iwakura", from: "Serial Experiments Lain", vibe: "digital ghost, identity blur, internet soul" },
  { name: "Yumeko Jabami", from: "Kakegurui", vibe: "gambling adrenaline, unhinged beauty" },
  { name: "Tohru Honda", from: "Fruits Basket", vibe: "soft strength, the girl who saves everyone by being kind" },
  { name: "Misaki Ayuzawa", from: "Maid Sama", vibe: "tough exterior, secretly soft, tsundere queen" },
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
          <h2 className="font-pixel text-sm text-primary mb-4 text-center" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
            ✧ favorite girls ✧
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {favoriteGirls.map((girl, i) => (
              <div
                key={girl.name}
                className="shrine-card p-4 space-y-2 text-center"
                style={{ animation: `fade-up 0.8s ease-out ${0.25 + i * 0.06}s both` }}
              >
                <div className="w-full h-24 bg-gradient-to-b from-glow-purple/10 to-transparent rounded-sm flex items-center justify-center">
                  <span className="font-gothic text-2xl text-primary/20">✧</span>
                </div>
                <h3 className="font-pixel text-sm text-primary">{girl.name}</h3>
                <p className="font-pixel text-xs text-muted-foreground">{girl.from}</p>
                <p className="font-handwritten text-sm text-foreground/60">{girl.vibe}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite couples */}
        <div className="mb-10">
          <h2 className="font-pixel text-sm text-primary mb-4 text-center" style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}>
            ♡ favorite couples ♡
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {favoriteCouples.map((couple, i) => (
              <div
                key={couple.pair}
                className="panel-gothic p-4 flex gap-4 items-center"
                style={{ animation: `fade-up 0.8s ease-out ${0.55 + i * 0.08}s both` }}
              >
                <span className="text-2xl opacity-30">♡</span>
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
          <h2 className="font-pixel text-sm text-primary mb-4 text-center" style={{ animation: "fade-up 0.8s ease-out 0.7s both" }}>
            ✧ anime aesthetics i live in
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {aesthetics.map((a, i) => (
              <div
                key={a.name}
                className="panel-gothic p-4 hover:border-glow transition-all duration-300"
                style={{ animation: `fade-up 0.8s ease-out ${0.75 + i * 0.06}s both` }}
              >
                <h3 className="font-pixel text-sm text-foreground">{a.name}</h3>
                <p className="font-pixel text-xs text-muted-foreground mt-1">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full stamp wall */}
        <div className="panel-gothic p-6" style={{ animation: "fade-up 0.8s ease-out 0.9s both" }}>
          <h2 className="font-pixel text-sm text-primary mb-4">✧ full shrine wall ({allAnime.length} titles)</h2>
          <div className="flex flex-wrap gap-1">
            {allAnime.map((title) => (
              <span
                key={title}
                className="font-pixel text-xs px-2 py-1 border border-border/50 bg-secondary/30 text-muted-foreground hover:text-primary hover:border-glow-pink/30 transition-all cursor-default"
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
