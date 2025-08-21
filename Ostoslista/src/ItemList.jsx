import * as React from 'react';
import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";

function ItemList() {
  const { items, removeItem } = useContext(CartContext);

  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => (
          <li key={index} onClick={() => removeItem(index)}>
            {item}
          </li>
        ))
      ) : (
        <li>No purchases</li>
      )}
    </ul>
  ); 
}

export default ItemList;