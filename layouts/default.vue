<template>
  <div>
    <GCOOSHeader />
    <Header />
    <nuxt/>
  </div>
</template>

<script>
import GCOOSHeader from "~/components/GCOOSHeader.vue"
import Header from "~/components/Header.vue";

export default {
  components: {
    GCOOSHeader,
    Header
  }
};
</script>

<style>
html {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

</style>
