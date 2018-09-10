<template>
<div>
  <header class="header">
    <div class="centered">
      Hurricane
    </div>
  </header>
  <b-navbar class="bnav" toggleable type="dark" variant="black">
    <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_text_collapse">
      <b-navbar-nav>
        <b-nav-item href="/">Outlook</b-nav-item>
        <b-nav-item href="/satellites">Satellites</b-nav-item>
        <b-nav-item href="/resources">Resources</b-nav-item>
        <b-nav-item href="/center">Emergency Center</b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-brand><a href="http://products.gcoos.org" style="text-decoration:none; color:white;">Products Home</a></b-navbar-brand>

  </b-navbar>
</div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-image: url(~assets/images/gulf_header_1900x90.png);
  background-size: 100% 60px;
  background-repeat: no-repeat;
}

/* Centered text */
.centered {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 3em;
  font-weight: bold;
}

.bnav {
  height: 30px;
  background-color: #000000;
}
</style>
