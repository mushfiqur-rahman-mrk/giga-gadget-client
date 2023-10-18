import  { createContext } from 'react';
import PropTypes from 'prop-types';


export const AuthContext=createContext(null)

const Auth = ({children}) => {


    const authinfo={}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

Auth.propTypes = {
    children: PropTypes.node,
};

export default Auth;