interface FilterBySearchAndCategoryOptions<T, Category extends string> {
  items: readonly T[];
  query: string;
  activeCategory: "All" | Category;
  getCategory: (item: T) => Category;
  getSearchableText: (item: T) => string;
}

export function filterBySearchAndCategory<T, Category extends string>({
  items,
  query,
  activeCategory,
  getCategory,
  getSearchableText,
}: FilterBySearchAndCategoryOptions<T, Category>): T[] {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || getCategory(item) === activeCategory;
    const searchableText = getSearchableText(item).toLowerCase();
    const matchesQuery =
      normalizedQuery === "" || searchableText.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}
