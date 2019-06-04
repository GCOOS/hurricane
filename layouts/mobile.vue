<template>
  <div>
    <GCOOSHeader/>
    <Header/>
    <nuxt/>
    <MobileNav/>
  </div>
</template>

<script>
import GCOOSHeader from "~/components/GCOOSHeader.vue";
import Header from "~/components/Header.vue";
import MobileNav from "~/components/MobileNav.vue";

export default {
  components: {
    GCOOSHeader,
    Header,
    MobileNav
  }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
