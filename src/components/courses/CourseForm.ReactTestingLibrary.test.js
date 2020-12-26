import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

//factory function
function renderCourseForm(args) {
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        errors: {},
        onSave: () => {},
        onChange: () => {},
    };

    const props = { ...defaultProps, ...args };
    return render(<CourseForm {...props} />);
}

it("should render add course header", () => {
    const { getByText } = renderCourseForm();
    getByText("Add Course");
});

//the assertion is built in the methods the render function returns
//don't have to call expect

it('should label save button "Save" when not saving', () => {
    const { getByText } = renderCourseForm();
    //debugging
    // const {getByText, debug} = renderCourseForm()
    // debug()
    getByText("Save");
});

it('should label save button "Saving..." when saving', () => {
    const { getByText } = renderCourseForm({ saving: true });
    getByText("Saving...");
});
