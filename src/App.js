import { Route , Routes , BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Footer from './Pages/Footer';
import  Header  from './Pages/Header';
import Userlogin from './Pages/UserLogIn';
import MainBody from './Pages/MainBody';
import { useState , useEffect } from 'react';
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate();

const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
    createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
        navigate('/userdashboard')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
        }
        })
    }
}

useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
    navigate('/userdashboard')
    }
}, [])

const handleActions = (id) => {

    const authentication = getAuth();
    if (id === 1) {
    signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
        navigate('/userdashboard')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
        if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
        }
        })    
    }  
}


return (
    <div>
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<MainBody/>} />
        <Route path="/user-login" element={
        <Userlogin 
            title="Login"
            setEmail={setEmail}
            setPassword={setPassword}
            handleAction={() => handleActions(1)}/>}
        />
        <Route path='/user-register' element={<Userlogin
            title="Register"
            setEmail={setEmail}
            setPassword={setPassword}
            handleAction={() => handleAction(2)}/>} 
        />
        <Route path="/userdashboard" element={<UserDashboard/>} />
    
    </Routes>
    <Footer/>
    </>
    </div>
);
}

export default App;
