<template>
    <div class="learning-paths container">
      <h2>Personalized Learning Paths</h2>
      <div class="row">
        <div
          v-for="(path, index) in learningPaths"
          :key="index"
          class="col-md-4 mb-3"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ path.title }}</h5>
              <p class="card-text">{{ path.description }}</p>
              <a :href="path.link" target="_blank" class="btn btn-primary">Start</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        learningPaths: [
          {
            title: "Learn Python Basics",
            description: "A beginner-friendly course to learn Python.",
            link: "https://www.coursera.org",
          },
          {
            title: "Master Data Science",
            description: "Comprehensive learning for data analysis and visualization.",
            link: "https://www.udemy.com",
          },
          {
            title: "JavaScript for Developers",
            description: "Understand JavaScript concepts deeply.",
            link: "https://developer.mozilla.org",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  