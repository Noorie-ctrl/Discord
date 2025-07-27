export default function Section(props){
    return(
<div className="bg-gradient-to-b from-[#5865F2] to-[#404EED] md:max-w-7xl w-[90%]  p-5 md:p-9  mx-auto min-h-screen rounded-[5rem] mt-15 md:mt-5">
   <div className=" grid grid-cols-1 md:grid-cols-[45%_55%]">
    
     <div className=" font-black text-white mt-9 md:mt-28 p-8 md:px-28">
        <h1 className="md:text-5xl text-3xl md:text-left mb-5 tracking-tighter leading-[0.9] font-[Poppins] uppercase">{props.header}</h1>
        <p className="text-base md:text-left mt-5 font-[Poppins]">{props.paragraph}</p>
        </div>

        <div className="w-full h-full">
        <video className="w-full h-full object-cover rounded-[5rem]" src ={props.videoSrc}
        autoPlay loop muted playsInline/> 
    </div>
   </div>
</div>
    )
};