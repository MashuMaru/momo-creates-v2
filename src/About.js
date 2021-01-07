import React from 'react';
import Main from './images/momo-closeup-landing.png';

function About() {
    return <div className="about-section" id="about">

        <div className="about-left-section">
        <div className="about-text">
                <h2 className="about-title">about me</h2>
                <p className="about-paragraph">Add a Lorem Ipsum is simply dummy,
                 text of the printing and typesetting industry.</p>
                 <p className="about-paragraph">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 <p className="about-paragraph">It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. 
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                 bit of body text</p>

            </div>
        </div>

        <div className="about-right-section">
        {/* <div className="landing-img-box"> */}
        <img className="main-image" src={Main} alt="landing"></img>
            {/* </div> */}
        </div>
    </div>
}

export default About;