import React from 'react';
import works1 from './images/work-1.jpg';
import works2 from './images/work-2.JPG';

function Work() {
    return <div class="work-div" id="works">
    <div class="work-section" data-aos="fade-right" data-aos-duration="1000"></div>
    <div class="title-container">
        <h2 class="work-title">works</h2>
    </div>
    <div class="work-image-container">
        <img class="works-image" src={works1} alt="profile"></img>
        <img class="works-image" src={works2} alt="profile"></img>
        <img class="works-image" src={works1} alt="profile"></img>
    </div>
</div>
}

export default Work;