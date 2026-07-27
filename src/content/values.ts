// ────────────────────────────────────────────────────────────────
// VALUES — the "My Values" cards. `icon` must match a key exported
// from src/components/ui/icon-map.tsx.
// ────────────────────────────────────────────────────────────────

export type Value = {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "graduation" | "trending" | "heart" | "badge" | "users";
};

export const values: Value[] = [
  {
    id: "integrity",
    title: "Integrity",
    description:
      "I treat every player interaction honestly, follow responsible gaming standards, and never cut corners under pressure.",
    icon: "shield",
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description:
      "I actively pursue certifications and new skills — from Intercom to Zendesk — to keep improving how I support people.",
    icon: "graduation",
  },
  {
    id: "growth-mindset",
    title: "Growth Mindset",
    description:
      "I see every difficult interaction as a chance to get better, not a setback. Feedback makes me sharper, not defensive.",
    icon: "trending",
  },
  {
    id: "empathy",
    title: "Empathy",
    description:
      "Behind every message or camera feed is a real person. I listen first, and respond to how someone feels, not just what they typed.",
    icon: "heart",
  },
  {
    id: "professionalism",
    title: "Professionalism",
    description:
      "Composed, accurate, and consistent — on camera, in chat, or under pressure, I hold the same standard every time.",
    icon: "badge",
  },
  {
    id: "customer-first",
    title: "Customer First",
    description:
      "Every decision I make in a support interaction starts from one question: what actually helps this player right now?",
    icon: "users",
  },
];
