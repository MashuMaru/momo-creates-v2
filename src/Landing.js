import React from 'react';
import Main from './images/momo-closeup-landing.png';
import AOS from 'aos';

function Landing() {
    AOS.init();
    return <div className="landing-section" id="home">
        <div className="land-left-section" data-aos="zoom-out-down" data-aos-duration="2000">
                <img className="main-image" src={Main} alt="landing"></img>
        </div>

        <div className="land-right-section" data-aos="zoom-out-down" data-aos-duration="2000">
            <div className="landing-text">
                <h1 className="header-title">MOMO CREATES</h1>
                <p className="header-sub-title">THE EMBROIDERY TO YOUR DREAMS</p>
            </div>
        </div>

    </div>
}

export default Landing;