import Hero from "../components/Hero";
import ProjectsBar from "../components/ProjectsBar";
import ResumeBar from "../components/ResumeBar";
import ContactBar from "../components/ContactBar";
import SkillsBar from "../components/SkillsBar";
import { useOutletContext } from "react-router";

const HomePage = () => {
  const refs = useOutletContext();
  return (
    <div className="w-full h-full">
      <Hero />
      <ProjectsBar ref={refs.projects} />
      <SkillsBar />
      <ResumeBar ref={refs.resume} />
      <ContactBar ref={refs.contact} />
    </div>
  );
};

export default HomePage;
