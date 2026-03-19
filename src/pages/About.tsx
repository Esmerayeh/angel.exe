import angelCats from "@/assets/angel-cats.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Background subtle image */}
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${angelCats})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" style={{ animation: "fade-up 0.8s ease-out" }}>
          <h1 className="font-gothic text-4xl md:text-5xl text-primary text-glow">About Me</h1>
          <p className="font-pixel text-xs text-muted-foreground mt-2">[ loading identity... please wait ]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left panel - status */}
          <div className="space-y-4" style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}>
            <div className="panel-gothic p-4">
              <h3 className="font-pixel text-sm text-primary mb-3">✧ status</h3>
              <div className="font-pixel text-xs space-y-1 text-muted-foreground">
                <p>name: <span className="text-foreground">angel</span></p>
                <p>pronouns: <span className="text-foreground">???</span></p>
                <p>location: <span className="text-foreground">somewhere between</span></p>
                <p>mood: <span className="text-accent flicker-text">undefined</span></p>
                <p>currently: <span className="text-foreground">existing</span></p>
              </div>
            </div>

            <div className="panel-gothic p-4">
              <h3 className="font-pixel text-sm text-primary mb-3">✧ things i love</h3>
              <div className="font-pixel text-xs space-y-1 text-muted-foreground">
                <p>→ music that rewrites me</p>
                <p>→ late nights with no purpose</p>
                <p>→ broken websites</p>
                <p>→ fictional people</p>
                <p>→ the space between songs</p>
                <p>→ things that feel like too much</p>
                <p>→ unfinished thoughts</p>
              </div>
            </div>

            <div className="panel-gothic p-4">
              <h3 className="font-pixel text-sm text-primary mb-3">✧ made of</h3>
              <div className="flex flex-wrap gap-1">
                {["music", "overthinking", "static", "nostalgia", "caffeine", "unspoken words", "glitch", "longing"].map((tag) => (
                  <span key={tag} className="font-pixel text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
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
            <div className="diary-entry text-lg leading-relaxed text-foreground/90">
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
                i think that's why i collect sounds like memories—<br />
                shoegaze haze, dreampop softness,<br />
                old rock that feels like it remembers something i don't.
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
              <p className="mb-4 text-muted-foreground">
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
            <div className="panel-gothic p-6">
              <h3 className="font-pixel text-sm text-primary mb-4">[ additional_log.txt ]</h3>
              <div className="font-pixel text-xs space-y-3 text-muted-foreground">
                <p>i go by angel.</p>
                <p>(or maybe i don't. depends on the day.)</p>
                <p className="mt-2">i build things i don't fully understand yet</p>
                <p>apps, playlists, versions of myself</p>
                <p>half of them work, half of them feel like ghosts</p>
                <p className="mt-2">i exist somewhere between</p>
                <p>late night code</p>
                <p>and songs that hurt a little too much</p>
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
