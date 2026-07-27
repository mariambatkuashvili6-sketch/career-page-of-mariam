// ────────────────────────────────────────────────────────────────
// EXPERIENCE — one object per role. Add a new job by copying an
// existing object and editing the fields.
// ────────────────────────────────────────────────────────────────

export type ExperiencePhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  skillsGained: string[];
  current?: boolean;
  photos?: ExperiencePhoto[];
};

export const experience: Experience[] = [
  {
    id: "evolution",
    company: "Evolution Gaming",
    role: "Customer Interaction Specialist / Game Host",
    period: "2024 — Present",
    location: "Live Studio · International",
    summary:
      "Presenting live casino games (Blackjack, Baccarat, Crazy Time-style shows) to a global player base, combining broadcast performance with real-time customer support.",
    responsibilities: [
      "Delivered real-time interaction and customer support for international players within a high-volume live casino environment",
      "Maintained professional English communication with global customers during live operations and gameplay",
      "Supported issue resolution processes through escalation handling and problem-solving",
      "Adapted quickly to dynamic live-broadcast environments while maintaining high customer service standards",
    ],
    achievements: [
      "Handled fast-paced, high-volume interactions while maintaining accuracy, professionalism, and operational focus under pressure",
      "Consistently maintained service and compliance standards across live, unscripted broadcast conditions",
    ],
    skillsGained: [
      "Live Player Interaction",
      "Customer Communication",
      "Conflict Resolution",
      "Fast Decision Making",
      "Multitasking",
      "Responsible Gaming Awareness",
    ],
    current: true,
    photos: [
      {
        src: "/images/experience/evolution-crazy-pachinko.jpg",
        alt: "Mariam hosting a live show game at Evolution Gaming",
        caption:
          "On set hosting a Crazy Pachinko-style show — one of Evolution's highest-energy formats, streamed live to players around the world.",
      },
      {
        src: "/images/experience/evolution-blackjack.jpg",
        alt: "Mariam in Blackjack dealer uniform at Evolution Gaming",
        caption:
          "In uniform for Blackjack, one of the core live table games I present daily — precision and pace, with a warm player experience in every hand.",
      },
    ],
  },
  {
    id: "hotel-genesis",
    company: "Hotel Genesis Georgia",
    role: "Administration",
    period: "2021 — 2022",
    location: "On-site · Georgia",
    summary:
      "Managed guest relations and administrative operations in a fast-paced hospitality environment, with a strong focus on VIP and international guests.",
    responsibilities: [
      "Managed guest relations, reservations, and administrative operations",
      "Delivered personalized support and professional communication to international and VIP guests",
      "Handled operational responsibilities independently while maintaining high service quality",
    ],
    achievements: [
      "Built a reputation for calm, professional service recovery with demanding VIP guests",
    ],
    skillsGained: [
      "Customer Service",
      "VIP Guest Relations",
      "Administrative Operations",
      "Professionalism",
    ],
  },
];
