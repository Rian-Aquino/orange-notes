import { FunctionComponent } from 'react';

export interface IErrorTextProps {
  error: string;
}

const ErrorText: FunctionComponent<IErrorTextProps> = (props) => {
  const { error } = props;

  return error === '' ? null : <small style={{ color: '#f00' }}>{error}</small>;
};

export default ErrorText;
