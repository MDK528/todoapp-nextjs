const steps = [
  {
    number: "1",
    title: "Type a task, hit enter",
    description:
      "No form, no fields to fill in first. The cursor is already waiting in the input.",
  },
  {
    number: "2",
    title: "Work through your day",
    description:
      "Check things off as you go. Finished tasks fade and move down, so the top of the list is always what's next.",
  },
  {
    number: "3",
    title: "Loop resets at midnight",
    description:
      "Anything left unfinished rolls into tomorrow automatically. Nothing quietly disappears.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Three steps. That's the app.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="font-mono text-sm text-primary">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}