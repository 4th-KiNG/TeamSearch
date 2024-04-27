import React from 'react'
import { useParams } from 'react-router-dom'
import './CardPage.css'

function CardPage({cards}) {
    const {id} = useParams()
    const card = cards.find(card => card.id === id)
    return (
        <div className='CardPage'>
            <p>Имя: {card.title}</p>
            <p>Возраст:</p>
            <p>Пол:</p>
            <p>Вид спорта:</p>
            <p>Ссылки на соц сети:</p>
            <p>Описание:</p>
        </div>
    )
}

export default CardPage
