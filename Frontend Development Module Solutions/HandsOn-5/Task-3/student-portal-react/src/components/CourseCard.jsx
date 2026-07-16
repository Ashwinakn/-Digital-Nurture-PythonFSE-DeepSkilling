function CourseCard({
  id,
  name,
  code,
  credits,
  grade,
  onEnroll,
  isEnrolled
}) {
  return (
    <div className={`course-card ${isEnrolled ? "enrolled" : ""}`}>
      <h3>{name}</h3>
      <p>Code: {code}</p>
      <p>Credits: {credits}</p>
      <p>Grade: {grade}</p>

      {/* Step 69: Enroll button - calls onEnroll handler from App (lifted state) */}
      <button
        onClick={() => onEnroll({ id, name, code, credits, grade })}
        disabled={isEnrolled}
        className={isEnrolled ? "btn-enrolled" : "btn-enroll"}
      >
        {isEnrolled ? "✓ Enrolled" : "Enroll"}
      </button>
    </div>
  );
}

export default CourseCard;