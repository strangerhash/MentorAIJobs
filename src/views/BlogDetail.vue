<template>
    <div class="blog-detail" v-if="blog">
      <!-- <img :src="require(`./assets/${blog.image}`)" alt="Blog Image" class="blog-detail-image" /> -->
      <h1 class="blog-detail-title">{{ blog.title }}</h1>
      <p class="blog-meta">By {{ blog.author }} | {{ blog.date }}</p>
      <p class="blog-category">Category: {{ blog.category }}</p>
      <div class="blog-content">
        <p>{{ blog.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import blogData from "../blogData.json";
  
  export default {
    data() {
      return {
        blog: null,
      };
    },
    created() {
      const blogId = this.$route.params.id;
      this.blog = blogData.find((blog) => blog.id === parseInt(blogId));
    },
  };
  </script>
  
  <style scoped>
  .blog-detail {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .blog-detail-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 2rem;
  }
  
  .blog-detail-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .blog-meta {
    color: #888;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .blog-category {
    font-size: 1rem;
    color: #007bff;
    margin-bottom: 2rem;
  }
  
  .blog-content {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  </style>
  