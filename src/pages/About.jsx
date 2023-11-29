import './About.css'
import { strong, strong1 } from '../assets';
function About(){
    return(
        <div className='About'>
            <h1 className='about-txt'>О нас</h1>
            <div className='section'>
                <div className='section1'>
                    <p className='about-txt'>Наша команда сделала веб-сайт по поиску сокомандников по спорту и киберспорту, чтобы объединить талантливых и ярких людей.</p>
                    <img src={strong1} alt="" className='strong1' />
                </div>
                <div className='section2'>
                    <p className='about-txt'>Наша миссия - поддержать уже существующие команды и помочь сформировать новые.</p>
                    <img src={strong} alt="" className='strong' />
                </div>
            </div>
        </div>
    )
}

export default About;