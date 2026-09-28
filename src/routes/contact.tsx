import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site/Layout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a shoot — Kavish Snaps" },
      { name: "description", content: "Book automotive photography for your car listing or dealership." },
      { property: "og:title", content: "Book a shoot — Kavish Snaps" },
      { property: "og:description", content: "Tell us about your car and arrange a shoot." },
    ],
  }),
  component: Contact,
});

const field = "w-full border border-input bg-transparent px-4 py-3 outline-none transition-colors focus:border-foreground";
const label = "mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageIntro eyebrow="Booking & contact" title="Book a shoot.">
        Tell us about your car and when suits you. We'll get back to confirm the details.
      </PageIntro>
      <section className="mx-auto grid max-w-7xl gap-16 px-5 pb-24 md:grid-cols-[2fr_1fr] md:px-8">
        {sent ? (
          <div className="border border-border p-10">
            <h2 className="text-3xl font-bold">Thanks — request received.</h2>
            <p className="mt-3 text-muted-foreground">We'll be in touch shortly to arrange your shoot.</p>
          </div>
        ) : (
          <form
            className="grid gap-6 sm:grid-cols-2"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div><label className={label} htmlFor="name">Name</label><input id="name" required className={field} /></div>
            <div><label className={label} htmlFor="email">Email</label><input id="email" type="email" required className={field} /></div>
            <div><label className={label} htmlFor="phone">Phone</label><input id="phone" type="tel" className={field} /></div>
            <div><label className={label} htmlFor="car">Car (make, model, year)</label><input id="car" required className={field} /></div>
            <div>
              <label className={label} htmlFor="type">Shoot type</label>
              <select id="type" className={`${field} bg-background`}>
                <option>Listing photography</option>
                <option>Dealership photography</option>
                <option>Custom shoot</option>
              </select>
            </div>
            <div><label className={label} htmlFor="when">Preferred timing</label><input id="when" placeholder="e.g. weekday evening, next week" className={field} /></div>
            <div className="sm:col-span-2"><label className={label} htmlFor="loc">Location</label><input id="loc" className={field} /></div>
            <div className="sm:col-span-2"><label className={label} htmlFor="msg">Anything else?</label><textarea id="msg" rows={5} className={field} /></div>
            <button className="bg-primary px-6 py-4 font-semibold text-primary-foreground sm:col-span-2 sm:justify-self-start">Send booking request</button>
          </form>
        )}
        <aside className="space-y-6 text-sm">
          {[["Phone", site.phone], ["Email", site.email], ["Instagram", site.instagram], ["Service area", site.serviceArea], ["Availability", site.availability]].map(([k, v]) => (
            <div key={k} className="border-t border-border pt-4">
              <p className={label}>{k}</p>
              <p className="font-display text-lg font-bold">{v}</p>
            </div>
          ))}
        </aside>
      </section>
    </>
  );
}
