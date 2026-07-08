import { courses } from "./data.js";

let displayedCourses = [...courses];

const courseGrid = document.querySelector(".course-grid");
const totalCreditsPara = document.getElementById("total-credits");
const searchInput = document.getElementById("search-courses");
const sortBtn = document.getElementById("sort-btn");
const selectedCourse = document.getElementById("selected-course");

function renderCourses(courseArray) {
  courseGrid.innerHTML = "";

  courseArray.forEach((course) => {
    const article = document.createElement("article");

    article.className = "course-card";
    article.dataset.id = course.id;

    article.innerHTML = `
      <h3>${course.name}</h3>
      <p>Code: ${course.code}</p>
      <p>Credits: ${course.credits}</p>
      <span>Grade: ${course.grade}</span>
    `;

    courseGrid.appendChild(article);
  });
}

function showTotalCredits() {
  const totalCredits = courses.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  totalCreditsPara.textContent =
    `Total Credits Enrolled: ${totalCredits}`;
}

renderCourses(displayedCourses);
showTotalCredits();


searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();

  displayedCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(value)
  );

  renderCourses(displayedCourses);
});


sortBtn.addEventListener("click", () => {
  displayedCourses.sort((a, b) => b.credits - a.credits);

  renderCourses(displayedCourses);
});


courseGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".course-card");

  if (!card) return;

  const courseId = Number(card.dataset.id);

  const selected = courses.find(
    (course) => course.id === courseId
  );

  selectedCourse.innerHTML = `
    <h3>Selected Course</h3>
    <p>${selected.name}</p>
    <p>Grade: ${selected.grade}</p>
  `;
});