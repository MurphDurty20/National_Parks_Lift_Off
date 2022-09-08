import { Navigate } from "react-router";
import { useLocalState } from "../../util/useLocalStorage";

const PrivateRoute = ({children}) => {
    const [jwt, setJwt] = useLocalState("", "jwt")
    return jwt ? children: <Navigate to="/login"/>;
}
 
export default PrivateRoute;