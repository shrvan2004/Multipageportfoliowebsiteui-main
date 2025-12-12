
 # Multi-Page Portfolio Website UI

This project is a React + Vite frontend and a minimal Express API for form handling.

# Multi-Page Portfolio Website UI

This project is a React + Vite frontend and a minimal Express API for form handling.

## Prerequisites
- Node.js (16+ recommended)

## Install dependencies

```bash
npm install
```

## Run frontend dev server

```bash
npm run dev
```

## Run backend server (optional)

```bash
npm run server:dev
# or
npm run server
```

## Production build

```bash
npm run build
# then serve the `dist` output with a static server (e.g., `npx serve dist`)
```

## Notes
- Forms in the app POST to `/api/*`. For local development, run the Express server on port 4000 and the Vite dev server will proxy `/api` to it.
- This repo includes placeholder legal pages (Privacy Policy, Terms, Cookie Policy) — replace with your official text before publishing.

## GitHub
To push this repo to GitHub, add a remote and push (example):

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## License
Add your project license here (e.g., MIT).
