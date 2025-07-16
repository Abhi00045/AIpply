import './HowItWorks.css';
import heroImage from '../public/hero-image.png'
import HowItWorks from './Howitworks';
import Contact from './contact';
import Testimonials from './Testinomals';
import InterviewStats from './videos';

const HeroSection = () => {
    return (
        <>
      <div id='scroller'>
        <section className="hero-section">
        <div className="hero-content">
          <h1>
            Uniting Talent &<br />
            Opportunity with AI
          </h1>
          <p>
            A smart recruiting platform that finds top talent and helps candidates shine with natural AI interviews, seamless resume processing, and powerful analytics.
          </p>
          <button>Get started</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Illustration" />
        </div>
      </section>
      <div id='Howitworks'>{<InterviewStats/>}</div>
       <div id='Howitworks'>{<HowItWorks/>}</div>

       <Testimonials/>
       <div id="contacts"><Contact/></div>
      </div>
       </>
    );
  };
  
  export default HeroSection;