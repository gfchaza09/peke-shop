import React from 'react';
import { Link } from 'react-router-dom';

import './Error404.styles.css';

const Error404 = () => {
  return (
    <div className='error'>
      <h1>La página que buscas no existe</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default Error404;