<script setup>
</script>

<template>
  <div class="page">
    <h2 class="page-title">Welcome to Student Portal</h2>
    <p class="subtitle">Navigate using the header links to view courses or manage your profile.</p>
    <RouterLink to="/courses" class="btn-primary">View Courses →</RouterLink>
  </div>
</template>

<style scoped>
.page { padding: 3rem 2rem; max-width: 800px; margin: 0 auto; text-align: center; }
.page-title { color: #1a237e; font-size: 2rem; margin-bottom: 1rem; }
.subtitle { color: #666; margin-bottom: 2rem; font-size: 1.1rem; }
.btn-primary { display: inline-block; padding: 0.75rem 2rem; background: #3f51b5; color: white; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.2s; }
.btn-primary:hover { background: #303f9f; }
</style>
