import './MenuPage.css'
import { basketballico, gameico } from '../assets';
import RegField from './RegField'
import Forms from './Forms.jsx';
import React, {Component, useState} from 'react';
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
    document.querySelector('.reg-f').classList.remove('close');
}





class MenuPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            forms: [
                {
                    id: 1,
                    name: "Писанко Александр Валерьевич",
                    age: 18,
                    male: "Мужской",
                    sport: "Баскетбол",
                    tglink: "https://t.me/Ozoki46",
                    description: "Немного о себе"
                }
            ]
        }
    }
    StateAdd(name1, age1, male1, sport1, tglink1, description1){
        this.state.forms.push({id: 1, name: name1, age: age1, male:male1, sport:sport1, tglink:tglink1, description: description1})
        this.setState(this.state.forms)
    }
    render(){
    return (
        <div>
            <div className="mainPage">
                <div className="filters">
                    <p className='filter'>Баскетбол</p>
                    <p className='filter'>Футбол</p>
                    <p className='filter'>Теннис</p>
                    <p className='filter'>Гандбол</p>
                </div>
                <div className="applic">
                    <div className='grey-rect'>
                        <div className='black-rect'>
                            <div className='white-rect' onClick={() => (document.querySelector('.white-rect').classList.toggle('white-rect1'), anim())}>
                                <img src={basketballico} alt="" className='basketballico' />
                                <img src={gameico} alt="" className='gameico' />
                            </div>
                        </div>
                    </div>
                    <div className='create-f'><button className='create-f-btn' onClick={Open}>Создать анкету+</button></div>
                    <div className='reg-f close'>
                        <RegField AddF={(name1, age1, male1, sport1, tglink1, description1) => this.StateAdd(name1, age1, male1, sport1, tglink1, description1)}></RegField>
                    </div>
                    <div className='forms'>
                        <Forms forms={this.state.forms}></Forms>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default MenuPage;