# AGENTS.md — Ease UI

## Project Summary

**Ease UI** (`ease-ui`) is a modern, accessible React UI component library engineered with interactive GSAP animations, Tailwind CSS v4 styling, and Radix UI composition primitives.

The repository serves two primary roles:
1. **Distributable Component Library**: Exportable React components bundled via Vite library mode (`dist/easeui.es.js`, `dist/easeui.umd.js`, and TypeScript declarations via `dist/types/`).
2. **Interactive Showcase & Documentation App**: A live interactive preview application (served via Vite on `http://localhost:5173`) powered by React Router 7 and Redux Toolkit.

---

# Scope & Development Phases

### Phase 1: Core Library & Showcase Foundation (Current)
- Core polymorphic UI components (Button, Input, Card, Modal, Navbar, etc.)
- Interactive GSAP animation presets (entrance and hover animations)
- Tailwind CSS v4 styling with `class-variance-authority` (CVA)
- TypeScript strict mode with automated `.d.ts` declaration generation
- Interactive demo showcase pages and route navigation

### Phase 2: Catalog Expansion & Documentation Site
- Advanced components (Accordion, Dropdown, Tooltip, Toast, Drawer, Tabs, Select, Badge, Avatar)
- Full-featured documentation site with live code playgrounds and copyable snippets
- Dark/light mode theme toggle across all showcase pages
- Accessibility audits (ARIA compliance, keyboard navigation, focus management)

### Phase 3: Distribution, CLI & Ecosystem
- NPM package publishing and version management (`ease-ui`)
- Scaffolding CLI tool (`npx ease-ui add <component>`)
- Storybook integration or standalone interactive component docs
- Template starters and community preset animations

---

# Tech Stack

| Layer | Technology | Version / Tooling |
| :--- | :--- | :--- |
| **UI Framework** | React / React DOM | 19.x (supports peer `>=18`) |
| **Language** | TypeScript | 5.8+ (Strict Mode) |
| **Bundler & Dev Server** | Vite | 7.x (Library Mode + App Server) |
| **Styling** | Tailwind CSS | v4 (`@tailwindcss/vite`) |
| **Class Utilities** | `clsx` + `tailwind-merge` | `cn()` helper |
| **Variants** | `class-variance-authority` | `cva` |
| **Composition Primitive** | `@radix-ui/react-slot` | `asChild` polymorphic pattern |
| **Animation Engine** | GSAP | 3.13+ (`@/libs/animations`) |
| **Routing** | React Router | 7.x |
| **State Management** | Redux Toolkit | 2.x |
| **Icons** | `lucide-react` | 0.544+ |

---

# Architecture

```text
Component Consumers / Showcase App
               ↓
    Ease UI Public Package (src/index.ts)
               ↓
    Reusable UI Components (src/components/*)
       ├── Radix UI Primitives (@radix-ui/react-slot)
       ├── Tailwind CSS v4 & CVA (class-variance-authority)
       └── GSAP Animation Engine (src/libs/animations/*)
```

---

# Project Structure

```text
ease-ui/
├── .agents/
│   └── plans/              # Implementation plan design documents
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, SVGs, icons
│   ├── components/         # Core reusable UI library components
│   │   ├── Button/         # Button component folder
│   │   │   ├── Button.tsx  # Component implementation & CVA styles
│   │   │   └── index.ts    # Re-export
│   │   ├── Card/           # Card component
│   │   ├── Input/          # Input & FloatingLabelInput
│   │   ├── Modal/          # Modal overlay component
│   │   ├── navbar/         # Navbar navigation component
│   │   └── index.ts        # Aggregated component exports
│   ├── features/           # Redux Toolkit feature slices
│   ├── layouts/            # Showcase app layout wrappers
│   ├── libs/
│   │   ├── animations/     # Reusable GSAP presets
│   │   │   ├── entranceAnimation.ts
│   │   │   └── hoverAnimation.ts
│   │   └── utils.ts        # cn() class merge helper
│   ├── pages/              # Showcase pages & component demos
│   ├── router/             # React Router route configuration
│   ├── store/              # Redux store setup
│   ├── index.ts            # Public library package entry
│   ├── main.tsx            # App dev entry point
│   ├── App.tsx             # Root showcase application
│   └── style.css           # Global Tailwind CSS imports
├── dist/                   # Built library artifacts (gitignored)
├── tsconfig.json           # Base TypeScript config
├── tsconfig.app.json       # Showcase app TS config
├── tsconfig.lib.json       # Library declaration build config
├── vite.config.ts          # Vite build & library bundle config
└── package.json            # Scripts and dependencies
```

---

# Component Authoring Guidelines

Every reusable component created in `src/components/` must adhere strictly to the following standard patterns:

### 1. Isolated File Structure
```text
src/components/YourComponent/
├── YourComponent.tsx
└── index.ts
```

### 2. Standard Component Template
```tsx
import React, { useEffect, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";

const yourComponentVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-indigo-600 text-white hover:bg-indigo-700",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
      },
      size: {
        sm: "px-3 py-1.5 text-xs rounded-sm",
        default: "px-4 py-2 text-sm rounded-md",
        lg: "px-6 py-3 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface YourComponentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "size">,
    VariantProps<typeof yourComponentVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const YourComponent = React.forwardRef<HTMLDivElement, YourComponentProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation,
      hoverAnimation,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const internalRef = useRef<HTMLDivElement | null>(null);

    // Optional GSAP Entrance Animation
    useEffect(() => {
      const el = internalRef.current;
      if (!el || !animation || animation === "none") return;
      entranceAnimations[animation]?.(el);
    }, [animation]);

    return (
      <Comp
        ref={(node) => {
          internalRef.current = node as HTMLDivElement;
          if (typeof ref === "function") ref(node as HTMLDivElement);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(yourComponentVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

YourComponent.displayName = "YourComponent";

export { YourComponent, yourComponentVariants };
```

