"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Crown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/directory", label: "Directory" },
    { href: "/resources", label: "Resources" },
    { href: "/contribute", label: "Contribute" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-900/10 bg-stone-50/90 px-5 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="group flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-md shadow-emerald-900/15 transition-transform duration-200 group-hover:rotate-[-4deg]">
            <Crown aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="ml-3 whitespace-nowrap font-serif text-xl font-bold tracking-tight text-emerald-950 sm:text-2xl">
            Unbroken Wills
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-emerald-100 text-emerald-900"
                    : "text-stone-600 hover:bg-white hover:text-emerald-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-emerald-100 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? "mobile-navigation" : undefined}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-emerald-900/10 bg-stone-50 px-5 pb-5 pt-2 shadow-lg shadow-stone-900/5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-emerald-100 text-emerald-900"
                      : "text-stone-700 hover:bg-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}