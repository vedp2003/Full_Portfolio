import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0fvr9b2", // EmailJS service ID
        "template_x72nfpw", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "tieReNFiw3PAMt4Nt" // Public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000, 
          });
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send the message. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <section className="contact">
      {/* Toast notification container */}
      <ToastContainer />
      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h1>Contact Me</h1>
          <div className="info-item">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <p>vedp2003@gmail.com</p>
          </div>
          <div className="info-item">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <p>+1 732-374-32</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-card">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
