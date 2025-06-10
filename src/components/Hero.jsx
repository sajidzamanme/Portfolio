import HeroImg from "../assets/HeroImg.svg";
import dotLineBg from "../assets/dotLineBg-1.jpg";

const Hero = () => {
  return (
    <main
      className={`w-full h-[35rem] flex items-center px-5 bg-center bg-contain mt-0.5`}
      style={{ backgroundImage: `url(${dotLineBg})` }}
    >
      <div
        className="container mx-auto flex flex-col items-center justify-start gap-8 py-8
                  lg:flex-row lg:justify-between"
      >
        {/* Text Section */}
        <div className="w-full flex flex-col items-center gap-3 bg-white/75 py-6 lg:max-w-6/10 lg:items-start">
          <h1 className="text-5xl xl:text-7xl font-bold lg:text-6xl">
            I'm{" "}
            <span
              className="bg-gradient-to-r from-[#3494E6] to-[#EC6EAD]
                              bg-clip-text text-transparent"
            >
              Sajid Zaman
            </span>
          </h1>
          <h1 className="text-2xl xl:text-3xl font-medium">
            A full-Stack Developer
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-full flex items-center max-w-lg lg:max-w-4/10 lg:h-full">
          <img
            src={HeroImg}
            alt="Short Bio in Codes"
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
