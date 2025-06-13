import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import MobileMenu from "../components/MobileMenu";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const REFS = {
    navbar: navbarRef,
    projects: projectsRef,
    resume: resumeRef,
    contact: contactRef,
  };

  const scrollToLocation = (addr) => {
    const sectionRef = REFS[addr];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="h-full min-h-dvh w-full flex flex-col items-center">
      <NavBar
        ref={navbarRef}
        refs={{
          navbar: navbarRef,
          projects: projectsRef,
          resume: resumeRef,
          contact: contactRef,
        }}
        scrollToLocation={scrollToLocation}
        setIsMenuOpen={setIsMenuOpen}
      />
      {isMenuOpen ? (
        <div className="z-50 fixed top-0 h-full w-full min-[30rem]:hidden">
          <MobileMenu
            ref={navbarRef}
            refs={{
              navbar: navbarRef,
              projects: projectsRef,
              resume: resumeRef,
              contact: contactRef,
            }}
            scrollToLocation={scrollToLocation}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      ) : null}
      <Outlet
        context={{
          navbar: navbarRef,
          projects: projectsRef,
          resume: resumeRef,
          contact: contactRef,
        }}
      />
      <Footer />
    </div>
  );
};

export default MainLayout;
