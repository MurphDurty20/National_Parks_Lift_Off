import './App.css';
import { useEffect } from 'react';
import Search from './search';


const App = () => {
  return (
    <div className="App">
      <h1> National Parks </h1>
      <div className='searchBar'><Search /></div>
    </div>

  );
}


export default App;
