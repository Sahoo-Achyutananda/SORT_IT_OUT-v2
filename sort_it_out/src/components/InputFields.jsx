import Slider from "@mui/material/Slider";
import styles from "./InputFields.module.css";

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
      <button
        className={styles.buttonStart}
        // disabled={state.isSorting ? true : false}
        onClick={() =>
          algo(state.array, () => stateRef, dispatch, controllerRef)
        }
      >
        Start
      </button>
      <button className={styles.buttonPause}> Pause </button>
    </div>
  );
}

export default InputFields;
