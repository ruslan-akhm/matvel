export const ACTIONS = {
  LOAD_DATA: "load-data",
  DATA_SUCCESS: "data-success",
  DATA_FAIL: "data-fail",
  REMOVE_EMPLOYEE: "remove-employee",
  SORT_BY_NAME: "sort-by-name",
  SORT_BY_AGE: "sort-by-age",
  SORT_BY_SALARY: "sort-by-salary",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_DATA:
      return { ...state, loading: true, error: false };

    case ACTIONS.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case ACTIONS.DATA_FAIL:
      return { ...state, loading: false, error: true };

    case ACTIONS.REMOVE_EMPLOYEE:
      return {
        ...state,
        data: state.data.filter(item => {
          return item.id !== action.payload.id;
        }),
      };

    case ACTIONS.SORT_BY_NAME:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          if (a.employee_name < b.employee_name) {
            return -1;
          }
          if (a.employee_name > b.employee_name) {
            return 1;
          }
          return 0;
        }),
      };

    case ACTIONS.SORT_BY_AGE:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          if (a.employee_age < b.employee_age) {
            return -1;
          }
          if (a.employee_age > b.employee_age) {
            return 1;
          }
          return 0;
        }),
      };

    case ACTIONS.SORT_BY_SALARY:
      return {
        ...state,
        data: state.data.sort((a, b) => {
          if (a.employee_salary < b.employee_salary) {
            return -1;
          }
          if (a.employee_salary > b.employee_salary) {
            return 1;
          }
          return 0;
        }),
      };

    default:
      return state;
  }
};
