<template>
    <div class="faq-section py-5">
      <h2 class="text-center mb-4">Frequently Asked Questions</h2>
      <div class="accordion" id="faqAccordion">
        <div class="accordion-item" v-for="(item, index) in faqList" :key="index">
          <h2 class="accordion-header" :id="'faqHeading' + index">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#faqCollapse' + index"
              aria-expanded="true"
              :aria-controls="'faqCollapse' + index"
            >
              {{ item.question }}
            </button>
          </h2>
          <div
            :id="'faqCollapse' + index"
            class="accordion-collapse collapse"
            :aria-labelledby="'faqHeading' + index"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              {{ item.answer }}
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
        faqList: [
          {
            question: "What technologies are covered in AI Career Mentor?",
            answer: "We cover technologies including AI, machine learning, cloud deployment, data structures, algorithms, and more."
          },
          {
            question: "How can I prepare for a technical interview with AI-based questions?",
            answer: "Focus on topics such as Vue.js, React, PHP, Symfony, Node.js, AWS Lambda, Kubernetes, and more. We provide resources for each."
          },
          {
            question: "What is the best way to learn DSA and algorithms?",
            answer: "Start with basic data structures, solve problems on platforms like LeetCode and HackerRank, and gradually move to advanced algorithms."
          },
          {
            question: "How do I learn business skills alongside technical expertise?",
            answer: "We suggest learning agile methodologies, lean product development, financial budgeting, and UX/UI basics to complement your technical skills."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .faq-section h2 {
    font-size: 2rem;
  }
  
  .accordion-button {
    font-weight: bold;
  }
  
  .accordion-body {
    font-size: 1rem;
    padding: 10px 15px;
  }
  </style>
  