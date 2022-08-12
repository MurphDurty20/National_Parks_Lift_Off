import { Outlet } from 'react-router-dom'
import './index.css'

const Layout = () => {
    return ( 
    <div className="App">
      <h1> National Parks </h1>
      <Outlet/>
    </div>
     );
}
 
export default Layout;