"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, PlayCircle, Mail, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";

export function Hero() {
  const hasVideo = Boolean(profile.introVideo);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-emerald/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Available for remote iGaming roles
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            {profile.heroHeadline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.heroSubheadline}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold-soft" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-border-subtle sm:block" />
            <span>{profile.openTo}</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <a
              href={hasVideo ? "#video" : "#video"}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/40 hover:text-gold-soft"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Watch Introduction
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-emerald/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle bg-surface shadow-2xl shadow-black/40">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent p-5">
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  {profile.name}
                </p>
                <p className="text-sm text-gold-soft">{profile.role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
