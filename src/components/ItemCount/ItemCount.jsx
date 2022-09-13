import { useEffect, useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

import './ItemCount.styles.css'

export const ItemCount = ({stock = 0, initial = 1, handleAdd}) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (stock !== 0) {
      setCount(initial);
    }
  }, [stock, initial])
  

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div className="count__container">
        <button className='btn__container' onClick={handleDecrement} disabled={count <= 1}>
          <IoRemoveCircleOutline />
        </button>
        <p>{count}</p>
        <button className='btn__container' onClick={handleIncrement} disabled={stock <= count}>
          <IoAddCircleOutline />
        </button>
      </div>
      <span>Unidades disponibles: {stock}</span>
      {
        stock && count ?
          <button className='item__detail--btn' onClick={() => handleAdd(count)}>Agregar al carrito</button> : 
          <button className='item__detail--btn' disabled>Agregar al carrito</button>
      }
    </>
  )
};