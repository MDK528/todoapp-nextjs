import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { auth0 } from "@/lib/auth0";

export default async function LandinPage() {
  const session = await auth0.getSession();
  const user = session?.user ?? null;
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Cta />
      <Footer />
    </main>
  );
}