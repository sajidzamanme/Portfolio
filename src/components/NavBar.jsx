import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ refs, scrollToLocation }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [targetRef, setTargetRef] = useState(null);

  const handleClick = (addr) => {
    if (location.pathname == "/projects" && addr == "projects") {
      return;
    } else if (location.pathname != "/") {
      setTargetRef(addr);
      navigate("/");
    } else {
      scrollToLocation(addr);
    }
  };

  useEffect(() => {
    if (targetRef) {
      setTimeout(() => {
        scrollToLocation(targetRef);
        setTargetRef(null);
      }, 50);
    }
  }, [location.pathname]);

  return (
    <nav
      ref={refs.navbar}
      className="h-[4.5rem] w-full flex items-center justify-center shadow-sm select-none"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-5">
        {/* Logo Text */}
        <h1 className="text-[2.25rem] font-bold sm:text-[2.5rem]">{"<SZ/>"}</h1>

        {/* Links (shown in devices larger than phones) */}
        <div className="hidden items-center gap-3 text-lg font-medium pt-[3px] min-[30rem]:flex sm:gap-4 md:gap-6 lg:gap-10">
          <button
            onClick={() => handleClick("navbar")}
            className="border-b-2 border-white hover:border-gray-400 "
          >
            Home
          </button>
          <button
            onClick={() => handleClick("projects")}
            className="border-b-2 border-white hover:border-gray-400 "
          >
            Projects
          </button>
          <button
            onClick={() => handleClick("resume")}
            className="border-b-2 border-white hover:border-gray-400 "
          >
            Resume
          </button>
          <button
            onClick={() => handleClick("contact")}
            className="border-b-2 border-white hover:border-gray-400 "
          >
            Contact
          </button>
        </div>

        {/* Menu Button (only shown when in phone) */}
        <div className="flex flex-col gap-2 min-[30rem]:hidden">
          <span className="h-[3px] w-[2rem] bg-black"></span>
          <span className="h-[3px] w-[2rem] bg-black"></span>
          <span className="h-[3px] w-[2rem] bg-black"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
