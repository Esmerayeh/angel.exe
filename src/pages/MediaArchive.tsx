import { useState } from "react";

interface MediaItem {
  title: string;
  status?: string;
  fav?: boolean;
}

const archiveData: Record<string, MediaItem[]> = {
  movies: [
    "Little Women", "Call Me By Your Name", "Mysterious Skin", "Wristcutters: A Love Story",
    "The Matrix", "Kill Bill Vol. 1 & 2", "Pulp Fiction", "Requiem for a Dream", "Avatar",
    "Bones and All", "Fight Club", "Fallen Angels", "Dune", "Lady Bird", "Almost Famous",
    "Interstellar", "La La Land", "Midsommar", "Parasite", "Lost in Translation",
    "Howl's Moving Castle", "A Silent Voice", "Scott Pilgrim vs. the World", "Baby Driver",
  ].map(t => ({ title: t })),
  series: [
    "Gossip Girl", "Stranger Things", "Euphoria", "The End of the F***ing World", "Wednesday",
    "Sex Education", "Alice in Borderland", "Ginny and Georgia", "Dynasty", "Bridgerton",
    "Shadowhunters", "Young Royals", "Umbrella Academy", "Shadow and Bone",
    "Chilling Adventures of Sabrina", "Hotel del Luna", "Goblin", "Vincenzo", "True Beauty",
    "The Sandman", "Queen of Tears", "Black Doves", "Lockwood & Co.",
  ].map(t => ({ title: t })),
  anime: [
    "Nana", "Evangelion", "Hunter x Hunter", "Jujutsu Kaisen", "Attack on Titan",
    "Demon Slayer", "Chainsaw Man", "Haikyuu", "Blue Lock", "Spy x Family",
    "Kaguya-sama: Love is War", "Fruits Basket", "Classroom of the Elite",
    "Bungo Stray Dogs", "Kakegurui", "Maid Sama", "Vampire Knight",
    "Ouran High School Host Club", "Black Clover", "Assassination Classroom",
    "The Apothecary Diaries", "My Happy Marriage", "Hell's Paradise",
  ].map(t => ({ title: t })),
  manga: [
    "Nana", "Chainsaw Man", "Jujutsu Kaisen", "Blue Lock", "Skip Beat",
    "Fruits Basket", "Vampire Knight", "Ouran High School Host Club",
  ].map(t => ({ title: t })),
  books: [
    "Little Women", "All the Bright Places", "The Fault in Our Stars",
    "Percy Jackson series", "Harry Potter series",
  ].map(t => ({ title: t })),
  dramas: [
    "Hotel del Luna", "Goblin", "Vincenzo", "True Beauty", "My Demon",
    "Doom at Your Service", "Tale of the Nine Tailed", "Queen of Tears",
    "Start-Up", "Love Next Door", "Love Game in Eastern Fantasy",
    "Singles Inferno", "XO Kitty",
  ].map(t => ({ title: t })),
};

const categoryIcons: Record<string, string> = {
  movies: "🎬",
  series: "📺",
  anime: "✧",
  manga: "📖",
  books: "📚",
  dramas: "🌙",
};

const MediaArchive = () => {
  const [activeTab, setActiveTab] = useState("movies");

  const tabs = Object.keys(archiveData);
  const items = archiveData[activeTab] || [];

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Entity Archive
          </h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">
            [ everything that shaped me ]
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-pixel text-sm px-4 py-2 border transition-all duration-300 ${
                activeTab === tab
                  ? "border-primary text-primary border-glow bg-primary/10"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              {categoryIcons[tab]} {tab}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}
        >
          {items.map((item, i) => (
            <div
              key={`${activeTab}-${item.title}-${i}`}
              className="shrine-card p-3 space-y-2 group"
            >
              {/* Placeholder image area */}
              <div className="w-full aspect-[2/3] bg-gradient-to-b from-secondary to-void/50 rounded-sm flex items-center justify-center overflow-hidden relative">
                <span className="text-3xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">
                  {categoryIcons[activeTab]}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
              <p className="font-pixel text-xs text-foreground/80 text-center leading-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="font-pixel text-xs text-muted-foreground">
            [ {items.length} entries in {activeTab} ]
          </p>
          <p className="font-handwritten text-sm text-muted-foreground/60 mt-2">
            this archive grows with me
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaArchive;
