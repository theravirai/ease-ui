<div align="center">

# Ease UI (`ease-ui`)

**A modern, accessible React UI component library engineered with GSAP motion physics, Tailwind CSS v4 styling, and Radix UI primitives.**

<br />

[![React](https://img.shields.io/badge/React-19.x%20%7C%20%3E%3D18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=flat-square&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

<br />

[🌐 Live Showcase](https://ease-ui-web.vercel.app) • [Documentation](https://ease-ui-web.vercel.app/components/button) • [Component Catalog](#component-catalog)

</div>

---

## Overview

**Ease UI** bridges the gap between static design systems and dynamic motion experiences. Every component is built with:

- **GSAP Motion Physics:** Entrance reveals and interactive hover micro-animations integrated directly without third-party wrapper overhead.
- **Tailwind CSS v4 & CVA:** Next-generation CSS engine with zero runtime CSS bloat and strict TypeScript variant safety via `class-variance-authority`.
- **Radix UI Polymorphism:** Full `asChild` composition pattern allows seamless integration with React Router links, Next.js, and custom wrappers.
- **Zero Type Collisions:** Strict type definitions with automated `.d.ts` generation and conflict-free native HTML prop extensions.
- **Accessibility First:** ARIA-compliant, keyboard navigable, and focus-managed components.

---

## Getting Started

### 1. Clone & Install Dependencies
Clone the repository and install dependencies locally:

```bash
git clone https://github.com/theravirai/ease-ui.git
cd ease-ui
npm install
```

### 2. Run the Interactive Showcase
Start the local Vite development server to preview and test components:

```bash
npm run dev
```

### 3. Build the Library
Compile the distributable bundle (`dist/`) and generate TypeScript declarations (`dist/types/`):

```bash
npm run build
```

### Import Styles
Add the compiled stylesheet to the root of your application (e.g., in `main.tsx` or `App.tsx`):

```tsx
import "ease-ui/style.css";
```

---

## Quick Start

```tsx
import React from "react";
import { Button, Card, Tooltip, Badge } from "ease-ui";

export default function App() {
  return (
    <div className="p-8 space-y-6">
      {/* Interactive Button with GSAP physics */}
      <Button variant="primary" hoverAnimation="bounce">
        Interactive Button
      </Button>

      {/* Status Badge */}
      <Badge variant="success" size="default">
        Active
      </Badge>

      {/* Floating Tooltip with directional arrow */}
      <Tooltip content="Helper message" placement="top">
        <Button variant="outline" size="sm">
          Hover me
        </Button>
      </Tooltip>

      {/* Animated Card Container */}
      <Card
        title="GSAP Animated Card"
        description="Engineered with smooth 3D tilt and spring motion"
        variant="light"
        hoverAnimation="float3D"
      />
    </div>
  );
}
```

---

## Component Catalog

The component library is structured for intuitive navigation and composition:

| Order | Component | Description | Key Variants & Features |
| :---: | :--- | :--- | :--- |
| `01` | **[Button](https://ease-ui-web.vercel.app/components/button)** | Polymorphic interactive button | `primary`, `secondary`, `outline`, `destructive`, `ghost`, `dark`, `ok`, `link` |
| `02` | **[Card](https://ease-ui-web.vercel.app/components/card)** | Animated container block | `light`, `dark`, `outline`, aspect ratios, `float3D` / `jiggle` hover |
| `03` | **[Modal](https://ease-ui-web.vercel.app/components/modal)** | Animated dialog overlay | `light`, `dark`, `outline`, backdrop blur, animated mount/unmount |
| `04` | **[Input](https://ease-ui-web.vercel.app/components/input)** | Enhanced form input suite | `Input`, `FloatingLabelInput`, `InputWithIcon`, `PasswordInput`, `NumberInput`, `Textarea` |
| `05` | **[Navbar](https://ease-ui-web.vercel.app/components/navbar)** | Responsive navigation header | `light`, `dark`, `primary`, `glass`, custom children composition |
| `06` | **[Tooltip](https://ease-ui-web.vercel.app/components/tooltip)** | Contextual hover/focus popover | `top`, `bottom`, `left`, `right` placements, customizable delay & themes |
| `07` | **[Badge](https://ease-ui-web.vercel.app/components/badge)** | Status tags & numeric indicators | `default`, `secondary`, `destructive`, `outline`, `success`, `warning` |

---

## GSAP Animation System

Ease UI components accept motion props to trigger physics-based animations:

### Entrance Animations (`animation`)
- `fadeIn` &mdash; Smooth opacity ease
- `scaleIn` &mdash; Elastic scale pop
- `slideUp` &mdash; Directional slide with deceleration
- `bounceIn` &mdash; Spring bounce reveal
- `none` &mdash; Disables entrance animation

### Hover Animations (`hoverAnimation`)
- `jiggle` &mdash; Subtle rotational spring on cursor entry
- `bounce` &mdash; Dynamic vertical bounce
- `scale` &mdash; Smooth scale enlargement
- `lift` &mdash; Elevated shadow + translation
- `float3D` &mdash; 3D perspective tilt
- `wobbleFollow` &mdash; Dynamic cursor follow

```tsx
<Button
  animation="scaleIn"
  hoverAnimation="jiggle"
  variant="primary"
>
  Animated Button
</Button>
```

---

## Development & Showcase

To run the interactive showcase and documentation application locally:

```bash
# 1. Clone the repository
git clone https://github.com/theravirai/ease-ui.git
cd ease-ui

# 2. Install dependencies
npm install

# 3. Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server on `http://localhost:5173` |
| `npm run build` | Compiles the distributable library bundle and generates TypeScript `.d.ts` declarations |
| `npm run preview` | Previews the production build locally |

---

## Repository Structure

```text
ease-ui/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable library components
│   │   ├── Button/         # Button component & variants
│   │   ├── Card/           # Card component & motion hooks
│   │   ├── Modal/          # Modal overlay & backdrop
│   │   ├── Input/          # Standard, FloatingLabel, Icon inputs
│   │   ├── navbar/         # Navigation header component
│   │   ├── Tooltip/        # Directional popover tooltip
│   │   ├── Badge/          # Status tags & indicators
│   │   └── index.ts        # Central library exports
│   ├── libs/
│   │   ├── animations/     # GSAP animation presets
│   │   └── utils.ts        # cn() class merge helper
│   ├── pages/              # Showcase demo pages
│   ├── router/             # React Router 7 route setup
│   ├── index.ts            # Package entry point
│   ├── main.tsx            # Dev application entry
│   └── style.css           # Tailwind CSS imports
├── dist/                   # Bundled library output (ES, UMD, Types)
├── package.json
└── vite.config.ts
```

---

## Contributing

Contributions are welcome. To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-new-feature`
3. Commit your changes: `git commit -m 'feat: add component'`
4. Push to the branch: `git push origin feat/my-new-feature`
5. Open a Pull Request

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
