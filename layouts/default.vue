<template>
  <div>
    <GCOOSHeader/>
    <Header/>
    <nuxt/>
    <Footer/>
    <MobileNav/>
  </div>
</template>

<script>
import GCOOSHeader from "~/components/GCOOSHeader.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import MobileNav from "~/components/MobileNav.vue";

export default {
  components: {
    GCOOSHeader,
    Header,
    Footer,
    MobileNav
  }
};
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>
