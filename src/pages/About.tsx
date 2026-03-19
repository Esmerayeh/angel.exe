import angelCats from "@/assets/angel-cats.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Background subtle image */}
      <div
        className="fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${angelCats})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px) saturate(0.4)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <div className="flex justify-center mb-3">
            <div className="w-[100px] h-[30px] rounded-[50%] border border-silver/15 opacity-30"
              style={{ boxShadow: "0 0 15px hsl(var(--silver) / 0.15)", animation: "float 7s ease-in-out infinite" }}
            />
          </div>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">Identity Fragments</h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ loading identity... please wait ]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left panel - status sidebar */}
          <div className="space-y-4" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
            {/* Profile card */}
            <div className="panel-gothic p-4 relative">
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-pale-pink/15" />
              <h3 className="font-pixel text-sm text-primary mb-3">✧ status</h3>
              <div className="font-pixel text-xs space-y-1 text-muted-foreground">
                <p>name: <span className="text-foreground">noire</span></p>
                <p>status: <span className="text-accent flicker-text">online / dreaming / slightly corrupted</span></p>
                <p>currently: <span className="text-foreground">existing</span></p>
                <p>alignment: <span className="text-icy-blue">cyber angel with bad sleep</span></p>
                <p>warning: <span className="text-glow-pink">romanticizes everything</span></p>
              </div>
            </div>

            {/* Social links */}
            <div className="panel-gothic p-4 relative">
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-silver/10" />
              <h3 className="font-pixel text-sm text-primary mb-3">✧ find me</h3>
              <div className="font-pixel text-xs space-y-2 text-muted-foreground">
                <a href="https://www.instagram.com/esmerayeh" target="_blank" rel="noopener noreferrer"
                  className="block hover:text-primary hover:text-glow transition-all">→ instagram: @esmerayeh</a>
                <a href="https://open.spotify.com/user/7o15ghrdo31llct7dxf4l26pk" target="_blank" rel="noopener noreferrer"
                  className="block hover:text-primary hover:text-glow transition-all">→ spotify</a>
                <a href="https://pin.it/4EsV1jgwz" target="_blank" rel="noopener noreferrer"
                  className="block hover:text-primary hover:text-glow transition-all">→ pinterest</a>
              </div>
            </div>

            <div className="panel-gothic p-4 relative">
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-glow-purple/10" />
              <h3 className="font-pixel text-sm text-primary mb-3">✧ loves</h3>
              <div className="font-pixel text-xs space-y-1 text-muted-foreground">
                <p>→ music, anime, cinema, longing</p>
                <p>→ dark pretty things</p>
                <p>→ late nights with no purpose</p>
                <p>→ broken websites</p>
                <p>→ fictional people</p>
                <p>→ the space between songs</p>
                <p>→ things that feel like too much</p>
                <p>→ deep relationships, that bid</p>
              </div>
            </div>

            <div className="panel-gothic p-4">
              <h3 className="font-pixel text-sm text-primary mb-3">✧ made of</h3>
              <div className="flex flex-wrap gap-1">
                {["music", "overthinking", "static", "nostalgia", "caffeine", "smoke", "honeyed poison", "glitch", "longing"].map((tag) => (
                  <span key={tag} className="font-pixel text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:shadow-[0_0_6px_hsl(var(--glow-purple)/0.15)] transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-gothic p-4">
              <p className="secret-text font-pixel text-xs">
                sometimes i wonder if anyone reads this far down
              </p>
            </div>
          </div>

          {/* Main diary */}
          <div className="md:col-span-2 space-y-4" style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}>
            {/* Short messy about */}
            <div className="panel-glow p-6 space-y-3 relative">
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-pale-pink/15" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-pale-pink/15" />
              <h2 className="font-pixel text-sm text-primary">✧ who is noire</h2>
              <div className="font-handwritten text-lg text-foreground/80 leading-relaxed space-y-2">
                <p>angel, i think.</p>
                <p>i like music more than i like silence and maybe more than i like most people.</p>
                <p>i take deep relationships seriously. i like that bid, the opening, the risk of meaning something.</p>
                <p className="text-accent">firm believer that at any moment there should be someone you miss.</p>
                <p>all the best things in life are a little honeyed, a little poisonous, a little consuming.</p>
                <p>i like glitchy things, pretty things, dark things, things that stay with teeth in them.</p>
              </div>
            </div>

            <div className="diary-entry text-lg leading-relaxed text-foreground/90 relative">
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-silver/10" />
              <p className="mb-4">i don't think i exist in one version.</p>
              <p className="mb-4">i split. i scatter. i echo.</p>
              <p className="mb-4">
                some days i'm soft—<br />
                like pastel playlists and quiet longing,<br />
                like writing things i'll never say out loud.
              </p>
              <p className="mb-4">
                other days i feel like static.<br />
                like something between a signal and a ghost.<br />
                like i belong more to the internet than to reality.
              </p>
              <p className="mb-4 text-primary/80">
                i love music in a way that feels unhealthy.<br />
                not casually. not "oh this song is nice."<br />
                i mean i disappear into it.<br />
                i let it rewrite me.
              </p>
              <p className="mb-4">
                i don't listen to songs,<br />
                <span className="text-glow-pink text-accent">i live inside them.</span>
              </p>
              <p className="mb-4 text-muted-foreground">
                i like how it feels to smoke—<br />
                the burn in my lungs, the way time slows down.<br />
                it's meditative.
              </p>
              <p className="mb-4">
                making deep relationships, being open and eager to live life meaningfully—<br />
                i love taking that bid.
              </p>
              <p className="mb-4 text-accent">honeyed poison.</p>
              <p className="mb-4 text-muted-foreground">
                all the best things in life are a little parasitic,<br />
                a little consuming, a little possessive.
              </p>
              <p className="mb-4">
                i like things that feel a little broken.<br />
                websites that aren't perfect.<br />
                people that aren't easy.<br />
                love that doesn't make sense.
              </p>
              <p className="mb-4 text-primary/80">
                i don't want clean, simple, minimal.<br />
                i want overwhelming.<br />
                i want layered.<br />
                i want something that feels like <span className="glitch-text">too much</span>.
              </p>
              <p className="mb-4">
                i romanticize everything—<br />
                music, people, late nights, fictional characters,<br />
                even feelings that probably aren't good for me.
              </p>
              <p className="mb-2 text-accent">especially those.</p>
              <p className="mb-4">
                sometimes i feel like i'm watching my own life<br />
                like it's a movie i didn't write<br />
                but still care too much about.
              </p>
              <p className="mb-4 text-muted-foreground">
                i don't think i'm meant to be understood easily.<br />
                and i don't really want to be.
              </p>
              <p className="mb-4">
                this space isn't for explaining myself.<br />
                it's for existing the way i actually am—<br />
                unfiltered, a little chaotic,<br />
                a little dreamy,<br />
                a little unreal.
              </p>
              <p className="mb-2">if you're here,</p>
              <p className="mb-2 text-primary">you probably get it.</p>
              <p className="mb-4 text-muted-foreground">or maybe you don't.</p>
              <p className="text-accent text-glow-pink">
                either way,<br />
                this is where i live.
              </p>
            </div>

            {/* Extra about section */}
            <div className="panel-gothic p-6 relative">
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-silver/10" />
              <h3 className="font-pixel text-sm text-primary mb-4">[ additional_log.txt ]</h3>
              <div className="font-pixel text-xs space-y-3 text-muted-foreground">
                <p>i go by noire.</p>
                <p>(or maybe i don't. depends on the day.)</p>
                <p className="mt-2">i build things i don't fully understand yet</p>
                <p>apps, playlists, versions of myself</p>
                <p>half of them work, half of them feel like ghosts</p>
                <p className="mt-2">i exist somewhere between</p>
                <p>late night code</p>
                <p>and songs that hurt a little too much</p>
                <p className="mt-2">i'm like</p>
                <p>cyber + angel + something slightly wrong</p>
                <p className="mt-2 text-primary/60">
                  i'm not trying to be understood fully<br />
                  just… felt, maybe
                </p>
                <p className="mt-2 text-muted-foreground/40">or not</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
