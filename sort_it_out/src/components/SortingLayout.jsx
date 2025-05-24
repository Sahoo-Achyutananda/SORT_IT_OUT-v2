import { useReducer, useRef, useEffect } from "react";
import InputFields from "./InputFields.jsx";
import ArrayContainer from "./ArrayContainer.jsx";
import Code from "./Code.jsx";
import Details from "./Details.jsx";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./SortingLayout.module.css";
import { reducer, initialState } from "../store.jsx";

function SortingLayout({ algorithm , json}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const controllerRef = useRef(null);
  controllerRef.current = new AbortController();

  useEffect(() => {});

  return (
    <div className={styles.SortingLayout}>
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
      <div className={styles.genInformation}>
        <Code json = {json}/>
        <Details json = {json} />
      </div>
    </div>
  );
}

export default SortingLayout;
