import * as React from 'react';

function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (inputValue.trim()) {
      onAddItem(inputValue); 
      setInputValue(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Lisää uusi ostos"
      />
      <button type="submit">Lähetä</button>
    </form>
  );
}

export default AddItemForm;
