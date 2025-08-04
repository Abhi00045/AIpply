import React from "react";
import "./InterviewStats.css";
import AiVideo from "../public/Ai_AIPPLY.mp4";

const InterviewStats = () => {
  return (
    <div className="interview-container">
      {/* Left: Video and Chat */}
      <div className="interview-left">
        <div className="interview-video-box">
          <video
            className="interview-video"
            src={AiVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        </div>
        <div className="interview-chat-box">
          <h4 className="interview-chat-title">Interview Conversation</h4>
          <div className="interview-chat-message">
            <strong>AI Interviewer:</strong> Hey Dev, welcome! What motivated you to apply for our Mern dev role at Hexawave tech?
          </div>
        </div>
      </div>

      {/* Right: Stats */}
      <div className="interview-right">
        <h2 className="interview-heading">
          Active interviews<br />and assessments
        </h2>
        <h1 className="interview-big-number">100+</h1>
        <p className="interview-description">
          The number of AI-powered interviews conducted monthly continues to grow exponentially, making RecruitAI the
          leading choice for intelligent hiring solutions.
        </p>

        <div className="interview-stats">
          <div className="interview-stat-card interview-blue">
            <h3>Interview Quality</h3>
            <p className="interview-percent">98%</p>
          </div>
          <div className="interview-stat-card interview-purple">
            <h3>Time Saved</h3>
            <p className="interview-percent">75%</p>
          </div>
          <div className="interview-stat-card interview-green">
            <h3>Cost Reduction</h3>
            <p className="interview-percent">60%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewStats;
