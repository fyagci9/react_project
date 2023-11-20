import React from "react";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import NotFound from "../common/NotFound"

import DashBoard from "./Dashboard";
import Navi from "../navi/Navi";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/"  element={<DashBoard/> } />
        <Route path="/product"  element={<DashBoard/> } /> 
        <Route path="/cart"  element={<CartDetail/>} /> 
        <Route path="/saveProduct/:productId"  element={<AddOrUpdateProduct/> } />
        <Route path="/saveProduct"  element={<AddOrUpdateProduct/> } /> 
        <Route path="*" element={<NotFound />}
        />
      </Routes>
    </Container>
  );
}

export default App;
