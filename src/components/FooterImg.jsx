import Footer from "../assets/images/footer img.webp"
import Toddler from "../assets/images/toddler.webp"
export default function FooterImg (){
    return(
        <>
        <div className="h-screen m-6 hidden md:block">
            <img className=" p-28 mx-auto mt-28" src={Footer}></img>
        </div>
         <div className="  block md:hidden ">
            <img className="mx-auto pt-28 mb-[-13rem]" src={Toddler}></img>
        </div>
        </>
    )
}