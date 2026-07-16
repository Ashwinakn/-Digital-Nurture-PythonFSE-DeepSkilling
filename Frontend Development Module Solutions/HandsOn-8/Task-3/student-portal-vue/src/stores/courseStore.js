// Step 115: Create a Pinia store using defineStore
// state, getters, actions pattern
import { defineStore } from 'pinia'
import { COURSES } from '../data/courses'

export const useCoursesStore = defineStore('courses', {
  // Step 115: state — reactive data
  state: () => ({
    courses: [],
    searchTerm: '',
    loading: false,
  }),

  // Step 115: getters — computed properties derived from state
  getters: {
    filteredCourses: (state) => {
      return state.courses.filter(c =>
        c.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    },
  },

  // Step 115: actions — methods that update state
  actions: {
    fetchCourses() {
      this.loading = true
      // Simulate async fetch with local data
      setTimeout(() => {
        this.courses = COURSES
        this.loading = false
      }, 500)
    },
    setSearch(term) {
      this.searchTerm = term
    },
  },
})
