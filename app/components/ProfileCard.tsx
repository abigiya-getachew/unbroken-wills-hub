import { Link2, MapPin, Sparkles, Target } from "lucide-react";
import type { Field } from "@/app/data/profiles";

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

      <div className="flex flex-wrap gap-2 mb-5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs border border-violet-100"
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
              <p className="text-sm text-violet-700/75">
                {offers.join(", ")}
              </p>
            </div>
          )}

          {needs && needs.length > 0 && (
            <div className="rounded-2xl bg-violet-50 border border-violet-100 p-4">
              <div className="flex items-center gap-2 mb-2 text-violet-600 text-sm font-semibold">
                <Target className="w-4 h-4" />
                Looking For
              </div>
              <p className="text-sm text-violet-700/75">
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
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition"
        >
          <Link2 className="w-4 h-4" />
          Connect
        </a>
      ) : (
        <span className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full bg-violet-50 text-violet-400 text-sm font-semibold border border-violet-100">
          No public link provided
        </span>
      )}
    </article>
  );
}