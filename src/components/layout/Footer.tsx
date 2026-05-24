import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collectionNavLinks, navLinks, siteConfig } from "@/data/home";

const footerColumns = [
  {
    title: "Collections",
    links: collectionNavLinks.map((l) => ({ ...l })),
  },
  {
    title: "Support",
    links: [...navLinks],
  },
] as const;

export function Footer() {
  return (
    <footer className="footer-surface text-brand-body">
      <div className="mx-auto max-w-[1440px] gutter-x py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-7">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-serif text-[1.65rem] tracking-[0.06em] text-brand-charcoal">
                {siteConfig.name}
              </span>
              <span className="body-copy mt-5 max-w-xs leading-[1.75]">
                Curated heritage and cultural journeys across sacred landscapes—composed
                with reverence, discretion, and the quiet confidence of a
                private travel atelier.
              </span>
            </Link>
            <div className="mt-8">
              <Button asChild variant="default" size="sm">
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp Concierge
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-1 lg:col-span-4 lg:grid-cols-2">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="label-meta text-[10px]">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-body transition-colors duration-300 hover:text-brand-charcoal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <h3 className="label-meta text-[10px]">Atelier &amp; Concierge</h3>
            <ul className="mt-5 space-y-5">
              <li>
                <span className="label-meta text-[9px] text-brand-body">Contact</span>
                <ul className="mt-2.5 space-y-2">
                  {siteConfig.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        className="block text-sm text-brand-charcoal transition-colors duration-300 hover:text-brand-gold"
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <span className="label-meta text-[9px] text-brand-body">Email</span>
                <a
                  className="mt-2.5 block text-sm text-brand-charcoal transition-colors duration-300 hover:text-brand-gold"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={siteConfig.social.instagram}
                className="label-meta text-[9px] text-brand-body transition-colors duration-300 hover:text-brand-charcoal"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                className="label-meta text-[9px] text-brand-body transition-colors duration-300 hover:text-brand-charcoal"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.youtube}
                className="label-meta text-[9px] text-brand-body transition-colors duration-300 hover:text-brand-charcoal"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-14 pt-8 sm:mt-16">
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"
            aria-hidden
          />
          <div className="flex flex-col gap-4 text-xs leading-relaxed text-brand-body/90 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {siteConfig.copyrightYear} {siteConfig.name}. Crafted for the global
              sangat.
            </p>
            <p className="max-w-md sm:text-right">
              Matha Tayk honours all travellers seeking heritage with humility.
              Itineraries evolve with corridor guidance and local conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
