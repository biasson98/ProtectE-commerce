import './App.css';
import React, {useState, useEffect} from 'react'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts';
import ModalCustom from './components/Modal/Modal'
import Container from '@mui/material/Container';
import AutoPlaySwipeableViews from './components/Carousel/Carousel';
import './App.css';
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
     <AutoPlaySwipeableViews/>
  
      <Container className='container-general'> 
        <ListProducts />
      </Container>
    </div>
  );
}

export default App;
