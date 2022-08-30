import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './styles.css';

export const ItemListContainer = ({title}) => {

  const [itemCount, setItemCount] = useState(1);

  const handleAddItem = (e) => {
    if (e.target.textContent === '+') {
      setItemCount(itemCount + 1);
    } else {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div className='container'>
        <h1>{title}</h1>
        <div className='card__container'>
          <h2>Card de ejemplo</h2>
          <ItemCount stock={10} initial={itemCount} onAdd={handleAddItem}/>
          <button>Agregar al carrito</button>
        </div>
    </div>
  )
};
