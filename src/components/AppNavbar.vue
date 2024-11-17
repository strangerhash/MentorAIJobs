<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">SKILLBOT.AI</a>
      <!-- Toggle Button for Mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/resume-analyzer" class="nav-link">Resume Analyzer</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/learning-paths" class="nav-link">Learning Paths</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mentors" class="nav-link">Mentors</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ai-assessment" class="nav-link">AI Skill Assessment</router-link>
          </li>
        </ul>
      </div>
      <!-- Authentication Links -->
      <div class="d-flex">
        <router-link to="/login" class="btn btn-primary me-2">Login</router-link>
        <router-link to="/register" class="btn btn-primary">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
/* General Navbar Styles */
.navbar {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(145deg, #ff6a00, #ee0979);
  position: relative;
}

.navbar .navbar-brand {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.navbar .navbar-toggler {
  background-color: #fff;
  border: 2px solid #ff6a00;
  border-radius: 50px;
}

.navbar .navbar-toggler-icon {
  background-color: #ff6a00;
}

/* Navbar Items */
.navbar-nav {
  display: flex;
  align-items: center;
}

.navbar-nav .nav-item {
  margin: 0 15px;
  position: relative;
  transition: transform 0.3s ease;
}

.navbar-nav .nav-item:hover {
  transform: scale(1.1);
}

.navbar-nav .nav-item .nav-link {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  position: relative;
}

.navbar-nav .nav-item .nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.navbar-nav .nav-item .nav-link:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Button Styles */
.navbar .btn {
  font-size: 1rem;
  padding: 0.6rem 1.6rem;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.navbar .btn-outline-primary {
  color: #ff6a00;
  border-color: #ff6a00;
}

.navbar .btn-outline-primary:hover {
  background-color: #ff6a00;
  color: #fff;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.navbar .btn-primary {
  background-color: #ff6a00;
  border-color: #ff6a00;
}

.navbar .btn-primary:hover {
  background-color: #ee0979;
  border-color: #ee0979;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

/* Mobile Responsiveness */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
  }
  .navbar-nav .nav-item {
    margin: 10px 0;
  }
}
</style>
