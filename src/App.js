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



function App() {

  const [email, setEmail] = useState('');
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
    }
  }

  return (
    <div>
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<MainBody/>} />
      <Route path="/user-login" element={<Userlogin 
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
