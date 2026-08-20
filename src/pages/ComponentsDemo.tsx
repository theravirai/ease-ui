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
    <div className="border border-gray-200 dark:border-neutral-800 rounded-none overflow-hidden bg-white dark:bg-neutral-950 shadow-xl transition-colors">
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-neutral-800 bg-gray-50/90 dark:bg-neutral-900/60">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#1c69d4]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-gray-600 dark:text-neutral-400 font-mono">
            PREVIEW
          </span>
        </div>

        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-white dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-800 dark:text-neutral-300 hover:text-black dark:hover:text-white border border-gray-200 dark:border-neutral-700 rounded-none transition-colors cursor-pointer"
        >
          <Code size={13} />
          <span>{isCodeVisible ? "HIDE CODE" : "VIEW CODE"}</span>
        </button>
      </div>

      <div className="p-8 sm:p-14 flex items-center justify-center min-h-[180px] bg-gradient-to-b from-gray-50/50 via-white to-gray-50/20 dark:from-neutral-950 dark:via-black dark:to-neutral-950 overflow-x-auto">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-gray-200 dark:border-neutral-800">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
