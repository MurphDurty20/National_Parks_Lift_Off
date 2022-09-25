import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import { useLocalState } from "../../util/useLocalStorage";
import "./index.css"

const LoginPage = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    // const [jwt, setJwt] = useLocalState("","jwt")
    // console.log(setJwt);

    const handleChange = (event) => {
        setValues({
            ...values, 
            [event.target.name]: event.target.value

        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');

        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');

        // headers.append('GET', 'POST', 'OPTIONS');
        try {
            let res = await fetch("http://localhost:8080/api/auth/signin", {
                mode:"cors",
                // credentials: 'include',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(values),
            });
            let resJson = await res.json();
           
            if (res.status === 200 && resJson.accessToken) {
                window.localStorage.setItem("jwt", resJson.accessToken)
                // setJwt(resJson.accessToken);
                alert("User login successfully");
                console.log("User login successfully");
                navigate('/')
                console.log(resJson)
                return resJson;
            }else{
                alert("User login unsuccessfully");
                
            } 
          } catch (err) {
            console.log(err);
          }
    };
    

    return ( 
        <main>
            {/* <div>Jwt: {jwt}</div> */}
            <form  className="login" onSubmit={handleSubmit}>
                <div> 
                    {/* <label htmlFor="username">Username</label> */}
                    <input type="text" placeholder="Username" name="username" value={values.username} onChange={handleChange} required/>
                    
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="text" placeholder="Password" name="password" value={values.password} onChange={handleChange} required/>
                    
                    <button type="submit">Login</button>
                </div>
            </form>
        </main>
     );
}
 
export default LoginPage;