import Hero from "../components/Hero";
import ProjectsBar from "../components/ProjectsBar";
import ResumeBar from "../components/ResumeBar";
import ContactBar from "../components/ContactBar";
import SkillsBar from "../components/SkillsBar";
import { useOutletContext } from "react-router-dom";
import EducationBar from "../components/EducationBar";
import AchievementBar from "../components/AchievementBar";

const HomePage = () => {
  const refs = useOutletContext();
  return (
    <div className="w-full h-full">
      <Hero />
      <ProjectsBar ref={refs.projects} />
      <SkillsBar />
      <EducationBar />
      <AchievementBar />
      <ResumeBar ref={refs.resume} />
      <ContactBar ref={refs.contact} />
    </div>
  );
};

export default HomePage;
