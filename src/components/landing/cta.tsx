import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-2xl bg-foreground px-8 py-14 text-background md:px-16 md:py-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Your list is one line away.
            </h2>
            <p className="mt-4 text-background/70">
              Start with today. Loop will still be here tomorrow, keeping
              track of what didn't get done.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8"
              asChild
            >
              <Link href="/sign-in">
                Get started free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}