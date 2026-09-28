import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Sections";
import w3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kavish Snaps" },
      { name: "description", content: "Kavish Snaps photographs cars with one purpose: helping them look their best online." },
      { property: "og:title", content: "About — Kavish Snaps" },
      { property: "og:description", content: "Automotive photography with a clear purpose." },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="About" title="Photographing cars with a purpose." />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-2 md:px-8">
        <img src={w3} alt="Wheel and headlight detail" width={1008} height={1264} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        <div className="space-y-6 self-center text-lg text-muted-foreground">
          <p className="font-display text-2xl font-semibold text-foreground">
            Kavish Snaps specializes in photographing cars with a clear purpose: helping them look their best when presented online.
          </p>
          <p>Rather than relying on quick phone photos or inconsistent listing images, Kavish Snaps creates a clean and professional visual presentation designed around the vehicle.</p>
          <p>Cars are highly visual products, yet many are still sold using rushed photos that don't do justice to the vehicle. Every car deserves to make the impact it should.</p>
        </div>
      </section>
      <CtaBand />
    </>
  ),
});
