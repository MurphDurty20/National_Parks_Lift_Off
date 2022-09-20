import './App.css';
//import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './search';
import Home from './components/Pages/Home/Home';
import ResultTemplate from './components/Pages/Home/ResultTemplate/index';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

const App = () => { 
  
  return ( 

    <div className="App">
      <Router>
      <h1> National Parks </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
          }/>
          <Route path="register" element={<RegistrationPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="/ResultTemplate" element={<ResultTemplate />}>
            <Route path=":parkId" element={<ResultTemplate />} />
          </Route>
        </Routes>
     </Router>
    </div>
  )
}

// This are good

export default App;