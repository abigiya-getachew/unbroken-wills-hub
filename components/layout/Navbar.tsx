"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/directory", label: "Directory" },
    { href: "/resources", label: "Resources" },
    { href: "/contribute", label: "Contribute" },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white/70 backdrop-blur-lg border-b border-violet-200/50 sticky top-0 z-50">
      <Link href="/" className="group flex items-center cursor-pointer">
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-violet-800 text-white shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
          <Crown className="w-5 h-5" strokeWidth={2.5} />
        </div>

        <h1 className="ml-3 whitespace-nowrap font-serif text-2xl font-bold brand-gradient-text">
          Unbroken Wills
        </h1>
      </Link>

      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-violet-400">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`py-2 transition-colors duration-300 ${
                isActive
                  ? "underline decoration-2 underline-[#7c3aed] underline-offset-8"
                  : "hover:text-violet-700"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}