import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-none overflow-hidden bg-neutral-950 shadow-xl transition-all">
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800 bg-neutral-900/60">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#1c69d4]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-neutral-400 font-mono">
            PREVIEW
          </span>
        </div>

        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-700 text-neutral-300 rounded-none transition-colors cursor-pointer"
        >
          <Code size={13} />
          <span>{isCodeVisible ? "HIDE CODE" : "VIEW CODE"}</span>
        </button>
      </div>

      <div className="p-8 sm:p-14 flex items-center justify-center min-h-[180px] bg-gradient-to-b from-neutral-950 via-black to-neutral-950 overflow-x-auto">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-neutral-800 bg-neutral-900/40">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
