import React from 'react';

function Navbar() {
    return <nav class="navigation-momo navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      {/* <a class="navbar-brand" href="#home">MOMO creates</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navigation-momo" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        {/* navbar-nav was class above */}
        
          <a class="link" href="#home">home</a>
          <a class="link" href="#about">about</a>
          <a class="link" href="#works">works</a>
          <a class="link" href="#contact">contact</a>
          {/* /*was nav-link */}
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar;
