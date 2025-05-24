async function bubbleSort(arr, getStateRef, dispatch, controllerRef) {
  console.log(controllerRef);
  dispatch({ type: "sortingStarted" });
  const array = [...arr];
  let len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (!getStateRef().current.isSorting) return;

      // Highlight comparison
      dispatch({ type: "selectedIndices", payload: [j, j + 1] });

      // // Add transition delay for comparison visualization
      await new Promise((resolve) =>
        setTimeout(resolve, 500 / getStateRef().current.speed)
      );

      if (array[j] > array[j + 1]) {
        // Add pre-swap delay
        await new Promise((resolve) =>
          setTimeout(resolve, 200 / getStateRef().current.speed)
        );

        // Perform swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        dispatch({ type: "arrayMovements", payload: [...array] });

        // Add post-swap delay
        await new Promise((resolve) =>
          setTimeout(resolve, 200 / getStateRef().current.speed)
        );
      }

      // Clear selection with small delay
      dispatch({ type: "selectedIndices", payload: [] });
      await new Promise((resolve) =>
        setTimeout(resolve, 100 / getStateRef().current.speed)
      );
    }
  }
  dispatch({ type: "sortingCompleted" });
}

export default bubbleSort;
