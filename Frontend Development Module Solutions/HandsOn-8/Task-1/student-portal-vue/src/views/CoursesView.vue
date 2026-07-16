<script setup>
import { ref, computed, onMounted } from 'vue'
import CourseCard from '../components/CourseCard.vue'
import { COURSES } from '../data/courses'

// Step 109: reactive courses array using ref
const courses = ref([])
const searchTerm = ref('')

onMounted(() => {
  courses.value = COURSES
})

// Step 111: computed property filteredCourses
const filteredCourses = computed(() => {
  return courses.value.filter(course => 
    course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
</script>

<template>
  <div class="page">
    <h2 class="page-title">Available Courses</h2>

    <div class="search-container">
      <!-- Step 111: v-model -->
      <input 
        v-model="searchTerm" 
        type="text" 
        class="search-input" 
        placeholder="Search courses..." 
      />
    </div>

    <div class="course-grid">
      <!-- Step 110: v-for and v-bind shorthand -->
      <CourseCard
        v-for="course in filteredCourses"
        :key="course.id"
        :name="course.name"
        :code="course.code"
        :credits="course.credits"
        :grade="course.grade"
      />
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
.search-input {
  width: 100%; padding: 0.75rem 1rem; font-size: 1rem;
  border: 2px solid #ddd; border-radius: 8px; outline: none;
}
.search-input:focus { border-color: #3f51b5; }
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.no-results { color: #888; font-style: italic; grid-column: 1 / -1; padding: 2rem; text-align: center; }
</style>
