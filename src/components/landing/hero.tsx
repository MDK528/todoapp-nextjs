import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

const tasks = [
  { label: "Write the Q3 recap", done: false },
  { label: "Call the dentist", done: true },
  { label: "Fix the leaky faucet", done: false },
  { label: "Review Mira's pull request", done: true },
  { label: "Book flights for Lisbon", done: false },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
        {/* Copy */}
        <div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Get it done,
            <br />
            one line at a time.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Loop is a todo list that doesn't ask you to manage it. Add a
            task, cross it off, move on. Nothing else competes for your
            attention.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/sign-up">
                Get started free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card. Two minutes to your first list.
          </p>
        </div>

        {/* Task list visual */}
        <div className="relative">
          <div className="rounded-xl border border-border bg-card p-2 shadow-sm">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="font-mono text-xs text-muted-foreground">
                today
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                2 / 5
              </span>
            </div>

            <ul className="divide-y divide-border">
              {tasks.map((task) => (
                <li
                  key={task.label}
                  className="flex items-center gap-3 px-3 py-3"
                >
                  <Checkbox checked={task.done} className="shrink-0" />
                  <span
                    className={
                      task.done
                        ? "font-mono text-sm text-muted-foreground line-through"
                        : "font-mono text-sm text-foreground"
                    }
                  >
                    {task.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 border-t border-border px-3 py-3">
              <span className="size-4 shrink-0 rounded-[4px] border border-dashed border-muted-foreground/40" />
              <span className="font-mono text-sm text-muted-foreground">
                Add a task…
              </span>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl bg-primary/10 md:-bottom-6 md:-right-6" />
        </div>
      </div>
    </section>
  );
}