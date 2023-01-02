import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from 'actions';
import jwt_decode from 'jwt-decode';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({ children, dispatch }) => {

    const checkAuthState = () => {
        alert('Checking Auth State');
    }


    const signIn = (loginData) => {
        return loginUser(loginData)
            .then(token => {
                localStorage.setItem('bwm_token', token);
                const decodedToken = jwt_decode(token);
                dispatch({
                    type: 'USER_AUTHENTICATED',
                    username: decodedToken.username || ''
                })
                return token;
            })
    }

    const authApi = {
        signIn, checkAuthState
    }

    return (
        <AuthContext.Provider value={authApi}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
    return useContext(AuthContext);
  }

export const withAuth = Component => props => (
    <AuthContext.Consumer>
        {authApi => <Component {...props} auth={authApi} />}
    </AuthContext.Consumer>
)