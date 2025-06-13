const AchievementBar = () => {
  return (
    <section className="w-full bg-white text-black px-10 lg:px-5">
      <div
        className="container mx-auto h-full flex flex-col items-center justify-center
                      gap-8 py-8 max-w-3xl"
      >
        <h1 className="text-2xl font-semibold border-b-2 border-black p-1">
          Achievement & Awards
        </h1>

        <div className="w-full max-w-lg flex flex-col items-center gap-6 pb-2">
          <div className="w-full flex flex-col gap-2 border-2 p-3">
            <h1 className="w-fit text-lg font-semibold border-b-2 border-black px-1">
              Scholarships:
            </h1>
            <ul className="list-disc pl-6">
              <li>100% Scholarship for 2 semesters</li>
              <li>50% Scholarship for 2 semesters</li>
              <li>25% Scholarship for 2 semesters</li>
            </ul>
          </div>

          <div className="w-full flex flex-col gap-2 border-2 p-3">
            <h1 className="w-fit text-lg font-semibold border-b-2 border-black px-1">
              Problem Solving:
            </h1>
            <ul className="list-disc pl-6">
              <li><span className="font-medium">CodeForces</span> - Max Rating 1199</li>
              <li>
                <span className="font-medium">Participated in:</span><br />
                UIU IUPC - 2025, AUST IUPC - 2025
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementBar;
