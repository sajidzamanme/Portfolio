import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";

const SkillsBar = () => {
  return (
    <section className="w-full px-5 flex items-center md:min-h-[18rem]">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                   text-black gap-8 py-8"
      >
        <h1 className="text-2xl font-semibold border-b-2 border-black px-1 py-1">
          Tech Stack
        </h1>

        {/* Skills Section shown by logos with names */}
        <div className="w-full max-w-4xl flex flex-row flex-wrap items-center justify-center gap-6">
          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <FaReact size={30} className="text-white stroke-[5px]" />
            <h1 className="text-lg text-white">React</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <SiExpress size={30} className="text-white stroke-" />
            <h1 className="text-lg text-white">Express.js</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <FaNodeJs size={30} className="text-white" />
            <h1 className="text-lg text-white">Node.js</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <SiMongodb size={30} className="text-white" />
            <h1 className="text-lg text-white">MongoDB</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <SiTailwindcss size={30} className="text-white" />
            <h1 className="text-lg text-white">Tailwind</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <FaGolang size={30} className="text-white" />
            <h1 className="text-lg text-white">Go</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <IoLogoJavascript size={30} className="text-white" />
            <h1 className="text-lg text-white">JavaScript</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <FaHtml5 size={30} className="text-white" />
            <h1 className="text-lg text-white">HTML</h1>
          </div>

          <div className="bg-black flex items-center gap-2 border p-2 shadow-md">
            <SiCplusplus size={30} className="text-white" />
            <h1 className="text-lg text-white">C/C++</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBar;
