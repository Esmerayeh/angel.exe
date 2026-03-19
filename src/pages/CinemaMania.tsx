import { useState } from "react";

interface Film {
  title: string;
  category?: string;
}

const categories = [
  {
    name: "comfort films",
    emoji: "♡",
    desc: "the ones that feel like home",
    films: ["About Time", "Notting Hill", "The Holiday", "Clueless", "10 Things I Hate About You", "The Breakfast Club", "Empire Records", "Serendipity", "The Greatest Showman", "Crazy Rich Asians", "Friends with Benefits"],
  },
  {
    name: "films that changed my brain chemistry",
    emoji: "✕",
    desc: "i was never the same after these",
    films: ["Requiem for a Dream", "Fight Club", "Mysterious Skin", "Midsommar", "Interstellar", "The Butterfly Effect", "Parasite", "Lost in Translation", "Girl Interrupted"],
  },
  {
    name: "pretty films",
    emoji: "✧",
    desc: "every frame is a painting",
    films: ["Call Me By Your Name", "La La Land", "Perfect Days", "Dune", "Lady Bird", "A Star is Born", "Howl's Moving Castle", "A Silent Voice", "Fallen Angels"],
  },
  {
    name: "films for longing",
    emoji: "☾",
    desc: "for when the ache is the point",
    films: ["Before Sunrise", "Before Sunset", "Before Midnight", "The In Between", "All the Bright Places", "The Fault in Our Stars", "The Notebook", "Love & Other Drugs", "Sounds Like Love"],
  },
  {
    name: "films for when i want to disappear into another life",
    emoji: "⌘",
    desc: "take me somewhere else",
    films: ["The Matrix", "Avatar", "Ready Player One", "Dazed and Confused", "Almost Famous", "Scott Pilgrim vs. the World", "Top Gun: Maverick", "Pirates of the Caribbean", "Harry Potter"],
  },
];

const allFilms: Film[] = [
  "Little Women", "Call Me By Your Name", "Mysterious Skin", "Wristcutters: A Love Story",
  "The Matrix", "Angels and Demons", "The Da Vinci Code", "Kill Bill Vol. 1 & 2",
  "Pulp Fiction", "Requiem for a Dream", "Avatar", "Down in the Valley", "Begin Again",
  "Bones and All", "Fight Club", "Fallen Angels", "Dune", "Lady Bird",
  "Top Gun", "Top Gun: Maverick", "Girl Interrupted", "Serendipity", "Empire Records",
  "About Time", "Before Sunrise", "Before Sunset", "Before Midnight", "Notting Hill",
  "Perfect Days", "The In Between", "All the Bright Places", "7 Years in Tibet",
  "10 Things I Hate About You", "The Breakfast Club", "Interstellar",
  "The Hunger Games", "Catching Fire", "Mockingjay", "Enola Holmes 1 & 2",
  "Almost Famous", "Divergent", "Scott Pilgrim vs. the World", "Baby Driver",
  "Dinner in America", "Dazed and Confused", "Ready Player One", "Lost in Translation",
  "Now You See Me 1 & 2", "Sherlock Holmes", "The Greatest Showman",
  "Crazy Rich Asians", "The Fault in Our Stars", "A Star is Born", "La La Land",
  "Twilight", "Clueless", "The Notebook", "Sense and Sensibility",
  "Batman", "The Dark Knight", "Harry Potter", "Percy Jackson",
  "Pirates of the Caribbean", "Parasite", "A Silent Voice", "Howl's Moving Castle",
  "Mean Girls", "Midsommar", "Friends with Benefits", "Love & Other Drugs",
  "Metal Lords", "The Butterfly Effect", "Bullet Train", "Love Hard",
  "The Holiday", "Love in Taipei", "Sounds Like Love", "Wanted",
].map(title => ({ title }));

const CinemaMania = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
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
        <div className="space-y-6 mb-12">
          {categories.map((cat, ci) => (
            <div
              key={cat.name}
              className="panel-gothic overflow-hidden"
              style={{ animation: `fade-up 0.8s ease-out ${0.2 + ci * 0.1}s both` }}
            >
              <button
                className="w-full text-left p-5 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                onClick={() => setActiveCategory(activeCategory === ci ? null : ci)}
              >
                <div>
                  <span className="text-xl mr-2">{cat.emoji}</span>
                  <span className="font-pixel text-sm text-primary">{cat.name}</span>
                  <p className="font-handwritten text-sm text-muted-foreground mt-1">{cat.desc}</p>
                </div>
                <span className="font-pixel text-xs text-muted-foreground">
                  {activeCategory === ci ? "[ - ]" : "[ + ]"}
                </span>
              </button>
              {activeCategory === ci && (
                <div className="px-5 pb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {cat.films.map((film) => (
                    <div
                      key={film}
                      className="border border-border bg-secondary/30 p-3 text-center hover:border-primary/30 hover:bg-secondary/50 transition-all group"
                    >
                      <div className="w-full h-16 bg-gradient-to-b from-primary/5 to-transparent rounded-sm mb-2 flex items-center justify-center">
                        <span className="text-2xl opacity-20 group-hover:opacity-40 transition-opacity">🎬</span>
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
        <div className="panel-gothic p-6" style={{ animation: "fade-up 0.8s ease-out 0.8s both" }}>
          <h2 className="font-pixel text-sm text-primary mb-4">✧ full archive ({allFilms.length} films)</h2>
          <div className="flex flex-wrap gap-1">
            {allFilms.map((film) => (
              <span
                key={film.title}
                className="font-pixel text-xs px-2 py-1 border border-border/50 bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all cursor-default"
              >
                {film.title}
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
