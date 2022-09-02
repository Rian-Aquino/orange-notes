import { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './config/routes';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
  return useRoutes(routes);
};

export default App;
