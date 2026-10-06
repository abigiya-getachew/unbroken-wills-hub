import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Sparkles } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import ResourcesUser from "@/app/components/ResourcesUser";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Helpful guides, templates, checklists, code snippets, and community resources.",
};

export default function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Community Resources"
        title="Helpful Tools Shared by"
        highlight="Builders and Learners"
        description="This page collects approved guides, templates, checklists, code snippets, and community resources submitted by contributors."
      />

      <ResourcesUser />

      <section className="px-6 py-16 bg-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-100 text-violet-600 mb-6">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo-950 mb-5">
            Have Something Helpful to Share?
          </h2>

          <p className="text-violet-700/75 leading-relaxed mb-8">
            You can submit a guide, template, checklist, code snippet, or community
            resource through GitHub. Maintainers will review submissions before
            publishing them here.
          </p>

          <Link
            href="/contribute"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold hover:shadow-lg hover:shadow-violet-400/30 transition"
          >
            <Plus className="w-4 h-4" />
            Submit a Resource
          </Link>
        </div>
      </section>
    </>
  );
}