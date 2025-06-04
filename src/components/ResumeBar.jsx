import resume from "../assets/Sajid Zaman Resume.pdf";

const ResumeBar = () => {
  return (
    <div className="h-[18rem] w-full bg-black text-white px-5">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                    gap-3 py-8"
      >
        <h1>social media logos</h1>
        <h1 className="text-4xl font-bold md:text-5xl">Know more About me</h1>
        <a
          href={resume}
          target="__blank"
          className="text-lg text-black font-semibold bg-white p-3"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeBar;
