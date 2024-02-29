import './MenuPage.css'
import { basketballico, cross, gameico, playstick } from '../assets';
import RegField from '../components/RegField'
import Forms from '../components/Forms.jsx';
import React, {Component, useEffect, useState} from 'react';
import { ReactDOM } from 'react';
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
  document.querySelector('body').classList.add('no-scroll');
    document.querySelector('.reg-f').classList.remove('close');
}

function CyberFilter() {
  document.querySelector('.sportlist').classList.toggle('open');
  document.querySelector('.cybersport').classList.toggle('open');
}



const MenuPage = () => {
    const [forms, setForms] = useState([
      {
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Мини-Футбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Бадминтон",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Баскетбол",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "Dota 2",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      },
      {
        name: "Писанко Александр Валерьевич",
        age: 18,
        male: "Мужской",
        sport: "The Finals",
        tglink: "https://t.me/Ozoki46",
        description: "Немного о себе"
      }
    ])
    
    const [filter, setFilter] = useState("Мини-Футбол Баскетбол Волейбол Настольный теннис Бадминтон")
    const [showsforms, setshowforms] = useState(forms.filter((person) => filter.includes(person.sport)));
    const [sportres, setsportres] = useState(true)
    const [filteropen, setfilteropen] = useState(false)
    const stateAdd = (name1, age1, male1, sport1, tglink1, description1) => {
        setForms(prevForms => [
          ...prevForms,
          {
            name: name1, 
            age: age1, 
            male: male1, 
            sport: sport1, 
            tglink: tglink1, 
            description: description1 }
        ]);
        if (filter.includes(sport1)){
          setshowforms(prevforms => [
            ...prevforms,
            {
              name: name1, 
              age: age1, 
              male: male1, 
              sport: sport1, 
              tglink: tglink1, 
              description: description1 }
          ])
        }
    };
    function CyberFilter1(){
      setsportres(prevres => {
        const newres = !prevres;
        if (newres){
          setFilter(prevfilter => {
            const newfilter = "Мини-Футбол Баскетбол Волейбол Настольный теннис Бадминтон"
            setshowforms(forms.filter((person) => newfilter.includes(person.sport)))
            return newfilter
          })
        }
        else{
          setFilter(prevfilter => {
            const newfilter = "Dota 2 The Finals CS:GO Rust"
            setshowforms(forms.filter((person) => newfilter.includes(person.sport)))
            return newfilter
          })
        }
        
        return newres;
      })
    }
    function OpenFilters(){
      document.querySelector('body').classList.toggle('no-scroll');
      document.querySelector(".filter-window").classList.toggle("filter-window-open")
    }
    function FilterOf(filt, mobile){
      setFilter(prevfilter => {
        let newfilter = ''
        if (prevfilter === filt){
          if (sportres){
            newfilter = "Мини-Футбол Баскетбол Волейбол Настольный теннис Бадминтон"
          }
          else{
            newfilter = "Dota 2 The Finals CS:GO Rust"
          }
        }
        else{
          newfilter = filt
        }
        setshowforms(forms.filter((person) => newfilter.includes(person.sport)))
        return newfilter
      })
      if (mobile){
        OpenFilters()
      }
    }
    function CyberFilterMobile(){
      document.querySelector(".mobile-cyber-filter").classList.toggle("checked");
    }
    
    window.scrollTo(0, 0);
    return (
      <div>
        <div className="mainPage">
          <div className="filters">
            <div className='sportlist open'>
              <p className='filter' onClick={() => FilterOf("Баскетбол")}>Баскетбол</p>
              <p className='filter' onClick={() => FilterOf("Волейбол")}>Волейбол</p>
              <p className='filter' onClick={() => FilterOf("Мини-Футбол")}>Мини-футбол</p>
              <p className='filter' onClick={() => FilterOf("Настольный теннис")}>Настольный теннис</p>
              <p className='filter' onClick={() => FilterOf("Бадминтон")}>Бадминтон</p>
            </div>
            <div className='cybersport close'>
              <p className='filter' onClick={() => FilterOf("Dota 2")}>Dota 2</p>
              <p className='filter' onClick={() => FilterOf("CS:GO")}>CS:GO</p>
              <p className='filter' onClick={() => FilterOf("The Finals")}>The Finals</p>
              <p className='filter' onClick={() => FilterOf("Rust")}>Rust</p>
            </div>
          </div>
          <div className="applic">
            <div className='grey-rect'>
              <div className='black-rect'>
                <div className='white-rect' onClick={() => (document.querySelector('.white-rect').classList.toggle('white-rect1'), anim(), CyberFilter(), CyberFilter1())}>
                  <img src={basketballico} alt="" className='basketballico' />
                  <img src={gameico} alt="" className='gameico' />
                </div>
              </div>
            </div>
            <div className='filter_for_mobile'>
              <div className="mobile-filters">
                <button className='create-filter' onClick={OpenFilters}>Фильтры</button>
                <div className="mobile-cyber-filter-container">
                  <img src={playstick} className="play-ico" alt="" />
                  <div className="mobile-cyber-filter" onClick={() => (CyberFilterMobile(), CyberFilter1())}>
                  </div>
                </div>
              </div>
              
              <div className='create-f'><button className='create-f-btn' onClick={Open}>Создать анкету+</button></div>
              <div className='create-f-mobile'><button className='create-f-btn' onClick={Open}>+</button></div>
            </div>
            <div className="filter-window">
              <div className="filter-window-title">
                <div className="filters-mobile">
                  <h1>Спорт</h1>
                  <p onClick={() => FilterOf("Баскетбол", true)}>Баскетбол</p>
                  <p onClick={() => FilterOf("Волейбол", true)}>Волейбол</p>
                  <p onClick={() => FilterOf("Мини-Футбол", true)}>Мини-Футбол</p>
                  <p onClick={() => FilterOf("Настольный теннис", true)}>Настольный теннис</p>
                  <p onClick={() => FilterOf("Бадминтон", true)}>Бадминтон</p>
                  <h1>Киберспорт</h1>
                  <p onClick={() => FilterOf("Dota 2", true)}>Dota 2</p>
                  <p onClick={() => FilterOf("CS:GO", true)}>CS:GO</p>
                  <p onClick={() => FilterOf("The Finals", true)}>The Finals</p>
                  <p onClick={() => FilterOf("Rust", true)}>Rust</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                  <img src={cross} onClick={OpenFilters} className='cross-img-filter' alt="" />
                  <p style={{margin: "0"}} onClick={() => FilterOf(filter, true)}>Отчистить все фильты</p>
                </div>
              </div>
              
            </div>
            <div className='forms'>
              <Forms forms={showsforms} />
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