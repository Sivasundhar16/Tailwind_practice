import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(() => !nav);
  };

  return (
    <div className="text-white flex justify-between h-24 items-center bg-gray-700 px-4 max-w-[1340px] mx-auto  ">
      <h1 className="w-full bg-blue-400 text-3xl font-bold text-[#00df9a]">
        REACT
      </h1>

      <ul className=" hidden md:flex uppercase">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-gray-900 bg-[rgb(3,32,18)] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[40%] h-full ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT</h1>

        <ul className="uppercase pt-4">
          <li className="p-3 border-b border-b-gray-700 bg-blue-300 text-red-500">
            Home
          </li>
          <li className="p-4 border-b border-b-gray-700">Company</li>
          <li className="p-4 border-b border-b-gray-700">Resource</li>
          <li className="p-4 border-b border-b-gray-700">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
