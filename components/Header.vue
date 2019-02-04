<template>
  <div class="menubar">
    <div class="oneline"></div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav-collapse">
        <b-navbar-brand href="http://products.gcoos.org">
          <i class="fas fa-home"></i>
        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="/hurricane"><i class="fas fa-eye"></i>&nbsp;Outlook</b-nav-item>
          <b-nav-item href="satellites/"><i class="fas fa-satellite"></i>&nbsp;Satellites</b-nav-item>
          <b-nav-item href="resources/"><i class="fas fa-info-circle"></i>&nbsp;Resources</b-nav-item>
          <b-nav-item href="videos/"><i class="fab fa-youtube"></i>&nbsp;Videos</b-nav-item>
          <b-nav-item href="center/"><i class="fas fa-building"></i>&nbsp;Emergency Center</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>&nbsp;
  </div>
</template>

<style scoped>
.menubar {
  position: relative;
  margin-top: 105px;
  height: auto;
  width: 100%;
  z-index: 999;
}
.oneline {
  width: 100%;
  height: 2px;
  background-color: #da880e;
}
/* Navbar setting */
.navbar {
  padding: 1px 12px !important;
}
.nav-link {
  color: white !important;
}
.bg-dark {
  background-color: #0d4060 !important;
}
</style>