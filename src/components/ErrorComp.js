import React from "react";
import { ErrorCompStyles } from "../styles/ErrorCompStyles";

const ErrorComp = props => {
  console.log(props);
  return (
    <ErrorCompStyles>
      Error Details:
      <span className="error-message">{props.data.message}</span>
    </ErrorCompStyles>
  );
};

export default ErrorComp;
