import { courses } from "./data.js";

// Destructuring
courses.forEach(course => {
  const { name, credits } = course;
  console.log(`${name} - ${credits} credits`);
});

// map()
const formattedCourses = courses.map(
  course => `${course.code} - ${course.name} (${course.credits} credits)`
);

console.log(formattedCourses);

// filter()
const highCreditCourses = courses.filter(
  course => course.credits >= 4
);

console.log("Courses >= 4 credits:", highCreditCourses.length);

// reduce()
const totalCredits = courses.reduce(
  (sum, course) => sum + course.credits,
  0
);

console.log("Total Credits:", totalCredits);