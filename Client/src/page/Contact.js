import React from "react";
import "./contact.css";
import { Button } from "../components/Button";

function Contact() {
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
			<form>
				<input type="text" placeholder="Nome" required />
				<input type="email" placeholder="Email" required />
				<input type="text" placeholder="Assunto" required />
				<textarea placeholder="Mensagem" required></textarea>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					type="submit"
				>
					SUBMETER
				</Button>
			</form>
		</section>
	);
}

export default Contact;
