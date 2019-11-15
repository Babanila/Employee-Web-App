import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";

const Output = ({ data }) => {
  return data.map((employee, i) => (
    <LazyLoad key={employee.id} placeholder={<Loading />}>
      <Link to={`employee/${employee.id}`} key={employee.id} id="link-cols">
        <li data-testid="single-details" className="table-row">
          <div data-testid="employee-no" className="cols cols-2" data-label="No">
            {i + 1}
          </div>
          <div data-testid="employee-id" className="cols cols-2" data-label="id">
            {employee.id}
          </div>
          <div data-testid="employee-name" className="cols cols-2" data-label="employee_name">
            {employee.employee_name}
          </div>
          <div data-testid="employee-age" className="cols cols-2" data-label="employee_age">
            {employee.employee_age}
          </div>
          <div data-testid="employee-salary" className="cols cols-2" data-label="employee_salary">
            {employee.employee_salary}
          </div>
        </li>
      </Link>
    </LazyLoad>
  ));
};

export default Output;
