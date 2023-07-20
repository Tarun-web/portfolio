import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="title">Send me a message!</h2>
      <div className="desc">
        <p>
          Got a question or proposal, or just want to say hello? Please feel
          free Go ahead.
        </p>
      </div>
      <form action="">
        <div className="details">
          <div className="left">
            <label className="nameLabel" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              autoComplete="off"
            />
          </div>
          <div className="right">
            <label className="emailLabel" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="message">
          <label className="messageLabel" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            cols="30"
            rows="1"
            placeholder="Whatever you need to discuss, lets do it!"
          ></textarea>
        </div>

        <div className="submit">
          <button className="btn">Send &rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
