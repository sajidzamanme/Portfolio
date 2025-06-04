import ProjectCard from "./ProjectCard";

const ProjectsBar = () => {
  return (
    <div className="w-full h-[22rem] bg-black text-white px-5">
      <div
        className="container mx-auto flex flex-col items-center justify-start
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
      </div>
    </div>
  );
};

export default ProjectsBar;
