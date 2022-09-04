import { FunctionComponent } from 'react';

export interface ISucessTextProps {
  sucess: string;
}

const SucessText: FunctionComponent<ISucessTextProps> = (props) => {
  const { sucess } = props;

  return sucess === '' ? null : <small style={{ color: '#0f0' }}>{sucess}</small>;
};

export default SucessText;
