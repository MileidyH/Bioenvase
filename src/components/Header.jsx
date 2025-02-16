import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <img src="/images/Logo.png" alt="Logo" className='logo' />
        <Link className='nav' to ="/">Inicio</Link>
        <Link className='nav' to ="/producto">Productos</Link>
        <Link className='nav' to ="/contacto">Contáctanos</Link>
    </header>
  )
}

export default Header