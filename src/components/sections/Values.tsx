import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { values } from "@/content/values";
import { valueIconMap } from "@/components/ui/icon-map";

export function Values() {
  return (
    <section id="values" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="My Values"
          title="What I bring to a team beyond the CV"
          description="The principles that guide how I treat players, colleagues, and my own growth."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => {
            const Icon = valueIconMap[value.icon];
            return (
              <Reveal key={value.id} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-border-subtle bg-surface p-7 transition-colors hover:border-gold/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-soft transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
