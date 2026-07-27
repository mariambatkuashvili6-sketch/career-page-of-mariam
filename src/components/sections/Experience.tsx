import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where the skills were built"
          description="Real-time, player-facing roles that shaped how I communicate, solve problems, and stay composed under pressure."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-soft">
                      <Briefcase className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                        {job.role}
                      </h3>
                      <p className="text-sm text-gold-soft">{job.company}</p>
                    </div>
                  </div>
                  {job.current && (
                    <span className="shrink-0 rounded-full bg-emerald/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald">
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                  <span>{job.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.location}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                <div className="mt-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Responsibilities
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Achievements
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                  {job.skillsGained.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
