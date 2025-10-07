import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope, faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: `Thanks, ${formData.name}! I will get back to you soon.`,
      confirmButtonColor: "#24583C",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rohan-batman/",
      icon: faLinkedin,
      label: "LinkedIn",
      color: "text-blue-600",
    },
    {
      href: "https://github.com/RohanR05",
      icon: faGithub,
      label: "GitHub",
      color: "text-gray-800",
    },
    {
      href: "https://www.facebook.com/rohan.kabir.877108",
      icon: faFacebook,
      label: "Facebook",
      color: "text-blue-500",
    },
    {
      href: "https://wa.me/8801906647607",
      icon: faWhatsapp,
      label: "WhatsApp",
      color: "text-green-500",
    },
  ];

  const contactInfo = [
    { icon: faEnvelope, label: "Email", value: "rohankabir061@gmail.com" },
    { icon: faPhone, label: "Phone", value: "+8801906647607" },
    { icon: faMapMarkerAlt, label: "Location", value: "Narail, Bangladesh" },
    { icon: faClock, label: "Availability", value: "Available for Work" },
  ];

  return (
    <section className="max-w-7xl mx-auto p-8 bg-secondary rounded-2xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-primary">
        Contact Me <span className="text-neutral">📞</span>
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Let's Connect</h3>
          {contactInfo.map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 p-4 bg-accent rounded-xl shadow-md">
              <FontAwesomeIcon icon={icon} className="text-primary text-2xl" />
              <div>
                <p className="text-sm text-primary/70">{label}</p>
                <p className="text-primary font-semibold">{value}</p>
              </div>
            </div>
          ))}

          <div className="mt-4 flex flex-wrap gap-4">
            {socialLinks.map(({ href, icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-accent shadow-md hover:scale-110 transition-transform"
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} className={`text-xl ${color}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full md:w-2/3 bg-accent p-8 rounded-2xl shadow-md"
          noValidate
        >
          <h3 className="text-2xl font-semibold text-center md:text-left mb-4 text-primary">
            Or send me a message
          </h3>

          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-primary">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-base-100 text-primary focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-primary">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-base-100 text-primary focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-base-100 text-primary resize-none focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-primary text-secondary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 transition-transform hover:scale-105"
          >
            Send Message
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
