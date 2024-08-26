import HomeWelcome from "../components/Home/HomeWelcome";
import HomeAbout from "../components/Home/HomeAbout";
import OpeningHours from "../components/Contact/OpeningHours";
import FindUs from "../components/Contact/FindUs";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../components/Home/HomeGallery.css";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>The Ashville Steakhouse</title>
        </Helmet>
        <HomeWelcome />
        <HomeAbout />
        <OpeningHours />
        <FindUs />
        <GalleryComponent customClass="homeGallery" />
      </HelmetProvider>
    </>
  );
}
