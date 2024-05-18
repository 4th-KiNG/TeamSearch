import './MenuPage.css'
import { basketballico, cross, gameico, playstick } from '../assets';
import './RegField.css'
import Forms from '../components/Forms.jsx';
import React, {useEffect, useState} from 'react';
import useStore from '../store/useStore.js';
import LoadingPage from '../components/LoadingPage';

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
    const [currForms, setcurrForms] = useState(forms.filter(form => form.sport == "Баскетбол" || form.sport == "Волейбол" || form.sport == "Мини-футбол" || form.sport == "Настольный теннис" || form.sport == "Бадминтон"))
    const [isLoading, setLoading] = useState(true)
    let LetOnes = false
    const FormsData = async () => {
      if (LetOnes) return;
      LetOnes = false
      await GetForms()
      setLoading(false)
    }
    useEffect(() => {
      FormsData()
    }, [])
    useEffect(() => {
      setcurrForms(forms.filter(form => form.sport == "Баскетбол" || form.sport == "Волейбол" || form.sport == "Мини-футбол" || form.sport == "Настольный теннис" || form.sport == "Бадминтон"))
    }, [forms])
    const [errShow, setErrShow] = useState(false)
    const [uncorrectlink, setUncorrectlink] = useState(false)
    const Create = async (e) => {
      e.preventDefault()
      if (user) {
        const desctiption = document.getElementById("area").value
        const link = document.getElementById("link").value
        const sport = document.getElementById("sport").value
        if (link != "" && sport != "" && desctiption != "" && (link.slice(0,1) == "@" || link.slice(0, 8) == "https://")){
          await CreateForm(desctiption, link, sport)
          Open()
          console.log(link, desctiption)
          setUncorrectlink(false)
          setErrShow(false)
        }
        else if (link.slice(0,1) != "@" && link.slice(0, 8) != "https://"){
          setUncorrectlink(true)
        }
        else{
          setErrShow(true)
          setUncorrectlink(false)
        }
      }
    }
    const [isCyber, setCyber] = useState(false)
    const [isFiltersOpen, setFiltersOpen] = useState(false)
    const [filter, setFilter] = useState()
    function CyberFilter() {
      document.querySelector('.sportlist').classList.toggle('close');
      document.querySelector('.cybersport').classList.toggle('close');
      setCyber(!isCyber)
    }
    useEffect(() => {
      if (isCyber){
        setcurrForms(forms.filter(form => form.sport == "Dota 2" || form.sport == "CS:GO" || form.sport == "The Finals" || form.sport == "Rust"))
        console.log(forms.filter(form => form.sport == "Dota 2" || form.sport == "CS:GO" || form.sport == "The Finals" || form.sport == "Rust"))
        if (!isLoading){document.querySelector(".mobile-cyber-filter").classList.add("checked")}
      }
      else{
        setcurrForms(forms.filter(form => form.sport == "Баскетбол" || form.sport == "Волейбол" || form.sport == "Мини-футбол" || form.sport == "Настольный теннис" || form.sport == "Бадминтон"))
        if (!isLoading){document.querySelector(".mobile-cyber-filter").classList.remove("checked")}
      }
      setFilter("")
    }, [isCyber])
    function Open() {
      document.querySelector('body').classList.toggle('no-scroll');
      setShowForm(!isShowForm)
    }
    const Filter = (filter) => {
      setcurrForms(forms.filter(form => form.sport == filter))
      setFiltersOpen(false)
      setFilter(filter)
    }
    const CleanFilters = () => {
      isCyber ? setcurrForms(forms.filter(form => form.sport == "Dota 2" || form.sport == "CS:GO" || form.sport == "The Finals" || form.sport == "Rust")) : setcurrForms(forms.filter(form => form.sport == "Баскетбол" || form.sport == "Волейбол" || form.sport == "Мини-футбол" || form.sport == "Настольный теннис" || form.sport == "Бадминтон"))
      setFiltersOpen(false)
      setFilter("")
    }
    const [isShowForm, setShowForm] = useState(false)
    window.scrollTo(0, 0);
    if (isLoading){
      document.querySelector("body").classList.add("no-scroll")
      return(
        <div>
          <LoadingPage></LoadingPage>
        </div>
      )
    }
    document.querySelector("body").classList.remove("no-scroll")
    return (

      
      <div>
        <div className="mainPage">
          <div className="filters">
            <div className='sportlist'>
              <p className={filter == "Баскетбол" ? 'filter select' : "filter"} onClick={() => Filter("Баскетбол")}>Баскетбол</p>
              <p className={filter == "Волейбол" ? 'filter select' : "filter"} onClick={() => Filter("Волейбол")}>Волейбол</p>
              <p className={filter == "Мини-футбол" ? 'filter select' : "filter"} onClick={() => Filter("Мини-футбол")}>Мини-футбол</p>
              <p className={filter == "Настольный теннис" ? 'filter select' : "filter"} onClick={() => Filter("Настольный теннис")}>Настольный теннис</p>
              <p className={filter == "Бадминтон" ? 'filter select' : "filter"} onClick={() => Filter("Бадминтон")}>Бадминтон</p>
            </div>
            <div className='cybersport close'>
              <p className={filter == "Dota 2" ? 'filter select' : "filter"} onClick={() => Filter("Dota 2")}>Dota 2</p>
              <p className={filter == "CS:GO" ? 'filter select' : "filter"} onClick={() => Filter("CS:GO")}>CS:GO</p>
              <p className={filter == "The Finals" ? 'filter select' : "filter"} onClick={() => Filter("The Finals")}>The Finals</p>
              <p className={filter == "Rust" ? 'filter select' : "filter"} onClick={() => Filter("Rust")}>Rust</p>
            </div>
            <p className="filter" onClick={CleanFilters}>Отчистить фильтры</p>
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
                <button className='create-filter' onClick={() => (setFiltersOpen(true), document.querySelector('body').classList.toggle('no-scroll'))}>Фильтры</button>
                <div className="mobile-cyber-filter-container">
                  <img src={playstick} className="play-ico" alt="" />
                  <div className="mobile-cyber-filter" onClick={() => setCyber(!isCyber)}>
                  </div>
                </div>
              </div>
              
              <div className='create-f'><button className='create-f-btn' onClick={Open}>Создать анкету+</button></div>
              <div className='create-f-mobile'><button className='create-f-btn' onClick={Open}>+</button></div>
            </div>
            {isFiltersOpen &&
            <>
            <div className="filter-window">
              <div className="filter-window-title">
                <div className="filters-mobile">
                  {!isCyber && 
                  <>
                  <h1>Спорт</h1>
                  <p className={filter == "Баскетбол" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("Баскетбол")}>Баскетбол</p>
                  <p className={filter == "Волейбол" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("Волейбол")}>Волейбол</p>
                  <p className={filter == "Мини-Футбол" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("Мини-футбол")}>Мини-Футбол</p>
                  <p className={filter == "Настольный теннис" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("Настольный теннис")}>Настольный теннис</p>
                  <p className={filter == "Бадминтон" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("Бадминтон")}>Бадминтон</p>
                  
                  </>}
                  {isCyber && 
                  <>
                  <h1>Киберспорт</h1>
                  <p className={filter == "Dota 2" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("Dota 2")}>Dota 2</p>
                  <p className={filter == "CS:GO" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("CS:GO")}>CS:GO</p>
                  <p className={filter == "The Finals" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("The Finals")}>The Finals</p>
                  <p className={filter == "Rust" ? 'filter-mobile select-mobile' : "filter-mobile"} onClick={() => Filter("Rust")}>Rust</p>
                  </>}
                  
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                  <img src={cross} onClick={() => (setFiltersOpen(false), document.querySelector('body').classList.toggle('no-scroll'))} className='cross-img-filter' alt="" />
                  <p style={{margin: "0", cursor: "pointer"}} onClick={CleanFilters}>Отчистить все фильты</p>
                </div>
              </div>
              
            </div>
            </>}
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
                    <option value="Настольный теннис">Настольный теннис</option>
                    <option value="Бадминтон">Бадминтон</option>
                    <option value="Dota 2">Dota 2</option>
                    <option value="CS:GO">CS:GO</option>
                    <option value="The Finals">The Finals</option>
                    <option value="Rust">Rust</option>
                  </select>
                  <input className="createFormInput" id='link' type="text" placeholder='Ссылка на любую соц сеть' />
                  {uncorrectlink && <p className='err-txt'>Некорректная ссылка!</p>}
                  <textarea className="createFormArea" name="" id="area" placeholder='Создание анкеты'></textarea>
                  <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                    <input type='submit' className="createFormBtn" value={"Создать"}/>
                    {errShow && <p className='err-txt'>Заполните все поля!</p>}
                  </div>
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