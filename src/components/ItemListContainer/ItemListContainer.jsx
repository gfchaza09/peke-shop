import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { ItemList } from '../ItemList/ItemList';

import './styles.css';
import "react-loading-skeleton/dist/skeleton.css";

import { dataDB } from '../../data/data';
import { customFetch } from '../../utils/customFetch';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(2000, dataDB)
      .then(data => setItems(dataDB))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='container'>
        <h1>Productos</h1>
        <div className='card__container'>
          {
            items?.length !==0 ? <ItemList items={items}/> : <Skeleton count={5} height={100} width={300}/>
          }
        </div>
    </div>
  )
};
