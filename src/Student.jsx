import PropTypes from "prop-types";

function Student(props) {
  return (
    <>
      <div className="studentCard">
        <p>
          Name : {props.name}
        </p>
        <p>Age : {props.age}</p>
        <p>Stundet: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}
Student.defaultProps = {
  name: "Mega Star",
  age: 65,
  isStudent: false,
}


export default Student;