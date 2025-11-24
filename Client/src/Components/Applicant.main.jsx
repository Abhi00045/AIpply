
import { Profile } from '../Pages/Applicant/Profile';
import { FindJobs } from '../Pages/Applicant/FindJobs';
import MockInterviews from '../Pages/Applicant/MockInterviews';
import { Link, redirect } from "react-router";
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();


export const JobApplicant = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    redirect("/login");
  };

  return (
    <>
      <div className="h-screen w-screen bg-black flex flex-row fixed">

        {/* LEFT MENU BAR */}
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

        {/* CONTENT SECTION */}
        <Profile />

      </div>
    </>
  );
};
