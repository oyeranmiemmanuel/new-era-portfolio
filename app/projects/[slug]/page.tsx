import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ProjectActions,
  ProjectThumbnail,
  StatusBadge,
} from "@/components/ProjectCard";
import { getProjectBySlug, getProjects } from "@/data/projects";
import { whatsappLink } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      ...(project.image ? { images: [{ url: project.image }] } : {}),
    },
  };
}

function BulletSection({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="rounded-2xl border border-purple-500/20 p-8">
      <h2 className="mb-4 text-xl font-bold text-purple-300">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-gray-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { caseStudy } = project;
  const paragraphs = project.description?.split("\n\n") ?? [];

  return (
    <>
      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <Navbar />

        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="mb-8 inline-block text-sm text-purple-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
          >
            ← All projects
          </Link>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span className="text-sm text-purple-400">{project.category}</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.name}</h1>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300">
              {project.summary}
            </p>

            <ProjectActions project={project} showDetails={false} />
          </header>

          <div className="mb-12 overflow-hidden rounded-3xl border border-purple-500/20">
            <ProjectThumbnail project={project} priority />
          </div>

          <div className="space-y-8">
            {project.problem && (
              <section className="rounded-2xl border border-purple-500/20 p-8">
                <h2 className="mb-4 text-xl font-bold text-purple-300">
                  The problem it solves
                </h2>
                <p className="leading-relaxed text-gray-300">{project.problem}</p>
              </section>
            )}

            {paragraphs.length > 0 && (
              <section className="rounded-2xl border border-purple-500/20 p-8">
                <h2 className="mb-4 text-xl font-bold text-purple-300">
                  About this project
                </h2>
                <div className="space-y-4 leading-relaxed text-gray-300">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {project.technologies.length > 0 && (
              <section className="rounded-2xl border border-purple-500/20 p-8">
                <h2 className="mb-4 text-xl font-bold text-purple-300">
                  Technologies used
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {caseStudy?.role && (
              <section className="rounded-2xl border border-purple-500/20 p-8">
                <h2 className="mb-4 text-xl font-bold text-purple-300">My role</h2>
                <p className="leading-relaxed text-gray-300">{caseStudy.role}</p>
              </section>
            )}

            <BulletSection title="Key features" items={caseStudy?.highlights} />
            <BulletSection title="Challenges" items={caseStudy?.challenges} />
            <BulletSection title="Results" items={caseStudy?.results} />
          </div>

          <div className="mt-16 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold">Need something like this?</h2>
            <p className="mb-6 text-gray-300">
              Tell me what you want to build and I&apos;ll get back to you.
            </p>
            <a
              href={whatsappLink(
                `Hello, I saw the ${project.name} project and want to discuss a similar one`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-purple-500 px-8 py-4 font-bold text-white transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              Discuss a Project
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
