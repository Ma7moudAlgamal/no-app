import "./form.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_g4l2v6n",
        "template_n5bknz8",
        formData,
        "lzYT-zWowE86NlH4X"
      )
      .then(
        (response) => {
          var x = document.getElementById("snackbar");
          x.innerHTML =
            response.text === "OK"
              ? "Message sent successfully"
              : `An error occured, please try again`;
          // Add the "show" class to DIV
          x.className = "show";

          // After 3 seconds, remove the show class from DIV
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 3000);
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form after success
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <div className="content">
        <form autoComplete="off" name="contact" onSubmit={handleSubmit}>
          <input
            name="name"
            className="hover"
            value={formData.name}
            type="text"
            id="name"
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            className="hover"
            name="email"
            value={formData.email}
            type="email"
            id="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="hover"
            name="phone"
            value={formData.phone}
            type="text"
            id="phone"
            onChange={handleChange}
            placeholder="Your phone number (optional)"
          />
          <textarea
            className="hover"
            name="message"
            value={formData.message}
            id="message"
            rows="5"
            placeholder="Go on, I am all ears"
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" id="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
