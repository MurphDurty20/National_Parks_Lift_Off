const LoginPage = () => {
    return ( 
        <main>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Username" name="username" required/>
                    
                    <label htmlFor="password">Username</label>
                    <input type="password" placeholder="Enter Username" name="password" required/>

                    <button type="submit">Login</button>
                </div>
            </form>
        </main>
     );
}
 
export default LoginPage;