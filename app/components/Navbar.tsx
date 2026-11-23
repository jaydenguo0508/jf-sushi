
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-4 px-5 md:px-12">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="whitespace-nowrap text-3xl font-black tracking-[-0.07em] text-[#171717]"
        >
          JF<span className="text-[#e0000b]">SUSHI</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-10 text-sm font-bold md:flex"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "border-b-[3px] border-red-600 pb-2 text-red-600"
                    : "text-gray-900 transition hover:text-red-600"
                }
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/products"
          className="hidden rounded-full bg-[#e0000b] px-6 py-3 text-sm font-bold text-white transition hover:bg-red-800 md:inline-flex"
        >
          Explore Our Food →
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="jf-mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 5L19 19M19 5L5 19" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6H20M4 12H20M4 18H20" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav
          id="jf-mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white px-5 pb-6 pt-3 shadow-lg md:hidden"
        >
          <div className="flex flex-col">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-gray-100 px-3 py-4 text-base font-bold ${
                    active
                      ? "text-red-600"
                      : "text-gray-900 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-full bg-[#e0000b] px-6 py-4 text-center text-sm font-bold text-white"
            >
              Explore Our Food →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
