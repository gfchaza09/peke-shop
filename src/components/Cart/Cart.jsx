import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoTrash, IoCart } from "react-icons/io5";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

import { db } from '../../config/firebase';

import { CartContext } from '../context/CartContext';

import './Cart.styles.css';

export const Cart = () => {

  const { cartList, clear, removeItem, calcItemsTotal } = useContext(CartContext);

  const createOrder = async () => {
    const itemsForDb = cartList.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));
    const order = {
      buyer: {
        name: "Leo Messi",
        email: "leomessi@mail.com",
        phone: "123-456-1234",
      },
      date: serverTimestamp(),
      items: itemsForDb,
      total: calcItemsTotal()
    };
    // Creamos el documento y la colección (si la colección ya existe, no la crea) en newOrderRef para que genere un id
    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order);

    alert(`El id de tu orden de compra es: ${newOrderRef.id}`)
    clear();

    itemsForDb.map(async (item) => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        // Utilizamos la función propia de firestore increment para actualizar la cantidad de stock
        stock: increment(-item.quantity)
      });
    })
  };

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
                    <h2 className='cart__item--title'>{cart.title}</h2>
                    <p>Cantidad: {cart.quantity}</p>
                    <p>Precio unidad: $ {cart.price.toFixed(2)}</p>
                    <p>Precio total: $ {(cart.price*cart.quantity).toFixed(2)}</p>
                  </div>
                  <button className="cart__container--btn" onClick={() => removeItem(cart.id)}>
                    <IoTrash size={20}/>
                  </button>
                </div>)
              }
            </div>
            <div>
              <h2>Total: $ {calcItemsTotal()}</h2>
            </div>
            <div className="cart__container--btns">
              <button className="cart__container--btn" onClick={createOrder}>
                <IoCart size={16}/> <span>Finalizar compra</span>
              </button>
              <button className="cart__container--btn" onClick={clear}>
                <IoTrash size={16}/> <span>Vaciar carrito</span>
              </button>
            </div>
          </div> : <><p>No hay productos en el carrito</p></>
        }
      </div>
    </div>
  )
};