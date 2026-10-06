import { Link2, Mail, MapPin } from "lucide-react";

export type Field = "Technology" | "Tools" | "Community";

interface ProfileCardProps {
  name: string;
  role: string;
  field: Field;
  location: string;
  bio: string;
  skills: string[];
}

const fieldBadge: Record<Field, string> = {
  Technology: "bg-violet-100 text-violet-700",
  Tools: "bg-orange-100 text-orange-700",
  Community: "bg-pink-100 text-pink-700",
};

const avatarGradient: Record<Field, string> = {
  Technology: "from-violet-500 to-indigo-700",
  Tools: "from-orange-400 to-rose-500",
  Community: "from-pink-400 to-violet-500",
};

export default function ProfileCard({
  name,
  role,
  field,
  location,
  bio,
  skills,
}: ProfileCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group bg-white border border-violet-100 rounded-3xl p-6 hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarGradient[field]} text-white flex items-center justify-center font-serif font-bold text-lg shadow-lg shadow-violet-200/50`}
          >
            {initials}
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-indigo-950">
              {name}
            </h3>
            <p className="text-sm text-violet-600/70">{role}</p>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${fieldBadge[field]}`}
        >
          {field}
        </span>
      </div>

      <p className="text-sm text-violet-700/75 leading-relaxed mb-5">{bio}</p>

      <div className="flex items-center gap-2 text-sm text-violet-500 mb-4">
        <MapPin className="w-4 h-4" />
        {location}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs border border-violet-100"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition"
        >
          <Mail className="w-4 h-4" />
          Contact
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-orange-200 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition"
        >
          <Link2 className="w-4 h-4" />
          Profile
        </button>
      </div>
    </article>
  );
}