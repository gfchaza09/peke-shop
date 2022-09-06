import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import './styles.css';
import "react-loading-skeleton/dist/skeleton.css";

import { dataDB } from '../../data/data';
import { customFetch } from '../../utils/customFetch';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);

  useEffect(() => {
    customFetch(2000, dataDB)
      .then(data => setItem(dataDB[1]))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='detail__container'>
        <h1>{item?.title}</h1>
        <>
          {
            item?.length !== 0 ? <ItemDetail item={item}/> : <Skeleton count={1} height={400} width={600}/>
          }
        </>
        <a href="#">Volver</a>
    </div>
  )
};