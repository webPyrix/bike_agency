import { Button, Button2, Cardbutton } from "../components/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import From from "../components/form";
import Gallery  from "../components/gallery";

// import bike1 from "../images/videos/video1.mp4";
// import bike2 from "../images/videos/video2.mp4";
// import bike3 from "../images/videos/video3.mp4";

import BikeCard from "../components/cards";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import about_image from "../images/about_image.webp";
// import BikeCarousel from '../components/bikeCarousel';


import img2 from "../images/gallery/gallery3.webp"
import img4 from "../images/gallery/gallery5.webp"
import img7 from "../images/gallery/gallery6.webp"




function Home() {


    gsap.registerPlugin(ScrollTrigger);

    // const service = useRef(null);





    useEffect(() => {
        const boxes = document.querySelectorAll(".services_boxes");

        const activeMap = new Map();

        if (window.innerWidth < 767) {

            boxes.forEach((box) => {
                const heading = box.querySelector(".fancy-hover");
                const button = box.querySelector(".buttons2");

                gsap.set(heading, { "--after-width": "0%" });
                gsap.set(button, { opacity: 0, y: 0 });

                const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } });

                tl.to(heading, {
                    "--after-width": "100%",
                    duration: 0.4
                });

                tl.to(button, {
                    opacity: 1,
                    y: -20,
                    duration: 0.3
                }, "<");

                activeMap.set(box, tl);

                ScrollTrigger.create({
                    trigger: box,
                    start: "top 45%",
                    end: "bottom 45%",
                    onEnter: () => {
                        resetAllExcept(box);
                        tl.play();
                    },
                    onLeave: () => tl.reverse(),
                    onEnterBack: () => {
                        resetAllExcept(box);
                        tl.play();
                    },
                    onLeaveBack: () => tl.reverse(),
                    // markers: true,
                });

                box.addEventListener("click", () => {
                    resetAllExcept(box);
                    tl.play();
                });
            });

            function resetAllExcept(currentBox) {
                activeMap.forEach((timeline, box) => {
                    if (box !== currentBox) {
                        timeline.reverse();
                    }
                });
            }

        } else {

            const allVideos = document.querySelectorAll(".service_image video");

            boxes.forEach((box) => {
                const videoId = box.getAttribute("data-img");
                const targetVideo = document.getElementById(videoId);

                box.addEventListener("mouseenter", () => {
                    gsap.to(allVideos, {
                        opacity: 0,
                        x: -200,
                        ease: "power2.out",
                        duration: 0.3
                    });

                    gsap.to(targetVideo, {
                        opacity: 1,
                        x: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                box.addEventListener("mouseleave", () => {
                    gsap.to(targetVideo, {
                        opacity: 0,
                        x: -100,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            boxes.forEach((box) => {
                box.replaceWith(box.cloneNode(true));
            });
        };
    }, []);



    return (
        <>
            <header className="hero_section">
                <div className="container main_hero_container">
                    <div className="col-12 col-md-12 col-lg-6 hero_text">
                        <h1 className="mainheading pb-2">Ladakh's Most Trusted Travel Partner</h1>
                        <p className="txt_white_para pb-4">Discover the ultimate Himalayan experience with Travel to Himalaya. From thrilling bike rides and scenic car rentals to guided treks, cozy hotel stays, and fully customizable travel packages — we’ve got everything you need to turn your mountain dreams into reality.</p>
                        {/* <Link to=""> <Button label="Book Your Trip" /></Link> */}
                    </div>

                    {/* form section  */}

                    <section>
                        <div className="container form_section">
                            <From />
                        </div>
                    </section>
                </div>
            </header>


            {/* form section  */}
            <section>
                <div className="container form_section_small">
                    <From />
                </div>
            </section>




            {/* about section  */}

            <div className="container-fluid about">
                <div className="container section-p   ">

                    <div className="row align-items-center">
                        <div className="col-6 p-0">
                            <div className="text_section">
                                <h2 className="headings">ABOUT TRAVEL TO <br /> HIMALAYA</h2>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <div className="section_heading_box">
                                <div className="heading_box">
                                    <h3>About Us</h3>
                                </div>
                            </div>
                        </div>
                        <p className="head_para">Driven by Passion, Fueled by Adventure, and Guided by the Spirit of Discovery.</p>
                    </div>



                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12 about_section_image">
                            <img src={about_image} alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12 about_section_text">
                            <h2 className="sub_headings">Founded in the heart of Leh, Ladakh, Travel to Himalya is more than just a bike rental company</h2>
                            <p className="paragraphs centerPara">—it's your gateway to the most breathtaking Himalayan rides. We specialize in providing high-performance Royal Enfield and adventure bikes for riders who want to explore Ladakh, Spiti, Manali, and beyond.</p>
                            <p className="paragraphs pb-4">With years of on-road experience, local insights, and a commitment to safety and comfort, we ensure your journey is unforgettable, wild, and worry-free.</p>
                            <Link to="/about"><Button label="Read More" /></Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* bikes_section  */}
            {/* for now we are not usign this section */}

            {/* <div className="container-fluid section-p">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-6 p-0">
                            <div className="text_section">
                                <h2 className="headings">One Stop <br />for Every Journey</h2>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <div className="section_heading_box">
                                <div className="heading_box">
                                    <h3>We Offer</h3>
                                </div>
                            </div>
                        </div>
                        <p className="head_para">Bikes, Treks, Cars, and Cozy Stays — All in One Place</p>
                    </div>
                </div>
            

            <div className="container-fluid bike-car">
                <div className="row">
                    <div className="col-4 video_section_left">
                        <div className="service_image">
                            <video
                                id="bike1"
                                src={bike1}
                                className="service-img"
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>

                            <video
                                id="bike2"
                                src={bike2}
                                className="service-img"
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>

                            <video
                                id="bike3"
                                src={bike3}
                                className="service-img"
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>
                        </div>
                    </div>
                    <div className="col-md-8 col-12 ">
                        <div className="services_boxes" data-img="bike1">
                            <div className="number_service">
                               <p className="paragraphs small_service_para">01</p> 
                            </div>
                            <div className="service_texts">
                            <h2 className="services_headings fancy-hover" data-text="Bike Rental">Bike Rental</h2>
                            <p className="paragraphs small_service_para">Himalayan 411 <span className="dot"></span> Himalayan 450 <span className="dot"></span> Royal Enfield 350 <span className="dot"></span> Royal Enfield 650</p>
                            <Link to="/about">
                                <Button2 />
                            </Link>
                            </div>
                        </div>
                        <div className="services_boxes" data-img="bike2">
                            <div className="number_service">
                               <p className="paragraphs small_service_para">02</p> 
                            </div>
                            <div className="service_texts">
                            <h2 className="services_headings fancy-hover" data-text="Car Rental">Car Rental</h2>
                            <p className="paragraphs small_service_para">XUV 500 <span className="dot"></span> Himalayan 450 <span className="dot"></span> Royal Enfield 350 <span className="dot"></span> Royal Enfield 650</p>
                            <Link to="/about">
                                <Button2 />
                            </Link>
                            </div>
                        </div>

                        <div className="services_boxes" data-img="bike3">
                            <div className="number_service">
                               <p className="paragraphs small_service_para">03</p> 
                            </div>
                            <div className="service_texts">
                            <h2 className="services_headings fancy-hover" data-text="Trekking">Trekking</h2>
                            <p className="paragraphs small_service_para">Chadar Trek <span className="dot"></span> Markha Valley Trek <span className="dot"></span> Stok Kangri Trek <span className="dot"></span> Sham Valley Trek</p>
                            <Link to="/about">
                                <Button2 />
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> */}


            {/* bikes_packages */}
            <div className="container-fluid bike_packages">
                <div className="container section-p">
                    <div className="row align-items-center">
                        <div className="col-6 p-0">
                            <div className="text_section">
                                <h2 className="headings">Our Adventure Tour <br />Packages</h2>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <div className="section_heading_box">
                                <div className="heading_box">
                                    <h3>Adventure Tours</h3>
                                </div>
                            </div>
                        </div>
                        <p className="head_para">Choose your ride and hit the Ladakh roads geared for thrill and comfort.</p>
                    </div>


                    {/* cards */}

                    <div className="container cards_parent">
                        <div className="row  justify-content-lg-evenly">
                            <div className="col-lg-4 col-md-6 col-12 card_parent d-flex justify-content-center">

                                <BikeCard
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    heading="Moto Tour Ladakh"
                                    durations="7 Days 6 Nights"
                                    cardImg={img2}
                                    price="31,000"
                                    route={
                                        <p>
                                            Leh <div className="dot"></div> Sham Valley <div className="dot"></div> Nubra <div className="dot"></div> Pangong Lake <div className="dot"></div> Tsomoriri <div className="dot"></div> Leh
                                        </p>
                                    }
                                />


                            </div>
                            <div className="col-lg-4 col-md-6 col-12 card_parent d-flex justify-content-center mt-4 mt-md-0">
                                <BikeCard
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    heading="Experience Ladakh"
                                    durations="7 Days 6 Nights"
                                    cardImg={img4}
                                    price="31,000"
                                    route={
                                        <p>
                                            Leh <div className="dot"></div> Sham Valley <div className="dot"></div> Nubra <div className="dot"></div> Turtuk <div className="dot"></div> Pangong Lake <div className="dot"></div> Leh
                                        </p>
                                    }
                                />
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 card_parent d-flex justify-content-center mt-4 mt-md-4 mt-lg-0">
                                <BikeCard
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    heading="Magical Ladakh"
                                    durations="5 Days 4 Nights"
                                    cardImg={img7}
                                    price="10,500"
                                    route={
                                        <p>
                                            Leh <div className="dot"></div> Nubra <div className="dot"></div> Pangong Lake <div className="dot"></div> Leh
                                        </p>
                                    }
                                />
                            </div>
                            <div className="col-lg-12 all_tour_btn mt-5">
                                <div className="button_div">
                                    <Link to="">
                                        <Cardbutton label="View All Packages" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* gallery section */}


            <div className="container-fluid gallery_section">
                <div className="container section-p gallery_sec">
                    <div className="row gallery_sec">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="d-flex align-items-center">
                                <div className="left-align p-0 gallery_headings">
                                    <div className="text_section gallery_heading">
                                        <h2 className="headings">Adventure <br />Gallery</h2>
                                    </div>
                                </div>
                                <div className="left-align p-0 gallery_headings">
                                    <div className="section_heading_box">
                                        <div className="heading_box">
                                            <h3>Gallery</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="head_para left-align-para">From trails to valleys, Ladakh rides are unforgettable — discover them in our gallery.</p>
                        </div>


                        <Gallery />

 
                    </div>




                </div>
            </div>





            <div className="container-fluid" style={{ height: '100vh' }}>

            </div>

        </>
    )
}

export default Home;