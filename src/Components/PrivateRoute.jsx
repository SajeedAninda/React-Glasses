import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return children;
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }
}
export default PrivateRoute;