import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-24 text-white">
      <Navbar />

      <div className="max-w-xl text-center">
        <p className="mb-4 font-semibold uppercase tracking-widest text-purple-400">
          Error 404
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Page not found</h1>

        <p className="mb-8 text-gray-300">
          The page you are looking for doesn&apos;t exist or may have moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-purple-500 px-8 py-3 font-semibold text-white transition hover:bg-purple-600"
          >
            Back to Home
          </Link>

          <Link
            href="/portfolio"
            className="rounded-xl border border-purple-400 px-8 py-3 font-semibold text-purple-300 transition hover:bg-purple-500/10"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}