import ProjectCard from "./ProjectCard";

const ProjectsBar = () => {
  return (
    <div className="h-[22rem] w-full bg-black px-5">
      <div
        className="container mx-auto flex flex-col items-center justify-start
                    gap-8 py-8 text-white"
      >
        <h1 className="text-2xl font-semibold border-b-2 border-white px-1 py-1">
          Projects
        </h1>

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
