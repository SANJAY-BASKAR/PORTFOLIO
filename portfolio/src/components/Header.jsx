import React, { useState } from 'react';
import '../styles/Header.css'; // Import your CSS file
import { Fade, Zoom } from 'react-reveal';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className='head'>
      <Zoom><div className='logo'></div></Zoom>
      

      <Fade bottom><div className='search__bar'>
        <input placeholder='SANJAY BASKAR' />
      </div></Fade>

      <Fade bottom><div className='options__bar'>
        <a href="#">Existing Inventory</a>
        <a href="#">Used Inventory</a>
        <a href="#">Trade In</a>
        <a href="#">CyberTruck</a>
        <a href="#">Roadster</a>
      </div></Fade>
      
      <div className='burger' onClick={() => setBurgerStatus(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>

      <div className={`burgerNav ${burgerStatus ? 'show' : ''}`}>
        <div className='closeIcon' onClick={() => setBurgerStatus(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>      
        </div>
        
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadster</a></li>
      </div>
    </div>
  );
}

export default Header;
