import React from 'react'

function Education() {
  return (
    <div>
        <h2>Education Details</h2>
                    <input type="text" placeholder="Unviersity/Collage name" />
                    <select>
                    <option value="">Select Degree</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Other">Other</option>
                    </select>
                    <select>
                    <option value="">Select Major</option>
                        <option value="Computer Science and Engineering">Computer Science and Engineering (CSE)</option>
                        <option value="Information Technology">Information Technology (IT)</option>
                        <option value="Electronics and Communication">Electronics and Communication (ECE)</option>
                        <option value="Electrical and Electronics">Electrical and Electronics (EEE)</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                    </select>
                    <input type="date" placeholder="Start Date" />
                    <input type="date" placeholder="End Date" />
                    {/* <input type="checkbox" name="" id="" /> */}
                    <button>ADD</button>
    </div>
  )
}

export default Education