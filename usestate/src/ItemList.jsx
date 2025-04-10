import * as React from 'react'
 
function ItemList() {
    const [items, setItems] = React.useState(["Omena", "Banaani", "Kirsikka"]);
  
    const removeItem = (itemToRemove) => {
      setItems(items.filter(item => item !== itemToRemove));
    };
  
    return (
      <div>
        <h2>OstosLista</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => removeItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
}
 
export default ItemList