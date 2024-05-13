import React, { useEffect, useState } from 'react'
import './Login.css'
import './LK.css'
import { logo, logosfedu, custom, emailico, lockico, eye, avatar, cross } from '../assets';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';


const Login = () => {
    const [state, setState] = useState("login")
    const [isShowForm, setShowForm] = useState(false)
    const {user, CreateUser, LoginUser, LogOut, UpdateUser, UpdateUserAvatar, avatarURL, username, userage, usersex, usersport, usercity, GetUser, userId} = useStore()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const ShowPassword = () => {
        if (document.querySelector(".password").type == "password"){
            document.querySelector(".password").type = "text"
        }
        else{
            document.querySelector(".password").type = "password"
        }
    }
    useEffect(() => {
        if (user){
            setState("alsologin")
            GetUser()
            console.log(user)
        }
        else{
            setEmail("")
            setPassword("")
            setState("login")
        }
    }, [user])
    const BodyFix = () => {
        setShowForm(!isShowForm)
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
    }
    const RegChange = () => {
        setState("reg")
        setEmail("")
        setPassword("")
    }
    const update = async () => {
        const name = document.querySelector(".lk-name").value
        const age = document.querySelector(".lk-age").value
        const sex = document.querySelector(".lk-sex").value
        const sport = document.querySelector(".lk-sport").value
        const city = document.querySelector(".lk-city").value
        await UpdateUser(name, age, sex, sport, city)
        await GetUser()
        BodyFix()
    }
    const ReductForm = () => {
        return(
            <div className='form1'>
                <div className='form-container'>
                    <img src={cross} onClick={BodyFix} className='close-btn' alt="" />
                    <div className='info-reduct'>
                        <p>ФИО: <input type="text" className='lk-name' /></p>
                        <p>Возраст: <input type="number" className='lk-age' /></p>
                        <p>Пол: <input type="text" className='lk-sex' /></p>
                        <p>Профильный спорт: <input type="text" className='lk-sport' name="" id="" /></p>
                        <p>Город: <input type="text" className='lk-city' name="" id="" /></p>
                    </div>
                    <button className='save-btn' onClick={update}>Сохранить</button>
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
                        <div className="input-with-ico"><img src={emailico} className='input-ico' alt="" /><input type="email" placeholder='email' value={Email} onChange={handleEmailChange} className='logininput'  /></div>
                        <div className="input-with-ico"><img src={lockico} className='input-ico' alt="" /><input type="password" placeholder='password' value={Password} onChange={handlePasswordChange} className='logininput password' /><img src={eye} onClick={ShowPassword} className='input-ico' alt="" /></div>
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

                    </div>
                    {isShowForm && <ReductForm/>}
                </div>
            </div>
            }
        </div>
    )
}

export default Login
