import { useState } from 'react'

import './styles.css'

export const ItemCount = ({stock, initial, onAdd}) => {

  const [itemCount, setItemCount] = useState(initial);

  const handleAdd = () => {
    setItemCount(itemCount + 1);
  }

  const handleRemove = () => {
    setItemCount(itemCount - 1);
  }

  return (
    <div className="count__container">
      <button className='btn__container' onClick={handleRemove} disabled={itemCount === 1}>-</button>
      <p>{itemCount}</p>
      <button className='btn__container' onClick={handleAdd} disabled={stock <= itemCount}>+</button>
    </div>
  )
};