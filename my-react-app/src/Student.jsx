// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: Proptypes.number
//

// defaultProps = default values for props in case they are not
//                passed in from the parent component.
//                name: "Guest"

import PropTypes from "prop-types";

function Student(props) {
    // props is going to be a JS object - Note: Booleans don't display directly to the DOM
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// HOW TO CREATE A PROPTYPE - notice the import above - from NPM modules
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

export default Student;
