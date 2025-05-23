import * as utils from "../utils/utils.js";

async function merge(arr, l, mid, r, getStateRef, dispatch) {
  if (getStateRef().current.isSorting === false) return;
  dispatch({
    type: "selectedIndices",
    payload: Array.from({ length: r - l + 1 }, (_, i) => l + i),
  });

  let array_1 = arr.slice(l, mid + 1);
  let array_2 = arr.slice(mid + 1, r + 1);

  let i = 0,
    j = 0,
    k = l;

  while (i < array_1.length && j < array_2.length) {
    if (getStateRef().current.isSorting === false) return;
    if (array_1[i] <= array_2[j]) {
      arr[k] = array_1[i];
      i++;
    } else {
      arr[k] = array_2[j];
      j++;
    }
    k++;
    dispatch({ type: "arrayMovements", payload: [...arr] });
    await utils.randomDelay(1 / getStateRef().current.speed);
  }

  while (i < array_1.length) {
    if (getStateRef().current.isSorting === false) return;
    arr[k++] = array_1[i++];
    dispatch({ type: "arrayMovements", payload: [...arr] });
    await utils.randomDelay(1 / getStateRef().current.speed);
  }

  while (j < array_2.length) {
    if (getStateRef().current.isSorting === false) return;
    arr[k++] = array_2[j++];
    dispatch({ type: "arrayMovements", payload: [...arr] });
    await utils.randomDelay(1 / getStateRef().current.speed);
  }
}

async function mergeSort(arr, left, right, getStateRef, dispatch) {
  if (getStateRef().current.isSorting === false) return;
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);
  await mergeSort(arr, left, mid, getStateRef, dispatch);
  await mergeSort(arr, mid + 1, right, getStateRef, dispatch);
  await merge(arr, left, mid, right, getStateRef, dispatch);
}

async function performMergeSort(arr, getStateRef, dispatch, controllerRef) {
  dispatch({ type: "sortingStarted" });
  await mergeSort(arr, 0, arr.length - 1, getStateRef, dispatch);
  console.log(controllerRef);
}

export default performMergeSort;
