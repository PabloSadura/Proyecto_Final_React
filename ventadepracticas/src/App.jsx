import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ItemListContainer from "./components/containers/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import Cart from "./components/containers/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfesionalContainers from "./components/containers/ProfesionalContainers";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:tipo" element={<ItemListContainer />} />
          <Route
            path="/profesionales/:categoria"
            element={<ProfesionalContainers />}
          />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
