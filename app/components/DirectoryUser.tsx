"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProfileCard, {
  type Field,
} from "@/app/components/ProfileCard";

interface Profile {
  name: string;
  role: string;
  field: Field;
  location: string;
  bio: string;
  skills: string[];
}

const profiles: Profile[] = [
  {
    name: "Selam Tesfaye",
    role: "Software Engineering Student",
    field: "Technology",
    location: "Addis Ababa, Ethiopia",
    bio: "Passionate about building accessible web applications and encouraging other students to learn open-source development.",
    skills: ["React", "TypeScript", "Open Source", "UI Design"],
  },
  {
    name: "Meron Alemu",
    role: "Accounting Student interested in tools",
    field: "Tools",
    location: "Addis Ababa, Ethiopia",
    bio: "Exploring ways digital tools can make budgeting, bookkeeping, and everyday records easier to manage.",
    skills: ["Bookkeeping", "Budgeting", "Spreadsheets", "Record Keeping"],
  },
  {
    name: "Hana Girma",
    role: "Designer",
    field: "Community",
    location: "Addis Ababa, Ethiopia",
    bio: "Designs clear, accessible interfaces and enjoys collaborating with open-source teams.",
    skills: ["Figma", "UI Design", "Accessibility", "Prototyping"],
  },
  {
    name: "Liya Bekele",
    role: "Writer",
    field: "Community",
    location: "Ethiopia",
    bio: "Turns technical topics into helpful guides, tutorials, and documentation for learners.",
    skills: ["Technical Writing", "Documentation", "Editing", "Learning Resources"],
  },
  {
    name: "Ruth Mekonnen",
    role: "Tester",
    field: "Technology",
    location: "Addis Ababa, Ethiopia",
    bio: "Tests web experiences and reports clear, reproducible issues to help improve project quality.",
    skills: ["Quality Assurance", "Bug Reports", "Accessibility", "Web Testing"],
  },
  {
    name: "Bethlehem Assefa",
    role: "Community Volunteer",
    field: "Community",
    location: "Addis Ababa, Ethiopia",
    bio: "Welcomes new contributors, helps coordinate community activities, and supports shared learning.",
    skills: ["Community Support", "Event Planning", "Communication", "Teamwork"],
  },
  {
    name: "Dawit Kebede",
    role: "Mentor",
    field: "Technology",
    location: "Addis Ababa, Ethiopia",
    bio: "Supports students as they build practical software skills and find their first open-source projects.",
    skills: ["Mentorship", "JavaScript", "Career Guidance", "Git"],
  },
  {
    name: "Mekdes Tadesse",
    role: "Open Source Contributor",
    field: "Tools",
    location: "Ethiopia",
    bio: "Contributes ideas and improvements for useful digital tools and community resources.",
    skills: ["Open Source", "Research", "Spreadsheets", "Collaboration"],
  },
];

const filterOptions: Array<"All" | Field> = [
  "All",
  "Technology",
  "Tools",
  "Community",
];

export default function DirectoryUser() {
  const [query, setQuery] = useState("");
  const [activeField, setActiveField] = useState<"All" | Field>("All");

  const filteredProfiles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return profiles.filter((profile) => {
      const matchesField =
        activeField === "All" || profile.field === activeField;

      const searchableText = [
        profile.name,
        profile.role,
        profile.location,
        profile.bio,
        ...profile.skills,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery === "" || searchableText.includes(normalizedQuery);

      return matchesField && matchesQuery;
    });
  }, [query, activeField]);

  const hasActiveFilters = query.trim() !== "" || activeField !== "All";

  const clearFilters = () => {
    setQuery("");
    setActiveField("All");
  };

  return (
    <section className="px-6 pb-12 max-w-6xl mx-auto">
      {/* Search and Filter Controls */}
      <div className="bg-white border border-violet-100 rounded-3xl p-6 shadow-sm mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Search Input */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, skill, role, or location..."
              aria-label="Search directory profiles"
              className="w-full pl-12 pr-12 py-3 rounded-full bg-violet-50 border border-violet-100 text-indigo-950 placeholder:text-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400 hover:text-violet-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Field Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-500">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </div>

            {filterOptions.map((option) => {
              const isActive = activeField === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveField(option)}
                  className={
                    isActive
                      ? "px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-semibold shadow-md shadow-violet-300/30 transition"
                      : "px-5 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-semibold hover:bg-violet-100 transition"
                  }
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count and Clear Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-violet-100">
          <p className="text-sm text-violet-600/75">
            Showing{" "}
            <span className="font-bold text-indigo-950">
              {filteredProfiles.length}
            </span>{" "}
            {filteredProfiles.length === 1 ? "profile" : "profiles"}
            {activeField !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-violet-700">
                  {activeField}
                </span>
              </>
            )}
            {query.trim() !== "" && (
              <>
                {" "}
                matching{" "}
                <span className="font-semibold text-orange-500">
                  “{query.trim()}”
                </span>
              </>
            )}
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-orange-200 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Profile Grid */}
      {filteredProfiles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.name} {...profile} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-violet-100 rounded-3xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-violet-100 flex items-center justify-center">
            <Search className="w-8 h-8 text-violet-500" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-indigo-950 mb-3">
            No profiles found
          </h3>

          <p className="text-violet-700/70 max-w-md mx-auto mb-6">
            Try searching with a different skill, name, field, or location.
            You can also clear the filters to see everyone again.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
          >
            Reset Search
          </button>
        </div>
      )}
    </section>
  );
}