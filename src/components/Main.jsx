import { useState } from "react"
import Image from "../assets/images/real 1.webp"
export default function Main(){
     
    return(
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
         <div className="mt-10 px-8 text-center md:mt-14 md:px-28 md:text-left font-black">
            <h1 className="text-white text-6xl uppercase mb-5 tracking-tighter leading-[0.9] font-[Poppins]">Group chat that's all fun & games</h1>
            <p className="text-white text-xl font-[Poppins] mt-9">Discord is used for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play and hangout</p>
         </div>
         <div className="flex justify-start mt-15">
            <img className="w-full " src={Image}></img>
         </div>
       </div>
    )
}