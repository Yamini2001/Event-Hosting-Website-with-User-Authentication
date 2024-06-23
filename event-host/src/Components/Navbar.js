import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth(); 

    const handleDropdownClick = () => {
        console.log('Dropdown icon clicked');
    };


    return (
        <>
            <div className="header">
                <div className="left">
                    <Link to="/" className="logo">
                        Event<span className="host">Host</span>
                    </Link>
                </div>
                <div className="middle">
                    <div className="title">Solution</div>
                    <button className="dropdown-button1" onClick={handleDropdownClick}>
                        <FaCaretDown />
                    </button>
                    <div className="subtext">Resources</div>
                    <button className="dropdown-button1" onClick={handleDropdownClick}>
                        <FaCaretDown />
                    </button>
                    <div className="platform">Platform</div>
                    <button className="dropdown-button1" onClick={handleDropdownClick}>
                        <FaCaretDown />
                    </button>
                    <div className="price">Pricing</div>
                    <button className="dropdown-button1" onClick={handleDropdownClick}>
                        <FaCaretDown />
                    </button>
                    <div className="company">Company</div>
                    <button className="dropdown-button1" onClick={handleDropdownClick}>
                        <FaCaretDown />
                    </button>
                </div>
                <div className="right">
                    {user ? (
                        <>
                            <div className="username">{user.name}</div>
                            <button className="logout-button" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="login">
                            Login
                        </Link>
                    )}
                    <button className="book-demo-button1">Book Demo</button>
                </div>
            </div>
            <hr className="navbar-divider" />
        </>
    );
};

export default Navbar;
