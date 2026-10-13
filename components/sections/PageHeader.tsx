interface PageHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-stone-50 px-6 pb-16 pt-20 text-center sm:pt-24">
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-700 sm:text-sm">
          {eyebrow}
        </p>

        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-950 sm:text-5xl md:text-6xl">
          {title}{" "}
          {highlight && <span className="brand-gradient-text">{highlight}</span>}
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-relaxed text-stone-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}