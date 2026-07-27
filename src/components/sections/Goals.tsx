import { Target, TrendingUp, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { goals } from "@/content/goals";

export function Goals() {
  return (
    <section id="goals" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Career Goals"
          title="Where I'm headed"
          description="A clear, honest picture of what I'm working toward — now and over the next five years."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-soft">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Short-Term Goals
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {goals.shortTerm.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald/30 bg-emerald/10 text-emerald">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Long-Term Goals
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {goals.longTerm.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 via-surface to-surface p-8 text-center sm:p-10">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold-soft">
              <Star className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground sm:text-2xl">
              Dream Role
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
              {goals.dreamRole}
            </p>
            <div className="mx-auto mt-6 max-w-2xl border-t border-border-subtle pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                5-Year Vision
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {goals.fiveYearVision}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
