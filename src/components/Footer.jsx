import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="footer">
        <div>
          <h3>Follow Us</h3>
          <div>
            <ul>
              <li>
                <Link
                  to="https://www.instagram.com/theashvillesteakhouse/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/theashvillebristol"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => (window.location = "tel: +44 7864 8277756")}
                >
                  <i className="fa-solid fa-phone"></i>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    (window.location =
                      "mailto: info@theashvillesteakhouse.co.uk")
                  }
                >
                  <i className="fa-regular fa-envelope"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link to="/home" onClick={scrollToTop}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div>
          <h3>The Ashville Steakhouse</h3>
          <p>
            15 Leigh Street
            <br />
            Bristol, BS3 1SN
          </p>
          <Link onClick={() => (window.location = "tel: +44 7864 8277756")}>
            <p>Tel: +44 7864 827756</p>
          </Link>
          <Link
            onClick={() =>
              (window.location = "mailto: info@theashvillesteakhouse.co.uk")
            }
          >
            <p>
              E-mail:
              <br />
              info@theashvillesteakhouse.co.uk
            </p>
          </Link>
        </div>
      </div>
      <div className="designedBy">
        <p>Copyright &copy; The Ashville Steakhouse 2024</p>
        <p>
          <Link to="https://github.com/mroland1/" target="_blank">
            designed by Roland Márton <i className="fa-brands fa-github"></i>
          </Link>
        </p>
      </div>
    </>
  );
}
