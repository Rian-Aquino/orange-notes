import { FunctionComponent, PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import logging from '../../config/logging';
import UserContext from '../../contexts/user';

export interface IAuthRouteProps extends PropsWithChildren {}

const AuthRoute: FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;

  const { user } = useContext(UserContext).userState;

  if (user._id === '') {
    logging.info('Unauthorized, redirecting...');
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default AuthRoute;
