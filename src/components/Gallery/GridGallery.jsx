import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./GridGallery.css";
import { ArrowBigLeft, ArrowBigRight, X } from "lucide-react";

export default function GridGallery({ customClass }) {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/imgs/gallery", false, /\.(png|jpe?g|svg)$/)
  );
  const imageArray = Object.keys(images);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(9);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageArray.slice(indexOfFirstImage, indexOfLastImage);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 840) {
        setImagesPerPage(8);
      } else {
        setImagesPerPage(9);
      }
    }

    window.addEventListener("resize", handleResize, { passive: true });

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  }, []);

  function goToNextPage() {
    if (indexOfLastImage < imageArray.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  function goToPrevPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  function openLightbox(imageUrl, index) {
    setSelectedImage(imageUrl);
    setSelectedIndex(index);
    setIsLightboxVisible(true);
  }

  function closeLightbox() {
    setIsLightboxVisible(false);
    setTimeout(() => {
      setSelectedImage(null);
      setSelectedIndex(null);
    }, 300);
  }

  function goToNextImage() {
    setIsTransitioning(true);
    setTimeout(() => {
      const newIndex = (selectedIndex + 1) % imageArray.length;
      setSelectedIndex(newIndex);
      setSelectedImage(images[imageArray[newIndex]]);
      setIsTransitioning(false);
    }, 500);
  }

  function goToPrevImage() {
    setIsTransitioning(true);
    setTimeout(() => {
      const newIndex =
        (selectedIndex - 1 + imageArray.length) % imageArray.length;
      setSelectedIndex(newIndex);
      setSelectedImage(images[imageArray[newIndex]]);
      setIsTransitioning(false);
    }, 500);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextImage(),
    onSwipedRight: () => goToPrevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={`gallery ${customClass}`}>
      <h2>Gallery</h2>

      <div className="gallery-grid">
        {currentImages.map((url, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{ backgroundImage: `url(${images[url]})` }}
            onClick={() => openLightbox(images[url], index + indexOfFirstImage)}
          />
        ))}
      </div>

      <div className="pagination-buttons">
        <div onClick={goToPrevPage} style={{ cursor: "pointer" }}>
          <ArrowBigLeft disabled={currentPage === 1} width={40} height={40} />
          <p>Previous</p>
        </div>
        <div onClick={goToNextPage} style={{ cursor: "pointer" }}>
          <p>Next</p>
          <ArrowBigRight
            disabled={indexOfLastImage >= imageArray.length}
            width={40}
            height={40}
          />
        </div>
      </div>

      <div
        className={`lightbox ${isLightboxVisible ? "show" : ""}`}
        onClick={closeLightbox}
        {...handlers}
      >
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X width={40} height={40} />
          </button>
          <ArrowBigLeft
            className="lightbox-arrow"
            onClick={goToPrevImage}
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
          <img
            src={selectedImage}
            alt="Selected"
            className={`lightbox-image ${
              isTransitioning ? "transitioning" : ""
            }`}
          />
          <ArrowBigRight
            className="lightbox-arrow"
            onClick={goToNextImage}
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
