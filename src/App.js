import { useReducer } from "react";
import axios from "axios";
import { reducer, ACTIONS } from "./reducers/employees";
import Title from "./components/title/title";
import Spinner from "./components/loading/loading";
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
        <li key={item.id} className="list-item">
          <span>{item.employee_name}</span> <span>{item.employee_age}</span>{" "}
          <span>{item.employee_salary}</span>
          <button
            className="remove-button"
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
    <div id="mainpage">
      <h1>Employees</h1>
      <div className="container">
        {list && list.length > 0 && (
          <div className="list-wrapper">
            <Title dispatch={dispatch} />
            <ul className="list">{list}</ul>
          </div>
        )}
        {loading && <Spinner />}
        {error && <h3>Something went wrong...</h3>}
      </div>
      <button onClick={getData} className="get-button">
        GET!
      </button>
    </div>
  );
}

export default App;
