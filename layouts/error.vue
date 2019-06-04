<template>
  <div class="canvas">
    <div class="error-page">
      <h1 v-if="error.statusCode === 404">Page not found (:404)</h1>
      <h1 v-else>An error occurred</h1>
      <img src="~assets/images/svg/alarm2.svg">
      <br>
      <br>
      <nuxt-link to="/" style="font-size:18px;">Back to Main page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
.error-page {
  font-family: "proxima-nova";
  padding: 100px 50px 100px 50px;
  text-align: center;
}
</style>
