import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const placementsCode = `import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";

<Tooltip content="Tooltip on Top" placement="top">
  <Button variant="outline" size="sm">Top</Button>
</Tooltip>

<Tooltip content="Tooltip on Bottom" placement="bottom">
  <Button variant="outline" size="sm">Bottom</Button>
</Tooltip>

<Tooltip content="Tooltip on Left" placement="left">
  <Button variant="outline" size="sm">Left</Button>
</Tooltip>

<Tooltip content="Tooltip on Right" placement="right">
  <Button variant="outline" size="sm">Right</Button>
</Tooltip>`;

  const variantsCode = `import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";

<Tooltip content="Dark Tooltip" variant="dark">
  <Button variant="outline" size="sm">Dark</Button>
</Tooltip>

<Tooltip content="Light Tooltip" variant="light">
  <Button variant="outline" size="sm">Light</Button>
</Tooltip>

<Tooltip content="Primary Indigo Tooltip" variant="primary">
  <Button variant="outline" size="sm">Primary</Button>
</Tooltip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "-",
      description: "Content displayed inside the floating tooltip bubble",
    },
    {
      prop: "placement",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Position of the tooltip relative to its trigger child",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary"',
      default: '"dark"',
      description: "Color theme of the tooltip popover",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg"',
      default: '"default"',
      description: "Size preset for padding and font size",
    },
    {
      prop: "delay",
      type: "number",
      default: "100",
      description: "Delay in milliseconds before the tooltip appears on hover/focus",
    },
    {
      prop: "arrow",
      type: "boolean",
      default: "true",
      description: "Whether to display the directional arrow pointing to the trigger",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The interactive trigger element that invokes the tooltip",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-gray-600 text-lg">
          A popup that displays contextual information when users hover over or
          focus on an element, animated with GSAP spring physics.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Placements</h2>
        <ComponentDemo code={placementsCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-6">
            <Tooltip content="Tooltip on Top" placement="top">
              <Button variant="outline" size="sm">
                Top
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Bottom" placement="bottom">
              <Button variant="outline" size="sm">
                Bottom
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Left" placement="left">
              <Button variant="outline" size="sm">
                Left
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on Right" placement="right">
              <Button variant="outline" size="sm">
                Right
              </Button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Themes & Variants</h2>
        <ComponentDemo code={variantsCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-6">
            <Tooltip content="Dark Tooltip" variant="dark">
              <Button variant="outline" size="sm">
                Dark Theme
              </Button>
            </Tooltip>

            <Tooltip content="Light Tooltip" variant="light">
              <Button variant="outline" size="sm">
                Light Theme
              </Button>
            </Tooltip>

            <Tooltip content="Primary Indigo Tooltip" variant="primary">
              <Button variant="outline" size="sm">
                Primary Theme
              </Button>
            </Tooltip>
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

export default TooltipPage;
