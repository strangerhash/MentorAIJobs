<template>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">Expertise: {{ expertise }}</p>
          <a :href="link" target="_blank" class="btn btn-primary">Contact</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      expertise: String,
      link: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  