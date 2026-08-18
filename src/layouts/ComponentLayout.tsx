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
    <div className="flex min-h-[calc(100vh-4rem)] text-gray-900">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 p-6 flex flex-col
          border-r border-gray-200 bg-white
          fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)] z-30
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0 overflow-y-auto
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Components
          </h2>
          <button
            className="md:hidden text-gray-500 hover:text-gray-900"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {components.map((item) => {
            const isActive = location.pathname === `/components/${item.slug}`;
            return (
              <li
                key={item.slug}
                onClick={() => {
                  navigate(`/components/${item.slug}`);
                  setSidebarOpen(false);
                }}
                className={`cursor-pointer px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 font-semibold shadow-xs"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-6 md:p-10 overflow-y-auto">
        <button
          className="md:hidden mb-4 flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={18} />
          <span>Menu</span>
        </button>

        <Outlet />
      </main>
    </div>
  );
};

export default ComponentLayout;
