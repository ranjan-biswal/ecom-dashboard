import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    if (isLoggedIn !== "true") {
        return <Navigate to="/" replace />;
    }else{
        
    }
    return children;
};
export default Protected;