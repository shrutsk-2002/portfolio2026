# Portfolio site

Static pages exported from Claude Design, stitched together with one shared
password gate over `/case-studies/*`.

## Sitemap

| Page                     | URL                              | Access    |
|---------------------------|-----------------------------------|-----------|
| Home                       | `/`                                | Public    |
| Contact                    | `/contact.html`                    | Public    |
| My Work – Upstox           | `/work/upstox.html`                | Public    |
| My Work – Amazon           | `/work/amazon.html`                | Public    |
| Upstox Case Study 1        | `/case-studies/upstox-1.html`      | 🔒 Password |
| Upstox Case Study 2        | `/case-studies/upstox-2.html`      | 🔒 Password |
| Amazon Case Study 1        | `/case-studies/amazon-1.html`      | 🔒 Password |
| Amazon Case Study 2        | `/case-studies/amazon-2.html`      | 🔒 Password |

## Dropping in your Claude Design exports

Every file under `public/` is currently a placeholder. As each page is ready:

1. Export the page from Claude Design as standalone HTML.
2. Open the exported file and copy everything **inside** `<body>...</body>`
   (you can keep the whole file if you prefer — either works, since these are
   served as plain static HTML).
3. Overwrite the matching placeholder file in `public/` (same filename, same
   folder) — don't rename files, since the nav links and the password gate
   both depend on these exact paths.
4. If your export references its own images/fonts, drop those into
   `public/assets/` and update the paths in the HTML to `/assets/...`.
5. Commit and push — Vercel redeploys automatically.

You do not need to wait for every page to be ready. Replace placeholders one
at a time and redeploy as you go; unfinished pages just keep showing the
placeholder until you swap them in.

## Local development

```bash
npm install
cp .env.example .env.local   # then edit CASE_STUDY_PASSWORD
npm run dev
```

Visit `http://localhost:3000`. Try opening a case study directly — you
should be redirected to the password screen.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo. No build config needed,
   Vercel detects Next.js automatically.
3. Before the first deploy (or right after), go to
   **Project Settings → Environment Variables** and add:
   - `CASE_STUDY_PASSWORD` — the password you'll share with recruiters
   - `CASE_STUDY_SALT` — any random string (just used to strengthen the
     token, doesn't need to be memorable)
4. Deploy. Your public pages are live immediately; anything under
   `/case-studies/` will prompt for the password first.

## Changing the password later

Update `CASE_STUDY_PASSWORD` in Vercel's environment variables and redeploy.
Anyone who already has a valid session cookie will need to log in again the
next time the token check runs against the new password.

## How the password gate works

- `middleware.ts` intercepts every request under `/case-studies/*` and
  checks for a valid auth cookie before letting the request through.
- If there's no valid cookie, it redirects to `/case-studies/login`.
- Submitting the password posts to `/api/case-studies/verify`, which checks
  it against `CASE_STUDY_PASSWORD` and, if correct, sets an httpOnly cookie
  valid for 30 days.
- This is an application-layer gate (good enough for keeping casual visitors
  and search engines out of confidential case studies shared with
  recruiters). It is not vault-grade security — anyone with the password can
  share it further, and there's no rate-limiting on login attempts.
