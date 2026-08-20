import ComponentDemo from "@/pages/ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import {
  Input,
  PasswordInput,
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
  NumberInput,
  Textarea,
} from "@/components/Input";
import { Search, Mail } from "lucide-react";

const InputPage = () => {
  const standardInputCode = `import { Input } from "@/components/Input";

<Input label="Full Name" placeholder="Enter your full name" size="sm" />
<Input label="Email Address" type="email" placeholder="you@example.com" size="md" tone="default" />
<Input label="Success State" defaultValue="valid_username" size="md" tone="success" hint="Username is available" />
<Input label="Error State" defaultValue="invalid-email" size="md" tone="error" error="Please enter a valid email address" />
<Input label="Disabled" placeholder="Disabled field" disabled size="md" />`;

  const specializedInputCode = `import { 
  AnimatedInput, 
  FloatingLabelInput, 
  InputWithIcon, 
  PasswordInput, 
  NumberInput, 
  Textarea 
} from "@/components/Input";
import { Search, Mail } from "lucide-react";

<AnimatedInput label="Animated Elevation" placeholder="Focus to lift and glow" />
<FloatingLabelInput label="Floating Label" placeholder="" />
<InputWithIcon label="Search Component" icon={<Search />} iconPosition="left" placeholder="Search..." />
<InputWithIcon label="Email with Right Icon" icon={<Mail />} iconPosition="right" placeholder="user@domain.com" />
<PasswordInput label="Secure Password" placeholder="Enter your password" />
<NumberInput label="Quantity / Age" defaultValue={18} min={0} max={100} step={1} />
<Textarea label="Bio / Notes" placeholder="Write your message here..." rows={3} />`;

  const propsData = [
    {
      prop: "label",
      type: "string",
      default: "undefined",
      description: "Accessible text label rendered above the input",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Height and text size preset for the input",
    },
    {
      prop: "tone",
      type: '"default" | "error" | "success"',
      default: '"default"',
      description: "Visual validation tone (border and ring colors)",
    },
    {
      prop: "error",
      type: "string",
      default: "undefined",
      description: "Validation error message displayed below the input",
    },
    {
      prop: "hint",
      type: "string",
      default: "undefined",
      description: "Helper text displayed below the input",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables interaction and applies muted styles",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Input</h1>
        <p className="text-gray-600 dark:text-neutral-400 text-lg">
          A comprehensive suite of form input components featuring validation tones,
          floating labels, interactive icons, password toggles, and stepper controls.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Standard Inputs</h2>
        <ComponentDemo code={standardInputCode}>
          <div className="flex flex-col gap-5 w-full max-w-md">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              size="sm"
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              size="md"
              tone="default"
            />
            <Input
              label="Success State"
              defaultValue="dev_user_01"
              size="md"
              tone="success"
              hint="Username is available"
            />
            <Input
              label="Error State"
              defaultValue="invalid@domain"
              size="md"
              tone="error"
              error="Please enter a valid email address"
            />
            <Input
              label="Disabled Input"
              placeholder="Cannot edit this field"
              disabled
              size="md"
            />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Specialized Input Variants</h2>
        <ComponentDemo code={specializedInputCode}>
          <div className="flex flex-col gap-5 w-full max-w-md">
            <AnimatedInput
              label="Animated Elevation"
              placeholder="Focus to lift and glow"
            />
            <FloatingLabelInput
              label="Floating Label"
              placeholder=""
            />
            <InputWithIcon
              label="Search Component"
              icon={<Search />}
              iconPosition="left"
              placeholder="Search components..."
            />
            <InputWithIcon
              label="Email (Right Icon)"
              icon={<Mail />}
              iconPosition="right"
              placeholder="user@example.com"
            />
            <PasswordInput
              label="Secure Password"
              placeholder="Enter password"
            />
            <NumberInput
              label="Age / Stepper"
              defaultValue={25}
              min={0}
              max={120}
              step={1}
            />
            <Textarea
              label="Notes / Textarea"
              placeholder="Type your notes here..."
              rows={3}
            />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default InputPage;
