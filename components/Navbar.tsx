"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { hasProjects } from "@/data/projects";
import { whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  // The Projects link only appears once you have added at least one project.
  ...(hasProjects ? [{ href: "/projects", label: "Projects" }] : []),
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // "/" must match exactly; other links also stay active on sub-pages (e.g. /projects/my-shop).
  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  const linkBase =
    "relative px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300";

  const linkStyle = (path: string) =>
    `${linkBase} ${
      isActive(path) ? "text-purple-400" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-white">
          New <span className="text-purple-400">Era</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkStyle(link.href)}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={whatsappLink("Hello New Era")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 rounded-xl bg-purple-500 text-white font-semibold hover:bg-purple-600 hover:scale-105 transition"
        >
          Get in Touch
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden text-white text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-black border-t border-purple-500/20 px-6 py-6 space-y-5 text-sm"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`block ${
                isActive(link.href)
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-5 py-3 rounded-xl bg-purple-500 text-white font-semibold text-center hover:bg-purple-600 transition"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
