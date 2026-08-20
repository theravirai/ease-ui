import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppRouter from "./router/AppRouter";

function App() {
  const { mode } = useSelector(
    (state: { theme: { mode: "light" | "dark" } }) => state.theme
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-200">
      <AppRouter />
    </div>
  );
}

export default App;
