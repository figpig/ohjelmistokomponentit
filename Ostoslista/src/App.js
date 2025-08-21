import React from "react";
import { CartProvider } from "./CartContext.jsx";
import Ostoslista from "./Ostoslista.jsx";

function App() {
  return (
    <CartProvider>
      <Ostoslista />
    </CartProvider>
  );
}

export default App;
