Repository: faysalahmed.github.io

Purpose
-------
This repository is a lightweight personal static site. It serves a blog under `/blog/` where each subfolder is treated as a category and each `.html` file inside is a post.

Blog post metadata convention
----------------------------
- Posts are plain HTML files (e.g. `/blog/general/hello_world.html`).
- Each post should include these meta tags in its `<head>` (example):
  - `<meta name="title" content="...">`
  - `<meta name="date"  content="YYYY-MM-DD">`
  - `<meta name="excerpt" content="Short summary">`
  - `<meta name="tags" content="tag1, tag2">` (comma-separated)
  - `<meta name="keywords" content="tag1, tag2">` is also accepted as an alias for `tags` (comma- or space-separated)

Dev/server notes
----------------
- A minimal dev server is added via `package.json` using `http-server`; directory listing is relied upon by the client-side loader.
- If directory listings are disabled in production, prefer generating an index file (`/blog/index.json`) or a server-side endpoint.

Guidance for Copilot (instructions for automated edits)
-----------------------------------------------------
- When changing layout or styles, make minimal, focused edits and preserve existing structure.
- When adding scripts that read the blog folder, prefer generating a static index (JSON) at build time rather than parsing HTML in the browser for performance and reliability.
- If asked to add files, place them under project root or appropriate subfolders (`/blog/`, `/assets/`, `.github/`).
- Respect existing CSS variables in `blog_index.html` when updating themes; keep changes small and reversible.
- Run linters or formatters only for files you change; avoid broad repo-wide formatting.

Testing & verification
----------------------
- To test server changes locally:
  ```bash
  npm install
  npm start
  # open http://127.0.0.1:8080/blog_index.html
  ```
- If a feature depends on directory listings, verify the dev server returns HTML listings (default `http-server` does).

If uncertain about a behavioural change (e.g., switching from client-side HTML parsing to an index builder), open a short PR with the minimal implementation and a clear description of trade-offs.

Contact
-------
Make small, incremental changes and ask the repo owner for direction on breaking or large refactors.
