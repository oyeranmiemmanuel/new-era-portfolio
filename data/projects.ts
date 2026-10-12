// =====================================================================
//  PROJECT DATA — the only file you edit to add a project.
//
//  HOW TO ADD A PROJECT
//  1. Put a screenshot in  public/images/Projects/  (use a filename with
//     no spaces, e.g. my-shop.jpg).
//  2. Copy the TEMPLATE below into the `projects` array and fill it in
//     with REAL details only.
//  3. Delete any optional line you don't have (githubUrl, liveUrl, image,
//     problem, caseStudy...). Buttons and sections with no data are
//     hidden automatically — never put a placeholder URL.
//  4. Save. The card, filter, project page and home-page section update
//     automatically.
//
//  TEMPLATE (copy everything between the lines, remove the // marks):
//
//    {
//      slug: "my-project",                 // lowercase-with-dashes, unique, used in the URL
//      name: "My Project",
//      summary: "One or two sentences on what it does.",
//      category: "Website",                // Website | Web App | AI / Automation | Software | Other
//      technologies: ["Next.js", "TypeScript"],
//      status: "live",                     // live | completed | in-progress | prototype
//      featured: true,                     // optional: shown on the home page
//      image: "/images/Projects/my-project.jpg",
//      imageAlt: "Screenshot of the My Project home page",
//      liveUrl: "https://example.com",     // required when status is "live"
//      githubUrl: "https://github.com/you/repo",
//      problem: "The problem it solves, in your own words.",
//      description: "Longer description.\n\nA blank line starts a new paragraph.",
//      caseStudy: {
//        role: "What you personally did.",
//        highlights: ["A real feature"],
//        challenges: ["A real challenge you solved"],
//        results: ["Only real, verifiable outcomes"],
//      },
//    },
//
//  Status meanings:
//    live         = deployed and reachable (needs liveUrl)
//    completed    = finished but not publicly deployed
//    in-progress  = still being built
//    prototype    = early version / proof of concept
// =====================================================================

export type ProjectStatus = "live" | "completed" | "in-progress" | "prototype";

export type ProjectCategory =
  | "Website"
  | "Web App"
  | "AI / Automation"
  | "Software"
  | "Other";

export interface ProjectCaseStudy {
  role?: string;
  highlights?: string[];
  challenges?: string[];
  results?: string[];
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  description?: string;
  category: ProjectCategory;
  technologies: string[];
  status: ProjectStatus;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
  problem?: string;
  caseStudy?: ProjectCaseStudy;
}

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  completed: "Completed",
  "in-progress": "In progress",
  prototype: "Prototype",
};

// ---------------------------------------------------------------------
//  YOUR PROJECTS — add real entries here (newest first is a good habit).
// ---------------------------------------------------------------------
const projects: Project[] = [
{
  slug: "pocket-market",
  name: "Pocket Market",
  summary:
    "A Django-powered e-commerce marketplace designed to connect buyers with vendors, simplify product discovery, and coordinate local deliveries. Built around a marketplace model with vendor management, order workflows, and plans for integrated payments and dispatch operations.",
  category: "Web App",
  technologies: [
    "Python",
    "Django",
    "HTML",
    "CSS",
    "JavaScript",
    "PostgreSQL",
    "Paystack"
  ],
  status: "in-progress",
  featured: true,
  image: "/images/Projects/pocket-market.png",
  imageAlt: "Pocket Market e-commerce marketplace interface",
  githubUrl: "https://github.com/oyeranmiemmanuel/pocket_market.git",
  problem:
    "Small businesses need an accessible way to showcase products online and manage customer orders. Pocket Market aims to bring product discovery, vendor operations, payment workflows, and local dispatch coordination into one marketplace.",
  description:
    "Pocket Market is an e-commerce marketplace project developed with Django and a web-based frontend. It is designed to support local commerce by connecting customers with vendors and organizing the journey from product discovery to order fulfilment.\n\nThe platform's planned capabilities include vendor onboarding, product management, customer and seller dashboards, order status tracking, payment processing, and local dispatch workflows. The architecture is being developed with room for transaction records, wallet operations, and affiliate commissions.\n\nThe project focuses on building a practical foundation for a locally oriented marketplace, with functionality being implemented and refined in stages.",
  caseStudy: {
    role:
      "Full-stack developer responsible for backend development, frontend integration, data modelling, and marketplace workflow design.",
    highlights: [
      "Django-based backend architecture",
      "Product and vendor marketplace workflows",
      "Customer and seller dashboard planning",
      "Order status and local delivery workflow design",
      "Payment and transaction workflow planning"
    ],
    challenges: [
      "Designing marketplace workflows for buyers, vendors, and delivery riders",
      "Planning reliable order and transaction records across multiple user roles",
      "Structuring the application to accommodate future payment, dispatch, and commission features"
    ],
    results: [
      "Established a foundation for a locally focused e-commerce marketplace",
      "Defined core marketplace workflows and a roadmap for additional functionality"
    ]
  }
},


];

// ---------------------------------------------------------------------
//  Safety checks. These run when the site builds or starts, so a typo
//  fails loudly instead of publishing a broken link.
// ---------------------------------------------------------------------
function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function validateProjects(list: Project[]): void {
  const seen = new Set<string>();

  for (const project of list) {
    const label = `Project "${project.name || project.slug}"`;

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
      throw new Error(
        `${label}: slug must be lowercase letters, numbers and dashes only (got "${project.slug}").`
      );
    }
    if (seen.has(project.slug)) {
      throw new Error(`${label}: duplicate slug "${project.slug}".`);
    }
    seen.add(project.slug);

    if (project.liveUrl && !isHttpUrl(project.liveUrl)) {
      throw new Error(`${label}: liveUrl is not a valid http(s) URL.`);
    }
    if (project.githubUrl && !isHttpUrl(project.githubUrl)) {
      throw new Error(`${label}: githubUrl is not a valid http(s) URL.`);
    }
    if (project.status === "live" && !project.liveUrl) {
      throw new Error(
        `${label}: status is "live" but liveUrl is missing. Add the URL or change the status.`
      );
    }
    if (project.image && !project.image.startsWith("/")) {
      throw new Error(
        `${label}: image must be a path inside /public starting with "/" (e.g. "/images/Projects/shop.jpg").`
      );
    }
  }
}

validateProjects(projects);

// Featured projects first, then your original order.
const sortedProjects: Project[] = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

export function getProjects(): Project[] {
  return sortedProjects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return sortedProjects.find((project) => project.slug === slug);
}

/** Featured projects for the home page; falls back to the first few if none are featured. */
export function getHomeProjects(limit = 3): Project[] {
  const featured = sortedProjects.filter((project) => project.featured);
  return (featured.length > 0 ? featured : sortedProjects).slice(0, limit);
}

export const hasProjects: boolean = sortedProjects.length > 0;
