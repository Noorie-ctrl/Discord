import Chat from "../assets/images/chatt.webp";
import You from "../assets/images/youu.webp"
export default function person (){
    return(
        <div className="hidden md:flex md:h-[11rem] md:w-[11rem] md:mb-[-3rem] md:mr-[18rem] md:mx-auto">
            <img src={Chat} className="" />
            <img src={You} className="" />
        </div>
    )
}