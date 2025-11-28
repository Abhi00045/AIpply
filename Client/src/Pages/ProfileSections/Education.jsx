import React, { useState } from "react";

function Education() {

    const user = JSON.parse(localStorage.getItem("user"));
  const userID = user.id;
  const [edu, setEdu] = useState({
    university: "",
    degree: "",
    major: "",
    startDate: "",
    endDate: "",
  });

  const [educationList, setEducationList] = useState([]);

  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    const updatedList = [...educationList, edu];
    setEducationList(updatedList);

    // Reset Form
    setEdu({
      university: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
    });

    // Prepare request body
    const reqBody = {
      userId: userID,
      education: updatedList,
    };

    const res = await fetch("http://localhost:3011/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();
    console.log("Education Saved:", data);
    alert("Education Added!");
  };

  return (
    <div>
      <h2>Education Details</h2>

      <input
        type="text"
        name="university"
        placeholder="University/College name"
        value={edu.university}
        onChange={handleChange}
        required
      />

      <select
        name="degree"
        value={edu.degree}
        onChange={handleChange}
        required
      >
        <option value="">Select Degree</option>
        <option value="B.Tech">B.Tech</option>
        <option value="M.Tech">M.Tech</option>
        <option value="B.Sc">B.Sc</option>
        <option value="M.Sc">M.Sc</option>
        <option value="Diploma">Diploma</option>
        <option value="Other">Other</option>
      </select>

      <select
        name="major"
        value={edu.major}
        onChange={handleChange}
        required
      >
        <option value="">Select Major</option>
        <option value="Computer Science and Engineering">CSE</option>
        <option value="Information Technology">IT</option>
        <option value="Electronics and Communication">ECE</option>
        <option value="Electrical and Electronics">EEE</option>
        <option value="Mechanical Engineering">Mechanical</option>
        <option value="Civil Engineering">Civil</option>
        <option value="Chemical Engineering">Chemical</option>
      </select>

      <input
        type="date"
        name="startDate"
        value={edu.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        required
      />

      <input
        type="date"
        name="endDate"
        value={edu.endDate}
        onChange={handleChange}
        placeholder="End Date"
        required
      />

      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default Education;
