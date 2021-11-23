import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">
            My E-Commerce
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
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
