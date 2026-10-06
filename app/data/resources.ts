export type ResourceCategory =
  | "Guides"
  | "Templates"
  | "Code Snippets"
  | "Checklists"
  | "Community";

export type ResourceType = "link" | "file" | "note";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: ResourceType;
  url?: string;
  filePath?: string;
  tags?: string[];
  submittedBy?: string;
  licenseNote?: string;
}

export const resources: Resource[] = [];