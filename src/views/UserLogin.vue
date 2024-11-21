<template>
    <div class="auth-container">
      <h2 class="text-center mb-4">Login</h2>
      <div class="auth-box">
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <div class="social-login mt-3">
          <button class="btn btn-outline-danger w-100 mb-2">
            <i class="fab fa-google"></i> Login with Google
          </button>
          <button class="btn btn-outline-dark w-100">
            <i class="fab fa-github"></i> Login with GitHub
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import axios from '../api/axios';


  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        // Handle the login logic here
        console.log('Logging in with:', this.email, this.password);

        try {
        // const response = await axios.post('/auth/login', {
        //   email: this.email,
        //   password: this.password,
        // });
        const { token, role } = { token: "asdfsdfsdfsdf", role: "admin" };

        // const { token, role } = {"asdfsdfsdfsdf",'admin'}
        //  response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        // Redirect based on role
        if (role === 'admin') {
          this.$router.push('/admin-dashboard');
        } else {
          this.$router.push('/user-dashboard');
        }
      } catch (err) {
        this.error = 'Invalid credentials. Please try again.';
      }
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
  