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
    <section className="relative px-6 pt-24 pb-16 text-center overflow-hidden bg-violet-50">
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-violet-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-4">
          {eyebrow}
        </p>

        <h1 className="text-5xl md:text-6xl font-serif font-bold text-indigo-950 mb-6">
          {title}{" "}
          {highlight && <span className="violet-peach-text">{highlight}</span>}
        </h1>

        <p className="text-lg text-violet-700/75 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}