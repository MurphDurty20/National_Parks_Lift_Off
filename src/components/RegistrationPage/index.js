import { useState } from "react"

const RegistrationPage = () => {

    const [values, setValues] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setValues({
            ...values, 
            [event.target.name]: event.target.value

        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/register", {
                mode: 'no-cors',  
                method: "POST",
                body: JSON.stringify(values),
            });
            let resJson = await res.json();
            if (res.status === 200) {
              console.log("User created successfully");
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
                    <input type="password" placeholder="Enter Username" name="password" value={values.password} onChange={handleChange} required/>
                    
                    {/* <label htmlFor="verifyPassword">Verify Password</label>
                    <input type="password" placeholder="Enter Username" name="verifyPassword" value={values.verfifyPassword} onChange={handleChange} required/> */}
                    
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </main>
     );
}
 
export default RegistrationPage;