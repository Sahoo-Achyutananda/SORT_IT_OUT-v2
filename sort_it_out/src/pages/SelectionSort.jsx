import SortingLayout from "../components/SortingLayout";
import selectionSort from "../algorithms/selection";

function SelectionSort() {
  return <SortingLayout algorithm={selectionSort} />;
}

export default SelectionSort;
