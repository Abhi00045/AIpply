import "../Authentication/Auth.css";
import loginImage from "../../public/loginimage.png";
import { useState } from "react";
import axios from "axios";
import { Login } from "./Login";

export const Signup = () => {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [confirmpassword ,checkpassword]= useState();
   const [msg, setMsg] = useState('');
   const [userExist , setUserExist] = useState(false)

   const navigate = useNavigate();


        const submitingUsers = (e) => {
          e.preventDefault(); 
          if(password != confirmpassword){
            alert("Check your password buddy");
           window.onload(); 
          }
          // if(res.status === 409){
          //   setUserExist(true)
          //   setTimeout(() =>
          //     {
          //       setUserExist(false)
          //       window.onload();
          //     }, 5000);
          // }
          axios
          .post("http://localhost:3011/register", { fullname: name, email,password, role })
          .then((result)=>{
            console.log(result);
            alert("created successful")
            navigate("/applicant") //redirecting to that page
          })
          .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-left">
          <h1 className="title">Sign Up</h1>
          <p className="subtitle">
            Create your account to access the Job Portal Dashboard
          </p>

          <form className="signup-form" onSubmit={submitingUsers}>
            <label htmlFor="">Name</label>
            <input
              id="inp"
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)
              }
              required
            />
            <label>Email</label>
            <input
              id="inp"
              type="email"
              placeholder="youremail@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              id="inp"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Confirm Password</label>
            <input
              id="inp"
              type="password"
              placeholder="Re-enter your password"
              onChange={(e)=>checkpassword(e.target.value)}
              required
            />

            <label htmlFor="Role">Who Are You?</label>
            <select
              className="role"
              id="inp"
              name="Who Are You ?"
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option id="inp" value="jobseeker">
                I am a jobseeker
              </option>
              <option id="inp" value="recruiter">
                I am a recruiter
              </option>
            </select>

            <button
             className="signup-btn" onClick={submitingUsers}>
              Create Account
            </button>

            <p className="alternate">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>
          <p style={{ color: 'red' }}>{msg}</p>
        </div>

        <div className="signup-right">
          <img
            src={signupNew}
            alt="Job Portal Illustration"
            className="signup-illustration"
          />
        </div>
      </div>
      {
        userExist && (
           <div className="popup-center">
        <p>❗User Already Exist <br /><br />You Want to
        <a href="/login">Login</a>
        </p>
        
      </div>
        )
      }
    </>
  );
};
