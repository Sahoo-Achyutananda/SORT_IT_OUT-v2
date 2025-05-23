import BubbleSort from "./pages/BubbleSort";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectionSort from "./pages/SelectionSort";
import InsertionSort from "./pages/InsertionSort";
import MergeSort from "./pages/MergeSort";
import QuickSort from "./pages/QuickSort";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bubble" element={<BubbleSort />} />
        <Route path="/selection" element={<SelectionSort />} />
        <Route path="/insertion" element={<InsertionSort />} />
        <Route path="/merge" element={<MergeSort />} />
        <Route path="/quick" element={<QuickSort />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
