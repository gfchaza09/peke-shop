import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';

import './ItemDetailContainer.styles.css';
import "react-loading-skeleton/dist/skeleton.css";

import { dataDB } from '../../data/data';
import { customFetch } from '../../utils/customFetch';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

  const [item, setItem] = useState([]);

  const { idItem } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    customFetch(2000, dataDB.find(item => item.id === parseInt(idItem)))
      .then(data => setItem(data))
      .catch(err => console.log(err))
  }, [idItem]);

  return (
    <div className='detail__container'>
      <div className='detail__headline'>
        <div className='link__back'>
          <IoArrowBack size={25} onClick={() => navigate(-1)}/>
        </div>
        <h1 className='headline__title'>PRODUCTOS</h1>
      </div>
        <>
          {
            item?.length !== 0 ? <ItemDetail item={item}/> : <Skeleton count={1} height={400} width={600}/>
          }
        </>
    </div>
  )
};