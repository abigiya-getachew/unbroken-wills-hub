import { Code, ClipboardList, Users } from 'lucide-react';
import MissionCard from './MissionCard';

export default function AboutSection() {
  return (
    <section id="about" className="px-8 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Our Pillars</p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
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