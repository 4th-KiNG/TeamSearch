import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";

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
    const storage = getStorage(app, "gs://teamsearch-1bd4d.appspot.com")
    const [user, loading, error] = useAuthState(auth)
    const [userId, setUserId] = useState("")
    const [username, setuserName] = useState("")
    const [userage, setuserAge] = useState("")
    const [usersex, setuserSex] = useState("")
    const [usercity, setuserCity] = useState("")
    const [usersport, setuserSport] = useState("")
    const [avatarURL, setAvatarURL] = useState("")
    const [forms, setForms] = useState([])
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
            setAvatarURL(data.avatarURL.stringValue)
            setUserId(res.docs[0].id)
        })
    }
    const GetUserByEmail = async (email) => {
        const users = await db.collection("users").where("email", "==", email).get().then(res => {
            const data = res.docs[0]._delegate._document.data.value.mapValue.fields
            return data
        })
        return users
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
    const UpdateUserAvatar = async (event) => {
        const file = event.target.files[0]
        try{
            const storageRef = ref(storage, `avatars/${userId}`)
            await uploadBytes(storageRef, file)
            const url = await getDownloadURL(storageRef)
            setAvatarURL(url)
            await db.collection("users").doc(userId).update({
                avatarURL: url
            })
        }catch(error){
            console.log(error)
        }
    }
    const GetForms = async () => {
        const formsSnapshot = await db.collection("forms").get();
        const formsData = formsSnapshot.docs.map(item => {
            const fields = item.data();
            return {
                formid: item.id,
                sport: fields.sport,
                link: fields.link,
                description: fields.description,
                userEmail: fields.userEmail
            };
        });
        setForms(formsData);
    }
    const GetFormById = async (id) => {
        const forms = await db.collection("forms").get()
        return forms.docs.find(form => form.id == id)
    }
    const CreateForm = async (description, link, sport) => {
        await db.collection("forms").add({
            userEmail: user.email,
            description: description,
            link: link,
            sport: sport
        }).then(res => {
            console.log(res)
        }).catch(e => console.log(e))
        window.location.reload()
    }
    const DeleteForm = async (id) => {
        await db.collection("forms").doc(id).delete().then(res => {
            console.log(res)
        })
    }
    const GetMyForms = async (mail) => {
        const forms = await db.collection("forms").where("userEmail", "==", mail).get().then(res => {
            return res.docs
        })
        return forms
    }
    return{
        user,
        GetMyForms,
        CreateUser,
        LoginUser,
        LogOut,
        UpdateUser,
        GetUser,
        UpdateUserAvatar,
        CreateForm,
        GetFormById,
        DeleteForm,
        username,
        userage,
        usercity,
        usersex,
        usersport,
        userId,
        avatarURL,
        GetForms,
        forms,
        GetUserByEmail
    }
}

export default useStore