"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { profiles } from "@/lib/data/profiles";
import { filterBySearchAndCategory } from "@/lib/utils/filterBySearchAndCategory";
import type { Field } from "@/types/profile";
import ProfileCard from "@/components/ui/cards/ProfileCard";

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
    return filterBySearchAndCategory({
      items: profiles,
      query,
      activeCategory: activeField,
      getCategory: (profile) => profile.field,
      getSearchableText: (profile) =>
        [
          profile.name,
          profile.role,
          profile.location,
          profile.bio,
          ...profile.skills,
        ].join(" "),
    });
  }, [query, activeField]);

  const hasActiveFilters = query.trim() !== "" || activeField !== "All";

  const clearFilters = () => {
    setQuery("");
    setActiveField("All");
  };

  return (
    <section className="px-6 pb-12 max-w-6xl mx-auto">
      <div className="bg-white border border-emerald-100 rounded-3xl p-6 shadow-sm mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, skill, role, or location..."
              aria-label="Search directory profiles"
              className="w-full pl-12 pr-12 py-3 rounded-full bg-emerald-50 border border-emerald-100 text-stone-950 placeholder:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500">
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
                      ? "px-5 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-md shadow-emerald-300/30 transition"
                      : "px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-semibold hover:bg-emerald-100 transition"
                  }
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-emerald-100">
          <p className="text-sm text-emerald-600/75">
            Showing{" "}
            <span className="font-bold text-stone-950">
              {filteredProfiles.length}
            </span>{" "}
            {filteredProfiles.length === 1 ? "profile" : "profiles"}
            {activeField !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-emerald-700">
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

      {filteredProfiles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.name} {...profile} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-emerald-100 rounded-3xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <Search className="w-8 h-8 text-emerald-500" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-stone-950 mb-3">
            No profiles found
          </h3>

          <p className="text-emerald-700/70 max-w-md mx-auto mb-6">
            Try searching with a different skill, name, field, or location.
            You can also clear the filters to see everyone again.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Reset Search
          </button>
        </div>
      )}
    </section>
  );
}