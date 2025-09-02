import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import "./form.css";
import {Button} from "./button";

// images
import user from "../images/icons/user.png";
import email from "../images/icons/email.png";
import phone from "../images/icons/phone.png";
import calendar from "../images/icons/calendar.png";
import audience from "../images/icons/audience.png";

function Form(){
    return(
        <>
        
            <form action="" className='form_contaniner'>
            <h2 className="form_heading">Book Your Trip Now</h2>
                <div className="row form_inputs">
                    <div className='col-lg-2 col-sm-6 form_input'>
                        <img src={user} alt="" /><label htmlFor="">Name</label><br />
                        <input className='heroInput' type="text" name="name" placeholder="Enter your name" />
                    </div>  
                    <div className='col-lg-2 col-sm-6 form_input'>
                        <img className='email' src={email} alt="" /><label htmlFor="">Email</label><br />
                        <input className='heroInput' type="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className='col-lg-2 col-sm-6 form_input'>
                        <img className='email' src={phone} alt="" /><label htmlFor="">Number</label><br />
                        <input className='heroInput' type="number" name="number" placeholder="Phone number" />
                    </div>
                    <div className='col-lg-2 col-sm-6 form_input'>
                        <img className='email' src={calendar} alt="" /><label htmlFor="">Date</label><br />
                        <Flatpickr
                            options={{ dateFormat: 'Y-m-d', minDate: 'today' }}
                            placeholder="Select Trip Date"
                            className="heroInput"
                        />
                    </div>
                    <div className='col-lg-2 col-sm-12 form_input'>
                        <img src={audience} alt="" /><label htmlFor="">Persons</label><br />
                        <input className='heroInput' type="number" name='person' placeholder='No. of persons' />
                    </div>
                    <div className='col-lg-2 col-sm-12 hero_submit_butn'>
                        <Button className='form_butn' label="Submit" />
                    </div>
                </div>
            </form>
        </>
    )
}


export default Form;