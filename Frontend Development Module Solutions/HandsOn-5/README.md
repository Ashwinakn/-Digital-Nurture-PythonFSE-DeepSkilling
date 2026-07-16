# HandsOn-5: React Fundamentals — Components, Props, State & Hooks

## Overview
This hands-on rebuilds the Student Portal as a **React application** using Vite. It covers JSX, functional components, props, useState, and useEffect hooks.

## Topics Covered
- JSX Syntax
- Functional Components
- Props & Prop Types
- `useState` Hook
- `useEffect` Hook
- Conditional Rendering & Lists

## Setup
```bash
npm create vite@latest student-portal-react -- --template react
cd student-portal-react
npm install
npm run dev
```
App runs at: http://localhost:5173

## Tasks

### Task 1: Project Setup & First Components ✅
**Goal:** Scaffold the React app and create the first reusable components.

**Location:** `student-portal-react/` (root)

**What was built:**
- Vite + React project setup, runs at http://localhost:5173
- `components/Header.jsx` — site title, nav (Home, Courses, Profile), enrolled count prop
- `components/Footer.jsx` — copyright line
- `components/CourseCard.jsx` — accepts name, code, credits, grade as props
- `App.jsx` — renders Header, Footer, and CourseCard components
- Props passed: `<Header siteName="Student Portal" enrolledCount={n} />`

**Expected Outcome:** App renders header with passed site name, footer, and course cards.

---

### Task 2: State with useState and Dynamic Lists
**Goal:** Use useState to manage component state and render dynamic lists.

**Location:** `Task-2/student-portal-react/`

**What was built:**
- `const [courses] = useState(coursesData)` — initialized from data.js
- `const [searchTerm, setSearchTerm] = useState("")` — filters courses in real time
- `const [enrolledCourses, setEnrolledCourses] = useState([])` — lifted state
- `filteredCourses.map(course => <CourseCard key={course.id} ... />)` — unique key on each
- Enroll button in CourseCard — `onEnroll` handler passed as prop (lifted state)
- Enrolled count displayed in Header as prop

**Expected Outcome:** Typing in search filters cards in real time. Clicking Enroll updates enrolled count.

---

### Task 3: useEffect Hook & Lifecycle
**Goal:** Use useEffect to fetch data and manage side effects.

**Location:** `Task-3/student-portal-react/`

**What was built:**
- `useEffect(() => { fetchCourses(); }, [])` — fetches from JSONPlaceholder `/posts` on mount
- Maps posts to course-like objects (id, name from title, code, credits, grade)
- `const [loading, setLoading] = useState(true)` — shows spinner while loading
- `const [error, setError] = useState(null)` — displays error message on failure
- `StudentProfile.jsx` — separate component with local state (name, email, semester), form bound via onChange
- Second `useEffect([courses])` — logs 'Courses updated' when courses state changes

**Key Concepts:**
- Empty `[]` dep array = runs once on mount (componentDidMount equivalent)
- `[courses]` dep array = runs on every courses update
- Missing dep array = runs on every render (infinite loop risk)

**Expected Outcome:** Courses load from API. Loading spinner appears briefly. Profile form updates local state on typing.

## Screenshots
See the `Outputs/` folder for screenshots of each task.

## Project Structure
```
HandsOn-5/
├── student-portal-react/        # Task-1 project
│   └── src/
│       ├── App.jsx
│       ├── data.js
│       └── components/
│           ├── Header.jsx
│           ├── Footer.jsx
│           └── CourseCard.jsx
├── Task-2/
│   └── student-portal-react/    # Task-2 project (useState + lists)
├── Task-3/
│   └── student-portal-react/    # Task-3 project (useEffect + API)
└── Outputs/
    └── HandsOn5-Task-1.jpg
```

## Tools Used
- VS Code
- Node.js + npm
- Vite (React build tool)
- JSONPlaceholder API (Task-3)
