// lib/software-download.ts

export type DownloadPlatform = "windows" | "macos" | "linux";

export type SoftwareDownload = {
  /** Local public URL ("/downloads/software/app.exe") or a verified https:// URL. */
  url: string;
  /** Button text. Defaults to "Download for <Platform>". */
  label?: string;
  /** Suggested save name. Defaults to the last segment of `url`. */
  fileName?: string;
  platform?: DownloadPlatform;
  /** "1.0.0" or "v1.0.0". Displayed as "v1.0.0". */
  version?: string;
};

/** Must match the category string used in your project data. */
export const SOFTWARE_CATEGORY = "Software";

const PLATFORM_LABELS: Record<DownloadPlatform, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

export type ResolvedDownload = {
  href: string;
  label: string;
  platformLabel?: string;
  versionLabel?: string;
  fileName?: string;
  /** True for same-site URLs, where the `download` attribute is honoured. */
  isLocal: boolean;
};

type DownloadableProject = {
  category?: string;
  download?: SoftwareDownload;
};

function classifyUrl(raw: string): "local" | "external" | null {
  const url = raw.trim();
  if (!url) return null;

  // Local public path: "/downloads/..." (reject protocol-relative "//host" and backslashes).
  if (url.startsWith("/") && !url.startsWith("//") && !url.includes("\\")) {
    return "local";
  }

  // External: https only (rejects javascript:, data:, http:, etc.).
  try {
    return new URL(url).protocol === "https:" ? "external" : null;
  } catch {
    return null;
  }
}

function fileNameFromUrl(url: string): string | undefined {
  const last = url.trim().split(/[?#]/)[0].split("/").filter(Boolean).pop();
  if (!last) return undefined;
  try {
    return decodeURIComponent(last);
  } catch {
    return last;
  }
}

/**
 * Returns display-ready download data, or null when the button must not render:
 * not a Software project, no `download`, or an unusable URL.
 */
export function getProjectDownload(
  project: DownloadableProject,
): ResolvedDownload | null {
  if (project.category !== SOFTWARE_CATEGORY) return null;

  const { download } = project;
  if (!download || typeof download.url !== "string") return null;

  const kind = classifyUrl(download.url);
  if (!kind) return null;

  const platformLabel = download.platform
    ? PLATFORM_LABELS[download.platform]
    : undefined;

  const version = download.version?.trim();

  return {
    href: download.url.trim(),
    label:
      download.label?.trim() ||
      (platformLabel ? `Download for ${platformLabel}` : "Download"),
    platformLabel,
    versionLabel: version ? `v${version.replace(/^v/i, "")}` : undefined,
    fileName: download.fileName?.trim() || fileNameFromUrl(download.url),
    isLocal: kind === "local",
  };
}

export function hasProjectDownload(project: DownloadableProject): boolean {
  return getProjectDownload(project) !== null;
}