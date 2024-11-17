<template>
  <div class="feature-card">
    <div class="icon">{{ icon }}</div>
    <h5 class="feature-title">{{ title }}</h5>
    <p class="feature-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String,
  },
};
</script>

<style scoped>
.feature-card {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  width: 300px;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
}
.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff6b6b;
  text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
}
.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}
.feature-description {
  font-size: 1rem;
  font-weight: 400;
  color: #555;
}
</style>
