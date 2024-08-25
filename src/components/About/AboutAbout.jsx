import "./AboutAbout.css";
import MenuButton from "../MenuButton";
import photo from "../../assets/imgs/about/photo.jpg";

export default function AboutAbout() {
  return (
    <div>
      <h2 id="aboutHeading">About</h2>
      <div id="aboutAbout">
        <div>
          <MenuButton />
          <p>
            At the Ashville you will discover a great environment to relax and
            unwind. A good food pub and Steakhouse on the south side of Bristol,
            Southville Bedminster, serving a mouth-watering range of classic
            steak cuts, as well as a wide variety of timeless English dishes.
          </p>
          <ul>
            <li>Sunday lunches available</li>
            <li>
              Famous for our biggest T-bone steak challenge (72oz's of pure
              beef)
            </li>
            <li>Great choice of real ales, ciders, wines and cocktails</li>
            <li>A great place to celebrate</li>
            <li>Children welcome</li>
          </ul>
          <p>
            Our friendly and accommodating staff will ensure that you will
            experience the best of what we have to offer.
          </p>
          <MenuButton />
        </div>
        <div>
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
}
