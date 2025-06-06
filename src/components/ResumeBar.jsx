import resume from "../assets/Sajid-Zaman-Resume.pdf";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CustomBtn from "./CustomBtn";

const ResumeBar = () => {
  return (
    <section id="resume" className="h-[20rem] w-full bg-black text-white px-5">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                    gap-3 py-8"
      >
        {/* Social Media Links */}
        <div className="flex flex-row items-center gap-2">
          <a href="https://github.com/sajidzamanme" target="__blank">
            <FaGithub className="size-8" />
          </a>
          <a href="https://www.linkedin.com/in/afnanzaman/" target="__blank">
            <FaLinkedin className="size-8" />
          </a>
          <a href="mailto:sajidzaman.2002.3@gmail.com">
            <MdEmail className="size-9" />
          </a>
        </div>

        <h1 className="text-4xl font-bold md:text-5xl">Know more about me</h1>

        {/* Button to Download Resume */}
        <CustomBtn onClick={() => window.open(resume, "_blank")}>
          Download Resume
        </CustomBtn>
      </div>
    </section>
  );
};

export default ResumeBar;
