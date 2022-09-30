import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from '../ItemList/ItemList';

import { db } from '../../config/firebase';
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';

import './ItemListContainer.styles.css';
import { Sidebar } from '../Sidebar/Sidebar';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const { idCategory } = useParams()

  const getData = async (idCategory) => {
    let q;
    if (idCategory) {
      q = query(collection(db,"products"), where('categoryId', '==', idCategory));
    } else {
      q = query(collection(db, "products"),orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(item => ({
      id: item.id,
      ...item.data(),
    }))
    setItems(dataFromFirestore);
    setisLoading(false);
  }

  useEffect(() => {
    getData(idCategory);
  }, [idCategory]);

  return (
    <div className='container'>
        <h1>{idCategory ? idCategory.toUpperCase() : "PRODUCTOS"}</h1>
        <div className='card__container'>
          {
            items && isLoading ? <div className='spinner'></div> : <ItemList items={items}/>
          }
        </div>
        <Sidebar />
    </div>
  )
};
