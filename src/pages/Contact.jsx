import OpeningHours from "../components/Contact/OpeningHours"
import "../components/Contact/Contact.css"
import FindUs from "../components/Contact/FindUs"

export default function Contact() {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <FindUs customClass="contactFindUs"/>
            <OpeningHours customClass="contactOpeningHours"/>
        </div>
    )
}