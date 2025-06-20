import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

const MobileMenu = ({ refs, scrollToLocation, setIsMenuOpen }) => {
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
    <>
      <div
        onClick={() => setIsMenuOpen(false)}
        className="z-45 fixed h-full w-full bg-black/40"
      ></div>
      <div className="z-50 fixed top-0 right-0 h-full w-[80%] bg-white">
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-3xl font-semibold gap-3">
            <button onClick={() => handleClick("navbar")}>Home</button>
            <button onClick={() => handleClick("projects")}>Projects</button>
            <button onClick={() => handleClick("resume")}>Resume</button>
            <button onClick={() => handleClick("contact")}>Contact</button>

            <IoMdCloseCircle onClick={() => setIsMenuOpen(false)} size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
