<template>
    <div class="container">
      <h1 class="page-title">Latest Blogs</h1>
  
      <!-- Search Bar -->
      <input
        v-model="searchQuery"
        @input="handleSearch"
        class="search-bar"
        placeholder="Search blogs..."
      />
  
      <div class="blog-list">
        <div v-for="blog in blogs" :key="blog.id" class="blog-card">
          <div class="blog-content">
            <h2>{{ blog.title }}</h2>
            <p class="blog-meta">By {{ blog.author }} | {{ blog.date }}</p>
            <p class="blog-category">Category: {{ blog.category }}</p>
            <p class="blog-excerpt">{{ blog.content.substring(0, 100) }}...</p>
            <router-link :to="'/blog/' + blog.id" class="read-more">Read More</router-link>
          </div>
        </div>
      </div>
  
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="lastPageReached" class="end-message">No more blogs to load.</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: [], // Current list of blogs
        allBlogs: [], // Mocked API data
        searchQuery: "",
        page: 1,
        perPage: 5,
        loading: false,
        lastPageReached: false,
      };
    },
    methods: {
      // Mock API to fetch data with delay
      async fetchBlogs() {
        if (this.loading || this.lastPageReached) return;
  
        this.loading = true;
  
        setTimeout(() => {
          // Simulating an API call with filtering and pagination
          const filteredBlogs = this.allBlogs.filter(blog =>
            blog.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
  
          const start = (this.page - 1) * this.perPage;
          const end = start + this.perPage;
          const paginatedBlogs = filteredBlogs.slice(start, end);
  
          if (paginatedBlogs.length > 0) {
            this.blogs = [...this.blogs, ...paginatedBlogs];
          } else {
            this.lastPageReached = true;
          }
  
          this.loading = false;
        }, 1000);
      },
  
      handleSearch() {
        this.page = 1;
        this.lastPageReached = false;
        this.blogs = [];
        this.fetchBlogs();
      },
  
      handleScroll() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          this.page++;
          this.fetchBlogs();
        }
      },
    },
    created() {
      // Mocked blog data
      this.allBlogs = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        title: `Blog Post ${i + 1}`,
        author: `Author ${i + 1}`,
        date: `2024-11-${String((i % 30) + 1).padStart(2, "0")}`,
        category: `Category ${((i % 5) + 1)}`,
        content: `This is the content of blog post ${i + 1}. It contains details about the topic discussed.`,
      }));
  
      this.fetchBlogs();
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
  }
  
  .page-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .search-bar {
    display: block;
    margin: 0 auto 2rem;
    padding: 0.5rem;
    width: 50%;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .blog-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  
  .blog-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    width: 300px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .blog-card:hover {
    transform: translateY(-5px);
  }
  
  .blog-content {
    padding: 1rem;
  }
  
  .blog-content h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .blog-meta {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .blog-category {
    font-size: 0.9rem;
    color: #007bff;
    margin-bottom: 1rem;
  }
  
  .blog-excerpt {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .read-more {
    color: #ff6a00;
    text-decoration: none;
    font-weight: bold;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
  
  .loading {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 2rem;
  }
  
  .end-message {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 2rem;
    color: #888;
  }
  </style>
  