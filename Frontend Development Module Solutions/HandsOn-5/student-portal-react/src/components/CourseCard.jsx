function CourseCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Code: {props.code}</p>
      <p>Credits: {props.credits}</p>
      <p>Grade: {props.grade}</p>
    </div>
  );
}

export default CourseCard;