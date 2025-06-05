import "../Components/components.css"

const Navbar = ()=>{

    return(
        <>
        <div className="main-bar">
            <div className="logo"><h1>AIpply</h1>
            <div className="list-navbar">
                <a href="#"><p>Blog</p></a>
                <a href="#Howitworks"><p>How it works</p></a>
                <a href="#contacts"><p>Contact</p></a>
            </div>
            </div>
            
            <div className="buttons-navbar">
                <button className="button-one">Login</button>
                    <button className="
                    button-two">For Employers</button>
            </div>
        </div>
        </>
    )
}
 export default Navbar;