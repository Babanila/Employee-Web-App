import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import { shallow } from "enzyme";
import Register from "../components/Register";

describe("Register Component", () => {
  afterEach(cleanup);

  it("should renders without crashing", () => {
    const RegisterComponent = renderer.create(<Register />).toJSON();
    expect(RegisterComponent).toMatchSnapshot();
  });

  it("should render correct number of element in the component", () => {
    const RegisterWrapper = shallow(<Register />);
    expect(RegisterWrapper.find("form").exists).toBeTruthy();
    expect(RegisterWrapper.find("h1").exists).toBeTruthy();
    expect(RegisterWrapper.find("h3").exists).toBeTruthy();
    expect(RegisterWrapper.find("input").exists).toBeTruthy();
    expect(RegisterWrapper.find("button").exists).toBeTruthy();
    expect(RegisterWrapper.find("form").length).toEqual(1);
    expect(RegisterWrapper.find("h1").length).toEqual(1);
    expect(RegisterWrapper.find("h3").length).toEqual(1);
    expect(RegisterWrapper.find("input").length).toEqual(4);
    expect(RegisterWrapper.find("button").length).toEqual(1);
  });

  it("should renders correct employee components", async () => {
    const { getByPlaceholderText } = render(<Register />);

    expect(getByPlaceholderText("Name")).toHaveTextContent("");
    expect(getByPlaceholderText("Age")).toHaveTextContent("");
    expect(getByPlaceholderText("Salary")).toHaveTextContent("");
    expect(getByPlaceholderText("Picture")).toHaveTextContent("");
  });

  it("should renders employee details  correctly", async () => {
    const { getByPlaceholderText, getByText, queryByText, queryByTestId } = render(<Register />);

    expect(getByPlaceholderText("Name")).toHaveTextContent("");
    expect(getByPlaceholderText("Age")).toHaveTextContent("");
    expect(getByPlaceholderText("Salary")).toHaveTextContent("");
    expect(getByPlaceholderText("Picture")).toHaveTextContent("");
  });

  xit("should post to API and displays the registered user", async () => {
    const fakeAxios = {
      post: jest.fn(() =>
        Promise.resolve({
          data: {
            id: 34,
            name: "John",
            age: 25,
            salary: 4000,
            picture: "john.jpg"
          }
        })
      )
    };
    const url = "http://dummy.restapiexample.com/api/v1/create";
    const { getByText, getByTestId } = render(<Register />);

    fireEvent.click(getByTestId("register-button"));
  });
});
