<template>
<div>
  <header class="header">
    <div class="centered">
      Hurricane
    </div>
  </header>

  <b-navbar toggleable='md' type="dark" variant="black">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/">Outlook</b-nav-item>
        <b-nav-item href="/satellites">Satellites</b-nav-item>
        <b-nav-item href="/resources">Resources</b-nav-item>
        <b-nav-item href="/center">Emergency Center</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-brand><a href="http://products.gcoos.org" style="text-decoration:none; color:white;">Products Home</a></b-navbar-brand>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-image: url(~assets/images/gulf_header_1900x90.png);
  background-size: 100% 70px;
  background-repeat: no-repeat;
}
/* Centered text */
.centered {
  top: 50px;
  left: 50%;
  color: #ffffff;
  font-size: 3em;
  font-weight: bold;
}
.navbar {
  height: 35px;
  background-color: #000000;
}
.navbar-collapse.collapse.show {
  background-color: #000000;
  z-index: 2000;
  padding: 10px;
}
</style>
