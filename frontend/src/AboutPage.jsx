import React from "react";
import "./css/AboutPage.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-intro">

        
        <h1>
  Welcome to Vaid PR  
  <br />
  <span className="tagline">Where Every Story Finds Its Spotlight</span>
</h1>

        <h1>Welcome to Vaid PR Where Every Story Finds Its Spotlight</h1>

        <p>
          At Vaid PR, we believe that everyone has a story worth telling  and we’re here to make sure the world hears yours.
          Whether you're a business owner launching a new product, a content creator striving for recognition, or a
          professional looking to build a powerful personal brand, Vaid PR is your trusted partner in making your mark.
        </p>
        <p>
          Founded in 2023 and proudly based in Noida, India, Vaid PR was created with a vision to bridge the gap between
          ambition and attention. In a crowded digital landscape where visibility is everything, we bring your brand to the
          forefront through tailored public relations, strategic media placements, and digital branding services.
        </p>
      </section>

      <section className="about-services">
        <h2>What We Do: Turning Influence into Impact</h2>
        <ul>
          <li><b>Media Features & Publication Placement:</b> Get featured on platforms like Hindustan Times, Mid-Day, ANI, and more.</li>
          <li><b>Personal Branding & ORM:</b> Build digital authority and visibility through curated content and verified appearances.</li>
          <li><b>Content Strategy & Story Development:</b> We craft compelling press releases and brand stories tailored to your goals.</li>
          <li><b>Social Proof & Digital Trust:</b> Boost your credibility with third-party validation from respected outlets.</li>
        </ul>
      </section>

      <section className="about-process">
        <h2>How It Works: Simple. Smart. Strategic.</h2>
        <ol>
          <li><b>Share Your Vision:</b> Book a call or submit your goals.</li>
          <li><b>We Craft the Narrative:</b> Our editorial team creates a personalized story with your vision in mind.</li>
          <li><b>We Pitch, You Shine:</b> Get featured and receive all links and guidance.</li>
          <li><b>Boost Long-Term Presence:</b> We support you with continued visibility.</li>
        </ol>
      </section>

      <section className="about-why">
        <h2>Why Choose Vaid PR?</h2>
        <ul>
          <li><b>Featured on Major Media Platforms:</b> We place you where it matters.</li>
          <li><b>Perfect for Individuals & Startups:</b> No inflated pricing — just genuine value.</li>
          <li><b>Ethical & Transparent Approach:</b> Real features — no bots or black-hat PR tricks.</li>
          <li><b>Speed + Quality:</b> Fast turnaround without compromising storytelling depth.</li>
          <li><b>Growth-Oriented:</b> We're not just a service provider — we’re a long-term partner.</li>
        </ul>
      </section>

      <section className="about-founders">
        <h2>Meet Our Founders</h2>
        <div className="founders-container">
          <div className="founder-card">
            {/* <img src="/images/shakshi-vaid.jpg" alt="Shakshi Vaid" /> */}
            <h3>Shakshi Vaid</h3>
            <p className="role">Founder</p>
            <p>
              A passionate storyteller and strategic thinker, Shakshi envisioned Vaid PR as a bridge between talent and opportunity.
              With a background in communications and media, she leads with creativity, empathy, and vision.
            </p>
          </div>
          <div className="founder-card">
            {/* <img src="/images/shalini-vaid.jpg" alt="Shalini Vaid" /> */}
            <h3>Shalini Vaid</h3>
            <p className="role">Co-Founder</p>
            <p>
              With strong roots in brand development, Shalini brings depth and dynamism to the company.
              She leads operations and client strategy while ensuring every story is delivered with authenticity and impact.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <h2>Our Vision and Mission</h2>
        <p>
          Our mission is to democratize access to powerful publicity. We believe everyone deserves the chance to be seen and heard.
          Our vision is to become India’s most trusted PR platform for emerging talent, startups, and changemakers.
        </p>
      </section>

      <section className="about-conclusion">
        <h2>Let’s Grow Together</h2>
        <p>
          Whether you’re seeking to establish credibility or simply make a name for yourself, Vaid PR is here to light the path.
          We don’t just create media plans — we build brands, reputations, and legacies.
        </p>
        <p>
          Let’s make your name newsworthy. Let’s make your brand unforgettable. Let’s make your story impactful.
        </p>
        <button className="work-button">Let's Work Together</button>
      </section>
    </div>
  );
};

export default About;
