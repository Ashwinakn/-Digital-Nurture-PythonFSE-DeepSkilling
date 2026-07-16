# HandsOn-4: Async JavaScript, Fetch API & API Integration

## Overview
This hands-on replaces hardcoded data with **live data fetched from public APIs**, covering Promises, async/await, error handling, loading states, and Axios.

## Topics Covered
- Promises & `async/await`
- Fetch API
- Error Handling (`try/catch`)
- Loading States
- Axios (introduction)
- Dynamic DOM from API Data

## API Used
**JSONPlaceholder** (https://jsonplaceholder.typicode.com) — free fake REST API for testing.

## Tasks

### Task 1: Promises and async/await
**Goal:** Understand Promise chaining and rewrite using async/await.

**Files:**
- `Task-1/index.html` — HTML with loading indicator
- `Task-1/app.js` — Promise chains and async/await patterns
- `Task-1/data.js` — Course data
- `Task-1/styles.css` — Styling

**What was built:**
- `fetchUser(id)` using `.then()` Promise chaining
- Same function rewritten with `async/await` and `try/catch`
- `fetchAllCourses()` simulating 1-second delay with `new Promise(resolve => setTimeout(resolve, 1000))`
- Cards rendered only after promise resolves, with loading message
- `Promise.all()` fetching user 1 and user 2 simultaneously

**Expected Outcome:** Loading message appears for ~1 second before cards render.

---

### Task 2: Fetch API with Error Handling
**Goal:** Build a robust data-fetching layer with proper error handling and UI feedback.

**Files:**
- `Task-2/index.html` — HTML with notifications section, loading spinner, retry button
- `Task-2/app.js` — `apiFetch()` function, loading/error states
- `Task-2/styles.css` — Styling including loading spinner

**What was built:**
- Reusable `apiFetch(url)` async function checking `response.ok`, throwing descriptive Error
- Notification cards loaded from `/posts` API
- CSS loading indicator (animated spinner)
- User-friendly error message on API failure (never just console.log)
- Retry button that re-calls the fetch on click

**Expected Outcome:** Notifications load from API. Bad URL shows friendly error + Retry button.

---

### Task 3: Introduction to Axios
**Goal:** Compare Fetch with Axios and use Axios for API calls.

**Files:**
- `Task-3/index.html` — HTML with Axios CDN included
- `Task-3/app.js` — Axios usage: get, params, interceptors, and fetch vs axios comparison
- `Task-3/styles.css` — Styling

**What was built:**
- Axios via CDN: `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js">`
- `apiFetch()` rewritten using `axios.get()` (automatic JSON parsing, auto-throws on non-2xx)
- `axios.get('/posts', { params: { userId: 1 } })` for filtered API calls
- Request interceptor: `axios.interceptors.request.use()` logs 'API call started'
- Code comment comparing 3 differences: Fetch vs Axios

**Expected Outcome:** Axios fetches user 1's posts. Interceptor logs every request. Comment lists 3 differences.

## Screenshots
See the `Outputs/` folder for screenshots of each task.

## Tools Used
- VS Code
- Browser DevTools
- JSONPlaceholder API (https://jsonplaceholder.typicode.com)
- Axios CDN
