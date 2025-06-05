import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Create Job Posting',
    desc: 'Create a job posting with all the details',
    icon: '📄',
  },
  {
    title: 'Smart Application Process',
    desc: 'Smart application process with invitation and matching',
    icon: '📬',
  },
  {
    title: 'AI Interview Session',
    desc: 'AI Interview Session with video and audio',
    icon: '🎥',
  },
  {
    title: 'Analytics & Results',
    desc: 'Get detailed analytics and results',
    icon: '📊',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How it works</h2>
      <p className="subtitle">
        Simple, streamlined process from profile to hire in just a few steps.
      </p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            className={`step ${index !== steps.length - 1 ? 'with-line' : ''}`}
            key={index}
          >
            <div className="icon-circle">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
