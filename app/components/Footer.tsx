import { Copyright } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-200 bg-[#312e81] py-12 text-center">
      <p className="mb-2 font-serif text-xl text-[#fb923c]">Unbroken Wills</p>
      <p className="flex items-center justify-center gap-1 text-sm text-[#f5f3ff]/80">
        <Copyright aria-hidden="true" className="h-4 w-4" />
        <span>{currentYear} Unbroken Wills. Built with resilience and code in Addis Ababa.</span>
      </p>
      <p className="mt-4 text-xs text-[#f5f3ff]/65">
        Open Source on{" "}
        <a href="https://github.com/abigiya-getachew/unbroken-wills-hub" className="text-[#fb923c] underline transition-colors hover:text-[#fdba74]">
          GitHub
        </a>
      </p>
    </footer>
  );
}