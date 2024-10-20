

import React, { useState } from 'react';
import './NavaBar.css';
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import PlaceHolder from '../PlaceHolder/PlaceHolder';

const NavaBar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleCartClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className='logo_container'>
                        <img className="logo" src="./image/m1logo.png" alt="logo" />
                        <h1 className='Chaperone'>Chaperone</h1>
                    </div>
                    <button className="menu-toggle" id="menu-toggle">
                        <span className="hamburger-icon">&#9776;</span>
                        <span className="close-icon">&times;</span>
                    </button>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" style={{ color: "#F3A939" }}>Plants & Pots</a></li>
                        <li><a href="#" className="avatar-btn">Tools</a>
                            <div className="dropdown-content">
                                <a href="#">Garderning Tool</a>
                                <a href="#">pest control </a>
                                <a href="#">fertilzer</a>
                                <a href="#">water cans</a>
                                <a href="#">garden accessories</a>
                            </div>
                        </li>
                        <li><a href="#" className="avatar-btn">Our Services</a>
                            <div className="dropdown-content">
                                <a href="#">Book Mali</a>
                                <a href="#">Plant Day care</a>
                                <a href="#">Rent Places</a>
                            </div>
                        </li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    <div className="action-avatar">
                        <div className="dropdown">
                            <button className="avatar-btn">
                                <CgProfile />My Profile
                            </button>
                            <div className="dropdown-content">
                                <a href="#">Hello Karthik<br/>
                                6302874114
                                </a>
                                <hr />
                                <a href="#">My account</a>
                                <a href="#">Order & Refunds</a>
                                <a href="#">Wishlist</a>
                                <a href="#">Gift Cards</a>
                                <a href="#">Service MemeberShip</a>
                                <a href="#">Refere to Friend</a>
                                <a href="#">LogOut</a>
                            </div>
                        </div>

                        <div style={{ marginLeft: "10px", position: 'relative' }}>
                            <button className="avatar-btn" onClick={handleCartClick}>
                                <IoCartOutline />3Cart
                            </button>

                            {/* Popup message */}
                            {showPopup && (
                                <div className="popup-message">
                                    <button className="close-popup" onClick={handleClosePopup}>×</button>
                                    <div className="popup-content" style={{textAlign:"center",fontSize:"15px",fontWeight:"bold"}}>
                                        Your Cart
                                        <div>
                                           <img src="./image/c1.png" alt=""/>
                                           <img src='./image/c2.png' alt=''/>
                                        </div>
                                        <PlaceHolder/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavaBar;
