import React from "react";
import { ErrorCompStyles } from "../styles/ErrorCompStyles";

const ErrorComp = props => {
  return (
    <ErrorCompStyles>
      <div>
        <p>
          Error Details:
          <span className="error-message">{props.data.message}</span>
        </p>
      </div>
    </ErrorCompStyles>
  );
};

export default ErrorComp;
