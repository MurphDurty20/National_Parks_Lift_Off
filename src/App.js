import { Routes, Route } from 'react-router-dom'
import  Layout  from './components/Layout'
import './App.css';
import SearchResults from './components/SearchResults';
import RegistrationPage from './components/RegistrationPage';

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="search" element={<SearchResults/>}/>
        <Route path="register" element={<RegistrationPage/>}/>
      </Route>
    </Routes>
    <button onClick="/search">
      Search Button
    </button>
  </>
  );
}

export default App;
