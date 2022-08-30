import React from 'react'

import './styles.css'

export const ItemCount = ({stock, initial, onAdd}) => {

  return (
    <div className="count__container">
      <button className='btn__container' onClick={onAdd} disabled={initial === 1}>-</button>
      <p>{initial}</p>
      <button className='btn__container' onClick={onAdd} disabled={stock <= initial}>+</button>
    </div>
  )
};