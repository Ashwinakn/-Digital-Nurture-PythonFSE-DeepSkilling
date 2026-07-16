# HandsOn-3: JavaScript ES6+ & DOM Manipulation

## Overview
This hands-on brings the Student Portal to life with JavaScript, focusing on modern ES6+ syntax and direct DOM manipulation — no frameworks.

## Topics Covered
- `let` / `const` / `var`
- Arrow Functions & Template Literals
- Array Methods (`map`, `filter`, `reduce`)
- DOM Selection & Modification
- Event Listeners
- ES6 Modules (import/export)

## Tasks

### Task 1: ES6+ Syntax Practice
**Goal:** Rewrite common JavaScript patterns using modern ES6+ features.

**Files:**
- `Task-1/data.js` — Exported array of 5 course objects (id, name, code, credits, grade)
- `Task-1/app.js` — ES6 imports, destructuring, map/filter/reduce, template literals
- `Task-1/index.html` — HTML linked to `app.js` with `type="module"`

**What was built:**
- `data.js` exports const array of 5 course objects
- ES6 destructuring: `const { name, credits } = course`
- `Array.map()` to format course strings
- `Array.filter()` to get courses with credits ≥ 4
- `Array.reduce()` to calculate total credits

**Expected Outcome:** Console shows formatted course strings, filtered list, and total credits (e.g., 20).

---

### Task 2: DOM Selection & Dynamic Rendering
**Goal:** Select elements, modify the DOM, and render data dynamically.

**Files:**
- `Task-2/index.html` — Empty course grid div
- `Task-2/app.js` — Dynamic DOM rendering from course data
- `Task-2/styles.css` — Styling

**What was built:**
- `document.querySelector('.course-grid')` to select the container
- `document.createElement('article')` for each course card
- Template literal for card innerHTML
- `appendChild()` to add cards to DOM
- `#total-credits` paragraph updated dynamically

**Expected Outcome:** Course grid fully rendered from JavaScript data. Total credits shown correctly.

---

### Task 3: Event Listeners & Interactivity
**Goal:** Add user interactions using event listeners and DOM updates.

**Files:**
- `Task-3/index.html` — HTML with search input, sort button, selected-course div
- `Task-3/app.js` — Event listeners for search, sort, and card click
- `Task-3/styles.css` — Styling

**What was built:**
- Search input with `'input'` event listener for real-time filtering
- Sort by Credits button — sorts descending on click, re-renders
- Event delegation: single click listener on `.course-grid` using `event.target.closest('.course-card')`
- Selected course details displayed on card click

**Expected Outcome:** Typing filters cards instantly. Sort button reorders. Clicking a card shows its details.

## Screenshots
See the `Outputs/` folder for screenshots of each task.

## Tools Used
- VS Code
- Browser DevTools (Console for ES6+ output verification)
