import { useState } from "react"

const RegistrationPage = () => {

    const [values, setValues] = useState({
        username: "",
        password: "",
        verfifyPassword:""
    })

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

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST', 'OPTIONS');
        try {
            let res = await fetch("http://localhost:8080/api/v1/registration", {
                mode:"cors",
                // credentials: 'include',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(values),
            });
            let resJson = await res.json();
            if (res.status === 200) {
              console.log("User created successfully");
              return resJson;
            } 
          } catch (err) {
            console.log(err);
          }
    };
    

    return ( 
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Username" name="username" value={values.username} onChange={handleChange} required/>
                    
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="Password" name="password" value={values.password} onChange={handleChange} required/>
                    
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </main>
     );
}
 
export default RegistrationPage;