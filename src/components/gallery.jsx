import { useState } from "react";

import "./gallery.css";

// gallery section images 
import img1 from "../images/gallery/gallery2.webp"
import img2 from "../images/gallery/gallery3.webp"
import img3 from "../images/gallery/gallery4.webp"
import img4 from "../images/gallery/gallery5.webp"
import img5 from "../images/gallery/gallery6.webp"
import img6 from "../images/gallery/gallery7.webp"
import img7 from "../images/gallery/gallery8.webp"
import img8 from "../images/gallery/gallery9.webp"
import img9 from "../images/gallery/gallery10.webp"
import img10 from "../images/gallery/gallery11.webp"

import arrow from "../images/icons/right.png"
import close from "../images/icons/close.png"

function Gallery() {

    const [selectedImg, setSelectedImg] = useState(null);
    
    // gallery section button scroll 
    const scrollGallery = (distance) => {
        const container = document.getElementById("galleryScroll");
        container.scrollBy({ left: distance, behavior: "smooth" });
    };


    return (
        <>

            <div className="gallery_container col-lg-7 col-md-12 col-12">


                {/* Left Button */}
                <button className="scroll-btn left" onClick={() => scrollGallery(-300)}>
                    <img src={arrow} alt="" />
                </button>

                <div className="gallery-inner-cont" id="galleryScroll">
                    <div className="gallery_pos_container">
                        <div className="inner_gallery">
                            <div className="col">
                                <div style={{ height: "60%" }}>
                                    <img loading="lazy" src={img1} alt="" onClick={() => setSelectedImg(img1)} />
                                </div>
                                <div style={{ height: "40%" }}>
                                    <img loading="lazy" src={img2} alt="" onClick={() => setSelectedImg(img2)} />
                                </div>
                            </div>
                            <div className="col">
                                <div style={{ height: "70%" }}>
                                    <img loading="lazy" src={img3} alt="" onClick={() => setSelectedImg(img3)} />
                                </div>
                                <div style={{ height: "30%" }}>
                                    <img loading="lazy" src={img4} alt="" onClick={() => setSelectedImg(img4)} />
                                </div>
                            </div>
                            <div className="col">
                                <div style={{ height: "50%" }}>
                                    <img loading="lazy" src={img5} alt="" onClick={() => setSelectedImg(img5)} />
                                </div>
                                <div style={{ height: "50%" }}>
                                    <img loading="lazy" src={img6} alt="" onClick={() => setSelectedImg(img6)} />
                                </div>
                            </div>
                            <div className="col">
                                <div style={{ height: "80%" }}>
                                    <img loading="lazy" src={img7} alt="" onClick={() => setSelectedImg(img7)} />
                                </div>
                                <div style={{ height: "20%" }}>
                                    <img loading="lazy" src={img8} alt="" onClick={() => setSelectedImg(img8)} />
                                </div>
                            </div>
                            <div className="col">
                                <div style={{ height: "65%" }}>
                                    <img loading="lazy" src={img9} alt="" onClick={() => setSelectedImg(img9)} />
                                </div>
                                <div style={{ height: "35%" }}>
                                    <img loading="lazy" src={img10} alt="" onClick={() => setSelectedImg(img10)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Button */}
                <button className="scroll-btn right" onClick={() => scrollGallery(300)}>
                    <img src={arrow} alt="" />
                </button>
            </div>
            {/* Fullscreen Viewer */}
            {selectedImg && (
                <div className="fullscreen-view" onClick={() => setSelectedImg(null)}>
                    <button className="close-btn" onClick={() => setSelectedImg(null)}>
                        <img src={close} alt="" />
                    </button>
                    <img src={selectedImg} alt="fullscreen" />
                </div>
            )}
        </>
    )
}






export default Gallery;