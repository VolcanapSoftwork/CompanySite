# VOLCANAP SOFTWORK Company Site

Responsive company website for VOLCANAP SOFTWORK, built as a one-page Software House profile with service sections, delivery process, agency reference, and an interactive scope estimator.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS 4
- DaisyUI 5 custom theme
- pnpm
- lucide-react icons

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm dev      # Start local development server
pnpm build    # Create production build
pnpm start    # Start production server after build
pnpm lint     # Type-check with tsc --noEmit
```

## Project Structure

```text
app/
  layout.tsx    # Root layout, metadata, theme attribute
  page.tsx      # One-page website UI and estimator state
  globals.css   # Tailwind/DaisyUI setup, theme, responsive styling
public/
  volcanap-logo.png
  tatip-rtp.png
```

## Notes

- Package manager is pinned with `packageManager: pnpm@10.33.0`.
- DaisyUI theme is configured in `app/globals.css` as `volcanap`.
- Temporary Playwright screenshots and local build artifacts are ignored by git.
