<script setup>
// Step 114: Use RouterLink for navigation
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Step 114: Use RouterLink (not <a href>) for navigation -->
  <header class="site-header">
    <RouterLink to="/" class="site-title">
      <h1>Student Portal</h1>
    </RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/courses">Courses</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>
  </header>

  <!-- Step 114: RouterView renders the matched route component -->
  <RouterView />

  <footer>
    <p>© 2026 Student Portal. All Rights Reserved.</p>
  </footer>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f0f4f8;
  color: #333;
  min-height: 100vh;
}
.site-header {
  background: linear-gradient(135deg, #1a237e, #283593);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.site-title { text-decoration: none; color: white; }
.site-title h1 { font-size: 1.5rem; font-weight: 700; }
nav { display: flex; gap: 1.5rem; }
nav a { color: rgba(255,255,255,0.75); text-decoration: none; padding: 0.3rem 0.6rem; border-radius: 4px; transition: all 0.2s; }
nav a:hover, nav a.router-link-active { color: white; background: rgba(255,255,255,0.15); font-weight: 600; }
footer {
  text-align: center;
  padding: 1.5rem;
  background: #1a237e;
  color: rgba(255,255,255,0.7);
  margin-top: 3rem;
  font-size: 0.9rem;
}
</style>
