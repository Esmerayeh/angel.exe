import { useState } from "react";

const categories = [
  {
    name: "comfort films",
    emoji: "♡",
    desc: "the ones that feel like home",
    color: "var(--pale-pink)",
    films: ["About Time", "Notting Hill", "The Holiday", "Clueless", "10 Things I Hate About You", "The Breakfast Club", "Empire Records", "Serendipity", "The Greatest Showman", "Crazy Rich Asians", "Friends with Benefits"],
  },
  {
    name: "films that changed my brain chemistry",
    emoji: "✕",
    desc: "i was never the same after these",
    color: "var(--glow-purple)",
    films: ["Requiem for a Dream", "Fight Club", "Mysterious Skin", "Midsommar", "Interstellar", "The Butterfly Effect", "Parasite", "Lost in Translation", "Girl Interrupted"],
  },
  {
    name: "pretty films",
    emoji: "✧",
    desc: "every frame is a painting",
    color: "var(--icy-blue)",
    films: ["Call Me By Your Name", "La La Land", "Perfect Days", "Dune", "Lady Bird", "A Star is Born", "Howl's Moving Castle", "A Silent Voice", "Fallen Angels"],
  },
  {
    name: "films for longing",
    emoji: "☾",
    desc: "for when the ache is the point",
    color: "var(--glow-pink)",
    films: ["Before Sunrise", "Before Sunset", "Before Midnight", "The In Between", "All the Bright Places", "The Fault in Our Stars", "The Notebook", "Love & Other Drugs", "Sounds Like Love"],
  },
  {
    name: "films for when i want to disappear into another life",
    emoji: "⌘",
    desc: "take me somewhere else",
    color: "var(--silver)",
    films: ["The Matrix", "Avatar", "Ready Player One", "Dazed and Confused", "Almost Famous", "Scott Pilgrim vs. the World", "Top Gun: Maverick", "Pirates of the Caribbean", "Harry Potter"],
  },
];

const allFilms = [
  "Little Women", "Call Me By Your Name", "Mysterious Skin", "Wristcutters: A Love Story",
  "The Matrix", "Kill Bill Vol. 1 & 2", "Pulp Fiction", "Requiem for a Dream", "Avatar",
  "Bones and All", "Fight Club", "Fallen Angels", "Dune", "Lady Bird", "Almost Famous",
  "Interstellar", "La La Land", "Midsommar", "Parasite", "Lost in Translation",
  "Howl's Moving Castle", "A Silent Voice", "Scott Pilgrim vs. the World", "Baby Driver",
  "Top Gun", "Top Gun: Maverick", "Girl Interrupted", "Serendipity", "Empire Records",
  "About Time", "Before Sunrise", "Before Sunset", "Before Midnight", "Notting Hill",
  "Perfect Days", "The In Between", "All the Bright Places", "7 Years in Tibet",
  "10 Things I Hate About You", "The Breakfast Club", "The Hunger Games", "Enola Holmes",
  "Divergent", "Dinner in America", "Dazed and Confused", "Ready Player One",
  "Now You See Me", "Sherlock Holmes", "The Greatest Showman", "Crazy Rich Asians",
  "The Fault in Our Stars", "A Star is Born", "Twilight", "Clueless", "The Notebook",
  "Sense and Sensibility", "The Dark Knight", "Harry Potter", "Percy Jackson",
  "Pirates of the Caribbean", "Mean Girls", "Friends with Benefits", "Love & Other Drugs",
  "Metal Lords", "The Butterfly Effect", "Bullet Train", "Love Hard", "The Holiday",
  "Love in Taipei", "Sounds Like Love", "Wanted", "Down in the Valley", "Begin Again",
  "Angels and Demons", "The Da Vinci Code",
];

const CinemaMania = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <div className="flex justify-center mb-3">
            <div className="w-[90px] h-[28px] rounded-[50%] border border-glow-pink/15 opacity-25"
              style={{ boxShadow: "0 0 12px hsl(var(--glow-pink) / 0.15)", animation: "float 7s ease-in-out infinite" }}
            />
          </div>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Cinema Mania
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">
            [ visual consumption unit ]
          </p>
          <p className="font-handwritten text-lg text-pale-pink/60 mt-3">
            "every film is a life i could have lived"
          </p>
        </div>

        {/* Category sections */}
        <div className="space-y-4 mb-12">
          {categories.map((cat, ci) => (
            <div
              key={cat.name}
              className="panel-gothic overflow-hidden relative group"
              style={{ animation: `fade-up 0.8s ease-out ${0.2 + ci * 0.1}s both` }}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, hsl(${cat.color} / 0.05), transparent 60%)` }}
              />
              <button
                className="w-full text-left p-5 flex items-center justify-between hover:bg-secondary/20 transition-colors relative z-10"
                onClick={() => setActiveCategory(activeCategory === ci ? null : ci)}
              >
                <div>
                  <span className="text-xl mr-2">{cat.emoji}</span>
                  <span className="font-pixel text-sm text-primary">{cat.name}</span>
                  <p className="font-handwritten text-sm text-muted-foreground mt-1">{cat.desc}</p>
                </div>
                <span className="font-pixel text-xs text-muted-foreground">
                  {activeCategory === ci ? "[ − ]" : "[ + ]"}
                </span>
              </button>
              {activeCategory === ci && (
                <div className="px-5 pb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {cat.films.map((film) => (
                    <div
                      key={film}
                      className="border border-border bg-secondary/20 p-3 text-center hover:border-primary/20 transition-all group/card relative overflow-hidden"
                    >
                      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l opacity-0 group-hover/card:opacity-20 transition-opacity"
                        style={{ borderColor: `hsl(${cat.color})` }} />
                      <div className="w-full h-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-sm mb-2 flex items-center justify-center relative">
                        <span className="text-2xl opacity-15 group-hover/card:opacity-30 transition-opacity">🎬</span>
                      </div>
                      <p className="font-pixel text-xs text-foreground/80">{film}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Full archive */}
        <div className="panel-gothic p-6 relative" style={{ animation: "fade-up 0.8s ease-out 0.8s both" }}>
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-silver/10" />
          <h2 className="font-pixel text-sm text-primary mb-4">✧ full archive ({allFilms.length} films)</h2>
          <div className="flex flex-wrap gap-1">
            {allFilms.map((film) => (
              <span
                key={film}
                className="font-pixel text-xs px-2 py-1 border border-border/50 bg-secondary/20 text-muted-foreground hover:text-primary hover:border-primary/20 hover:shadow-[0_0_6px_hsl(var(--glow-purple)/0.15)] transition-all cursor-default"
              >
                {film}
              </span>
            ))}
          </div>
        </div>

        {/* Secret */}
        <div className="mt-8 text-center">
          <span className="secret-text font-pixel text-xs">
            i watch movies to feel things i'm too afraid to feel in real life
          </span>
        </div>
      </div>
    </div>
  );
};

export default CinemaMania;
