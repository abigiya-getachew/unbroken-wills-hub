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
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    border: "border-emerald-100",
  },
  peach: {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-100",
  },
  pink: {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-100",
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
      className={`group transform rounded-2xl border bg-white p-7 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-200/40 ${styles.border}`}
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105 ${styles.iconBg}`}
      >
        <Icon className={`w-7 h-7 ${styles.iconColor}`} />
      </div>

      <h3 className="text-xl font-serif font-bold text-stone-950 mb-3">
        {title}
      </h3>

      <p className="text-emerald-700/70 leading-relaxed">{description}</p>
    </div>
  );
}