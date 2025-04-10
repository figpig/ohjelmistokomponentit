import * as React from 'react';

function ItemList({ items = [], onRemoveItem }) {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => (
          <li key={index} onClick={() => onRemoveItem(item)}>
            {item}
          </li>
        ))
      ) : (
        <li>Ei ostoksia</li>
      )}
    </ul>
  );
}

export default ItemList;