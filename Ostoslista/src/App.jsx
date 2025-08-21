import * as React from 'react';
import { CartProvider } from './CartContext.jsx';
import Ostoslista from './Ostoslista.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Ostoslista />
    </CartProvider>
  );
}

export default App;