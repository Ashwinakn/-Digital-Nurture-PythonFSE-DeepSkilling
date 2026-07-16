<script setup>
</script>

<template>
  <header class="site-header">
    <a href="/" class="site-title">
      <h1>Student Portal</h1>
    </a>
    <nav>
      <a href="/" class="active">Home</a>
      <a href="/courses">Courses</a>
    </nav>
  </header>
</template>

<style scoped>
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
h1 { font-size: 1.5rem; font-weight: 700; margin: 0; }
nav { display: flex; gap: 1.5rem; }
nav a { color: rgba(255,255,255,0.75); text-decoration: none; padding: 0.3rem 0.6rem; border-radius: 4px; transition: all 0.2s; }
nav a:hover, nav a.active { color: white; background: rgba(255,255,255,0.15); font-weight: 600; }
</style>
