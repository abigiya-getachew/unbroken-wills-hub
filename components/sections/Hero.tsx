export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
     
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fb923c]/15 blur-3xl"></div>
      
      <div className="relative z-10">
        <p className="mb-6 font-serif text-lg italic tracking-wide text-[#7c3aed]">
          &quot;Broken wings, unbroken wills.&quot;
        </p>
        <h2 className="mb-8 max-w-4xl font-serif text-6xl font-bold leading-tight text-[#312e81] md:text-7xl">
          Building Tools for{" "}
          <span className="brand-gradient-text">Resilient Communities</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-[#312e81]/75">
          An open-source project by a software engineering student in Addis
          Ababa, focused on practical tools, shared learning, and
          community-centered technology.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="transform rounded-full bg-[#7c3aed] px-8 py-4 font-bold text-[#f5f3ff] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6d28d9] hover:shadow-lg hover:shadow-violet-500/30">
            Join the Community
          </button>
          <button className="rounded-full border border-[#7c3aed]/40 px-8 py-4 font-semibold text-[#7c3aed] transition-all duration-300 hover:border-[#fb923c] hover:bg-[#fb923c]/15">
            Explore Directory
          </button>
        </div>
      </div>
    </section>
  );
}