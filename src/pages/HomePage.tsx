import { useNavigate } from "react-router";
import { ArrowRight, Sparkles, Zap, Layers, ShieldCheck, Code, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { Tooltip } from "@/components/Tooltip";
import { Card } from "@/components/Card";

const HomePage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const installCommand = "git clone https://github.com/theravirai/ease-ui.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const featureCards = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#1c69d4]" />,
      title: "GSAP MOTION PHYSICS",
      description:
        "High-performance physics-based entrance and hover micro-animations embedded directly without wrapper overhead.",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#1c69d4]" />,
      title: "TAILWIND CSS V4 & CVA",
      description:
        "Engineered on the next-gen CSS engine with strict TypeScript variant definitions and zero runtime bloat.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#1c69d4]" />,
      title: "RADIX SLOT POLYMORPHISM",
      description:
        "Full asChild composition pattern enables seamless integration with React Router, Next.js, and custom wrappers.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1c69d4]" />,
      title: "TYPESCRIPT STRICT MODE",
      description:
        "Automated .d.ts declaration generation and zero HTML attribute collisions for rock-solid developer experience.",
    },
  ];

  const quickComponents = [
    { name: "BUTTON", route: "/components/button", count: "8 Variants • GSAP Physics" },
    { name: "CARD", route: "/components/card", count: "3D Tilt • Interactive" },
    { name: "MODAL", route: "/components/modal", count: "Animated Dialog • Blur" },
    { name: "INPUT", route: "/components/input", count: "Validation • Floating & Icons" },
    { name: "NAVBAR", route: "/components/navbar", count: "Responsive • Slot Header" },
    { name: "TOOLTIP", route: "/components/tooltip", count: "4 Placements • Spring Reveal" },
    { name: "BADGE", route: "/components/badge", count: "6 Semantic Variants" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 pt-6 pb-2">
        {/* Brand Tag Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-none bg-gray-100 dark:bg-neutral-900/90 border border-gray-200 dark:border-neutral-800 shadow-xl transition-colors">
          <div className="w-1.5 h-3.5 m-stripe-vertical" />
          <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-gray-700 dark:text-neutral-300 font-mono">
            EASE /// M MOTORSPORT MOTION SYSTEM
          </span>
        </div>

        {/* Display Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-gray-900 dark:text-white leading-tight">
            ENGINEERED FOR SPEED. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400">
              CRAFTED FOR PRECISION.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-neutral-400 font-light leading-relaxed">
            A production-ready React component library combining high-performance
            GSAP motion physics, Tailwind CSS v4 styling, and Radix UI composition primitives.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            variant="primary"
            hoverAnimation="lift"
            onClick={() => navigate("/components/button")}
            className="rounded-none uppercase tracking-[1.5px] font-bold px-8 py-3.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors flex items-center gap-3 cursor-pointer"
          >
            EXPLORE COMPONENTS <ArrowRight size={16} />
          </Button>

          <Tooltip content="Click to copy repository clone command" placement="bottom">
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 px-6 py-3.5 rounded-none border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-950 hover:bg-gray-100 dark:hover:bg-neutral-900 hover:border-gray-300 dark:hover:border-neutral-700 font-mono text-xs text-gray-800 dark:text-neutral-300 transition-all cursor-pointer shadow-lg"
            >
              <code className="text-[#1c69d4] font-bold">$</code>
              <span>{installCommand}</span>
              {copied ? (
                <Check size={14} className="text-emerald-500 dark:text-emerald-400 ml-2" />
              ) : (
                <Code size={14} className="text-gray-400 dark:text-neutral-500 ml-2" />
              )}
            </button>
          </Tooltip>
        </div>

        {/* Live Interactive Testing Track */}
        <div className="pt-6 max-w-4xl mx-auto">
          <div className="relative rounded-none border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 shadow-2xl overflow-hidden transition-colors">
            {/* Top M-Stripe Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 m-stripe" />

            <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100 dark:border-neutral-900">
              <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-gray-500 dark:text-neutral-400 font-mono">
                INTERACTIVE PERFORMANCE SANDBOX
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-neutral-400">
                LIVE DEMO
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <Button variant="primary" size="sm" hoverAnimation="jiggle" className="rounded-none uppercase tracking-wider text-xs">
                Hover Jiggle
              </Button>
              <Button variant="secondary" size="sm" hoverAnimation="bounce" className="rounded-none uppercase tracking-wider text-xs">
                Hover Bounce
              </Button>
              <Badge variant="success" size="default" className="rounded-none uppercase tracking-wider">
                Active System
              </Badge>
              <Badge variant="warning" size="default" className="rounded-none uppercase tracking-wider">
                Telemetry
              </Badge>
              <Tooltip content="Engineered with GSAP spring physics" placement="top">
                <Button variant="outline" size="sm" className="rounded-none uppercase tracking-wider text-xs border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-900">
                  Hover for Tooltip
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars Grid */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-8 bg-[#0066b1]" />
            <div className="h-0.5 w-8 bg-[#1c69d4]" />
            <div className="h-0.5 w-8 bg-[#e22718]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[1.5px] text-gray-900 dark:text-white">
            MOTORSPORT ENGINEERING ARCHITECTURE
          </h2>
          <p className="text-gray-500 dark:text-neutral-400 max-w-xl mx-auto text-sm font-light">
            Crafted for speed, strict typing, and seamless polymorphic composition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((feat, idx) => (
            <Card
              key={idx}
              variant="outline"
              size="md"
              hoverAnimation="lift"
              className="flex flex-col justify-between border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 rounded-none hover:border-gray-400 dark:hover:border-neutral-600 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-none inline-block">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-sm tracking-[1.5px] uppercase text-gray-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-neutral-400 leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Component Catalog Grid */}
      <section className="space-y-8 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-neutral-900">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-[1.5px] text-gray-900 dark:text-white">
              COMPONENT CATALOG
            </h2>
            <p className="text-xs text-gray-500 dark:text-neutral-400 uppercase tracking-wider font-mono mt-1">
              7 Production-Ready Building Blocks
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/components/button")}
            className="rounded-none uppercase tracking-[1.5px] text-xs border-gray-300 dark:border-neutral-800 text-gray-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-900"
          >
            VIEW FULL LIBRARY
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickComponents.map((comp) => (
            <div
              key={comp.name}
              onClick={() => navigate(comp.route)}
              className="group p-5 rounded-none border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:bg-gray-50 dark:hover:bg-neutral-900/80 hover:border-gray-400 dark:hover:border-white/50 cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs uppercase tracking-[1.5px] text-gray-900 dark:text-white group-hover:text-[#1c69d4] transition-colors">
                  {comp.name}
                </h4>
                <ArrowRight
                  size={14}
                  className="text-gray-400 dark:text-neutral-500 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </div>
              <p className="text-[11px] text-gray-400 dark:text-neutral-500 mt-2 font-mono">{comp.count}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
