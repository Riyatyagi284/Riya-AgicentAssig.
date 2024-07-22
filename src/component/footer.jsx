import React from 'react'
import './CompoCss/footer.css';
import mailImg from "../../public/assets/mail.png";
import { NavLink } from 'react-router-dom';
import {footerData} from "../data/data.js"

const footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="footer-top">
        <p><img src={mailImg} alt="" />Sign Up To Shop Now</p>
        <div className='subscribe-input'>
          <input type="text" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className='footCol-parent'>

          {footerData.map((section) => (
            <div className={`col${section.id}`} key={section.id}>
              <h4>{section.data}</h4>
              {section.subData && Array.isArray(section.subData) ? (
                section.subData.map((item, index) => (
                  <NavLink key={index} to="/">{item}</NavLink>
                ))
              ) : (
                <NavLink to="/">{section.subData}</NavLink>
              )}
              {section.img && <img src={section.img} alt="Footer section" style={{width:'60%' , height: 'auto'}} />}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default footer
