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
          <a class="nav-link" href="#home">home</a>
          <a class="nav-link link" href="#about">about</a>
          <a class="nav-link link" href="#works">works</a>
          <a class="nav-link link" href="#contact">contact</a>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar;
