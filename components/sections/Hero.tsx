import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-50 px-6 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
            <Sparkles aria-hidden="true" className="h-4 w-4 text-orange-600" />
            Open source · Addis Ababa
          </p>

          <h2 className="max-w-3xl font-serif text-5xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            Building tools for{" "}
            <span className="brand-gradient-text">resilient communities.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            An open-source project focused on practical tools, shared learning,
            and community-centered technology. Bring what you know; build what
            comes next together.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contribute"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/10 transition-[background-color,box-shadow,transform] duration-200 hover:bg-emerald-800 hover:shadow-xl active:scale-[0.98]"
            >
              Join the community
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/directory"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-emerald-800/20 bg-white/70 px-6 py-3 font-semibold text-emerald-900 transition-[background-color,border-color,transform] duration-200 hover:border-emerald-700/40 hover:bg-emerald-50 active:scale-[0.98]"
            >
              Explore the directory
            </Link>
          </div>

          <p className="mt-7 flex items-center gap-2 text-sm text-stone-500">
            <MapPin aria-hidden="true" className="h-4 w-4 text-orange-700" />
            Built in Addis Ababa, open to everyone
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] border border-emerald-900/10"
          />
          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 p-8 text-white shadow-2xl shadow-emerald-950/20 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-9 -top-12 h-44 w-44 rounded-full border border-white/10"
            />

            <div className="relative">
              <p className="mb-12 font-serif text-lg italic text-orange-200">
                “Broken wings, unbroken wills.”
              </p>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                A community built on
              </p>
              <h3 className="max-w-sm font-serif text-3xl font-semibold leading-snug sm:text-4xl">
                Learning openly. Building with purpose.
              </h3>

              <div className="mt-10 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.07] p-4">
                  <span className="mb-2 block h-1 w-8 rounded-full bg-orange-300" />
                  <p className="text-sm font-medium text-white">Practical tools</p>
                  <p className="mt-1 text-xs leading-relaxed text-emerald-100/70">
                    Useful work, made together.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.07] p-4">
                  <span className="mb-2 block h-1 w-8 rounded-full bg-emerald-300" />
                  <p className="text-sm font-medium text-white">Shared learning</p>
                  <p className="mt-1 text-xs leading-relaxed text-emerald-100/70">
                    Knowledge that keeps growing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
