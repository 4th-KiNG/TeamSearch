import React, { useEffect, useState } from 'react'
import './Login.css'
import './LK.css'
import { logo, logosfedu, custom, emailico, lockico, eye, avatar, cross } from '../assets';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import LoadingPage from '../components/LoadingPage';
import './RegField.css'
const Login = () => {
    const [state, setState] = useState("login")
    const [isShowForm, setShowForm] = useState(false)
    const {user,GetMyForms, CreateUser, userNotFound, setNotFound, LoginUser, LogOut, UpdateUser, UpdateUserAvatar, avatarURL, username, userage, usersex, usersport, usercity, GetUser, userId} = useStore()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [myForms, setMyForms] = useState([])
    const [errShow, setErrShow] = useState()
    let LetOnes = false
    let LetOnes2 = false
    const ShowPassword = () => {
        if (document.querySelector(".password").type == "password"){
            document.querySelector(".password").type = "text"
        }
        else{
            document.querySelector(".password").type = "password"
        }
    }
    const UserData = async () => {
        
        if (user){
            setState("alsologin")
            await GetUser().then(res => {
                LetOnes2 = true
            })
            await GetMyForms(user.email).then(res => {
                console.log(res)
                setMyForms(res)
                LetOnes = true
            })
            console.log(LetOnes + "|||" + LetOnes2)
            if (LetOnes && LetOnes2){
                setLoading(false)
            }
        }
        else{
            setEmail("")
            setPassword("")
            setState("login")
        }
    }
    useEffect(() => {
        UserData()
        console.log(isLoading)
    }, [user])
    const BodyFix = () => {
        setShowForm(!isShowForm)
        setErrShow(false)
        document.querySelector("body").classList.toggle("no-scroll")
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const LoginChange = () => {
        setState("login")
        setEmail("")
        setPassword("")
        setNotFound(false)
    }
    const RegChange = () => {
        setState("reg")
        setEmail("")
        setPassword("")
        setNotFound(false)
    }
    const update = async () => {
        const name = document.querySelector(".lk-name").value
        const age = document.querySelector(".lk-age").value
        const sex = document.querySelector(".lk-sex").value
        const sport = document.querySelector(".lk-sport").value
        const city = document.querySelector(".lk-city").value
        if (age != "" && age < 0){
            setErrShow(true)
        }
        else{
            await UpdateUser(name, age, sex, sport, city)
            await GetUser()
            BodyFix()
        }
        
    }
    
    const ReductForm = () => {
        const [name, setName] = useState(username)
        const [age, setAge] = useState(userage)
        const [sex, setSex] = useState(usersex)
        const [sport, setSport] = useState(usersport)
        const [city, setCity] = useState(usercity)

        const handleNameChange = (e) => setName(e.target.value)
        const handleAgeChange = (e) => setAge(e.target.value)
        const handleSportChange = (e) => setSport(e.target.value)
        const handleCityChange = (e) => setCity(e.target.value)
        return(
            <div className='form1'>
                <div className='form-container'>
                    <img src={cross} onClick={BodyFix} className='close-btn' alt="" />
                    <div className='info-reduct'>
                        <p>ФИО: <input type="text" value={name} onChange={handleNameChange} className='lk-name' /></p>
                        <p>Возраст: <input type="number" value={age} onChange={handleAgeChange} className='lk-age' /></p>
                        <p>Пол: 
                            <select className='lk-sex reg_filter' name="" id="">
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                        </p>
                        <p>Профильный спорт: <input type="text" value={sport} onChange={handleSportChange} className='lk-sport' name="" id="" /></p>
                        <p>Город: <input type="text" value={city} onChange={handleCityChange} className='lk-city' name="" id="" /></p>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                        <button className='save-btn' onClick={update}>Сохранить</button>
                        {errShow && <p style={{color: "#c82f00"}}>Возраст не должен быть отрицательным</p>}
                    </div>
                </div>
            </div>
        )
    }
    if (isLoading && state == "alsologin"){
        document.querySelector("body").classList.add("no-scroll")
        return(
            <div>
                <LoadingPage></LoadingPage>
            </div>
        )
        
    }
    document.querySelector("body").classList.remove("no-scroll")
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
                        <div className="input-with-ico"><img src={emailico} className='input-ico' alt="" /><input type="email" placeholder='email' value={Email} onChange={handleEmailChange} className='logininput'  /></div>
                        <div className="input-with-ico"><img src={lockico} className='input-ico' alt="" /><input type="password" placeholder='password' value={Password} onChange={handlePasswordChange} className='logininput password' /><img src={eye} onClick={ShowPassword} className='input-ico' alt="" /></div>
                        {userNotFound && <p style={{color: "#c82f00", textAlign: "center"}}>Поля заполненны некорректно!</p>}
                    </div>
                    <div style={{display:"flex", flexDirection: "column", gap: "15px"}}>
                        <button className='mainbutton' onClick={() => CreateUser(Email, Password)}>Зарегестрироваться</button>
                        <button className='smallbutton' onClick={LoginChange}>Войти</button>
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
                        <div className="input-with-ico"><img src={emailico} className='input-ico' alt="" /><input type="email" placeholder='email' value={Email} onChange={handleEmailChange} className='logininput' /></div>
                        <div className="input-with-ico"><img src={lockico} className='input-ico' alt="" /><input type="password" placeholder='password' value={Password} onChange={handlePasswordChange} className='logininput password' /><img src={eye} onClick={ShowPassword} className='input-ico' alt="" /></div>
                        {userNotFound && <p style={{color: "#c82f00", textAlign: "center"}}>Пользователь не найден!</p>}
                    </div>
                    <div style={{display:"flex", flexDirection: "column", gap: "15px"}}>
                        <button className='mainbutton' onClick={() => LoginUser(Email, Password)}>Войти</button>
                        <button className='smallbutton' onClick={RegChange}>Зарегестрироваться</button>
                    </div>
                    
                </div>
            </div>
            }
            {state === "alsologin" &&
            <div className='alsoLog'>
                <div className='page'>
                    <div className='avatar-and-buttons'>
                        <div className='avatar'>
                            <input type="file" onChange={UpdateUserAvatar} className='input-photo' />
                            <img src={(avatarURL == "" || avatarURL == null) ? avatar : avatarURL} style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="" />
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <button className='button-lk' onClick={LogOut}>Выход</button>
                            <button className='button-lk' onClick={BodyFix}>Редактировать анкету</button>
                        </div>
                    </div>
                    <div className='contact-information'>
                        <h1 className='contact-information-title'>Контактная информация</h1>
                        <p className='contact-information-txt'>ФИО: {username}</p>
                        <p className='contact-information-txt'>Email: {user ? user.email: ""}</p>
                        <p className='contact-information-txt'>Пол: {usersex}</p>
                        <p className='contact-information-txt'>Возраст: {userage}</p>
                        <p className='contact-information-txt'>Профильный спорт: {usersport}</p>
                        <p className='contact-information-txt'>Город: {usercity}</p>
                    </div>
                    <div className='cards'>
                        <h1 style={{textAlign: "center"}} className='contact-information-title'>Мои анкеты</h1>
                        {myForms.map(form => {
                            return(
                                <>
                                <Link style={{textDecoration: "none"}} to={`/form/${form.id}`}>
                                    <div className='lk-card'>
                                        <p>Вид спорта: {form._delegate._document.data.value.mapValue.fields.sport.stringValue}</p>
                                    </div>
                                </Link>
                                </>
                            )
                        })}
                    </div>
                    {isShowForm && <ReductForm/>}
                </div>
            </div>
            }
        </div>
    )
}

export default Login