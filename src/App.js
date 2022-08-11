import './App.css';
import Sidebar from './SideNav/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
