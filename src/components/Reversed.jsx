export default function Reversed(props){
    return(
<div className="bg-gradient-to-b from-[#5865F2] to-[#404EED] md:max-w-7xl min-h-screen p-5 md:p-9 w-[90%] mx-auto rounded-[5rem] mt-15 md:mt-5">
   <div className=" grid grid-cols-1 md:grid-cols-[45%_55%] min-h-screen">
     <div className=" font-black text-white md:mt-28 p-8 md:px-28">
            <h1 className="md:text-5xl text-3xl md:text-left mb-5 tracking-tighter leading-[0.9] font-[Poppins] uppercase">{props.header}</h1>
            <p className="text-base   md:text-left font-[Poppins]">{props.paragraph}</p>
     </div>
        <div className={`w-full rounded-[5rem]`}
            style={{ backgroundColor:props.bgColor}}>
           <video className=" p-9 w-full h-full rounded-[5rem] " src ={props.videoSrc}
            autoPlay loop muted playsInline/> 
        </div>
       
   </div>
</div>  
    )
}