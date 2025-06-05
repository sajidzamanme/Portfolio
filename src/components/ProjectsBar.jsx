import CustomBtn from "./CustomBtn";
import MiniProjectCard from "./MiniProjectCard";
import { FaArrowCircleRight } from "react-icons/fa";

const ProjectsBar = () => {
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
        <div
          className="relative w-full h-[50%] flex flex-row items-center overflow-auto
          gap-8 p-1 no-scrollbar"
        >
          {/* Render Project Cards from a json file (Later from a server) */}
          <MiniProjectCard />
          <MiniProjectCard />
          <MiniProjectCard />
          <MiniProjectCard />
          <MiniProjectCard />
          <MiniProjectCard />

          {/* Scroll Button */}
          <div className="absolute right-0 h-full z-50">
            <div
              className="w-[4rem] h-full text-white flex items-center
                          bg-gradient-to-r from-white/0  to-black/80 group"
            >
              <FaArrowCircleRight
                size={50}
                className="text-white bg-black rounded-4xl opacity-0 group-hover:opacity-100"
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
