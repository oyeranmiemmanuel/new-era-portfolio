"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const linkBase =
    "relative px-3 py-2 text-sm font-medium transition-all duration-200";

  const linkStyle = (path: string) =>
    `${linkBase} ${
      isActive(path)
        ? "text-purple-400"
        : "text-gray-300 hover:text-white"
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

          <Link href="/" className={linkStyle("/")}>
            Home
            {isActive("/") && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500 rounded-full" />
            )}
          </Link>

          <Link href="/portfolio" className={linkStyle("/portfolio")}>
            Portfolio
            {isActive("/portfolio") && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500 rounded-full" />
            )}
          </Link>

          <Link href="/about" className={linkStyle("/about")}>
            About
            {isActive("/about") && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500 rounded-full" />
            )}
          </Link>

          <Link href="/contact" className={linkStyle("/contact")}>
            Contact
            {isActive("/contact") && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500 rounded-full" />
            )}
          </Link>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/2348153626747?text=Hello%20New%20Era"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 rounded-xl bg-purple-500 text-white font-semibold hover:bg-purple-600 hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-purple-500/20 px-6 py-6 space-y-5 text-sm">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white"
          >
            Portfolio
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-white"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/2348153626747"
            target="_blank"
            className="block mt-4 px-5 py-3 rounded-xl bg-purple-500 text-white font-semibold text-center hover:bg-purple-600 transition"
          >
            Hire Me
          </a>

        </div>
      )}
    </nav>
  );
}