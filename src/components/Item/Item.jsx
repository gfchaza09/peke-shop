import React from 'react'

import { ItemCount } from '../ItemCount/ItemCount';

import './styles.css';

export const Item = ({item}) => {
  return (
    <div className='item__container'>
        <img className='item__img' src={item.pictureUrl} alt={item.id}/>
        <h2>{item.title}</h2>
        <p className='item__price'>{item.price}</p>
        <button>Ver más detalles</button>
        <ItemCount initial={1} stock={item.stock}/>
        <button>Agregar al carrito</button>
    </div>
  )
}
