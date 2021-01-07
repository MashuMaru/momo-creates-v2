import React from 'react';
import Main from './images/momo-closeup-landing.png';

function Landing() {
    return <div className="landing-section" id="home">

        <div className="land-left-section">
            {/* <div className="landing-img-box"> */}
                <img className="main-image" src={Main} alt="landing"></img>
            {/* </div> */}
        </div>

        <div className="land-right-section">
            <div className="landing-text">
                <h1>MOMO CREATES</h1>
                <h2>THE EMBROIDERY TO YOUR DREAMS</h2>
            </div>
        </div>
    </div>
}

export default Landing;