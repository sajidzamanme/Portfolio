import { BiSolidSchool } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";

const EducationBar = () => {
  return (
    <section className="w-full bg-black text-white px-10 lg:px-5">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                    gap-8 py-8 max-w-3xl"
      >
        <h1 className="text-2xl font-semibold border-b-2 border-white px-1 py-1">
          Education
        </h1>

        <div className="w-full max-w-lg flex flex-col items-center gap-6 pb-2">
          <div className="w-full flex items-center gap-2 border-2 p-3">
            <h1 className="w-[5rem] flex items-center justify-center">
              <FaUniversity size={50} />
            </h1>
            <div className="flex-grow flex flex-col">
              <h1 className="text-lg font-semibold">
                BSc. in Computer Science & Engineering
              </h1>
              <h2 className="font-medium">United International University</h2>
              <h2 className="font-medium">CGPA: 3.84 (Running)</h2>
            </div>
          </div>

          <div className="w-full flex items-center gap-2 border-2 p-3">
            <h1 className="w-[5rem] flex items-center justify-center">
              <BiSolidSchool size={50} />
            </h1>
            <div className="flex-grow flex flex-col">
              <h1 className="text-lg font-semibold">HSC</h1>
              <h2 className="font-medium">
                St. Gregory's High School & College
              </h2>
              <h2 className="font-medium">GPA: 5.00 (Science)</h2>
            </div>
          </div>

          <div className="w-full flex items-center gap-2 border-2 p-3">
            <h1 className="w-[5rem] flex items-center justify-center">
              <BiSolidSchool size={50} />
            </h1>
            <div className="flex-grow flex flex-col">
              <h1 className="text-lg font-semibold">SSC</h1>
              <h2 className="font-medium">
                Motijheel Model High School & College
              </h2>
              <h2 className="font-medium">GPA: 5.00 (Science)</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationBar;
