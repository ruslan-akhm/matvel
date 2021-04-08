export const ACTIONS = {
  LOAD_DATA: "load-data",
  DATA_SUCCESS: "data-success",
  DATA_FAIL: "data-fail",
  REMOVE_EMPLOYEE: "remove-employee",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_DATA:
      return { ...state, loading: true };

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

    default:
      return state;
  }
};
