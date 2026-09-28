import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Wordmark() {
  return (
    <Link to="/" className="font-display text-lg font-extrabold uppercase tracking-tight">
      Kavish<span className="text-muted-foreground">Snaps</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85">
            Book a shoot
          </Link>
        </nav>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-5 py-6 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-display text-2xl font-bold">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 bg-primary px-4 py-3 text-center font-semibold text-primary-foreground">
            Book a shoot
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Professional automotive photography for cars being sold online.
          </p>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <a href={site.instagramUrl} className="block hover:text-foreground">{site.instagram}</a>
          <p>{site.serviceArea}</p>
        </div>
        <div className="md:text-right">
          <Link to="/contact" className="inline-block bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            Book a shoot
          </Link>
          <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Kavish Snaps</p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pt-40">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] md:text-7xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
    </section>
  );
}
