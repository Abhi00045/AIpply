import "../Authentication/Auth.css";
import { useState } from "react";
import axios from "axios";
import signupNew from "../../public/signupNew.png";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmpassword, checkpassword] = useState("");
  const [msg, setMsg] = useState("");
  const [userExist, setUserExist] = useState(false);
  const navigate = useNavigate();

  const submitingUsers = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      alert("❗ Passwords do not match");
      return;
    }

    try {
      const result = await axios.post("http://localhost:3011/signup", {
        fullname: name,
        email,
        password,
        role,
      });
      console.log("Signup Response:", result.data);
      // Save token + user object in localStorage
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      setMsg("✅ Account created successfully");
      setUserExist(false);

      // Redirect to recruiter
      if (role === "jobseeker") {navigate("/applicant");}
      else {navigate("/recruiter");}

    } 
    catch (err) {
      console.log(err);
      if (err.response && err.response.status === 409) {
        setUserExist(true);
        // navigate("/login");
      } else {
        setMsg("❌ Something went wrong");
      }
    }
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
            <label>Name</label>
            <input
              id="inp"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              id="inp"
              type="email"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              id="inp"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Confirm Password</label>
            <input
              id="inp"
              type="password"
              placeholder="Re-enter your password"
              value={confirmpassword}
              onChange={(e) => checkpassword(e.target.value)}
              required
            />

            <label htmlFor="Role">Who Are You?</label>
            <select
              className="role"
              id="inp"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="jobseeker">I am a jobseeker</option>
              <option value="recruiter">I am a recruiter</option>
            </select>

            <button className="signup-btn" type="submit">
              Create Account
            </button>

            <p className="alternate">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>
          <p style={{ color: "red" }}>{msg}</p>
        </div>

        <div className="signup-right">
          <img
            src={signupNew}
            alt="Job Portal Illustration"
            className="signup-illustration"
          />
        </div>
      </div>

      {userExist && (
        <div className="popup-center user-exist">
          <p style={{ color: "red" }}>
            ❗User Already Exists <br />
            <br />
            You want to <a href="/login">Login</a>?
          </p>
        </div>
      )}
    </>
  );
};
