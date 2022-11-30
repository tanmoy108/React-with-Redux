import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.upDownNumber);
  const dispatch = useDispatch();

  // if (myState < 0) {
  //   alert("negative value!!!");
  // }
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>React with Redux</h2>
          <h4>increment and decrement</h4>

          <div className="function">
            {myState === 0 ? (
              <button
                className="decrement"
                onClick={() => dispatch(decrementNumber())}
                disabled
              >
                -
              </button>
            ) : (
              <button
                className="decrement"
                onClick={() => dispatch(decrementNumber())}
              >
                -
              </button>
            )}
            <input
              className="inputText"
              type="text"
              value={myState}
              readOnly
            ></input>
            <button
              className="increment"
              onClick={() => dispatch(incrementNumber())}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
