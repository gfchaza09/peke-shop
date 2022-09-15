import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList';

import { dataDB } from '../../data/data';
import { customFetch } from '../../utils/customFetch';

import './ItemListContainer.styles.css';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const { idCategory } = useParams()

  useEffect(() => {
    setisLoading(true);
    if (idCategory) {
      customFetch(2000, dataDB.filter(item => {
        if (idCategory === undefined) return item;
        return idCategory === item.categoryId;
      }))
        .then(data => {
          setItems(data);
          setisLoading(false);
        })
        .catch(err => console.log(err))
    } else {
      customFetch(2000, dataDB)
        .then(data => {
          setItems(data);
          setisLoading(false);
        })
        .catch(err => console.log(err))
    }
  }, [idCategory]);

  return (
    <div className='container'>
        <h1>{idCategory ? idCategory.toUpperCase() : "PRODUCTOS"}</h1>
        <div className='card__container'>
          {
            items && isLoading ? <div className='spinner'></div> : <ItemList items={items}/>
          }
        </div>
    </div>
  )
};
