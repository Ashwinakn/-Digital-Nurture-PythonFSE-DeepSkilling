<script setup>
// Step 108: defineProps
defineProps({
  name: String,
  code: String,
  credits: Number,
  grade: String
})
</script>

<template>
  <div class="course-card">
    <h3>{{ name }}</h3>
    <p>Code: {{ code }}</p>
    <p>Credits: {{ credits }}</p>
    <p>Grade: {{ grade }}</p>
  </div>
</template>

<style scoped>
.course-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}
.course-card:hover { transform: translateY(-3px); }
h3 { color: #1a237e; margin-bottom: 0.5rem; font-size: 1rem; margin-top: 0; }
p { color: #666; font-size: 0.9rem; margin: 0.25rem 0; }
</style>
