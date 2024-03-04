import './MenuPage.css'
import { basketballico, cross, gameico, playstick } from '../assets';
import './RegField.css'
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
  document.querySelector('.sportlist').classList.toggle('close');
  document.querySelector('.cybersport').classList.toggle('close');
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

    function FilterSelect(number){
      let filters = document.querySelectorAll('.filter');
      let flag = false;
      if (filters[number].classList.length == 2){
        flag = true
      }
      console.log(filters[number].classList)
      for (let i = 0; i < filters.length; i ++){
        filters[i].classList.remove("select")
      }
      if (!flag){
        filters[number].classList.add("select")
      }
    }

    function MobileFilterSelect(number){
      let filters = document.querySelectorAll('.filter-mobile');
      let flag = false;
      if (filters[number].classList.length == 2){
        flag = true
      }
      console.log(filters[number].classList)
      for (let i = 0; i < filters.length; i ++){
        filters[i].classList.remove("select-mobile")
      }
      if (!flag){
        filters[number].classList.add("select-mobile")
      }
    }
    function Close(){
      document.querySelector('.reg-f').classList.add('close');
      document.querySelector('body').classList.remove('no-scroll');
      document.querySelector('.warning').classList.add('close')
    }
    function CheckPlaceHolders(){
      if (
          document.getElementById('name').value != null &&
          document.getElementById('age').value != null &&
          document.querySelector('input[name="contact"]:checked') != undefined &&
          document.getElementById('sport').value != null &&
          document.getElementById('tg').value != null &&
          document.getElementById('des').value != null && 
          document.getElementById('name').value != '' &&
          document.getElementById('age').value != '' &&
          document.getElementById('sport').value != '' &&
          document.getElementById('tg').value != '' &&
          document.getElementById('des').value != '' &&
          document.getElementById('tg').value.slice(0, 13) == "https://t.me/"
        ) {
          const name = document.getElementById('name').value;
          const age = document.getElementById('age').value;
          const sex = document.querySelector('input[name="contact"]:checked').value;
          const sport = document.getElementById('sport').value;
          const tg = document.getElementById('tg').value;
          const des = document.getElementById('des').value;
          stateAdd(name, age, sex, sport, tg, des)
          document.getElementById('name').value = null
          document.getElementById('age').value = null
          document.getElementById('tg').value = null
          document.getElementById('des').value = null
          Close();
        }
        else{
          document.querySelector('.warning').classList.remove('close')
        }
    }
    
    window.scrollTo(0, 0);
    return (
      <div>
        <div className="mainPage">
          <div className="filters">
            <div className='sportlist'>
              <p className='filter' onClick={() => (FilterOf("Баскетбол"), FilterSelect(0))}>Баскетбол</p>
              <p className='filter' onClick={() => (FilterOf("Волейбол"), FilterSelect(1))}>Волейбол</p>
              <p className='filter' onClick={() => (FilterOf("Мини-Футбол"), FilterSelect(2))}>Мини-футбол</p>
              <p className='filter' onClick={() => (FilterOf("Настольный теннис"), FilterSelect(3))}>Настольный теннис</p>
              <p className='filter' onClick={() => (FilterOf("Бадминтон"), FilterSelect(4))}>Бадминтон</p>
            </div>
            <div className='cybersport close'>
              <p className='filter' onClick={() => (FilterOf("Dota 2"), FilterSelect(5))}>Dota 2</p>
              <p className='filter' onClick={() => (FilterOf("CS:GO"), FilterSelect(6))}>CS:GO</p>
              <p className='filter' onClick={() => (FilterOf("The Finals"), FilterSelect(7))}>The Finals</p>
              <p className='filter' onClick={() => (FilterOf("Rust"), FilterSelect(8))}>Rust</p>
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
                  <p className="filter-mobile" onClick={() => (FilterOf("Баскетбол", true), MobileFilterSelect(0))}>Баскетбол</p>
                  <p className="filter-mobile" onClick={() => (FilterOf("Волейбол", true), MobileFilterSelect(1))}>Волейбол</p>
                  <p className="filter-mobile" onClick={() => (FilterOf("Мини-Футбол", true), MobileFilterSelect(2))}>Мини-Футбол</p>
                  <p className="filter-mobile" onClick={() => (FilterOf("Настольный теннис", true), MobileFilterSelect(3))}>Настольный теннис</p>
                  <p className="filter-mobile" onClick={() => (FilterOf("Бадминтон", true), MobileFilterSelect(4))}>Бадминтон</p>
                  <h1>Киберспорт</h1>
                  <p className="filter-mobile" onClick={() => (FilterOf("Dota 2", true), MobileFilterSelect(5))}>Dota 2</p>
                  <p className="filter-mobile" onClick={() => (FilterOf("CS:GO", true), MobileFilterSelect(6))}>CS:GO</p>
                  <p className="filter-mobile" onClick={() => (FilterOf("The Finals", true), MobileFilterSelect(7))}>The Finals</p>
                  <p className="filter-mobile" onClick={() => (FilterOf("Rust", true), MobileFilterSelect(8))}>Rust</p>
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
              <div className='Field'>
                <img src={cross} alt="" className='cross-img' onClick={Close}/>
                <div className='text-field'>
                    <p>ФИО</p>
                    <input type="text" name="username" id="name" className='name-input'/>
                </div>
                <div className='text-field'>
                    <p>Возраст</p>
                    <input type="number" name="username" id="age" className='name-input'/>
                </div>
                <div className='text-field'>
                    <p className='male'>Пол</p>
                    <div>
                        <label htmlFor="male">Мужской</label>
                        <input type="radio" name="contact" id="male" value="Мужской" className='name-input'/>
                    </div>
                    <div>
                        <label htmlFor="female">Женский</label>
                        <input type="radio" name="contact" id="male" value="Женский" className='name-input'/>
                    </div>
                </div>
                <div className='text-field'>
                    <p>Спорт</p>
                    <select id="sport" className='reg_filter' name='sport'>
                        <option value="Мини-Футбол">Мини-Футбол⚽</option>
                        <option value="Баскетбол">Баскетбол🏀</option>
                        <option value="Настольный теннис">Настольный теннис🏓</option>
                        <option value="Волейбол">Волейбол🏐</option>
                        <option value="CS:GO">CS:GO🎮</option>
                        <option value="Dota 2">Dota 2🕹️</option>
                        <option value="The Finals">The Finals🗡️</option>
                        <option value="Rust">Rust🪓</option>
                    </select>
                </div>
                <div className='text-field'>
                    <p>Ссылка на Telegram</p>
                    <input type="text" name="username" id="tg" className='name-input'/>
                </div>
                <div className='text-field'>
                    <p>Описание</p>
                    <textarea name="username" type='text' id="des" cols="69" rows="10" className='name-input'></textarea>
                </div>
                <p className='warning close'>Заполните верно все поля!</p>
                <button className='create-btn' onClick={CheckPlaceHolders}>
                    Создать +
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuPage;