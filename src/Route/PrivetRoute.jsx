import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Authentication/Auth';
import { Navigate, useLocation } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    const location=useLocation()

    if (loading) {
        return <MutatingDots 
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor= '#4fa94d'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
      }
      if (user) {
        return children;
      }
      return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivetRoute;