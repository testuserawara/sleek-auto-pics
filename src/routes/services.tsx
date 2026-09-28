import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/Layout";
import { ServicesList, Process, Details, SectionHead, CtaBand } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kavish Snaps" },
      { name: "description", content: "Listing photography, dealership photography and custom automotive shoots." },
      { property: "og:title", content: "Services — Kavish Snaps" },
      { property: "og:description", content: "Automotive photography services for private sellers and dealerships." },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Services" title="Photography made for selling cars.">
        From a single private sale to a full dealership lot.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <ServicesList detailed />
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <SectionHead eyebrow="The details" title="What to expect." />
        <Details />
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <SectionHead eyebrow="How it works" title="Four simple steps." />
        <Process />
      </section>
      <CtaBand />
    </>
  ),
});
