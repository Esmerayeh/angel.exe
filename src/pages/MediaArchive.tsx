const MediaArchive = () => (
  <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
    <div className="panel-gothic p-8 max-w-md text-center space-y-4">
      <h1 className="font-gothic text-3xl text-primary text-glow">Media Archive</h1>
      <p className="font-pixel text-xs text-muted-foreground">[ shrine under construction ]</p>
      <p className="font-handwritten text-lg text-foreground/60">
        the shrine is being built.<br />
        movies, anime, manga, books—<br />
        everything that shaped me<br />
        will live here soon.
      </p>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {["movies", "anime", "manga", "drama", "books", "series"].map((cat) => (
          <div key={cat} className="border border-border p-2 text-center">
            <span className="font-pixel text-xs text-muted-foreground">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MediaArchive;
