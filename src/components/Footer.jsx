import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Instagram from "../assets/images/instagram-brands-solid-full.svg";
import Twitter from "../assets/images/x-twitter-brands-solid-full.svg";
import Youtube from "../assets/images/youtube-brands-solid-full (1).svg";
import Facebook from "../assets/images/square-facebook-brands-solid-full.svg";
import Tiktok from "../assets/images/tiktok-brands-solid-full.svg";
   

export default function Footer() {

    const [isProduct, setIsProduct] = useState(false);
     const [isCompany, setIsCompany] = useState(false);
      const [isResources, setIsResources] = useState(false);
       const [isPolicies, setIsPolicies] = useState(false);

       function handleClick(){
        setIsProduct(prev=>!prev);
       }
       function companyClick(){
        setIsCompany(prev=>!prev)
       }
       function resourcesClick(){
        setIsResources(prev=>!prev)
       }
       function politicsClick(){
        setIsPolicies(prev=>!prev)
       }

  return (
    <div className="bg-gradient-to-b from-[#5865F2] to-[#404EED] text-white  p-8 md:p-16">
      
      <div className="max-w-sm mt-10 mb-10">
        <label htmlFor="language" className="block mb-2 text-lg font-semibold">
          Language
        </label>
        <div className="relative">
          <select
            id="language"
            className="appearance-none w-full bg-white text-black px-4 py-3 rounded-lg font-medium"
          >
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="de">Deutsch</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="cs">Čeština</option>
            <option value="da">Dansk</option>
          </select>
          <ChevronDownIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xl font-medium">
        <div className="relative">
            <div className="flex justify-between md:block">
                <h4 className="mb-3 uppercase text-white font-bold">Product</h4>
                <button onClick={handleClick} className="md:hidden">
                        <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${isProduct? "rotate-180" : " "}`} />
                </button>
            </div>
          <ul className={`space-y-3 ${isProduct? "block" : "hidden"} md:block `}>
            <li><a href="#">Download</a></li>
            <li><a href="#">Nitro</a></li>
            <li><a href="#">Status</a></li>
          </ul><hr className="md:hidden"/>
         
        </div>
        <div className="relative">
             <div className="flex justify-between md:block">
                <h4 className="mb-3 uppercase text-white font-bold">Company</h4>
                <button onClick={companyClick} className="md:hidden">
                    <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${isCompany? "rotate-180" : " "}`} />
                </button>
              </div>
            <ul className={`space-y-3 ${isCompany? "block" : "hidden"} md:block `}>
            <li><a href="#">About</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Branding</a></li>
          </ul><hr className="md:hidden"/>
           
        </div>
        <div className="relative">
          <div className="flex justify-between md:block">
            <h4 className="mb-3 uppercase text-white font-bold">Resources</h4>
            <button onClick={resourcesClick} className="md:hidden">
                <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${isResources? "rotate-180" : " "}`} />
            </button>
           </div>
           <ul className={`space-y-3 ${isResources? "block" : "hidden"} md:block `}>
            <li><a href="#">Support</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">StreamKit</a></li>
            <li><a href="#">Creators</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Quests</a></li>
            <li><a href="#">Official Third-Party Merch</a></li>
            <li><a href="#">Feedback</a></li>
          </ul><hr className="md:hidden"/>
          
        </div>
        <div className="relative">
             <div className="flex justify-between md:block">
                <h4 className="mb-3 uppercase text-white font-bold">Policies</h4>
                <button onClick ={politicsClick} className="md:hidden">
                    <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${isPolicies? "rotate-180" : " "}`} />
                </button>
              </div>  
           <ul className={`space-y-3 ${isPolicies? "block" : "hidden"} md:block `}>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Acknowledgements</a></li>
            <li><a href="#">Licences</a></li>
            <li><a href="#">Company Information</a></li>
          </ul>
           
        </div>
      </div>
      <div className="mt-9">
        <h1 className="text-base font-black mb-5">social</h1>
        <ul className="flex space-x-5">
            <li>
              <img className="w-6 h-6 text-white" src={Instagram} alt="Instagram" ></img>
            </li>
             <li>
              <img className="w-6 h-6 " src={Twitter} alt="Instagram" ></img>
            </li>
             <li>
              <img className="w-6 h-6" src={Youtube} alt="Instagram" ></img>
            </li>
             <li>
              <img className="w-6 h-6" src={Facebook} alt="Instagram" ></img>
            </li>
             <li>
              <img className="w-6 h-6" src={Tiktok} alt="Instagram" ></img>
            </li>
        </ul>
        
      </div>
      <div className="mt-15">
        <h1 className="text-7xl font-black md:text-[17rem] text-center">DISCORD</h1>
      </div>
    </div>
    
  );
}
