# HandsOn-2: CSS Flexbox, Grid & Responsive Design

## Overview
This hands-on extends the Student Portal from HandsOn-1, making it **fully responsive** using Flexbox for navigation/header, CSS Grid for course cards, and media queries for multi-device support.

## Topics Covered
- CSS Flexbox
- CSS Grid
- Mobile-First Design
- Media Queries
- Viewport Units & Fluid Layouts

## Tasks

### Task 1: Flexbox Navigation & Header Layout
**Goal:** Use Flexbox to create a professional, aligned header and navigation bar.

**Files:**
- `Task-1/index.html` — Updated HTML with stats bar section
- `Task-1/styles.css` — Flexbox-based header, nav, and stats bar styling

**What was built:**
- `display: flex` on `<header>` with `align-items: center` and `justify-content: space-between`
- `<nav>` as flex container with `gap` between items
- Hero section with `flex-direction: column` and `align-items: center`
- Student stats bar with 3 stat items (Courses Enrolled, GPA, Semester) using Flexbox

**Expected Outcome:** Header, nav, and stats bar all align correctly side-by-side on a wide viewport.

---

### Task 2: CSS Grid Course Card Layout
**Goal:** Use CSS Grid to build a responsive multi-column course card layout.

**Files:**
- `Task-2/index.html` — 5 course cards wrapped in `.course-grid`
- `Task-2/styles.css` — CSS Grid layout

**What was built:**
- `.course-grid` with `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, and `gap`
- 5 course cards that auto-reflow as the viewport changes
- `align-self: stretch` for equal height cards

**Expected Outcome:** 5 course cards in 3-column grid on wide viewports, auto-reflow on narrower screens.

---

### Task 3: Responsive Design with Media Queries
**Goal:** Apply mobile-first design principles and media queries for all screen sizes.

**Files:**
- `Task-3/index.html` — Full portal HTML
- `Task-3/styles.css` — Mobile-first CSS with breakpoints

**What was built:**
- Mobile-first base styles (single column, stacked nav)
- `@media (min-width: 768px)` — 2-column cards, full nav bar
- `@media (min-width: 1024px)` — 3-column cards, increased hero padding
- Viewport units: hero `min-height: 40vh`, fluid typography with `clamp(1.5rem, 3vw, 2.5rem)`

**Expected Outcome:** Layout correct at 375px (mobile), 768px (tablet), and 1280px (desktop).

## Screenshots
See the `Outputs/` folder for screenshots of each task.

## Tools Used
- VS Code
- Browser DevTools (device toolbar for responsive testing)
