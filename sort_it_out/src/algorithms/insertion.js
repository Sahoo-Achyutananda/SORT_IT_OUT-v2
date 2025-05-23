import * as utils from "../utils/utils.js";

async function insertionSort(arr, getStateRef, dispatch, controllerRef) {
  dispatch({ type: "sortingStarted" });
  console.log(controllerRef); // useless
  const array = [...arr];
  const n = arr.length;
  let i;

  for (i = 1; i < n; i++) {
    if (getStateRef().current.isSorting === false) return;
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      if (getStateRef().current.isSorting === false) return;
      dispatch({ type: "selectedIndices", payload: [j, j + 1, key] });
      array[j + 1] = array[j];
      dispatch({ type: "arrayMovements", payload: array });
      await utils.randomDelay(1 / getStateRef().current.speed);
      j = j - 1;
    }
    array[j + 1] = key;
    dispatch({ type: "arrayMovements", payload: array });
    await utils.randomDelay(1 / getStateRef().current.speed);
  }
}

export default insertionSort;
