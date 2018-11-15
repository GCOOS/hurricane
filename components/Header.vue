<template>
  <div>
    <div class="oneline"></div>
    <b-navbar toggleable='md' type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/">Outlook</b-nav-item>
          <b-nav-item href="/satellites">Satellites</b-nav-item>
          <b-nav-item href="/resources">Resources</b-nav-item>
          <b-nav-item href="/center">Emergency Center</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-brand><a href="http://products.gcoos.org" style="text-decoration:none; color:white;">Products & Service</a></b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    &nbsp;
  </div>
</template>

<style scoped>
  .oneline {
    width: 100%;
    height: 2px;
    background-color: #da880e;
  }
  /* Navbar setting */
  .navbar {
    padding: 1px 12px !important;
  }
  .navbar .nav-link {
    color: white;
  }
  .bg-dark {
    background-color: #0d4060 !important;
  }
</style>
