<template>
  <div class="header">
    <b-navbar toggleable="xl" class="gcoos_header_navbar">
      <b-navbar-brand href="https://gcoos.org/">
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
            <b-dropdown-item href="https://gcoos.org/focus-areas/coastal-hazards/">Coastal Hazards</b-dropdown-item>
            <b-dropdown-item
              href="https://gcoos.org/focus-areas/healthy-ecosystems-living-resources/"
            >Healthy Ecosystems &#038; Living Resources</b-dropdown-item>
            <b-dropdown-item
              href="https://gcoos.org/focus-areas/human-health-safety/"
            >Human Health &#038; Safety</b-dropdown-item>
            <b-dropdown-item href="https://gcoos.org/long-term-change/">Long-Term Change</b-dropdown-item>
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

          <b-nav-item-dropdown text="PRODUCTS & SERVICES" right class="gcoos_nav_item">
            <b-dropdown-item href="https://products.gcoos.org/">Stations</b-dropdown-item>
            <b-dropdown-item href="https://products.gcoos.org/search">Search All Products</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <div class="socialwidget">
        <span class="social_list">
          <a target="_blank" href="https://www.facebook.com/GCOOS/">
            <i class="fab fa-facebook-f"></i>
          </a>
        </span>
        <span class="social_list">
          <a target="_blank" href="https://twitter.com/GCOOS1/">
            <i class="fab fa-twitter"></i>
          </a>
        </span>
        <span class="social_list">
          <a target="_blank" href="https://www.youtube.com/channel/UCLIjMeR9opm2f6S7uAJWLlQ">
            <i class="fab fa-youtube"></i>
          </a>
        </span>
      </div>
    </b-navbar>
  </div>
</template>

<style>
.header {
  position: fixed;
  background-color: #ffffff;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 106px;
  clear: both;
  padding: 10px;
  text-align: right;
  font-family: "proxima-nova", Lato, Roboto;
  font-size: 15px;
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
#nav_collapse {
  height: auto;
  background-color: #ffffff;
  padding-right: 160px;
  margin-top: 8px;
}

.gcoos_nav_item {
  margin: 0 0 0 13px;
  font-size: 15px;
  font-family: "proxima-nova", Lato, Roboto;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.45px;
  text-align: top;
  color: #000;
}
.gcoos_nav_item a {
  color: #000 !important;
}
.gcoos_nav_item text {
  color: #000;
  font-size: 14px;
}

.header li ul {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  background: #fff;
  top: 100%;
  left: 5px;
  display: none;
  color: #000;
  padding-top: 2px;
  z-index: 99999 !important;
}

.header li a {
  font-size: 15px;
  font-family: "proxima-nova", Lato, Roboto;
  line-height: 22px;
  font-weight: bold;
  color: #222222;
  display: inline-block;
  padding: 0;
  line-height: 1em;
  margin: 0 0 0 5px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.45px;
  border-bottom: 2px solid #fff;
  cursor: pointer;
}

.header li ul li {
  width: 100%;
  margin: 0;
  font-size: 15px;
  margin-bottom: 0;
  padding: 0;
  background-image: none;
}
.header li ul li a {
  float: none;
  font-family: "proxima-nova", Lato, Roboto;
  font-weight: 500;
  line-height: 1.2em;
  display: block;
  background: #fff;
  padding-bottom: 5px;
  margin: 0 0 1px;
  padding: 10px 10px;
  text-transform: none;
  text-align: left;
  font-size: 15px;
  color: #222222;
  border-bottom: 2px solid #00a1cb;
}
.header li.current-menu-parent > a {
  color: #00a1cb;
  border-bottom: 2px solid #00a1cb;
}
.gcoos_nav_item.nav-item.b-nav-dropdown.dropdown a:hover {
  color: #19a2c9 !important;
}
.nav-item.gcoos_nav_item a:hover {
  color: #19a2c9 !important;
}

.dropdown-menu-right {
  right: auto !important;
}
.dropdown-menu.dropdown-menu-right.show {
  border: 2px solid #19a2c9 !important;
  padding: 0;
}

/* social icons */
.socialwidget {
  display: inline-flex;
  position: absolute;
  right: 10px;
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
  display: block;
  height: 100%;
  margin-top: 10px;
}
.social_list a:hover {
  color: #000000;
}

/* remove social icons 
* show menu only
*/
@media only screen and (max-width: 1350px) {
  .socialwidget {
    display: none;
  }
  #nav_collapse {
    padding-right: 10px;
  }
  span.navbar-toggler-icon {
    background-image: url("~assets/images/svg/menu-button-of-three-horizontal-lines.svg") !important;
  }
}

/* show social icons
* show a hamburger menu 
*/
@media only screen and (max-width: 1200px) {
  .socialwidget {
    display: none;
    padding-right: 80px;
  }
  .header {
    height: 96px;
  }
  .navbar {
    padding: 0px !important;
  }
  .navbar-toggler {
    background-color: #093f61;
  }
  .gcoos_nav_item {
    margin: 0 0 0 13px;
    font-size: 15px;
    font-family: "proxima-nova", Lato, Roboto;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 0.45px;
    text-align: center;
  }
  li.nav-item.gcoos_nav_item {
    background-color: #262626;
    padding: 5px 0px;
  }

  .header ul {
    padding: 10px 10px 10px;
    text-align: center;
  }
  .header li a {
    border-bottom: 0;
  }
  .header li ul li a {
    text-align: center;
  }
  .navbar-light .navbar-nav .nav-link span::after {
    color: #fff !important;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #fff !important;
  }
  .gcoos_logo {
    margin: 0;
  }

  .dropdown-toggle::after {
    position: absolute;
    right: 10px;
    border-right-width: 10px;
    border-left-width: 10px;
    border-top-width: 10px;
  }
}

/* show a hamberger menu
* show social icons as well
*/
@media only screen and (max-width: 500px) {
  .socialwidget {
    display: none;
  }
}

/* remove social icons
* show a hamburger menu
*/
@media only screen and (max-width: 400px) {
  .navbar {
    padding: 0px !important;
  }
  .header {
    height: 75px;
  }
  .gcoos_header_navbar {
    height: 64px;
  }
  img.gcoos_logo {
    height: 50px;
    width: 145px;
  }
}
</style>
