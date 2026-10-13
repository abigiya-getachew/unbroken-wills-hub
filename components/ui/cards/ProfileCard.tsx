import { Link2, MapPin, Sparkles, Target } from "lucide-react";
import type { Field } from "@/types/profile";

interface ProfileCardProps {
  name: string;
  role: string;
  field: Field;
  location: string;
  bio: string;
  skills: string[];
  offers?: string[];
  needs?: string[];
  publicLink?: string;
}

const fieldBadge: Record<Field, string> = {
  Technology: "bg-emerald-100 text-emerald-700",
  Tools: "bg-orange-100 text-orange-700",
  Community: "bg-orange-100 text-orange-700",
};

const avatarGradient: Record<Field, string> = {
  Technology: "from-emerald-500 to-stone-700",
  Tools: "from-orange-400 to-rose-500",
  Community: "from-orange-400 to-emerald-500",
};

export default function ProfileCard({
  name,
  role,
  field,
  location,
  bio,
  skills,
  offers,
  needs,
  publicLink,
}: ProfileCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group transform rounded-3xl border border-emerald-100 bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-200/40">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${avatarGradient[field]} text-white flex items-center justify-center font-serif font-bold text-lg shadow-lg shadow-emerald-200/50`}
          >
            {initials}
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-stone-950">
              {name}
            </h3>
            <p className="text-sm text-emerald-600/70">{role}</p>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${fieldBadge[field]}`}
        >
          {field}
        </span>
      </div>

      <p className="text-sm text-emerald-700/75 leading-relaxed mb-5">{bio}</p>

      <div className="flex items-center gap-2 text-sm text-emerald-500 mb-4">
        <MapPin className="w-4 h-4" />
        {location}
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-100"
          >
            {skill}
          </span>
        ))}
      </div>

      {(offers && offers.length > 0) || (needs && needs.length > 0) ? (
        <div className="grid gap-3 mb-6">
          {offers && offers.length > 0 && (
            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
              <div className="flex items-center gap-2 mb-2 text-orange-600 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Can Offer
              </div>
              <p className="text-sm text-emerald-700/75">
                {offers.join(", ")}
              </p>
            </div>
          )}

          {needs && needs.length > 0 && (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <div className="flex items-center gap-2 mb-2 text-emerald-600 text-sm font-semibold">
                <Target className="w-4 h-4" />
                Looking For
              </div>
              <p className="text-sm text-emerald-700/75">
                {needs.join(", ")}
              </p>
            </div>
          )}
        </div>
      ) : null}

      {publicLink ? (
        <a
          href={publicLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
        >
          <Link2 className="w-4 h-4" />
          Connect
        </a>
      ) : (
        <span className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full bg-emerald-50 text-emerald-400 text-sm font-semibold border border-emerald-100">
          No public link provided
        </span>
      )}
    </article>
  );
}