// import React from 'react';
// import './HowItWorks.css';

// const steps = [
//   {
//     title: 'Create Job Posting',
//     desc: 'Create a job posting with all the details',
//     icon: '📄',
//   },
//   {
//     title: 'Smart Application Process',
//     desc: 'Smart application process with invitation and matching',
//     icon: '📬',
//   },
//   {
//     title: 'AI Interview Session',
//     desc: 'AI Interview Session with video and audio',
//     icon: '🎥',
//   },
//   {
//     title: 'Analytics & Results',
//     desc: 'Get detailed analytics and results',
//     icon: '📊',
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="how-it-works">
//       <h2>How it works</h2>
//       <p className="subtitle">
//         Simple, streamlined process from profile to hire in just a few steps.
//       </p>
//       <div className="steps-container">
//         {steps.map((step, index) => (
//           <div
//             className={`step ${index !== steps.length - 1 ? 'with-line' : ''}`}
//             key={index}
//           >
//             <div className="icon-circle">{step.icon}</div>
//             <h3>{step.title}</h3>
//             <p>{step.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    title: "Create Job Posting",
    desc: "Easily publish detailed job listings that stand out, complete with salary ranges, benefits, and skill requirements to attract top talent.",
    icon: "📄",
  },
  {
    title: "Smart Application Process",
    desc: "Our intelligent system screens applicants, matches candidates with jobs using AI, and sends automated invitations to ensure the right fit faster.",
    icon: "📬",
  },
  {
    title: "AI Interview Session",
    desc: "Schedule seamless AI-driven video interviews with real-time evaluation, speech analysis, and customizable interview questions to assess candidates effectively.",
    icon: "🎥",
  },
  {
    title: "Analytics & Results",
    desc: "Gain comprehensive insights into candidate performance, track hiring progress, and visualize key recruitment metrics with our advanced analytics dashboard.",
    icon: "📊",
  },
];


const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-header">
        <p className="section-label">How it works</p>
        <h2 className="section-title">We've simplified hiring.</h2>
        <p className="section-subtitle">
          Our streamlined process takes you from posting a job to hiring the best talent in a few simple steps.
        </p>
      </div>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-item" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

