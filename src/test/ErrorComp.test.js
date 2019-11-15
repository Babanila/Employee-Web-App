import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import ErrorComp from "../components/ErrorComp";

describe("ErrorComp Component", () => {
  let error;
  beforeEach(() => {
    error = { message: "There is an error" };
  });

  it("should renders without crashing", () => {
    const tree = renderer.create(<ErrorComp data={error} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should renders correct error message  correctly", () => {
    const { getByTestId, getByText } = render(<ErrorComp data={error} />);
    expect(getByTestId("errorMessage")).toHaveTextContent("There is an error");
    expect(getByText(error.message)).toHaveTextContent("There is an error");
  });
});
