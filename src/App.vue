<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/AppNavbar.vue";
import Footer from "./components/AppFooter.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}
</style>
