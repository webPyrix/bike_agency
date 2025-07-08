import { Link } from "react-router-dom";
import "./nav.css";

import bars from "../images/icons/bar.png";
import logo from "../images/logo.png";
import search from "../images/icons/search.png";
import facebook from "../images/icons/social/facebook.png";
import instagram from "../images/icons/social/instagram.png";

import {Button} from "./button";

function Nav(){
    return (

        <nav className="container-fluid">
            <div className="container nav_parent">
                <div className="col-12 nav_bar">
                <div className="row flex-column align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-11 top_nav">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="top_nav_text">
                                <p className="paragraphs">Welcome To Travel To Himalaya</p>
                            </div>
                            <div className="social_media d-flex align-items-center">
                                <img src={facebook} alt="" />
                                <img src={instagram} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 main_nav">
                        <div className="row">
                            <div className="col-5 d-flex align-items-center">
                                <img className="bars" src={bars} alt="" />
                                <form action="" className="nav_form nav_form_left">
                                    <input placeholder="Search" type="text" className="nav_search" />
                                    <button type="submit"><img src={search} alt="" /></button>   
                                </form>

                                <ul className="nav_links">
                                    <li>
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="nav-link">About</Link>
                                    </li>

                                    <li>Bikes</li>
                                </ul>
                            </div>
                            <div className="col-2 d-flex justify-content-center">
                                <img className="nav_logo" src={logo} alt="" />
                            </div>
                            <div className="col-5 d-flex align-items-center justify-content-end">
                                <ul className="nav_links">
                                    <li>Packages</li>
                                    <li>Gallery</li>
                                    <li>FAQ's</li>
                                </ul>
                                <Button className="nav_button" label="Contact Us" />
                                <form action="" className="nav_form nav_form_right">
                                    <input placeholder="Search" type="text" className="nav_search" />
                                    <button type="submit"><img src={search} alt="" /></button>   
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </nav>
    )
}



export default Nav;