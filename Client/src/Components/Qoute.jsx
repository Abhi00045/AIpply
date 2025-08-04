import React from "react";
import '../Components/Quote.css'
import qouteImg from "../public/qoute.jpg"

const Quote = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-image">
        <img
          src={qouteImg}
          alt="Modern workspace representing job opportunities"
        />
      </div>
      <div className="testimonial-content">
        <blockquote className="testimonial-quote">
          “Opportunities don't happen. You create them.”
        </blockquote>
        <p className="testimonial-author">Chris Grosser</p>
        <p className="testimonial-role">Entrepreneur</p>
      </div>
    </section>
  );
};

export default Quote;
