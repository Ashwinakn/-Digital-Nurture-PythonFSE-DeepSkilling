<script setup>
import Header from './components/Header.vue'
import CoursesView from './views/CoursesView.vue'
</script>

<template>
  <Header />
  <main>
    <CoursesView />
  </main>
</template>

<style>
/* Global styles since App.css is mostly removed */
body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f0f4f8;
  color: #333;
}
</style>
