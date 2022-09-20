import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {IoCloseCircle, IoMenu} from 'react-icons/io5';

import { CartWidget } from '../CartWidget/CartWidget';
import './Navbar.styles.css'

 export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        if(menuOpen) {
            setMenuOpen(false);
        };
    };

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        };
    }, [size.width, menuOpen]);

  return (
    <header className='header'>
        <NavLink to="/"><img src='https://i.ibb.co/qYZ7m6X/peke-logo.jpg' alt="logo" className='header__img'/></NavLink>
        <nav className={`nav ${menuOpen ?  "is-menu" : ""}`}>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink to="category/individuales" className='nav__link' onClick={handleMenuClose}>Individuales</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="category/fundas" className='nav__link' onClick={handleMenuClose}>Fundas</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="category/amigurumis" className='nav__link' onClick={handleMenuClose}>Amigurumis</NavLink>
                </li>
            </ul>
            <CartWidget />
        </nav>
        <div className='header-content--toggle'>
              {
                (!menuOpen) ? (<IoMenu size={40} onClick={handleMenuOpen}/>) : 
                (<IoCloseCircle size={40} onClick={handleMenuOpen} />)
              } 
        </div>
    </header>
  )
};