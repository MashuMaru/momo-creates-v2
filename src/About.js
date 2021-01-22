import React from 'react';
import Profile from './images/profile.png';
import AOS from 'aos';



function About() {
    AOS.init();
    return <div className="about-section" id="about">

        <div className="about-left-section" data-aos="fade-right" data-aos-duration="1000">
                <div className="about-text">
                    <h2 className="about-title">about me</h2>
                    <img className="about-image-reveal" src={Profile} alt="profile"></img>
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

        <div className="about-right-section" data-aos="fade-left" data-aos-duration="1000">
            <img className="about-image" src={Profile} alt="profile"></img>
        </div>
    </div>
}

export default About;