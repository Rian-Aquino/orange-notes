import { FunctionComponent, useEffect, useReducer, useState } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Loading from './components/Loading';
import Routes from './config/routes';
import { initialUserState, UserContextProvider, userReducer } from './contexts/user';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    CheckLocalStorageForCredentials();
  }, []);

  const CheckLocalStorageForCredentials = () => {
    const fire_token = localStorage.getItem('fire_token');

    if (fire_token === null) {
      userDispatch({
        type: 'logout',
        payload: initialUserState
      });

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      /** Validação de Token com o backend */
    }
  };

  const userContextValues = {
    userState,
    userDispatch
  };

  if (loading) return <Loading />;

  return (
    <UserContextProvider value={userContextValues}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
