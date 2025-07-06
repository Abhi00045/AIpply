import React from "react";

const JobCards = () => {
  const cardStyle = {
    border: "2px solid #645bff",
    borderRadius: "20px",
    padding: "20px",
    margin: "20px",
    width: "350px",
    display: "flex",
    flexDirection: "column",  
    justifyContent: "space-between",
    Gap: "10px",
    minHeight: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };
  const roleColour = {
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  };


  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const logoStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const badge = {
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    margin: "5px",
    display: "inline-block",
  };

  const remoteBadge = { ...badge, backgroundColor: "#dce9ff", color: "#3f5efb" };
  const easyBadge = { ...badge, backgroundColor: "#d6ffe0", color: "#00b262" };
  const hardBadge = { ...badge, backgroundColor: "#ffe0e0", color: "#ff4d4d" };
  const skillBadge = {
    ...badge,
    backgroundColor: "#f1f1f1",
    color: "#333",
    fontWeight: "normal",
  };

  const section = {
    marginTop: "10px",
    fontSize: "14px",
    color: "#444",
  };

  const label = {
    fontWeight: "bold",
    color: "#000",
    marginRight: "5px",
  };

  const buttonGroup = {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
  };

  const btn = {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const detailBtn = {
    ...btn,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    color: "#333",
  };

  const applyBtn = {
    ...btn,
    backgroundColor: "#3f5efb",
    color: "#fff",
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" ,  }}>
      {/* Job Card 1 */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="logo"
            style={logoStyle}
          />
          <div style={roleColour}>
            <h3 style={{ margin: 0 ,  }}>Frontend Developer</h3>
            <small>Chai aur Code</small>
          </div>
        </div>
        <div>
          <span style={remoteBadge}>Remote</span>
          <span style={easyBadge}>Easy</span>
          <div>
            <span style={skillBadge}>javascript</span>
            <span style={skillBadge}>reactjs</span>
          </div>
        </div>
        <div style={section}>
          <div>
            <span style={label}>Salary:</span>3 - 5 LPA
          </div>
          <div>
            <span style={label}>Location</span>Mumbai
          </div>
          <div>
            <span style={label}>Experience:</span>1 years
          </div>
          <div>
            <span style={label}>Job Type:</span>full-time
          </div>
          <div>
            <span style={label}>Openings:</span>1
          </div>
        </div>
        <div style={buttonGroup}>
          <button style={detailBtn}>Details</button>
          <button style={applyBtn}>Apply Now</button>
        </div>
      </div>

      {/* Job Card 2 */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="logo"
            style={logoStyle}
          />
          <div style={roleColour}>
            <h3 style={{ margin: 0 ,  }}>Frontend Developer</h3>
            <small>Chai aur Code</small>
          </div>
        </div>
        <div>
          <span style={remoteBadge}>Remote</span>
          <span style={easyBadge}>Easy</span>
          <div>
            <span style={skillBadge}>javascript</span>
            <span style={skillBadge}>reactjs</span>
          </div>
        </div>
        <div style={section}>
          <div>
            <span style={label}>Salary:</span>3 - 5 LPA
          </div>
          <div>
            <span style={label}>Location</span>Mumbai
          </div>
          <div>
            <span style={label}>Experience:</span>1 years
          </div>
          <div>
            <span style={label}>Job Type:</span>full-time
          </div>
          <div>
            <span style={label}>Openings:</span>1
          </div>
        </div>
        <div style={buttonGroup}>
          <button style={detailBtn}>Details</button>
          <button style={applyBtn}>Apply Now</button>
        </div>
      </div>

      {/* Job Card 2 */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="logo"
            style={logoStyle}
          />
          <div style={roleColour}>
            <h3 style={{ margin: 0 ,  }}>Frontend Developer</h3>
            <small>Chai aur Code</small>
          </div>
        </div>
        <div>
          <span style={remoteBadge}>Remote</span>
          <span style={easyBadge}>Easy</span>
          <div>
            <span style={skillBadge}>javascript</span>
            <span style={skillBadge}>reactjs</span>
          </div>
        </div>
        <div style={section}>
          <div>
            <span style={label}>Salary:</span>3 - 5 LPA
          </div>
          <div>
            <span style={label}>Location</span>Mumbai
          </div>
          <div>
            <span style={label}>Experience:</span>1 years
          </div>
          <div>
            <span style={label}>Job Type:</span>full-time
          </div>
          <div>
            <span style={label}>Openings:</span>1
          </div>
        </div>
        <div style={buttonGroup}>
          <button style={detailBtn}>Details</button>
          <button style={applyBtn}>Apply Now</button>
        </div>
      </div>

      {/* Job Card 2 */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="logo"
            style={logoStyle}
          />
          <div style={roleColour}>
            <h3 style={{ margin: 0 ,  }}>Frontend Developer</h3>
            <small>Chai aur Code</small>
          </div>
        </div>
        <div>
          <span style={remoteBadge}>Remote</span>
          <span style={easyBadge}>Easy</span>
          <div>
            <span style={skillBadge}>javascript</span>
            <span style={skillBadge}>reactjs</span>
          </div>
        </div>
        <div style={section}>
          <div>
            <span style={label}>Salary:</span>3 - 5 LPA
          </div>
          <div>
            <span style={label}>Location</span>Mumbai
          </div>
          <div>
            <span style={label}>Experience:</span>1 years
          </div>
          <div>
            <span style={label}>Job Type:</span>full-time
          </div>
          <div>
            <span style={label}>Openings:</span>1
          </div>
        </div>
        <div style={buttonGroup}>
          <button style={detailBtn}>Details</button>
          <button style={applyBtn}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
