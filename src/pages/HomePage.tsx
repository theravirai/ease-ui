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
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: "GSAP Motion Engine",
      description:
        "Smooth physics-based micro-interactions and entrance animations engineered right into every component.",
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "Tailwind CSS v4",
      description:
        "Built with the next-generation Tailwind CSS engine and class-variance-authority for strict variant typing.",
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      title: "Polymorphic Slots",
      description:
        "Radix UI asChild primitives enable painless composition with React Router, Next.js, and custom elements.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "TypeScript Strict Mode",
      description:
        "Complete type safety with automated declaration generation and zero HTML attribute collisions.",
    },
  ];

  const quickComponents = [
    { name: "Button", route: "/components/button", count: "8 Variants" },
    { name: "Card", route: "/components/card", count: "Interactive" },
    { name: "Modal", route: "/components/modal", count: "Animated Dialog" },
    { name: "Input", route: "/components/input", count: "Floating & Icons" },
    { name: "Navbar", route: "/components/navbar", count: "Responsive" },
    { name: "Tooltip", route: "/components/tooltip", count: "4 Placements" },
    { name: "Badge", route: "/components/badge", count: "6 Variants" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-8 pb-4">
        <div className="inline-flex items-center gap-2">
          <Badge variant="secondary" size="lg">
            ✨ Ease UI v1.0 • Phase 1 Core Library
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Modern, Accessible UI <br />
          <span className="text-indigo-600">Powered by GSAP Motion</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
          A production-ready React component library engineered with interactive
          physics, Tailwind CSS v4 styling, and Radix UI composition primitives.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            variant="primary"
            hoverAnimation="lift"
            onClick={() => navigate("/components/button")}
            className="flex items-center gap-2"
          >
            Explore Components <ArrowRight size={18} />
          </Button>

          <Tooltip content="Click to copy clone command" placement="bottom">
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 font-mono text-sm text-gray-800 transition shadow-xs"
            >
              <code>{installCommand}</code>
              {copied ? (
                <Check size={16} className="text-emerald-600" />
              ) : (
                <Code size={16} className="text-gray-500" />
              )}
            </button>
          </Tooltip>
        </div>

        {/* Live Interactive Preview Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50/50 to-white shadow-xs max-w-3xl mx-auto">
          <Button variant="primary" size="sm" hoverAnimation="jiggle">
            Hover Jiggle
          </Button>
          <Button variant="secondary" size="sm" hoverAnimation="bounce">
            Hover Bounce
          </Button>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Warning</Badge>
          <Tooltip content="Tooltip works seamlessly!" placement="top">
            <Button variant="outline" size="sm">
              Hover for Tooltip
            </Button>
          </Tooltip>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Engineered for Modern Web Applications
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything you need to ship interactive, responsive user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((feat, idx) => (
            <Card
              key={idx}
              variant="light"
              size="md"
              hoverAnimation="lift"
              className="flex flex-col justify-between border border-gray-100 p-6 rounded-xl"
            >
              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 rounded-lg inline-block">
                  {feat.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Component Showcase Grid */}
      <section className="space-y-8 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Component Catalog
            </h2>
            <p className="text-gray-500">
              Interactive polymorphic building blocks ready for your app.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/components/button")}
          >
            View All Components
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {quickComponents.map((comp) => (
            <div
              key={comp.name}
              onClick={() => navigate(comp.route)}
              className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-400 hover:shadow-md cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {comp.name}
                </h4>
                <ArrowRight
                  size={16}
                  className="text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{comp.count}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
