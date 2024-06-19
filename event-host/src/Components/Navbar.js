import React from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Import the dropdown icon
import './Navbar.css'; // Import your CSS file for styling

const Header = () => {
    const handleDropdownClick = () => {
        // Handle the dropdown click event
        console.log('Dropdown icon clicked');
    };

    return (
        <div className="header">
            <div className="left">
                <div className="logo">EventHost</div>
            </div>
            <div className="middle">
                <div className="title">Solution</div>
                <button className="dropdown-button" onClick={handleDropdownClick}>
                    <FaCaretDown />
                </button>
                <div className="subtext">Resources</div>
                <button className="dropdown-button" onClick={handleDropdownClick}>
                    <FaCaretDown />
                </button>
                <div className="platform">Platform</div>
                <button className="dropdown-button" onClick={handleDropdownClick}>
                    <FaCaretDown />
                </button>
                <div className="price">Pricing</div>
                <button className="dropdown-button" onClick={handleDropdownClick}>
                    <FaCaretDown />
                </button>
                <div className="company">Company</div>
                <button className="dropdown-button" onClick={handleDropdownClick}>
                    <FaCaretDown />
                </button>
            </div>
            <div className="right">
                <div className="login">Login</div>
                <button className="book-demo-button">Book Demo</button>
            </div>
        </div>
    );
}

export default Header;
