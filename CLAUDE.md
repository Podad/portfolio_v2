# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.0 portfolio website for a Cloud & DevOps Engineer built with:

- **Next.js App Router** (React 19.2.3)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Canvas API** for background effects

The site features a hacker/terminal aesthetic with animated Matrix-style background effects and a simulated terminal interface.

## Development Commands

```bash
# Start development server (default: http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Application Structure

The application follows Next.js App Router conventions with a single-page layout composed of stacked sections:

1. **Global Components** (rendered once at root):
   - `CustomCursor` - Custom cursor with hover effects (desktop only)
   - `HackerBackground` - Full-screen canvas with Matrix rain animation

2. **Page Sections** (rendered in order on home page):
   - `Terminal` - Hero section with typewriter-style terminal animation
   - `About` - Introduction with statistics grid
   - `Skills` - Technology categories with animated skill lists
   - `Projects` - Project cards grid with tags
   - `Contact` - Contact links and form

### Key Patterns

#### Animation Variants

Components use Framer Motion with **reusable variant objects** defined at the module level:

```typescript
const containerVariants = { hidden: {...}, visible: {...} };
const itemVariants = { hidden: {...}, visible: {...} };
```

Use `initial="hidden" whileInView="visible" variants={...}` pattern for scroll-triggered animations with `viewport={{ once: true }}`.

#### Constants Over Magic Numbers

All magic numbers are extracted to named constants at the top of files:

```typescript
const TYPING_SPEED_MIN = 50;
const ANIMATION_FPS = 30;
```

#### React Best Practices

- Use `useCallback` for event handlers in `useEffect` to maintain stable dependencies
- Array items use stable keys (IDs or meaningful values, never array indices)
- Data arrays defined with `as const` for TypeScript type safety
- Constants defined outside components to prevent recreation on re-renders

#### Terminal Animation System

The `Terminal` component implements a sequential command execution system:

- Commands defined as `Command[]` array with `input`, `output[]`, and optional `delay`
- Character-by-character typing animation using `setTimeout` with random variance
- State machine: typing input → show output → wait delay → next command

### Styling System

**Color Palette** (defined in `globals.css`):

- Background: `#000000` (pure black)
- Foreground: `#ffffff` (white)
- Accent Cyan: `#00d4ff` (primary accent, borders, highlights)
- Accent Green: `#00ff88` (secondary accent, Matrix effect)
- Terminal Green: `#00ff00` (unused currently)

**Custom Cursor**: Hidden on mobile (`@media (min-width: 768px)`), custom cursor components render on desktop.

**Font**: Michroma (Google Font) loaded in `app/layout.tsx` with CSS variable `--font-michroma`.

### Canvas Background System

`HackerBackground` renders a full-screen canvas with:

- Matrix rain effect using Japanese characters + alphanumeric
- Scanline overlay effect
- Random glitch effects
- Performance: ~30 FPS (configurable via `ANIMATION_FPS`)

The canvas resizes on window resize and cleans up intervals on unmount.

## Important Conventions

### File Organization

- Components in `components/[ComponentName]/[ComponentName].tsx`
- Each component is self-contained with its own constants and types
- Barrel exports (`index.ts`) used where needed (e.g., `HackerBackground`)

### Animation Performance

- Use `viewport={{ once: true }}` to prevent re-triggering animations on scroll
- Stagger delays in maps: `delay: index * 0.1`
- Extract variants to constants to avoid inline object recreation

### Contact Information

Current placeholder contact info uses "Quentin Broyer" as the portfolio owner. Update these values in:

- `components/Terminal/Terminal.tsx` (commands output)
- `components/Contact/Contact.tsx` (contactLinks array)

### Type Safety

- Interfaces/types defined inline at component level
- Use `as const` for static data arrays to preserve literal types
- All components are functional with proper TypeScript typing

## Next.js Configuration

Official documentation: <https://nextjs.org/docs/app/guides>

The project uses default Next.js configuration with no custom options currently enabled.
