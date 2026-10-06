import { LucideIcon } from 'lucide-react';

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <div className="group transform rounded-2xl border border-violet-200 bg-[#f5f3ff] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#fb923c]/60 hover:shadow-xl hover:shadow-violet-500/10">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#fb923c]/40 bg-[#fb923c]/15 transition-colors duration-300 group-hover:bg-[#fb923c]/25">
        <Icon className="h-8 w-8 text-[#7c3aed]" />
      </div>
      <h4 className="mb-3 font-serif text-2xl font-bold text-[#312e81]">{title}</h4>
      <p className="leading-relaxed text-[#312e81]/75">{description}</p>
    </div>
  );
}