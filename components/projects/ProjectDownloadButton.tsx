// components/projects/ProjectDownloadButton.tsx
import {
  getProjectDownload,
  type SoftwareDownload,
} from "@/lib/software-download";

type ProjectDownloadButtonProps = {
  project: {
    name: string;
    category?: string;
    download?: SoftwareDownload;
  };
  className?: string;
};

// ASSUMPTION: Tailwind CSS. Adjust these classes to match your existing
// primary/secondary action buttons if they differ.
const BASE_CLASSES = [
  "group inline-flex min-h-[44px] w-full items-center justify-center gap-3",
  "rounded-xl border border-fuchsia-400/60 bg-purple-600/20 px-5 py-3",
  "text-sm font-semibold text-white",
  "shadow-[0_0_18px_rgba(168,85,247,0.35)]",
  "transition-all duration-200 motion-reduce:transition-none",
  "hover:bg-purple-500/30 hover:shadow-[0_0_28px_rgba(192,132,252,0.55)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  "sm:w-auto",
].join(" ");

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function ProjectDownloadButton({
  project,
  className,
}: ProjectDownloadButtonProps) {
  const download = getProjectDownload(project);
  if (!download) return null;

  const meta = [download.platformLabel, download.versionLabel]
    .filter(Boolean)
    .join(" · ");

  return (
    <a
      href={download.href}
      // `download` is only honoured for same-origin URLs; skip it for external links.
      {...(download.isLocal ? { download: download.fileName ?? true } : {})}
      rel="noopener noreferrer"
      className={[BASE_CLASSES, className].filter(Boolean).join(" ")}
    >
      <DownloadIcon />
      <span className="flex flex-col items-start text-left leading-tight">
        <span>
          {download.label}
          <span className="sr-only"> {project.name}</span>
        </span>
        {meta && (
          <span className="mt-0.5 text-xs font-normal text-purple-200/80">
            {meta}
          </span>
        )}
      </span>
    </a>
  );
}