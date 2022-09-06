import React from 'react'

import { ItemCount } from '../ItemCount/ItemCount';

import './styles.css';

export const ItemDetail = ({item}) => {
  return (
    <div className='item__detail'>
        <img className='item__detail--img' src={item.pictureUrl} alt={item.id}/>
        <div className='item__detail--data'>
            <p>{item.description}</p>
            <p className='item__price'>{item.price}</p>
            <div className='item__detail--btns'>
                <button className='item__detail--btn'>Ver más detalles</button>
                <ItemCount initial={1} stock={item.stock}/>
                <span>Unidades disponibles: {item.stock}</span>
                <button className='item__detail--btn'>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}