import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";

type Props = {};

const HomeLayout = ({}: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors selection:bg-[#1c69d4] selection:text-white">
      <Navbar />

      <main className="flex-grow bg-white dark:bg-black transition-colors">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
