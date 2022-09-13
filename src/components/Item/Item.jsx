import React from 'react'
import { Link } from 'react-router-dom';
import {IoInformationCircleOutline} from 'react-icons/io5';

import './Item.styles.css';

export const Item = ({item}) => {
  return (
    <div className='item__container'>
        <img className='item__img' src={item.pictureUrl} alt={item.id}/>
        <Link className='item__icon--container' to={`/item/${item.id}`}>
          <IoInformationCircleOutline size={25} color='#fff' /> 
          <span className='item__icon--info'>Ver Detalles</span>
        </Link>
        <div className='item__data--container'>
          <h2>{item.title}</h2>
          <p className='item__price'>{item.price}</p>
          <div className='container__btn'>
            <button className='item__btn add__btn'>{item.stock !== 0 ? "Agregar al carrito" : "Agotado"}</button>
          </div>
        </div>
    </div>
  )
}
