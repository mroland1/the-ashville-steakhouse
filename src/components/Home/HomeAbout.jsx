import "./HomeAbout.css";
import MenuButton from "../MenuButton";
import photo from "../../assets/imgs/home/photo4.jpg";

export default function HomeAbout() {
  return (
    <div id="about">
      <div id="aboutPhoto">
        <img src={photo} alt="welcomePhoto" />
      </div>
      <div id="aboutText">
        <h2>About Us</h2>
        <p>
          A steakhouse and British restaurant in Southville, Bristol, serving
          locally sourced and organic food with a bespoke wine list. Perfect for
          a luxurious and good value lunch during the week, a family Sunday
          roast, or pre-theatre dining. We also serve a selection of real ales
          and guest ciders.
        </p>
        <MenuButton />
      </div>
    </div>
  );
}
