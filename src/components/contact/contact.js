import "./form.css";

const Contact = () => {
  return (
    <>
      <div className="content">
        <form name="contact" onsubmit="reset(); return false" netlify>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <input
            name="phone"
            type="text"
            id="phone"
            placeholder="Your phone number (optional)"
          />
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Go on, I am all ears"
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
