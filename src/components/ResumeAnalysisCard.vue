<template>
  <div class="feature-card-container">
    <div class="feature-card resume-card" @click="goToNextStep">
      <div class="feature-card-icon">📝</div>
      <div class="feature-card-body">
        <h3 class="feature-card-title">Resume Analysis</h3>
        <p class="feature-card-description">Free resume analysis to assess your strengths.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToNextStep() {
      this.$router.push({ name: "jobRecommendation" });
    },
  },
};
</script>

<style scoped>
.feature-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.feature-card {
  width: 250px;
  background: linear-gradient(145deg, #ff9a9e, #ff6b6b);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s ease-in-out;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-card-icon {
  font-size: 4rem;
  margin-bottom: 10px;
  color: white;
}

.feature-card-body {
  text-align: center;
}

.feature-card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

.feature-card-description {
  font-size: 0.875rem;
  color: white;
  opacity: 0.85;
}
</style>
