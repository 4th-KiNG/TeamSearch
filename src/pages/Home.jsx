import React from 'react'
import './Home.css'
import Card1 from '../components/Card'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Text1 from '../components/Text'
<<<<<<< HEAD
=======
import Header from '../components/Header'
import Footer from '../components/Footer'
>>>>>>> 9d5c864b754522c9eabf318afdbd36dfe94920a0



const Home = () => {
    return (
<<<<<<< HEAD
        <div className="Home">
            <div className="TextBox" style={{display: 'flex',alignItems: "center",height: "100%",justifyContent: "center",}}>
                <Text1></Text1>
            </div>
            <div className='CardBox'>
=======
        
        <div className="Home">
            <Header></Header>
            <div className="TextBox" style={{display: 'flex',alignItems: "center",height: "100%",justifyContent: "center",}}>
                <Text1></Text1>
            </div>
            <div className='CardBox' style={{display: 'flex', flexDirection: 'row'}}>
>>>>>>> 9d5c864b754522c9eabf318afdbd36dfe94920a0
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
            </div>
<<<<<<< HEAD
            <div className='menu-btn'>
                <a href="/Menu" className='menu-btn'>
                    Перейти к анкетам
                </a>
            </div>
=======
            <Footer></Footer>
>>>>>>> 9d5c864b754522c9eabf318afdbd36dfe94920a0
    </div>
    )
}
export default Home