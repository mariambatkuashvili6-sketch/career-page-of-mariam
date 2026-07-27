import { PlayCircle, Captions } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { videoTranscript } from "@/content/video-transcript";

export function VideoIntro() {
  const hasVideo = Boolean(profile.introVideo);

  return (
    <section id="video" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Video Introduction"
          title="Hear it directly from me"
          description="A short, personal introduction — who I am, what I do today, and why I'd be a great fit for your support team."
        />

        <div className="mx-auto flex max-w-4xl flex-col items-start gap-10 lg:flex-row">
          <Reveal className="mx-auto w-full max-w-sm shrink-0 lg:mx-0">
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-border-subtle bg-surface shadow-2xl shadow-black/40">
              {hasVideo ? (
                <video
                  controls
                  preload="metadata"
                  poster={profile.introVideoPoster}
                  className="h-full w-full object-cover"
                >
                  <source src={profile.introVideo} type="video/mp4" />
                  {profile.introVideoCaptions && (
                    <track
                      kind="captions"
                      src={profile.introVideoCaptions}
                      srcLang="en"
                      label="English"
                      default
                    />
                  )}
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-surface to-surface-elevated px-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold-soft">
                    <PlayCircle className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <p className="font-display text-lg font-semibold text-foreground">
                    Introduction video coming soon
                  </p>
                  <p className="max-w-sm text-sm text-muted">
                    Add a video file to <code className="text-gold-soft">/public/video</code> and
                    set <code className="text-gold-soft">introVideo</code> in{" "}
                    <code className="text-gold-soft">src/content/profile.ts</code> — it will
                    appear here automatically.
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          {hasVideo && (
            <Reveal delay={0.1} className="w-full">
              <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  <Captions className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                  Transcript
                </div>
                <div className="flex flex-col gap-4">
                  {videoTranscript.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
