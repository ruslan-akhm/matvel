import { useReducer } from "react";
import { reducer, ACTIONS } from "./reducers/employees";
import axios from "axios";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: false,
    data: [],
  });

  const getData = async () => {
    try {
      dispatch({ type: ACTIONS.LOAD_DATA });
      let response = await axios.get(
        "http://dummy.restapiexample.com/api/v1/employees"
      );
      // One of the requirements states: Consider success only if status === 200, otherwise display error.
      // If we recieve anything other than 200 - we consider it's a fail
      if (response.status !== 200) {
        return dispatch({ type: ACTIONS.DATA_FAIL });
      }
      return dispatch({
        type: ACTIONS.DATA_SUCCESS,
        payload: { data: response.data.data },
      });
    } catch (err) {
      return dispatch({ type: ACTIONS.DATA_FAIL });
    }
  };

  const { data, loading, error } = state;

  const list =
    data &&
    data.map(item => {
      return (
        <li key={item.id}>
          <div>
            {item.employee_name}, {item.employee_age}, {item.employee_salary}
          </div>
          <button
            onClick={() => {
              dispatch({
                type: ACTIONS.REMOVE_EMPLOYEE,
                payload: { id: item.id },
              });
            }}
          >
            REMOVE
          </button>
        </li>
      );
    });

  return (
    <div>
      <h1>Employees</h1>
      <div>
        {list && <ul>{list}</ul>}
        {loading && <h2>LOADING</h2>}
        {error && <h2>ERROR</h2>}
      </div>
      <button onClick={getData}>GET!</button>
    </div>
  );
}

export default App;
