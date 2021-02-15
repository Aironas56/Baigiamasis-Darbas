import {Route, Redirect, useLocation} from "react-router-dom";
import _ from 'lodash'
import {useSelector} from "react-redux";
import React from "react";


export default ({ children, roles, ...props}) => {
    const user = useSelector(state => state.user.userData)
    const location = useLocation()

    const authorized = roles ? !!_.intersection(user?.roles, roles).length : !!user

    return (
        <Route {...props}>
            {
                authorized ? children : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: location
                            }
                        }
                        }
                    />
                )
            }
        </Route>
    )
}