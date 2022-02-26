import React from "react";
import "./contact.css";
import { Button } from "../components/Button";
import emailjs from "emailjs-com";

function Contact() {
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
				console.log(res);
			})
			.catch((err) => console.log(err));
	}
	return (
		<section className="contact">
			<h1>Contact</h1>
			<div className="line">
				<hr></hr>
				<hr></hr>
				<hr></hr>
			</div>
			<p className="contact-note">
				Entrar em contacto comigo, por favor usar o formulário em baixo.
			</p>
			<form onSubmit={sendEmail}>
				<input type="text" placeholder="Nome" name="name" required />
				<input type="email" placeholder="Email" name="user_email" required />
				<input type="text" placeholder="Assunto" name="subject" required />
				<textarea placeholder="Mensagem" name="message" required></textarea>
				<div className="button-contianer">
					<Button
						className="btns"
						buttonStyle="btn--primary"
						buttonSize="btn--large"
						type="submit"
					>
						SUBMETER
					</Button>
				</div>
			</form>
		</section>
	);
}

export default Contact;
