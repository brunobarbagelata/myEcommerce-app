import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/" className="brand">
            My E-Commerce
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
