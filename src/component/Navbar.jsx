import React, { useState, useRef, useEffect } from 'react'
import './CompoCss/Navbar.css';
import siteLogo from "../../public/assets/logo.png";
import cartImg from "../../public/assets/cartImg.svg";
import { ImCross, ImLocation } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [openProductDropdown, setOpenProductDropdown] = useState(false);

    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenProductDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const handleDropdownClick = () => {
        navigate('/products')
    }

    return (
        <>
            <div className="banner">
                <div></div>
                <p>QUICK BUY! Get up to 25% off on All Stones</p>
                <div className="icon">
                    <ImCross />
                </div>
            </div>

            <div className='navbar-parent'>
                <div className="nav1">
                    <div className='logo' onClick={() => navigate('/')}>
                        <img src={siteLogo} alt="site-logo" />
                    </div>

                    <div className='nav1-rightParent'>
                        <div className='input-wrapper'>
                            <div className='input-btn'>
                                <ImLocation />
                                <div className='input-btnAdd'>
                                    <p>Deliver to</p>
                                    <p>110094</p>
                                </div>
                            </div>
                            <input type="text" placeholder="Search for medication & Wellness products.." />
                            <IoSearchOutline className='input-search' />
                        </div>

                        <div className='search'><IoSearchOutline /></div>

                        <div className="nav1-right">
                            <div className="nav1-cartBtn">
                                {/* <IoCart /> */}
                                <img src={cartImg} alt="cart-icon" style={{ cursor: 'pointer' }} />
                            </div>

                            <div className="nav1-authParent">
                                <div className="nav1-personSvg">
                                    <GoPerson />
                                </div>
                                <div className="nav1-auth2">
                                    <NavLink to="/login">SIGN IN</NavLink>
                                    <p>/</p>
                                    <NavLink to="/signup">SIGN UP</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav2">
                    <ul>
                        <li className='active' onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => (setOpenProductDropdown(!openProductDropdown))} className='product-navLi'>Products<MdKeyboardArrowDown /></li>
                        {
                            openProductDropdown && (
                                <>
                                    <div className='dropdown-square-div'></div>
                                    <ul className="nav2-dropdown" ref={dropdownRef} onClick={handleDropdownClick}>
                                        <li className='active'>Jar Cones</li>
                                        <ul className="nav2-innerDropdown">
                                            <li className='active'>Dhoop Cones</li>
                                            <li>Incense Holders</li>
                                            <li>Yantras</li>
                                            <li>Incense Sticks</li>
                                            <li>Pooja Thali Sets</li>
                                            <li>Shankh</li>
                                            <li>Kalash</li>
                                            <li>Book Rests</li>
                                        </ul>
                                        <li>Chandan Bamboo Dhoop</li>
                                        <li>Backflow Cone Dhoop</li>
                                        <li>Buddha Red Incense Cone</li>
                                        <li>ountain Sandal Dhoop</li>
                                        <li>ountain Sandal Dhoop</li>
                                    </ul>
                                </>
                            )
                        }
                        <li className='product-navLi'>Services<MdKeyboardArrowDown /></li>
                        <li>Courses</li>
                        <li>Blogs</li>
                        <li>Videos</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
