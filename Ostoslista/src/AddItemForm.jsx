import { useState, useContext } from "react";
import { CartContext } from "./CartContext.jsx";

const AddItemForm = () => {
  const [input, setInput] = useState("");
  const { addItem } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addItem(input.trim());
      setInput("");
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Lisää tuote"
      />
      <button type="submit">Lisää</button>
    </form>
  );
};

export default AddItemForm;
