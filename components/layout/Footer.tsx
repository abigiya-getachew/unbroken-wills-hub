import { Copyright } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-900/15 bg-emerald-950 px-6 py-12 text-center">
      <p className="mb-2 font-serif text-xl text-orange-200">Unbroken Wills</p>
      <p className="flex items-center justify-center gap-1 text-sm text-emerald-100/80">
        <Copyright aria-hidden="true" className="h-4 w-4" />
        <span>
          {currentYear} Unbroken Wills. Built with resilience and code in Addis
          Ababa.
        </span>
      </p>
      <p className="mt-4 text-xs text-emerald-100/60">
        Open Source on{" "}
        <a
          href="https://github.com/abigiya-getachew/unbroken-wills-hub"
          className="text-orange-200 underline underline-offset-4 transition-colors hover:text-orange-100"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}