import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const tuotteet = ["Maito", "Leipä", "Juusto"];

function Ostoslista() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Tuotteet</h2>
      <ul>
        {tuotteet.map((tuote) => (
          <li key={tuote}>
            {tuote}{" "}
            <button onClick={() => addToCart(tuote)}>Lisää koriin</button>
          </li>
        ))}
      </ul>
      <h2>Ostoskori</h2>
      <ul>
        {cart.map((tuote, idx) => (
          <li key={idx}>
            {tuote}{" "}
            <button onClick={() => removeFromCart(tuote)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ostoslista;
