import React from "react";

const jobs = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  company: "Geekster",
  logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  role: "Full Stack Developer",
  location: "Mumbai",
  experience: "0–1 years",
}));

const JobCards = () => {
  return (
    <div className="w-full flex flex-col">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="flex justify-between items-center py-4 border-b-2 border-black"
        >
          {/* LEFT SIDE */}
          <div className="flex gap-4 items-start text-black">
            <img
              src={job.logo}
              alt="logo"
              className="w-16 h-16 rounded-full border"
            />

            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-black">{job.role}</h2>
              <p className="text-sm text-black">{job.company}</p>

              <div className="flex gap-4 mt-1 text-sm text-black">
                <p>{job.location}</p>
                <p className="text-blue-600 font-semibold">{job.experience}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BUTTON */}
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            Apply
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
