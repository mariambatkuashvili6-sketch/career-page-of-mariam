import { Mail, MapPin, Download } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

export function Contact() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      cta: "Send an email",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "View my professional profile",
      href: profile.linkedinUrl,
      cta: "Open LinkedIn",
      external: true,
    },
    {
      icon: Download,
      label: "CV",
      value: "Download my full resume (PDF)",
      href: profile.cv,
      cta: "Download CV",
      download: true,
    },
    ...(profile.whatsappUrl
      ? [
          {
            icon: WhatsAppIcon,
            label: "WhatsApp",
            value: "Message me directly",
            href: profile.whatsappUrl,
            cta: "Open WhatsApp",
            external: true,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your team"
          description="I'm actively looking for remote Customer Support, VIP Support, and Player Experience roles in iGaming — reach out any time."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.08}>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                download={card.download}
                className="group flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-gold/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-soft transition-transform group-hover:scale-110">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {card.label}
                  </p>
                  <p className="mt-0.5 truncate font-medium text-foreground">{card.value}</p>
                  <p className="mt-0.5 text-sm text-gold-soft">{card.cta} →</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-6 max-w-4xl">
          <div className="flex items-center justify-center gap-2 rounded-2xl border border-border-subtle bg-surface/60 p-5 text-sm text-muted">
            <MapPin className="h-4 w-4 text-gold-soft" aria-hidden="true" />
            Based in {profile.location} · {profile.openTo}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
