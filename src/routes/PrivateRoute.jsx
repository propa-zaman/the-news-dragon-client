import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Spinner animation="border" variant="primary"  className='mx-auto'/>;

    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace > </Navigate>
};

export default PrivateRoute;


/***************
 * Steps:
 * 1. check user is logged in or not
 * 2. if user is logged in, allow them to visit the route
 * 3. Else redirect to the user login page
 * 4. setup the private router
 * 5. handle loading
 * 
 * 
 * 
 * 
 * 
 * 
 * ***/ 
