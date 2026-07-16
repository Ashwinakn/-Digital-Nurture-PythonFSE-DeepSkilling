# HandsOn-6: React Routing & State Management

## Overview
This hands-on extends the React Student Portal with multi-page navigation using React Router v6, shares state across components using the Context API, and refactors global state management using Redux Toolkit.

## Topics Covered
- React Router v6 (BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams)
- useContext Hook & Context API for Global State
- Redux Toolkit (configureStore, createSlice, useSelector, useDispatch)

## Setup
```bash
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
```

## Tasks

### Task 1: Multi-Page Navigation with React Router
**Goal:** Add routing to turn the app into a single-page application (SPA).

**Files:**
- `Task-1/student-portal-react/`
- `main.jsx` — Wrapped `<App />` in `<BrowserRouter>`
- `App.jsx` — Defined routes (`/` -> `HomePage`, `/courses` -> `CoursesPage`, `/profile` -> `ProfilePage`, `/courses/:courseId` -> `CourseDetailPage`)
- `components/Header.jsx` — Used `<Link>` and `<NavLink>` (for active page highlighting)
- `pages/HomePage.jsx` — Landing page with student stats bar
- `pages/CoursesPage.jsx` — Course list page linking to details page
- `pages/CourseDetailPage.jsx` — Course details reading `:courseId` using `useParams()` and redirects using `useNavigate()`
- `pages/ProfilePage.jsx` — Profile form page

**Expected Outcome:** Client-side routing works with no full-page reloads. URL params are correctly parsed.

---

### Task 2: Global State with Context API
**Goal:** Share enrolled courses state across components without prop drilling.

**Files:**
- `Task-2/student-portal-react/`
- `context/EnrollmentContext.jsx` — Enrollment provider and context holding `enrolledCourses` state, `enroll` and `unenroll` (Remove) handlers.
- `main.jsx` — Wrapped the app in `<EnrollmentProvider>`
- `components/Header.jsx` — Consumed context to show total count of enrolled courses
- `pages/CoursesPage.jsx` / `CourseDetailPage.jsx` — Consumed context to enroll in a course and disable button if already enrolled
- `pages/ProfilePage.jsx` — Consumed context to list enrolled courses and un-enroll from a course via a "Remove" button

**Expected Outcome:** Enrolling in a course updates the header count and profile list instantly. Unenrolling updates it immediately. All shared state is managed without props.

---

### Task 3: Introduction to Redux Toolkit
**Goal:** Refactor the enrollment state to use Redux Toolkit.

**Files:**
- `Task-3/student-portal-react/`
- `store/store.js` — Redux store configuration using `configureStore()`
- `store/enrollmentSlice.js` — Slice created using `createSlice()` with reducers `enroll()` and `unenroll()`
- `main.jsx` — Replaced `EnrollmentProvider` with Redux `<Provider store={store}>`
- `components/Header.jsx` — Consumed state using `useSelector()`
- `pages/CoursesPage.jsx` / `CourseDetailPage.jsx` — Dispatched `enroll()` action using `useDispatch()`
- `pages/ProfilePage.jsx` — Dispatched `unenroll()` action using `useDispatch()` and read state using `useSelector()`

**Expected Outcome:** Shared state works identical to Context, but is powered by Redux. Actions and state transitions are visible in Redux DevTools.

## Screenshots
See the `Outputs/` folder for task screenshots.
