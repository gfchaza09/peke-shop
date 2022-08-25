import {IoCart} from 'react-icons/io5';

import './styles.css'

export const CartWidget = ({numberItems}) => {
  return (
    <div className='button__cart'>
        <IoCart />
        <span className='button__count'>{numberItems}</span>
    </div>
  )
};