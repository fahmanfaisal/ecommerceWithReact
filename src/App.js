import { Route , Routes , BrowserRouter} from 'react-router-dom';
import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Footer from './Pages/Footer';
import  Header  from './Pages/Header';
import Userlogin from './Pages/UserLogIn';

function App() {
  return (
    <div>
  
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Userlogin/>} />
      <Route path="/user-login" element={<Userlogin/>} />
      <Route path="/user-dashboard" element={<UserDashboard/>} />
      </Routes>
      <Footer/>
  
    </BrowserRouter>
    </div>
      
  );
}

export default App;
