import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';

import './ItemDetailContainer.styles.css';
import "react-loading-skeleton/dist/skeleton.css";

import { db } from '../../config/firebase';
import { getDoc, doc } from 'firebase/firestore';

import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);

  const { idItem } = useParams();

  const navigate = useNavigate();

  const getData = async ( idItem ) => {
    const querySnapshot = await getDoc(doc(db,"products",idItem));
    setItem({id: querySnapshot.id, ...querySnapshot.data()});
  };

  useEffect(() => {
    getData(idItem);
  }, [idItem]);

  return (
    <div className='detail__container'>
      <div className='detail__headline'>
        <div className='link__back'>
          <IoArrowBack size={25} onClick={() => navigate(-1)}/>
        </div>
        <h1 className='headline__title'>{item?.categoryId?.toUpperCase()}</h1>
      </div>
        <>
          {
            item?.length !== 0 ? <ItemDetail item={item}/> : <Skeleton count={1} height={400} width={600}/>
          }
        </>
    </div>
  )
};