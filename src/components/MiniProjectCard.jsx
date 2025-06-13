import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";

const MiniProjectCard = ({ project }) => {
  const handleClick = () => {
    window.open(project.github);
  };

  return (
    <div
      className="w-full min-w-[20rem] max-w-[20rem] h-[16rem] border-2 border-white flex flex-col gap-2
      text-white rounded-2xl p-6 hover:scale-104"
      onClick={handleClick}
    >
      {/* Text & icons */}
      <h1 className="w-full text-3xl font-semibold">{project.name}</h1>
      <h3 className="w-full text-md overflow-hidden">{project.description}</h3>
      <div className="w-full flex items-center gap-1 mt-1">
        {project.techStack.map((tech, index) => {
          if (tech == "react") return <FaReact key={index} size={28} />;
          if (tech == "vuejs") return <FaVuejs key={index} size={28} />;
          if (tech == "express") return <SiExpress key={index} size={28} />;
          if (tech == "tailwindCss")
            return <SiTailwindcss key={index} size={28} />;
          if (tech == "nodejs") return <FaNodeJs key={index} size={28} />;
          if (tech == "mongodb") return <SiMongodb key={index} size={28} />;
          if (tech == "javaScript")
            return <IoLogoJavascript key={index} size={28} />;
          if (tech == "html") return <FaHtml5 key={index} size={28} />;
          if (tech == "C")
            return (
              <h1 key={index} className="text-xl font-bold">
                C
              </h1>
            );
        })}
      </div>
      <h5 className="text-gray-500 flex-grow flex items-end justify-center">
        Click to know more
      </h5>
    </div>
  );
};

export default MiniProjectCard;

// set height here (needs truclate etc too)
