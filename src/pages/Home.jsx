import React from 'react'
import './Home.css'
import { Card } from '../components'
import Text from '../components/Text'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <div className='container1'>
            <div className="Home">
                <div className="TextBox" style={{display: 'flex',alignItems: "center",height: "100%",justifyContent: "center",}}>
                    <Text></Text>
                </div>
                <div className='CardBox'>
                    <Card title={"Разнообразие"} discription={"Тебе доступен широкий выбор спортивных и киберспортивных игр. С нами твой досуг станет ярким и наполненным."}></Card>
                    <Card title={"Подробная информация"} discription={"На нашем сайте ты сможешь увидеть подробную информацию о командах и игроках: их достижения, опыт, особенности."}></Card>
                    <Card title={"Удобный интерфейс"} discription={"Интерфейс нашего сервиса интуитивно понятен и удобен, что позволяет найти нужную информацию быстро и с комфортом."}></Card>
                </div>
                <div className='menu-btn'>
                    <Link to='/Menu' className='menu-btn'>Перейти к анкетам</Link>
                </div>
            </div>
        </div>
    )
}
export default Home