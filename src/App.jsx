import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { createHashRouter, Router } from 'react-router-dom';



function App() {
  return (
    <div className='fon'>
      <Header></Header>
          <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/Menu' element = {<MenuPage/>}></Route>
              <Route path='/About' element = {<About/>}></Route>
          </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
