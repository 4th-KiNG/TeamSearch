import './RegField.css'
import { cross } from '../assets';
import React from 'react';

function Close(){
    document.querySelector('.reg-f').classList.add('close');
    document.querySelector('body').classList.remove('no-scroll');
}


class RegField extends React.Component {
    render(){
    return(
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
                <p>Ссылка на VK</p>
                <input type="text" name="username" id="" className='name-input'/>
            </div>
            <div className='text-field'>
                <p>Описание</p>
                <textarea name="username" type='text' id="des" cols="69" rows="10" className='name-input'></textarea>
            </div>
            <button className='create-btn' onClick={() => this.props.AddF(document.getElementById('name').value,
            document.getElementById('age').value, document.querySelector('input[name="contact"]:checked').value, document.getElementById('sport').value, document.getElementById('tg').value, document.getElementById('des').value)}>
                Создать +
            </button>
        </div>
    )
    }
}

export default RegField;