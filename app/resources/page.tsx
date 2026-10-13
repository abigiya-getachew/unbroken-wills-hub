import type { Metadata } from "next";
import { Plus, Sparkles } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import Button from "@/components/ui/buttons/Button";
import ResourcesUser from "@/components/ui/forms/ResourcesUser";

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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-950 mb-5">
            Have Something Helpful to Share?
          </h2>

          <p className="text-emerald-700/75 leading-relaxed mb-8">
            You can submit a guide, template, checklist, code snippet, or community
            resource through GitHub. Maintainers will review submissions before
            publishing them here.
          </p>

          <Button
            href="/contribute"
            className="px-7 bg-linear-to-r from-emerald-600 to-emerald-700 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-400/30"
          >
            <Plus className="w-4 h-4" />
            Submit a Resource
          </Button>
        </div>
      </section>
    </>
  );
}