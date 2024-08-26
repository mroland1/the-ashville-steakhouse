import { Helmet, HelmetProvider } from "react-helmet-async";
import GridGallery from "../components/Gallery/GridGallery";

export default function Gallery() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Gallery - The Ashville Steakhouse</title>
        </Helmet>
        <GridGallery />
      </HelmetProvider>
    </>
  );
}
