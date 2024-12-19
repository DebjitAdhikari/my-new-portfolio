import { useState } from "react"
import ProjectComponent from "../components/ProjectComponent"
import SectionHeading from "../components/SectionHeading"

const myProjects=[
    {
        name:"PizzaDash",
        year:2024,
        description:`Pizza Dash is a web application designed for seamless pizza ordering. It offers a user-friendly interface to customize pizzas, manage cart items, and 
         place orders effortlessly. Built with React and Tailwind CSS, 
         Pizza Dash ensures a fast, responsive, and visually appealing experience for pizza 
         lovers.`,
        websiteLink:"https://pizza-dash.vercel.app/",
        imageLink: "images/pizzadash.png",

    },
    {
        name:"SaveTheShow",
        year:2024,
        description:`SaveTheShow is a web app that helps movie lovers manage and track their 
            favorite films.It features real-time searches, detailed movie information, user 
            ratings, and filtering options, all built with React and integrated APIs.`,
        websiteLink:"https://debjitadhikari.github.io/SaveTheShow/",
        imageLink: "images/savetheshow.png",
    },
    {
        name:"Simon Game",
        year:2023,
        description:`Simon Game project is a web-based memory puzzle game built with HTML, CSS, and JavaScript. 
            Players follow and repeat a sequence of colored buttons to improve their memory
            and concentration, offering an engaging challenge for all ages.`,
        websiteLink:"https://debjitadhikari.github.io/simon-game/",
        imageLink: "images/simon-game.png",
    },
    {
        name:"Discord Clone",
        year:2024,
        description:`The Discord Clone is a frontend UI project built with React. It 
        replicates the design and layout of the popular communication platform Discord, 
        featuring responsive styling and interactive elements for a realistic user 
        experience.`,
        websiteLink:"https://debjitadhikari.github.io/discord-clone/",
        imageLink: "images/discord.png",
    },
    {
        name:"Guess The Number",
        year:2023,
        description:`'Guess the Number' game using HTML, CSS, and JavaScript! 🎮🔢 
        Challenge your guessing skills and have fun with 
        this interactive web game. Try it out and see if you can beat the odds!`,
        websiteLink:"https://debjitadhikari.github.io/guess-the-number/",
        imageLink: "images/guess-the-number.png",
    },
    {
        name:"Todo List",
        year:2024,
        description:`The Todo List is a simple and intuitive web application built with 
        HTML, CSS, and JavaScript. It allows users to add, remove, and manage their daily 
        tasks efficiently, helping them stay organized and productive.`,
        websiteLink:"https://debjitadhikari.github.io/to-do-list/",
        imageLink: "images/todo-list.png",
    },
    {
        name:"Random Password Generator",
        year:2024,
        description:`The Random Password Generator is a web tool built with HTML, CSS, 
        and JavaScript. It generates secure, random passwords based on user preferences, 
        ensuring strong protection for online accounts.`,

        websiteLink:"https://debjitadhikari.github.io/random-password-generator/",
        imageLink: "images/password-generator.png",
    },
    {
        name:"Razorpay Clone",
        year:2024,
        description:`The Razorpay clone frontend is a Tailwind Css-based UI that replicates the user 
        interface of the Razorpay payment gateway. It features elements like payment buttons,
         transaction status indicators, and a sleek, responsive 
        design to mimic the original Razorpay experience without any backend functionality.`,
        websiteLink:"https://debjitadhikari.github.io/razorpay-clone/",
        imageLink: "images/razorpay.png",
    },
    
]
function Projects() {
    const [countProject,setCountProject]=useState(2)

    return (
        <div id="projects" className="scroll-mt-[60px] min-h-[70vh] max-w-[90%] md:max-w-[70%] py-6  mx-auto">
            <SectionHeading text="My Projects"></SectionHeading>
            {
                myProjects.slice(0,countProject).map((el)=>{
                    return <ProjectComponent key={el.name} theProject={el}></ProjectComponent>
                })
            } {
                countProject < myProjects.length &&
                <div className="w-[100px] mt-3 hover:cursor-pointer hover:bg-[#85714f] text-center p-2 rounded-2xl bg-[#988462]
                text-white mx-auto" onClick={()=>setCountProject(el=>el+2)}>Load more</div>
            }    
        </div>
        
    )
}

export default Projects
