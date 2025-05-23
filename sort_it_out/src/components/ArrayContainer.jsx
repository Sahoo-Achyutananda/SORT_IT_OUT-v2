import styles from "./ArrayContainer.module.css";
// import * as utils from "../utils/utils.js";
import { useRef, useEffect, useState } from "react";

function ArrayContainer({ state }) {
  const arrayContainerRef = useRef(null);
  return (
    <div className={styles.arrayContainer} ref={arrayContainerRef}>
      {state.toggle === "bar"
        ? state.array.map((value, i) => {
            return (
              <Bar
                key={i}
                arrayContainerRef={arrayContainerRef}
                state={state}
                height={value}
                index={i}
              />
            );
          })
        : state.array.map((value, i) => {
            return <Box key={i} height={value} />;
          })}
    </div>
  );
}

function Bar({ arrayContainerRef, state, height, index }) {
  const [dimensions, setDimensions] = useState({
    height: "50px",
    width: "50px",
  });
  useEffect(() => {
    if (arrayContainerRef.current) {
      const containerWidth = arrayContainerRef.current.offsetWidth;
      const boxWidth = containerWidth / state.value - 2;
      setDimensions({
        height: height,
        width: `${boxWidth}px`,
        backgroundColor: state.selectedIndices.includes(index)
          ? "pink"
          : "rebeccapurple",
      });
    }
  }, [arrayContainerRef, state.value, height, state.selectedIndices, index]);

  return (
    <div className={styles.barContainer}>
      <div
        className={styles.index}
        style={{
          width: dimensions.width,
          backgroundColor: state.highlightIndices.includes(index)
            ? "green"
            : "khaki",
          color: state.highlightIndices.includes(index) ? "white" : "black",
        }}
      >
        {index}
      </div>
      <div className={`${styles.bar}`} style={dimensions}></div>
    </div>
  );
}

function Box({ height }) {
  return <div className={styles.box}>{height}</div>;
}
export default ArrayContainer;
