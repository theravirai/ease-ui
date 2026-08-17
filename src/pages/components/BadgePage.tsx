import { Badge } from "@/components/Badge";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const BadgePage = () => {
  const variantUsageCode = `import { Badge } from "@/components/Badge";

<Badge variant="default">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>`;

  const sizeUsageCode = `import { Badge } from "@/components/Badge";

<Badge size="sm" variant="default">Small</Badge>
<Badge size="default" variant="default">Default</Badge>
<Badge size="lg" variant="default">Large</Badge>`;

  const propsData = [
    {
      prop: "variant",
      type: '"default" | "secondary" | "destructive" | "outline" | "success" | "warning"',
      default: '"default"',
      description: "Visual style variant of the badge",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg"',
      default: '"default"',
      description: "Size preset for padding and typography",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"none"',
      description: "GSAP entrance animation when badge mounts",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "lift" | "none"',
      default: '"none"',
      description: "GSAP animation triggered on hover",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Render as custom slot element via Radix Slot",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
        <p className="text-gray-600 text-lg">
          Displays a status indicator, tag, or numeric count with interactive
          variants and GSAP animations.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <ComponentDemo code={variantUsageCode}>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <ComponentDemo code={sizeUsageCode}>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm" variant="default">
              Small Badge
            </Badge>
            <Badge size="default" variant="default">
              Default Badge
            </Badge>
            <Badge size="lg" variant="default">
              Large Badge
            </Badge>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default BadgePage;
