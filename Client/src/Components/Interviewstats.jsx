import React from "react";
import AiVedio from '../public/Ai_AIPPLY.mp4'

const InterviewStats = () => {
  return (
    <div style={styles.container}>
      {/* Left Side with Video and Chat */}
      <div style={styles.left}>
        <div style={styles.videoBox}>
          <video
            style={styles.video}
            src={AiVedio} // Replace with your video URL
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
          {/* <div style={styles.bottomControls}>
            <button style={styles.iconButton}>🎙️</button>
            <button style={{ ...styles.iconButton, backgroundColor: "#f44336" }}>🔇</button>
            <button style={styles.iconButton}>📷</button>
            <button style={styles.iconButton}>😊</button>
          </div> */}
        </div>
        <div style={styles.chatBox}>
          <h4>Interview Conversation</h4>
          <div style={styles.chatMessage}>
            <strong>AI Interviewer:</strong> Hey Dev, welcome! What motivated you to apply for our Mern dev role at Hexawave tech?
          </div>
        </div>
      </div>

      {/* Right Side Text and Stats */}
      <div style={styles.right}>
        <h2 style={styles.heading}>Active interviews<br />and assessments</h2>
        <h1 style={styles.bigNumber}>100+</h1>
        <p style={styles.description}>
          The number of AI-powered interviews conducted monthly continues to grow exponentially, making RecruitAI the
          leading choice for intelligent hiring solutions.
        </p>

        <div style={styles.stats}>
          <div style={styles.statCardBlue}>
            
            <h3>Interview Quality</h3>
            <p style={styles.percent}>98%</p>
          </div>
          <div style={styles.statCardPurple}>
            <h3>Time Saved</h3>
            <p style={styles.percent}>75%</p>
          </div>
          <div style={styles.statCardGreen}>
            <h3>Cost Reduction</h3>
            <p style={styles.percent}>60%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal CSS
const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "60px",
    fontFamily: "sans-serif",
    flexWrap: "wrap",
    background: "#ffffffff",
  },
  left: {
    flex: "1 1 500px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  videoBox: {
    borderRadius: "12px",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },
  bottomControls: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "15px",
  },
  iconButton: {
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "50%",
    padding: "12px",
    fontSize: "16px",
    cursor: "default",
  },
  chatBox: {
    marginTop: "20px",
    backgroundColor: "#eef2f5",
    padding: "15px",
    borderRadius: "10px",
  },
  chatMessage: {
    marginTop: "10px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    color: "#333",
    fontSize: "14px",
  },
  right: {
    flex: "1 1 400px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#111",
  },
  bigNumber: {
    fontSize: "48px",
    color: "#3b82f6",
    margin: "10px 0",
  },
  description: {
    fontSize: "16px",
    color: "#444",
    maxWidth: "500px",
    marginBottom: "30px",
  },
  stats: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  statCardBlue: {
    background: "linear-gradient(135deg, #3b82f6, #1e40af)",
    color: "#fff",
    borderRadius: "16px",
    padding: "20px",
    flex: "1 1 180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  statCardPurple: {
    backgroundColor: "#e0e7ff",
    borderRadius: "16px",
    padding: "20px",
    flex: "1 1 180px",
    textAlign: "center",
  },
  statCardGreen: {
    backgroundColor: "#d1fae5",
    borderRadius: "16px",
    padding: "20px",
    flex: "1 1 180px",
    textAlign: "center",
  },
  percent: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default InterviewStats;
