import AboutAbout from "../components/About/AboutAbout";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - The Ashville Steakhouse</title>
      </Helmet>
      <AboutAbout />
    </>
  );
}
