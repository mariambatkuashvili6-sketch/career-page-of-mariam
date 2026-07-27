import { GraduationCap, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { certificates } from "@/content/certificates";

const categories = ["Customer Support", "iGaming", "Business & Leadership", "Language"] as const;

export function Learning() {
  return (
    <section id="learning" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Learning & Development"
          title="Always building the next skill"
          description="Courses completed so far, organized by focus area — new certificates are added here as soon as they're finished."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {categories.map((category, ci) => {
            const items = certificates.filter((c) => c.category === category);
            if (items.length === 0) return null;
            return (
              <Reveal key={category} delay={ci * 0.08}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-soft">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {category}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-start gap-3 text-sm">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald"
                          aria-hidden="true"
                        />
                        <span className="text-muted">
                          <span className="text-foreground">{item.title}</span> — {item.provider}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="rounded-2xl border border-dashed border-border-subtle bg-surface/60 p-6 text-center">
            <p className="text-sm text-muted">
              Currently working toward:{" "}
              <span className="text-gold-soft">
                Responsible Gaming certification & AML fundamentals
              </span>{" "}
              — see <a href="#goals" className="underline decoration-gold/50 underline-offset-4 hover:text-foreground">Career Goals</a>.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
