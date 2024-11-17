<template>
  <footer class="footer bg-light py-3 text-center">
    <div class="footer-content">
      <div class="footer-links">
        <ul class="list-unstyled d-flex justify-content-center mb-3">
          <li class="mx-3"><a href="#about">About Us</a></li>
          <li class="mx-3"><a href="#contact">Contact</a></li>
          <li class="mx-3"><a href="#careers">Careers</a></li>
          <li class="mx-3"><a href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-address">
        <p>&copy; 2024 AI Career Mentor. All rights reserved.</p>
        <p>123 Tech Street, Suite 456, Silicon Valley, CA 94043</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.footer-links ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.footer-links li {
  margin: 0 1rem;
}

.footer-links a {
  text-decoration: none;
  color: #007bff;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-address {
  text-align: center;
}
</style>
