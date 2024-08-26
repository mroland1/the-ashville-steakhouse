import { Helmet, HelmetProvider } from "react-helmet-async";
import AboutAbout from "../components/About/AboutAbout";

export default function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About - The Ashville Steakhouse</title>
        </Helmet>
        <AboutAbout />
      </HelmetProvider>
    </>
  );
}
