import "./SortingLayout.css";
import { useReducer, useRef, useEffect } from "react";
import InputFields from "./InputFields.jsx";
import ArrayContainer from "./ArrayContainer.jsx";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./SortingLayout.css";
// import bubbleSort from "./algorithms/bubble.js";
import { reducer, initialState } from "../store.jsx";

function SortingLayout({ algorithm }) {
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
    <div className="SortingLayout">
      <InputFields
        dispatch={dispatch}
        state={state}
        stateRef={stateRef}
        initialState={initialState}
        algo={algorithm}
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

export default SortingLayout;
