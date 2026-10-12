"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-24 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 font-semibold uppercase tracking-widest text-purple-400">
          Something went wrong
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          This page failed to load
        </h1>

        <p className="mb-8 text-gray-300">
          Please try again. If the problem continues, contact us on WhatsApp.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl bg-purple-500 px-8 py-3 font-semibold text-white transition hover:bg-purple-600"
          >
            Try again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-purple-400 px-8 py-3 font-semibold text-purple-300 transition hover:bg-purple-500/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}