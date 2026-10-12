import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { getProjects } from "@/data/projects";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Websites and software applications built by New Era, with technologies used, live demos and source code where available.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold">
              Our <span className="text-purple-400">Projects</span>
            </h1>

            <p className="mx-auto max-w-2xl text-gray-400">
              Websites and software applications, with the technologies used
              and links to live demos and source code where available.
            </p>
          </div>

          {projects.length > 0 ? (
            <ProjectsExplorer projects={projects} />
          ) : (
            <div className="mx-auto max-w-xl rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black p-10 text-center">
              <h2 className="mb-3 text-2xl font-bold">Projects are being added</h2>
              <p className="mb-6 text-gray-300">
                New work will appear here soon. In the meantime, you can ask
                about a website or software project directly.
              </p>
              <a
                href={whatsappLink("Hello, I want to discuss a website project")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-purple-500 px-8 py-3 font-semibold text-white transition hover:bg-purple-600"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
