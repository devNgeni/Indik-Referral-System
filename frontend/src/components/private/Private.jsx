import React from 'react'
import { Route, Redirect, Outlet } from 'react-router-dom'


function PrivateRoute({ component: Component, ...restOfProps }) {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                user && user?.accessToken ? <Component {...props} /> : <Redirect to="/Login" />
            }
        />
    )    
}
export default PrivateRoute;
