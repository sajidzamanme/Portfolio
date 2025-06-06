import { useEffect, useState } from "react";
import CustomBtn from "./CustomBtn";
import MiniProjectCard from "./MiniProjectCard";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import axios from "axios";

const ProjectsBar = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/projects.json");
      setProjects(response.data.projects);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScrollLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const handleScrollRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="w-full bg-black text-white px-5">
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
          <div className="absolute left-0 h-full z-50 select-none">
            <div
              className="w-[5rem] h-full text-white flex items-center justify-center
                          bg-gradient-to-r from-black/80 to-white/0 group"
            >
              <FaArrowCircleLeft
                size={50}
                className="text-white bg-black rounded-4xl opacity-0 group-hover:opacity-100"
                onClick={handleScrollLeft}
              />
            </div>
          </div>

          {/* Renders Project Cards from a json file (Later from a server) */}
          <div
            id="slider"
            className="w-full h-full flex flex-row items-center overflow-auto
          scroll-smooth gap-8 no-scrollbar"
          >
            {!projects
              ? "Loading"
              : projects.map((proj) => {
                  return <MiniProjectCard key={proj.id} project={proj} />;
                })}
          </div>

          {/* Scroll Right */}
          <div className="absolute right-0 h-full z-50 select-none">
            <div
              className="w-[5rem] h-full text-white flex items-center justify-center
                          bg-gradient-to-r from-white/0 to-black/80 group"
            >
              <FaArrowCircleRight
                size={50}
                className="text-white bg-black rounded-4xl opacity-0 group-hover:opacity-100"
                onClick={handleScrollRight}
              />
            </div>
          </div>
        </div>

        <CustomBtn padding="py-3 px-5">View All Projects</CustomBtn>
      </div>
    </section>
  );
};

export default ProjectsBar;

// Fix scroll amount
