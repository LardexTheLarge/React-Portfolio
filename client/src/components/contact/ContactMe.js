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
    <div className="container text-center d-flex flex-column min-vh-100">
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="reply_to_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
