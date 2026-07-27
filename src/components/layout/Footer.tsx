import { Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { navLinks } from "@/content/nav";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-xl font-semibold text-foreground">
              Mariam<span className="gold-gradient-text">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {profile.role} based in {profile.location}. {profile.openTo}.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 transition-colors hover:text-gold-soft"
              >
                <Mail className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                {profile.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Navigate
              </h3>
              <ul className="flex flex-col gap-2">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Connect
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.cv}
                    download
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed & built for a career in player-first support.</p>
        </div>
      </Container>
    </footer>
  );
}
