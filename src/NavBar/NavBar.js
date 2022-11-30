import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../HomePage/homepage.scss';
import { Link } from 'react-router-dom';
import Logo from '../HomePage/UALogo.png';
import Logo2 from '../HomePage/UALogo2.png';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img
        src={Logo}
        alt=""
        class= "image1" 
  
      />
      <img
        src={Logo2}
        alt=""
        class= "image2"
        />
      <nav ref={navRef}>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/SubmitPage">
          Submit
        </Link>
        <Link className="nav-link" to="/ScoresPage">
          Prior Scores
        </Link>
        <Link className="nav-link" to="/LoginPage">
          Logout
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
