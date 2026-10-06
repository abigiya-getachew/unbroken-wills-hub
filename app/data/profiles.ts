export type Field = "Technology" | "Tools" | "Community";

export interface Profile {
  name: string;
  role: string;
  field: Field;
  location: string;
  bio: string;
  skills: string[];
  publicLink?: string;
}

export const profiles: Profile[] = [
  {
    name: "Selam Tesfaye",
    role: "Software Engineering Student",
    field: "Technology",
    location: "Addis Ababa, Ethiopia",
    bio: "Interested in open-source web development and practical digital tools.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    name: "Meron Alemu",
    role: "Accounting Student",
    field: "Tools",
    location: "Addis Ababa, Ethiopia",
    bio: "Interested in spreadsheets, budgeting tools, and simple record-keeping systems.",
    skills: ["Excel", "Budgeting", "Reports", "Data Entry"],
  },
  {
    name: "Hana Girma",
    role: "Community Volunteer",
    field: "Community",
    location: "Addis Ababa, Ethiopia",
    bio: "Focused on peer support, event coordination, and creating welcoming learning spaces.",
    skills: ["Communication", "Mentorship", "Planning", "Outreach"],
  },
];