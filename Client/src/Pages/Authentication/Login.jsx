import '../Authentication/Auth.css'
import loginImage from '../../public/loginimage.png'
import { useState } from 'react'

export const Login = ()=>{

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")
  const [msg , setMsg] = useState("")

const handleLogin = async(e)=>{
  e.preventdefault();

  try {
    const res = await fetch(`http://localhost:5000/api/login?email=${email}&password=${password}`);
    const data = await res.json();

    if (res.ok) {
      setMsg('✅ Login successful!');
    } else {
      setMsg(`❌ ${data.message}`);
    }
  } catch (error) {
    setMsg('❌ Something went wrong.');
    console.error(error);
  }


}

    return(
        <>
        <div className="login-container">
      <div className="login-box">
        <div className="form-section">
          <div className="logo">AIpply</div>
          <h2>Log in</h2>
          <p>
            or <a href="/signup">create an account</a> if you don’t have one yet
          </p>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input id='inp' type="email" placeholder="mike142@yourmail.com" onChange={(e)=>setEmail(e.target.value)} />
            <div className="link-box">
              <a href="#">I can’t remember</a>
            </div>

            <label>Password</label>
            <div className="password-wrapper">
              <input id='inp' type="password" value="********" onChange={(e)=>setPassword(e.target.value)} />
              <span className="eye-icon">👁️</span>
            </div>
            <div className="link-box">
              <a href="#">I forgot the password</a>
            </div>

            <div className="checkbox-remember">
              <input type="checkbox" /> Remember me
            </div>

            <button className="login-btn" type='submit'>Log me in</button>
            <p style={{ color: 'red' }}>{msg}</p>

            {/* <div className="or">or</div> */}

            {/* <button className="social-btn google">Log in with Google</button>
            <button className="social-btn apple">Log in with Apple</button> */}
          </form>
        </div>
        <div className="illustration-section">
          <img src={loginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
        </>
    )
}