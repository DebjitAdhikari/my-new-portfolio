import { useState } from "react"

function NavBar() {
    const [isOpened,setIsOpened] = useState(false)
    return (
        <div className="flex justify-center">

        <div className=" fixed text-center z-30 bg-white  w-[90%] md:w-[70%] mx-auto flex justify-between pt-2
        items-center px-3 top-0 h-[70px] ">
            {/* logo */}
            <h1 className="lg:text-[24px] z-30 text-[20px]  rounded-xl hover:cursor-pointer font-bold flex gap-0 "> 
                {"<>"}
{/*                 <img src="images/fire-flame.gif" className="w-[30px] h-[30px]" alt="fire" /> */}
                {/* <img src="images/blue-fire.gif" className="w-[30px] h-[40px]" alt="fire" /> */}
                {"DEBJIT"} 
{/*                 <img src="images/fire-flame.gif" className="w-[30px] h-[30px]" alt="fire" /> */}
                {"</>"}
            </h1>
            {/* contents */}
            <div className="md:flex md:text-[18px]  hidden lg:text-[20px] gap-4">
                <a href="#home" className="hover:cursor-pointer hover:bg-blue-700 hover:text-white rounded-md p-1 transition-all
                hover:duration-500 ">Home</a>
                <a href="#about" className="hover:bg-blue-700 hover:text-white  rounded-md p-1 hover:cursor-pointer transition-all
                hover:duration-500 ">About</a>
                <a href="#projects" className="hover:bg-blue-700 hover:text-white  rounded-md p-1 hover:cursor-pointer transition-all
                hover:duration-500 ">Projects</a>
                <a href="#contact" className="hover:bg-blue-700 hover:text-white  rounded-md p-1 hover:cursor-pointer transition-all
                hover:duration-500 ">Contact</a>
            </div>
            {/* hamburger */}
            <div className="md:hidden block hover:cursor-pointer">
                {/* hamburger */}
                {!isOpened && 
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setIsOpened(true)} className="block"  viewBox="0 0 50 50" width="40px" height="40px">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
                }
                
            </div>
        </div>
            {/* dropmenu */}
            {
                isOpened && 
                <div className="flex flex-col gap-3 text-[18px] sm:text-[20px] bg-slate-100 p-5 rounded-md z-40 border-2 fixed right-6 top-4 sm:w-[300px] w-[200px] min-h-[200px]">
                    <div className="min-h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setIsOpened(false)} className="absolute hover:cursor-pointer right-0 top-1 " viewBox="0 0 50 50" width="40px" height="40px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"/></svg>
                    </div>
                    <a href="#home" onClick={()=>setIsOpened(false)} className="hover:underline decoration-purple-500">Home</a>
                    <a href="#about" onClick={()=>setIsOpened(false)} className="hover:underline decoration-purple-500">About</a>
                    <a href="#projects" onClick={()=>setIsOpened(false)} className="hover:underline decoration-purple-500">Projects</a>
                    <a href="#contact" onClick={()=>setIsOpened(false)} className="hover:underline decoration-purple-500">Contact Me</a>
                </div>
            }
        {/* modal blur */}
        {
            isOpened &&
            <div className="inset-0  transition-all duration-300 bg-black/30 backdrop-blur-sm z-30 top-0 w-[100vw] h-[100vh] mt-0 fixed ">

            </div>
        }
    </div>
    )
}

export default NavBar
