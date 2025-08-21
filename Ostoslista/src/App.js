import React from "react";
import { CartProvider } from "./CartContext";
import Ostoslista from "./Ostoslista";

function App() {
  return (
    <CartProvider>
      <Ostoslista />
    </CartProvider>
  );
}

export default App;
