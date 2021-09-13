<template>
  <div>
    <Header/>
    <nuxt/>
    <MobileNav/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import MobileNav from "~/components/MobileNav.vue";

export default {
  components: {
    Header,
    MobileNav
  }
};
</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>
