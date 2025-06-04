const NavBar = () => {
  return (
    <nav className="h-[4.5rem] w-full flex items-center justify-center shadow-md select-none">
      <div className="w-full container mx-auto flex items-center justify-between px-5">
        <h1 className="text-3xl font-bold sm:text-4xl">{"<SZ/>"}</h1>

        <ul className="hidden items-center gap-3 text-lg font-medium pt-[3px] min-[30rem]:flex">
          <li className="border-b-3 border-white hover:border-gray-300 ">
            Home
          </li>
          <li className="border-b-3 border-white hover:border-gray-300 ">
            Projects
          </li>
          <li className="border-b-3 border-white hover:border-gray-300 ">
            Resume
          </li>
          <li className="border-b-3 border-white hover:border-gray-300 ">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
