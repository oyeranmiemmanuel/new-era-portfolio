import Image from "next/image";
import Link from "next/link";
import { statusLabels } from "@/data/projects";
import type { Project, ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-emerald-400/40 bg-emerald-500/15 text-emerald-300",
  completed: "border-purple-400/40 bg-purple-500/15 text-purple-200",
  "in-progress": "border-amber-400/40 bg-amber-500/15 text-amber-200",
  prototype: "border-sky-400/40 bg-sky-500/15 text-sky-200",
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

export function ProjectThumbnail({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-purple-950/30">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.name} screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900/40 to-black"
        >
          <span className="text-6xl font-bold text-purple-400/40">
            {project.name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}

export function ProjectActions({
  project,
  showDetails = true,
}: {
  project: Project;
  showDetails?: boolean;
}) {
  const primary = `inline-block rounded-xl bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-600 ${focusRing}`;
  const secondary = `inline-block rounded-xl border border-purple-400/60 px-5 py-2.5 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/10 ${focusRing}`;

  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.name} (opens in a new tab)`}
          className={primary}
        >
          Live Demo
        </a>
      )}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository for ${project.name} (opens in a new tab)`}
          className={secondary}
        >
          GitHub
        </a>
      )}

      {showDetails && (
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View details for ${project.name}`}
          className={project.liveUrl ? secondary : primary}
        >
          Details
        </Link>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const visibleTech = project.technologies.slice(0, 5);
  const hiddenCount = project.technologies.length - visibleTech.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-900/10 to-black transition hover:-translate-y-1 hover:border-purple-400">
      <div className="relative">
        <ProjectThumbnail project={project} />
        <div className="absolute left-4 top-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-sm text-purple-400">{project.category}</p>
        <h3 className="mb-3 text-xl font-bold">{project.name}</h3>
        <p className="mb-5 leading-relaxed text-gray-300">{project.summary}</p>

        {visibleTech.length > 0 && (
          <ul className="mb-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {visibleTech.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300"
              >
                {tech}
              </li>
            ))}
            {hiddenCount > 0 && (
              <li className="rounded-lg px-2.5 py-1 text-xs text-gray-400">
                +{hiddenCount} more
              </li>
            )}
          </ul>
        )}

        <div className="mt-auto">
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}
