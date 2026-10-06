import type { Metadata } from "next";
import Link from "next/link";
import {
  Bug,
  Code,
  ExternalLink,
  FileText,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import ContentCard, { type Accent } from "@/app/components/ContentCard";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Learn how to contribute to the Unbroken Wills open-source community hub.",
};

interface ContributionWay {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: Accent;
}

const contributionWays: ContributionWay[] = [
  {
    icon: Code,
    title: "Developers",
    description:
      "Help build pages, fix bugs, improve accessibility, and create reusable components.",
    accent: "violet",
  },
  {
    icon: Sparkles,
    title: "Designers",
    description:
      "Improve layouts, color systems, typography, icons, and the overall user experience.",
    accent: "peach",
  },
  {
    icon: FileText,
    title: "Writers",
    description:
      "Create clear guides, resource descriptions, project documentation, and community guidelines.",
    accent: "pink",
  },
  {
    icon: Users,
    title: "Mentors",
    description:
      "Support learners as they build skills, explore projects, and grow as contributors.",
    accent: "violet",
  },
  {
    icon: Bug,
    title: "Testers",
    description:
      "Check broken links, spelling mistakes, mobile display issues, and user flow problems.",
    accent: "peach",
  },
  {
    icon: Users,
    title: "Community Builders",
    description:
      "Help welcome contributors, share knowledge, and make collaboration respectful and accessible.",
    accent: "pink",
  },
];

const repoUrl = "https://github.com/abigiya-getachew/unbroken-wills-hub";

export default function ContributePage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Build With Us in"
        highlight="Tools and Collaboration"
        description="Unbroken Wills is open source and student-led. You do not need to be an expert to contribute. Developers, designers, writers, testers, mentors, and community builders are welcome."
      />

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributionWays.map((way) => (
            <ContentCard
              key={way.title}
              icon={way.icon}
              title={way.title}
              description={way.description}
              accent={way.accent}
            />
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-white/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-3">
              For Developers
            </p>
            <h2 className="text-4xl font-serif font-bold text-indigo-950">
              How to Contribute Code
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ol className="space-y-5 text-violet-700/80 leading-relaxed">
              <li className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <span>
                  Fork the repository to your own GitHub account.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <span>
                  Clone the forked repository to your local computer.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <span>
                  Create a new branch for your feature or fix.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <span>
                  Make your changes, test them locally, and commit clearly.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="w-8 h-8 shrink-0 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm">
                  5
                </span>
                <span>
                  Push your branch and open a Pull Request.
                </span>
              </li>
            </ol>

            <div className="bg-gradient-to-br from-violet-600 to-indigo-900 text-white rounded-3xl p-8 shadow-xl shadow-violet-300/30">
              <h3 className="text-2xl font-serif font-bold mb-5">
                Good First Contributions
              </h3>

              <ul className="space-y-4 text-violet-100/85">
                <li>Improve the README file.</li>
                <li>Fix spelling mistakes in pages.</li>
                <li>Add a new resource card.</li>
                <li>Make the directory responsive.</li>
                <li>Create a mobile menu for the navbar.</li>
                <li>Add alt text and accessibility improvements.</li>
                <li>Write practical learning guides and tutorials.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-white border border-violet-100 rounded-3xl p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo-950 mb-5">
            Ready to Join?
          </h2>

          <p className="text-violet-700/75 leading-relaxed mb-8">
            Start by visiting the GitHub repository, reading the contributing
            guide, and picking one small task. Open source grows best when
            people take one practical step at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              <ExternalLink className="w-4 h-4" />
              View GitHub Repository
            </Link>

            <Link
              href="/directory"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-orange-300 text-orange-500 font-semibold hover:bg-orange-50 transition"
            >
              Browse Directory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}