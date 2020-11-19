<template>
  <div class="menubar">
    <div class="oneline"></div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav>
          <b-nav-item href="/hurricane/">
            <i class="fas fa-home"></i>&nbsp;Home
          </b-nav-item>
          <b-nav-item href="/hurricane/satellites/">
            <i class="fas fa-satellite"></i>&nbsp;Satellites
          </b-nav-item>
          <b-nav-item href="/hurricane/model/">
            <i class="fas fa-laptop-code"></i>&nbsp;Models
          </b-nav-item>
          <b-nav-item href="/hurricane/resources/">
            <i class="fas fa-info-circle"></i>&nbsp;Preparation
          </b-nav-item>
          <b-nav-item href="/hurricane/videos/">
            <i class="fab fa-youtube"></i>&nbsp;Videos
          </b-nav-item>
          <b-nav-item href="/hurricane/center/">
            <i class="fas fa-building"></i>&nbsp;Emergency Center
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://geo.gcoos.org/weather/">
            <i class="fas fa-cloud-sun-rain"></i>&nbsp;Weather
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse> </b-navbar
    >&nbsp;
  </div>
</template>

<style>
.menubar {
  font-family: "proxima-nova", Roboto, sans-serif;
  font-size: 18px;
  display: inline-block;
  position: fixed;
  /*  margin-top: 106px; */
  top: 106px;
  margin: 0;
  padding: 0;
  height: auto;
  width: 100%;
  z-index: 1999;
}

.oneline {
  width: 100%;
  height: 2px;
  background-color: #da880e;
}
/* Navbar setting */
.menubar .navbar {
  padding: 1px 12px !important;
}
.bg-dark {
  background-color: #093f61 !important;
}

@media only screen and (max-width: 1200px) {
  .menubar {
    top: 96px;
    font-size: 16px;
  }
  .menubar .dropdown-toggle::after {
    position: relative;
    margin-left: 15px;
    border-right-width: 8px;
    border-left-width: 8px;
    border-top-width: 4px;
  }
}

@media only screen and (max-width: 420px) {
  .menubar {
    top: 75px;
  }
}
</style>
