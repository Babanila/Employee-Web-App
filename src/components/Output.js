import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Loading from "./Loading";

const Output = ({ data }) => {
  return data.map((employee, i) => (
    <LazyLoad key={employee.id} placeholder={<Loading />}>
      <Link to={`employee/${employee.id}`} key={employee.id} id="link-cols">
        <li className="table-row">
          <div className="cols cols-2" data-label="No">
            {i + 1}
          </div>
          <div className="cols cols-2" data-label="id">
            {employee.id}
          </div>
          <div className="cols cols-2" data-label="employee_name">
            {employee.employee_name}
          </div>
          <div className="cols cols-2" data-label="employee_age">
            {employee.employee_age}
          </div>
          <div className="cols cols-2" data-label="employee_salary">
            {employee.employee_salary}
          </div>
        </li>
      </Link>
    </LazyLoad>
  ));
};

export default Output;
