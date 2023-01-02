import React from 'react';
import { connect } from 'react-redux';
import { loginUser, userAuthenticated  } from 'actions';
import jwt_decode from 'jwt-decode';
import moment from 'moment';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({ children, dispatch }) => {

    const checkAuthState = () => {
        if(localStorage.getItem('bwm_token')){
            const decodedToken = jwt_decode(localStorage.getItem('bwm_token'));
            if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {
              dispatch(userAuthenticated(decodedToken))
            }
        }

      }
    
      const getExpiration = (decodedToken) => {
        return moment.unix(decodedToken.exp);
      }

      const signOut = () => {
        localStorage.removeItem('bwm_token');
        dispatch({type: 'USER_SIGNED_OUT'});
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

    const isAuthenticated = () => {
        const token = localStorage.getItem('bwm_token');
        if (!token) { return false; }
        const decodedToken = jwt_decode(token);
        return decodedToken && moment().isBefore(getExpiration(decodedToken));
      }
    
    
    const authApi = {
        signIn, checkAuthState, signOut, isAuthenticated
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