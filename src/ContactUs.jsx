import React from "react";
import './CSS/ContactUs.css';
import Navbar from "./Navbar";
import img6 from './Images/img6.jpg';
import Footer from './Footer';

function ContactUs() {

    const SendMessage = () => {
        alert("Thank You for Reaching Us. We will Update this feature soon.");
    }

    return (
        <>
            <Navbar />
            <div class="container_1">
                <div class="intro_div">
                    <form>
                        <div className="input_div">
                            <label><i class="far fa-user aboutus_icon"></i></label>
                            <input autocomplete="off" placeholder="Enter Your Name" type="name" name="name" id="name_id" />
                        </div>

                        <div className="input_div">
                            <label><i class="far fa-envelope aboutus_icon"></i></label>
                            <input autocomplete="off" type="email" placeholder="Enter Your Email" name="email" id="email_id" />
                        </div>

                        <div className="ta_div">
                            <label><i class="far fa-comments aboutus_icon"></i></label>
                            <textarea autocomplete="off" name="message" placeholder="Enter Message" id="textarea_id" cols="30" rows="10"></textarea>
                        </div>

                        <button value="submit" onClick={SendMessage} class="send_btn">Send</button>
                    </form>
                </div>
                <img src={img6} className="Aboutus_img" alt="" />
            </div>
            <Footer/>
        </>
    );
}

export default ContactUs;