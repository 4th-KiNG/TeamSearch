import './MenuPage.css'
import { basketballico, gameico } from '../assets';
import RegField from '../components/RegField'
import Forms from '../components/Forms.jsx';
import React, {Component, useState} from 'react';
import { ReactDOM } from 'react';
import Menu from '../components/Menu';
let flag = true;
function anim(){
    if (flag){
        document.querySelector('.basketballico').classList.add('basketballicoanim');
        document.querySelector('.basketballico').classList.remove('basketballicoanimback');
        document.querySelector('.gameico').classList.add('gameicoanim');
        document.querySelector('.gameico').classList.remove('gameicoanimback');
        flag = false;
    }
    else{
        document.querySelector('.basketballico').classList.add('basketballicoanimback');
        document.querySelector('.basketballico').classList.remove('basketballicoanim');
        document.querySelector('.gameico').classList.add('gameicoanimback');
        document.querySelector('.gameico').classList.remove('gameicoanim');
        flag = true;
    }
}

function Open() {
    document.querySelector('.reg-f').classList.remove('close');
}

function CyberFilter() {
  document.querySelector('.sportlist').classList.toggle('open');
  document.querySelector('.cybersport').classList.toggle('open');
}



const MenuPage = () => {
    
    const [forms, setForms] = useState([
      {
        id: 1,
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        id: 1,
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        id: 1,
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        id: 1,
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        id: 1,
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        id: 1,
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      }
    ]);
  
    const stateAdd = (name1, age1, male1, sport1, tglink1, description1) => {
      setForms(prevForms => [
        ...prevForms,
        { id: prevForms.length + 1, 
          name: name1, 
          age: age1, 
          male: male1, 
          sport: sport1, 
          tglink: tglink1, 
          description: description1 }
      ]);
    };
    window.scrollTo(0, 0);
    return (
      <div>
        <div className="mainPage">
          <div className="filters">
            <div className='sportlist open'>
              <p className='filter'>Баскетбол</p>
              <p className='filter'>Волейбол</p>
              <p className='filter'>Мини-футбол</p>
              <p className='filter'>Настольный теннис</p>
              <p className='filter'>Бадминтон</p>
            </div>
            <div className='cybersport close'>
              <p className='filter'>Dota 2</p>
              <p className='filter'>CS:GO</p>
              <p className='filter'>The Finals</p>
              <p className='filter'>Rust</p>
            </div>
          </div>
          <div className="applic">
            <div className='grey-rect'>
              <div className='black-rect'>
                <div className='white-rect' onClick={() => (document.querySelector('.white-rect').classList.toggle('white-rect1'), anim(), CyberFilter())}>
                  <img src={basketballico} alt="" className='basketballico' />
                  <img src={gameico} alt="" className='gameico' />
                </div>
              </div>
            </div>
            <div className='filter_for_mobile'>
              <select name="filters" className='menu_filter' id="">
                <option value="">Мини-Футбол</option>
                <option value="">Мини-Футбол</option>
                <option value="">Мини-Футбол</option>
                <option value="">Мини-Футбол</option>
                <option value="">Мини-Футбол</option>
                <option value="">Мини-Футбол</option>
              </select>
              <div className='create-f'><button className='create-f-btn' onClick={Open}>Создать анкету+</button></div>
              <div className='create-f-mobile'><button className='create-f-btn' onClick={Open}>+</button></div>
            </div>
            <div className='forms'>
              <Forms forms={forms} />
            </div>
            <div className='reg-f close'>
              <RegField AddF={(name1, age1, male1, sport1, tglink1, description1) => stateAdd(name1, age1, male1, sport1, tglink1, description1)} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuPage;