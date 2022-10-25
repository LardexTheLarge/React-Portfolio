import React from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_7v7x9jn",
        "template_q5exi9r",
        e.target,
        "ihMVaBqfAPtK1kL-1"
      )
      .then(
        (result) => {
          window.location.reload();
          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <h2 className="m-3 text-center">Contact Me</h2>
      <div className="container py-4">
        <form
          className="contactForm was-validated bg-dark text-light rounded p-3"
          onSubmit={sendEmail}
        >
          <input type="hidden" name="contact_number" />
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="from_name"
            placeholder="Name"
            required
            id="name"
          />
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="reply_to_email"
            placeholder="email@email.com"
            required
            id="emailAddress"
          />
          <label htmlFor="validationTextarea" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            required
            placeholder="Message"
            id="validationTextarea"
          />
          <button
            className="btn mt-2 bg-primary text-light rounded"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <h2 className="m-3 text-center">0gabevee0@gmail.com</h2>
    </div>
  );
}
