# HandsOn-1: HTML5 Semantic Structure & CSS3 Foundations

## Overview
This hands-on builds the structural skeleton of the **Student Portal** web application using proper semantic HTML5 elements and styles it with CSS3 fundamentals.

## Topics Covered
- HTML5 Semantic Elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- CSS3 Selectors & Specificity
- CSS Box Model
- Typography & Spacing
- Basic Page Layout

## Tasks

### Task 1: Build the Page Skeleton with Semantic HTML5
**Goal:** Create a well-structured, accessible HTML page using the correct semantic elements.

**Files:**
- `Task-1/index.html` — Full semantic HTML structure with header, nav, main (hero + courses sections), and footer.

**What was built:**
- HTML5 doctype with `lang="en"`, charset, viewport meta, and descriptive title
- `<header>` with site name and `<nav>` containing an unordered list of links (Home, Courses, Profile, Grades)
- `<main>` with two sections: `#hero` (welcome, description, button) and `#courses` (3 articles with h3, p, span)
- `<footer>` with copyright text
- Validated at W3C Validator with zero errors

**Expected Outcome:** Page has a visible header, nav, two sections, and a footer when opened in a browser.

---

### Task 2: Apply CSS3 Fundamentals
**Goal:** Style the page using selectors, the box model, and basic typography.

**Files:**
- `Task-2/index.html` — HTML (with `.course-card` class added to articles)
- `Task-2/styles.css` — Complete CSS3 styling

**What was built:**
- CSS reset: `* { margin: 0; padding: 0; box-sizing: border-box; }`
- `body` font-family, background color, text color
- `<header>` with padding, background color, `display: flex`, `justify-content: space-between`
- Nav links: no list-style, inline display, spacing, custom text-decoration
- Hero section: centered text, generous padding, styled button with `:hover` pseudo-class
- `.course-card` class: padding, border, border-radius, box-shadow

**Expected Outcome:** Visually styled page with clear header, styled navigation, hero with button, and bordered course cards.

## Screenshots
See the `Outputs/` folder for screenshots of each task.

## Tools Used
- VS Code
- Browser (Chrome)
- W3C Validator (https://validator.w3.org/)
