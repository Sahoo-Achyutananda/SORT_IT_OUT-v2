import insertionSort from "../algorithms/insertion.js";
import SortingLayout from "../components/SortingLayout.jsx";

function InsertionSort() {
  return <SortingLayout algorithm={insertionSort} />;
}

export default InsertionSort;
