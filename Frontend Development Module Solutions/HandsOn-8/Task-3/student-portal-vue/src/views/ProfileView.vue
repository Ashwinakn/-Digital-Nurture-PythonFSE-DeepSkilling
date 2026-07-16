<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const semester = ref('')
const submitted = ref(false)

function onSubmit() {
  console.log('Profile:', { name: name.value, email: email.value, semester: semester.value })
  submitted.value = true
  setTimeout(() => submitted.value = false, 3000)
}
</script>

<template>
  <div class="page">
    <h2 class="page-title">Student Profile</h2>
    <div class="profile-card">
      <form @submit.prevent="onSubmit" class="profile-form">
        <div class="form-group">
          <label>Full Name</label>
          <input v-model="name" type="text" placeholder="Enter your full name" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label>Semester (1-8)</label>
          <input v-model="semester" type="number" min="1" max="8" placeholder="e.g. 4" required />
        </div>
        <button type="submit" class="btn-submit">Save Profile</button>
      </form>
      <div v-if="submitted" class="success-message">✓ Profile saved successfully!</div>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 2rem; max-width: 500px; margin: 0 auto; }
.page-title { color: #1a237e; font-size: 1.5rem; margin-bottom: 1.5rem; }
.profile-card { background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.profile-form { display: flex; flex-direction: column; gap: 1.2rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-group label { font-size: 0.9rem; font-weight: 600; color: #555; }
.form-group input { padding: 0.65rem 0.9rem; border: 2px solid #ddd; border-radius: 8px; font-size: 0.95rem; outline: none; }
.form-group input:focus { border-color: #3f51b5; }
.btn-submit { padding: 0.7rem 1.5rem; background: #3f51b5; color: white; border: none; border-radius: 8px; font-size: 0.95rem; font-weight: 600; cursor: pointer; }
.btn-submit:hover { background: #303f9f; }
.success-message { margin-top: 1rem; background: #e8f5e9; border: 1px solid #81c784; color: #2e7d32; padding: 1rem; border-radius: 8px; font-weight: 600; }
</style>
