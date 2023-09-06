import "./Contact.css";

function Contact() {
  return (
    <div className="contact__wrap">
      <h2>Get in touch with me!</h2>
      <form className="form__wrap" id="contact">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="E-mail address" />
        <input type="text" name="subject" placeholder="Subject" />
        <input type="text" name="message" placeholder="Message" />
      </form>
      <button form="contact">Send!</button>
    </div>
  );
}

export default Contact;
