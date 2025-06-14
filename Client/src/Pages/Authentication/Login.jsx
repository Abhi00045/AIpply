import '../Authentication/Auth.css'

export const Login = ()=>{

    return(
        <>
        <div className="login-container">
      <div className="login-box">
        <div className="form-section">
          <div className="logo">AIpply</div>
          <h2>Log in</h2>
          <p>
            or <a href="#">create an account</a> if you don’t have one yet
          </p>
          <form>
            <label>Username or email</label>
            <input type="email" placeholder="mike142@yourmail.com" />
            <div className="link-box">
              <a href="#">I can’t remember</a>
            </div>

            <label>Password</label>
            <div className="password-wrapper">
              <input type="password" value="********" />
              <span className="eye-icon">👁️</span>
            </div>
            <div className="link-box">
              <a href="#">I forgot the password</a>
            </div>

            <div className="checkbox-remember">
              <input type="checkbox" /> Remember me
            </div>

            <button className="login-btn">Log me in</button>

            {/* <div className="or">or</div> */}

            {/* <button className="social-btn google">Log in with Google</button>
            <button className="social-btn apple">Log in with Apple</button> */}
          </form>
        </div>
        <div className="illustration-section">
          <img src="/illustration.png" alt="Login Illustration" />
        </div>
      </div>
    </div>
        </>
    )
}