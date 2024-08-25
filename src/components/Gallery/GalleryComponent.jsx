import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./GalleryComponent.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function GalleryComponent({ customClass }) {
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

  // Kép fájlnevek rendezése numerikus sorrendben
  const imageArray = Object.keys(images).sort((a, b) => {
    const numA = parseInt(a.match(/\d+/), 10);
    const numB = parseInt(b.match(/\d+/), 10);
    return numA - numB;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  function showNextImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  }

  function showPrevImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => showNextImage(),
    onSwipedRight: () => showPrevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={`gallery ${customClass}`}>
      <h2>Gallery</h2>
      <div className="galleryComponent" {...handlers}>
        <button className="img-slider-btn" onClick={showPrevImage}>
          <ArrowBigLeft />
        </button>
        <div className="gallery-wrapper">
          <div
            className="gallery-background"
            style={{ transform: `translateX(${-100 * currentIndex}%)` }}
          >
            {imageArray.map((url, index) => (
              <div
                key={index}
                className="gallery-background-image"
                style={{ backgroundImage: `url(${images[url]})` }}
              />
            ))}
          </div>
          <div
            className="gallery-track"
            style={{ transform: `translateX(${-100 * currentIndex}%)` }}
          >
            {imageArray.map((url, index) => (
              <img
                key={index}
                src={images[url]}
                alt={`Gallery ${index}`}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
        <button className="img-slider-btn" onClick={showNextImage}>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}
