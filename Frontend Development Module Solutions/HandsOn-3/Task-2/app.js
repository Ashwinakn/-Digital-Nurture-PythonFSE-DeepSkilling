import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const totalCreditsPara = document.getElementById("total-credits");

// Render courses
function renderCourses() {
  courseGrid.innerHTML = "";

  courses.forEach((course) => {
    const article = document.createElement("article");

    article.className = "course-card";

    article.innerHTML = `
      <h3>${course.name}</h3>
      <p>Code: ${course.code}</p>
      <p>Credits: ${course.credits}</p>
      <span>Grade: ${course.grade}</span>
    `;

    courseGrid.appendChild(article);
  });
}

// Total credits
function showTotalCredits() {
  const totalCredits = courses.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  totalCreditsPara.textContent =
    `Total Credits Enrolled: ${totalCredits}`;
}

renderCourses();
showTotalCredits();