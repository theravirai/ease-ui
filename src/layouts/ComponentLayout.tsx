import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

type Props = {};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const components = [
    { name: "Button", slug: "button" },
    { name: "Card", slug: "card" },
    { name: "Modal", slug: "modal" },
    { name: "Input", slug: "input" },
    { name: "Navbar", slug: "navbar" },
    { name: "Tooltip", slug: "tooltip" },
    { name: "Badge", slug: "badge" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-4.25rem)] bg-black text-white">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xs z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 flex flex-col
          border-r border-neutral-800 bg-neutral-950/80 backdrop-blur-md
          fixed md:sticky top-[4.25rem] left-0 h-[calc(100vh-4.25rem)] z-30
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0 overflow-y-auto p-6
        `}
      >
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-900">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-3.5 bg-[#1c69d4]" />
            <h2 className="text-[11px] font-extrabold uppercase tracking-[2px] text-neutral-400 font-mono">
              COMPONENTS
            </h2>
          </div>
          <button
            className="md:hidden text-neutral-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <ul className="flex flex-col gap-1.5">
          {components.map((item) => {
            const isActive = location.pathname === `/components/${item.slug}`;
            return (
              <li
                key={item.slug}
                onClick={() => {
                  navigate(`/components/${item.slug}`);
                  setSidebarOpen(false);
                }}
                className={`relative cursor-pointer px-4 py-2.5 rounded-none text-xs uppercase tracking-[1.5px] font-bold transition-all duration-150 select-none ${
                  isActive
                    ? "bg-neutral-900 text-white font-extrabold before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#0066b1] before:via-[#1c69d4] before:to-[#e22718]"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900/60"
                }`}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-6 md:p-12 overflow-y-auto bg-black">
        <button
          className="md:hidden mb-6 flex items-center gap-2 px-3 py-1.5 border border-neutral-800 bg-neutral-900 text-xs uppercase tracking-wider text-neutral-300 hover:text-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={16} />
          <span>Components Menu</span>
        </button>

        <Outlet />
      </main>
    </div>
  );
};

export default ComponentLayout;
