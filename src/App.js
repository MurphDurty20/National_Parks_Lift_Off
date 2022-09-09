import './App.css';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './search';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';


const App = () => { 
  
  return ( 

    <div className="App">

      <h1> National Parks </h1>
      <Search />
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
          <Route path="profile" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
          }/>
          <Route path="register" element={<RegistrationPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>



  )
}


export default App;
