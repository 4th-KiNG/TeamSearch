import React, { useEffect, useState } from 'react'
import './Login.css'
import './LK.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';
import { logo, logosfedu, custom, emailico, lockico, eye, avatar, cross } from '../assets';
import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
const Login = ({cards}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [state, setState] = useState("reg")
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState("")
    const [sport, setSport] = useState("")
    const [city, setCity] = useState("")
    const [avatarURL, setAvatarURL] = useState("")
    const [name, setName] = useState("")
    const [showForm, setshowForms] = useState(false)
    const firebaseConfig = {
        apiKey: "AIzaSyAxcD80x5kSFznUSrCH2xhpGyu5DTwaexQ",
        authDomain: "teamsearch-75f8f.firebaseapp.com",
        projectId: "teamsearch-75f8f",
        storageBucket: "teamsearch-75f8f.appspot.com",
        messagingSenderId: "618608717856",
        appId: "1:618608717856:web:d5d2e7cbd4e14c14028c45"
    };  
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const storage = getStorage(firebaseApp, "gs://teamsearch-75f8f.appspot.com")
    const auth = firebase.auth();
    const [user, loading, error] = useAuthState(auth);
    const CreateAccount = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                setState("login")
                const users = collection(db, "users");
                addDoc(users, {
                    email: email,
                    name: "",
                    age: 0,
                    sex: "",
                    city: "",
                    avatarURL: ""
                })
            })
            .catch(error => console.log(error))
    }
    const LoginAccount = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log("Победа!!!")
            setState("alsologin")
        })
            .catch(error => console.log(error))
        console.log(user)
    }
    const LogOut = () => {
        auth.signOut();
    }
    const ShowPassword = () => {
        if (document.querySelector(".password").type == "password"){
            document.querySelector(".password").type = "text"
        }
        else{
            document.querySelector(".password").type = "password"
        }
    }
    useEffect(() => {
        if (user === null){
            setState("login")
        }
        else{
            setState("alsologin")
            
            const db = firebase.firestore()
            const userData = db.collection('users').where("email", "==", user.email).get()
            userData.then(res => {
                res.forEach(doc => {
                    setEmail(user.email)
                    setAge(doc.data().age)
                    setCity(doc.data().city)
                    setSex(doc.data().sex)
                    setSport(doc.data().sport)
                    setName(doc.data().name)
                    setAvatarURL(doc.data().avatarURL)
                })
            })
        }
    }, [user])
    const BodyFix = () => {
        setshowForms(!showForm) 
        document.querySelector("body").classList.toggle("no-scroll")
    }
    const userUpdate = async (name, age, city, sport ,sex) => {
        const userCollection = collection(db, "users")
        const q = await query(userCollection, where("email", "==", email))
        const queryDoc = await getDocs(q)
        const docRef = queryDoc.docs[0].ref
        await updateDoc(docRef, {
            name: name,
            age: age,
            sex: city,
            city: sport,
            sport: sex
        })
    }
    const SaveInfo = () => {
        const Name = document.querySelector(".lk-name").value
        const Age = document.querySelector(".lk-age").value
        const Sex = document.querySelector(".lk-sex").value
        const City = document.querySelector(".lk-city").value
        const Sport = document.querySelector(".lk-sport").value
        setName(Name)
        setAge(Age)
        setSex(Sex)
        setCity(City)
        setSport(Sport)
        
        setTimeout(() => {
            userUpdate(Name, Age, City, Sport, Sex)
            setshowForms(!showForm)
        },50)
        
    }
    const UploadAvatar = async (file) => {
        const storeRef = ref(storage, `/avatars/${email}`)
        await uploadBytes(storeRef, file)
        const downloadUrl = await getDownloadURL(storeRef);
        const userCollection = collection(db, "users")
        const q = await query(userCollection, where("email", "==", email))
        const queryDoc = await getDocs(q)
        const docRef = queryDoc.docs[0].ref
        await updateDoc(docRef, {
            avatarURL: downloadUrl
        })
        setAvatarURL(downloadUrl)
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        UploadAvatar(file)
    }
    const ReductForm = () => {
        return(
            <div className='form1'>
                <div className='form-container'>
                    <img src={cross} onClick={BodyFix} className='close-btn' alt="" />
                    <div className='info-reduct'>
                        <p>ФИО: <input type="text" placeholder={name} className='lk-name' /></p>
                        <p>Возраст: <input type="number" placeholder={age} className='lk-age' /></p>
                        <p>Пол: <input type="text" placeholder={sex} className='lk-sex' /></p>
                        <p>Профильный спорт: <input type="text" placeholder={sport} className='lk-sport' name="" id="" /></p>
                        <p>Город: <input type="text" className='lk-city' placeholder={city} name="" id="" /></p>
                    </div>
                    <button className='save-btn' onClick={SaveInfo}>Сохранить</button>
                </div>
            </div>
        )
    }
    
    return (
        <div className='Login'>
            {state === "reg" && 
            <div className='form'>
                <div className='formimg'>
                    <img src={logosfedu} alt="" />
                </div>
                <div className='forminput'>
                    <div className='inputs'>
                    <h1 className='formtxt'>Регистрация</h1>
                        <div className="input-with-ico"><img src={emailico} className='input-ico' alt="" /><input type="email" placeholder='email' className='logininput' onChange={(e) => setEmail(e.target.value)} /></div>
                        <div className="input-with-ico"><img src={lockico} className='input-ico' alt="" /><input type="password" placeholder='password' className='logininput password'  onChange={(e) => setPassword(e.target.value)} /><img src={eye} onClick={ShowPassword} className='input-ico' alt="" /></div>
                    </div>
                    <div style={{display:"flex", flexDirection: "column", gap: "15px"}}>
                        <button onClick={CreateAccount} className='mainbutton'>Зарегестрироваться</button>
                        <button onClick={() => setState("login")} className='smallbutton'>Войти</button>
                    </div>
                </div>
            </div>
            }
            {state === "login" &&
            <div className='form'>
                <div>
                    <img src={logosfedu} className='formimg' alt="" />
                </div>
                <div className='forminput'>
                    
                    <div className='inputs'>
                    <h1 className='formtxt'>Вход</h1>
                        <div className="input-with-ico"><img src={emailico} className='input-ico' alt="" /><input type="email" placeholder='email' className='logininput' onChange={(e) => setEmail(e.target.value)} /></div>
                        <div className="input-with-ico"><img src={lockico} className='input-ico' alt="" /><input type="password" placeholder='password' className='logininput password' onChange={(e) => setPassword(e.target.value)} /><img src={eye} onClick={ShowPassword} className='input-ico' alt="" /></div>
                    </div>
                    <div style={{display:"flex", flexDirection: "column", gap: "15px"}}>
                        <button onClick={LoginAccount} className='mainbutton'>Войти</button>
                        <button onClick={() => setState("reg")} className='smallbutton'>Зарегестрироваться</button>
                    </div>
                </div>
            </div>
            }
            {state === "alsologin" &&
            <div className='alsoLog'>
                <div className='page'>
                    <div className='avatar-and-buttons'>
                        <div className='avatar'>
                            <input type="file" onChange={handleFileChange} className='input-photo' />
                            <img src={avatarURL === "" ? avatar : avatarURL} style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="" />
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <button className='button-lk' onClick={LogOut}>Выход</button>
                            <button className='button-lk' onClick={BodyFix}>Редактировать анкету</button>
                        </div>
                    </div>
                    <div className='contact-information'>
                        <h1 className='contact-information-title'>Контактная информация</h1>
                        <p className='contact-information-txt'>ФИО: {name}</p>
                        <p className='contact-information-txt'>Email: {email}</p>
                        <p className='contact-information-txt'>Пол: {sex}</p>
                        <p className='contact-information-txt'>Возраст: {age}</p>
                        <p className='contact-information-txt'>Профильный спорт: {sport}</p>
                        <p className='contact-information-txt'>Город: {city}</p>
                    </div>
                    <div className='cards'>
                        
                        {cards.map((card) => (card.email === email ? <>
                        <Link className='lk-card' to={`/user/${card.id}`}>
                            <p>Вид спорта: {card.sport}</p>
                        </Link>
                        </> : <></>))}
                    </div>
                    {showForm && <ReductForm/>}
                </div>
            </div>
            }
        </div>
    )
}

export default Login
