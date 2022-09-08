import React from 'react'

import { ItemCount } from '../ItemCount/ItemCount';

import './ItemDetail.styles.css';

export const ItemDetail = ({item}) => {
  return (
    <div className='item__detail'>
        <img className='item__detail--img' src={item.pictureUrl} alt={item.title}/>
        <div className='item__detail--data'>
            <h2 className='item__detail--title'>{item.title}</h2>
            <p className='item__detail--price'>{item.price}</p>
            <p className='item__detail--description'>{item.description}</p>
            <div className='item__detail--btns'>
                <ItemCount initial={1} stock={item.stock}/>
                <span>Unidades disponibles: {item.stock}</span>
                <button className='item__detail--btn'>Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}