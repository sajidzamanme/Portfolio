import Hero from "../components/Hero";
import ProjectsBar from "../components/ProjectsBar";
import ResumeBar from "../components/ResumeBar";
import ContactBar from "../components/ContactBar";
import SkillsBar from "../components/SkillsBar";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <ProjectsBar />
      <SkillsBar />
      <ResumeBar />
      <ContactBar />
    </div>
  );
};

export default HomePage;
