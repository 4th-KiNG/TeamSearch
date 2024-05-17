import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './CardPage.css'
import useStore from '../store/useStore'
import { avatar } from '../assets'
import '../pages/LK.css'
import LoadingPage from './LoadingPage'

function CardPage() {
    const {id} = useParams()
    const nav = useNavigate()
    const {GetFormById, GetUserByEmail, DeleteForm, user} = useStore()
    const [data, setData] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [sex, setSex] = useState()
    const [sport, setSport] = useState()
    const [link, setLink] = useState()
    const [description, setDescription] = useState()
    const [avatarURL, setAvatarURL] = useState()
    const [isLoading, setLoading] = useState(true)
    let LetOnes = false;
    let LetOnes2 = false;
    const EmailData = async () => {
        if (LetOnes) return;
        LetOnes = true
        if (email){
            await GetUserByEmail(email).then(res => {
                setName(res.name.stringValue)
                setAge(res.age.stringValue)
                setAvatarURL(res.avatarURL.stringValue)
                setSex(res.sex.stringValue)
            })
        }
        if (LetOnes && LetOnes2){
            setLoading(false)
        }
    }
    useEffect(() => {
        EmailData()
    }, [email])
    const FormData = async () => {
        if (LetOnes2) return;
        LetOnes2 = true
        await GetFormById(id).then(res => {
            setData(res._delegate._document.data.value.mapValue.fields)
        })
        if (LetOnes && LetOnes2){
            setLoading(false)
        }
    }
    useEffect(() => {
        FormData()
    }, [])
    useEffect(() => {
        if (data){
            setEmail(data.userEmail.stringValue)
            setSport(data.sport.stringValue)
            setLink(data.link.stringValue)
            setDescription(data.description.stringValue)
        }
    }, [data])
    const Delete = () => {
        nav("/Menu")
        DeleteForm(id)
    }
    if (isLoading){
        return(
            <div>
                <LoadingPage></LoadingPage>
            </div>
        )
    }
    return (
        <>
        <h1 className='contact-information-title' style={{backgroundColor: "white", marginBottom: "0", paddingTop: "10px", textAlign: "center"}}>Заявка участника</h1>
        <div className='CardPage'>
            <div className="CardPageAvatar">
                <div className='avatar'>
                    <img style={{width: "100%", height: "100%", borderRadius: "50%"}} src={avatarURL == "" ? avatar : avatarURL} alt="" />
                </div>
                <p style={{textAlign: "center"}} className='contact-information-txt'>{name}</p>
                {email == user.email && <button className='button-lk' onClick={Delete}>Удалить анкету</button>}
            </div>
            <div className='contact-information in-card'>
                <p className='contact-information-txt'>Вид спорта: {sport}</p>
                <p className='contact-information-txt'>Возраст: {age}</p>
                <p className='contact-information-txt'>Пол: {sex}</p>
                <p className='contact-information-txt'>Ссылки на соц сети: {link}</p>
                <p className='contact-information-txt'>Описание:</p>
                <div className='contact-information-txt'>
                    {description != "" && <p className='desc'>{description}</p>}
                </div>
            </div>
            
        </div>
        </>
    )
}

export default CardPage
