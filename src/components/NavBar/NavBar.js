//Componentes
import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import navPages from "../utils/navPages";
import { nanoid } from 'nanoid';
import Button  from '@mui/material/Button';
import { Themerovider } from '@material-ui/core/styles';


function NavBar() {
    return(
        <header>
            <Link to={'/'}>
            <div className="brandname">
                <img src="https://i2.wp.com/www.bensmithmusicco.com/wp-content/uploads/2017/03/guitarworldlogo-2.jpg?fit=1200%2C686ssl=1" className="brandcontainer--logo" alt="logo"/>
            </div>
            </Link>
            <div className="header__div">
                <nav>
                    <ul className="header__div">
                        {navPages.map((page)=>{
                            return(
                                <li key={nanoid()}>
                                    <Link to={page.url}><Button className="custom-btn" color="primary"  variant='contained'>{page.title}</Button>
                                    </Link>
                                </li>
                            )
                        })}
                        <li><CartWidget contador={0}/></li>
                        <li>
                            <PersonIcon/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;

/*import Button  from '@mui/material/Button';
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
export default NavBar*/