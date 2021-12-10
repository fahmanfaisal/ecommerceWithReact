import { Route , Routes , BrowserRouter} from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Footer from './Pages/Footer';
import  Header  from './Pages/Header';
import Userlogin from './Pages/UserLogIn';
import MainBody from './Pages/MainBody';


function App() {
    return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<MainBody/>} />
      <Route path="/user-login" element={<Userlogin
      
      />} />
<Route path="/user-dashboard" element={<UserDashboard/>} />
</Routes>
<Footer/>
    </BrowserRouter>
    </div>
);
}

export default App;
