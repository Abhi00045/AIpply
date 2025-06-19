import "../Authentication/Auth.css";
import loginImage from "../../public/loginimage.png";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const submitingUsers = (e) => {
    e.preventDefault();
    // console.log(name, email, password, role);
    axios
      .post("http://localhost:3011/user", { fullName: name, email, password, role })
      .then((result) => console.log(result))
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
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              id="inp"
              type="email"
              placeholder="youremail@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              id="inp"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <input
              id="inp"
              type="password"
              placeholder="Re-enter your password"
            />

            <label htmlFor="Role">Who Are You?</label>
            <select
              className="role"
              id="inp"
              name="Who Are You ?"
              onChange={(e) => setRole(e.target.value)}
            >
              <option id="inp" value="jobseeker">
                I am a jobseeker
              </option>
              <option id="inp" value="recuriter">
                I am a recruiter
              </option>
            </select>

            <button className="signup-btn" onClick={submitingUsers}>
              Create Account
            </button>

            <p className="alternate">
              Already have an account? <a href="/login">Log in</a>
            </p>
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
  );
};
