import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { THEME } from '../themes/themej';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, tema} = useContext(ContextGlobal);
  const {theme} = state;

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    tema(newTheme);
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} >Change theme {theme === THEME.DARK ? 'Tema claro' : 'Tema oscuro'}</button>

    </nav>
  )
}

export default Navbar