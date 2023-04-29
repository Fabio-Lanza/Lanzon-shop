import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
