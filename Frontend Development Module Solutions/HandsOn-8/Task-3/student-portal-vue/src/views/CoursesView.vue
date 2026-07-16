<script setup>
// Step 116: Use store in a component via useCoursesStore()
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCoursesStore } from '../stores/courseStore'

const store = useCoursesStore()

// Step 116: storeToRefs keeps reactivity when destructuring
const { filteredCourses, searchTerm, loading } = storeToRefs(store)

onMounted(() => {
  store.fetchCourses()  // Step 116: call store action
})
</script>

<template>
  <div class="page">
    <h2 class="page-title">Available Courses</h2>

    <div class="search-container">
      <!-- Bind to store's searchTerm via v-model -->
      <input
        :value="searchTerm"
        @input="store.setSearch($event.target.value)"
        type="text"
        class="search-input"
        placeholder="Search courses..."
      />
    </div>

    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading courses...</p>
    </div>

    <div v-else class="course-grid">
      <div v-for="course in filteredCourses" :key="course.id" class="course-card">
        <h3>{{ course.name }}</h3>
        <p>Code: {{ course.code }}</p>
        <p>Credits: {{ course.credits }}</p>
        <p>Grade: {{ course.grade }}</p>
      </div>
      <p v-if="filteredCourses.length === 0 && !loading" class="no-results">
        No courses found for "{{ searchTerm }}"
      </p>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 2rem; max-width: 1100px; margin: 0 auto; }
.page-title { color: #1a237e; font-size: 1.5rem; margin-bottom: 1.5rem; }
.search-input { width: 100%; padding: 0.75rem 1rem; font-size: 1rem; border: 2px solid #ddd; border-radius: 8px; outline: none; margin-bottom: 1.5rem; display: block; }
.search-input:focus { border-color: #3f51b5; }
.course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.course-card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: transform 0.2s; }
.course-card:hover { transform: translateY(-3px); }
.course-card h3 { color: #1a237e; margin-bottom: 0.5rem; font-size: 1rem; margin-top: 0; }
.course-card p { color: #666; font-size: 0.9rem; margin: 0.25rem 0; }
.loading { display: flex; flex-direction: column; align-items: center; padding: 3rem; gap: 1rem; }
.spinner { width: 40px; height: 40px; border: 4px solid #e0e0e0; border-top-color: #3f51b5; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.no-results { color: #888; font-style: italic; text-align: center; padding: 2rem; }
</style>
