import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import { ItemCount } from '../ItemCount/ItemCount';

import './ItemDetail.styles.css';

export const ItemDetail = ({item}) => {

  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(0);

  const onAdd = (quantity) => {
    addItem(item, quantity);
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