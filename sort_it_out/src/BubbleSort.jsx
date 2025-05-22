import "./BubbleSort.css";
import { useReducer, useRef, useEffect } from "react";
import InputFields from "./components/InputFields";
import ArrayContainer from "./components/ArrayContainer";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { BrowserRouter, Routes, Route, Link, Navlink } from "react-router-dom";
import "./BubbleSort.css";
import bubbleSort from "./algorithms/bubble.js";
import * as utils from "./utils/utils.js";

function reducer(state, action) {
  switch (action.type) {
    case "speedChange":
      return { ...state, speed: Number(action.payload) };
    case "valueChange":
      return {
        ...state,
        value: Number(action.payload),
        array: utils.generateArray(Number(action.payload)),
        selectedIndices: [],
        isSorting: false,
      };
    case "arrayMovements":
      return {
        ...state,
        array: action.payload,
      };
    case "selectedIndices":
      return {
        ...state,
        selectedIndices: action.payload,
      };
    case "sortingStarted":
      return {
        ...state,
        isSorting: true,
      };
    case "toggleChange":
      return { ...state, toggle: action.payload };
  }
}

const initialState = {
  speed: 1,
  value: 20,
  toggle: "bar", // can have only 2 values - bar and box
  array: Array.from({ length: 20 }, () => Math.floor(Math.random() * 350) + 1),
  selectedIndices: [],
  isSorting: false,
};

function BubbleSort() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const controllerRef = useRef(null);
  controllerRef.current = new AbortController();
  // useEffect(()=>{
  //   controllerRef.current.abort();
  // },[state.value])

  useEffect(() => {});

  return (
    <div className="BubbleSort">
      <InputFields
        dispatch={dispatch}
        state={state}
        stateRef={stateRef}
        initialState={initialState}
        algo={bubbleSort}
        controllerRef={controllerRef}
      ></InputFields>
      <ToggleButtonGroup
        color="secondary"
        value={state.toggle}
        exclusive
        onChange={(e) =>
          dispatch({ type: "toggleChange", payload: e.target.value })
        }
      >
        <ToggleButton value="bar">Bars</ToggleButton>
        <ToggleButton value="box">Boxes</ToggleButton>
      </ToggleButtonGroup>
      <ArrayContainer state={state} />
    </div>
  );
}

export default BubbleSort;
