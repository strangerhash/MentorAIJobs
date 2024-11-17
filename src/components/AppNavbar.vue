<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">MentorAI</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
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
        <router-link to="/login" class="btn btn-outline-primary me-2">Login</router-link>
        <router-link to="/register" class="btn btn-primary">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar .d-flex {
  display: flex;
  align-items: center;
}

.navbar .btn {
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
}

.navbar .btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.navbar .btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}

.navbar .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.navbar .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
