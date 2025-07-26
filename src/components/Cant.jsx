export default function Cant({ button }){
    return(
        <div className="space-y-9">
            <h1 className=" md:text-7xl text-4xl uppercase mt-28 text-center font-bold text-white p-5">You can't scroll anymore. Better go chat.</h1>
            <div className="flex justify-center">{button}</div>
        </div>
    )
}