### 3. Checklist for Every Component
1. **Polymorphic `asChild`**: Always support the Radix `Slot` pattern so consumers can render custom elements, links, or router components.
2. **Ref Forwarding**: Always use `React.forwardRef` and explicitly assign `displayName`.
3. **Class Merging**: Always use `cn()` from `@/libs/utils` to allow consumer overrides.
4. **CVA Variants**: Define distinct visual `variant` and `size` options with sane defaults.
5. **No Type Collisions**: When extending native HTML attributes, omit colliding props (e.g. `Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "disabled">`).
6. **GSAP Animations**: Support optional GSAP animation triggers via `@/libs/animations`.
7. **Export Chain**:
   - Re-export from `src/components/YourComponent/index.ts`
   - Re-export from `src/components/index.ts`
   - Re-export from `src/index.ts`
8. **Showcase Demo**: Add a demo in `src/pages/` and register the route in `src/router/` to preview live in the browser.

---

# Styling & Design Guidelines

- **Tailwind Utility-First:** Use Tailwind CSS v4 classes; avoid inline styles.
- **Design Aesthetic:** Clean, modern, accessible, professional, with smooth interactive transitions.
- **Color Consistency:** Primary Indigo palette (`indigo-600`/`indigo-700`), slate/gray neutrals, clear semantic colors for error/success/warning.
- **Responsive Layout:** All showcase pages and complex components must adapt smoothly to mobile, tablet, and desktop viewports.

---

# Development & Verification Workflow

Agents must run verification checks before completing tasks:

### Common Commands
| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Start local Vite dev server on `http://localhost:5173/` |
| `npm run build` | Compile library bundle + generate TypeScript `.d.ts` declarations |
| `npm run preview` | Preview production build locally |

### Mandatory Verification Step
Before completing any task involving code changes, **always run**:
```bash
npm run build
```
Ensure that:
- TypeScript compilation (`tsconfig.lib.json`) exits with **0 errors**.
- Vite library bundling (`dist/`) succeeds.

---

# Git & Remote Configuration

- **Origin Remote:** `https://github.com/theravirai/ease-ui.git` (personal repository)
- **Upstream Remote:** `https://github.com/Devendradhote001/Easeui-project.git` (original template source)
- Maintain clean, descriptive conventional commit messages.
- Do not commit generated build artifacts (`dist/`) or local temporary files.

---

# Git Commit Workflow

After every meaningful completed task (a working component, a fixed bug, a new showcase page, an animation preset), suggest a commit message before moving to the next task. Do not wait until the end of a session to bundle everything into one commit.

**CRITICAL RULE:** Always suggest a commit message after fixing a bug or making any ad-hoc modification, even if it is not part of a formal implementation plan. Provide the commit message along with the explanation of the fix.

### Rules for Suggested Commits:
- Conventional commits format: `type: short description` (types: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`, `test`).
- One logical change per commit.
- Prefer small, focused commits over large, accumulated commits.
- After every completed task in an implementation plan, suggest exactly one commit.

Example progression:
```text
feat: add Accordion component with GSAP collapse animation
feat: add Accordion showcase demo page
fix: resolve type collision on FloatingLabelInput size prop
docs: update AGENTS.md with component authoring standards
refactor: extract animation reset handler in Card component
```

---

# Execution Workflow

The implementation tasks defined in an implementation plan are mandatory execution boundaries.

When instructed to implement a plan (for example, "implement `01-accordion-component.md`"):
1. Begin with **Task 1 only**.
2. Implement exactly one task.
3. After completing that task:
   - Run verification (`npm run build`).
   - Stop immediately.
   - Summarize only that task.
   - Suggest one conventional commit message for that task only.
   - Wait for explicit user confirmation.
4. **Do not begin Task N+1 until the user explicitly confirms.**
5. Never implement, verify, summarize, or commit multiple implementation tasks in a single execution unless the user explicitly requests it.

---

# Planning Guidelines & Plan Requirements

Implementation plans are design documents, not implementation documents. Avoid writing lines of code in plan markdown files.

A plan should not contain:
- Full source code
- Complete React components
- Large CSS blocks
- Copy-pasted production implementations

Keep plans concise and focused on architecture and requirements.

### Implementation Plan Structure
When creating a plan, save the design document under `.agents/plans/` using the naming format `<step_number>-<feature_slug>.md` (e.g. `.agents/plans/01-accordion-component.md`).

Every implementation plan must include an **Implementation Tasks** section where each task defines:
- **Goal:** Clear objective of the task.
- **Files to modify / create:** Explicit file paths.
- **Expected outcome:** What will be working and testable upon completion.

---

# AI Assistant Guidelines

When generating code or working in this repository:
- **Build Cleanliness:** Keep the library build (`npm run build`) passing with 0 TypeScript errors at all times.
- **Component Blueprint:** Always follow the forwardRef + Radix Slot (`asChild`) + CVA + `cn()` + GSAP animation pattern.
- **Incremental Steps:** Never generate excessive amounts of code in a single step; build incrementally.
- **Separation of Concerns:** Keep reusable library components pure and isolated from showcase app state.
- **Explain Before Acting:** Briefly explain architectural decisions or plan steps before modifying files.
