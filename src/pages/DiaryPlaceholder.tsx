const DiaryPlaceholder = () => (
  <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
    <div className="panel-gothic p-8 max-w-md text-center space-y-4">
      <h1 className="font-gothic text-3xl text-primary text-glow">Digital Diary</h1>
      <p className="font-pixel text-xs text-muted-foreground">[ access restricted ]</p>
      <p className="font-handwritten text-lg text-foreground/60">
        this section is locked.<br />
        only the owner can write here.<br />
        some thoughts aren't meant for visitors.
      </p>
      <div className="border border-border p-4 mt-4">
        <p className="font-pixel text-xs text-muted-foreground">
          → login system coming soon<br />
          → entries will appear like handwritten logs<br />
          → tagged: melancholy, obsession, dream, void
        </p>
      </div>
    </div>
  </div>
);

export default DiaryPlaceholder;
