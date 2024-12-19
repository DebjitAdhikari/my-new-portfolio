import { useEffect, useState } from "react";

function Loading({setLoaded}) {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const timeout = setTimeout(()=>{
            setFadeOut(true)//start fading out
            setTimeout(()=>{
                setLoaded(true)//load the pages in background
                setVisible(false)//remove the loading 
            },500)
        },2000)

        return ()=>clearTimeout(timeout)
    }, []);

    return (
        <div>
            {
                visible && 
                <div className={`w-full h-[100vh] fixed z-50 flex flex-col gap-5 justify-center 
                    items-center ${fadeOut?"opacity-0":"opacity-100 "} transition-opacity duration-1000 bg-white`} >
                    <img className='sm:w-[100px] w-[70px]' src='images/rocket-gif.gif'></img>
                    <img className='w-[70px] sm:w-[100px]' src='images/loading-gif.gif'></img>
                </div>
            }
        </div>
    );
}

export default Loading;
