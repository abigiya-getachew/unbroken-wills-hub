import type { Metadata } from "next";
import {
  BookOpen,
  Calculator,
  Code,
  Download,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import ContentCard, { type Accent } from "@/app/components/ContentCard";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Open learning resources for technology, practical tools, and community collaboration.",
};

interface ResourceItem {
  title: string;
  description: string;
}

interface ResourceCategory {
  name: string;
  icon: LucideIcon;
  accent: Accent;
  description: string;
  items: ResourceItem[];
}

const categories: ResourceCategory[] = [
  {
    name: "Technology",
    icon: Code,
    accent: "violet",
    description:
      "Practical learning guides for building software and contributing to open source.",
    items: [
      {
        title: "Git and GitHub Starter Guide",
        description:
          "Learn how to clone a repository, create branches, commit changes, and submit pull requests.",
      },
      {
        title: "Next.js Beginner Notes",
        description:
          "Understand pages, components, routing, and how to build a simple community website.",
      },
      {
        title: "Tailwind CSS Basics",
        description:
          "Style modern interfaces quickly using utility classes, colors, spacing, and responsive design.",
      },
      {
        title: "Open Source Contribution Guide",
        description:
          "A step-by-step guide for first-time contributors who want to help without feeling overwhelmed.",
      },
    ],
  },
  {
    name: "Tools & Records",
    icon: Calculator,
    accent: "peach",
    description:
      "Simple ideas for organizing budgets, reports, logs, and everyday records.",
    items: [
      {
        title: "Simple Expense Tracker Structure",
        description:
          "A practical structure for recording income, expenses, categories, and dates.",
      },
      {
        title: "Student Budget Planner Idea",
        description:
          "A lightweight way for students to plan spending and keep track of expenses.",
      },
      {
        title: "Community Record Log",
        description:
          "A simple log concept for documenting activities, updates, and follow-up tasks.",
      },
      {
        title: "Basic Record-Keeping Concepts for Developers",
        description:
          "A short introduction to organizing consistent, useful records in digital tools.",
      },
    ],
  },
  {
    name: "Community & Learning",
    icon: Users,
    accent: "pink",
    description:
      "Resources for sharing knowledge, collaborating respectfully, and supporting learners.",
    items: [
      {
        title: "Peer Mentorship Guide",
        description:
          "Ideas for setting goals, sharing feedback, and supporting a peer's learning journey.",
      },
      {
        title: "Open Source Collaboration Basics",
        description:
          "A guide to communicating clearly, reviewing contributions, and working together.",
      },
      {
        title: "Community Guidelines Template",
        description:
          "A starting point for setting expectations and creating a respectful community.",
      },
      {
        title: "Respectful Communication Practices",
        description:
          "Practical habits for clear, considerate communication across a team.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Resources"
        title="Knowledge Shared Is"
        highlight="Knowledge Multiplied"
        description="This page collects practical tools, guides, and templates for technology, everyday records, and community learning."
      />

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ContentCard
            icon={Download}
            title="Templates"
            description="Practical spreadsheets, checklists, and planning tools that can be copied and adapted."
            accent="violet"
          />

          <ContentCard
            icon={BookOpen}
            title="Guides"
            description="Beginner explanations for coding, digital tools, and community participation."
            accent="peach"
          />

          <ContentCard
            icon={Users}
            title="Community Learning"
            description="Resources for mentorship, collaboration, and respectful communication."
            accent="pink"
          />
        </div>

        {categories.map((category) => (
          <div key={category.name} className="mb-16 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white border border-violet-100 flex items-center justify-center shadow-sm">
                <category.icon className="w-6 h-6 text-violet-600" />
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-indigo-950">
                  {category.name}
                </h2>
                <p className="text-violet-700/70">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <ContentCard
                  key={item.title}
                  icon={category.icon}
                  title={item.title}
                  description={item.description}
                  accent={category.accent}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}