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
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs bg-white">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-gray-50/80">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Preview</span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-white hover:bg-gray-100 border border-gray-200 rounded-md transition-colors"
        >
          <Code size={13} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="p-8 sm:p-12 flex items-center justify-center min-h-[160px] bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">{children}</div>

      {isCodeVisible && (
        <div className="border-t border-gray-200">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
