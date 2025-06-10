import { useEffect, useState } from "react";
import LargeProjectCard from "../components/LargeProjectCard";
import axios from "axios";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    try {
      const response = await axios.get("/projects.json");
      setProjects(response.data.projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className="w-full h-full flex-grow">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-6 items-center justify-start my-6">
        {!projects
          ? null
          : projects.map((proj) => {
              return <LargeProjectCard key={proj.id} project={proj} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

// implement infinite scrolling
