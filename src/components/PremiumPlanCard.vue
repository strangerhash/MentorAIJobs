<template>
    <div class="premium-plan-card">
      <h5 class="plan-title">{{ title }}</h5>
      <p class="plan-price">{{ price }}</p>
      <div class="features">
        <div class="feature" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <span v-if="feature.included" class="icon-check">✔️</span>
            <span v-else class="icon-cross">❌</span>
          </div>
          <p>{{ feature.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      price: String,
      features: Array
    }
  };
  </script>
  
  <style scoped>
  .premium-plan-card {
    background: #f0f0f0;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  .plan-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .plan-price {
    font-size: 1.25rem;
    font-weight: 600;
    color: #28a745;
    margin-bottom: 1rem;
  }
  
  .features {
    margin-top: 1rem;
  }
  
  .feature {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
  
  .feature-icon {
    margin-right: 0.5rem;
    font-size: 1.25rem;
  }
  
  .icon-check {
    color: green;
  }
  
  .icon-cross {
    color: red;
  }
  
  .feature p {
    font-size: 1rem;
    margin: 0;
  }
  </style>
  