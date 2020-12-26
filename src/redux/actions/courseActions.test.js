import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";

import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

//testing Async Actions
//config mock store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    //GOAL: assert theactions below are created
    describe("Load Courses thunk", () => {
        it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
            //this captures all fetch call and responds with some moch data
            fetchMock.mock("*", {
                body: courses,
                headers: {
                    "content-type": "application/json",
                },
            });

            //the expected actions to be fired
            const expectedActions = [
                { type: types.BEGIN_API_CALL },
                { type: types.LOAD_COURSES_SUCCESS, courses },
            ];

            //initialize de mock store with an empty array for courses
            const store = mockStore({ courses: [] });
            return store.dispatch(courseActions.loadCourses()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                //getActions() returns a list of actions that ocurred
            });
        });
    });
});

describe("createCourseSuccess", () => {
    it("should create CREATE_COURSE_SUCCESS action", () => {
        const course = courses[0];
        const expectedAction = {
            type: types.CREATE_COURSE_SUCCESS,
            course,
        };

        //action
        const action = courseActions.createCourseSuccess(course);

        //assertion
        expect(action).toEqual(expectedAction);
    });
});
