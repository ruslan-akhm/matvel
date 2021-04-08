import React, { useState } from "react";
import { reducer, ACTIONS } from "../../reducers/employees";

function Title(props) {
  const dispatch = props.dispatch;
  const [nameAsc, setNameAsc] = useState(true);
  const [ageAsc, setAgeAsc] = useState(true);
  const [salaryAsc, setSalaryAsc] = useState(true);

  return (
    <div className="list-item list-title">
      <span>
        Name
        {nameAsc ? (
          <button
            className="sort-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.SORT_BY_NAME,
                payload: { sort: nameAsc },
              });
              setNameAsc(!nameAsc);
              setAgeAsc(true);
              setSalaryAsc(true);
            }}
          >
            &#8681;
          </button>
        ) : (
          <button
            className="sort-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.SORT_BY_NAME,
                payload: { sort: nameAsc },
              });
              setNameAsc(!nameAsc);
              setAgeAsc(true);
              setSalaryAsc(true);
            }}
          >
            &#8679;
          </button>
        )}
      </span>
      <span>
        Age
        {ageAsc ? (
          <button
            className="sort-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.SORT_BY_AGE,
                payload: { sort: ageAsc },
              });
              setAgeAsc(!ageAsc);
              setNameAsc(true);
              setSalaryAsc(true);
            }}
          >
            &#8681;
          </button>
        ) : (
          <button
            className="sort-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.SORT_BY_AGE,
                payload: { sort: ageAsc },
              });
              setAgeAsc(!ageAsc);
              setNameAsc(true);
              setSalaryAsc(true);
            }}
          >
            &#8679;
          </button>
        )}
      </span>
      <span>
        Salary
        {salaryAsc ? (
          <button
            className="sort-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.SORT_BY_SALARY,
                payload: { sort: salaryAsc },
              });
              setSalaryAsc(!salaryAsc);
              setNameAsc(true);
              setAgeAsc(true);
            }}
          >
            &#8681;
          </button>
        ) : (
          <button
            className="sort-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.SORT_BY_SALARY,
                payload: { sort: salaryAsc },
              });
              setSalaryAsc(!salaryAsc);
              setNameAsc(true);
              setAgeAsc(true);
            }}
          >
            &#8679;
          </button>
        )}
      </span>
      <span>Action</span>
    </div>
  );
}

export default Title;
