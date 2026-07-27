import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

const stats = [
  { value: "2+", label: "Years in Live iGaming" },
  { value: "3", label: "Languages Spoken" },
  { value: "9", label: "Support Certifications" },
  { value: "1000s", label: "Player Interactions" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="From live studio floors to player-first support"
          description="A quick look at the journey, the motivation, and the person behind the profile."
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="flex flex-col gap-5">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border-subtle bg-surface p-5 text-center"
                >
                  <p className="font-display text-3xl font-semibold gold-gradient-text">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Languages
              </h3>
              <div className="flex flex-col gap-4">
                {profile.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-muted">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-soft to-gold"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
