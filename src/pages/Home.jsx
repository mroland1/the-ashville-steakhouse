import HomeWelcome from "../components/Home/HomeWelcome";
import HomeAbout from "../components/Home/HomeAbout";
import OpeningHours from "../components/Contact/OpeningHours";
import FindUs from "../components/Contact/FindUs";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import "../components/Home/HomeGallery.css";

export default function Home() {
  return (
    <>
      <HomeWelcome />
      <HomeAbout />
      <OpeningHours />
      <FindUs />
      <GalleryComponent customClass="homeGallery" />
    </>
  );
}
