import cgpaCalcSS from "../assets/cgpaCalcSS.png";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const MiniProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="w-full min-w-[23rem] h-full flex items-center gap-2 border-1
                border-white p-2 my-2 ring-white/90 hover:ring-2"
      onClick={() => onClick(project)}
    >
      {/* Image Section */}
      <img
        src={cgpaCalcSS}
        alt="CGPA Calculator Project Screenshot"
        className="w-1/3 h-[6rem]"
      />

      {/* Text & icons */}
      <div className="w-2/3 h-full flex flex-col items-start justify-start gap-1">
        <h1 className="w-full text-xl font-bold">UIU CGPA Calculator</h1>
        <h3 className="w-full text-sm text-nowrap overflow-hidden">
          CGPA Calculator for UIU Students
        </h3>
        <div className="w-full flex items-center">
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
