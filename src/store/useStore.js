import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


function useStore(){
    const firebaseConfig = {
        apiKey: "AIzaSyDuSJaAWnrUzScfksumcWpNazLZOZaVo00",
        authDomain: "teamsearch-1bd4d.firebaseapp.com",
        projectId: "teamsearch-1bd4d",
        storageBucket: "teamsearch-1bd4d.appspot.com",
        messagingSenderId: "335423463032",
        appId: "1:335423463032:web:9a1211a5b4d199c9e4178d",
        measurementId: "G-JQGHQTH1M4"
    }
    const app = firebase.initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const db = firebase.firestore()
    const [user, loading, error] = useAuthState(auth)
    const [userId, setUserId] = useState("")
    const [username, setuserName] = useState("")
    const [userage, setuserAge] = useState("")
    const [usersex, setuserSex] = useState("")
    const [usercity, setuserCity] = useState("")
    const [usersport, setuserSport] = useState("")
    const CreateUser = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email,password)
        .then(res => {
            console.log(res)
            db.collection("users").add({
                name: "",
                email: email,
                age: "",
                avatarURL: "",
                city: "",
                sex: "",
                sport: ""
            }).then(res => {
                setUserId(res.id)
            })
        }).catch(error => console.log(error))
    }
    const UpdateUser = async (name, age, sex, sport, city) => {
        await db.collection("users").doc(userId).update({
            name: name,
            age: age,
            city: city,
            sex: sex,
            sport: sport
        })
    }
    const GetUser = async () => {
        db.collection("users").where('email', "==", user.email).get().then(res => {
            const data = res.docs[0]._delegate._document.data.value.mapValue.fields
            setuserName(data.name.stringValue)
            setuserAge(data.age.stringValue)
            setuserSex(data.sex.stringValue)
            setuserCity(data.city.stringValue)
            setuserSport(data.sport.stringValue)
            setUserId(res.docs[0].id)
        })
    }
    const LoginUser = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            db.collection("users").where('email', "==", email).get().then(res => {
                setUserId(res.docs[0].id)
                
            })
        }).catch(error => console.log(error))
    }
    const LogOut = async () => {
        await auth.signOut()
    }
    return{
        user,
        CreateUser,
        LoginUser,
        LogOut,
        UpdateUser,
        GetUser,
        username,
        userage,
        usercity,
        usersex,
        usersport,
        userId
    }
}

export default useStore