import { Code, ClipboardList, Users } from 'lucide-react';
import MissionCard from "../ui/cards/MissionCard";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-20 sm:px-8 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 sm:text-sm">Our Pillars</p>
          <h3 className="font-serif text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl md:text-5xl">
            Empowering Through Community
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionCard
            icon={Code}
            title="Technology"
            description="Learning, building, and sharing open-source tools for students, developers, and future technologists."
          />
          <MissionCard
            icon={ClipboardList}
            title="Tools & Records"
            description="Creating simple digital tools for organizing budgets, reports, logs, and everyday operational tasks."
          />
          <MissionCard
            icon={Users}
            title="Community & Learning"
            description="Building a respectful space where people can share knowledge, support one another, and collaborate on open-source projects."
          />
        </div>
      </div>
    </section>
  )}