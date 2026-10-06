export type Field = "Technology" | "Tools" | "Community";

export interface Profile {
  name: string;
  role: string;
  field: Field;
  location: string;
  bio: string;
  skills: string[];
  offers?: string[];
  needs?: string[];
  publicLink?: string;
  sourceIssue?: number;
}

export const profiles: Profile[] = [];