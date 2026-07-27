"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { timeline } from "@/content/timeline";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Career Journey"
          title="Game Presenter → Show Host → Player Support Professional"
          description="Each stage built directly on the last — from hospitality, to live entertainment, to the customer-facing role I'm growing into next."
        />

        <div className="relative mx-auto max-w-2xl">
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/60 via-border-subtle to-transparent"
          />

          <ol className="flex flex-col gap-10">
            {timeline.map((stop, index) => (
              <motion.li
                key={stop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16"
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2",
                    stop.future
                      ? "border-emerald bg-emerald/10 text-emerald"
                      : stop.current
                        ? "border-gold bg-gold/15 text-gold-soft"
                        : "border-border-subtle bg-surface text-muted"
                  )}
                >
                  {stop.future ? (
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>

                <div
                  className={cn(
                    "rounded-2xl border p-6 transition-colors sm:p-7",
                    stop.future
                      ? "border-emerald/30 bg-emerald/5"
                      : stop.current
                        ? "border-gold/30 bg-gold/5"
                        : "border-border-subtle bg-surface"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                      {stop.period}
                    </span>
                    {stop.current && (
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-soft">
                        Current
                      </span>
                    )}
                    {stop.future && (
                      <span className="rounded-full bg-emerald/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald">
                        Goal
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {stop.title}
                  </h3>
                  <p className="text-sm text-muted">{stop.place}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {stop.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {stop.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
