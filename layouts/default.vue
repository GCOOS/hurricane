<template>
  <div>
    <GCOOSHeader/>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import GCOOSHeader from "~/components/GCOOSHeader.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    GCOOSHeader,
    Header,
    Footer
  }
};
</script>

<style>
html {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}
</style>
