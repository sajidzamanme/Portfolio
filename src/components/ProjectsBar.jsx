import { useEffect, useRef, useState } from "react";
import CustomBtn from "./CustomBtn";
import MiniProjectCard from "./MiniProjectCard";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const scrollAmount = 320;

const ProjectsBar = ({ ref }) => {
  const [projects, setProjects] = useState([]);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const sliderRef = useRef(null);

  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/projects.json");
      setProjects(response.data.projects);
    } catch (error) {
      console.log(error);
    }
  };

  const updateScrollButtons = () => {
    const slider = sliderRef.current;
    setAtStart(slider.scrollLeft === 0);
    setAtEnd(
      Math.ceil(slider.scrollLeft + slider.clientWidth) >= slider.scrollWidth
    );
  };

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= scrollAmount;
  };

  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += scrollAmount;
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    updateScrollButtons();
    slider.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      slider.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [projects]);

  return (
    <section ref={ref} className="w-full bg-black text-white">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                    gap-6 py-8"
      >
        <h1 className="text-2xl font-semibold border-b-2 border-white px-1 py-1">
          Projects
        </h1>

        {/* Scrollable Projects Section */}
        <div className="relative w-full h-full flex items-center">
          {/* Scroll Left */}
          {!atStart && (
            <div className="absolute left-0 h-full z-50 select-none">
              <div
                className="w-[4rem] h-full text-white flex items-center justify-center
                          bg-gradient-to-r from-black/85 to-white/0 to-80% group"
                onClick={handleScrollLeft}
              >
                <IoMdArrowDropleft
                  size={50}
                  className="text-white rounded-4xl opacity-50 group-hover:opacity-100"
                />
              </div>
            </div>
          )}

          {/* Renders Project Cards from a json file (Later from a server) */}
          <div
            ref={sliderRef}
            className="w-full h-full flex flex-row items-center px-7 py-3 overflow-auto
          scroll-smooth gap-8 no-scrollbar"
          >
            {!projects
              ? "Loading"
              : projects.map((proj) => {
                  return <MiniProjectCard key={proj.id} project={proj} />;
                })}
          </div>

          {/* Scroll Right */}
          {!atEnd && (
            <div className="absolute right-0 h-full z-50 select-none">
              <div
                className="w-[4rem] h-full text-white flex items-center justify-center
                          bg-gradient-to-r from-white/0 from-20% to-black/85 group"
                onClick={handleScrollRight}
              >
                <IoMdArrowDropright
                  size={50}
                  className="text-white rounded-4xl opacity-50 group-hover:opacity-100"
                />
              </div>
            </div>
          )}
        </div>

        <CustomBtn padding="py-3 px-5" onClick={() => navigate("/projects")}>
          View All Projects
        </CustomBtn>
      </div>
    </section>
  );
};

export default ProjectsBar;
