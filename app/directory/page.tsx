import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Users } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import DirectoryClient from "@/app/components/DirectoryUser";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "Browse and search contributors and learners working across technology, tools, and community.",
};

export default function DirectoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community Directory"
        title="Connect With"
        highlight="Builders & Learners"
        description="A directory of contributors and learners across technology, tools, and community, open to people from all backgrounds."
      />

      <DirectoryClient />

      <section className="px-6 py-16 bg-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-100 text-violet-600 mb-6">
            <Users className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo-950 mb-5">
            Want to Be Part of the Directory?
          </h2>

          <p className="text-violet-700/75 leading-relaxed mb-8">
            We welcome contributors and learners who want to share their skills
            and learning journey. Profiles can be simple at first: your name,
            field, location, skills, and a short sentence about how you want to
            contribute.
          </p>

          <Link
            href="/contribute"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold hover:shadow-lg hover:shadow-violet-400/30 transition"
          >
            <Plus className="w-4 h-4" />
            Submit Your Profile
          </Link>
        </div>
      </section>
    </>
  );
}