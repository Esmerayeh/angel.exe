import nanaBg from "@/assets/nana-bg.jpg";
import nanaBand from "@/assets/nana-band.jpg";
import wispPoster from "@/assets/wisp-poster.jpg";

interface CharacterData {
  name: string;
  subtitle: string;
  image: string;
  aesthetic: string;
  description: string;
  howMuchOfMe: number;
  traits: string[];
  color: string;
}

const characters: CharacterData[] = [
  {
    name: "Misa Amane",
    subtitle: "chaotic devotion",
    image: "",
    aesthetic: "gothic lolita × death note × obsessive love",
    description: "pretty darkness, love that consumes. she'd burn the world for someone who wouldn't burn a match for her. and she'd do it smiling. honeyed poison in human form.",
    howMuchOfMe: 75,
    traits: ["devotion", "chaos", "beauty as weapon", "love sickness", "honeyed poison"],
    color: "var(--glow-pink)",
  },
  {
    name: "Nana Osaki",
    subtitle: "punk loneliness",
    image: nanaBg,
    aesthetic: "punk × cigarette smoke × independence × heartbreak",
    description: "the version of me that pretends she doesn't need anyone. leather jackets and lyrics that cut. she sings because if she stops, the silence would kill her.",
    howMuchOfMe: 90,
    traits: ["independence", "music addiction", "hidden vulnerability", "cigarette smoke"],
    color: "var(--glow-purple)",
  },
  {
    name: "Lain Iwakura",
    subtitle: "digital dissociation",
    image: "",
    aesthetic: "cyber × static × identity blur × internet soul",
    description: "the one who lives more online than offline. who can't tell if she's the user or the program. who wonders if closing the laptop means she stops existing.",
    howMuchOfMe: 85,
    traits: ["dissociation", "digital native", "identity crisis", "quiet power"],
    color: "var(--glow-blue)",
  },
  {
    name: "Ren Honjo",
    subtitle: "quiet intensity",
    image: nanaBand,
    aesthetic: "music × self-destruction × guitar strings × unspoken love",
    description: "everything is music. every feeling is a chord progression. he doesn't talk about what hurts—he plays it until his fingers bleed.",
    howMuchOfMe: 70,
    traits: ["music addiction", "self-destruction", "quiet intensity", "unspoken"],
    color: "var(--silver)",
  },
  {
    name: "The Band-Aid",
    subtitle: "romantic chaos × muse energy",
    image: wispPoster,
    aesthetic: "almost famous × fleeting love × music as religion",
    description: "the one who falls in love with sounds before people. who sees concerts like church. who gives herself to the music and calls it holy. the muse who doesn't know she's the art.",
    howMuchOfMe: 80,
    traits: ["romantic chaos", "music worship", "fleeting connections", "golden era", "muse energy"],
    color: "var(--pale-pink)",
  },
];

const originalSelves = [
  { name: "cyber angel", desc: "the version made of code and halos, glowing in the dark web", icon: "⌘", aesthetic: "neon wings, digital prayers, static halos" },
  { name: "soft pink self", desc: "pastel tears, quiet longing, loves too gently for this world", icon: "♡", aesthetic: "rose quartz, whispered confessions, silk" },
  { name: "destructive self", desc: "the one who burns it all down and watches from the ashes", icon: "✕", aesthetic: "fire, black nail polish, no regrets" },
  { name: "dreamy music self", desc: "exists only inside headphones, between songs, in reverb", icon: "♪", aesthetic: "vinyl crackle, concert smoke, 3am playlists" },
  { name: "weird internet ghost", desc: "haunts old forums, collects dead links, speaks in code", icon: "◊", aesthetic: "404 pages, geocities, cursor trails" },
  { name: "gothic angel", desc: "the version that prays in dead languages", icon: "✝", aesthetic: "stained glass, latin, dark cathedrals" },
];

const HallOfSelves = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">
            Hall of Selves
          </h1>
          <p className="font-handwritten text-lg text-pale-pink/60 mt-3">
            "every version of me exists here"
          </p>
          <p className="font-pixel text-xs text-muted-foreground mt-2">
            the girls that live in me
          </p>
        </div>

        {/* Character grid */}
        <div className="space-y-8">
          {characters.map((char, i) => (
            <div
              key={char.name}
              className="shrine-card grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0"
              style={{
                animation: `fade-up 0.8s ease-out ${0.2 + i * 0.15}s both`,
              }}
            >
              {/* Image */}
              <div className="h-64 md:h-auto relative overflow-hidden bg-secondary">
                {char.image ? (
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover"
                    style={{ filter: "saturate(0.7) contrast(1.1)" }}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center font-gothic text-3xl text-primary/20"
                    style={{
                      background: `radial-gradient(circle at center, hsl(${char.color} / 0.1), hsl(var(--void)))`,
                    }}
                  >
                    ✧
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="font-gothic text-2xl text-primary text-glow">{char.name}</h2>
                  <p className="font-pixel text-xs text-accent mt-1">{char.subtitle}</p>
                </div>

                <p className="font-pixel text-xs text-muted-foreground tracking-wider">
                  {char.aesthetic}
                </p>

                <p className="font-handwritten text-lg text-foreground/80 leading-relaxed">
                  {char.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {char.traits.map((trait) => (
                    <span
                      key={trait}
                      className="font-pixel text-xs px-2 py-0.5 border border-border bg-secondary/50 text-muted-foreground"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* How much of me bar */}
                <div className="space-y-1">
                  <p className="font-pixel text-xs text-muted-foreground">
                    how much of me is her: {char.howMuchOfMe}%
                  </p>
                  <div className="h-1 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{
                        width: `${char.howMuchOfMe}%`,
                        boxShadow: `0 0 8px hsl(${char.color} / 0.5)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Original selves */}
        <div className="mt-12">
          <h2 className="font-pixel text-sm text-primary text-center mb-4" style={{ animation: "fade-up 0.8s ease-out 1s both" }}>
            ✧ my original selves ✧
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {originalSelves.map((self, i) => (
              <div
                key={self.name}
                className="panel-gothic p-4 text-center space-y-2 hover:border-glow transition-all duration-300"
                style={{ animation: `fade-up 0.8s ease-out ${1.1 + i * 0.08}s both` }}
              >
                <span className="text-2xl block">{self.icon}</span>
                <h3 className="font-pixel text-sm text-primary">{self.name}</h3>
                <p className="font-pixel text-xs text-muted-foreground">{self.desc}</p>
                <p className="font-pixel text-xs text-primary/40">{self.aesthetic}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="secret-text font-pixel text-xs">
            or don't. they might find you first.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HallOfSelves;
