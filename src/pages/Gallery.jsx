import "../styles/gallery.css";
import { useState, useEffect } from "react";

import img1 from "../assets/images/gallery/customer1.jpg";
import img2 from "../assets/images/gallery/customer2.jpg";
import img3 from "../assets/images/gallery/customer3.jpg";
import img4 from "../assets/images/gallery/customer4.jpg";
import img5 from "../assets/images/gallery/customer5.jpg";
import img6 from "../assets/images/gallery/customer6.jpg";
import img7 from "../assets/images/gallery/customer7.jpg";
import img8 from "../assets/images/gallery/customer8.jpg";
import img9 from "../assets/images/gallery/customer9.jpg";

function Gallery() {

  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9];

  const [currentIndex, setCurrentIndex] = useState(null);

  // ESC Key Close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-overlay">
          <h1>Happy Customers</h1>
          <p>A journey of trust fulfilled, as we hand over not just homes, but spaces where lifelong memories begin</p>
        </div>
      </section>

      {/* GRID */}
      <section className="gallery-section">
        <div className="container gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="customer"
              className="gallery-img"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {currentIndex !== null && (
        <div className="lightbox">

          {/* Close Button */}
          <span className="close" onClick={() => setCurrentIndex(null)}>
            &times;
          </span>

          {/* Left Arrow */}
          <span className="arrow left" onClick={prevImage}>
            &#10094;
          </span>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="preview"
            className="lightbox-img"
          />

          {/* Right Arrow */}
          <span className="arrow right" onClick={nextImage}>
            &#10095;
          </span>

        </div>
      )}
    </>
  );
}

export default Gallery;