import { courses } from "./data.js";

let displayedCourses = [...courses];

const courseGrid = document.querySelector(".course-grid");
const totalCreditsPara = document.getElementById("total-credits");
const searchInput = document.getElementById("search-courses");
const sortBtn = document.getElementById("sort-btn");
const selectedCourse = document.getElementById("selected-course");
const loading = document.getElementById("loading");
const notificationList = document.getElementById("notification-list");
const notificationLoading = document.getElementById("notification-loading");
const notificationError = document.getElementById("notification-error");
const retryBtn = document.getElementById("retry-btn");


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

loading.style.display = "block";

fetchAllCourses().then((data) => {
  displayedCourses = data;

  renderCourses(displayedCourses);
  showTotalCredits();

  loading.style.display = "none";
});

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

async function fetchUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user = await response.json();

    console.log("User:", user.name);
  } catch (error) {
    console.error(error);
  }
}

fetchUser(1);

function fetchAllCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses);
    }, 1000);
  });
}

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json()),

  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((res) => res.json())
]).then((users) => {
  console.log(users[0].name);
  console.log(users[1].name);
});

async function apiFetch(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `HTTP Error: ${response.status}`
    );
  }

  return await response.json();
}

async function loadNotifications() {
  notificationLoading.style.display = "block";
  notificationError.textContent = "";
  retryBtn.style.display = "none";

  try {
    const posts = await apiFetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=4"
    );

    notificationList.innerHTML = "";

    posts.forEach((post) => {
      const card = document.createElement("div");

      card.className = "notification-card";

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      notificationList.appendChild(card);
    });

  } catch (error) {
    notificationError.textContent =
      "Failed to load notifications.";

    retryBtn.style.display = "inline-block";
  } finally {
    notificationLoading.style.display = "none";
  }
}

loadNotifications();
retryBtn.addEventListener(
  "click",
  loadNotifications
);