import {Cardbutton} from "./button"; 
import "./cards.css";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function BikeCard({cardImg, heading, descrip, link, durations, price, route}) {
    return (
        <div className="cards">
            <div className="card_img">
                <img src={cardImg} alt="" />
            </div>
            <div className="card_text">
                <div className="card_text_section">
                    <a href="#" className="tour_head"><h2 className="card_headings">{heading}</h2></a>
                </div>
                {/* <div className="card_text_section">
                    <p className="card_para">{descrip}</p>
                </div> */}
                <div className="card_text_seection">
                    <div className="route_section">
                        {route}
                    </div>
                </div>
                <div className="card_text_section">
                <p className="time">
                    <FontAwesomeIcon className="icons" icon={faCalendar} />
                    {durations}</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-6">
                        <p className="start_from">Starting from <br /> <span className="card_price">&#8377;{price}</span></p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <Link to={link}>
                            <Cardbutton label="View Tour" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeCard;