import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const lightNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

<Navbar variant="light" size="default">
  <h1 className="text-lg font-bold">Brand</h1>
  <div className="flex gap-6">
    <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
    <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
    <a href="#" className="hover:text-indigo-600 transition-colors">Docs</a>
  </div>
  <Button size="sm" variant="primary">Sign Up</Button>
</Navbar>`;

  const darkNavbarCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

<Navbar variant="dark" size="default">
  <h1 className="text-lg font-bold">DarkNav</h1>
  <div className="flex gap-6 text-gray-300">
    <a href="#" className="hover:text-white transition-colors">Dashboard</a>
    <a href="#" className="hover:text-white transition-colors">Analytics</a>
  </div>
  <Button size="sm" variant="secondary">Launch</Button>
</Navbar>`;

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "primary" | "glass"',
      default: '"light"',
      description: "Visual style variant and backdrop styling of the navbar",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Height presets (sm: h-12, default: h-16, lg: h-20, xl: h-24)",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "GSAP entrance animation when navbar mounts",
    },
    {
      prop: "hoverAnimation",
      type: '"none" | "jiggle" | "scale" | "bounce"',
      default: '"none"',
      description: "Optional GSAP interaction on hover",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Render as custom slot element via Radix Slot",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "Default Links",
      description: "Custom navbar content (brand, navigation links, actions)",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-gray-600 text-lg">
          A responsive, animated navigation header with polymorphic slot support
          and custom layout composition.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Light Variant (Default)</h3>
          <ComponentDemo code={lightNavbarCode}>
            <div className="w-full">
              <Navbar variant="light" size="default">
                <h1 className="text-lg font-bold">Brand</h1>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
                  <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
                  <a href="#" className="hover:text-indigo-600 transition-colors">Docs</a>
                </div>
                <Button size="sm" variant="primary">Sign Up</Button>
              </Navbar>
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium">Dark Variant</h3>
          <ComponentDemo code={darkNavbarCode}>
            <div className="w-full">
              <Navbar variant="dark" size="default">
                <h1 className="text-lg font-bold">DarkNav</h1>
                <div className="flex gap-6 text-gray-300">
                  <a href="#" className="hover:text-white transition-colors">Dashboard</a>
                  <a href="#" className="hover:text-white transition-colors">Analytics</a>
                </div>
                <Button size="sm" variant="secondary">Launch</Button>
              </Navbar>
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
