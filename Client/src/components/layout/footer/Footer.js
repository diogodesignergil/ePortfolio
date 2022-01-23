import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="copyright">Copyright &copy; 2022</div>
      <div className="social">
        <ul class="social-icons icon-circle icon-zoom list-unstyled list-inline">
          <li>
            <i class="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i class="fab fa-github-alt"></i>
          </li>
          <li>
            <i class="fab fa-codepen"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-patreon"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
