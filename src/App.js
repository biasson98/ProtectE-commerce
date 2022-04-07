//Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SwipeableTextMobileStepper from '../src/components/Carousel/Carousel';

//Pages
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import ItemDetailPage from './pages/ItemDetailPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/Contact'
//Estilos
import './App.css';



function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <NavBar/>
        <SwipeableTextMobileStepper/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailPage/>}/>
          <Route path='/contacto' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div> 
  );
}

export default App;
