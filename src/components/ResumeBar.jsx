import resume from "../assets/Sajid-Zaman-Resume.pdf";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ResumeBar = () => {
  return (
    <div className="h-[20rem] w-full bg-black text-white px-5">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                    gap-3 py-8"
      >
        {/* Social Media Links */}
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={() =>
              window.open("https://github.com/sajidzamanme", "_blank")
            }
          >
            <FaGithub className="size-8" />
          </button>
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/afnanzaman/", "_blank")
            }
          >
            <FaLinkedin className="size-8" />
          </button>
          <a href="mailto:sajidzaman.2002.3@gmail.com">
            <MdEmail className="size-9" />
          </a>
        </div>

        <h1 className="text-4xl font-bold md:text-5xl">Know more about me</h1>

        {/* Button to Download Resume */}
        <button
          onClick={() => window.open(resume, "_blank")}
          className="text-lg text-black font-semibold bg-white p-3 mt-1"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeBar;
