import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { certificates } from "@/content/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Investing in customer support fundamentals"
          description="Real, verifiable credentials I've completed to formalize the support skills I already use every day on camera."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-colors hover:border-gold/30">
                <div className="flex h-28 items-center justify-center border-b border-border-subtle bg-surface-elevated">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      width={200}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 font-display text-xl font-semibold text-gold-soft">
                      {cert.provider.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-surface-elevated px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
                    <Award className="h-3 w-3 text-gold-soft" aria-hidden="true" />
                    {cert.category}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-gold-soft">{cert.provider}</p>
                  <p className="mt-1 text-xs text-muted">Issued {cert.issued}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <Chip key={skill} className="text-[11px]">
                        {skill}
                      </Chip>
                    ))}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle py-2.5 text-sm font-medium text-foreground transition-colors hover:border-gold/40 hover:text-gold-soft"
                  >
                    View Credential
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
