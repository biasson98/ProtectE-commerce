import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ResponsiveAppBar from './components/NavBar';
import Card from './components/Card'
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Card title='Fender Stratocaster' color='Sunburst' price={400}/>
      <Card title='Fender Telecaster' color='Red' price={420}/>
      <Card title='Squier Stratocaster' color='Black' price={100}/>
      <Card title='Squier Telecaster' color='Sunburst' price={120}/>
      <Card title='Gibson Les Paul' color='GoldTop' price={500}/>
      <Card title='Ephiphone Les Paul Standard' color='Cherry Sunburst' price={150}/>
    </div>
 
  )
}

export default App;
