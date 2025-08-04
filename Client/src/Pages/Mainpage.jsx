import HeroSection from "../Components/Hero.jsx";
import HowItWorks from "../Components/Howitworks.jsx";
import Navbar from "../Components/Navbar.jsx";
import '../Components/HowItWorks.css';
import { useState } from "react";

const Mainpage = ()=>{
    const[loader,setLoader] = useState(true);
    const[page ,setpage] = useState(false);

    setTimeout(()=>{
        setLoader(false);
        setpage(true);
    },6000)

    return(
        <>
    {
    loader && (
            <div className="loader">    
            </div>
    )}
    {page && (
        <div id='scroller' >
        <Navbar/>
        
       <HeroSection/>
       </div>
        )}
        </>
    )
}

export default Mainpage;