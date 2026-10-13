import { LucideIcon } from "lucide-react";

export type Accent = "violet" | "peach" | "pink";

interface ContentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: Accent;
}

const accentStyles: Record<
  Accent,
  { iconBg: string; iconColor: string; border: string }
> = {
  violet: {
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    border: "border-violet-100",
  },
  peach: {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-100",
  },
  pink: {
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    border: "border-pink-100",
  },
};

export default function ContentCard({
  icon: Icon,
  title,
  description,
  accent = "violet",
}: ContentCardProps) {
  const styles = accentStyles[accent];

  return (
    <div
      className={`group p-7 bg-white border ${styles.border} rounded-2xl hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${styles.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-7 h-7 ${styles.iconColor}`} />
      </div>

      <h3 className="text-xl font-serif font-bold text-indigo-950 mb-3">
        {title}
      </h3>

      <p className="text-violet-700/70 leading-relaxed">{description}</p>
    </div>
  );
}