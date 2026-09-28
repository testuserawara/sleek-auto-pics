import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/Layout";
import { WorkGrid, CtaBand } from "@/components/site/Sections";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Kavish Snaps" },
      { name: "description", content: "Portfolio of automotive photography for listings, dealerships and enthusiast shoots." },
      { property: "og:title", content: "Work — Kavish Snaps" },
      { property: "og:description", content: "Selected automotive photography by Kavish Snaps." },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Portfolio" title="The work.">
        Exteriors, interiors and the details that matter — shot with the listing in mind.
      </PageIntro>
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <WorkGrid full />
      </section>
      <CtaBand />
    </>
  ),
});
