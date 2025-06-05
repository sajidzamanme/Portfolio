import CustomBtn from "./CustomBtn";
import ProjectCard from "./ProjectCard";

const ProjectsBar = () => {
  return (
    <section id="projects" className="w-full h-[22rem] bg-black flex items-center text-white px-5">
      <div
        className="container mx-auto flex flex-col items-center justify-center
                    gap-8 py-8"
      >
        <h1 className="text-2xl font-semibold border-b-2 border-white px-1 py-1">
          Projects
        </h1>

        {/* Render Project Cards from a json file (Later from a server) */}
        <div className="w-full flex flex-row overflow-auto gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <CustomBtn padding="py-3 px-5">
          View All Projects
        </CustomBtn>
      </div>
    </section>
  );
};

export default ProjectsBar;
