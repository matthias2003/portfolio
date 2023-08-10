import "./Contact.css";

function Contact() {
  return (
    <div className="contact__wrap">
      <h2>Get in touch with me!</h2>
      <div className="form__wrap">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="E-mail address" />
        <input type="text" name="subject" placeholder="Subject" />
        <input type="text" name="message" placeholder="Message" />
      </div>
    </div>
  );
}

export default Contact;
