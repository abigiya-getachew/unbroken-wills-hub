import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Sparkles,
  Users,
} from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import ContentCard from "@/app/components/ContentCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Unbroken Wills, an open-source project focused on practical tools and shared learning.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Community Built on"
        highlight="Resilience and Learning"
        description="Created by a software engineering student in Addis Ababa, Unbroken Wills supports students and builders with practical tools, shared knowledge, and community-centered technology."
      />

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-violet-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-3xl font-serif font-bold text-indigo-950 mb-5">
              Our Story
            </h2>

            <p className="text-violet-700/75 leading-relaxed mb-4">
              Unbroken Wills was created to support students and builders as
              they learn, solve practical problems, and build useful digital
              tools together.
            </p>

            <p className="text-violet-700/75 leading-relaxed mb-4">
              The project focuses on practical tools and shared knowledge.
              Contributors can bring their time, ideas, creativity, and skills
              to build resources that others can learn from and use.
            </p>

            <p className="text-violet-700/75 leading-relaxed">
              It is open to contributors from all backgrounds and built around
              resilience, learning, collaboration, and excellence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-600 to-indigo-900 text-white rounded-3xl p-8 shadow-xl shadow-violet-300/30">
            <h2 className="text-3xl font-serif font-bold mb-5">Our Vision</h2>

            <p className="text-violet-100/85 leading-relaxed mb-4">
              To create a respectful, useful space where learners and
              contributors in Addis Ababa and beyond can grow their skills and
              build technology together.
            </p>

            <p className="text-violet-100/85 leading-relaxed">
              We envision a community where students can share learning
              resources, developers can build open-source tools, and
              contributors can help one another create practical solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-3">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-indigo-950">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContentCard
              icon={Activity}
              title="Resilience"
              description="We learn from challenges, adapt, and keep building practical solutions together."
              accent="violet"
            />

            <ContentCard
              icon={BookOpen}
              title="Learning"
              description="We share knowledge, useful resources, and lessons learned so more people can grow."
              accent="peach"
            />

            <ContentCard
              icon={Users}
              title="Collaboration"
              description="We work openly, communicate respectfully, and make room for contributions from all backgrounds."
              accent="pink"
            />

            <ContentCard
              icon={Sparkles}
              title="Excellence"
              description="We value thoughtful work, accessible tools, clear communication, and continuous improvement."
              accent="violet"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-white border border-violet-100 rounded-3xl p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo-950 mb-5">
            This Is More Than a Website
          </h2>

          <p className="text-violet-700/75 leading-relaxed mb-8">
            Unbroken Wills is an open-source project for people who value
            practical tools, shared learning, collaboration, and technology
            that supports communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/directory"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              Explore the Directory
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contribute"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-orange-300 text-orange-500 font-semibold hover:bg-orange-50 transition"
            >
              Contribute to the Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}