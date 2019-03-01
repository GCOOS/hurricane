<template>
  <div class="header">
    <b-navbar toggleable="xl" class="gcoos_header_navbar">
      <b-navbar-brand href="http://gcoos.org/">
        <img class="gcoos_logo" src="~assets/images/gcoos/logo.svg">
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="ABOUT US" right class="gcoos_nav_item">
            <b-dropdown-item href="https://gcoos.org/about-us/mission/">Mission</b-dropdown-item>
            <b-dropdown-item
              href="https://gcoos.org/about-us/board-of-directors-staff/"
            >Board of Directors &#038; Staff</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/about-us/newsroom/">Newsroom</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/about-us/strategic-plan/">Strategic Plan</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/about-us/contact-us/">Contact Us</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="FOCUS AREAS" right class="gcoos_nav_item">
            <b-dropdown-item
              href="https://gcoos.org/focus-areas/marine-operations/"
            >Marine Operations</b-dropdown-item>
            <b-dropdown-item href="http://gcoos.org/focus-areas/coastal-hazards/">Coastal Hazards</b-dropdown-item>
            <b-dropdown-item
              href="https://gcoos.org/focus-areas/healthy-ecosystems-living-resources/"
            >Healthy Ecosystems &#038; Living Resources</b-dropdown-item>
            <b-dropdown-item
              href="https://gcoos.org/focus-areas/human-health-safety/"
            >Human Health &#038; Safety</b-dropdown-item>
            <b-dropdown-item href="http://gcoos.org/long-term-change/">Long-Term Change</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="RESOURCES" right class="gcoos_nav_item">
            <b-dropdown-item href="https://gcoos.org/resources/for-educators/">For Educators</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/resources/for-scientists/">For Scientists</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/resources/for-industry/">For Industry</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/resources/for-the-public/">For the Public</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="GET ENGAGED" right class="gcoos_nav_item">
            <b-dropdown-item href="https://gcoos.org/get-engaged/join/">Join</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/get-engaged/members/">Members</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/get-engaged/industry/">Industry</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/get-engaged/data-partners/">Data Partners</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/get-engaged/researchers/">Researchers</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/get-engaged/educators/">Educators</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/about-us/newsroom/">Media</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/get-engaged/newsletter/">Newsletter</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="DATA PORTAL" right class="gcoos_nav_item">
            <b-dropdown-item href="http://data.gcoos.org/">Regional Assets</b-dropdown-item>
            <b-dropdown-item href="http://data.gcoos.org/monitoring.php">Data Flow Monitoring</b-dropdown-item>
            <b-dropdown-item href="http://data.gcoos.org/directAccess.php">HTTP Data Request</b-dropdown-item>
            <b-dropdown-item href="http://data.gcoos.org/sos.php">Sensor Observing Services</b-dropdown-item>
            <b-dropdown-item href="http://data.gcoos.org/waf.php">Web Accessible Folder</b-dropdown-item>
            <b-dropdown-item href="http://data.gcoos.org/erddap.php">ERDDAP Service</b-dropdown-item>
            <b-dropdown-item
              href="http://mmisw.org/ont/gcoos/parameter"
              target="_blank"
            >Vocabularies</b-dropdown-item>
            <b-dropdown-item href="http://data.gcoos.org/downloads.php">Tools & Modules</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item
            href="https://gcoos.org/projects-services/"
            class="gcoos_nav_item"
          >PRODUCTS &#038; SERVICES</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="social_list">
            <a target="_blank" href="https://www.facebook.com/GCOOS/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </b-nav-item>
          <b-nav-item class="social_list">
            <a target="_blank" href="https://twitter.com/GCOOS1/">
              <i class="fab fa-twitter"></i>
            </a>
          </b-nav-item>
          <b-nav-item class="social_list">
            <a target="_blank" href="https://www.youtube.com/channel/UCLIjMeR9opm2f6S7uAJWLlQ">
              <i class="fab fa-youtube"></i>
            </a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.header {
  background-color: #ffffff;
  z-index: 1001;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  text-align: right;
}
.gcoos_header_navbar {
  height: 80px;
  background-color: #ffffff;
}
.gcoos_logo {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin: 10px 0px 0;

  height: 71px;
  width: 209px;
}
.navbar {
  padding-left: 10px !important;
  padding-right: 0px !important;
}
.navbar-light .navbar-nav .nav-link {
  color: #000000 !important;
}
#nav_collapse {
  height: auto;
  background-color: #ffffff;
}
.nav-link.dropdown-toggle::after {
  background: url("~assets/images/gcoos/arrow-down.png") no-repeat right top;
  width: 13px;
  margin: 5px 5px 0;
}
.gcoos_nav_item {
  margin: 0 0 0 13px;
  font-size: 15px;
  font-family: "DIN";
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.45px;
  text-align: center;
}
.gcoos_nav_item.nav-item.b-nav-dropdown.dropdown a:hover {
  color: #19a2c9 !important;
}
.nav-item.gcoos_nav_item a:hover {
  color: #19a2c9 !important;
}
.social_list {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  background: #ffffff;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  text-align: center;
  vertical-align: top;
}
.social_list a {
  color: #818181;
}
.social_list a:hover {
  color: #000000;
}
.dropdown-menu-right {
  right: auto !important;
}
.dropdown-menu.dropdown-menu-right.show {
  border: 1px solid #19a2c9 !important;
  border-radius: 0 !important;
}

@media only screen and (max-width: 1400px) {
  .social_list {
    display: none;
  }

  .gcoos_logo {
    margin: 0px 0px 0px 0px;
  }
}
@media only screen and (max-width: 400px) {
  .gcoos_logo svg {
    max-height: 50px;
    max-width: 145px;
  }
}
</style>
