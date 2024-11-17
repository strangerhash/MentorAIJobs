<template>
    <div class="mentors container">
      <h2>Connect with Mentors</h2>
      <div class="row">
        <MentorCard
          v-for="(mentor, index) in mentors"
          :key="index"
          :name="mentor.name"
          :expertise="mentor.expertise"
          :link="mentor.link"
        />
      </div>
    </div>
  </template>
  
  <script>
  import MentorCard from "../components/MentorCard.vue";
  
  export default {
    components: { MentorCard },
    data() {
      return {
        mentors: [
          {
            name: "John Doe",
            expertise: "Data Science, Python",
            link: "https://example.com",
          },
          {
            name: "Jane Smith",
            expertise: "Web Development, JavaScript",
            link: "https://example.com",
          },
          {
            name: "Emily Davis",
            expertise: "AI, Machine Learning",
            link: "https://example.com",
          },
        ],
      };
    },
  };
  </script>
  