import './form.css'

const Contact = () => {
  return (
    <>
      <div className="content">
        <form onsubmit="sendEmail(); reset(); return false" netlify>
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Your Email" required />
          <input
            type="text"
            id="phone"
            placeholder="Your phone number (optional)"
          />
          <textarea
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

export default Contact
