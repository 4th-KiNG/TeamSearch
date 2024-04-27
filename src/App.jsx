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
function App() {
  const [forms, setForms] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyAxcD80x5kSFznUSrCH2xhpGyu5DTwaexQ",
    authDomain: "teamsearch-75f8f.firebaseapp.com",
    projectId: "teamsearch-75f8f",
    storageBucket: "teamsearch-75f8f.appspot.com",
    messagingSenderId: "618608717856",
    appId: "1:618608717856:web:d5d2e7cbd4e14c14028c45"
  };  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  useEffect(() => {
    const fetchForms = async () => {
      try{
      const users = collection(db, "forms");
      const formsSnapshot = await getDocs(users)
      const formData = formsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setForms(formData)
      }
      catch(error){
        console.error("|||" + error)
      }
    }
    fetchForms()
  }, [])
  
  
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
