import "./FindUs.css";
import { Link } from "react-router-dom";

export default function FindUs({ customClass }) {
  return (
    <div className={customClass}>
      <div id="findUs">
        <h2>Find Us</h2>
        <div>
          <div id="findUsContact">
            <div>
              <p>
                The Ashville Steakhouse <br />
                15 Leigh Street
                <br />
                Bristol, BS3 1SN
              </p>
              <p>
                <Link onClick={() => (window.location = "tel:+44 7864 827756")}>
                  Tel:
                  <br />
                  +44 7864 827756
                </Link>
              </p>
              <p>
                <Link
                  onClick={() =>
                    (window.location =
                      "mailto: info@theashvillesteakhouse.co.uk")
                  }
                >
                  E-mail:
                  <br />
                  info@theashvillesteakhouse.co.uk
                </Link>
              </p>
            </div>
          </div>
          <div id="findUsMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7522732299717!2d-2.6158324238765127!3d51.44434321530844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dcca9bb90f1%3A0x6362faac961c913d!2sThe%20Ashville%20Steakhouse!5e0!3m2!1sen!2shu!4v1724582463064!5m2!1sen!2shu"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="The Ashville Steakhouse"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
