import './MenuPage.css'
import { basketballico, cross, gameico, playstick } from '../assets';
import './RegField.css'
import Forms from '../components/Forms.jsx';
import React, {useEffect, useState} from 'react';
import useStore from '../store/useStore.js';

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



const MenuPage = () => {
    const {GetForms, forms, CreateForm, user} = useStore()
    const [currForms, setcurrForms] = useState(forms)
    useEffect(() => {
      GetForms()
    }, [])
    useEffect(() => {
      setcurrForms(forms)
      console.log(forms)
    }, [forms])
    const Create = async (e) => {
      e.preventDefault()
      if (user) {
        const desctiption = document.getElementById("area").value
        const link = document.getElementById("link").value
        const sport = document.getElementById("sport").value
        await CreateForm(desctiption, link, sport)
        Open()
      }
    }
    const [isCyber, setCyber] = useState(false)
    function CyberFilter() {
      document.querySelector('.sportlist').classList.toggle('close');
      document.querySelector('.cybersport').classList.toggle('close');
      setCyber(!isCyber)
    }
    function Open() {
      document.querySelector('body').classList.add('no-scroll');
      setShowForm(!isShowForm)
    }
    const Filter = (filter) => {
      console.log(filter)
      
    }
    const [isShowForm, setShowForm] = useState(false)
    window.scrollTo(0, 0);
    return (
      <div>
        <div className="mainPage">
          <div className="filters">
            <div className='sportlist'>
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
                <div className='white-rect' onClick={() => (document.querySelector('.white-rect').classList.toggle('white-rect1'), CyberFilter(), anim())}>
                  <img src={basketballico} alt="" className='basketballico' />
                  <img src={gameico} alt="" className='gameico' />
                </div>
              </div>
            </div>
            <div className='filter_for_mobile'>
              <div className="mobile-filters">
                <button className='create-filter'>Фильтры</button>
                <div className="mobile-cyber-filter-container">
                  <img src={playstick} className="play-ico" alt="" />
                  <div className="mobile-cyber-filter">
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
                  <p className="filter-mobile">Баскетбол</p>
                  <p className="filter-mobile">Волейбол</p>
                  <p className="filter-mobile">Мини-Футбол</p>
                  <p className="filter-mobile">Настольный теннис</p>
                  <p className="filter-mobile">Бадминтон</p>
                  <h1>Киберспорт</h1>
                  <p className="filter-mobile">Dota 2</p>
                  <p className="filter-mobile">CS:GO</p>
                  <p className="filter-mobile">The Finals</p>
                  <p className="filter-mobile">Rust</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                  <img src={cross} className='cross-img-filter' alt="" />
                  <p style={{margin: "0"}}>Отчистить все фильты</p>
                </div>
              </div>
              
            </div>
            <div className='forms'>
              <Forms forms={currForms} />
            </div>
            {isShowForm && 
            <>
            <div className="createWindow">
              <div className="createField">
                <img src={cross} className="createFieldClose" onClick={Open} alt="" />
                <h1 className="createFieldTitle">Анкета участника</h1>
                <form className="createForm" onSubmit={Create}>
                  <select className="createFormInput reg_filter" name="" id="sport">
                    <option value="Мини-футбол">Мини-футбол</option>
                    <option value="Баскетбол">Баскетбол</option>
                    <option value="Волейбол">Волейбол</option>
                    <option value="Dota 2">Dota 2</option>
                    <option value="The Finals">The Finals</option>
                  </select>
                  <input className="createFormInput" id='link' type="text" placeholder='Ссылка на любую соц сеть' />
                  <textarea className="createFormArea" name="" id="area" placeholder='Создание анкеты'></textarea>
                  <input type='submit' className="createFormBtn" value={"Создать"}/>
                </form>
              </div>
            </div>
            </>}
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuPage;