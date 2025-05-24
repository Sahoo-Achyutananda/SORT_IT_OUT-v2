import { useReducer, useRef, useEffect } from "react";
import InputFields from "./InputFields.jsx";
import ArrayContainer from "./ArrayContainer.jsx";
import Code from "./Code.jsx";
import Details from "./Details.jsx";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./SortingLayout.module.css";
import { reducer, initialState } from "../store.jsx";
import { styled } from "@mui/material/styles";
import Timer from "./Timer.jsx";
import Title from "./Title.jsx";

import BarChartIcon from "@mui/icons-material/BarChart";
import WidgetsIcon from "@mui/icons-material/Widgets";

const CustomToggleButton = styled(ToggleButton)(() => ({
  color: "white",
  backgroundColor: "#424242",
  "&.Mui-selected": {
    color: "white",
    backgroundColor: "rgb(103, 3, 204)",
  },
}));

function SortingLayout({ algorithm, json }) {
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
      <Title title={json.name} />
      <div className={styles.utilities}>
        <InputFields
          dispatch={dispatch}
          state={state}
          stateRef={stateRef}
          initialState={initialState}
          algo={algorithm}
          controllerRef={controllerRef}
        ></InputFields>
        <Timer getState={() => state} dispatch={dispatch} />
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={state.toggle}
          exclusive
          onChange={(e, newValue) => {
            if (newValue) dispatch({ type: "toggleChange", payload: newValue });
          }}
        >
          <CustomToggleButton value="bar">
            <BarChartIcon fontSize="small" />
          </CustomToggleButton>
          <CustomToggleButton value="box">
            <WidgetsIcon fontSize="small" />
          </CustomToggleButton>
        </ToggleButtonGroup>
      </div>
      <ArrayContainer state={state} />
      <div className={styles.genInformation}>
        <div className={styles.infoDiv}>
          <Code json={json} />
          <Details json={json} />
        </div>
      </div>
    </div>
  );
}

export default SortingLayout;
