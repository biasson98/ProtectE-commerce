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
                                    <Link to={page.url}><Button className="custom-btn" variant='contained'>{page.title}</Button>
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

