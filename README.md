# DivFixer - AI Agents & Automation Agency

A modern, high-performance agency website for **DivFixer** — specializing in AI voice agents, intelligent automation, and full-stack development.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Component animations
- **GSAP** - Advanced timeline animations (PillNav)
- **Convex** - Real-time backend (database + functions)
- **React Router v6** - Client-side routing

## Features

### Website (/)
- Animated hero with flipping text and 3D marquee
- **7 services** with AI Voice Agents & AI Agent Automation as featured/primary offerings
- Workflow timeline section
- Previous work showcase (loads dynamically from Convex DB)
- Stats section with animated counters
- Infinite scrolling testimonials
- Booking section with Calendly integration
- Responsive design with mobile hamburger nav

### Dashboard (/dashboard)
- Password-protected admin panel
- **Add projects** - title, description, image, link, display order
- **Edit projects** - update any field inline
- **Delete projects** - remove with confirmation
- **Seed defaults** - one-click to populate initial projects
- Real-time updates via Convex (changes reflect instantly on the live site)

## Services Offered

1. **AI Voice Agents** (Featured) - 24/7 AI-powered voice agents for calls, lead qualification, appointments
2. **AI Agent Automation** (Featured) - Autonomous AI agents for workflow automation
3. Web Development
4. Custom Software
5. Desktop Apps
6. Generative AI
7. Maintenance & Support

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
VITE_CONVEX_URL=https://peaceful-bird-634.convex.cloud
VITE_ADMIN_PASSWORD=your_admin_password
```

Create a `.env.local` file (for Convex CLI):

```env
CONVEX_DEPLOYMENT=prod:peaceful-bird-634
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Push Convex Functions

```bash
npx convex dev --once
```

### Build

```bash
npm run build
```

### Seed Database

1. Go to `/login` and sign in with the admin password
2. Click "Seed Default Projects" to populate the 6 initial projects
3. Or add projects manually via the dashboard

## Convex Schema

**projects** table:

| Field         | Type   | Description              |
|---------------|--------|--------------------------|
| title         | string | Project name             |
| description   | string | Project description      |
| image_url     | string | Image path (e.g. /seekout03.svg) |
| link          | string | Project URL              |
| display_order | number | Display order (ascending)|

## Project Images

Project images are stored in the `public/` folder:

| Project         | File           |
|-----------------|----------------|
| Visume          | seekout03.svg  |
| Yazo Eat        | seekout04.svg  |
| We Go Authentic | seekout05.svg  |
| UNTUCKit        | seekout06.svg  |
| Attainz         | seekout07.svg  |
| Gragafa         | seekout01.png  |

## Project Structure

```
src/
  components/ui/     # UI components (PillNav, sections, effects)
  lib/               # Utilities (auth context, cn helper)
  pages/             # Route pages (Login, Dashboard)
  App.tsx            # Main homepage
  main.tsx           # Entry point with Convex + routing
convex/
  schema.ts          # Database schema
  projects.ts        # CRUD functions (list, add, update, remove, seed)
public/              # Static files (logo, project images)
```

## Routes

| Path        | Description               |
|-------------|---------------------------|
| /           | Main agency website       |
| /login      | Admin password login      |
| /dashboard  | Project management panel  |

## Deployment (Vercel)

1. Connect your GitHub repo to Vercel
2. Set environment variables:
   - `VITE_CONVEX_URL` = `https://peaceful-bird-634.convex.cloud`
   - `VITE_ADMIN_PASSWORD` = your admin password
3. Deploy - the dashboard works on the live Vercel URL too

## Contact

- **Email**: divfixer.com@gmail.com
- **Calendly**: https://calendly.com/div-fixer/30min

## License

All rights reserved. (c) 2026 DivFixer.
