import cgpaCalcSS from "../assets/cgpaCalcSS.png";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";

const MiniProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="min-w-[16rem] max-w-[16rem] h-[20rem] flex flex-col items-center justify-center gap-2 border-1
    border-white p-3 py-5 my-2 ring-white/90 hover:ring-2"
      onClick={() => onClick(project)}
    >
      {/* Image Section */}
      <img
        src={cgpaCalcSS}
        alt="CGPA Calculator Project Screenshot"
        className="w-auto h-[9.5rem] object-contain"
      />

      {/* Text & icons */}
      <div className="w-full h-full flex flex-col items-start justify-start gap-1">
        <h1 className="w-full text-xl font-bold">{project.name}</h1>
        <h3 className="w-full text-sm overflow-hidden">
          {project.description}
        </h3>
        <div className="w-full flex items-center gap-1 mt-1">
          {project.techStack.map((tech, index) => {
            if (tech == "react") return <FaReact key={index} size={25} />;
            if (tech == "vuejs") return <FaVuejs key={index} size={25} />;
            if (tech == "express") return <SiExpress key={index} size={25} />;
            if (tech == "tailwindCss")
              return <SiTailwindcss key={index} size={25} />;
            if (tech == "nodejs") return <FaNodeJs key={index} size={25} />;
            if (tech == "mongodb") return <SiMongodb key={index} size={25} />;
            if (tech == "javaScript")
              return <IoLogoJavascript key={index} size={25} />;
            if (tech == "html") return <FaHtml5 key={index} size={25} />;
            if (tech == "C")
              return (
                <h1 key={index} className="text-xl font-bold">
                  C
                </h1>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
