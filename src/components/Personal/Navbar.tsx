import { useState, useRef, useEffect } from "react";
import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, ArrowRight, X, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const allComponents = [
  { name: "Button", slug: "button", desc: "Interactive button with GSAP animations" },
  { name: "Card", slug: "card", desc: "Animated container with 3D tilt & ratios" },
  { name: "Modal", slug: "modal", desc: "Animated dialog overlay with backdrop" },
  { name: "Input", slug: "input", desc: "Form inputs with validation tones & icons" },
  { name: "Navbar", slug: "navbar", desc: "Responsive navigation header" },
  { name: "Tooltip", slug: "tooltip", desc: "Contextual hover popover with arrows" },
  { name: "Badge", slug: "badge", desc: "Status indicators and tag labels" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  const filteredComponents = searchQuery.trim()
    ? allComponents.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectComponent = (slug: string) => {
    navigate(`/components/${slug}`);
    setSearchQuery("");
    setSearchOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="h-16 w-full flex items-center justify-between px-6 md:px-8 border-b border-gray-200 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="flex items-center gap-8">
        <h1
          onClick={() => navigate("/")}
          className="font-extrabold text-2xl tracking-tight text-gray-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Ease<span className="text-indigo-600 dark:text-indigo-400">UI</span>
        </h1>

        {/* Search Bar */}
        <div ref={searchRef} className="relative hidden sm:block w-72">
          <div className="flex items-center bg-gray-50 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-gray-200 dark:border-slate-700 shadow-2xs focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-900/30 transition-all">
            <Search size={16} className="text-gray-400 dark:text-gray-500 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              placeholder="Search components..."
              className="ml-2 w-full bg-transparent outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {searchOpen && filteredComponents.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 animate-fadeIn">
              <div className="p-1.5">
                {filteredComponents.map((comp) => (
                  <div
                    key={comp.slug}
                    onClick={() => handleSelectComponent(comp.slug)}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-700/60 cursor-pointer group transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {comp.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                        {comp.desc}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <li
          onClick={() => navigate("/components/button")}
          className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Components
        </li>
        <li
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Overview
        </li>
        <li>
          <a
            href="https://github.com/theravirai/ease-ui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
        </li>
        <li
          className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          onClick={() => dispatch(toggleTheme())}
          aria-label="Toggle theme"
        >
          {mode === "dark" ? (
            <Sun size={18} className="text-amber-400" />
          ) : (
            <Moon size={18} className="text-gray-600" />
          )}
        </li>
      </ul>

      {/* Mobile Hamburger Toggle */}
      <button
        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-fadeIn">
          <ul className="flex flex-col gap-3 font-medium text-gray-700 dark:text-gray-200">
            <li
              onClick={() => {
                navigate("/components/button");
                setMobileMenuOpen(false);
              }}
              className="cursor-pointer py-2 hover:text-indigo-600"
            >
              Components
            </li>
            <li
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="cursor-pointer py-2 hover:text-indigo-600"
            >
              Overview
            </li>
          </ul>
          <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm text-gray-500">Theme</span>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800"
            >
              {mode === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
