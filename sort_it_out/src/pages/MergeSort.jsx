import performMergeSort from "../algorithms/merge.js";
import SortingLayout from "../components/SortingLayout.jsx";

function MergeSort() {
  return <SortingLayout algorithm={performMergeSort} />;
}

export default MergeSort;
