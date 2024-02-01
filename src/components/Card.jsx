import React from 'react'
import './Card.css'

const Card = ({title, discription}) => {
  return(
      <div className="card">
          <div className="title">{title}</div>
          <div className="lineincard"></div>
          <div className="discription">{discription}</div>
      </div>
  )
}
export default Card;