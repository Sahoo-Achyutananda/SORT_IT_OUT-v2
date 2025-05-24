import Slider from "@mui/material/Slider";
import styles from "./InputFields.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import DataArrayIcon from "@mui/icons-material/DataArray";
import SpeedIcon from "@mui/icons-material/Speed";

function InputFields({
  dispatch,
  state,
  stateRef,
  initialState,
  algo,
  controllerRef,
}) {
  return (
    <div className={styles.userInputs}>
      <div className={`${styles.sliderDiv} ${styles.speedDiv}`}>
        <SpeedIcon fontSize="small" sx={{ color: "white" }} />
        <Slider
          aria-label="Speed"
          defaultValue={initialState.speed}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0.25}
          max={10}
          value={state.speed}
          onChange={(e) =>
            dispatch({ type: "speedChange", payload: e.target.value })
          }
          className={styles.speedSlider}
        />
      </div>
      <div className={`${styles.sliderDiv} ${styles.valueDiv}`}>
        <DataArrayIcon fontSize="small" sx={{ color: "white" }} />
        <Slider
          aria-label="Speed"
          defaultValue={20}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={50}
          value={state.value}
          onChange={(e) =>
            dispatch({ type: "valueChange", payload: e.target.value })
          }
          className={styles.valueSlider}
        />
      </div>
      {/* <div className={styles.buttonDiv}> */}
      <button
        className={styles.buttonStart}
        // disabled={state.isSorting === true ? true : false}
        onClick={() =>
          algo(state.array, () => stateRef, dispatch, controllerRef)
        }
      >
        <PlayArrowIcon fontSize="small" />
      </button>
      <button
        className={styles.buttonReset}
        onClick={() => dispatch({ type: "resetValues" })}
      >
        <StopIcon fontSize="small" />
      </button>
      {/* </div> */}
    </div>
  );
}

export default InputFields;
