 import logo from "../assets/images/Discord-Logo-White.png";
 import Hamburger from "../assets/images/bars-solid-full.svg"
 import { ChevronDownIcon } from '@heroicons/react/24/solid';
 import { useState } from "react"

export default function Header(){

   const [isOpen, setIsOpen ]=useState(false);
   const navLinks =(
      <>
       <a className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded font-[Poppins]" href="#">Download</a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded font-[Poppins]" href="#">Nitro</a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded font-[Poppins]" href="#">Discover</a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded flex font-[Poppins]" href="#">Safety
             <ChevronDownIcon className="w-4 h-7 ml-2 text-gray-500 font-black" />
          </a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded flex font-[Poppins]" href="#">Quests
             <ChevronDownIcon className="w-4 h-7 ml-2 text-gray-500 font-black" />
          </a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded flex font-[Poppins]" href="#">Support
             <ChevronDownIcon className="w-4 h-7 ml-2 text-gray-500 font-black" />
          </a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded flex font-[Poppins]" href="#">Blog
             <ChevronDownIcon className="w-4 h-7 ml-2 text-gray-500 font-black" />
          </a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded flex font-[Poppins]" href="#">Developers
            <ChevronDownIcon className="w-4 h-7 ml-2 text-gray-500 font-black" />
          </a>
          <a  className="font-black text-white hover:bg-[#404EED] hover:p-2 hover:rounded font-[Poppins]" href="#">Careers</a>
          </>
   )

   function handleClick(){
      setIsOpen(prev=>!prev);
   }

    return (
       <header className=" flex justify-between relative p-9 ">
          <img className="w-30 h-6 font-black text-white " src= {logo} alt="Discord logo" />
          <nav className="flex md:space-x-10 hidden md:block md:flex">{navLinks}</nav>
          <div className="flex space-x-5">
             <button className="bg-white text-base p-2 py-2 rounded-xl hover:bg-gray-500 cursor-pointer font-[Poppins]">Log in</button>
            
            <div className="md:hidden flex items-center  gap-3">
               <button onClick={handleClick}  >
                  <img src={Hamburger} alt="menu" className="h-7 w-7 text-gray-500" />
               </button>
            </div>
          </div>
          
          {isOpen && (<div className="absolute top-20 left-0 right-0 bg-[#5865F2] flex flex-col items-start space-y-3 p-6 z-10 md:hidden">
          {navLinks}
          </div>)}

       </header>
      
    );
}