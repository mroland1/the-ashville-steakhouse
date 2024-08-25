import { Helmet } from "react-helmet";
import GridGallery from "../components/Gallery/GridGallery";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery - The Ashville Steakhouse</title>
      </Helmet>
      <GridGallery />
    </>
  );
}
