const features = [
  {
    title: "One list, not five",
    description:
      "Work, errands, someday-maybe — they all fight for the same slice of your day. Loop keeps them in a single list so you stop deciding which app to open.",
  },
  {
    title: "Crossing it off feels like something",
    description:
      "A task you finish gets a line through it and drops to the bottom, not deleted. You can see the shape of your day, not just what's left of it.",
  },
  {
    title: "Nothing to configure",
    description:
      "No projects, no tags, no priority levels to assign before you're allowed to write a task down. Type it. Do it. That's the whole workflow.",
  },
  {
    title: "Works when you're offline",
    description:
      "Your list is saved on your device first and synced when you're back online, so a bad signal on the train never costs you a task.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Built to stay out of your way
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every feature here exists to remove a decision, not add one.
          </p>
        </div>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="grid gap-2 py-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10"
            >
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="max-w-xl text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}