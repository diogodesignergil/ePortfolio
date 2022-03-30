import React from "react";
import "./footer.css";

import Fiverr from "../../../asset/img/fiverr.png";

function Footer() {
	return (
		<footer>
			<div className="copyright">Copyright &copy; 2022</div>
			<div className="social">
				<ul className="social-icons icon-circle icon-zoom list-unstyled list-inline">
					<li>
						<i className="fab fa-linkedin-in"></i>
					</li>
					<li>
						<i className="fab fa-github-alt"></i>
					</li>
					<li>
						<i className="fab fa-codepen"></i>
					</li>
					{/* <li>
						<img src={Fiverr} />
					</li> */}
					<li>
						<i className="fab fa-twitter"></i>
					</li>
					<li>
						<i className="fab fa-patreon"></i>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
