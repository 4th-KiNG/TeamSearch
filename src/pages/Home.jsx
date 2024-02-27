import React from 'react'
import './Home.css'
import { Card } from '../components'
import Text from '../components/Text'
import { Link } from 'react-router-dom'
import { Tilt } from 'react-tilt'
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Home = () => {
    return (
        <div className='container1'>
            <div className="Home">
                <div className="TextBox" style={{display: 'flex',alignItems: "center",height: "100%",justifyContent: "center",}}>
                    <Text></Text>
                </div>
                <div className='CardBox'>
                    <Tilt options={defaultOptions}>
                        <Card title={"Разнообразие"} discription={"У нас вы найдете широкий ассортимент игр, начиная от популярных видов спорта, таких как футбол, баскетбол, и заканчивая увлекательным миром киберспорта. Наша цель - поделиться с вами всей этой удивительной мозаикой спортивной страсти и вдохновения, которая объединяет миллионы людей по всему миру."}></Card>
                    </Tilt>
                    <Tilt options={defaultOptions}>
                        <Card title={"Подробная информация"} discription={"На нашем сайте особое внимание уделено профилям игроков, их достижениям и опыту. Мы верим, что всестороннее представление об игроках и командах поможет вам лучше понять их особенности и выбрать тех соратников по игре, которые подойдут именно вам, и хорошо провести время с ними."}></Card>
                    </Tilt>
                    <Tilt options={defaultOptions}>
                        <Card title={"Удобный интерфейс"} discription={"Благодаря простой навигации и четкому дизайну вы сможете легко находить всю нужную информацию - все это для того, чтобы ваше погружение в мир спорта было максимально приятным и живым. С нами вы сможете погрузитесь в захватывающий мир спорта и киберспорта без лишних хлопот!"}></Card>
                    </Tilt>
                </div>
                <div className='menu-btn'>
                    <Link to='/Menu' className='menu-btn'>Перейти к анкетам</Link>
                </div>
            </div>
        </div>
    )
}
export default Home