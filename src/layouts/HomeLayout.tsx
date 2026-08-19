import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";

type Props = {};

const HomeLayout = ({}: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#1c69d4] selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
