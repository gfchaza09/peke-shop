import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoTrash } from "react-icons/io5";

import { CartContext } from '../context/CartContext';

import './Cart.styles.css';

export const Cart = () => {

  const { cartList, clear, removeItem } = useContext(CartContext);

  return (
    <div className='cart__container'>
      <h1 className='cart__container--title'>Carrito de compras</h1>
      <div className='cart__container--data'>
        <Link to="/" className='cart__container--btn'>Seguir comprando</Link>
        {
          cartList.length > 0 ? <div className='cart__container--list'>
            <div className='cart__container--items'>
              {
                cartList.map(cart=><div key={cart.id} className='cart__item'>
                  <img className="cart__item--img" src={cart.pictureUrl} alt={cart.title}/>
                  <div>
                    <p className='cart__item--title'>{cart.title}</p>
                    <p>Cantidad: {cart.quantity}</p>
                  </div>
                  <button className="cart__container--btn" onClick={() => removeItem(cart.id)}>
                    <IoTrash size={20}/>
                  </button>
                </div>)
              }
            </div>
            <button className="cart__container--btn" onClick={clear}>
              <IoTrash size={16}/> <span>Vaciar carrito</span>
            </button>
          </div> : <><p>No hay productos en el carrito</p></>
        }
      </div>
    </div>
  )
};