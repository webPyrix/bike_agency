import {Cardbutton} from "./button"; 
import "./cards.css";
import {Link} from "react-router-dom";

function BikeCard({cardImg, heading, descrip, link, durations}) {
    return (
        <div className="cards">
            <div className="card_img">
                <img src={cardImg} alt="" />
            </div>
            <div className="card_text">
                <p className="time">{durations}</p>
                <h2 className="card_headings">{heading}</h2>
                <p className="card_para">{descrip}</p>
                <Link to={link}>
                    <Cardbutton />
                </Link>
            </div>
        </div>
    )
}

export default BikeCard;