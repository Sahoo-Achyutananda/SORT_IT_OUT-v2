import * as utils from "./utils/utils";

export function reducer(state, action) {
  switch (action.type) {
    case "speedChange":
      return { ...state, speed: Number(action.payload) };
    case "valueChange":
      return {
        ...state,
        value: Number(action.payload),
        array: utils.generateArray(Number(action.payload)),
        selectedIndices: [],
        isSorting: false,
      };
    case "arrayMovements":
      return {
        ...state,
        array: action.payload,
      };
    case "selectedIndices":
      return {
        ...state,
        selectedIndices: action.payload,
      };
    case "sortingStarted":
      return {
        ...state,
        isSorting: true,
      };
    case "hold":
      return {
        ...state,
        hold: action.payload,
      };
    case "toggleChange":
      return { ...state, toggle: action.payload };
  }
}

export const initialState = {
  speed: 1,
  value: 20,
  toggle: "bar", // can have only 2 values - bar and box
  array: Array.from({ length: 20 }, () => Math.floor(Math.random() * 350) + 1),
  selectedIndices: [],
  isSorting: false,
  hold: [], // to highlight a particular bar/box in the visualizer - used to show current min element in Selection sort
};
