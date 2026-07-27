// ────────────────────────────────────────────────────────────────
// CERTIFICATES — to add a new certificate:
// 1. (optional) drop a screenshot of the credential in /public/certificates/
//    and set `image` to that path (e.g. "/certificates/intercom-1.png")
// 2. copy one of the objects below and edit the fields
// If `image` is left empty, a clean generated badge is shown instead —
// no image file is required to publish a certificate.
// `credentialUrl` defaults to the public LinkedIn certifications page;
// replace it with a direct verification link if the issuer provides one.
// ────────────────────────────────────────────────────────────────

const LINKEDIN_CERTIFICATIONS_URL =
  "https://www.linkedin.com/in/mariam-batkuashvili-628937307/details/certifications/";

export type Certificate = {
  id: string;
  title: string;
  provider: string;
  issued: string;
  credentialId?: string;
  skills: string[];
  category: "Customer Support" | "iGaming" | "Business & Leadership" | "Language";
  image?: string;
  credentialUrl: string;
};

export const certificates: Certificate[] = [
  {
    id: "intercom-worldclass",
    title: "Delivering a World-Class Customer Support Experience",
    provider: "Intercom",
    issued: "May 2026",
    credentialId: "181899018",
    skills: ["Customer Support", "Customer Experience"],
    category: "Customer Support",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "intercom-fundamentals",
    title: "Fundamentals for Support Agents",
    provider: "Intercom",
    issued: "May 2026",
    credentialId: "181892811",
    skills: ["Customer Satisfaction", "Customer Service"],
    category: "Customer Support",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "genadinik-customer-service",
    title: "Customer Service, Customer Support, and Customer Experience",
    provider: "Alex Genadinik",
    issued: "Aug 2025",
    credentialId: "UC-27cc70c8-3b2e-4be6-bfc6-37c3f4049ea8",
    skills: ["Customer Satisfaction", "Customer Service"],
    category: "Customer Support",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "igaming-foundations",
    title: "iGaming Foundations",
    provider: "Academics Ltd",
    issued: "Aug 2025",
    credentialId: "UC-65f0c182-e7d6-43bd-b4d3-44808276cc41",
    skills: ["iGaming"],
    category: "iGaming",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "nasba-growth-strategies",
    title: "Designing Growth Strategies",
    provider: "National Association of State Boards of Accountancy (NASBA)",
    issued: "Apr 2025",
    credentialId: "872827da5b8904c6467440761eb1224853027cc9c91f567996c7f0e87578c00a",
    skills: ["Business Growth Strategies"],
    category: "Business & Leadership",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "pmi-leadership",
    title: "Inspirational Leadership Skills: Practical Motivational Leadership",
    provider: "Project Management Institute (PMI)",
    issued: "Apr 2025",
    credentialId: "fdbf33d65999ac9ae068c20f5e97bac8e6582753345070b1d011cb0a624d1abc",
    skills: ["Inspiring Leadership"],
    category: "Business & Leadership",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "zendesk-challenging-customers",
    title: "Creating Positive Conversations with Challenging Customers",
    provider: "Zendesk",
    issued: "Apr 2025",
    credentialId: "7bd7879cb005a7ed034f2e1f2d892d94512c5cb70234046a2e8704c181cbeac9",
    skills: ["Customer Satisfaction"],
    category: "Customer Support",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
  {
    id: "madecraft-customer-service",
    title: "Customer Service Foundations",
    provider: "Madecraft",
    issued: "Apr 2025",
    credentialId: "1e59eee7b5490c2e0204693b857363fd993fe5feee00249d2828972ba146a6ac",
    skills: ["Customer Service"],
    category: "Customer Support",
    image: "",
    credentialUrl: LINKEDIN_CERTIFICATIONS_URL,
  },
];
