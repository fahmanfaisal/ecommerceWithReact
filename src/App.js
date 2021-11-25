import './App.css';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import Footer from './Pages/Footer';
import  Header  from './Pages/Header';

function App() {
  return (
    <div className="">
      <Header/>
      <UserDashboard/>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
