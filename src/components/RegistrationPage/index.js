import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom';
import "./index.css"

const RegistrationPage = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email:"",
        username: "",
        password: "",
    })

    const [valuesErrors, setValuesErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values, 
            [event.target.name]: event.target.value

        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setValuesErrors(validate(values));
        setIsSubmit(true)
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');

        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');

        // headers.append('GET', 'POST', 'OPTIONS');
        try {
            let res = await fetch("http://localhost:8080/api/auth/signup", {
                mode:"cors",
                // credentials: 'include',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(values),
            });
            let resJson = await res.json();
            console.log(resJson)
            if (res.status === 200) {
                alert("User registration successfully");
                console.log("User registration successfully");
                navigate("/login")
                console.log(resJson)
                return resJson;
            } 
          } catch (err) {
            console.log(err);
          }
    };

    useEffect(() => {
        console.log(valuesErrors);
        if (Object.keys(valuesErrors).length === 0 && isSubmit) {
          console.log(valuesErrors);
        }
      }, [valuesErrors]);

    const validate = (inputs) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!inputs.username) {
            errors.username = "Username is required!";
          }else if (inputs.username.length < 3) {
            errors.password = "Password must be more than 3 characters";
          } else if (inputs.username.length > 20) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
          if (!inputs.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(inputs.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!inputs.password) {
            errors.password = "Password is required";
          } else if (inputs.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
          } else if (inputs.password.length > 40) {
            errors.password = "Password cannot exceed more than 40 characters";
          }
          return errors;
    }
    

    return ( 
        <main>
            <form className="register" onSubmit={handleSubmit}>
                <div>
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" placeholder="Enter Email" name="email" value={values.email} onChange={handleChange} required/>
                    <p>{valuesErrors.email}</p>

                    {/* <label htmlFor="username">Username</label> */}
                    <input type="text" placeholder="Enter Username" name="username" value={values.username} onChange={handleChange} required/>
                    <p>{valuesErrors.username}</p>

                    {/* <label htmlFor="password">Password</label> */}
                    <input type="text" placeholder="Password" name="password" value={values.password} onChange={handleChange} required/>
                    <p>{valuesErrors.password}</p>

                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </main>
     );
}
 
export default RegistrationPage;