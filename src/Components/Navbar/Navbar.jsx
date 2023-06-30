import React, { useContext } from 'react'
import { ContextGlobal } from '../utils/global.context'
import { THEME } from '../../themes/themej';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, tema} = useContext(ContextGlobal);
  const {theme} = state;

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    //theme === THEME.DARK ? document.querySelector("body").classList.add("dark") : document.querySelector("body").classList.add("light");
    tema(newTheme);
  };

  return (
    <nav className='nav'>
      <div className='nav__links'>
        <Link className='nav_link' to={"/home"}>Home</Link>
        <Link className='nav_link' to={"/contact"}>Contact</Link>
        <Link className='nav_link' to={"/favs"}>Favs</Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='nav_theme' onClick={toggleTheme} >Cambiar a {theme === THEME.DARK ? 'tema claro' : 'tema oscuro'}</button>

    </nav>
  )
}

export default Navbar