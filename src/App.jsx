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
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDocs, collection } from "firebase/firestore";
import useStore from './store/useStore';
function App() {
  const [forms, setForms] = useState([]);
  
  return (
    <div className='fon'>
      <Header></Header>
          <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/Menu' element = {<MenuPage forms={forms}/>}></Route>
              <Route path='/About' element = {<About/>}></Route>
              <Route path='/user/:id' element={<CardPage cards={forms}/>}></Route>
              <Route path='/Login' element={<Login cards={forms} />}></Route>
          </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
