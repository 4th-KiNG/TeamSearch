import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header></Header>
          <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/Menu' element = {<Menu/>}></Route>
          </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
