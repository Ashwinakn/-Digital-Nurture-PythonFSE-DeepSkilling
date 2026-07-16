<script setup>
import { ref, computed, onMounted } from 'vue'
import { COURSES } from '../data/courses'

const courses = ref([])
const searchTerm = ref('')

onMounted(() => {
  courses.value = COURSES
})

const filteredCourses = computed(() =>
  courses.value.filter(c =>
    c.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
</script>

<template>
  <div class="page">
    <h2 class="page-title">Available Courses</h2>
    <div class="search-container">
      <input v-model="searchTerm" type="text" class="search-input" placeholder="Search courses..." />
    </div>
    <div class="course-grid">
      <div v-for="course in filteredCourses" :key="course.id" class="course-card">
        <h3>{{ course.name }}</h3>
        <p>Code: {{ course.code }}</p>
        <p>Credits: {{ course.credits }}</p>
        <p>Grade: {{ course.grade }}</p>
      </div>
      <p v-if="filteredCourses.length === 0" class="no-results">
        No courses found for "{{ searchTerm }}"
      </p>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 2rem; max-width: 1100px; margin: 0 auto; }
.page-title { color: #1a237e; font-size: 1.5rem; margin-bottom: 1.5rem; }
.search-container { margin-bottom: 1.5rem; }
.search-input { width: 100%; padding: 0.75rem 1rem; font-size: 1rem; border: 2px solid #ddd; border-radius: 8px; outline: none; }
.search-input:focus { border-color: #3f51b5; }
.course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.course-card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: transform 0.2s; }
.course-card:hover { transform: translateY(-3px); }
.course-card h3 { color: #1a237e; margin-bottom: 0.5rem; font-size: 1rem; margin-top: 0; }
.course-card p { color: #666; font-size: 0.9rem; margin: 0.25rem 0; }
.no-results { color: #888; font-style: italic; grid-column: 1/-1; text-align: center; padding: 2rem; }
</style>
