import Button  from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return(
    <header className='main-header'>
      <ul className='navbar'>
      <div className='container-logo'>
        <img
          src='https://i2.wp.com/www.bensmithmusicco.com/wp-content/uploads/2017/03/guitarworldlogo-2.jpg?fit=1200%2C686&ssl=1'
          className='logo-container'/>
      </div>
      
        <li><Button className='custon-btn' variant='contained'>HOME</Button></li>
        <li><Button className='custon-btn' variant='contained'>PRODUCTOS</Button></li>
        <li><Button className='custon-btn' variant='contained'>ENVIOS</Button></li>
        <li><Button className='custon-btn' variant='contained'>UBICACION</Button></li>
        <CartWidget className='cartwidget'/>
      </ul>
      

    </header>
  )
}
export default NavBar