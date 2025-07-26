export default function Button(){
    return (
        <div className="flex md:flex md:justify-center md:space-y-0 md:flex-row md:mt-15 mt-15 md:space-x-5 items-center flex-col space-y-5">
            <button className="flex items-center gap-2 p-3 bg-white text-gray-600 rounded-xl w-fit text-xl hover:bg-gray-300  cursor-pointer font-[Poppins]">Download for windows
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
            </button>
            
            <button className="p-3 bg-[#5865f2] text-white rounded-xl text-xl  cursor-pointer hover:bg-[#1A1761] font-[Poppins]">Open Discord in your browser</button>
        </div>
    );
}