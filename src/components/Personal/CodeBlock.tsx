import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-none border border-neutral-800 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between bg-neutral-900 px-5 py-2.5 border-b border-neutral-800">
        <span className="text-[11px] font-extrabold font-mono uppercase tracking-[2px] text-neutral-400">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-300 hover:text-white rounded-none transition-colors cursor-pointer"
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          <span>{copied ? "COPIED" : "COPY"}</span>
        </button>
      </div>
      <pre className="bg-neutral-950 p-5 overflow-x-auto">
        <code className="text-xs font-mono text-neutral-200 leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
