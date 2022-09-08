import React from 'react'
import { Link } from 'react-router-dom';

import './Item.styles.css';

export const Item = ({item}) => {
  return (
    <div className='item__container'>
        <img className='item__img' src={item.pictureUrl} alt={item.id}/>
        <div className='item__data--container'>
          <h2>{item.title}</h2>
          <p className='item__price'>{item.price}</p>
          <div className='container__btn'>
            <Link className='item__btn' to={`/item/${item.id}`}>Ver más detalles</Link>
            <button className='item__btn'>Agregar al carrito</button>
          </div>
        </div>
    </div>
  )
}
