import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ItemCount } from '../ItemCount/ItemCount';

import './ItemDetail.styles.css';

export const ItemDetail = ({item}) => {

  const [count, setCount] = useState(0);

  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades al carrito`);
    setCount(quantity);
  }

  return (
    <div className='item__detail'>
        <img className='item__detail--img' src={item.pictureUrl} alt={item.title}/>
        <div className='item__detail--data'>
            <h2 className='item__detail--title'>{item.title}</h2>
            <p className='item__detail--price'>{item.price}</p>
            <p className='item__detail--description'>{item.description}</p>
            <div className='item__detail--btns'>
              {
                item?.stock && count ?
                  <Link className='item__detail--btn' to='/cart'>CHECKOUT</Link> :
                  <ItemCount initial={1} stock={item.stock} handleAdd={onAdd}/>
              }
            </div>
        </div>
    </div>
  )
}