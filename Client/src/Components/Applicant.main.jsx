
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
        <div className="w-[15%] p-3">
          <div className="flex flex-col justify-between items-center h-full gap-12">

            <Link className="text-white no-underline" to="/">
              <h1 className="text-white text-3xl font-bold">AIpply</h1>
            </Link>

            {/* MENU LIST */}
            <div className="w-full">
              <ul className="flex flex-col">
                
                <Link className="no-underline text-white" to="/applicant/findjobs">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Find Jobs</li>
                </Link>

                <Link className="no-underline text-white" to="/applicant/MockInterviews">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Mock Interviews</li>
                </Link>

                <Link className="no-underline text-white" to="/applicant">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Profile</li>
                </Link>

                <Link className="no-underline text-white" to="/applicant/Applications">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Applications</li>
                </Link>

              </ul>
            </div>

            {/* LOGOUT BUTTON */}
            <div>
              <button
                onClick={handleLogout}
                className="w-[13vw] py-3 rounded-[25px] cursor-pointer border-2 border-[#234f92] bg-black text-white hover:text-red-500"
              >
                Log out
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <Profile />

      </div>
    </>
  );
};
