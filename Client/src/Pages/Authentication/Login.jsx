
import '../Authentication/Auth.css';
import loginImage from '../../public/loginimage.png';
import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3011/login', {
        email,
        password,
      });
      console.log(email , password);
      

      if (res.status === 200) {
        setMsg('✅ Login successful!');
        // redirect("/applicant")
      }
      if(res.status===410){
        setMsg("Password notmatch to the user")
      }
    } catch (error) {
        setMsg('❌ Something went wrong.');
      console.error(error);
    }
  };

  return (
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
            <input
              id="inp"
              type="email"
              placeholder="mike142@yourmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="link-box">
              <a href="#">I can’t remember</a>
            </div>

            <label>Password</label>
            <div className="password-wrapper">
              <input
                id="inpt"
                type="password"
                placeholder="enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required

              />
            </div>
            <div className="link-box">
              <a href="#">I forgot the password</a>
            </div>

            <button className="login-btn" type="submit">
              Log me in
            </button>
            <p style={{ color: 'red' }}>{msg}</p>
          </form>
        </div>
        <div className="illustration-section">
          <img src={loginImage} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};
