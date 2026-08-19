import { useState, useRef, useEffect } from "react";
import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, ArrowRight, X, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";

const allComponents = [
  { name: "Button", slug: "button", desc: "Polymorphic interactive button with GSAP physics" },
  { name: "Card", slug: "card", desc: "3D tilt & motorsport-engineered container cards" },
  { name: "Modal", slug: "modal", desc: "Animated dialog overlay with backdrop blur" },
  { name: "Input", slug: "input", desc: "Validation tones, floating labels & icon inputs" },
  { name: "Navbar", slug: "navbar", desc: "Responsive navigation header with custom slots" },
  { name: "Tooltip", slug: "tooltip", desc: "Contextual hover popover with directional arrows" },
  { name: "Badge", slug: "badge", desc: "Machined status tags & indicator badges" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    <header className="sticky top-0 z-40 w-full">
      {/* BMW M Signature Top Tricolor Stripe */}
      <div className="h-1 w-full m-stripe" />

      <nav className="h-16 w-full flex items-center justify-between px-6 md:px-10 bg-black/95 text-white border-b border-neutral-800 backdrop-blur-md transition-colors">
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Engineered Brand Mark */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <span className="font-extrabold text-xl tracking-[1.5px] uppercase text-white group-hover:text-gray-200 transition-colors">
              EASE
            </span>
            <div className="flex items-center tracking-[-2px] font-black text-lg italic select-none">
              <span className="text-[#0066b1]">/</span>
              <span className="text-[#1c69d4]">/</span>
              <span className="text-[#e22718]">/</span>
              <span className="ml-1 text-white font-bold not-italic text-sm tracking-wider">
                M
              </span>
            </div>
            <span className="text-xs px-1.5 py-0.5 rounded-none bg-neutral-900 border border-neutral-700 text-neutral-400 font-mono">
              UI
            </span>
          </div>

          {/* Search Input */}
          <div ref={searchRef} className="relative hidden sm:block w-64 md:w-80">
            <div className="flex items-center bg-neutral-900/90 rounded-none px-3.5 py-2 border border-neutral-800 focus-within:border-white focus-within:ring-1 focus-within:ring-white/20 transition-all">
              <Search size={15} className="text-neutral-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="SEARCH COMPONENTS..."
                className="ml-2.5 w-full bg-transparent outline-none text-xs tracking-wider uppercase text-white placeholder-neutral-500 font-medium font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-neutral-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Search Dropdown Results */}
            {searchOpen && filteredComponents.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-neutral-950 border border-neutral-800 rounded-none shadow-2xl overflow-hidden z-50 animate-fadeIn">
                <div className="p-1 border-t-2 border-[#1c69d4]">
                  {filteredComponents.map((comp) => (
                    <div
                      key={comp.slug}
                      onClick={() => handleSelectComponent(comp.slug)}
                      className="flex items-center justify-between p-3 hover:bg-neutral-900 cursor-pointer group border-b border-neutral-900 last:border-0 transition-colors"
                    >
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[1px] text-white group-hover:text-[#1c69d4] transition-colors">
                          {comp.name}
                        </h4>
                        <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                          {comp.desc}
                        </p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[1.5px] uppercase text-neutral-300">
          <li
            onClick={() => navigate("/components/button")}
            className={`cursor-pointer hover:text-white transition-colors relative py-1 ${
              location.pathname.startsWith("/components")
                ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1c69d4]"
                : ""
            }`}
          >
            Components
          </li>
          <li
            onClick={() => navigate("/")}
            className={`cursor-pointer hover:text-white transition-colors relative py-1 ${
              location.pathname === "/"
                ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1c69d4]"
                : ""
            }`}
          >
            Overview
          </li>
          <li>
            <a
              href="https://github.com/theravirai/ease-ui"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </li>
          <li
            className="cursor-pointer p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <Sun size={15} className="text-[#f4b400]" />
            ) : (
              <Moon size={15} className="text-neutral-300" />
            )}
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden p-2 text-white hover:bg-neutral-900 rounded-none transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl animate-fadeIn">
            <ul className="flex flex-col gap-3 text-xs font-bold tracking-[1.5px] uppercase text-neutral-300">
              <li
                onClick={() => {
                  navigate("/components/button");
                  setMobileMenuOpen(false);
                }}
                className="cursor-pointer py-2 hover:text-white border-b border-neutral-900"
              >
                Components
              </li>
              <li
                onClick={() => {
                  navigate("/");
                  setMobileMenuOpen(false);
                }}
                className="cursor-pointer py-2 hover:text-white border-b border-neutral-900"
              >
                Overview
              </li>
              <li className="py-2 border-b border-neutral-900">
                <a
                  href="https://github.com/theravirai/ease-ui"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                Theme
              </span>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full bg-neutral-900 border border-neutral-800"
              >
                {mode === "dark" ? (
                  <Sun size={15} className="text-[#f4b400]" />
                ) : (
                  <Moon size={15} className="text-neutral-300" />
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
