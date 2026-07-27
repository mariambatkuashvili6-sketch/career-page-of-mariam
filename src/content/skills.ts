// ────────────────────────────────────────────────────────────────
// SKILLS — grouped badges/bars shown in the Skills section.
// `level` is 0–100 and only used for the animated bar width.
// ────────────────────────────────────────────────────────────────

export type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "player-facing",
    title: "Player-Facing Skills",
    skills: [
      { name: "Customer Communication", level: 95 },
      { name: "Live Player Interaction", level: 95 },
      { name: "Customer Support", level: 90 },
      { name: "VIP Player Interaction", level: 85 },
      { name: "Conflict Resolution", level: 88 },
      { name: "Responsible Gaming Awareness", level: 85 },
    ],
  },
  {
    id: "operational",
    title: "Operational Strengths",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Fast Decision Making", level: 92 },
      { name: "Multitasking", level: 88 },
      { name: "Adaptability", level: 93 },
      { name: "Teamwork", level: 90 },
      { name: "Professionalism", level: 95 },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Georgian (Native)", level: 100 },
      { name: "English (C1)", level: 90 },
      { name: "Spanish (B2)", level: 70 },
    ],
  },
];
