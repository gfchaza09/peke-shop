import './styles.css'

 export const Navbar = () => {
  return (
    <header className='header'>
        <img src='./assets/peke-logo.jpg' alt="logo" className='header__img'/>
        <nav className='nav'>
            <ul className='nav__list'>
                {/* Se reemplazará las etiquetas a por Link de React Router */}
                <li className='nav__item'>
                    <a href="#" className='nav__link'>Home</a>
                </li>
                <li className='nav__item'>
                    <a href="#" className='nav__link'>Productos</a>
                </li>
                <li className='nav__item'>
                    <a href="#" className='nav__link'>Contacto</a>
                </li>
            </ul>
        </nav>
    </header>
  )
};