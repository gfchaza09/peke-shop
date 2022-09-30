import React from 'react'
import {IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

import './Sidebar.styles.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <a href="https://www.facebook.com/pekedaniela" rel="noopener noreferrer" target="_blank">
            <IoLogoFacebook />
        </a>
        <a href="https://www.instagram.com/pekepatch/?hl=es-la" rel="noopener noreferrer" target="_blank">
            <IoLogoInstagram />
        </a>
        <a href='https://wa.me/543885470980' rel="noopener noreferrer" target="_blank">
            <IoLogoWhatsapp />
        </a>
    </div>
  )
}
