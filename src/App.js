import './App.css';
//import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Search from './search';
import Home from './components/Pages/Home/Home';
import ResultTemplate from './components/Pages/Home/ResultTemplate/index';


const App = () => { 
  return (
    <div className="App">
      <Router>
      <h1> National Parks </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ResultTemplate" element={<ResultTemplate />} />
        </Routes>
     </Router>
    </div>
  )
}


export default App;