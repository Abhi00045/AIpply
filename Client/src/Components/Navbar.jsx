import "../Components/components.css"

const Navbar = ()=>{

    return(
        <>
        <div className="main-bar">
            <div className="logo"><h1>AIpply</h1>
            <div className="list-navbar">
                <p>Blog</p>
                <p>How it works</p>
                <p>Contact</p>
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