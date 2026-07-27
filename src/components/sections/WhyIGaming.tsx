import { Dices, Headset, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { whyIGaming } from "@/content/goals";

const pillars = [
  {
    icon: Headset,
    title: "Real human connection",
    description: "Every interaction is a chance to make someone's experience better, instantly.",
  },
  {
    icon: Dices,
    title: "Fast-moving industry",
    description: "New formats, live technology, and evolving player expectations keep me learning.",
  },
  {
    icon: Sparkles,
    title: "Responsible innovation",
    description: "I want to help shape a safer, more player-first experience as the industry grows.",
  },
];

export function WhyIGaming() {
  return (
    <section id="why-igaming" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
              {whyIGaming.heading}
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl">
              An industry built on people, pace, and technology
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {whyIGaming.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-4 rounded-2xl border border-border-subtle bg-surface p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-soft">
                  <pillar.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
