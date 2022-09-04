import { FunctionComponent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from 'firebase/auth';

import logging from '../../config/logging';
import { Providers } from '../../config/firebase';
import UserContext from '../../contexts/user';
import IPageProps from '../../interfaces/page';
import { SignInWithSocialMedia as SocialMediaPopup } from '../../modules/auth';
import Loading from '../../components/Loading';

const SignIn: FunctionComponent<IPageProps> = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const SignInWithSocialMedia = (provider: AuthProvider) => {
    if (error !== '') setError('');

    setAuthenticating(true);

    SocialMediaPopup(provider)
      .then(async (result) => {
        logging.info(result);

        const { user } = result;

        if (user) {
          let uid = user.uid;
          let name = user.displayName;

          if (name) {
            try {
              let fire_token = await user.getIdToken();

              /** Autententicar com o backend */
            } catch (error) {
              setError('Token inválido');
              logging.error(error);
              setAuthenticating(false);
            }
          } else {
            setError('O usuário logado não possui um nome.');
            setAuthenticating(false);
          }
        } else {
          setError('O usuário não existe ou não foi encontrado. Por favor, tente uma outra conta.');
          setAuthenticating(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setAuthenticating(false);
      });
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button disabled={authenticating} onClick={() => SignInWithSocialMedia(Providers.google)}>
        Entrar com Google
      </button>

      {authenticating && <Loading />}
    </div>
  );
};

export default SignIn;
