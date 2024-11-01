import React from 'react';
import '../styles/Hero.css';
import heroImage from '../hero.png'; // Update this path as needed
import { Fade, Flip, Bounce } from 'react-reveal';

function Hero() {
  return (
    <div className='main'>
        <div className='hero'>
            <div className='left__pane'>
                <Fade left duration={1000}><img src={heroImage} alt="Hero" className="hero__image" /></Fade>
            </div>

            <div className='right__pane'>
              <Fade right duration={1000}>
                <a href="#">Existing Inventory</a>
                <a href="#">Used Inventory</a>
                <a href="#">Trade In</a>
                <a href="#">CyberTruck</a>
                <a href="#">Roadster</a>
              </Fade>
            </div>
        </div>

        <marquee behavior="" direction="">WEB DEVELOPER || DESIGNER</marquee>

    </div>
  );
}

export default Hero;
