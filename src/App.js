import './App.css';
import Parks from './components/Parks';
import RegistrationPage from './components/RegistrationPage';
import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './search';


const App = () => { 
  
  return ( 

    <div className="App">

      <h1> National Parks </h1>
      <Search />
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
          <Route path="parksresult" element={<Parks/>}/>
          <Route path="register" element={<RegistrationPage/>}/>
        </Routes>

      </Router>
    </div>



  )
}


export default App;
