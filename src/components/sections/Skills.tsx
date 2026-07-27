"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Built for real-time, player-facing work"
          description="A blend of communication craft and operational discipline, developed live, under real conditions."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.1}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
                <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.8,
                            delay: si * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-gold-soft to-gold"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
