import '../Authentication/Auth.css'
import loginImage from '../../public/loginimage.png'


export const Signup = ()=>{

    return(
        <>
        <div className="signup-container">
      <div className="signup-left">
        <h1 className="title">Sign Up</h1>
        <p className="subtitle">Create your account to access the Job Portal Dashboard</p>

        <form className="signup-form">
          <label>Email</label>
          <input type="email" placeholder="youremail@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter your password" />

          <button className="signup-btn">Create Account</button>

          <p className="alternate">Already have an account? <a href="/login">Log in</a></p>
        </form>
      </div>

      <div className="signup-right">
        <img
          src={loginImage}
          alt="Job Portal Illustration"
          className="signup-illustration"
        />
      </div>
    </div>
        </>
    )
}