import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
<<<<<<< HEAD
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
=======
>>>>>>> 9d5c864b754522c9eabf318afdbd36dfe94920a0



function App() {
  return (
<<<<<<< HEAD
    <div>
      <Header></Header>
          <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/Menu' element = {<Menu/>}></Route>
              <Route path='/About' element = {<About/>}></Route>
          </Routes>
      <Footer></Footer>
=======
    <div >
      
          <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/Menu' element = {<Menu/>}></Route>
          </Routes>
      
>>>>>>> 9d5c864b754522c9eabf318afdbd36dfe94920a0
    </div>
  );
}

export default App;
