import React from "react";
import { Link } from "react-router-dom";

// const jobs = [
//   {
//     id: 1,
//     company: "Chai aur Code",
//     logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
//     role: "Frontend Developer",
//     location: "Mumbai",
//     experience: "1 year",
//     salary: "3 - 5 LPA",
//     type: "Full-time",
//     difficulty: "Easy",
//     badge: "Remote",
//     skills: ["JavaScript", "ReactJS"],
//     description:
//       "We are looking for a Frontend Developer who can build responsive UI components and integrate APIs...",
//   },
//   {
//     id: 2,
//     company: "Google",
//     logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
//     role: "Software Engineer",
//     location: "Bangalore",
//     experience: "2–4 years",
//     salary: "12 - 18 LPA",
//     type: "Hybrid",
//     difficulty: "Medium",
//     badge: "Hybrid",
//     skills: ["NodeJS", "Express", "Cloud"],
//     description:
//       "Join our engineering team and help us build scalable backend services used by millions worldwide...",
//   },
//   {
//     id: 3,
//     company: "Microsoft",
//     logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
//     role: "Full Stack Developer",
//     location: "Hyderabad",
//     experience: "1–3 years",
//     salary: "8 - 12 LPA",
//     type: "Full-time",
//     difficulty: "Easy",
//     badge: "Remote",
//     skills: ["React", "MongoDB", "Tailwind"],
//     description:
//       "We’re hiring a passionate full-stack developer to work on enterprise products and cloud platforms...",
//   },
// ];


const JobCards = () => {
  return (
    <div className="w-fit h-fit flex flex-col gap-2 p-6 font-light border border-black rounded-3xl  hover:shadow-lg">

      {/* LEFT: Company Image */}
      <div className="flex flex-row gap-14">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="Company Logo"
          className="w-20 h-20 rounded-full object-center border"
        />
          <div className="">
          <h2 className="text-xl ">Full Stack Developer</h2>
          <p className="text-black">Geekster (Company Name)</p>
        </div>

      </div>


        {/* LOCATION & EXPERIENCE */}
        <div className="flex flex-row gap-7 text-sm">
          <p>Mumbai</p>
          <p>0-1years</p>
        </div>

        {/* SHORT DESCRIPTION (2–3 lines only) */}
          <p className="text-8xl
          ">
            Build scalable web applications, collaborate with backend engineers,
            optimize UI components, and participate in code reviews for quality delivery.
          </p>

        {/* BUTTONS SECTION */}
        <div className="flex justify-between mt-2">
          <button className="px-4 py-2 bg-gray-100 border rounded-xl text-sm hover:bg-gray-200">
            Mock Test
          </button>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700">
            Apply Now
          </button>
        </div>

    </div>
  );
};

export default JobCards;

