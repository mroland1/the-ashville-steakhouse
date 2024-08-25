import "./HomeWelcome.css";
import photo1 from "../../assets/imgs/home/photo1.jpg";
import photo2 from "../../assets/imgs/home/photo2.jpg";
import photo3 from "../../assets/imgs/home/photo3.jpg";
import logo from "../../assets/logo.png";

export default function Welcome() {
  return (
    <div id="welcome">
      <div id="welcomeText">
        <img src={logo} alt="logo" className="logo" />
        <h1>The Ashville Steakhouse</h1>
        <p>🏆 Award winning steakhouse in Bristol</p>
      </div>
      <div id="welcomePhotos">
        <div className="column">
          <img src={photo1} alt="welcomePhoto" className="photo" />
        </div>
        <div className="column">
          <img src={photo2} alt="welcomePhoto" className="photo" />
        </div>
        <div className="column">
          <img src={photo3} alt="welcomePhoto" className="photo" />
        </div>
      </div>
    </div>
  );
}
