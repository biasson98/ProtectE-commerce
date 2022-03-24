import './App.css';
import React, {useState, useEffect} from 'react'
import Card from './components/Card/Card'
import NavBar from './components/NavBar';
import ListProducts from './components/ListProducts/ListProducts';
import ModalCustom from './components/Modal/Modal'
import Container from '@mui/material/Container';


function App() {
  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
      setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true)
  }




  return (
    
    <div className="App">
     <NavBar />
  
      <Container className='container-general'> 
        <ListProducts />
      </Container>
    </div>
  );
}

export default App;
