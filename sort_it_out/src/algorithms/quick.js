import * as utils from "../utils/utils.js";

async function partition(arr, l, r, getStateRef, dispatch) {
  let pivot = arr[r];

  let i = l - 1;

  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot) {
      if (getStateRef().current.isSorting === false) return;
      dispatch({ type: "selectedIndices", payload: [j, r] });
      dispatch({ type: "highlightIndices", payload: [i] });
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      dispatch({ type: "arrayMovements", payload: [...arr] });
      await utils.randomDelay(1 / getStateRef().current.speed);
    }
  }
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  if (getStateRef().current.isSorting === false) return;
  dispatch({ type: "arrayMovements", payload: [...arr] });
  await utils.randomDelay(1 / getStateRef().current.speed);

  return i + 1;
}

async function quickSort(arr, low, high, getStateRef, dispatch) {
  dispatch({ type: "sortingStarted" });
  if (getStateRef().current.isSorting === false) return;
  if (low < high) {
    let pi = await partition(arr, low, high, getStateRef, dispatch);

    await quickSort(arr, low, pi - 1, getStateRef, dispatch);
    await quickSort(arr, pi + 1, high, getStateRef, dispatch);
  }
}

async function performQuickSort(arr, getStateRef, dispatch, controllerRef) {
  dispatch({ type: "sortingStarted" });
  await quickSort(arr, 0, arr.length - 1, getStateRef, dispatch);
  console.log(controllerRef);
}

export default performQuickSort;
