import React from "react";
import "./About.css";
import about from "../../Picture/about1.jpg";
function About() {
  return (
    <div>
      <div className="control_about">
        <div className="description_picuter">
          <img src={about} alt="" />
        </div>
        <div className="tittle_about center">
          <h4>Our Mission</h4>
        </div>
        <div className="component_about">
          <div className="picturAbout">
            <img src={about} alt="" />
          </div>
          <div className="picturAbout">
            <h2>About Us</h2>
            <h4>
              Certainly! Based on the text from the image, here is a paragraph
              about Hope Academy: Hope Academy is a private Special Education
              school recognized by the Connecticut State Department of
              Education, catering to students from grades 1 through 12 who have
              faced challenges in conventional academic environments. The
              academy extends Transition Services for young adults aged 18 to
              22, equipping them with the necessary skills for post-secondary
              education, career paths, and independent living. With an emphasis
              on small class sizes, specialized instruction, and intensive
              clinical services, Hope Academy provides a nurturing environment
              that includes therapeutic support. The curriculum is rigorous,
              with a focus on college and career readiness, and integrates
              explicit instruction in social-emotional learning,
              self-regulation, and executive functioning skills. Hope Academy is
              open to inquiries and referrals from parents, school districts,
              and community agencies, and is committed to addressing the unique
              needs of each student through a collaborative and dedicated
              approach.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
