import React from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import useAuth from '../hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div class="spinner-grow text-info" role="status">
            <span class="sr-only"></span>
        </div>
    }

    return (
        <Route  {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;