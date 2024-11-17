<template>
    <div class="feature-cards-container">
      <ResumeAnalysisCard />
      <JobRecommendationCard />
      <ActionableStepsCard />
    </div>
  </template>
  
  <script>
  import ResumeAnalysisCard from "../components/ResumeAnalysisCard.vue";
  import JobRecommendationCard from "../components/JobRecommendationCard.vue";
  import ActionableStepsCard from "../components/ActionableStepsCard.vue";
  
  export default {
    components: {
      ResumeAnalysisCard,
      JobRecommendationCard,
      ActionableStepsCard,
    },
  };
  </script>
  
  <style scoped>
  .feature-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;  /* Center the entire grid */
    align-items: center;      /* Vertically center items */
    padding: 30px;
    max-width: 1200px;         /* Add a max-width for a better layout on large screens */
    margin: 0 auto;            /* Center the grid container itself */
  }
  
  </style>
  