import './RegField.css'

function RegField(){
    return(
        <div className='Field'>
            <div className='text-field'>
                <p>ФИО</p>
                <input type="text" name="username" id="" className='name-input'/>
            </div>
            <div className='text-field'>
                <p>Возраст</p>
                <input type="number" name="username" id="" className='name-input'/>
            </div>
            <div className='text-field'>
                <p className='male'>Пол</p>
                <label htmlFor="male">Мужской</label>
                <input type="radio" name="contact" id="male" className='name-input'/>
                <label htmlFor="female">Женский</label>
                <input type="radio" name="contact" id="female" className='name-input'/>
            </div>
            <div className='text-field'>
                <p>Спорт</p>
                <select id="sport" name='sport'>
                    <option value="">Мини-Футбол</option>
                    <option value="">Баскетбол</option>
                    <option value="">Теннис</option>
                    <option value="">Волейбол</option>
                    <option value="">CS:GO</option>
                    <option value="">Dota 2</option>
                    <option value="">Apex Legents</option>
                </select>
            </div>
            <div className='text-field'>
                <p>Ссылка на Telegram</p>
                <input type="text" name="username" id="" className='name-input'/>
            </div>
            <div className='text-field'>
                <p>Ссылка на VK</p>
                <input type="text" name="username" id="" className='name-input'/>
            </div>
            <div className='text-field'>
                <p>Описание</p>
                <textarea name="username" type='text' id="" cols="69" rows="10" className='name-input'></textarea>
            </div>
            <button className='create-btn'>
                Создать +
            </button>
        </div>
    )
}

export default RegField;