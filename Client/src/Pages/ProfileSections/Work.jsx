import React, { useState } from "react";

function Work() {

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user.id; 

  const [experience, setExperience] = useState({
    companyName: "",
    jobRole: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [workList, setWorkList] = useState([]);

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    // Add experience to list
    const updatedList = [...workList, experience];
    setWorkList(updatedList);

    // Reset form
    setExperience({
      companyName: "",
      jobRole: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });

    // Prepare request body for full profile update
    const reqBody = {
      userId: userID,       // pass from props or localStorage
      workExperience: updatedList,
    };

    const res = await fetch("http://localhost:3011/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();
    console.log("Saved Profile:", data);
    alert("Work Experience Added!");
  };

  return (
    <div>
      {/* Inputs */}
      <input
        type="text"
        name="companyName"
        value={experience.companyName}
        onChange={handleChange}
        placeholder="Company name"
        required
      />

      <input
        type="text"
        name="jobRole"
        value={experience.jobRole}
        onChange={handleChange}
        placeholder="Job role"
        required
      />

      <input
        type="text"
        name="location"
        value={experience.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />

      <div className="flex flex-row w-full gap-5">
        <div className="flex flex-row gap-1.5">
          <label>Start-Date</label>
          <input
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-row gap-1.5">
          <label>End-Date</label>
          <input
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <textarea
        name="description"
        className="h-25"
        value={experience.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />

      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default Work;
