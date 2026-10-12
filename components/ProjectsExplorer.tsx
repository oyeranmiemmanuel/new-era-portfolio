"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("All");

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filters only appear when there is more than one category. */}
      {categories.length > 1 && (
        <div className="mb-12 flex justify-center">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap justify-center gap-3 rounded-2xl border border-purple-500/20 bg-white/5 p-2 backdrop-blur"
          >
            {["All", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-xl px-5 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300 ${
                  active === category
                    ? "bg-purple-500 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
