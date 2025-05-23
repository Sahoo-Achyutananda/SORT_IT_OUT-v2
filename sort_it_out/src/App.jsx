import BubbleSort from "./pages/BubbleSort";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectionSort from "./pages/SelectionSort";
import InsertionSort from "./pages/InsertionSort";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bubble" element={<BubbleSort />} />
        <Route path="/selection" element={<SelectionSort />} />
        <Route path="/insertion" element={<InsertionSort />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
