import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {IoCart} from 'react-icons/io5';

import { CartContext } from '../context/CartContext';

import './CartWidget.styles.css'

export const CartWidget = () => {

  const { calcItemsQty } = useContext(CartContext);

  return (
    <NavLink className='button__cart' to='/cart'>
        <IoCart />
        {
          calcItemsQty() > 0 && <span className='button__count'>{calcItemsQty()}</span>
        }
    </NavLink>
  )
};