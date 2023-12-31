import React from 'react'
import './Home.css'
import Card1 from '../components/Card'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Text1 from '../components/Text'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <div className="Home">
            <div className="TextBox" style={{display: 'flex',alignItems: "center",height: "100%",justifyContent: "center",}}>
                <Text1></Text1>
            </div>
            <div className='CardBox'>
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
            </div>
            <div className='menu-btn'>
                <Link to='/Menu' className='menu-btn'>Перейти к анкетам</Link>
            </div>
    </div>
    )
}
export default Home