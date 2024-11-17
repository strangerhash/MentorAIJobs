<template>
    <div class="dashboard container">
      <h2>Your Dashboard</h2>
      <div class="row">
        <DashboardCard
          v-for="(item, index) in recommendations"
          :key="index"
          :title="item.title"
          :type="item.type"
        />
      </div>
    </div>
  </template>
  
  <script>
  import DashboardCard from "../components/DashboardCard.vue";
  
  export default {
    components: { DashboardCard },
    data() {
      return {
        recommendations: [
          { title: "Python Basics", type: "Skill" },
          { title: "Data Science Bootcamp", type: "Learning Path" },
          { title: "Mid-Level Data Analyst", type: "Job" },
        ],
      };
    },
  };
  </script>
  