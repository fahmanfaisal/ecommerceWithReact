import { Route , Routes , BrowserRouter} from 'react-router-dom';
import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Footer from './Pages/Footer';
import  Header  from './Pages/Header';
import Userlogin from './Pages/UserLogIn';
import MainBody from './Pages/MainBody';
import { useState } from 'react';
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'




function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response)
      })
   }
  }
  
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<MainBody/>} />
      <Route path="/user-login" element={<Userlogin 
        title="Login"
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={() => handleAction(1)}/>}
      />
      <Route path='/user-register' element={<Userlogin
        title="Register"
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={() => handleAction(2)}/>} 
       />
      <Route path="/user-dashboard" element={<UserDashboard/>} />
      </Routes>
      <Footer/>
  
    </BrowserRouter>
    </div>
      
  );
}

export default App;
