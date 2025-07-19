import HeroSection from "../Components/Hero.jsx";
import HowItWorks from "../Components/Howitworks.jsx";
import Navbar from "../Components/Navbar.jsx";
import '../Components/HowItWorks.css';

const Mainpage = ()=>{


    return(
        <>
       <div id='scroller' >
        <Navbar/>
        
       <HeroSection/>
       </div>
        </>
    )
}

export default Mainpage;