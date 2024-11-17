<template>
    <div class="resume-analyzer container">
      <h2>Upload Your Resume</h2>
      <input type="file" @change="handleFileUpload" />
      <button class="btn btn-primary mt-3" @click="analyzeResume">Analyze</button>
      <div v-if="analysis" class="mt-4">
        <h3>Analysis Results</h3>
        <pre>{{ analysis }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        file: null,
        analysis: null,
      };
    },
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      async analyzeResume() {
        const formData = new FormData();
        formData.append("file", this.file);
        const userData = {
          "username":"Tes"
        }
        formData.append("userData",JSON.stringify(userData))
  
        try {
          const response = await axios.post("http://localhost:5000/upload", formData);
          this.analysis = response.data;
        } catch (error) {
          console.error("Error analyzing resume:", error);
        }
      },
    },
  };
  </script>
  