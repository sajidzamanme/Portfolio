// Fix min and max height and width, also of images

import cgpaCalcSS from "../assets/cgpaCalcSS.png";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const MiniProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="w-full min-w-[16rem] h-full flex flex-col items-center justify-center gap-2 border-1
                border-white p-3 py-5 my-2 ring-white/90 hover:ring-2"
      onClick={() => onClick(project)}
    >
      {/* Image Section */}
      <img
        src={cgpaCalcSS}
        alt="CGPA Calculator Project Screenshot"
        className="object-contain w-auto h-[9.5rem]"
      />

      {/* Text & icons */}
      <div className="w-full h-full flex flex-col items-start justify-start gap-1">
        <h1 className="w-full text-xl font-bold">{project.name}</h1>
        <h3 className="w-full text-sm overflow-hidden">
          {project.description}
        </h3>
        <div className="w-full flex items-center gap-1">
          <FaReact size={25} />
          <SiTailwindcss size={25} />
          <FaHtml5 size={25} />
          <IoLogoJavascript size={25} />
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
