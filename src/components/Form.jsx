import React, {Component, useEffect, useState } from "react";
import './Form.css'
import { avatar } from "../assets";
import useStore from "../store/useStore";
const Form = ({sport, userEmail}) => {
    const {GetUserByEmail} = useStore()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [sex, setSex] = useState()
    const [avatarURL, setAvatarURL] = useState()
    useEffect(() => {
        GetUserByEmail(userEmail).then(res => {
            setName(res.name.stringValue)
            setAge(res.age.stringValue)
            setAvatarURL(res.avatarURL.stringValue)
            setSex(res.sex.stringValue)
        })
    }, [sport, userEmail])
    return(
    <div className="item">
        <img src={avatarURL == "" ? avatar : avatarURL} className="ava" alt="" />
        <div className="main-info">
            <p style={{textAlign: "center", marginBottom: "15px"}} className="info-p">{name}</p>
            <p className="info-p">Возраст: {age}</p>
            <p className="info-p">Пол: {sex}</p>
            <p className="info-p">Спорт: {sport}</p>
        </div>
    </div>
    )
}

export default Form;