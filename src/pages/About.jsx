import './About.css'
import { strong, strong1 } from '../assets';
function About(){
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }
    function CheckPlace(){
        let name = document.querySelector('.name-input').value
        let email = document.querySelector('.email-input').value
        let dec = document.querySelector('.fitback-input').value
        if (name != null && name != '' && email != null && email != '' && isEmailValid(email) && dec != '' && dec != null){
            document.querySelector(".send-btn").classList.add("close")
            document.querySelector(".send-label").classList.remove("close")
            document.querySelector('.warning1').classList.add("close")
        }
        else{
            document.querySelector('.warning1').classList.remove("close")
        }
    }
    return(
        <div className='About'>
            <h1 className='about-txt'>О нас</h1>
            <div className='section'>
                <div className='section1'>
                    <p className='about-txt'>Наша команда молодых разработчиков создала веб-сервис по поиску сокомендников в различные спортиные и киберспортиные дисциплины. Во вкладке анкеты каждый может побобрать себе сокомандников или найти уже собранную команду. Также можно выбрать в фильтре спортивную дисциплину, по которой вы ищите команду. Наша миссия - поддержать уже существующие команды и помочь сформировать новые.</p>
                    <img src={strong1} alt="" className='strong1' />
                </div>
                <form className='fitback-form'>
                <h2 className='about-txt'>Помогите улучшить нас сервис, оставив свой отзыв</h2>
                <label htmlFor="name" className='labels'>ФИО</label>
                <input type="text" className='name-input' />
                <label htmlFor="name" className='labels'>Электронная почта</label>
                <input type="email" className='email-input' />
                <label htmlFor="name" className='labels'>Номер телефона</label>
                <input type="tel" className='tel-input' />
                <label htmlFor="name" className='labels'>Отзыв</label>
                <textarea name="" id="" cols="30" rows="10" className='fitback-input'></textarea>
                <div style={{display: "flex", alignItems: "center", marginTop: "20px", gap: "15px"}}><button className='send-btn' onClick={CheckPlace}>Отправить</button><p className='warning1 close'>Заполните все поля верно!</p><p className='send-label close'>Отправлено ✓</p></div>
                
            </form>
            </div>
            
        </div>
    )
}

export default About;