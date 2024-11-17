<template>
  <div class="hero text-center">
    <h1 class="hero-title">Transform Your Career with AI</h1>
    <p class="hero-subtitle">Your personalized career growth platform is here.</p>
    <button class="btn btn-light mt-3">Get Started</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  padding: 5rem 1rem;
  color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  text-align: center;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
}
.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
  text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
}
button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background: white;
  border: none;
  border-radius: 25px;
  color: #00f2fe;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
