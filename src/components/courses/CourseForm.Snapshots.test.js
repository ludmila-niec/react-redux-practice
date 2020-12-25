import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

//goal => Assure the label of the 'save' button is properly set when we set the saving prop to true

it('Sets submit button label "saving..." when saving is true', () => {
    const tree = renderer.create(
        <CourseForm
            course={courses[0]}
            authors={authors}
            onSave={jest.fn()}
            onChange={jest.fn()}
            saving
        />
    );

    //assertion
    expect(tree).toMatchSnapshot();
});

//goal => Assure the label of the 'save' button is properly set when we set the saving prop to false

it('Sets submit button label "save" when saving is false', () => {
    const tree = renderer.create(
        <CourseForm
            course={courses[0]}
            authors={authors}
            onSave={jest.fn()}
            onChange={jest.fn()}
            saving={false}
        />
    );

    //assertion
    expect(tree).toMatchSnapshot();
});
