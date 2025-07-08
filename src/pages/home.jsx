import { Button, Button2 } from "../components/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import bike1 from "../images/videos/video1.mp4";
import bike2 from "../images/videos/video2.mp4";
import bike3 from "../images/videos/video3.mp4";

import BikeCard from "../components/cards";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import about_image from "../images/about_image.png";
// import BikeCarousel from '../components/bikeCarousel';



function Home() {


    gsap.registerPlugin(ScrollTrigger);

    // const service = useRef(null);





useEffect(() => {
    const boxes = document.querySelectorAll(".services_boxes");

    const activeMap = new Map(); // Tracks GSAP timelines per box

    if (window.innerWidth < 767) {
        // ✅ MOBILE: Scroll + Click hover animation

        boxes.forEach((box) => {
            const heading = box.querySelector(".fancy-hover");
            const button = box.querySelector(".buttons2");

            // Set default states
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

            // ScrollTrigger for mobile
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

            // Click support on mobile too
            box.addEventListener("click", () => {
                resetAllExcept(box);
                tl.play();
            });
        });

        // Helper to deactivate all others
        function resetAllExcept(currentBox) {
            activeMap.forEach((timeline, box) => {
                if (box !== currentBox) {
                    timeline.reverse();
                }
            });
        }

    } else {
        // ✅ DESKTOP: Hover-based video animation

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

        // Remove click events safely
        boxes.forEach((box) => {
            box.replaceWith(box.cloneNode(true));
        });
    };
}, []);



    return (
        <>
            <header className="hero_section">
            </header>

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



            {/* bikes_section */}
            <div className="container-fluid section-p">
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
        </div>


            {/* bikes_packages */}
            <div className="container-fluid bike_packages">
                <div className="container section-p">
                    <div className="row align-items-center">
                        <div className="col-6 p-0">
                            <div className="text_section2">
                                <h2 className="headings2">Our Bike Rental <br />Packages</h2>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <div className="section_heading_box">
                                <div className="heading_box2">
                                    <h3>Bike Tours</h3>
                                </div>
                            </div>
                        </div>
                        <p className="head_para2">Choose your ride and hit the Ladakh roads geared for thrill and comfort.</p>
                    </div>


                    {/* cards */}
                    
                    <div className="container cards_parent">
                        <div className="row justify-content-evenly">
                            <div className="col-lg-4 col-md-4 col-12 card_parent d-flex justify-content-center">
                                <BikeCard
                                    heading="Himalayan Bike Package"
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    cardImg="https://himalayanrider.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-26-at-11.43.10-AM-7.jpeg"
                                    link="./about"
                                    durations="5 Days 4 Nights"
                                />


                            </div>
                            <div className="col-lg-4 col-md-4 col-12 card_parent d-flex justify-content-center">
                                <BikeCard
                                    heading="Himalayan Bike Package"
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    cardImg="https://images.unsplash.com/photo-1667186664456-464c1fda29a4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkYWtoJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D"
                                    durations="7 Days 6 Nights"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 card_parent d-flex justify-content-center">
                                <BikeCard
                                    heading="Himalayan Bike Package"
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    cardImg="https://internationalyouthclub.org/wp-content/uploads/2024/12/Leh-Ladakh-Bike-Trip-for-Couples_11zon.jpg"
                                    durations="10 Days 9 Nights"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* car packages  */}

            <div className="container-fluid car_packages">
                <div className="container section-p">
                    <div className="row align-items-center">
                        <div className="col-6 p-0">
                            <div className="text_section2">
                                <h2 className="headings2">Our Car Rental <br />Packages</h2>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                            <div className="section_heading_box">
                                <div className="heading_box2">
                                    <h3>Car Tours</h3>
                                </div>
                            </div>
                        </div>
                        <p className="head_para2">Comfortable and reliable cars for sightseeing, long routes, and everything in between.</p>
                    </div>


                    {/* cards */}
                    
                    <div className="container cards_parent">
                        <div className="row justify-content-evenly">
                            <div className="col-lg-4 col-md-4 col-12 card_parent d-flex justify-content-center">
                                <BikeCard
                                    heading="Himalayan Bike Package"
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    cardImg="https://www.himalayan-routes.com/wp-content/uploads/2016/06/20210713_120207-scaled-e1707110782205.jpg"
                                    link="./about"
                                    durations="5 Days 4 Nights"
                                />


                            </div>
                            <div className="col-lg-4 col-md-4 col-12 card_parent d-flex justify-content-center">
                                <BikeCard
                                    heading="Himalayan Bike Package"
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    cardImg="https://anamikamishra.com/wp-content/uploads/2016/09/leh-ladakh-9.jpg"
                                    durations="7 Days 6 Nights"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 card_parent d-flex justify-content-center">
                                <BikeCard
                                    heading="Himalayan Bike Package"
                                    descrip="Ride across Ladakh on a Royal Enfield Himalayan with full support."
                                    cardImg="https://images.wanderon.in/gallery/new/2025/05/22/1747907805682-lakes-of-ladakh-road-trip-7n-8d.webp"
                                    durations="10 Days 9 Nights"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid" style={{height: '100vh'}}>

            </div>

        </>
    )
}

export default Home;