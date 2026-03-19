const CharacterRoom = () => (
  <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
    <div className="panel-gothic p-8 max-w-md text-center space-y-4">
      <h1 className="font-gothic text-3xl text-primary text-glow">Character Room</h1>
      <p className="font-pixel text-xs text-muted-foreground">[ loading personas... ]</p>
      <p className="font-handwritten text-lg text-foreground/60">
        every version of me exists here.<br />
        but they're still being rendered.<br />
        come back when the glitch settles.
      </p>
      <p className="secret-text font-pixel text-xs mt-4">
        or don't. they might find you first.
      </p>
    </div>
  </div>
);

export default CharacterRoom;
