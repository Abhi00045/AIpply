import React from 'react'

function Personal() {
  return (
    <div>
    <input type="text" placeholder="Name" />

                <div className="numersection">
                <select className="">
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+86">+86 (China)</option>
                 </select>
                <input type="number" placeholder="Phone number"/>
                </div>
                <input placeholder="State" />
                <input placeholder="Address" />
                <input placeholder="Skills (comma separated)" />
                <input type="text" placeholder="About" />
                <button>Save</button>    
    </div>
  )
}

export default Personal