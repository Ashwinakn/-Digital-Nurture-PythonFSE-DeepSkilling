# HandsOn-8: Vue.js — Composition API, Vue Router & Pinia

## Overview
This hands-on rebuilds the Student Portal using **Vue 3** with the Composition API. It covers Vue components, directives, Vue Router, and Pinia state management.

## Topics Covered
- Vue 3 Composition API (`ref`, `computed`, `onMounted`)
- Component `defineProps`
- Built-in Directives: `v-for`, `v-if`, `v-model`, `v-bind`, `v-on`
- Vue Router (route definitions, `<RouterLink>`, `<RouterView>`)
- Pinia Store (`defineStore`, `state`, `getters`, `actions`)

## Setup
```bash
npm create vue@latest student-portal-vue -- --router --pinia
cd student-portal-vue
npm install
npm run dev
```
App runs at: http://localhost:5173

## Project Structure (Task 3 — Full)
```
student-portal-vue/
└── src/
    ├── main.js               # App entry point
    ├── App.vue               # Root component with RouterView
    ├── data/
    │   └── courses.js        # Course data
    ├── stores/
    │   └── courseStore.js    # Pinia store (Task 3)
    ├── router/
    │   └── index.js          # Vue Router routes (Task 2)
    ├── components/
    │   ├── Header.vue        # Navigation header
    │   └── CourseCard.vue    # Course card
    └── views/
        ├── HomeView.vue      # Home page
        ├── CoursesView.vue   # Courses list page
        └── ProfileView.vue   # Profile form page
```

## Tasks

### Task 1: Vue Composition API & Components ✅
**Goal:** Create Vue 3 components using the Composition API.

**Steps:**
- Scaffolded project with `create-vue@latest`
- Used `ref()`, `computed()`, and `onMounted()` in `CoursesView.vue`
- Created `CourseCard.vue` with `defineProps`
- Used `v-for`, `v-if`, `v-model` directives in the template
- Passed props to `CourseCard` using `v-bind` (`:name`, `:code` etc.)

**Key Concepts:**
- `ref()` — reactive variable
- `computed()` — derived reactive data (filtered list)
- `defineProps()` — receives data from parent
- `v-model` — two-way binding on the search input

---

### Task 2: Vue Router ✅
**Goal:** Add client-side routing to navigate between pages.

**Steps:**
- Created `router/index.js` with route definitions for `/`, `/courses`, `/profile`
- Registered the router with `app.use(router)` in `main.js`
- Used `<RouterLink>` in the Header for navigation
- Used `<RouterView>` in `App.vue` to render matched route components

**Key Concepts:**
- `createRouter()` / `createWebHistory()` — set up SPA routing
- `<RouterLink to="...">` — declarative navigation (no page reload)
- `<RouterView>` — dynamic component outlet for active route

---

### Task 3: Pinia State Management ✅
**Goal:** Replace local state with a global Pinia store.

**Steps:**
- Created `stores/courseStore.js` using `defineStore`
- Defined `state`, `getters` (filteredCourses), and `actions` (fetchCourses)
- Used `useCoursesStore()` in `CoursesView.vue` — removed local `ref()`
- Replaced local computed with the store's getter via `storeToRefs`

**Key Concepts:**
- `defineStore()` — creates a named store
- `state` — reactive state (like Vue's `data`)
- `getters` — computed properties on the store
- `actions` — methods that mutate state
- `storeToRefs()` — destructure store refs without losing reactivity

## Screenshots
See the `Outputs/` folder inside each task for screenshots.
