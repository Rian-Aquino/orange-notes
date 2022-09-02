import { RouteObject } from 'react-router-dom';

export default interface IRoute extends RouteObject {
  name: string;
  auth: boolean;
  props?: any;
}
