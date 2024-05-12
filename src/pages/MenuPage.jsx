import './MenuPage.css'
import { basketballico, cross, gameico, playstick } from '../assets';
import './RegField.css'
import Forms from '../components/Forms.jsx';
import React, {Component, useEffect, useState} from 'react';
import { ReactDOM } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { addDoc, collection, getDocs, query, updateDoc, where, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getStorage } from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';


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



const MenuPage = ({forms}) => {
    const [currForms, setcurrForms] = useState(forms)
    const firebaseConfig = {
      apiKey: "AIzaSyDuSJaAWnrUzScfksumcWpNazLZOZaVo00",
        authDomain: "teamsearch-1bd4d.firebaseapp.com",
        projectId: "teamsearch-1bd4d",
        storageBucket: "teamsearch-1bd4d.appspot.com",
        messagingSenderId: "335423463032",
        appId: "1:335423463032:web:9a1211a5b4d199c9e4178d",
        measurementId: "G-JQGHQTH1M4"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const storage = getStorage(firebaseApp, "gs://teamsearch-75f8f.appspot.com")
    const auth = firebase.auth();
    const [user, loading, error] = useAuthState(auth);
    const CreateForm = async () => {
      const email = user.email
      const userCollection = collection(db, "users")
      const q = await query(userCollection, where("email", "==", email))
      const queryDoc = await getDocs(q)
      const docRef = queryDoc.docs[0].ref
      let age = 0
      let avatarURL = ""
      let name = ""
      let sex = ""
      let sport = ""
      await getDoc(docRef).then(res => {
        const data = res._document.data.value.mapValue.fields
        age = data.age.stringValue
        avatarURL = data.avatarURL.stringValue
        name = data.name.stringValue
        sex = data.sex.stringValue
      })
      console.log(age + sex + sport)
      sport = document.getElementById("sport").value
      let link = document.getElementById("link").value
      let area = document.getElementById("area").value
      const forms = collection(db, "forms");
      addDoc(forms, {
        email: email,
        name: name,
        age: age,
        sex: sex,
        avatarURL: avatarURL,
        sport: sport,
        link: link,
        description: area
      })
      Open()
      window.location.reload()
    }
    const [isCyber, setCyber] = useState(false)
    function CyberFilter() {
      document.querySelector('.sportlist').classList.toggle('close');
      document.querySelector('.cybersport').classList.toggle('close');
      setCyber(!isCyber)
      console.log(isCyber)
    }
    useEffect(() => {
      setcurrForms(forms.filter((form) => form.sport == "Мини-футбол" || "Баскебол" || "Волейбол" || "Настольный теннис" || "Бадминтон"))
      console.log(currForms)
    }, [])
    function Open() {
      document.querySelector('body').classList.add('no-scroll');
      setShowForm(!isShowForm)
    }
    const Filter = (filter) => {
      console.log(filter)
      setcurrForms(forms.filter((form) => form.sport == filter))
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
                <form className="createForm" onSubmit={CreateForm}>
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