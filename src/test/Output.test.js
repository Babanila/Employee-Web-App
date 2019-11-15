import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Output from "../components/Output";

describe("Output Component", () => {
  afterEach(cleanup);

  let allEmployees;

  beforeEach(() => {
    allEmployees = [
      {
        id: 1,
        employee_name: "John",
        employee_age: 25,
        employee_salary: 4000
      },
      {
        id: 2,
        employee_name: "Jane",
        employee_age: 23,
        employee_salary: 5000
      }
    ];
  });

  it("should renders without crashing", () => {
    const OutputComponent = renderer.create(<Output data={allEmployees} />).toJSON();
    expect(OutputComponent).toMatchSnapshot();
  });

  it("should renders employee details  correctly", async () => {
    const { queryByText, queryByTestId } = render(<Output data={allEmployees} />);

    expect(queryByText(allEmployees[0]["employee_name"])).toBeNull();
    expect(queryByTestId("employee_name")).not.toBeTruthy();
  });

  it("should render correct number of element in output component", () => {
    const OutputWrapper = shallow(<Output data={allEmployees} />);
    expect(OutputWrapper.find("li").exists).toBeTruthy();
    expect(OutputWrapper.find("div").exists).toBeTruthy();
    expect(OutputWrapper.find("li").length).toEqual(2);
    expect(OutputWrapper.find("div").length).toEqual(10);
  });
});
