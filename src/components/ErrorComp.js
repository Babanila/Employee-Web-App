import React from "react";
import { ErrorCompStyles } from "../styles/ErrorCompStyles";

const ErrorComp = props => {
  return (
    <ErrorCompStyles>
      <p>
        Error:
        <span data-testid="errorMessage" className="error-message">
          {props.data.message}
        </span>
      </p>
    </ErrorCompStyles>
  );
};

export default ErrorComp;
