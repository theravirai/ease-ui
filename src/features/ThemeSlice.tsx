import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: "light" | "dark";
};

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  }
  return "dark";
};

const initialMode = getInitialTheme();

// Sync DOM immediately
if (typeof document !== "undefined") {
  document.documentElement.setAttribute("data-theme", initialMode);
  document.documentElement.classList.toggle("dark", initialMode === "dark");
}

const initialState: ThemeState = {
  mode: initialMode,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", state.mode);
        document.documentElement.classList.toggle("dark", state.mode === "dark");
      }
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      localStorage.setItem("theme", state.mode);
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", action.payload);
        document.documentElement.classList.toggle("dark", action.payload === "dark");
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
