import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getHomeProjects } from "@/data/projects";

export default function ProjectsSection() {
  const projects = getHomeProjects(3);

  // Nothing to show yet: render nothing instead of an empty block.
  if (projects.length === 0) return null;

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            Projects
          </p>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Websites &amp; Software I&apos;ve Built
          </h2>

          <p className="mx-auto max-w-2xl text-gray-400">
            Real projects with the technologies used and, where available,
            live demos and source code.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-xl border border-purple-400 px-8 py-4 font-semibold text-purple-300 transition hover:bg-purple-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
