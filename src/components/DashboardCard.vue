<template>
    <div class="col-md-4">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">Type: {{ type }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      type: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  