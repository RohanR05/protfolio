import React, { useState } from "react";
import Swal from "sweetalert2";
import imgFacebook from "../../../assets/facebook_3536394.png";
import imgGitHub from "../../../assets/github_733609.png";
import imgLinkedIn from "../../../assets/linkedin_3992606.png";
import imgWhatsApp from "../../../assets/logo_15713434.png"; // Replace with your actual WhatsApp icon path

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

    // TODO: Integrate backend email sending here

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: `Thanks, ${formData.name}! I will get back to you soon.`,
      confirmButtonColor: "#24583C",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-12 max-w-5xl">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-[#24583C]">
        Contact Me 📞
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-center gap-16">
        {/* Social Icons */}
        <div className="flex flex-col items-center w-full md:w-1/3 gap-8">
          {[
            {
              href: "https://www.linkedin.com/in/rohan-batman/",
              img: imgLinkedIn,
              label: "LinkedIn",
              color: "#0077B5",
              alt: "LinkedIn",
            },
            {
              href: "https://github.com/RohanR05",
              img: imgGitHub,
              label: "GitHub",
              color: "#181717",
              alt: "GitHub",
            },
            {
              href: "https://www.facebook.com/rohan.kabir.877108",
              img: imgFacebook,
              label: "Facebook",
              color: "#1877F2",
              alt: "Facebook",
            },
            {
              href: "https://wa.me/8801906647607",
              img: imgWhatsApp,
              label: "WhatsApp",
              color: "#25D366",
              alt: "WhatsApp",
            },
          ].map(({ href, img, label, color, alt }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label={alt}
            >
              <img src={img} alt={alt} className="w-10 h-10" />
              <span className="font-semibold" style={{ color }}>
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full md:w-2/3"
          noValidate
        >
          <h3 className="text-2xl font-semibold text-center md:text-left mb-4">
            Or send me a message
          </h3>

          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-200"
            >
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
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-200"
            >
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
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-semibold text-gray-800 dark:text-gray-200"
            >
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
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#24583C] text-white px-6 py-3 rounded hover:bg-[#1f4d30] transition w-full font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
