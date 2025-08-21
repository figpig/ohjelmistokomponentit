import React, { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import AddItemForm from "./AddItemForm";
import ShoppingList from "./ShoppingList";

const Ostoslista = () => (
  <div>
    <h1>Ostoslista</h1>
    <AddItemForm />
    <ShoppingList />
  </div>
);

export default Ostoslista;
