<template>
  <div class="feature-card-container">
    <div class="feature-card job-card" @click="goToNextStep">
      <div class="feature-card-icon">💼</div>
      <div class="feature-card-body">
        <h3 class="feature-card-title">Job Recommendations</h3>
        <p class="feature-card-description">Get personalized job suggestions based on your profile.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToNextStep() {
      this.$router.push({ name: "actionableSteps" });
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
  background: linear-gradient(145deg, #42e695, #3bb2b8);
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
