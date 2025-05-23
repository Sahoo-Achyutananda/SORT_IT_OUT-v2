import SortingLayout from "../components/SortingLayout";
import performQuickSort from "../algorithms/quick";

function QuickSort() {
    return (
        <SortingLayout algorithm={performQuickSort}/>
    );
}

export default QuickSort
