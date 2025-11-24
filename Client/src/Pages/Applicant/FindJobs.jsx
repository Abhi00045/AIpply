import { IoMdNotifications } from "react-icons/io";
import '../Applicant/Apply.css'
import JobCards from '../../Components/JobsPost.jsx'
import { Link, redirect } from "react-router";
import { useState, useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


export const FindJobs = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    if (userEmail) {
      const user = JSON.parse(userEmail);
      setEmail(user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    redirect("/login");
  };

  return (
    <>
      <div className="h-screen w-screen bg-black flex flex-row overflow-hidden">

        {/* LEFT SIDEBAR */}
        <div className="w-[15%] p-5 bg-black text-white flex flex-col justify-between">
          <div>
            <Link to="/" className="no-underline">
              <h1 className="text-white text-3xl font-bold">AIpply</h1>
            </Link>

            <ul className="mt-10 flex flex-col">
              <Link to="/applicant/findjobs" className="no-underline text-white">
                <li className="p-4 rounded-lg hover:bg-[#234f92] cursor-pointer">
                  Find Jobs
                </li>
              </Link>

              <Link to="/applicant/MockInterviews" className="no-underline text-white">
                <li className="p-4 rounded-lg hover:bg-[#234f92] cursor-pointer">
                  Mock Interviews
                </li>
              </Link>

              <Link to="/applicant" className="no-underline text-white">
                <li className="p-4 rounded-lg hover:bg-[#234f92] cursor-pointer">
                  Profile
                </li>
              </Link>

              <Link to="/applicant/Applications" className="no-underline text-white">
                <li className="p-4 rounded-lg hover:bg-[#234f92] cursor-pointer">
                  Applications
                </li>
              </Link>
            </ul>
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-[25px] border-2 border-[#234f92] bg-black text-white hover:text-red-500 transition"
          >
            Log out
          </button>
        </div>

        {/* MAIN CONTENT */}
       <PerfectScrollbar className="flex-1 rounded-l-[25px] m-5 bg-white rounded-3xl w-[85%]">

        {/* NAVBAR */}
        <div className="sticky top-0 bg-white z-10 shadow-md flex justify-between items-center px-6 py-5 w-full">
          <h3 className="text-black text-xl font-semibold">Jobs</h3>
          <pre className="text-black">{email}</pre>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <JobCards />
        </div>

      </PerfectScrollbar>

      </div>
    </>
  );
};
