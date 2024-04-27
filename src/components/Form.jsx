import React, {Component } from "react";
import './Form.css'
import { avatar } from "../assets";

const Form = ({id, name, age, sex, sport, description, link}) => {
    return(
    <div className="item">
        <div className="ava">
            <img src={avatar} style={{width: "20px"}} alt="" />
        </div>
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