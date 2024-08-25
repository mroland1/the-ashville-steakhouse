import OpeningHours from "../components/Contact/OpeningHours";
import "../components/Contact/Contact.css";
import FindUs from "../components/Contact/FindUs";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - The Ashville Steakhouse</title>
      </Helmet>
      <div className="contact">
        <h2>Contact</h2>
        <FindUs customClass="contactFindUs" />
        <OpeningHours customClass="contactOpeningHours" />
      </div>
    </>
  );
}
