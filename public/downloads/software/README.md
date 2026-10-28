# Software downloads

Windows installers for portfolio software projects live in this folder.
Files here are served as static assets at `/downloads/software/<file-name>`.

This `README.md` also keeps the folder tracked in Git when it has no installers yet.

## Naming

- Lowercase, hyphen-separated, no spaces: `smart-file-organizer.exe`
- Keep the name stable between releases so links keep working. Put the version in
  the project's `download.version` field, not in the file name (unless you want
  per-version files).
- Match the case exactly. Linux hosts are case-sensitive, so `App.exe` and
  `app.exe` are different files in production.

## Adding a new downloadable app

1. Copy the installer into this folder, for example `pdf-statement-analyzer.exe`.
2. Open `data/projects.ts` and add a `download` object to that project:

```ts
   download: {
     url: "/downloads/software/pdf-statement-analyzer.exe",
     label: "Download for Windows",
     fileName: "pdf-statement-analyzer.exe",
     platform: "windows",
     version: "1.0.0",
   },
```

3. Make sure the project's `category` is `"Software"`. The button only renders for
   that category.
4. Rebuild and redeploy the site.

No component changes are needed.

## Fields

| Field | Required | Notes |
|---|---|---|
| `url` | yes | `/downloads/software/<file>` for local files, or a full `https://` URL |
| `label` | no | Defaults to "Download for <Platform>" |
| `fileName` | no | Suggested save name; defaults to the last part of `url` |
| `platform` | no | `"windows"`, `"macos"` or `"linux"` |
| `version` | no | Shown as `v1.0.0` |

A project with no `download` field, or an invalid `url`, shows no button.

## Deployment notes

- Files in `public/` are included in the build and served from the site root after
  deployment. The button only works once the real file has been added **and** the
  site has been redeployed with it.
- Check your hosting provider's file-size and bandwidth limits before committing a
  large installer. GitHub also limits individual file sizes in a normal commit
  (check its current limits; Git LFS is an option).
- Alternatively, host the installer elsewhere (for example a GitHub Release) and
  set `url` to that verified `https://` link. The `download` attribute is ignored
  for cross-origin links, so the browser may open or download it depending on the
  host.
- Check your `.gitignore` for rules such as `*.exe` that would stop the installer
  being committed.
- Unsigned Windows executables can trigger SmartScreen warnings. Consider code
  signing, and publish a SHA-256 checksum for users who want to verify the file.
- Never commit anything except finished installers meant for the public.