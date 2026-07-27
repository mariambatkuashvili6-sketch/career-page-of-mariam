import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl md:text-5xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base text-muted sm:text-lg",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
