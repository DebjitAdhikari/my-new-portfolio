import { useEffect } from "react"
import Typed from "typed.js";
import SocialLinks from "../components/SocialLinks";
import HomeButtons from "../components/HomeButtons";
import { motion } from 'framer-motion';
function Home() {
    useEffect(()=>{
        const typed = new Typed('#typed', {
            strings: ["Hello👋","こんにちは🙋","नमस्ते🙏","Здравствуйте🙋","নমস্কার🙏","안녕하세요👋","ಹಲೋ🙏"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
        return ()=>{
         typed.destroy()   
        } 
    },[])
    return (
        <div id="home" className="scroll-mt-[80px] relative md:max-w-[70%] max-w-[90%] mt-20 min-h-[70vh] flex lg:flex-row flex-col-reverse lg:justify-around
        lg:items-start items-center  mx-auto">
            {/*left- description  */}
            <div className="relative lg:mt-0 mt-11 lg:max-w-[515px] h-full ">
                
                {/* heading */}
                <h1 className="text-[44px] leading-tight font-bold"><span className="text-purple-500 text-[30px] sm:text-[44px] text-wrap break-words" id="typed"></span><br></br>
                    I’m <span className="text-[#3CB3C3]">Debjit</span><br></br>
                    <span className="text-[36px] text-green-500 font-normal">Web Developer</span>
                </h1>
                {/* paragraphs */}
                <p className="mt-3 text-[19px]">Hi, I’m Debjit Adhikari, a web developer exploring backend development. 
                    I specialize in creating scalable web applications using the MERN stack and
                    love building efficient, user-friendly solutions.
                </p>
                {/* social links */}
                <SocialLinks></SocialLinks>
                {/* buttons */}
                <HomeButtons></HomeButtons>
            </div>
            {/* right- home image*/}
                
            <div className=" w-[200px] sm:max-w-[300px] h-[100%] rounded-full shadow-2xl shadow-black mt-8">
                <img src="images/profile-image.JPG" alt="profile" className="rounded-full w-full " />
            </div>
        </div>
    )
}

export default Home
