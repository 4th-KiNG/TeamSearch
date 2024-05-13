import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import CardPage from './components/CardPage';
import useStore from './store/useStore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function App() {
  return (
    <div className='fon'>
      <Header></Header>
          <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/Menu' element = {<MenuPage />}></Route>
              <Route path='/About' element = {<About/>}></Route>
              <Route path='/form/:id' element={<CardPage />}></Route>
              <Route path='/Login' element={<Login />}></Route>
          </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
