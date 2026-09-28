import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import hero from "@/assets/hero.jpg";
import { site, testimonials } from "@/lib/site";

export const works = [
  { src: hero, title: "Performance sedan", tag: "Exterior · Dusk", w: 1920, h: 1088 },
  { src: w2, title: "Cabin detail", tag: "Interior", w: 1008, h: 1264 },
  { src: w3, title: "Wheel & light", tag: "Detail", w: 1008, h: 1264 },
  { src: w1, title: "Family SUV", tag: "Listing · Fjord road", w: 1600, h: 1008 },
  { src: w4, title: "Classic hatch", tag: "Enthusiast shoot", w: 1600, h: 1008 },
  { src: w5, title: "Dealership lot", tag: "Dealership", w: 1600, h: 1008 },
];

function Shot({ item, className = "" }: { item: (typeof works)[number]; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden bg-card ${className}`}>
      <img
        src={item.src}
        alt={item.title}
        width={item.w}
        height={item.h}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-scrim/80 to-transparent p-5 text-sm opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
        <span className="font-display font-bold">{item.title}</span>
        <span className="text-muted-foreground">{item.tag}</span>
      </figcaption>
    </figure>
  );
}

export function WorkGrid({ full = false }: { full?: boolean }) {
  const [a, b, c, d, e, f] = works;
  return (
    <div className="grid gap-3 md:gap-4">
      <Shot item={d} className="aspect-[16/9]" />
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <Shot item={b} className="aspect-[4/5]" />
        <Shot item={c} className="aspect-[4/5]" />
      </div>
      <Shot item={e} className="aspect-[16/9]" />
      {full && (
        <>
          <div className="grid gap-3 md:grid-cols-[2fr_1fr] md:gap-4">
            <Shot item={f} className="aspect-[16/10]" />
            <Shot item={b} className="aspect-[4/5] md:aspect-auto" />
          </div>
          <Shot item={a} className="aspect-[16/9]" />
        </>
      )}
    </div>
  );
}

export function SectionHead({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-extrabold leading-none md:text-6xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export const services = [
  {
    n: "01",
    title: "Automotive listing photography",
    body: "Professional exterior and interior photos made for private and commercial car listings — clear, flattering but realistic, and ready for FINN.no and other marketplaces.",
    points: ["Clear, consistent presentation", "Flattering, honest angles", "Important details highlighted", "Marketplace-ready images"],
  },
  {
    n: "02",
    title: "Dealership photography",
    body: "Consistent vehicle photography for dealerships and automotive businesses selling multiple cars. Packages to be confirmed.",
    points: ["[Dealership package details]", "Consistent look across stock", "Recurring shoots"],
  },
  {
    n: "03",
    title: "Custom automotive shoots",
    body: "More creative, cinematic photography for enthusiasts, brands and special vehicles.",
    points: ["Creative locations", "Cinematic edits", "For enthusiasts & brands"],
  },
];

export function ServicesList({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {services.map((s) => (
        <div key={s.n} className="grid gap-4 py-10 md:grid-cols-[120px_1fr_1fr] md:gap-10">
          <span className="font-display text-sm text-muted-foreground">{s.n}</span>
          <h3 className="text-2xl font-bold md:text-3xl">{s.title}</h3>
          <div>
            <p className="text-muted-foreground">{s.body}</p>
            {detailed && (
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="border-l border-border pl-3">{p}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Details() {
  const rows = [
    ["Packages & pricing", site.pricing],
    ["Photos delivered", site.photoCount],
    ["Delivery time", site.deliveryTime],
    ["Service area", site.serviceArea],
    ["Availability", site.availability],
  ];
  return (
    <dl className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
      {rows.map(([k, v]) => (
        <div key={k} className="bg-background p-6">
          <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
          <dd className="mt-2 font-display font-bold">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

const steps = [
  ["01", "Book", "Tell us about your car and arrange a suitable shoot."],
  ["02", "Shoot", "We photograph the exterior, interior and important details."],
  ["03", "Receive", "Get professionally edited images ready for your listing."],
  ["04", "List", "Upload the images to FINN.no or wherever you are selling your car."],
];

export function Process() {
  return (
    <div className="grid gap-px bg-border md:grid-cols-4">
      {steps.map(([n, t, b]) => (
        <div key={n} className="bg-background p-8">
          <span className="font-display text-5xl font-extrabold text-muted-foreground/40">{n}</span>
          <h3 className="mt-6 text-2xl font-bold">{t}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{b}</p>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHead eyebrow="Clients" title="What they say." />
      <div className="grid gap-10 md:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="border-l border-border pl-6">
            <p className="text-xl">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-muted-foreground">{t.name}{t.role ? ` — ${t.role}` : ""}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-24 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-2xl text-5xl font-extrabold leading-[0.95] md:text-7xl">Ready to make it worth the click?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary px-6 py-4 font-semibold text-primary-foreground">
          Book a shoot <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
