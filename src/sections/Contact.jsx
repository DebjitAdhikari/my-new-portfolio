import { useEffect, useState } from "react"
import SectionHeading from "../components/SectionHeading"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axios from "axios"
function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [customMessage, setCustomMessage] = useState("")
    const [time,setTime] = useState("")
    const notifySuccess = () => toast.success("Your message has been sent! I will be in touch shortly.");
    const notifyFailed = () => toast.error("Oops! Something went wrong. Maybe try again?");
 
    function validateEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function emptyFormFields(){
        setName("")
        setEmail("")
        setMessage("")
    }
    async function handleSubmit(ev){
        ev.preventDefault()
        if(!name || !email || !message) return
        if(!validateEmail(email)) {
            toast.error("Email is not valid.")
            return
        }
        const formData={
            _name:name,
            _email:email,
            _message:message
        }
        
        try{
            const res = await axios.post("https://formspree.io/f/xyzyqojb",formData,{
                headers:{
                    "Accept": "application/json"
                }
            })
            // console.log(res)
            if(!res.status===200) throw new Error("Failed")
            notifySuccess()
            emptyFormFields()

        }catch(err){
            console.error(err)
            notifyFailed()
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:"true"})
            // console.log(now)
            const[theTime,endsWith] = now.split(" ")
            const theHour = parseInt(theTime.split(":")[0])
            if ((theHour===12)||(theHour >= 11 && endsWith === "pm") || (theHour < 7 && endsWith === "am")) {
                setCustomMessage(`It’s ${now} for me – I might be catching some sleep😴. I’ll get back to you when I can!`);
            }else if ((theHour >= 7 && endsWith === "am") || (theHour < 11 && endsWith === "pm")) {
                setCustomMessage(`It’s ${now} for me – I’m most likely awake and ready to get back to you soon!`);
            } 
            setTime(now)
        },1000)
        

        return ()=> clearInterval(interval)
    },[time,customMessage])
    return (
        <form id="contact" onSubmit={handleSubmit} className="scroll-mt-[60px] min-h-[70vh] max-w-[90%] md:max-w-[70%] py-6 mx-auto mt-10">
            <SectionHeading text="Contact Me"></SectionHeading>
            <div className=" mt-7 max-w-[600px] text-left mx-auto
            gap-3  min-h-[400px] flex flex-col">
                <h1 className="text-[32px] text-center">{`Let's connect`}</h1>
                <p >{customMessage}</p>
                <input value={name}  onChange={ev=>{setName(ev.target.value)}} className="bg-[#D9D9D9] h-[60px] placeholder:text-lg placeholder-[#5a5d7a] rounded-lg px-2" placeholder="Name" type="text" />
                {!name && <p className="text-red-600 text-sm self-start">Name is required</p>}
                <input value={email} onChange={ev=>{setEmail(ev.target.value)}} className="bg-[#D9D9D9] h-[60px] placeholder:text-lg placeholder-[#5a5d7a] rounded-lg px-2" placeholder="Email" type="text" />
                {!email && <p className="text-red-600 text-sm self-start">Enter a valid email address</p>}
                <textarea value={message} onChange={ev=>{setMessage(ev.target.value)}} className="bg-[#D9D9D9] h-[200px] text-left align-text-top text- placeholder:text-lg placeholder-[#5a5d7a] rounded-lg p-2" placeholder="Message" type="text" />
                {!message && <p className="text-red-600 text-sm self-start">Please write something</p>}
                <button className="self-start bg-[#26B8CB] hover:bg-[#3a9ba8] flex gap-2 text-white text-[20px] px-4 py-2 rounded-lg">Submit <img src="images/sent-logo.png" className="w-[30px] h-[30px]" alt="" /> </button>
            </div>
            <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            />
        </form>
    )
}

export default Contact
