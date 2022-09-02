import IRoute from '../interfaces/route';
import Landing from '../pages/Landing';
import Panel from '../pages/Panel';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const authRoutes: IRoute[] = [
  {
    name: 'SignIn',
    path: '/signin',
    element: <SignIn />,
    auth: false
  },
  {
    name: 'SignUp',
    path: '/signup',
    element: <SignUp />,
    auth: false
  }
];

const appRoutes: IRoute[] = [
  {
    name: 'Panel',
    path: '/panel',
    element: <Panel />,
    auth: true
  }
];

const mainRoutes: IRoute[] = [
  {
    name: 'Landing',
    path: '/',
    element: <Landing />,
    auth: false
  }
];

const routes: IRoute[] = [...mainRoutes, ...authRoutes, ...appRoutes];

export default routes;
