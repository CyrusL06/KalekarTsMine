import { useState } from "react";
import Logo from "../assets/logo.svg"; // Make sure this path is correct
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./dropDownMenu"; // Ensure this component is correct

const Navbar = () => {
  // useSTate
  const [isDroppedDownVisible, setIsDroppedDownVisible] = useState(false);

  function toggleDropDown() {
    setIsDroppedDownVisible(!isDroppedDownVisible);
  }

  function closeDropDown() {
    setIsDroppedDownVisible(false);
  }

  return ( 
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          {/* Logo */}
          <div className="cursor-pointer">
            <img
              src={Logo} // Make sure this is the right path
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </div>
        </div>
        <div className="cursor-pointer hidden 
        md:flex space-x-10 items-center
      text-slate-300 text-center 
        bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {/* Navbar Names */}
          <div className="hover:text-gray-50">Website Design</div>
          <div className="hover:text-gray-50">Graphic Design</div>
          {/* <div className="hover:text-gray-50">Shopify Design</div> */}
          <div className="hover:text-gray-50">App Design</div>
          {/* <div className="hover:text-gray-50">Pricing</div> */}
        </div>

        {/* Menu on Mobile */}
        <div className="flex md:hidden">
          {isDroppedDownVisible ? (
            <>
              <X
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              />
              {/* Uncomment to use the DropDownMenu */}
              {/* Passes closeDropDown */}
              <DropDownMenu onClose={closeDropDown} />
            </>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
          {/* contact + TS design */}
        <div className=" hidden md:flex  
        inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  ">
            <button className="
            " >Contact</button>
            
        {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button> */}
  

      
            {/* 2nd Imported TS */}
            {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Border Magic
                </span>
            </button> */}
        </div>
      </div>
    </div> 
  );
}

export default Navbar;
