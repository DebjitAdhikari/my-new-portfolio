import SectionHeading from "../components/SectionHeading"

function AboutMe() {
    return (
        <div id="about" className="scroll-mt-[60px] min-h-[70vh] max-w-[90%] md:max-w-[70%] py-6  mx-auto mt-10">
            {/* heading */}
            <SectionHeading text="About Me"></SectionHeading>          
            {/* contents */}
            <div className="flex lg:flex-row flex-col-reverse  gap-5 mt-4 justify-between">
                {/* left */}
               <div className=" max-w-[500px]  flex flex-col justify-center gap-5 ">
                    {/* about */}
                    <p className="text-base whitespace-pre-line lg:text-[19px] leading-relaxed ">
                        {/* description */}
                        {`Hi, I'm Debjit Adhikari! 👋
                        I’m a passionate web developer from West Bengal, India. Currently exploring backend development. I specialize in creating scalable, user-friendly web applications using the MERN stack.
                        When I’m not coding, you’ll find me watching movies 🎬, binging series 📺, or exploring new places ✈️. 
                        I love merging creativity and functionality to build meaningful digital experiences and am always eager to learn and grow!🚀`}
                        
                    </p>
                </div>

                {/* right */}
                <div className="w-[220px]  rounded-lg   h-[260px] sm:min-w-[320px] sm:w-[290px] sm:min-h-[350px]">
                    <img src="images/coding-gif.gif" className="w-full h-full rounded-lg"></img>
                </div>
            </div>
            {/* skills */}
            <div className="mt-8">
                <SectionHeading text="Skills"></SectionHeading>
                <div className="flex gap-7 sm:gap-16 mt-7 px-5 pb-7 flex-wrap">
                    <img src="images/html-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/css-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/javascript-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/tailwind-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/React.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/nodejs-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/express-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/Mongodb.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/github-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/git-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />
                    <img src="images/postman-logo.png" className="w-[60px] h-[60px] hover:cursor-pointer  shadow-2xl shadow-black border rounded-xl" alt="" />

                </div>
            </div>
        </div>
    )
}

export default AboutMe
