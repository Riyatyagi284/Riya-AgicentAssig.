import React from 'react'
import './CompoCss/Contact.css'
import contactImg from '../../public/assets/ContactImg.png';
import { GoPerson } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
    return (
        <div className='contact-section'>
            <h3>Let's Connect</h3>
            <div className="ContactSecond-div">

                <div className="right">
                    <form action="">
                        <div className='ist'>
                            <div className='inputField'>
                                <GoPerson />
                                <input type="text" placeholder="Name" required />
                            </div>

                            <div className='inputField'>
                                <BsTelephone />
                                <input type="number" placeholder="Phone number" required />
                            </div>
                        </div>

                        <div className='iind'>
                            <div className='inputField'>
                            <TfiEmail />
                                <input type="email" placeholder="Email address" required />
                            </div>
                        </div>

                        <textarea placeholder="Write your message here!" required></textarea>
                    </form>
                </div>

                <div className="left">
                    <img src={contactImg} alt="Hero-img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
