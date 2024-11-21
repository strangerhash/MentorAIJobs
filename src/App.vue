<template>
  <div id="app">
    <component :is="currentNavbar" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import AdminNavbar from "./components/admin/AdminNavBar.vue";
import UserNavbar from "./components/users/UserNavBar.vue";
import Footer from "./components/AppFooter.vue";
import AppNavbar from "./components/AppNavbar.vue";

export default {
  components: {
    AdminNavbar,
    UserNavbar,
    Footer,
    AppNavbar

  },
  computed: {
    currentNavbar() {
      const userRole = localStorage.getItem("role"); // Replace with a secure API call
      if (userRole === "admin") {
        return "AdminNavbar";
      }
      else if (userRole === "user") {
        return "UserNavbar"
      }
      else {
        return "AppNavbar";
      }
    },
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
