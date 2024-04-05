import React from "react";
import "./Contact.css";
import about from "../../Picture/ba1.jpg";
function Contact() {
  return (
    <div>
      <div className="controll_catact">
        <div className="description_picuter">
          <img src={about} alt="" />
        </div>
        <div className="tittle_about center">
          <h4>Contact Us</h4>
        </div>
        <div className="contact_discrition">
          <div className="contact_picture">
            <img src={about} alt="" />
          </div>
          <div className="contact_picture">
            <div className="form_control">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form_control">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="name"
                id="name"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="form_control">
              <label htmlFor="name">Message</label>
              <textarea name="" id="" cols="85" rows="10"></textarea>
            </div>
            <div className="form_control">
              <input className="bg_color" type="button" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
