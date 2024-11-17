<template>
    <div class="auth-container">
      <h2 class="text-center mb-4">Register</h2>
      <div class="auth-box">
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required />
          </div>
          <div class="mb-3">
            <label for="confirm-password" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
        <div class="social-login mt-3">
          <button class="btn btn-outline-danger w-100 mb-2">
            <i class="fab fa-google"></i> Register with Google
          </button>
          <button class="btn btn-outline-dark w-100">
            <i class="fab fa-github"></i> Register with GitHub
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleRegister() {
        // Handle the registration logic here
        console.log('Registering with:', this.email, this.password, this.confirmPassword);
      },
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .auth-box {
    display: flex;
    flex-direction: column;
  }
  .social-login button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social-login .fab {
    margin-right: 10px;
  }
  </style>
  