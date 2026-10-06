"use client";

import { useMemo, useState } from "react";
import { Download, ExternalLink, FileText, Search, X } from "lucide-react";
import { resources } from "@/app/data/resources";
import type { ResourceCategory } from "@/app/data/resources";

const categories: Array<"All" | ResourceCategory> = [
  "All",
  "Guides",
  "Templates",
  "Code Snippets",
  "Checklists",
  "Community",
];

export default function ResourcesClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | ResourceCategory>("All");

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All" || resource.category === activeCategory;

      const searchableText = [
        resource.title,
        resource.description,
        resource.category,
        ...(resource.tags ?? []),
        resource.submittedBy ?? "",
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery === "" || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const hasActiveFilters = query.trim() !== "" || activeCategory !== "All";

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("All");
  };

  return (
    <section className="px-6 pb-16 max-w-6xl mx-auto">
      <div className="bg-white border border-violet-100 rounded-3xl p-6 shadow-sm mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search resources by title, tag, or description..."
              className="w-full pl-12 pr-12 py-3 rounded-full bg-violet-50 border border-violet-100 text-indigo-950 placeholder:text-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400 hover:text-violet-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    isActive
                      ? "px-5 py-2 rounded-full bg-violet-600 text-white text-sm font-semibold shadow-md shadow-violet-300/30 transition"
                      : "px-5 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-semibold hover:bg-violet-100 transition"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-violet-100">
          <p className="text-sm text-violet-600/75">
            Showing{" "}
            <span className="font-bold text-indigo-950">
              {filteredResources.length}
            </span>{" "}
            {filteredResources.length === 1 ? "resource" : "resources"}
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filteredResources.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredResources.map((resource) => (
            <article
              key={resource.id}
              className="bg-white border border-violet-100 rounded-3xl p-6 hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-indigo-950 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-violet-600/70">
                    {resource.category}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center shrink-0">
                  {resource.type === "file" ? (
                    <Download className="w-6 h-6 text-violet-600" />
                  ) : resource.type === "link" ? (
                    <ExternalLink className="w-6 h-6 text-violet-600" />
                  ) : (
                    <FileText className="w-6 h-6 text-violet-600" />
                  )}
                </div>
              </div>

              <p className="text-sm text-violet-700/75 leading-relaxed mb-5">
                {resource.description}
              </p>

              {resource.tags && resource.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs border border-violet-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {resource.submittedBy && (
                <p className="text-xs text-violet-500 mb-5">
                  Submitted by {resource.submittedBy}
                </p>
              )}

              {resource.url && (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Resource
                </a>
              )}

              {resource.filePath && (
                <a
                  href={resource.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition"
                >
                  <Download className="w-4 h-4" />
                  Download File
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-violet-100 rounded-3xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-violet-100 flex items-center justify-center">
            <Search className="w-8 h-8 text-violet-500" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-indigo-950 mb-3">
            No resources found
          </h3>

          <p className="text-violet-700/70 max-w-md mx-auto mb-6">
            Try another search term or category. You can also submit a helpful
            resource through GitHub.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}