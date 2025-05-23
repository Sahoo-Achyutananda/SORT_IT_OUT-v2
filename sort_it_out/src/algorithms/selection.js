import * as utils from "../utils/utils.js";

async function selectionSort(arr, getStateRef, dispatch, controllerRef) {
  dispatch({ type: "sortingStarted" });
  const array = [...arr];
  const n = array.length;

  var i, j;

  for (i = 0; i < n; i++) {
    var min_index = i;

    for (j = i + 1; j < n; j++) {
      if (getStateRef().current.isSorting === false) return;
      dispatch({ type: "selectedIndices", payload: [min_index, j] });
      await utils.randomDelay(1 / getStateRef().current.speed);

      console.log(controllerRef.current);
      if (array[min_index] > array[j]) {
        min_index = j;
      }
    }

    let temp = array[min_index];
    array[min_index] = array[i];
    array[i] = temp;

    dispatch({ type: "arrayMovements", payload: array });
  }
}

export default selectionSort;
