import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="h-full min-h-dvh w-full flex flex-col items-center">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
