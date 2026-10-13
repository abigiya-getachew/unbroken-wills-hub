import { LucideIcon } from 'lucide-react';

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <div className="group transform rounded-2xl border border-emerald-200 bg-stone-50 p-8 text-center transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-emerald-900/10">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-orange-200 bg-orange-100 transition-colors duration-200 group-hover:bg-orange-200">
        <Icon className="h-8 w-8 text-emerald-700" />
      </div>
      <h4 className="mb-3 font-serif text-2xl font-bold text-stone-900">{title}</h4>
      <p className="leading-relaxed text-stone-600">{description}</p>
    </div>
  );
}