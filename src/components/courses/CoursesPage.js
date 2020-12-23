import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
    state = {
        course: {
            title: "",
        },
    };

    handleChange = (e) => {
        const course = { ...this.state.course, title: e.target.value };

        this.setState({ course });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // debugger;
        // this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" />
                {this.props.courses.map((course) => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    // createCourse: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    // debugger;
    return {
        courses: state.courses,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: (course) => dispatch(courseActions.createCourse(course)),
        actions: bindActionCreators(courseActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
