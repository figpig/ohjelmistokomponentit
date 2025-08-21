import * as React from 'react';
import { useContext } from "react";
import AddItemForm from './AddItemForm.jsx';
import { CartContext } from "./CartContext.jsx";

function ShoppingList() {
  const { items, removeItem } = useContext(CartContext);

  return (
    <div>
      <AddItemForm />
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item}
            <button onClick={() => removeItem(idx)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  ); 
}

export default ShoppingList;
