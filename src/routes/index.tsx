import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { WorkGrid, SectionHead, ServicesList, Process, Testimonials, CtaBand } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavish Snaps — Automotive photography for online car listings" },
      { name: "description", content: "Professional automotive photography for cars being sold online. Give buyers a better first impression." },
      { property: "og:title", content: "Kavish Snaps — Make your car worth the click" },
      { property: "og:description", content: "Professional automotive photography for cars being sold online." },
    ],
  }),
  component: Index,
});

const benefits = [
  "Stand out among similar listings",
  "Present your car professionally",
  "Show important details clearly",
  "Create a stronger first impression",
  "Get photos ready for your online listing",
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img src={hero} alt="Dark grey sports sedan on a rooftop at dusk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.92] sm:text-6xl md:text-8xl">Make your car worth the click.</h1>
          <p className="mt-6 max-w-lg text-lg text-foreground/80">Professional automotive photography for cars being sold online.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-semibold text-primary-foreground">
              Book a shoot <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="border border-foreground/40 px-6 py-3.5 font-semibold transition-colors hover:bg-foreground/10">
              View the work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHead
          eyebrow="Selected work"
          title="Cars, presented properly."
          action={<Link to="/work" className="hidden shrink-0 text-sm underline underline-offset-4 sm:block">View all work</Link>}
        />
        <WorkGrid />
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Why it matters</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-none md:text-6xl">Your listing starts with the photo.</h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              When buyers scroll through dozens of cars, your photos create the first impression. Professional images help your vehicle look clean, credible and worth taking a closer look at.
            </p>
          </div>
          <ul className="divide-y divide-border self-end border-y border-border">
            {benefits.map((b, i) => (
              <li key={b} className="flex items-baseline gap-6 py-5 text-lg">
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>{b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SectionHead eyebrow="Services" title="What we shoot." action={<Link to="/services" className="hidden shrink-0 text-sm underline underline-offset-4 sm:block">All services</Link>} />
        <ServicesList />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <SectionHead eyebrow="How it works" title="Four simple steps." />
        <Process />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-8 border-t border-border pt-16 md:grid-cols-[1fr_2fr]">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About Kavish Snaps</p>
          <div>
            <p className="font-display text-2xl font-semibold leading-snug md:text-4xl">
              Cars are highly visual products, yet many are still sold using rushed photos that don't do justice to the vehicle. Kavish Snaps brings a clean, professional aesthetic to online automotive listings so every car makes the impact it deserves.
            </p>
            <Link to="/about" className="mt-6 inline-block text-sm underline underline-offset-4">More about us</Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
