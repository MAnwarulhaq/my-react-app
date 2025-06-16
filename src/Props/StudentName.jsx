function StudentName(props) {
  return (
    <div className="student-name">
        <p>How to pass  props on click </p>
      <h2>Student Name {props.studentname}</h2>
      <p></p>
    </div>
  );
}
export default StudentName;