import React, { useState } from 'react';

function Personal() {

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;  
  const userEmail = user.email;

  const [form, setForm] = useState({
    userId,
    fullName: "",
    countrycode: "+91",
    phonenumber: "",
    state: "",
    address: "",
    skills: "",
    about: "",
    email: userEmail,
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save to backend
  const saveProfile = async () => {
    const payload = {
      userId,
      fullName: form.fullName,
      email: form.email,
      countrycode: form.countrycode,
      phonenumber: form.phonenumber,
      state: form.state,
      address: form.address,
      skills: form.skills.split(",").map((s) => s.trim()),
      about: form.about,
    };

    const res = await fetch("http://localhost:3011/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Saved Profiled", data);
    alert("Profile Saved Successfully!");

    
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />

      <div className="numersection">
        <select
          name="countrycode"
          value={form.countrycode}
          onChange={handleChange}
        >
          <option value="+91">+91 (India)</option>
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+61">+61 (Australia)</option>
          <option value="+81">+81 (Japan)</option>
          <option value="+49">+49 (Germany)</option>
          <option value="+33">+33 (France)</option>
          <option value="+86">+86 (China)</option>
        </select>

        <input
          type="number"
          placeholder="Phone number"
          name="phonenumber"
          value={form.phonenumber}
          onChange={handleChange}
        />
      </div>

      <input
        placeholder="State"
        name="state"
        value={form.state}
        onChange={handleChange}
      />

      <input
        placeholder="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
      />

      <input
        placeholder="Skills (comma separated)"
        name="skills"
        value={form.skills}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="About"
        name="about"
        value={form.about}
        onChange={handleChange}
      />

      <button onClick={saveProfile}>Save</button>
    </div>
  );
}

export default Personal;
