<template>
  <div id="mobile-panel" class="nav-menu-navMenu">
    <div class="nav-menu-mainLinks">
      <div class="nav-menu-primaryLink geolocation">
        <n-link to="/" class="nav-menu-button">
          <span class="mobile-nav-icon">
            <img src="~assets/images/svg/hurricane.svg" class="mobile-nav-svg">
          </span>
          <span class="mobile-nav-menu-text">Outlook</span>
        </n-link>
      </div>
      <div class="nav-menu-primaryLink warning">
        <n-link to="/news/" class="nav-menu-button">
          <span class="mobile-nav-icon">
            <img src="~assets/images/svg/newspaper-folded.svg" class="mobile-nav-svg">
          </span>
          <span class="mobile-nav-menu-text">NEWS</span>
        </n-link>
        <ul class="nav-menu-sublinks"/>
      </div>
      <div class="nav-menu-primaryLink lightning">
        <n-link to="/satellites/" class="nav-menu-button">
          <span class="mobile-nav-icon">
            <img src="~assets/images/svg/satellite.svg" class="mobile-nav-svg">
          </span>
          <span class="mobile-nav-menu-text">Satellite</span>
        </n-link>
        <ul class="nav-menu-sublinks"/>
      </div>

      <div class="nav-menu-primaryLink quality">
        <a href="https://geo.gcoos.org/weather/" class="nav-menu-button">
          <span class="mobile-nav-icon">
            <img src="~assets/images/svg/weather.svg" class="mobile-nav-svg">
          </span>
          <span class="mobile-nav-menu-text">Weather</span>
        </a>
        <ul class="nav-menu-sublinks"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 761px) {
  #mobile-panel {
    display: none;
  }
}
@media screen and (max-width: 760px) {
  /* Place the navbar at the bottom of the page, and make it stick */
  .nav-menu-navMenu {
    position: fixed;
    display: flex;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-align: center;
    align-items: center;
    padding: 0 20px;
    padding-left: 28px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 54px;
    background-color: #0a5792;
    z-index: 1998;
    overflow: visible;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    color: #fdff70;
    text-decoration: none;
  }

  .nav-menu-mainLinks {
    margin-left: -20px;
    margin-right: 0;
    width: 100%;
    flex: 1;
    z-index: 2;
    -webkit-box-flex: 1;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
  }

  .nav-menu-primaryLink {
    font-weight: 700;
    display: inline-block;
    font-size: 14px;
    position: relative;
    width: 25%;
    height: 54px;
  }

  .nav-menu-button {
    margin-top: 12px;
    background-color: transparent;
    border: 0;
    color: #ffffff;
    font-size: 18px;
    padding: 0;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-ordinal-group: 3;
  }

  .mobile-nav-icon {
    font-size: 16px;
  }
  .mobile-nav-svg {
    width: 22px;
    height: 22px;
  }
  .mobile-nav-menu-text {
    font-size: 12px;
  }
}
</style>
