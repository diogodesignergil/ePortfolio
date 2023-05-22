import React from "react";
import "./contact.css";

import { Button } from "../../../../components/button/Button";

import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5n2vtk8",
        "template_kqa4j7u",
        e.target,
        "user_f2ecmxnUHgpBDOPsRCC9l"
      )
      .then((res) => {
        document.getElementById("contactForm").reset();
        toast.success("A sua mensagem foi enviado!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="contact" id="contact">
      <ToastContainer theme="dark" />
      <h1>{t("contact.title")}</h1>
      <p className="contact-note">{t("contact.info")}</p>
      <form onSubmit={sendEmail} id="contactForm">
        <input
          type="text"
          placeholder={t("contact.name")}
          name="name"
          required
        />
        <input type="email" placeholder="Email" name="user_email" required />
        <input
          type="text"
          placeholder={t("contact.subject")}
          name="subject"
          required
        />
        <textarea
          placeholder={t("contact.message")}
          name="message"
          required
        ></textarea>
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          type="submit"
        >
          {t("contact.submit")}
        </Button>
      </form>
    </section>
  );
}

export default Contact;
