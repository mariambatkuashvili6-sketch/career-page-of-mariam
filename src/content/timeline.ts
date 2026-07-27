// ────────────────────────────────────────────────────────────────
// CAREER JOURNEY — the interactive timeline. Add, remove, or
// reorder stops by editing this array. `current: true` highlights
// the active stage; `future: true` renders it as an upcoming goal.
// ────────────────────────────────────────────────────────────────

export type TimelineStop = {
  id: string;
  period: string;
  title: string;
  place: string;
  description: string;
  highlights: string[];
  current?: boolean;
  future?: boolean;
};

export const timeline: TimelineStop[] = [
  {
    id: "hospitality",
    period: "2021 — 2022",
    title: "Administration",
    place: "Hotel Genesis Georgia",
    description:
      "First hands-on training in customer service — managing guest relations, reservations, and daily operations for international and VIP guests.",
    highlights: [
      "Guest relations & reservations management",
      "Personalized support for international & VIP guests",
      "Independent handling of daily operational responsibilities",
    ],
  },
  {
    id: "presenter",
    period: "2024 — Present",
    title: "Customer Interaction Specialist / Game Host",
    place: "Evolution Gaming",
    description:
      "Delivering real-time interaction and support for international players across Blackjack, Baccarat, and fast-paced show-style games, live, on camera.",
    highlights: [
      "Real-time customer interaction in a high-volume live casino environment",
      "Professional English communication with a global audience",
      "Issue resolution through escalation handling under pressure",
      "Adapting instantly to dynamic, live-broadcast conditions",
    ],
    current: true,
  },
  {
    id: "future",
    period: "Next chapter",
    title: "Customer Success / VIP Support Professional",
    place: "Remote · iGaming",
    description:
      "Bringing everything learned on camera into a dedicated player-support role — helping players directly, solving problems, and building long-term trust.",
    highlights: [
      "Player Experience & VIP Support",
      "Customer Success & Account Management",
      "Responsible Gaming & Fraud/Risk Support",
    ],
    future: true,
  },
];
